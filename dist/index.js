import { Button as e, DatePicker as t, Input as n, Select as r } from "antd";
import { forwardRef as i } from "react";
import { jsx as a } from "react/jsx-runtime";
//#region src/components/button/index.tsx
var o = i(({ ...t }, n) => /* @__PURE__ */ a(e, {
	ref: n,
	...t
})), s = i(({ ...e }, t) => /* @__PURE__ */ a(s, {
	ref: t,
	...e
})), c = i(({ ...e }, t) => /* @__PURE__ */ a(r, {
	ref: t,
	showSearch: !0,
	optionFilterProp: "label",
	allowClear: !0,
	...e
})), l = i(({ ...e }, t) => /* @__PURE__ */ a(n.TextArea, {
	ref: t,
	...e
})), u = ({ format: e, ...n }) => /* @__PURE__ */ a(t, {
	allowClear: !0,
	showNow: !0,
	format: {
		format: e,
		type: "mask"
	},
	...n
});
//#endregion
export { o as Button, u as DatePicker, s as Input, c as Select, l as TextArea };
