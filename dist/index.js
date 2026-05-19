import { Button as e, Input as t, Select as n } from "antd";
import { forwardRef as r } from "react";
import { jsx as i } from "react/jsx-runtime";
//#region src/components/button/index.tsx
var a = r(({ ...t }, n) => /* @__PURE__ */ i(e, {
	ref: n,
	...t
})), o = r(({ ...e }, t) => /* @__PURE__ */ i(o, {
	ref: t,
	...e
})), s = r(({ ...e }, t) => /* @__PURE__ */ i(n, {
	ref: t,
	showSearch: !0,
	optionFilterProp: "label",
	allowClear: !0,
	...e
})), c = r(({ ...e }, n) => /* @__PURE__ */ i(t.TextArea, {
	ref: n,
	...e
}));
//#endregion
export { a as Button, o as Input, s as Select, c as TextArea };
