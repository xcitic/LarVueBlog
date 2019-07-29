(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard/SideNav.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard/SideNav.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SideNav'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard/TopNav.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard/TopNav.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TopNav'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Dashboard_SideNav_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Dashboard/SideNav.vue */ "./resources/js/components/Dashboard/SideNav.vue");
/* harmony import */ var _components_Dashboard_TopNav_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Dashboard/TopNav.vue */ "./resources/js/components/Dashboard/TopNav.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    SideNav: _components_Dashboard_SideNav_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    TopNav: _components_Dashboard_TopNav_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard/SideNav.vue?vue&type=template&id=3eef8f54&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard/SideNav.vue?vue&type=template&id=3eef8f54&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "ul",
      {
        staticClass: "side-nav fixed custom-scrollbar",
        attrs: { id: "slide-out" }
      },
      [
        _c("li", [
          _c("div", { staticClass: "user-box" }, [
            _c("img", {
              staticClass: "img-fluid rounded-circle",
              attrs: {
                src: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5.jpg"
              }
            }),
            _vm._v(" "),
            _c("p", { staticClass: "user text-center black-text" }, [
              _vm._v("Jane Doe")
            ])
          ])
        ]),
        _vm._v(" "),
        _c("li", [
          _c("ul", { staticClass: "collapsible collapsible-accordion" }, [
            _c("li", [
              _c(
                "a",
                { staticClass: "collapsible-header waves-effect arrow-r" },
                [
                  _c("i", { staticClass: "fa fa-code" }),
                  _vm._v(" Dashboards"),
                  _c("i", { staticClass: "fa fa-angle-down rotate-icon" })
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "collapsible-body" }, [
                _c("ul", [
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "waves-effect",
                        attrs: { href: "home.html" }
                      },
                      [_vm._v("Dahboard v1")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "waves-effect",
                        attrs: { href: "home%20v2.html" }
                      },
                      [_vm._v("Dahboard v2")]
                    )
                  ]),
                  _vm._v(" "),
                  _c("li", [
                    _c(
                      "a",
                      {
                        staticClass: "waves-effect",
                        attrs: { href: "home%20v3.html" }
                      },
                      [_vm._v("Dahboard v3")]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard/TopNav.vue?vue&type=template&id=4480a518&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Dashboard/TopNav.vue?vue&type=template&id=4480a518&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass:
        "navbar fixed-top navbar-toggleable-md navbar-dark scrolling-navbar double-nav"
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("ul", { staticClass: "nav navbar-nav nav-flex-icons ml-auto" }, [
        _c(
          "li",
          { staticClass: "nav-item" },
          [
            _c(
              "router-link",
              { staticClass: "nav-link", attrs: { to: { name: "home" } } },
              [
                _c("i", { staticClass: "fa fa-comments-o" }),
                _vm._v(" "),
                _c("span", { staticClass: "hidden-sm-down" }, [
                  _vm._v("Go To Blog")
                ])
              ]
            )
          ],
          1
        ),
        _vm._v(" "),
        _vm._m(2)
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "float-left" }, [
      _c(
        "a",
        {
          staticClass: "button-collapse",
          attrs: { href: "#", "data-activates": "slide-out" }
        },
        [_c("i", { staticClass: "fa fa-bars" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ol", { staticClass: "breadcrumb hidden-lg-down" }, [
      _c("li", { staticClass: "breadcrumb-item" }, [
        _c("a", { attrs: { href: "#" } }, [_vm._v("Dashboard")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown" }, [
      _c(
        "a",
        {
          staticClass: "nav-link dropdown-toggle",
          attrs: {
            href: "#",
            id: "userDropdown",
            "data-toggle": "dropdown",
            "aria-haspopup": "true",
            "aria-expanded": "false"
          }
        },
        [
          _c("i", { staticClass: "fa fa-user" }),
          _vm._v(" "),
          _c("span", { staticClass: "hidden-sm-down" }, [_vm._v("Profile")])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "dropdown-menu dropdown-ins dropdown-menu-right",
          attrs: { "aria-labelledby": "userDropdown" }
        },
        [
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _vm._v("Log Out")
          ]),
          _vm._v(" "),
          _c("a", { staticClass: "dropdown-item", attrs: { href: "#" } }, [
            _vm._v("My Profile")
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [_c("SideNav"), _vm._v(" "), _c("TopNav"), _vm._v(" "), _vm._m(0)],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-12" }, [
          _c("div", { staticClass: "card card-cascade narrower" }, [
            _c("div", { staticClass: "admin-panel indigo-admin-panel" }, [
              _c("div", { staticClass: "row m-b-0" }, [
                _c("div", { staticClass: "col-md-12" }, [
                  _c("div", { staticClass: "card-block p-y-0" }, [
                    _c(
                      "table",
                      {
                        staticClass: "table table-hover cascading-table m-b-0"
                      },
                      [
                        _c("thead", [
                          _c("tr", [
                            _c("th", [_vm._v("#")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("Type")]),
                            _vm._v(" "),
                            _c("th", [_vm._v("ID")]),
                            _vm._v(" "),
                            _c("th")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("tbody", [
                          _c("tr", { staticClass: "none-top-border" }, [
                            _c("td", [
                              _c("fieldset", { staticClass: "form-group" }, [
                                _c("input", {
                                  attrs: { type: "checkbox", id: "checkbox1" }
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "checkbox1" } })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [_c("p", [_vm._v("Side Modal")])]),
                            _vm._v(" "),
                            _c("td", [_c("p", [_vm._v("Modal-id-1")])]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "a",
                                {
                                  staticClass: "blue-text",
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "",
                                    "data-original-title": "See results"
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-eye" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "teal-text",
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "",
                                    "data-original-title": "Edit"
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-pencil" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "red-text",
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "",
                                    "data-original-title": "Remove"
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-times" })]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [
                              _c("fieldset", { staticClass: "form-group" }, [
                                _c("input", {
                                  attrs: { type: "checkbox", id: "checkbox2" }
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "checkbox2" } })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [_c("p", [_vm._v("Standard Modal")])]),
                            _vm._v(" "),
                            _c("td", [_c("p", [_vm._v("Modal-id-2")])]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "a",
                                {
                                  staticClass: "blue-text",
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "",
                                    "data-original-title": "See results"
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-eye" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "teal-text",
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "",
                                    "data-original-title": "Edit"
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-pencil" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "red-text",
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "",
                                    "data-original-title": "Remove"
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-times" })]
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("tr", [
                            _c("td", [
                              _c("fieldset", { staticClass: "form-group" }, [
                                _c("input", {
                                  attrs: { type: "checkbox", id: "checkbox3" }
                                }),
                                _vm._v(" "),
                                _c("label", { attrs: { for: "checkbox3" } })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", [_c("p", [_vm._v("Standard Modal")])]),
                            _vm._v(" "),
                            _c("td", [_c("p", [_vm._v("Modal-id-3")])]),
                            _vm._v(" "),
                            _c("td", [
                              _c(
                                "a",
                                {
                                  staticClass: "blue-text",
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "",
                                    "data-original-title": "See results"
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-eye" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "teal-text",
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "",
                                    "data-original-title": "Edit"
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-pencil" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticClass: "red-text",
                                  attrs: {
                                    "data-toggle": "tooltip",
                                    "data-placement": "top",
                                    title: "",
                                    "data-original-title": "Remove"
                                  }
                                },
                                [_c("i", { staticClass: "fa fa-times" })]
                              )
                            ])
                          ])
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Dashboard/SideNav.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Dashboard/SideNav.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideNav_vue_vue_type_template_id_3eef8f54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideNav.vue?vue&type=template&id=3eef8f54&scoped=true& */ "./resources/js/components/Dashboard/SideNav.vue?vue&type=template&id=3eef8f54&scoped=true&");
/* harmony import */ var _SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideNav.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/SideNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SideNav_vue_vue_type_template_id_3eef8f54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SideNav_vue_vue_type_template_id_3eef8f54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3eef8f54",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/SideNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/SideNav.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Dashboard/SideNav.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard/SideNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard/SideNav.vue?vue&type=template&id=3eef8f54&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/SideNav.vue?vue&type=template&id=3eef8f54&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_template_id_3eef8f54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SideNav.vue?vue&type=template&id=3eef8f54&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard/SideNav.vue?vue&type=template&id=3eef8f54&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_template_id_3eef8f54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SideNav_vue_vue_type_template_id_3eef8f54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Dashboard/TopNav.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Dashboard/TopNav.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNav_vue_vue_type_template_id_4480a518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNav.vue?vue&type=template&id=4480a518&scoped=true& */ "./resources/js/components/Dashboard/TopNav.vue?vue&type=template&id=4480a518&scoped=true&");
/* harmony import */ var _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNav.vue?vue&type=script&lang=js& */ "./resources/js/components/Dashboard/TopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNav_vue_vue_type_template_id_4480a518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopNav_vue_vue_type_template_id_4480a518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4480a518",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Dashboard/TopNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Dashboard/TopNav.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Dashboard/TopNav.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard/TopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Dashboard/TopNav.vue?vue&type=template&id=4480a518&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Dashboard/TopNav.vue?vue&type=template&id=4480a518&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_4480a518_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=template&id=4480a518&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Dashboard/TopNav.vue?vue&type=template&id=4480a518&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_4480a518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_4480a518_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f79daf6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);