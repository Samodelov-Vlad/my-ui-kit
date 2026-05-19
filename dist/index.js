import { Button as e, DatePicker as t, Input as n, InputNumber as r, Select as i } from "antd";
import { forwardRef as a } from "react";
import { jsx as o } from "react/jsx-runtime";
//#region src/components/ui/button/index.tsx
var s = a(({ ...t }, n) => /* @__PURE__ */ o(e, {
	ref: n,
	...t
})), c = a(({ ...e }, t) => /* @__PURE__ */ o(c, {
	ref: t,
	...e
})), l = a(({ ...e }, t) => /* @__PURE__ */ o(i, {
	ref: t,
	showSearch: !0,
	optionFilterProp: "label",
	allowClear: !0,
	...e
})), u = a(({ ...e }, t) => /* @__PURE__ */ o(n.TextArea, {
	ref: t,
	...e
})), d = a(({ format: e, ...n }, r) => /* @__PURE__ */ o(t, {
	ref: r,
	allowClear: !0,
	showNow: !0,
	format: {
		format: e,
		type: "mask"
	},
	...n
})), f = a(({ isPretty: e = !0, ...t }, n) => /* @__PURE__ */ o(r, {
	ref: n,
	decimalSeparator: ",",
	...e && { formatter: (e) => String(e).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d{1,2}))/g, " ") },
	...t
}));
//#endregion
export { s as Button, d as DatePicker, c as Input, f as InputNumber, l as Select, u as TextArea };
