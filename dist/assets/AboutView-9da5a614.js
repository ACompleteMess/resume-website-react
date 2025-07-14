import {
  d as l,
  u as o,
  c as r,
  a as s,
  b as a,
  t as i,
  e as n,
  o as d,
} from "./index-b17e1508.js";
const u = { class: "page-content" },
  m = { class: "container py-5" },
  c = { class: "row" },
  p = { class: "col-lg-8 mx-auto" },
  f = { class: "card shadow" },
  g = { class: "card-body p-5" },
  y = { class: "row" },
  v = { class: "col-md-4 text-center mb-4" },
  x = { class: "text-muted" },
  _ = { class: "col-md-8" },
  b = { class: "list-unstyled" },
  k = l({
    __name: "AboutView",
    setup(h) {
      const { personalInfo: e } = o();
      return (w, t) => (
        d(),
        r("div", u, [
          s("div", m, [
            s("div", c, [
              s("div", p, [
                t[8] ||
                  (t[8] = s(
                    "h2",
                    { class: "text-center mb-5" },
                    [s("i", { class: "fas fa-user me-3" }), a("About Me ")],
                    -1,
                  )),
                s("div", f, [
                  s("div", g, [
                    s("div", y, [
                      s("div", v, [
                        t[0] ||
                          (t[0] = s(
                            "i",
                            {
                              class:
                                "fas fa-user-circle fa-8x text-primary mb-3",
                            },
                            null,
                            -1,
                          )),
                        s("h4", null, i(n(e).name), 1),
                        s("p", x, i(n(e).title), 1),
                      ]),
                      s("div", _, [
                        t[5] ||
                          (t[5] = s("h5", null, "Professional Summary", -1)),
                        t[6] ||
                          (t[6] = s(
                            "p",
                            { class: "mb-4" },
                            " I am a strategic, empathetic leader skilled at building developer friendly governance systems, aligning cross-functional stakeholders and guiding platform programs through ambiguity and hyper growth. ",
                            -1,
                          )),
                        t[7] || (t[7] = s("h5", null, "Education", -1)),
                        s("ul", b, [
                          s("li", null, [
                            t[1] ||
                              (t[1] = s(
                                "i",
                                {
                                  class:
                                    "fas fa-graduation-cap text-primary me-2",
                                },
                                null,
                                -1,
                              )),
                            a(i(n(e).education.degree), 1),
                          ]),
                          s("li", null, [
                            t[2] ||
                              (t[2] = s(
                                "i",
                                {
                                  class: "fas fa-university text-primary me-2",
                                },
                                null,
                                -1,
                              )),
                            a(
                              i(n(e).education.school) +
                                ", " +
                                i(n(e).education.years),
                              1,
                            ),
                          ]),
                          t[3] ||
                            (t[3] = s(
                              "li",
                              null,
                              [
                                s("i", {
                                  class:
                                    "fas fa-graduation-cap text-primary me-2",
                                }),
                                a(
                                  "Electrical Engineering & Engineering Management",
                                ),
                              ],
                              -1,
                            )),
                          t[4] ||
                            (t[4] = s(
                              "li",
                              null,
                              [
                                s("i", {
                                  class: "fas fa-university text-primary me-2",
                                }),
                                a("Miami University, 2013"),
                              ],
                              -1,
                            )),
                        ]),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ])
      );
    },
  });
export { k as default };
