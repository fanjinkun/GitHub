webpackHotUpdate("static\\development\\pages\\detail\\issues.js",{

/***/ "./pages/detail/issues.js":
/*!********************************!*\
  !*** ./pages/detail/issues.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/avatar */ "./node_modules/antd/lib/avatar/index.js");
/* harmony import */ var antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/button */ "./node_modules/antd/lib/button/index.js");
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_with_repo_basic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/with-repo-basic */ "./components/with-repo-basic.jsx");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../lib/api */ "./lib/api.js");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../lib/utils */ "./lib/utils.js");












var MDRenderer = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("styles"), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ../../components/MarkdownRenderer */ "./components/MarkdownRenderer.jsx"));
}, {
  loading: function loading() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", null, "Loading");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../../components/MarkdownRenderer */ "./components/MarkdownRenderer.jsx")];
    },
    modules: ['../../components/MarkdownRenderer']
  }
});

function IssueDetail(_ref) {
  var issue = _ref.issue;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2272093704" + " " + "root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(MDRenderer, {
    content: issue.body
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2272093704" + " " + "actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: issue.html_url,
    target: "_blank"
  }, "\u6253\u5F00Issue\u8BA8\u8BBA\u9875\u9762")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2272093704"
  }, ".root.jsx-2272093704{background:#fefefe;padding:20px;}.actions.jsx-2272093704{text-align:right;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmtCLEFBRzhCLEFBSUYsaUJBQ25CLEVBSmUsYUFDZiIsImZpbGUiOiJFOlxc5Liq5Lq66aG555uuXFxnaXRIdWLpobnnm65cXGNvY28tZ2l0aHViXFxwYWdlc1xcZGV0YWlsXFxpc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pZCBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmltcG9ydCB7dXNlU3RhdGUsdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0F2YXRhcixCdXR0b259IGZyb20gJ2FudGQnXHJcbmltcG9ydCB3aXRoUmVwb0Jhc2ljIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aC1yZXBvLWJhc2ljJ1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xyXG5cclxuaW1wb3J0IHsgZ2V0TGFzdFVwZGF0ZWQgfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnXHJcblxyXG5jb25zdCBNRFJlbmRlcmVyID0gZHluYW1pZCgoKT0+aW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL01hcmtkb3duUmVuZGVyZXInKSx7XHJcbiAgbG9hZGluZzooKT0+PHA+TG9hZGluZzwvcD5cclxufSlcclxuXHJcbmZ1bmN0aW9uIElzc3VlRGV0YWlsKHtpc3N1ZX0pe1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPE1EUmVuZGVyZXIgY29udGVudD17aXNzdWUuYm9keX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgPEJ1dHRvbiBocmVmPXtpc3N1ZS5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+5omT5byASXNzdWXorqjorrrpobXpnaI8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIElzc3VlSXRlbSh7aXNzdWV9KXtcclxuICBjb25zdCBbc2hvd0RldGFpbCxzZXRTaG93RGV0YWlsXT11c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbD11c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgc2V0U2hvd0RldGFpbChkZXRhaWw9PiFkZXRhaWwpXHJcbiAgfSxbXSlcclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCIgXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCIgXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjonYWJzb2x1dGUnLHJpZ2h0OjEwLHRvcDoxMH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH1cclxuICAgICAgICAgICAgICA+e3Nob3dEZXRhaWw/J+makOiXjyc6J+afpeeciyd9PC9CdXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxyXG4gICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtnZXRMYXN0VXBkYXRlZChpc3N1ZS51cGRhdGVkX2F0KX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuaXNzdWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWFpbi1pbmZvID4gaDYge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyA+IHNwYW4gKyBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0RldGFpbD88SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPjpudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgIClcclxufVxyXG5mdW5jdGlvbiBJc3N1ZXMgKHtpc3N1ZXN9KXtcclxuICBjb25zb2xlLmxvZyhpc3N1ZXMpXHJcbiAgcmV0dXJuIChcclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XHJcbiAgICAgICAgIHtpc3N1ZXMubWFwKGlzc3VlPT48SXNzdWVJdGVtIGlzc3VlPXtpc3N1ZX0ga2V5PXtpc3N1ZS5pZH0gLz4pfVxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmlzc3VlcyB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvYWRpbmcge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzPWFzeW5jKHtjdHh9KT0+e1xyXG4gIGNvbnN0IHtvd25lcixuYW1lfT1jdHgucXVlcnlcclxuXHJcbiAgY29uc3QgaXNzdWVzUmVwb3M9YXdhaXQgYXBpLnJlcXVlc3Qoe1xyXG4gICAgdXJsOmAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgXHJcbiAgfSxjdHgucmVxLGN0eC5yZXMpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpc3N1ZXM6aXNzdWVzUmVwb3MuZGF0YVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlcG9CYXNpYyhJc3N1ZXMsJ2lzc3VlcycpIl19 */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\pages\\detail\\issues.js */"));
}

