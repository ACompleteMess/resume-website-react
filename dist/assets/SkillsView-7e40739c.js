import {
  d as m,
  u,
  k as h,
  c as o,
  a as s,
  b as r,
  F as l,
  r as i,
  e as p,
  o as a,
  n as v,
  t as c,
  l as w,
} from "./index-b17e1508.js";
const y = { class: "page-content" },
  b = { class: "container py-5" },
  f = { class: "row" },
  g = { class: "col-lg-10 mx-auto" },
  x = { class: "row" },
  S = { class: "card shadow" },
  B = { class: "card-header bg-primary text-white" },
  T = { class: "mb-0" },
  k = { class: "card-body" },
  V = { class: "d-flex justify-content-between mb-1" },
  z = { class: "text-muted" },
  E = { class: "progress" },
  j = m({
    __name: "SkillsView",
    setup(F) {
      const { skillCategories: d } = u();
      return (
        h(() => {
          setTimeout(() => {
            document.querySelectorAll(".progress-bar").forEach((e) => {
              const t = e.style.width;
              ((e.style.width = "0%"),
                setTimeout(() => {
                  e.style.width = t;
                }, 100));
            });
          }, 500);
        }),
        (_, e) => (
          a(),
          o("div", y, [
            s("div", b, [
              s("div", f, [
                s("div", g, [
                  e[0] ||
                    (e[0] = s(
                      "h2",
                      { class: "text-center mb-5" },
                      [
                        s("i", { class: "fas fa-code me-3" }),
                        r("Skills & Technologies "),
                      ],
                      -1,
                    )),
                  s("div", x, [
                    (a(!0),
                    o(
                      l,
                      null,
                      i(
                        p(d),
                        (t) => (
                          a(),
                          o("div", { key: t.name, class: "col-md-6 mb-4" }, [
                            s("div", S, [
                              s("div", B, [
                                s("h5", T, [
                                  s(
                                    "i",
                                    { class: v(t.icon + " me-2") },
                                    null,
                                    2,
                                  ),
                                  r(c(t.name), 1),
                                ]),
                              ]),
                              s("div", k, [
                                (a(!0),
                                o(
                                  l,
                                  null,
                                  i(
                                    t.skills,
                                    (n) => (
                                      a(),
                                      o("div", { key: n.name, class: "mb-3" }, [
                                        s("div", V, [
                                          s("span", null, c(n.name), 1),
                                          s("span", z, c(n.level) + "%", 1),
                                        ]),
                                        s("div", E, [
                                          s(
                                            "div",
                                            {
                                              class: "progress-bar bg-primary",
                                              style: w({
                                                width: n.level + "%",
                                              }),
                                            },
                                            null,
                                            4,
                                          ),
                                        ]),
                                      ])
                                    ),
                                  ),
                                  128,
                                )),
                              ]),
                            ]),
                          ])
                        ),
                      ),
                      128,
                    )),
                  ]),
                ]),
              ]),
            ]),
          ])
        )
      );
    },
  });
export { j as default };
