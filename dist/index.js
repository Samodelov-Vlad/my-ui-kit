import "react";
import { jsx as e } from "react/jsx-runtime";
//#region src/components/MyButton.tsx
var t = ({ label: t, onClick: n, primary: r }) => /* @__PURE__ */ e("button", {
	style: {
		backgroundColor: r ? "blue" : "gray",
		color: "white",
		padding: "10px 20px",
		borderRadius: "8px",
		border: "none",
		cursor: "pointer"
	},
	onClick: n,
	children: t
});
//#endregion
export { t as MyButton };
