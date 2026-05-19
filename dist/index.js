import { Button as e, Input as t, Select as n } from "antd";
import { forwardRef as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/AntdButton/index.tsx
var a = r(({ ...t }, n) => /* @__PURE__ */ i(e, {
	ref: n,
	...t
})), o = r(({ ...e }, n) => /* @__PURE__ */ i(t, {
	ref: n,
	...e
})), s = r(({ ...e }, t) => /* @__PURE__ */ i(n, {
	ref: t,
	showSearch: !0,
	optionFilterProp: "label",
	allowClear: !0,
	getPopupContainer: (e) => e.parentNode,
	...e
})), c = r(({ ...e }, n) => /* @__PURE__ */ i(t.TextArea, {
	ref: n,
	...e
}));
//#endregion
export { a as AntdButton, o as AntdInput, s as AntdSelect, c as AntdTextArea };
