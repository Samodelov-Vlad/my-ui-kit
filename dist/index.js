import { Button as e, Input as t } from "antd";
import { forwardRef as n } from "react";
import { jsx as r } from "react/jsx-runtime";
//#region src/components/AntdButton/index.tsx
var i = n(({ ...t }, n) => /* @__PURE__ */ r(e, {
	ref: n,
	...t
})), a = n(({ ...e }, n) => /* @__PURE__ */ r(t, {
	ref: n,
	...e
})), o = n(({ ...e }, t) => /* @__PURE__ */ r(o, {
	ref: t,
	showSearch: !0,
	optionFilterProp: "label",
	allowClear: !0,
	...e
}));
//#endregion
export { i as AntdButton, a as AntdInput, o as AntdSelect };
