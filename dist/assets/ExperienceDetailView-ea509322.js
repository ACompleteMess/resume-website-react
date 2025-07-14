import {
  d as f,
  u as x,
  h,
  c as o,
  a as e,
  b as i,
  t as a,
  g as c,
  w as u,
  F as m,
  r as p,
  i as b,
  j as y,
  f as g,
  o as n,
} from "./index-b17e1508.js";
const k = { class: "page-content" },
  w = { class: "container py-5" },
  B = { class: "row" },
  E = { class: "col-lg-10 mx-auto" },
  V = { key: 0, class: "card shadow" },
  C = { class: "card-header bg-primary text-white" },
  N = { class: "d-flex justify-content-between align-items-center" },
  D = { class: "mb-0" },
  j = { class: "card-body p-4" },
  F = { class: "row mb-4" },
  I = { class: "col-md-6" },
  R = { class: "text-primary" },
  S = { class: "text-muted mb-2" },
  T = { class: "text-muted" },
  A = { class: "col-md-6" },
  K = { class: "d-flex flex-wrap gap-2" },
  L = { class: "mb-4" },
  U = { key: 0 },
  q = { key: 1, class: "text-center" },
  H = f({
    __name: "ExperienceDetailView",
    setup(z) {
      const _ = y(),
        { getExperienceById: v } = x(),
        t = h(() => {
          const d = parseInt(_.params.id);
          return v(d);
        });
      return (d, s) => {
        const r = g("router-link");
        return (
          n(),
          o("div", k, [
            e("div", w, [
              e("div", B, [
                e("div", E, [
                  t.value
                    ? (n(),
                      o("div", V, [
                        e("div", C, [
                          e("div", N, [
                            e("h4", D, [
                              s[0] ||
                                (s[0] = e(
                                  "i",
                                  { class: "fas fa-building me-2" },
                                  null,
                                  -1,
                                )),
                              i(a(t.value.company), 1),
                            ]),
                            c(
                              r,
                              {
                                to: "/experience",
                                class: "btn btn-light btn-sm",
                              },
                              {
                                default: u(
                                  () =>
                                    s[1] ||
                                    (s[1] = [
                                      e(
                                        "i",
                                        { class: "fas fa-arrow-left me-1" },
                                        null,
                                        -1,
                                      ),
                                      i("Back "),
                                    ]),
                                ),
                                _: 1,
                                __: [1],
                              },
                            ),
                          ]),
                        ]),
                        e("div", j, [
                          e("div", F, [
                            e("div", I, [
                              e("h5", R, a(t.value.position), 1),
                              e("p", S, [
                                s[2] ||
                                  (s[2] = e(
                                    "i",
                                    { class: "fas fa-calendar me-2" },
                                    null,
                                    -1,
                                  )),
                                i(a(t.value.duration), 1),
                              ]),
                              e("p", T, [
                                s[3] ||
                                  (s[3] = e(
                                    "i",
                                    { class: "fas fa-map-marker-alt me-2" },
                                    null,
                                    -1,
                                  )),
                                i(a(t.value.location), 1),
                              ]),
                            ]),
                            e("div", A, [
                              s[4] ||
                                (s[4] = e(
                                  "h6",
                                  null,
                                  "Technologies Used:",
                                  -1,
                                )),
                              e("div", K, [
                                (n(!0),
                                o(
                                  m,
                                  null,
                                  p(
                                    t.value.technologies,
                                    (l) => (
                                      n(),
                                      o(
                                        "span",
                                        { key: l, class: "badge bg-secondary" },
                                        a(l),
                                        1,
                                      )
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                            ]),
                          ]),
                          e("div", L, [
                            s[5] || (s[5] = e("h6", null, "Description:", -1)),
                            e("p", null, a(t.value.description), 1),
                          ]),
                          t.value.achievements
                            ? (n(),
                              o("div", U, [
                                s[6] ||
                                  (s[6] = e(
                                    "h6",
                                    null,
                                    "Key Achievements:",
                                    -1,
                                  )),
                                e("ul", null, [
                                  (n(!0),
                                  o(
                                    m,
                                    null,
                                    p(
                                      t.value.achievements,
                                      (l) => (
                                        n(),
                                        o("li", { key: l }, a(l), 1)
                                      ),
                                    ),
                                    128,
                                  )),
                                ]),
                              ]))
                            : b("", !0),
                        ]),
                      ]))
                    : (n(),
                      o("div", q, [
                        s[8] ||
                          (s[8] = e("h3", null, "Experience not found", -1)),
                        c(
                          r,
                          { to: "/experience", class: "btn btn-primary" },
                          {
                            default: u(
                              () => s[7] || (s[7] = [i("Back to Experiences")]),
                            ),
                            _: 1,
                            __: [7],
                          },
                        ),
                      ])),
                ]),
              ]),
            ]),
          ])
        );
      };
    },
  });
export { H as default };