function IssueItem(_ref2) {
  var issue = _ref2.issue;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      showDetail = _useState2[0],
      setShowDetail = _useState2[1];

  var toggleShowDetail = Object(react__WEBPACK_IMPORTED_MODULE_6__["useCallback"])(function () {
    setShowDetail(function (detail) {
      return !detail;
    });
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2198506698" + " " + "issue"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default.a, {
    type: "primary",
    size: "small",
    style: {
      position: 'absolute',
      right: 10,
      top: 10
    },
    onClick: toggleShowDetail
  }, showDetail ? '隐藏' : '查看'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2198506698" + " " + "avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_avatar__WEBPACK_IMPORTED_MODULE_2___default.a, {
    src: issue.user.avatar_url,
    shape: "square",
    size: 50
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2198506698" + " " + "main-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h6", {
    className: "jsx-2198506698"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2198506698"
  }, issue.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-2198506698" + " " + "sub-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("span", {
    className: "jsx-2198506698"
  }, "Updated at ", Object(_lib_utils__WEBPACK_IMPORTED_MODULE_10__["getLastUpdated"])(issue.updated_at)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2198506698"
  }, ".issue.jsx-2198506698{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;padding:10px;}.issue.jsx-2198506698:hover{background:#fafafa;}.issue.jsx-2198506698+.issue.jsx-2198506698{border-top:1px solid #eee;}.main-info.jsx-2198506698>h6.jsx-2198506698{max-width:600px;font-size:16px;padding-right:40px;}.avatar.jsx-2198506698{margin-right:20px;}.sub-info.jsx-2198506698{margin-bottom:0;}.sub-info.jsx-2198506698>span.jsx-2198506698+span.jsx-2198506698{display:inline-block;margin-left:20px;font-size:12px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGtCLEFBRzBCLEFBS00sQUFHTyxBQUdWLEFBS0UsQUFHRixBQUdLLGdCQVZOLEFBUWpCLEVBSEEsQ0FYQSxFQWlCbUIsS0FkbkIsS0FJcUIsT0FXSixZQVZqQixHQVdBLHFCQXhCb0Isa0JBQ0wsYUFDZiIsImZpbGUiOiJFOlxc5Liq5Lq66aG555uuXFxnaXRIdWLpobnnm65cXGNvY28tZ2l0aHViXFxwYWdlc1xcZGV0YWlsXFxpc3N1ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pZCBmcm9tICduZXh0L2R5bmFtaWMnXHJcbmltcG9ydCB7dXNlU3RhdGUsdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQge0F2YXRhcixCdXR0b259IGZyb20gJ2FudGQnXHJcbmltcG9ydCB3aXRoUmVwb0Jhc2ljIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2l0aC1yZXBvLWJhc2ljJ1xyXG5cclxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi9saWIvYXBpJ1xyXG5cclxuaW1wb3J0IHsgZ2V0TGFzdFVwZGF0ZWQgfSBmcm9tICcuLi8uLi9saWIvdXRpbHMnXHJcblxyXG5jb25zdCBNRFJlbmRlcmVyID0gZHluYW1pZCgoKT0+aW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL01hcmtkb3duUmVuZGVyZXInKSx7XHJcbiAgbG9hZGluZzooKT0+PHA+TG9hZGluZzwvcD5cclxufSlcclxuXHJcbmZ1bmN0aW9uIElzc3VlRGV0YWlsKHtpc3N1ZX0pe1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgPE1EUmVuZGVyZXIgY29udGVudD17aXNzdWUuYm9keX0gLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb25zXCI+XHJcbiAgICAgICAgPEJ1dHRvbiBocmVmPXtpc3N1ZS5odG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCI+5omT5byASXNzdWXorqjorrrpobXpnaI8L0J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAucm9vdCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmVmZWZlO1xyXG4gICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGlvbnMge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIElzc3VlSXRlbSh7aXNzdWV9KXtcclxuICBjb25zdCBbc2hvd0RldGFpbCxzZXRTaG93RGV0YWlsXT11c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgdG9nZ2xlU2hvd0RldGFpbD11c2VDYWxsYmFjaygoKT0+e1xyXG4gICAgc2V0U2hvd0RldGFpbChkZXRhaWw9PiFkZXRhaWwpXHJcbiAgfSxbXSlcclxuXHJcbiAgIHJldHVybiAoXHJcbiAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3VlXCI+XHJcbiAgICAgICAgICA8QnV0dG9uIFxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCIgXHJcbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCIgXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3twb3NpdGlvbjonYWJzb2x1dGUnLHJpZ2h0OjEwLHRvcDoxMH19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlU2hvd0RldGFpbH1cclxuICAgICAgICAgICAgICA+e3Nob3dEZXRhaWw/J+makOiXjyc6J+afpeeciyd9PC9CdXR0b24+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICA8QXZhdGFyIHNyYz17aXNzdWUudXNlci5hdmF0YXJfdXJsfSBzaGFwZT1cInNxdWFyZVwiIHNpemU9ezUwfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW4taW5mb1wiPlxyXG4gICAgICAgICAgICA8aDY+XHJcbiAgICAgICAgICAgICAgPHNwYW4+e2lzc3VlLnRpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9oNj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic3ViLWluZm9cIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5VcGRhdGVkIGF0IHtnZXRMYXN0VXBkYXRlZChpc3N1ZS51cGRhdGVkX2F0KX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAuaXNzdWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXNzdWU6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlICsgLmlzc3VlIHtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubWFpbi1pbmZvID4gaDYge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnN1Yi1pbmZvIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyA+IHNwYW4gKyBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7c2hvd0RldGFpbD88SXNzdWVEZXRhaWwgaXNzdWU9e2lzc3VlfSAvPjpudWxsfVxyXG4gICAgPC9kaXY+XHJcbiAgIClcclxufVxyXG5mdW5jdGlvbiBJc3N1ZXMgKHtpc3N1ZXN9KXtcclxuICBjb25zb2xlLmxvZyhpc3N1ZXMpXHJcbiAgcmV0dXJuIChcclxuICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXNzdWVzXCI+XHJcbiAgICAgICAgIHtpc3N1ZXMubWFwKGlzc3VlPT48SXNzdWVJdGVtIGlzc3VlPXtpc3N1ZX0ga2V5PXtpc3N1ZS5pZH0gLz4pfVxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmlzc3VlcyB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWFyY2gge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvYWRpbmcge1xyXG4gICAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5Jc3N1ZXMuZ2V0SW5pdGlhbFByb3BzPWFzeW5jKHtjdHh9KT0+e1xyXG4gIGNvbnN0IHtvd25lcixuYW1lfT1jdHgucXVlcnlcclxuXHJcbiAgY29uc3QgaXNzdWVzUmVwb3M9YXdhaXQgYXBpLnJlcXVlc3Qoe1xyXG4gICAgdXJsOmAvcmVwb3MvJHtvd25lcn0vJHtuYW1lfS9pc3N1ZXNgXHJcbiAgfSxjdHgucmVxLGN0eC5yZXMpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBpc3N1ZXM6aXNzdWVzUmVwb3MuZGF0YVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlcG9CYXNpYyhJc3N1ZXMsJ2lzc3VlcycpIl19 */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\pages\\detail\\issues.js */")), showDetail ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IssueDetail, {
    issue: issue
  }) : null);
}

