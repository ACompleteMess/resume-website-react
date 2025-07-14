import http from 'http';

const FRONTEND_URL = 'http://localhost:9000';
const BACKEND_URL = 'http://localhost:9001/api/health';

function testEndpoint(url, name) {
  return new Promise((resolve, reject) => {
    const req = http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        if (res.statusCode === 200) {
          console.log(`✅ ${name} is responding (${res.statusCode})`);
          resolve(true);
        } else {
          console.log(`❌ ${name} returned status ${res.statusCode}`);
          reject(new Error(`${name} returned status ${res.statusCode}`));
        }
      });
    });

    req.on('error', (err) => {
      console.log(`❌ ${name} is not responding: ${err.message}`);
      reject(err);
    });

    req.setTimeout(10000, () => {
      console.log(`❌ ${name} request timed out`);
      req.destroy();
      reject(new Error(`${name} request timed out`));
    });
  });
}

async function runDockerTests() {
  console.log('🐳 Running Docker container tests...\n');
  
  try {
    // Test both endpoints
    await Promise.all([
      testEndpoint(FRONTEND_URL, 'Frontend Container'),
      testEndpoint(BACKEND_URL, 'Backend Container')
    ]);
    
    console.log('\n🎉 All Docker containers are working!');
    console.log('Frontend: http://localhost:9000');
    console.log('Backend:  http://localhost:9001');
    
    // Test container communication
    console.log('\n🔗 Testing container communication...');
    await testEndpoint('http://localhost:9001/api/hello', 'Backend API');
    
    console.log('\n✅ Docker setup is complete and working!');
    
  } catch (error) {
    console.log('\n💥 Docker test failed:', error.message);
    console.log('\nTroubleshooting tips:');
    console.log('1. Make sure Docker containers are running: docker ps');
    console.log('2. Check container logs: docker-compose logs');
    console.log('3. Restart containers: docker-compose restart');
    process.exit(1);
  }
}

runDockerTests(); 