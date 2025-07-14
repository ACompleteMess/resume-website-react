import {
  d as b,
  u as g,
  m as u,
  c as f,
  a as s,
  b as a,
  t as i,
  e as o,
  p as c,
  q as m,
  v as d,
  i as x,
  o as p,
  _ as y,
} from "./index-b17e1508.js";
const _ = { class: "page-content" },
  k = { class: "container py-5" },
  w = { class: "row" },
  V = { class: "col-lg-8 mx-auto" },
  M = { class: "card shadow" },
  C = { class: "card-body p-5" },
  S = { class: "row" },
  I = { class: "col-md-6 mb-4" },
  q = { class: "d-flex align-items-center mb-3" },
  N = { href: "mailto:erik.stuble11@gmail.com" },
  T = { class: "d-flex align-items-center mb-3" },
  B = { href: "tel:+14408920009" },
  E = { class: "d-flex align-items-center mb-3" },
  U = { class: "d-flex align-items-center" },
  D = ["href"],
  L = { class: "col-md-6" },
  F = { class: "mb-3" },
  G = { class: "mb-3" },
  P = { class: "mb-3" },
  R = { key: 0, class: "contact-success mt-3" },
  $ = b({
    __name: "ContactView",
    setup(j) {
      const { personalInfo: t } = g(),
        l = u({ name: "", email: "", message: "" }),
        r = u(!1),
        v = () => {
          ((r.value = !0),
            (l.value = { name: "", email: "", message: "" }),
            setTimeout(() => {
              r.value = !1;
            }, 5e3));
        };
      return (z, e) => (
        p(),
        f("div", _, [
          s("div", k, [
            s("div", w, [
              s("div", V, [
                e[22] ||
                  (e[22] = s(
                    "h2",
                    { class: "text-center mb-5" },
                    [
                      s("i", { class: "fas fa-envelope me-3" }),
                      a("Get In Touch "),
                    ],
                    -1,
                  )),
                s("div", M, [
                  s("div", C, [
                    s("div", S, [
                      s("div", I, [
                        e[15] ||
                          (e[15] = s(
                            "h5",
                            { class: "text-primary mb-4" },
                            "Contact Information",
                            -1,
                          )),
                        s("div", q, [
                          e[5] ||
                            (e[5] = s(
                              "i",
                              {
                                class:
                                  "fas fa-envelope text-primary me-3 fa-lg",
                              },
                              null,
                              -1,
                            )),
                          s("div", null, [
                            e[3] || (e[3] = s("strong", null, "Email:", -1)),
                            e[4] || (e[4] = s("br", null, null, -1)),
                            s("a", N, i(o(t).email), 1),
                          ]),
                        ]),
                        s("div", T, [
                          e[8] ||
                            (e[8] = s(
                              "i",
                              { class: "fas fa-phone text-primary me-3 fa-lg" },
                              null,
                              -1,
                            )),
                          s("div", null, [
                            e[6] || (e[6] = s("strong", null, "Phone:", -1)),
                            e[7] || (e[7] = s("br", null, null, -1)),
                            s("a", B, i(o(t).phone), 1),
                          ]),
                        ]),
                        s("div", E, [
                          e[11] ||
                            (e[11] = s(
                              "i",
                              {
                                class:
                                  "fas fa-map-marker-alt text-primary me-3 fa-lg",
                              },
                              null,
                              -1,
                            )),
                          s("div", null, [
                            e[9] || (e[9] = s("strong", null, "Location:", -1)),
                            e[10] || (e[10] = s("br", null, null, -1)),
                            a(" " + i(o(t).location), 1),
                          ]),
                        ]),
                        s("div", U, [
                          e[14] ||
                            (e[14] = s(
                              "i",
                              {
                                class:
                                  "fab fa-linkedin text-primary me-3 fa-lg",
                              },
                              null,
                              -1,
                            )),
                          s("div", null, [
                            e[12] ||
                              (e[12] = s("strong", null, "LinkedIn:", -1)),
                            e[13] || (e[13] = s("br", null, null, -1)),
                            s(
                              "a",
                              {
                                href: `https://${o(t).linkedin}`,
                                target: "_blank",
                              },
                              i(o(t).linkedin),
                              9,
                              D,
                            ),
                          ]),
                        ]),
                      ]),
                      s("div", L, [
                        e[21] ||
                          (e[21] = s(
                            "h5",
                            { class: "text-primary mb-4" },
                            "Send Message",
                            -1,
                          )),
                        s(
                          "form",
                          { onSubmit: c(v, ["prevent"]) },
                          [
                            s("div", F, [
                              e[16] ||
                                (e[16] = s(
                                  "label",
                                  { for: "name", class: "form-label" },
                                  "Name",
                                  -1,
                                )),
                              m(
                                s(
                                  "input",
                                  {
                                    type: "text",
                                    class: "form-control",
                                    id: "name",
                                    "onUpdate:modelValue":
                                      e[0] ||
                                      (e[0] = (n) => (l.value.name = n)),
                                    required: "",
                                  },
                                  null,
                                  512,
                                ),
                                [[d, l.value.name]],
                              ),
                            ]),
                            s("div", G, [
                              e[17] ||
                                (e[17] = s(
                                  "label",
                                  { for: "email", class: "form-label" },
                                  "Email",
                                  -1,
                                )),
                              m(
                                s(
                                  "input",
                                  {
                                    type: "email",
                                    class: "form-control",
                                    id: "email",
                                    "onUpdate:modelValue":
                                      e[1] ||
                                      (e[1] = (n) => (l.value.email = n)),
                                    required: "",
                                  },
                                  null,
                                  512,
                                ),
                                [[d, l.value.email]],
                              ),
                            ]),
                            s("div", P, [
                              e[18] ||
                                (e[18] = s(
                                  "label",
                                  { for: "message", class: "form-label" },
                                  "Message",
                                  -1,
                                )),
                              m(
                                s(
                                  "textarea",
                                  {
                                    class: "form-control",
                                    id: "message",
                                    rows: "4",
                                    "onUpdate:modelValue":
                                      e[2] ||
                                      (e[2] = (n) => (l.value.message = n)),
                                    required: "",
                                  },
                                  null,
                                  512,
                                ),
                                [[d, l.value.message]],
                              ),
                            ]),
                            e[19] ||
                              (e[19] = s(
                                "button",
                                { type: "submit", class: "btn btn-primary" },
                                [
                                  s("i", { class: "fas fa-paper-plane me-2" }),
                                  a("Send Message "),
                                ],
                                -1,
                              )),
                          ],
                          32,
                        ),
                        r.value
                          ? (p(),
                            f(
                              "div",
                              R,
                              e[20] ||
                                (e[20] = [
                                  s(
                                    "i",
                                    { class: "fas fa-check-circle me-2" },
                                    null,
                                    -1,
                                  ),
                                  a("Message sent successfully! "),
                                ]),
                            ))
                          : x("", !0),
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
const H = y($, [["__scopeId", "data-v-65410d91"]]);
export { H as default };