function Issues(_ref3) {
  var issues = _ref3.issues;
  console.log(issues);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2212480553" + " " + "root"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2212480553" + " " + "issues"
  }, issues.map(function (issue) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(IssueItem, {
      issue: issue,
      key: issue.id
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2212480553"
  }, ".issues.jsx-2212480553{border:1px solid #eee;border-radius:5px;margin-bottom:20px;margin-top:20px;}.search.jsx-2212480553{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.loading.jsx-2212480553{height:400px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFzkuKrkurrpobnnm65cXGdpdEh1YumhueebrlxcY29jby1naXRodWJcXHBhZ2VzXFxkZXRhaWxcXGlzc3Vlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxR21CLEFBR2lDLEFBTVQsQUFHQSxhQUNBLFNBVEssa0JBQ0MsbUJBQ0gsZUFJbEIsQ0FIQSxZQU9xQiw2RkFDSSxtR0FDekIiLCJmaWxlIjoiRTpcXOS4quS6uumhueebrlxcZ2l0SHVi6aG555uuXFxjb2NvLWdpdGh1YlxccGFnZXNcXGRldGFpbFxcaXNzdWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWQgZnJvbSAnbmV4dC9keW5hbWljJ1xyXG5pbXBvcnQge3VzZVN0YXRlLHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHtBdmF0YXIsQnV0dG9ufSBmcm9tICdhbnRkJ1xyXG5pbXBvcnQgd2l0aFJlcG9CYXNpYyBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dpdGgtcmVwby1iYXNpYydcclxuXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vbGliL2FwaSdcclxuXHJcbmltcG9ydCB7IGdldExhc3RVcGRhdGVkIH0gZnJvbSAnLi4vLi4vbGliL3V0aWxzJ1xyXG5cclxuY29uc3QgTURSZW5kZXJlciA9IGR5bmFtaWQoKCk9PmltcG9ydCgnLi4vLi4vY29tcG9uZW50cy9NYXJrZG93blJlbmRlcmVyJykse1xyXG4gIGxvYWRpbmc6KCk9PjxwPkxvYWRpbmc8L3A+XHJcbn0pXHJcblxyXG5mdW5jdGlvbiBJc3N1ZURldGFpbCh7aXNzdWV9KXtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgIDxNRFJlbmRlcmVyIGNvbnRlbnQ9e2lzc3VlLmJvZHl9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWN0aW9uc1wiPlxyXG4gICAgICAgIDxCdXR0b24gaHJlZj17aXNzdWUuaHRtbF91cmx9IHRhcmdldD1cIl9ibGFua1wiPuaJk+W8gElzc3Vl6K6o6K666aG16Z2iPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLnJvb3Qge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZlZmVmZTtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3Rpb25zIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBJc3N1ZUl0ZW0oe2lzc3VlfSl7XHJcbiAgY29uc3QgW3Nob3dEZXRhaWwsc2V0U2hvd0RldGFpbF09dXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IHRvZ2dsZVNob3dEZXRhaWw9dXNlQ2FsbGJhY2soKCk9PntcclxuICAgIHNldFNob3dEZXRhaWwoZGV0YWlsPT4hZGV0YWlsKVxyXG4gIH0sW10pXHJcblxyXG4gICByZXR1cm4gKFxyXG4gICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpc3N1ZVwiPlxyXG4gICAgICAgICAgPEJ1dHRvbiBcclxuICAgICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiIFxyXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiIFxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7cG9zaXRpb246J2Fic29sdXRlJyxyaWdodDoxMCx0b3A6MTB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNob3dEZXRhaWx9XHJcbiAgICAgICAgICAgICAgPntzaG93RGV0YWlsPyfpmpDol48nOifmn6XnnIsnfTwvQnV0dG9uPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJcIj5cclxuICAgICAgICAgICAgPEF2YXRhciBzcmM9e2lzc3VlLnVzZXIuYXZhdGFyX3VybH0gc2hhcGU9XCJzcXVhcmVcIiBzaXplPXs1MH0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLWluZm9cIj5cclxuICAgICAgICAgICAgPGg2PlxyXG4gICAgICAgICAgICAgIDxzcGFuPntpc3N1ZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvaDY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInN1Yi1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+VXBkYXRlZCBhdCB7Z2V0TGFzdFVwZGF0ZWQoaXNzdWUudXBkYXRlZF9hdCl9PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgLmlzc3VlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmlzc3VlOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pc3N1ZSArIC5pc3N1ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm1haW4taW5mbyA+IGg2IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmF2YXRhciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWItaW5mbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuc3ViLWluZm8gPiBzcGFuICsgc3BhbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge3Nob3dEZXRhaWw/PElzc3VlRGV0YWlsIGlzc3VlPXtpc3N1ZX0gLz46bnVsbH1cclxuICAgIDwvZGl2PlxyXG4gICApXHJcbn1cclxuZnVuY3Rpb24gSXNzdWVzICh7aXNzdWVzfSl7XHJcbiAgY29uc29sZS5sb2coaXNzdWVzKVxyXG4gIHJldHVybiAoXHJcbiAgICAgPGRpdiBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlzc3Vlc1wiPlxyXG4gICAgICAgICB7aXNzdWVzLm1hcChpc3N1ZT0+PElzc3VlSXRlbSBpc3N1ZT17aXNzdWV9IGtleT17aXNzdWUuaWR9IC8+KX1cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5pc3N1ZXMge1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2FkaW5nIHtcclxuICAgICAgICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuSXNzdWVzLmdldEluaXRpYWxQcm9wcz1hc3luYyh7Y3R4fSk9PntcclxuICBjb25zdCB7b3duZXIsbmFtZX09Y3R4LnF1ZXJ5XHJcblxyXG4gIGNvbnN0IGlzc3Vlc1JlcG9zPWF3YWl0IGFwaS5yZXF1ZXN0KHtcclxuICAgIHVybDpgL3JlcG9zLyR7b3duZXJ9LyR7bmFtZX0vaXNzdWVzYFxyXG4gIH0sY3R4LnJlcSxjdHgucmVzKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgaXNzdWVzOmlzc3Vlc1JlcG9zLmRhdGFcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSZXBvQmFzaWMoSXNzdWVzLCdpc3N1ZXMnKSJdfQ== */\n/*@ sourceURL=E:\\\u4E2A\u4EBA\u9879\u76EE\\gitHub\u9879\u76EE\\coco-github\\pages\\detail\\issues.js */"));
}

Issues.getInitialProps = /*#__PURE__*/function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref4) {
    var ctx, _ctx$query, owner, name, issuesRepos;

    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            ctx = _ref4.ctx;
            _ctx$query = ctx.query, owner = _ctx$query.owner, name = _ctx$query.name;
            _context.next = 4;
            return _lib_api__WEBPACK_IMPORTED_MODULE_9___default.a.request({
              url: "/repos/".concat(owner, "/").concat(name, "/issues")
            }, ctx.req, ctx.res);

          case 4:
            issuesRepos = _context.sent;
            return _context.abrupt("return", {
              issues: issuesRepos.data
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref5.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Object(_components_with_repo_basic__WEBPACK_IMPORTED_MODULE_8__["default"])(Issues, 'issues'));

/***/ })

})
//# sourceMappingURL=issues.js.dd4c46478630086b071f.hot-update.js.map