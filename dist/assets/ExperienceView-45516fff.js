import {
  d,
  u as _,
  c as a,
  a as s,
  b as n,
  F as l,
  r as p,
  e as m,
  f as u,
  o as c,
  t as o,
  g as h,
  w as b,
  _ as f,
} from "./index-b17e1508.js";
const v = { class: "page-content" },
  x = { class: "container py-5" },
  y = { class: "row" },
  w = { class: "col-lg-10 mx-auto" },
  g = { class: "row" },
  V = { class: "card h-100 shadow-sm hover-card" },
  k = { class: "card-body" },
  E = { class: "card-title text-primary" },
  B = { class: "card-subtitle mb-2 text-muted" },
  C = { class: "card-text" },
  N = { class: "card-text" },
  D = d({
    __name: "ExperienceView",
    setup(F) {
      const { experiences: i } = _();
      return (S, e) => {
        const r = u("router-link");
        return (
          c(),
          a("div", v, [
            s("div", x, [
              s("div", y, [
                s("div", w, [
                  e[1] ||
                    (e[1] = s(
                      "h2",
                      { class: "text-center mb-5" },
                      [
                        s("i", { class: "fas fa-briefcase me-3" }),
                        n("Work Experience "),
                      ],
                      -1,
                    )),
                  s("div", g, [
                    (c(!0),
                    a(
                      l,
                      null,
                      p(
                        m(i),
                        (t) => (
                          c(),
                          a("div", { key: t.id, class: "col-md-6 mb-4" }, [
                            s("div", V, [
                              s("div", k, [
                                s("h5", E, o(t.company), 1),
                                s("h6", B, o(t.position), 1),
                                s("p", C, o(t.duration), 1),
                                s(
                                  "p",
                                  N,
                                  o(t.description.substring(0, 100)) + "...",
                                  1,
                                ),
                                h(
                                  r,
                                  {
                                    to: `/experience/${t.id}`,
                                    class: "btn btn-outline-primary btn-sm",
                                  },
                                  {
                                    default: b(
                                      () =>
                                        e[0] ||
                                        (e[0] = [
                                          s(
                                            "i",
                                            { class: "fas fa-eye me-1" },
                                            null,
                                            -1,
                                          ),
                                          n("View Details "),
                                        ]),
                                    ),
                                    _: 2,
                                    __: [0],
                                  },
                                  1032,
                                  ["to"],
                                ),
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
        );
      };
    },
  });
const L = f(D, [["__scopeId", "data-v-1e7a56db"]]);
export { L as default };
