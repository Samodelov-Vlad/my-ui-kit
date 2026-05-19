import { Button as e, Checkbox as t, DatePicker as n, Input as r, InputNumber as i, Radio as a, Select as o, Spin as s } from "antd";
import c, { Component as l, Suspense as u, createContext as d, createElement as f, forwardRef as p, memo as m, useCallback as h, useContext as g, useEffect as _, useImperativeHandle as v, useLayoutEffect as y, useMemo as b, useRef as x, useState as S } from "react";
import { jsx as C } from "react/jsx-runtime";
import w, { createPortal as T } from "react-dom";
//#region src/components/ui/button/index.tsx
var E = p(({ ...t }, n) => /* @__PURE__ */ C(e, {
	ref: n,
	...t
})), D = p(({ ...e }, t) => /* @__PURE__ */ C(D, {
	ref: t,
	...e
})), ee = p(({ ...e }, t) => /* @__PURE__ */ C(o, {
	ref: t,
	showSearch: !0,
	optionFilterProp: "label",
	allowClear: !0,
	...e
})), O = p(({ ...e }, t) => /* @__PURE__ */ C(r.TextArea, {
	ref: t,
	...e
})), k = p(({ format: e, ...t }, r) => /* @__PURE__ */ C(n, {
	ref: r,
	allowClear: !0,
	showNow: !0,
	format: {
		format: e,
		type: "mask"
	},
	...t
})), A = p(({ isPretty: e = !0, ...t }, n) => /* @__PURE__ */ C(i, {
	ref: n,
	decimalSeparator: ",",
	...e && { formatter: (e) => String(e).replace(".", ",").replace(/\B(?=(\d{3})+(?!\d{1,2}))/g, " ") },
	...t
})), te = p((e, t) => /* @__PURE__ */ C(a.Group, {
	ref: t,
	optionType: "button",
	buttonStyle: "solid",
	...e
})), ne = ({ ...e }) => /* @__PURE__ */ C(s, { ...e }), j = p(({ ...e }, n) => /* @__PURE__ */ C(t, {
	ref: n,
	...e
}));
//#endregion
//#region node_modules/ag-grid-community/dist/package/main.esm.mjs
function M(e) {
	if (e?.length) return e[e.length - 1];
}
function N(e, t, n) {
	if (e === t) return !0;
	if (!e || !t) return e == null && t == null;
	let r = e.length;
	if (r !== t.length) return !1;
	for (let i = 0; i < r; i++) if (e[i] !== t[i] && !n?.(e[i], t[i])) return !1;
	return !0;
}
function P(e, t) {
	if (e) {
		for (let n of e) if (t(n)) return !0;
	}
}
function re(e, t) {
	let n = e.indexOf(t);
	n >= 0 && e.splice(n, 1);
}
function ie(e, t, n) {
	for (let n = 0; n < t.length; n++) re(e, t[n]);
	for (let r = t.length - 1; r >= 0; r--) e.splice(n, 0, t[r]);
}
var F = (e) => e == null || e === "" ? null : e;
function I(e) {
	return e != null && e !== "";
}
function L(e) {
	return !I(e);
}
var ae = (e) => e != null && typeof e.toString == "function" ? e.toString() : null, oe = (e, t, n = !1) => e == null ? t == null ? 0 : -1 : t == null ? 1 : (typeof e == "object" && e.toNumber && (e = e.toNumber()), typeof t == "object" && t.toNumber && (t = t.toNumber()), !n || typeof e != "string" ? e > t ? 1 : e < t ? -1 : 0 : e.localeCompare(t)), R = class {
	constructor() {
		this.allSyncListeners = /* @__PURE__ */ new Map(), this.allAsyncListeners = /* @__PURE__ */ new Map(), this.globalSyncListeners = /* @__PURE__ */ new Set(), this.globalAsyncListeners = /* @__PURE__ */ new Set(), this.asyncFunctionsQueue = [], this.scheduled = !1, this.firedEvents = {};
	}
	setFrameworkOverrides(e) {
		this.frameworkOverrides = e;
	}
	getListeners(e, t, n) {
		let r = t ? this.allAsyncListeners : this.allSyncListeners, i = r.get(e);
		return !i && n && (i = /* @__PURE__ */ new Set(), r.set(e, i)), i;
	}
	noRegisteredListenersExist() {
		return this.allSyncListeners.size === 0 && this.allAsyncListeners.size === 0 && this.globalSyncListeners.size === 0 && this.globalAsyncListeners.size === 0;
	}
	addEventListener(e, t, n = !1) {
		this.getListeners(e, n, !0).add(t);
	}
	removeEventListener(e, t, n = !1) {
		let r = this.getListeners(e, n, !1);
		r && (r.delete(t), r.size === 0 && (n ? this.allAsyncListeners : this.allSyncListeners).delete(e));
	}
	addGlobalListener(e, t = !1) {
		this.getGlobalListeners(t).add(e);
	}
	removeGlobalListener(e, t = !1) {
		this.getGlobalListeners(t).delete(e);
	}
	dispatchEvent(e) {
		this.dispatchToListeners(e, !0), this.dispatchToListeners(e, !1), this.firedEvents[e.type] = !0;
	}
	dispatchEventOnce(e) {
		this.firedEvents[e.type] || this.dispatchEvent(e);
	}
	dispatchToListeners(e, t) {
		let n = e.type;
		if (t && "event" in e) {
			let t = e.event;
			t instanceof Event && (e.eventPath = t.composedPath());
		}
		let { frameworkOverrides: r } = this, i = (e) => {
			let n = r ? () => r.wrapIncoming(e) : e;
			t ? this.dispatchAsync(n) : n();
		}, a = this.getListeners(n, t, !1);
		if ((a?.size ?? 0) > 0) {
			let t = new Set(a);
			for (let n of t) a?.has(n) && i(() => n(e));
		}
		let o = this.getGlobalListeners(t);
		if (o.size > 0) {
			let t = new Set(o);
			for (let r of t) i(() => r(n, e));
		}
	}
	getGlobalListeners(e) {
		return e ? this.globalAsyncListeners : this.globalSyncListeners;
	}
	dispatchAsync(e) {
		if (this.asyncFunctionsQueue.push(e), !this.scheduled) {
			let e = () => {
				window.setTimeout(this.flushAsyncQueue.bind(this), 0);
			}, t = this.frameworkOverrides;
			t ? t.wrapIncoming(e) : e(), this.scheduled = !0;
		}
	}
	flushAsyncQueue() {
		this.scheduled = !1;
		let e = this.asyncFunctionsQueue.slice();
		this.asyncFunctionsQueue = [];
		for (let t of e) t();
	}
}, se = /[&<>"']/g, ce = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	"\"": "&quot;",
	"'": "&#39;"
};
function le(e) {
	return e?.toString().toString() ?? null;
}
function ue(e) {
	return le(e)?.replace(se, (e) => ce[e]) ?? null;
}
function de(e) {
	return typeof e == "string" && e.startsWith("=") && e.length > 1;
}
function fe(e) {
	return !e || e == null ? null : e.replace(/([a-z])([A-Z])/g, "$1 $2").replace(/([A-Z]+)([A-Z])([a-z])/g, "$1 $2$3").replace(/\./g, " ").split(" ").map((e) => e.substring(0, 1).toUpperCase() + (e.length > 1 ? e.substring(1, e.length) : "")).join(" ");
}
function pe(e) {
	return e.eRootDiv.getRootNode();
}
function z(e) {
	return pe(e).activeElement;
}
function B(e) {
	let { gos: t, eRootDiv: n } = e, r = null, i = t.get("getDocument");
	return i && I(i) ? r = i() : n && (r = n.ownerDocument), r && I(r) ? r : document;
}
function me(e) {
	let t = z(e);
	return t === null || t === B(e).body;
}
function he(e) {
	return B(e).defaultView || window;
}
function ge(e) {
	let t = null, n = null;
	try {
		t = B(e).fullscreenElement;
	} catch {} finally {
		t ||= pe(e), n = t.querySelector("body") || (t instanceof ShadowRoot ? t : t instanceof Document ? t?.documentElement : t);
	}
	return n;
}
function _e(e) {
	return ge(e)?.clientWidth ?? (window.innerWidth || -1);
}
function ve(e) {
	return ge(e)?.clientHeight ?? (window.innerHeight || -1);
}
function ye(e, t, n) {
	n == null || typeof n == "string" && n == "" ? xe(e, t) : be(e, t, n);
}
function be(e, t, n) {
	e.setAttribute(Se(t), n.toString());
}
function xe(e, t) {
	e.removeAttribute(Se(t));
}
function Se(e) {
	return `aria-${e}`;
}
function Ce(e, t) {
	t ? e.setAttribute("role", t) : e.removeAttribute("role");
}
function we(e) {
	let t = e?.direction;
	return t === "asc" ? "ascending" : t === "desc" ? "descending" : t === "mixed" ? "other" : "none";
}
function Te(e) {
	return e.getAttribute("aria-label");
}
function Ee(e, t) {
	ye(e, "label", t);
}
function De(e, t) {
	ye(e, "labelledby", t);
}
function Oe(e, t) {
	ye(e, "live", t);
}
function ke(e, t) {
	ye(e, "atomic", t);
}
function Ae(e, t) {
	ye(e, "relevant", t);
}
function je(e, t) {
	ye(e, "invalid", t);
}
function Me(e, t) {
	ye(e, "hidden", t);
}
function Ne(e, t) {
	be(e, "expanded", t);
}
function Pe(e, t) {
	be(e, "rowcount", t);
}
function Fe(e, t) {
	be(e, "rowindex", t);
}
function Ie(e, t) {
	be(e, "colcount", t);
}
function Le(e, t) {
	be(e, "colindex", t);
}
function Re(e, t) {
	be(e, "colspan", t);
}
function ze(e, t) {
	be(e, "sort", t);
}
function Be(e) {
	xe(e, "sort");
}
function Ve(e, t) {
	return t === void 0 ? e("ariaIndeterminate", "indeterminate") : t === !0 ? e("ariaChecked", "checked") : e("ariaUnchecked", "unchecked");
}
var He = "[tabindex], input, select, button, textarea, [href]", Ue = "[disabled], .ag-disabled:not(.ag-button), .ag-disabled *";
function We(e) {
	return !e || !e.matches("input, select, button, textarea") || !e.matches(Ue) ? !1 : rt(e);
}
function V(e, t, n = {}) {
	let { skipAriaHidden: r } = n;
	e.classList.toggle("ag-hidden", !t), r || Me(e, !t);
}
function Ge(e, t, n = {}) {
	let { skipAriaHidden: r } = n;
	e.classList.toggle("ag-invisible", !t), r || Me(e, !t);
}
function Ke(e, t) {
	let n = "disabled", r = t ? (e) => e.setAttribute(n, "") : (e) => e.removeAttribute(n);
	r(e);
	let i = e.querySelectorAll("input") ?? [];
	for (let e of i) r(e);
}
function qe(e, t, n) {
	let r = 0;
	for (; e;) {
		if (e.classList.contains(t)) return !0;
		if (e = e.parentElement, typeof n == "number") {
			if (++r > n) break;
		} else if (e === n) break;
	}
	return !1;
}
function Je(e) {
	let { height: t, width: n, borderTopWidth: r, borderRightWidth: i, borderBottomWidth: a, borderLeftWidth: o, paddingTop: s, paddingRight: c, paddingBottom: l, paddingLeft: u, marginTop: d, marginRight: f, marginBottom: p, marginLeft: m, boxSizing: h } = window.getComputedStyle(e), g = Number.parseFloat;
	return {
		height: g(t || "0"),
		width: g(n || "0"),
		borderTopWidth: g(r || "0"),
		borderRightWidth: g(i || "0"),
		borderBottomWidth: g(a || "0"),
		borderLeftWidth: g(o || "0"),
		paddingTop: g(s || "0"),
		paddingRight: g(c || "0"),
		paddingBottom: g(l || "0"),
		paddingLeft: g(u || "0"),
		marginTop: g(d || "0"),
		marginRight: g(f || "0"),
		marginBottom: g(p || "0"),
		marginLeft: g(m || "0"),
		boxSizing: h
	};
}
function Ye(e) {
	let t = Je(e);
	return t.boxSizing === "border-box" ? t.height - t.paddingTop - t.paddingBottom - t.borderTopWidth - t.borderBottomWidth : t.height;
}
function Xe(e) {
	let t = Je(e);
	return t.boxSizing === "border-box" ? t.width - t.paddingLeft - t.paddingRight - t.borderLeftWidth - t.borderRightWidth : t.width;
}
function Ze(e) {
	let t = e.getBoundingClientRect(), { borderTopWidth: n, borderLeftWidth: r, borderRightWidth: i, borderBottomWidth: a } = Je(e);
	return {
		top: t.top + (n || 0),
		left: t.left + (r || 0),
		right: t.right + (i || 0),
		bottom: t.bottom + (a || 0)
	};
}
function Qe(e, t) {
	let n = e.scrollLeft;
	return t && (n = Math.abs(n)), n;
}
function $e(e, t, n) {
	n && (t *= -1), e.scrollLeft = t;
}
function et(e) {
	for (; e?.firstChild;) e.firstChild.remove();
}
function tt(e) {
	e?.parentNode && e.remove();
}
function nt(e) {
	return !!e.offsetParent;
}
function rt(e) {
	return e.checkVisibility ? e.checkVisibility({ checkVisibilityCSS: !0 }) : !(!nt(e) || window.getComputedStyle(e).visibility !== "visible");
}
function it(e) {
	let t = document.createElement("div");
	return t.innerHTML = (e || "").trim(), t.firstChild;
}
function at(e, t) {
	t === "flex" ? (e.style.removeProperty("width"), e.style.removeProperty("minWidth"), e.style.removeProperty("maxWidth"), e.style.flex = "1 1 auto") : ot(e, t);
}
function ot(e, t) {
	t = ct(t), e.style.width = t, e.style.maxWidth = t, e.style.minWidth = t;
}
function st(e, t) {
	t = ct(t), e.style.height = t, e.style.maxHeight = t, e.style.minHeight = t;
}
function ct(e) {
	return typeof e == "number" ? `${e}px` : e;
}
function lt(e) {
	return e instanceof Node || e instanceof HTMLElement;
}
function ut(e, t, n) {
	n == null || n === "" ? e.removeAttribute(t) : e.setAttribute(t, n.toString());
}
function dt(e, t) {
	if (!t.isContentEditable) return;
	let n = he(e).getSelection();
	if (!n) return;
	let r = B(e).createRange();
	r.selectNodeContents(t), r.collapse(!1), n.removeAllRanges(), n.addRange(r);
}
function ft(e, t, n) {
	let r = he(e).ResizeObserver, i = r ? new r(n) : null;
	return i?.observe(t), () => i?.disconnect();
}
function pt(e, t) {
	let n = he(e);
	n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.webkitRequestAnimationFrame ? n.webkitRequestAnimationFrame(t) : n.setTimeout(t, 0);
}
var mt = "data-ref", ht;
function gt() {
	return ht ??= document.createTextNode(" "), ht.cloneNode();
}
function _t(e) {
	let { attrs: t, children: n, cls: r, ref: i, role: a, tag: o } = e, s = document.createElement(o);
	if (r && (s.className = r), i && s.setAttribute(mt, i), a && s.setAttribute("role", a), t) for (let e of Object.keys(t)) s.setAttribute(e, t[e]);
	if (n) if (typeof n == "string") s.textContent = n;
	else {
		let e = !0;
		for (let t of n) t && (typeof t == "string" ? (s.appendChild(document.createTextNode(t)), e = !1) : typeof t == "function" ? s.appendChild(t()) : (e &&= (s.appendChild(gt()), !1), s.append(_t(t)), s.appendChild(gt())));
	}
	return s;
}
var vt = [
	"touchstart",
	"touchend",
	"touchmove",
	"touchcancel",
	"scroll"
], yt = ["wheel"], bt = {}, xt = /* @__PURE__ */ (() => {
	let e = {
		select: "input",
		change: "input",
		submit: "form",
		reset: "form",
		error: "img",
		load: "img",
		abort: "img"
	};
	return (t) => {
		if (typeof bt[t] == "boolean") return bt[t];
		let n = document.createElement(e[t] || "div");
		return t = "on" + t, bt[t] = t in n;
	};
})();
function St(e, t, n) {
	let r = Ct(t), i;
	r != null && (i = { passive: r }), e.addEventListener(t, n, i);
}
var Ct = (e) => {
	let t = vt.includes(e), n = yt.includes(e);
	if (t) return !0;
	if (n) return !1;
};
function wt(e, t, n) {
	if (n === 0) return !1;
	let r = Math.abs(e.clientX - t.clientX), i = Math.abs(e.clientY - t.clientY);
	return Math.max(r, i) <= n;
}
var Tt = (e, t) => {
	let n = e.identifier;
	for (let e = 0, r = t.length; e < r; ++e) {
		let r = t[e];
		if (r.identifier === n) return r;
	}
	return null;
};
function Et(e, t) {
	return e.gos.isElementInThisInstance(t.target);
}
function Dt(e, t, n) {
	let r = e.getBoundingClientRect().height, i = _e(n) - 2, a = ve(n) - 2;
	if (!e.offsetParent) return;
	let o = Ze(e.offsetParent), { clientY: s, clientX: c } = t, l = s - o.top - r / 2, u = c - o.left - 10, d = B(n), f = d.defaultView || window, p = f.pageYOffset || d.documentElement.scrollTop, m = f.pageXOffset || d.documentElement.scrollLeft;
	i > 0 && u + e.clientWidth > i + m && (u = i + m - e.clientWidth), u < 0 && (u = 0), a > 0 && l + e.clientHeight > a + p && (l = a + p - e.clientHeight), l < 0 && (l = 0), e.style.left = `${u}px`, e.style.top = `${l}px`;
}
var Ot = (e, ...t) => {
	for (let n of t) {
		let [t, r, i, a] = n;
		t.addEventListener(r, i, a), e.push(n);
	}
}, kt = (e) => {
	if (e) {
		for (let [t, n, r, i] of e) t.removeEventListener(n, r, i);
		e.length = 0;
	}
}, At = (e) => {
	e.cancelable && e.preventDefault();
};
function jt(e, t) {
	return t;
}
function Mt(e) {
	return e?.getLocaleTextFunc() ?? jt;
}
var Nt = class {
	constructor() {
		this.destroyFunctions = [], this.destroyed = !1, this.__v_skip = !0, this.propertyListenerId = 0, this.lastChangeSetIdLookup = {}, this.isAlive = () => !this.destroyed;
	}
	preWireBeans(e) {
		this.beans = e, this.stubContext = e.context, this.eventSvc = e.eventSvc, this.gos = e.gos;
	}
	destroy() {
		let { destroyFunctions: e } = this;
		for (let t = 0; t < e.length; t++) e[t]();
		e.length = 0, this.destroyed = !0, this.dispatchLocalEvent({ type: "destroyed" });
	}
	addEventListener(e, t, n) {
		this.localEventService ||= new R(), this.localEventService.addEventListener(e, t, n);
	}
	removeEventListener(e, t, n) {
		this.localEventService?.removeEventListener(e, t, n);
	}
	dispatchLocalEvent(e) {
		this.localEventService?.dispatchEvent(e);
	}
	addManagedElementListeners(e, t) {
		return this._setupListeners(e, t);
	}
	addManagedEventListeners(e) {
		return this._setupListeners(this.eventSvc, e);
	}
	addManagedListeners(e, t) {
		return this._setupListeners(e, t);
	}
	_setupListeners(e, t) {
		let n = [];
		for (let r of Object.keys(t)) {
			let i = t[r];
			i && n.push(this._setupListener(e, r, i));
		}
		return n;
	}
	_setupListener(e, t, n) {
		if (this.destroyed) return () => null;
		let r;
		if (Pt(e)) e.__addEventListener(t, n), r = () => (e.__removeEventListener(t, n), null);
		else {
			let i = Ft(e);
			e instanceof HTMLElement ? St(e, t, n) : i ? e.addListener(t, n) : e.addEventListener(t, n), r = i ? () => (e.removeListener(t, n), null) : () => (e.removeEventListener(t, n), null);
		}
		return this.destroyFunctions.push(r), () => (r(), this.destroyFunctions = this.destroyFunctions.filter((e) => e !== r), null);
	}
	setupPropertyListener(e, t) {
		let { gos: n } = this;
		n.addPropertyEventListener(e, t);
		let r = () => (n.removePropertyEventListener(e, t), null);
		return this.destroyFunctions.push(r), () => (r(), this.destroyFunctions = this.destroyFunctions.filter((e) => e !== r), null);
	}
	addManagedPropertyListener(e, t) {
		return this.destroyed ? () => null : this.setupPropertyListener(e, t);
	}
	addManagedPropertyListeners(e, t) {
		if (this.destroyed) return;
		let n = e.join("-") + this.propertyListenerId++, r = (e) => {
			if (e.changeSet) {
				if (e.changeSet && e.changeSet.id === this.lastChangeSetIdLookup[n]) return;
				this.lastChangeSetIdLookup[n] = e.changeSet.id;
			}
			t({
				type: "propertyChanged",
				changeSet: e.changeSet,
				source: e.source
			});
		};
		for (let t of e) this.setupPropertyListener(t, r);
	}
	getLocaleTextFunc() {
		return Mt(this.beans.localeSvc);
	}
	addDestroyFunc(e) {
		this.isAlive() ? this.destroyFunctions.push(e) : e();
	}
	createOptionalManagedBean(e, t) {
		return e ? this.createManagedBean(e, t) : void 0;
	}
	createManagedBean(e, t) {
		let n = this.createBean(e, t);
		return this.addDestroyFunc(this.destroyBean.bind(this, e, t)), n;
	}
	createBean(e, t, n) {
		return (t || this.stubContext).createBean(e, n);
	}
	destroyBean(e, t) {
		return (t || this.stubContext).destroyBean(e);
	}
	destroyBeans(e, t) {
		return (t || this.stubContext).destroyBeans(e);
	}
};
function Pt(e) {
	return e.__addEventListener !== void 0;
}
function Ft(e) {
	return e.eventServiceType === "global";
}
var H = class extends Nt {}, It = /* @__PURE__ */ new Set(), Lt = (e, t) => {
	It.has(t) || (It.add(t), e());
};
Lt._set = It;
var Rt = {
	pending: !1,
	funcs: []
}, zt = {
	pending: !1,
	funcs: []
};
function Bt(e, t = "setTimeout", n) {
	let r = t === "raf" ? zt : Rt;
	if (r.funcs.push(e), r.pending) return;
	r.pending = !0;
	let i = () => {
		let e = r.funcs.slice();
		r.funcs.length = 0, r.pending = !1;
		for (let t of e) t();
	};
	t === "raf" ? pt(n, i) : window.setTimeout(i, 0);
}
function Vt(e, t, n) {
	let r;
	return function(...i) {
		let a = this;
		return window.clearTimeout(r), r = window.setTimeout(function() {
			e.isAlive() && t.apply(a, i);
		}, n), r;
	};
}
function Ht(e, t) {
	let n = 0;
	return function(...r) {
		let i = this, a = Date.now();
		a - n < t || (n = a, e.apply(i, r));
	};
}
function Ut(e, t, n, r = 100) {
	let i = Date.now(), a = null, o = !1, s = () => {
		a != null && (window.clearInterval(a), a = null);
	};
	e.addDestroyFunc(s);
	let c = () => {
		let e = Date.now() - i > r;
		(t() || e) && (n(), o = !0, s());
	};
	c(), o || (a = window.setInterval(c, 10));
}
var Wt = /* @__PURE__ */ new Set([
	"__proto__",
	"constructor",
	"prototype"
]);
function Gt(e, t) {
	if (e != null) {
		if (Array.isArray(e)) {
			for (let n = 0; n < e.length; n++) t(n.toString(), e[n]);
			return;
		}
		for (let n of Object.keys(e).filter((e) => !Wt.has(e))) t(n, e[n]);
	}
}
function Kt(e, t, n = !0, r = !1) {
	I(t) && Gt(t, (t, i) => {
		let a = e[t];
		a !== i && (r && a == null && typeof i == "object" && i && i.constructor === Object && (a = {}, e[t] = a), qt(i) && qt(a) && !Array.isArray(a) ? Kt(a, i, n, r) : (n || i !== void 0) && (e[t] = i));
	});
}
function qt(e) {
	return typeof e == "object" && !!e;
}
var Jt = class e {
	static applyGlobalGridOptions(t) {
		if (!e.gridOptions) return { ...t };
		let n = {};
		return Kt(n, e.gridOptions, !0, !0), e.mergeStrategy === "deep" ? Kt(n, t, !0, !0) : n = {
			...n,
			...t
		}, e.gridOptions.context && (n.context = e.gridOptions.context), t.context && (e.mergeStrategy === "deep" && n.context && Kt(t.context, n.context, !0, !0), n.context = t.context), n;
	}
	static applyGlobalGridOption(t, n) {
		if (e.mergeStrategy === "deep") {
			let r = Xt(t);
			if (r && typeof r == "object" && typeof n == "object") return e.applyGlobalGridOptions({ [t]: n })[t];
		}
		return n;
	}
};
Jt.gridOptions = void 0, Jt.mergeStrategy = "shallow";
var Yt = Jt;
function Xt(e) {
	return Yt.gridOptions?.[e];
}
var Zt = {
	suppressContextMenu: !1,
	preventDefaultOnContextMenu: !1,
	allowContextMenuWithControlKey: !1,
	suppressMenuHide: !0,
	enableBrowserTooltips: !1,
	tooltipTrigger: "hover",
	tooltipShowDelay: 2e3,
	tooltipSwitchShowDelay: 200,
	tooltipHideDelay: 1e4,
	tooltipMouseTrack: !1,
	tooltipShowMode: "standard",
	tooltipInteraction: !1,
	copyHeadersToClipboard: !1,
	copyGroupHeadersToClipboard: !1,
	clipboardDelimiter: "	",
	suppressCopyRowsToClipboard: !1,
	suppressCopySingleCellRanges: !1,
	suppressLastEmptyLineOnPaste: !1,
	suppressClipboardPaste: !1,
	suppressClipboardApi: !1,
	suppressCutToClipboard: !1,
	maintainColumnOrder: !1,
	enableStrictPivotColumnOrder: !1,
	suppressFieldDotNotation: !1,
	allowDragFromColumnsToolPanel: !1,
	suppressMovableColumns: !1,
	suppressColumnMoveAnimation: !1,
	suppressMoveWhenColumnDragging: !1,
	suppressDragLeaveHidesColumns: !1,
	suppressRowGroupHidesColumns: !1,
	suppressAutoSize: !1,
	autoSizePadding: 20,
	skipHeaderOnAutoSize: !1,
	singleClickEdit: !1,
	suppressClickEdit: !1,
	readOnlyEdit: !1,
	stopEditingWhenCellsLoseFocus: !1,
	enterNavigatesVertically: !1,
	enterNavigatesVerticallyAfterEdit: !1,
	enableCellEditingOnBackspace: !1,
	undoRedoCellEditing: !1,
	undoRedoCellEditingLimit: 10,
	suppressCsvExport: !1,
	suppressExcelExport: !1,
	cacheQuickFilter: !1,
	includeHiddenColumnsInQuickFilter: !1,
	excludeChildrenWhenTreeDataFiltering: !1,
	enableAdvancedFilter: !1,
	includeHiddenColumnsInAdvancedFilter: !1,
	enableCharts: !1,
	masterDetail: !1,
	keepDetailRows: !1,
	keepDetailRowsCount: 10,
	detailRowAutoHeight: !1,
	tabIndex: 0,
	rowBuffer: 10,
	valueCache: !1,
	valueCacheNeverExpires: !1,
	enableCellExpressions: !1,
	suppressTouch: !1,
	suppressFocusAfterRefresh: !1,
	suppressBrowserResizeObserver: !1,
	suppressPropertyNamesCheck: !1,
	suppressChangeDetection: !1,
	debug: !1,
	suppressLoadingOverlay: !1,
	suppressNoRowsOverlay: !1,
	pagination: !1,
	paginationPageSize: 100,
	paginationPageSizeSelector: !0,
	paginationAutoPageSize: !1,
	paginateChildRows: !1,
	suppressPaginationPanel: !1,
	pivotMode: !1,
	pivotPanelShow: "never",
	pivotDefaultExpanded: 0,
	pivotSuppressAutoColumn: !1,
	suppressExpandablePivotGroups: !1,
	functionsReadOnly: !1,
	suppressAggFuncInHeader: !1,
	alwaysAggregateAtRootLevel: !1,
	aggregateOnlyChangedColumns: !1,
	suppressAggFilteredOnly: !1,
	removePivotHeaderRowWhenSingleValueColumn: !1,
	animateRows: !0,
	cellFlashDuration: 500,
	cellFadeDuration: 1e3,
	allowShowChangeAfterFilter: !1,
	domLayout: "normal",
	ensureDomOrder: !1,
	enableRtl: !1,
	suppressColumnVirtualisation: !1,
	suppressMaxRenderedRowRestriction: !1,
	suppressRowVirtualisation: !1,
	rowDragManaged: !1,
	refreshAfterGroupEdit: !1,
	rowDragInsertDelay: 500,
	suppressRowDrag: !1,
	suppressMoveWhenRowDragging: !1,
	rowDragEntireRow: !1,
	rowDragMultiRow: !1,
	embedFullWidthRows: !1,
	groupDisplayType: "singleColumn",
	groupDefaultExpanded: 0,
	groupMaintainOrder: !1,
	groupSelectsChildren: !1,
	groupSuppressBlankHeader: !1,
	groupSelectsFiltered: !1,
	showOpenedGroup: !1,
	groupRemoveSingleChildren: !1,
	groupRemoveLowestSingleChildren: !1,
	groupHideOpenParents: !1,
	groupHideColumnsUntilExpanded: !1,
	groupAllowUnbalanced: !1,
	rowGroupPanelShow: "never",
	suppressMakeColumnVisibleAfterUnGroup: !1,
	treeData: !1,
	rowGroupPanelSuppressSort: !1,
	suppressGroupRowsSticky: !1,
	rowModelType: "clientSide",
	asyncTransactionWaitMillis: 50,
	suppressModelUpdateAfterUpdateTransaction: !1,
	cacheOverflowSize: 1,
	infiniteInitialRowCount: 1,
	serverSideInitialRowCount: 1,
	cacheBlockSize: 100,
	maxBlocksInCache: -1,
	maxConcurrentDatasourceRequests: 2,
	blockLoadDebounceMillis: 0,
	purgeClosedRowNodes: !1,
	serverSideSortAllLevels: !1,
	serverSideOnlyRefreshFilteredGroups: !1,
	serverSidePivotResultFieldSeparator: "_",
	viewportRowModelPageSize: 5,
	viewportRowModelBufferSize: 5,
	alwaysShowHorizontalScroll: !1,
	alwaysShowVerticalScroll: !1,
	debounceVerticalScrollbar: !1,
	suppressHorizontalScroll: !1,
	suppressScrollOnNewData: !1,
	suppressScrollWhenPopupsAreOpen: !1,
	suppressAnimationFrame: !1,
	suppressMiddleClickScrolls: !1,
	suppressPreventDefaultOnMouseWheel: !1,
	rowMultiSelectWithClick: !1,
	suppressRowDeselection: !1,
	suppressRowClickSelection: !1,
	suppressCellFocus: !1,
	suppressHeaderFocus: !1,
	suppressMultiRangeSelection: !1,
	enableCellTextSelection: !1,
	enableRangeSelection: !1,
	enableRangeHandle: !1,
	enableFillHandle: !1,
	fillHandleDirection: "xy",
	suppressClearOnFillReduction: !1,
	accentedSort: !1,
	unSortIcon: !1,
	suppressMultiSort: !1,
	alwaysMultiSort: !1,
	suppressMaintainUnsortedOrder: !1,
	suppressRowHoverHighlight: !1,
	suppressRowTransform: !1,
	columnHoverHighlight: !1,
	deltaSort: !1,
	enableGroupEdit: !1,
	groupLockGroupColumns: 0,
	serverSideEnableClientSideSort: !1,
	suppressServerSideFullWidthLoadingRow: !1,
	pivotMaxGeneratedColumns: -1,
	columnMenu: "new",
	reactiveCustomComponents: !0,
	suppressSetFilterByDefault: !1,
	enableFilterHandlers: !1
}, Qt = "https://www.ag-grid.com";
function $t(e, t, ...n) {
	e.get("debug") && console.log("AG Grid: " + t, ...n);
}
function en(e, ...t) {
	Lt(() => rn(e, ...t), e + t?.join(""));
}
function tn(e, ...t) {
	Lt(() => nn(e, ...t), e + t?.join(""));
}
function nn(e, ...t) {
	console.error("AG Grid: " + e, ...t);
}
function rn(e, ...t) {
	console.warn("AG Grid: " + e, ...t);
}
var an = /* @__PURE__ */ new Set(), on = {}, sn = {}, cn, ln = !1, un = !1, dn = !1;
function fn(e) {
	let [t, n] = e.version.split(".") || [], [r, i] = cn.split(".") || [];
	return t === r && n === i;
}
function pn(e) {
	cn ||= e.version;
	let t = (e) => `You are using incompatible versions of AG Grid modules. Major and minor versions should always match across modules. ${e} Please update all modules to the same version.`;
	e.version ? fn(e) || tn(t(`'${e.moduleName}' is version ${e.version} but the other modules are version ${cn}.`)) : tn(t(`'${e.moduleName}' is incompatible.`));
	let n = e.validate?.();
	n && !n.isValid && tn(`${n.message}`);
}
function mn(e, t, n = !1) {
	n || (ln = !0), pn(e);
	let r = e.rowModels ?? ["all"];
	an.add(e);
	let i;
	t === void 0 ? i = on : (un = !0, sn[t] === void 0 && (sn[t] = {}), i = sn[t]);
	for (let t of r) i[t] === void 0 && (i[t] = {}), i[t][e.moduleName] = e;
	if (e.dependsOn) for (let r of e.dependsOn) mn(r, t, n);
}
function hn(e) {
	delete sn[e];
}
function gn(e, t, n) {
	let r = (n) => !!on[n]?.[e] || !!sn[t]?.[n]?.[e];
	return r(n) || r("all");
}
function _n() {
	return un;
}
function vn(e, t) {
	let n = sn[e] ?? {};
	return [
		...Object.values(on.all ?? {}),
		...Object.values(n.all ?? {}),
		...Object.values(on[t] ?? {}),
		...Object.values(n[t] ?? {})
	];
}
function yn() {
	return new Set(an);
}
function bn(e, t) {
	let n = sn[e] ?? {};
	return [...Object.values(n.all ?? {}), ...Object.values(n[t] ?? {})];
}
function xn() {
	return ln;
}
function Sn() {
	return dn;
}
function Cn(e) {
	for (let t of e) {
		if ("setLicenseKey" in t) return t;
		if (t.dependsOn) {
			let e = Cn(t.dependsOn);
			if (e) return e;
		}
	}
}
var U = "35.2.1", wn = 2e3, Tn = 100, En = "_version_", Dn = null, On = `${Qt}/javascript-data-grid`;
function kn(e) {
	On = e;
}
function An(e, t, n) {
	return Dn?.(e, t) ?? [Ln(e, t, n)];
}
function jn(e, t, n, r, i) {
	e(`${r ? "warning" : "error"} #${t}`, ...An(t, n, i));
}
function Mn(e) {
	if (!e) return String(e);
	let t = {};
	for (let n of Object.keys(e)) typeof e[n] != "object" && typeof e[n] != "function" && (t[n] = e[n]);
	return JSON.stringify(t);
}
function Nn(e) {
	let t = e;
	return e instanceof Error ? t = e.toString() : typeof e == "object" && (t = Mn(e)), t;
}
function Pn(e, t) {
	return `${e}?${t.toString()}`;
}
function Fn(e, t, n) {
	let r = Array.from(t.entries()).sort((e, t) => t[1].length - e[1].length), i = Pn(e, t);
	for (let [a, o] of r) {
		if (a === En) continue;
		let r = i.length - n;
		if (r <= 0) break;
		let s = r + 3, c = o.length - s > Tn ? o.slice(0, o.length - s) + "..." : o.slice(0, Tn) + "...";
		t.set(a, c), i = Pn(e, t);
	}
	return i;
}
function In(e, t) {
	let n = new URLSearchParams();
	if (n.append(En, U), t) for (let e of Object.keys(t)) n.append(e, Nn(t[e]));
	let r = `${On}/errors/${e}`, i = Pn(r, n);
	return i.length <= wn ? i : Fn(r, n, wn);
}
var Ln = (e, t, n) => {
	let r = In(e, t), i = `${n ? n + " \n" : ""}Visit ${r}`;
	return Sn() ? i : `${i}${n ? "" : " \n  Alternatively register the ValidationModule to see the full message in the console."}`;
};
function W(...e) {
	jn(en, e[0], e[1], !0);
}
function Rn(...e) {
	jn(tn, e[0], e[1], !1);
}
function zn(e, t, n) {
	jn(tn, e, t, !1, n);
}
function Bn(e, t) {
	let n = t[0];
	return `error #${n} ` + An(n, t[1], e).join(" ");
}
function Vn(...e) {
	return Bn(void 0, e);
}
function Hn(e, t) {
	return e.get("rowModelType") === t;
}
function Un(e, t) {
	return Hn(e, "clientSide");
}
function Wn(e, t) {
	return Hn(e, "serverSide");
}
function G(e, t) {
	return e.get("domLayout") === t;
}
function Gn(e) {
	return fr(e) !== void 0;
}
function Kn(e) {
	return typeof e.get("getRowHeight") == "function";
}
function qn(e, t) {
	return t ? !e.get("enableStrictPivotColumnOrder") : e.get("maintainColumnOrder");
}
function Jn({ gos: e, formula: t }) {
	let n = e.get("rowNumbers");
	return n || !!t?.active && n !== !1;
}
function Yn(e, t, n = !1, r) {
	let { gos: i, environment: a } = e;
	if (r ??= a.getDefaultRowHeight(), Kn(i)) {
		if (n) return {
			height: r,
			estimated: !0
		};
		let e = {
			node: t,
			data: t.data
		}, a = i.getCallback("getRowHeight")(e);
		if (Qn(a)) return a === 0 && W(23), {
			height: Math.max(1, a),
			estimated: !1
		};
	}
	if (t.detail && i.get("masterDetail")) return Xn(i);
	let o = i.get("rowHeight");
	return {
		height: o && Qn(o) ? o : r,
		estimated: !1
	};
}
function Xn(e) {
	if (e.get("detailRowAutoHeight")) return {
		height: 1,
		estimated: !1
	};
	let t = e.get("detailRowHeight");
	return Qn(t) ? {
		height: t,
		estimated: !1
	} : {
		height: 300,
		estimated: !1
	};
}
function Zn(e) {
	let { environment: t, gos: n } = e, r = n.get("rowHeight");
	if (!r || L(r)) return t.getDefaultRowHeight();
	let i = t.refreshRowHeightVariable();
	return i === -1 ? (W(24), t.getDefaultRowHeight()) : i;
}
function Qn(e) {
	return !isNaN(e) && typeof e == "number" && isFinite(e);
}
function $n(e, t, n) {
	let r = t[e.getDomDataKey()];
	return r ? r[n] : void 0;
}
function er(e, t, n, r) {
	let i = e.getDomDataKey(), a = t[i];
	L(a) && (a = {}, t[i] = a), a[n] = r;
}
function tr(e) {
	return e.get("ensureDomOrder") ? !1 : e.get("animateRows");
}
function nr(e) {
	return !(e.get("paginateChildRows") || e.get("groupHideOpenParents") || G(e, "print"));
}
function rr(e) {
	return !e.get("autoGroupColumnDef")?.comparator && !e.get("treeData");
}
function ir(e) {
	return e.get("groupHideOpenParents") ? !0 : e.get("groupDisplayType") === "multipleColumns";
}
function ar(e) {
	return ir(e) && e.get("groupHideColumnsUntilExpanded") && Un(e);
}
function or(e, t) {
	return t ? !1 : e.get("groupDisplayType") === "groupRows";
}
function sr(e, t, n) {
	return !!t.group && !t.footer && or(e, n);
}
function cr(e) {
	return e?.checkboxes ?? !0;
}
function lr(e) {
	if (typeof e == "object") return e.checkboxLocation ?? "selectionColumn";
}
function ur(e) {
	let t = e.get("cellSelection");
	return t === void 0 ? e.get("enableRangeSelection") : !!t;
}
function dr(e) {
	let t = e.get("cellSelection") ?? !1;
	return (typeof t == "object" && t.enableColumnSelection) ?? !1;
}
function fr(e) {
	let t = "beanName" in e && e.beanName === "gos" ? e.get("rowSelection") : e.rowSelection;
	if (typeof t == "string") switch (t) {
		case "multiple": return "multiRow";
		case "single": return "singleRow";
		default: return;
	}
	switch (t?.mode) {
		case "multiRow":
		case "singleRow": return t.mode;
		default: return;
	}
}
function pr(e, t = !0) {
	let n = e.get("rowSelection");
	return typeof n == "object" ? n.mode === "multiRow" ? n.selectAll : "all" : t ? "all" : void 0;
}
function mr(e) {
	let t = e.get("rowSelection");
	return typeof t == "string" ? !1 : t?.mode === "multiRow" ? t.ctrlASelectsRows ?? !1 : !1;
}
function hr(e) {
	return e.get("columnMenu") === "legacy";
}
function gr(e) {
	return !e || e.length < 2 ? e : "on" + e[0].toUpperCase() + e.substring(1);
}
function _r(e, t, n) {
	typeof e != "object" && (e = {});
	let r = { ...e };
	for (let e of n) {
		let n = t[e];
		n !== void 0 && (r[e] = n);
	}
	return r;
}
function vr(e, t) {
	if (!e) return;
	let n = {}, r = !1;
	for (let t of Object.keys(e)) n[t] = e[t], r = !0;
	if (!r) return;
	let i = {
		type: "gridOptionsChanged",
		options: n
	};
	t.dispatchEvent(i);
	let a = {
		type: "componentStateChanged",
		...n
	};
	t.dispatchEvent(a);
}
function K(e, t) {
	return e.addCommon(t);
}
function yr(e, t) {
	return e[t] ?? e.gridOptions?.[t] ?? Xt(t) ?? Zt[t];
}
function br({ gos: e }, t) {
	return t.button === 2 || t.ctrlKey && e.get("allowContextMenuWithControlKey");
}
var xr = {
	resizable: !0,
	sortable: !0
}, Sr = 0;
function Cr() {
	return Sr++;
}
function wr(e) {
	return e instanceof Dr;
}
var Tr = [
	"asc",
	"desc",
	null
], Er = [
	{
		type: "absolute",
		direction: "asc"
	},
	{
		type: "absolute",
		direction: "desc"
	},
	null
], Dr = class extends H {
	constructor(e, t, n, r) {
		super(), this.colDef = e, this.userProvidedColDef = t, this.colId = n, this.primary = r, this.isColumn = !0, this.instanceId = Cr(), this.autoHeaderHeight = null, this.sortDef = Or(), this._wasSortExplicitlyRemoved = !1, this.moving = !1, this.resizing = !1, this.menuVisible = !1, this.formulaRef = null, this.lastLeftPinned = !1, this.firstRightPinned = !1, this.filterActive = !1, this.colEventSvc = new R(), this.tooltipEnabled = !1, this.rowGroupActive = !1, this.pivotActive = !1, this.aggregationActive = !1, this.flex = null, this.colIdSanitised = ue(n);
	}
	destroy() {
		super.destroy(), this.beans.rowSpanSvc?.deregister(this);
	}
	getInstanceId() {
		return this.instanceId;
	}
	initState() {
		let { colDef: e, beans: { sortSvc: t, pinnedCols: n, colFlex: r } } = this;
		t?.initCol(this);
		let i = e.hide;
		i === void 0 ? this.visible = !e.initialHide : this.visible = !i, n?.initCol(this), r?.initCol(this);
	}
	setColDef(e, t, n) {
		let r = e.spanRows !== this.colDef.spanRows;
		this.colDef = e, this.userProvidedColDef = t, this.initMinAndMaxWidths(), this.initDotNotation(), this.initTooltip(), r && (this.beans.rowSpanSvc?.deregister(this), this.initRowSpan()), this.dispatchColEvent("colDefChanged", n);
	}
	getUserProvidedColDef() {
		return this.userProvidedColDef;
	}
	getParent() {
		return this.parent;
	}
	getOriginalParent() {
		return this.originalParent;
	}
	postConstruct() {
		this.initState(), this.initMinAndMaxWidths(), this.resetActualWidth("gridInitializing"), this.initDotNotation(), this.initTooltip(), this.initRowSpan(), this.addPivotListener();
	}
	initDotNotation() {
		let { gos: e, colDef: { field: t, tooltipField: n } } = this, r = e.get("suppressFieldDotNotation");
		this.fieldContainsDots = I(t) && t.includes(".") && !r, this.tooltipFieldContainsDots = I(n) && n.includes(".") && !r;
	}
	initMinAndMaxWidths() {
		let e = this.colDef;
		this.minWidth = e.minWidth ?? this.beans.environment.getDefaultColumnMinWidth(), this.maxWidth = e.maxWidth ?? 2 ** 53 - 1;
	}
	initTooltip() {
		this.beans.tooltipSvc?.initCol(this);
	}
	initRowSpan() {
		this.colDef.spanRows && this.beans.rowSpanSvc?.register(this);
	}
	addPivotListener() {
		let e = this.beans.pivotColDefSvc, t = this.colDef.pivotValueColumn;
		!e || !t || this.addManagedListeners(t, { colDefChanged: (t) => {
			let n = e.recreateColDef(this.colDef);
			this.setColDef(n, n, t.source);
		} });
	}
	resetActualWidth(e) {
		let t = this.calculateColInitialWidth(this.colDef);
		this.setActualWidth(t, e, !0);
	}
	calculateColInitialWidth(e) {
		let t = e.width ?? e.initialWidth ?? 200;
		return Math.max(Math.min(t, this.maxWidth), this.minWidth);
	}
	isEmptyGroup() {
		return !1;
	}
	isRowGroupDisplayed(e) {
		return this.beans.showRowGroupCols?.isRowGroupDisplayed(this, e) ?? !1;
	}
	isPrimary() {
		return this.primary;
	}
	isFilterAllowed() {
		return !!this.colDef.filter;
	}
	isFieldContainsDots() {
		return this.fieldContainsDots;
	}
	isTooltipEnabled() {
		return this.tooltipEnabled;
	}
	isTooltipFieldContainsDots() {
		return this.tooltipFieldContainsDots;
	}
	getHighlighted() {
		return this.highlighted;
	}
	__addEventListener(e, t) {
		this.colEventSvc.addEventListener(e, t);
	}
	__removeEventListener(e, t) {
		this.colEventSvc.removeEventListener(e, t);
	}
	addEventListener(e, t) {
		this.frameworkEventListenerService = this.beans.frameworkOverrides.createLocalEventListenerWrapper?.(this.frameworkEventListenerService, this.colEventSvc);
		let n = this.frameworkEventListenerService?.wrap(e, t) ?? t;
		this.colEventSvc.addEventListener(e, n);
	}
	removeEventListener(e, t) {
		let n = this.frameworkEventListenerService?.unwrap(e, t) ?? t;
		this.colEventSvc.removeEventListener(e, n);
	}
	createColumnFunctionCallbackParams(e) {
		return K(this.gos, {
			node: e,
			data: e.data,
			column: this,
			colDef: this.colDef
		});
	}
	isSuppressNavigable(e) {
		return this.beans.cellNavigation?.isSuppressNavigable(this, e) ?? !1;
	}
	isCellEditable(e) {
		return this.beans.editSvc?.isCellEditable({
			rowNode: e,
			column: this
		}) ?? !1;
	}
	isSuppressFillHandle() {
		return !!this.colDef.suppressFillHandle;
	}
	isAutoHeight() {
		return !!this.colDef.autoHeight;
	}
	isAutoHeaderHeight() {
		return !!this.colDef.autoHeaderHeight;
	}
	isRowDrag(e) {
		return this.isColumnFunc(e, this.colDef.rowDrag);
	}
	isDndSource(e) {
		return this.isColumnFunc(e, this.colDef.dndSource);
	}
	isCellCheckboxSelection(e) {
		return this.beans.selectionSvc?.isCellCheckboxSelection(this, e) ?? !1;
	}
	isSuppressPaste(e) {
		return this.isColumnFunc(e, this.colDef?.suppressPaste ?? null);
	}
	isResizable() {
		return !!this.getColDefValue("resizable");
	}
	getColDefValue(e) {
		return this.colDef[e] ?? xr[e];
	}
	isColumnFunc(e, t) {
		return typeof t == "boolean" ? t : typeof t == "function" ? t(this.createColumnFunctionCallbackParams(e)) : !1;
	}
	createColumnEvent(e, t) {
		return K(this.gos, {
			type: e,
			column: this,
			columns: [this],
			source: t
		});
	}
	isMoving() {
		return this.moving;
	}
	getSort() {
		return this.sortDef.direction;
	}
	getSortDef() {
		return this.sortDef.direction ? this.sortDef : null;
	}
	getColDefAllowedSortTypes() {
		let e = [], { sort: t, initialSort: n } = this.colDef, r = t === null ? t : Pr(t?.type), i = n === null ? n : Pr(n?.type);
		return r && e.push(r), i && e.push(i), e;
	}
	getSortingOrder() {
		let e = this.getColDefAllowedSortTypes().includes("absolute") ? Er : Tr;
		return (this.colDef.sortingOrder ?? this.gos.get("sortingOrder") ?? e).map((e) => Or(e));
	}
	getAvailableSortTypes() {
		let e = this.getSortingOrder().reduce((e, t) => (t.direction && e.push(t.type), e), this.getColDefAllowedSortTypes());
		return new Set(e);
	}
	get wasSortExplicitlyRemoved() {
		return this._wasSortExplicitlyRemoved;
	}
	setSortDef(e, t = !1) {
		t || (this._wasSortExplicitlyRemoved = !e.direction), this.sortDef = e;
	}
	isSortable() {
		return !!this.getColDefValue("sortable");
	}
	isSortAscending() {
		return this.getSort() === "asc";
	}
	isSortDescending() {
		return this.getSort() === "desc";
	}
	isSortNone() {
		return L(this.getSort());
	}
	isSorting() {
		return I(this.getSort());
	}
	getSortIndex() {
		return this.sortIndex;
	}
	isMenuVisible() {
		return this.menuVisible;
	}
	getAggFunc() {
		return this.aggFunc;
	}
	getLeft() {
		return this.left;
	}
	getOldLeft() {
		return this.oldLeft;
	}
	getRight() {
		return this.left + this.actualWidth;
	}
	setLeft(e, t) {
		this.oldLeft = this.left, this.left !== e && (this.left = e, this.dispatchColEvent("leftChanged", t));
	}
	isFilterActive() {
		return this.filterActive;
	}
	isHovered() {
		return W(261), !!this.beans.colHover?.isHovered(this);
	}
	setFirstRightPinned(e, t) {
		this.firstRightPinned !== e && (this.firstRightPinned = e, this.dispatchColEvent("firstRightPinnedChanged", t));
	}
	setLastLeftPinned(e, t) {
		this.lastLeftPinned !== e && (this.lastLeftPinned = e, this.dispatchColEvent("lastLeftPinnedChanged", t));
	}
	isFirstRightPinned() {
		return this.firstRightPinned;
	}
	isLastLeftPinned() {
		return this.lastLeftPinned;
	}
	isPinned() {
		return this.pinned === "left" || this.pinned === "right";
	}
	isPinnedLeft() {
		return this.pinned === "left";
	}
	isPinnedRight() {
		return this.pinned === "right";
	}
	getPinned() {
		return this.pinned;
	}
	setVisible(e, t) {
		let n = e === !0;
		this.visible !== n && (this.visible = n, this.dispatchColEvent("visibleChanged", t)), this.dispatchStateUpdatedEvent("hide");
	}
	isVisible() {
		return this.visible;
	}
	isSpanHeaderHeight() {
		return !this.getColDef().suppressSpanHeaderHeight;
	}
	getFirstRealParent() {
		let e = this.getOriginalParent();
		for (; e?.isPadding();) e = e.getOriginalParent();
		return e;
	}
	getColumnGroupPaddingInfo() {
		let e = this.getParent();
		if (!e?.isPadding()) return {
			numberOfParents: 0,
			isSpanningTotal: !1
		};
		let t = e.getPaddingLevel() + 1, n = !0;
		for (; e;) {
			if (!e.isPadding()) {
				n = !1;
				break;
			}
			e = e.getParent();
		}
		return {
			numberOfParents: t,
			isSpanningTotal: n
		};
	}
	getColDef() {
		return this.colDef;
	}
	getDefinition() {
		return this.colDef;
	}
	getColumnGroupShow() {
		return this.colDef.columnGroupShow;
	}
	getColId() {
		return this.colId;
	}
	getId() {
		return this.colId;
	}
	getUniqueId() {
		return this.colId;
	}
	getActualWidth() {
		return this.actualWidth;
	}
	getAutoHeaderHeight() {
		return this.autoHeaderHeight;
	}
	setAutoHeaderHeight(e) {
		let t = e !== this.autoHeaderHeight;
		return this.autoHeaderHeight = e, t;
	}
	createBaseColDefParams(e) {
		return K(this.gos, {
			node: e,
			data: e.data,
			colDef: this.colDef,
			column: this
		});
	}
	getColSpan(e) {
		if (L(this.colDef.colSpan)) return 1;
		let t = this.createBaseColDefParams(e), n = this.colDef.colSpan(t);
		return Math.max(n, 1);
	}
	getRowSpan(e) {
		if (L(this.colDef.rowSpan)) return 1;
		let t = this.createBaseColDefParams(e), n = this.colDef.rowSpan(t);
		return Math.max(n, 1);
	}
	setActualWidth(e, t, n = !1) {
		e = Math.max(e, this.minWidth), e = Math.min(e, this.maxWidth), this.actualWidth !== e && (this.actualWidth = e, this.flex != null && t !== "flex" && t !== "gridInitializing" && (this.flex = null), n || this.fireColumnWidthChangedEvent(t)), this.dispatchStateUpdatedEvent("width");
	}
	fireColumnWidthChangedEvent(e) {
		this.dispatchColEvent("widthChanged", e);
	}
	isGreaterThanMax(e) {
		return e > this.maxWidth;
	}
	getMinWidth() {
		return this.minWidth;
	}
	getMaxWidth() {
		return this.maxWidth;
	}
	getFlex() {
		return this.flex;
	}
	isRowGroupActive() {
		return this.rowGroupActive;
	}
	isPivotActive() {
		return this.pivotActive;
	}
	isAnyFunctionActive() {
		return this.isPivotActive() || this.isRowGroupActive() || this.isValueActive();
	}
	isAnyFunctionAllowed() {
		return this.isAllowPivot() || this.isAllowRowGroup() || this.isAllowValue();
	}
	isValueActive() {
		return this.aggregationActive;
	}
	isAllowPivot() {
		return this.colDef.enablePivot === !0;
	}
	isAllowValue() {
		return this.colDef.enableValue === !0;
	}
	isAllowRowGroup() {
		return this.colDef.enableRowGroup === !0;
	}
	isAllowFormula() {
		return this.colDef.allowFormula === !0;
	}
	dispatchColEvent(e, t, n) {
		let r = this.createColumnEvent(e, t);
		n && Kt(r, n), this.colEventSvc.dispatchEvent(r);
	}
	dispatchStateUpdatedEvent(e) {
		this.colEventSvc.dispatchEvent({
			type: "columnStateUpdated",
			key: e
		});
	}
};
function Or(e) {
	return jr(e) ? {
		direction: e.direction,
		type: e.type
	} : {
		direction: Nr(e),
		type: Pr(e)
	};
}
function kr(e) {
	return e === "asc" || e === "desc" || e === null;
}
function Ar(e) {
	return e === "default" || e === "absolute";
}
function jr(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return Ar(t.type) && kr(t.direction);
}
function Mr(e, t) {
	return e ? t ? e.type === t.type && e.direction === t.direction : e ? e.direction === null : !0 : t ? t.direction === null : !0;
}
function Nr(e) {
	return kr(e) ? e : null;
}
function Pr(e) {
	return Ar(e) ? e : "default";
}
function Fr(e, t, n) {
	let r = n?.() ?? t.sortSvc.getDisplaySortForColumn(e), i = Pr(r?.type), a = Nr(r?.direction), o = e.getAvailableSortTypes();
	return {
		isDefaultSortAllowed: o.has("default"),
		isAbsoluteSortAllowed: o.has("absolute"),
		isAbsoluteSort: i === "absolute",
		isDefaultSort: i === "default",
		isAscending: a === "asc",
		isDescending: a === "desc",
		direction: a
	};
}
function q(e) {
	return e instanceof Ir;
}
var Ir = class extends H {
	constructor(e, t, n, r) {
		super(), this.colGroupDef = e, this.groupId = t, this.padding = n, this.level = r, this.isColumn = !1, this.expandable = !1, this.instanceId = Cr(), this.expandableListenerRemoveCallback = null, this.expanded = !!e?.openByDefault;
	}
	destroy() {
		this.expandableListenerRemoveCallback && this.reset(null, void 0), super.destroy();
	}
	reset(e, t) {
		this.colGroupDef = e, this.level = t, this.originalParent = null, this.expandableListenerRemoveCallback && this.expandableListenerRemoveCallback(), this.children = void 0, this.expandable = void 0;
	}
	getInstanceId() {
		return this.instanceId;
	}
	getOriginalParent() {
		return this.originalParent;
	}
	getLevel() {
		return this.level;
	}
	isVisible() {
		return this.children ? this.children.some((e) => e.isVisible()) : !1;
	}
	isPadding() {
		return this.padding;
	}
	setExpanded(e) {
		this.expanded = e === void 0 ? !1 : e, this.dispatchLocalEvent({ type: "expandedChanged" });
	}
	isExpandable() {
		return this.expandable;
	}
	isExpanded() {
		return this.expanded;
	}
	getGroupId() {
		return this.groupId;
	}
	getId() {
		return this.getGroupId();
	}
	setChildren(e) {
		this.children = e;
	}
	getChildren() {
		return this.children;
	}
	getColGroupDef() {
		return this.colGroupDef;
	}
	getLeafColumns() {
		let e = [];
		return this.addLeafColumns(e), e;
	}
	forEachLeafColumn(e) {
		if (this.children) for (let t of this.children) wr(t) ? e(t) : q(t) && t.forEachLeafColumn(e);
	}
	addLeafColumns(e) {
		if (this.children) for (let t of this.children) wr(t) ? e.push(t) : q(t) && t.addLeafColumns(e);
	}
	getColumnGroupShow() {
		let e = this.colGroupDef;
		if (e) return e.columnGroupShow;
	}
	setupExpandable() {
		this.setExpandable(), this.expandableListenerRemoveCallback && this.expandableListenerRemoveCallback();
		let e = this.onColumnVisibilityChanged.bind(this);
		for (let t of this.getLeafColumns()) t.__addEventListener("visibleChanged", e);
		this.expandableListenerRemoveCallback = () => {
			for (let t of this.getLeafColumns()) t.__removeEventListener("visibleChanged", e);
			this.expandableListenerRemoveCallback = null;
		};
	}
	setExpandable() {
		if (this.isPadding()) return;
		let e = !1, t = !1, n = !1, r = this.findChildrenRemovingPadding();
		for (let i = 0, a = r.length; i < a; i++) {
			let a = r[i];
			if (!a.isVisible()) continue;
			let o = a.getColumnGroupShow();
			o === "open" ? (e = !0, n = !0) : o === "closed" ? (t = !0, n = !0) : (e = !0, t = !0);
		}
		let i = e && t && n;
		this.expandable !== i && (this.expandable = i, this.dispatchLocalEvent({ type: "expandableChanged" }));
	}
	findChildrenRemovingPadding() {
		let e = [], t = (n) => {
			for (let r of n) q(r) && r.isPadding() ? t(r.children) : e.push(r);
		};
		return t(this.children), e;
	}
	onColumnVisibilityChanged() {
		this.setExpandable();
	}
}, Lr = {
	numericColumn: {
		headerClass: "ag-right-aligned-header",
		cellClass: "ag-right-aligned-cell"
	},
	rightAligned: {
		headerClass: "ag-right-aligned-header",
		cellClass: "ag-right-aligned-cell"
	}
};
function Rr(e, t, n) {
	let r = {}, i = e.gos;
	return Object.assign(r, i.get("defaultColGroupDef")), Object.assign(r, t), i.validateColDef(r, n), r;
}
var zr = class {
	constructor() {
		this.existingKeys = {};
	}
	addExistingKeys(e) {
		for (let t = 0; t < e.length; t++) this.existingKeys[e[t]] = !0;
	}
	getUniqueKey(e, t) {
		e = ae(e);
		let n = 0;
		for (;;) {
			let r = e ?? t;
			if (r ? n !== 0 && (r += "_" + n) : r = n, !this.existingKeys[r]) {
				let t = String(r);
				return e && n > 0 && W(273, {
					providedId: e,
					usedId: t
				}), this.existingKeys[t] = !0, t;
			}
			n++;
		}
	}
}, Br = (e, t) => {
	q(e) && e.setupExpandable(), e.originalParent = t;
};
function Vr(e, t = null, n, r, i) {
	let a = new zr(), { existingCols: o, existingGroups: s, existingColKeys: c } = Hr(r);
	a.addExistingKeys(c);
	let l = Ur(e, t, 0, n, o, a, s, i), { colGroupSvc: u } = e, d = u?.findMaxDepth(l, 0) ?? 0, f = u ? u.balanceColumnTree(l, 0, d, a) : l;
	return Qr(null, f, Br), {
		columnTree: f,
		treeDepth: d
	};
}
function Hr(e) {
	let t = [], n = [], r = [];
	return e && Qr(null, e, (e) => {
		if (q(e)) {
			let t = e;
			n.push(t);
		} else {
			let n = e;
			r.push(n.getId()), t.push(n);
		}
	}), {
		existingCols: t,
		existingGroups: n,
		existingColKeys: r
	};
}
function Ur(e, t, n, r, i, a, o, s) {
	if (!t) return [];
	let { colGroupSvc: c } = e, l = Array(t.length);
	for (let u = 0; u < l.length; u++) {
		let d = t[u];
		c && Zr(d) ? l[u] = c.createProvidedColumnGroup(r, d, n, i, a, o, s) : l[u] = Wr(e, r, d, i, a, s);
	}
	return l;
}
function Wr(e, t, n, r, i, a) {
	let o = qr(n, r);
	o && r?.splice(o.idx, 1);
	let s = o?.column;
	if (s) {
		let t = Jr(e, n, s.getColId());
		s.setColDef(t, n, a), Kr(e, s, t, a);
	} else {
		let r = i.getUniqueKey(n.colId, n.field);
		s = new Dr(Jr(e, n, r), n, r, t), e.context.createBean(s);
	}
	return e.dataTypeSvc?.addColumnListeners(s), s;
}
function Gr(e, t, n, r, i, a, o, s) {
	let { sortSvc: c, pinnedCols: l, colFlex: u } = e;
	n !== void 0 && t.setVisible(!n, s), c && (c.updateColSort(t, r, s), i !== void 0 && c.setColSortIndex(t, i)), a !== void 0 && l?.setColPinned(t, a), o !== void 0 && u?.setColFlex(t, o);
}
function Kr(e, t, n, r) {
	Gr(e, t, n.hide, n.sort, n.sortIndex, n.pinned, n.flex, r);
	let i = t.getFlex();
	if (!(i != null && i > 0)) if (n.width != null) t.setActualWidth(n.width, r);
	else {
		let e = t.getActualWidth();
		t.setActualWidth(e, r);
	}
}
function qr(e, t) {
	if (t) for (let n = 0; n < t.length; n++) {
		let r = t[n].getUserProvidedColDef();
		if (r) {
			if (e.colId != null) {
				if (t[n].getId() === e.colId) return {
					idx: n,
					column: t[n]
				};
				continue;
			}
			if (e.field != null) {
				if (r.field === e.field) return {
					idx: n,
					column: t[n]
				};
				continue;
			}
			if (r === e) return {
				idx: n,
				column: t[n]
			};
		}
	}
}
function Jr(e, t, n, r) {
	let { gos: i, dataTypeSvc: a } = e, o = {}, s = i.get("defaultColDef");
	Kt(o, s, !1, !0);
	let c = Yr(e, o, t, n);
	c && Xr(e, c, o);
	let l = o.cellDataType;
	Kt(o, t, !1, !0), l !== void 0 && (o.cellDataType = l);
	let u = i.get("autoGroupColumnDef"), d = rr(i);
	return t.rowGroup && u && d && Kt(o, {
		sort: u.sort,
		initialSort: u.initialSort
	}, !1, !0), a?.postProcess(o), a?.validateColDef(o, t, s, n), i.validateColDef(o, n, r), o;
}
function Yr(e, t, n, r) {
	let i = e.dataTypeSvc?.updateColDefAndGetColumnType(t, n, r), a = n.type ?? i ?? t.type;
	return t.type = a, a ? oi(a) : void 0;
}
function Xr(e, t, n) {
	if (!t.length) return;
	let r = Object.assign({}, Lr), i = e.gos.get("columnTypes") || {};
	for (let e of Object.keys(i)) {
		let t = i[e];
		e in r ? W(34, { key: e }) : (t.type && W(35), r[e] = t);
	}
	for (let e of t) {
		let t = r[e.trim()];
		t ? Kt(n, t, !1, !0) : W(36, { t: e });
	}
}
function Zr(e) {
	return e.children !== void 0;
}
function Qr(e, t, n) {
	if (t) for (let r = 0; r < t.length; r++) {
		let i = t[r];
		q(i) && Qr(i, i.getChildren(), n), n(i, e);
	}
}
var $r = "ag-Grid-AutoColumn";
function ei(e) {
	let t = [], n = (e) => {
		for (let r = 0; r < e.length; r++) {
			let i = e[r];
			wr(i) ? t.push(i) : q(i) && n(i.getChildren());
		}
	};
	return n(e), t;
}
function ti(e) {
	return e.reduce((e, t) => e + t.getActualWidth(), 0);
}
function ni(e, t, n) {
	let r = {};
	if (!t) return;
	Qr(null, t, (e) => {
		r[e.getInstanceId()] = e;
	}), n && Qr(null, n, (e) => {
		r[e.getInstanceId()] = null;
	});
	let i = Object.values(r).filter((e) => e != null);
	e.context.destroyBeans(i);
}
function ri(e) {
	return e.getId().startsWith($r);
}
function ii(e) {
	return (typeof e == "string" ? e : "getColId" in e ? e.getColId() : e.colId)?.startsWith("ag-Grid-SelectionColumn") ?? !1;
}
function ai(e) {
	return (typeof e == "string" ? e : "getColId" in e ? e.getColId() : e.colId)?.startsWith("ag-Grid-RowNumbersColumn") ?? !1;
}
function oi(e) {
	let t = [];
	return e instanceof Array ? t = e : typeof e == "string" && (t = e.split(",")), t;
}
function si(e) {
	return e === "optionsUpdated" ? "gridOptionsChanged" : e;
}
function ci(e, t) {
	return e === t || e.colId == t || e.getColDef() === t;
}
var li = (e, t) => (n, r) => {
	let i = {
		value1: void 0,
		value2: void 0
	}, a = !1;
	return e && (e[n] !== void 0 && (i.value1 = e[n], a = !0), I(r) && e[r] !== void 0 && (i.value2 = e[r], a = !0)), !a && t && (t[n] !== void 0 && (i.value1 = t[n]), I(r) && t[r] !== void 0 && (i.value2 = t[r])), i;
};
function ui(e) {
	let { sort: t, initialSort: n } = e, r = jr(t) || kr(t), i = jr(n) || kr(n);
	return r ? Or(t) : i ? Or(n) : null;
}
function di(e, t) {
	return e + "_" + t;
}
function J(e) {
	return e instanceof fi;
}
var fi = class extends H {
	constructor(e, t, n, r) {
		super(), this.providedColumnGroup = e, this.groupId = t, this.partId = n, this.pinned = r, this.isColumn = !1, this.displayedChildren = [], this.autoHeaderHeight = null, this.parent = null, this.colIdSanitised = ue(this.getUniqueId());
	}
	reset() {
		this.parent = null, this.children = null, this.displayedChildren = null;
	}
	getParent() {
		return this.parent;
	}
	getUniqueId() {
		return di(this.groupId, this.partId);
	}
	isEmptyGroup() {
		return this.displayedChildren.length === 0;
	}
	isMoving() {
		let e = this.getProvidedColumnGroup().getLeafColumns();
		return !e || e.length === 0 ? !1 : e.every((e) => e.isMoving());
	}
	checkLeft() {
		for (let e of this.displayedChildren) J(e) && e.checkLeft();
		if (this.displayedChildren.length > 0) if (this.gos.get("enableRtl")) {
			let e = M(this.displayedChildren).getLeft();
			this.setLeft(e);
		} else {
			let e = this.displayedChildren[0].getLeft();
			this.setLeft(e);
		}
		else this.setLeft(null);
	}
	getLeft() {
		return this.left;
	}
	getOldLeft() {
		return this.oldLeft;
	}
	setLeft(e) {
		this.oldLeft = this.left, this.left !== e && (this.left = e, this.dispatchLocalEvent({ type: "leftChanged" }));
	}
	getPinned() {
		return this.pinned;
	}
	getGroupId() {
		return this.groupId;
	}
	getPartId() {
		return this.partId;
	}
	getActualWidth() {
		let e = 0;
		for (let t of this.displayedChildren ?? []) e += t.getActualWidth();
		return e;
	}
	isResizable() {
		if (!this.displayedChildren) return !1;
		let e = !1;
		for (let t of this.displayedChildren) t.isResizable() && (e = !0);
		return e;
	}
	getMinWidth() {
		let e = 0;
		for (let t of this.displayedChildren) e += t.getMinWidth();
		return e;
	}
	addChild(e) {
		this.children ||= [], this.children.push(e);
	}
	getDisplayedChildren() {
		return this.displayedChildren;
	}
	getLeafColumns() {
		let e = [];
		return this.addLeafColumns(e), e;
	}
	getDisplayedLeafColumns() {
		let e = [];
		return this.addDisplayedLeafColumns(e), e;
	}
	getDefinition() {
		return this.providedColumnGroup.getColGroupDef();
	}
	getColGroupDef() {
		return this.providedColumnGroup.getColGroupDef();
	}
	isPadding() {
		return this.providedColumnGroup.isPadding();
	}
	isExpandable() {
		return this.providedColumnGroup.isExpandable();
	}
	isExpanded() {
		return this.providedColumnGroup.isExpanded();
	}
	setExpanded(e) {
		this.providedColumnGroup.setExpanded(e);
	}
	isAutoHeaderHeight() {
		return !!this.getColGroupDef()?.autoHeaderHeight;
	}
	getAutoHeaderHeight() {
		return this.autoHeaderHeight;
	}
	setAutoHeaderHeight(e) {
		let t = e !== this.autoHeaderHeight;
		return this.autoHeaderHeight = e, t;
	}
	addDisplayedLeafColumns(e) {
		for (let t of this.displayedChildren ?? []) wr(t) ? e.push(t) : J(t) && t.addDisplayedLeafColumns(e);
	}
	addLeafColumns(e) {
		for (let t of this.children ?? []) wr(t) ? e.push(t) : J(t) && t.addLeafColumns(e);
	}
	getChildren() {
		return this.children;
	}
	getColumnGroupShow() {
		return this.providedColumnGroup.getColumnGroupShow();
	}
	getProvidedColumnGroup() {
		return this.providedColumnGroup;
	}
	getPaddingLevel() {
		let e = this.getParent();
		return !this.isPadding() || !e?.isPadding() ? 0 : 1 + e.getPaddingLevel();
	}
	calculateDisplayedColumns() {
		this.displayedChildren = [];
		let e = this;
		for (; e?.isPadding();) e = e.getParent();
		if (!(e && e.getProvidedColumnGroup().isExpandable())) {
			this.displayedChildren = this.children, this.dispatchLocalEvent({ type: "displayedChildrenChanged" });
			return;
		}
		for (let t of this.children ?? []) if (!(J(t) && !t.displayedChildren?.length)) switch (t.getColumnGroupShow()) {
			case "open":
				e.getProvidedColumnGroup().isExpanded() && this.displayedChildren.push(t);
				break;
			case "closed":
				e.getProvidedColumnGroup().isExpanded() || this.displayedChildren.push(t);
				break;
			default:
				this.displayedChildren.push(t);
				break;
		}
		this.dispatchLocalEvent({ type: "displayedChildrenChanged" });
	}
}, Y = {
	BACKSPACE: "Backspace",
	TAB: "Tab",
	ENTER: "Enter",
	ESCAPE: "Escape",
	SPACE: " ",
	LEFT: "ArrowLeft",
	UP: "ArrowUp",
	RIGHT: "ArrowRight",
	DOWN: "ArrowDown",
	DELETE: "Delete",
	F2: "F2",
	PAGE_UP: "PageUp",
	PAGE_DOWN: "PageDown",
	PAGE_HOME: "Home",
	PAGE_END: "End",
	A: "KeyA",
	C: "KeyC",
	D: "KeyD",
	V: "KeyV",
	X: "KeyX",
	Y: "KeyY",
	Z: "KeyZ"
}, pi = 65, mi = 67, hi = 86, gi = 68, _i = 90, vi = 89;
function yi(e) {
	let { keyCode: t } = e, n;
	switch (t) {
		case pi:
			n = Y.A;
			break;
		case mi:
			n = Y.C;
			break;
		case hi:
			n = Y.V;
			break;
		case gi:
			n = Y.D;
			break;
		case _i:
			n = Y.Z;
			break;
		case vi:
			n = Y.Y;
			break;
		default: n = e.code;
	}
	return n;
}
var X = class e {
	constructor(e) {
		this.status = 0, this.resolution = null, this.waiters = [], e((e) => this.onDone(e), (e) => this.onReject(e));
	}
	static all(t) {
		return t.length ? new e((e) => {
			let n = t.length, r = Array(n);
			t.forEach((t, i) => {
				t.then((t) => {
					r[i] = t, n--, n === 0 && e(r);
				});
			});
		}) : e.resolve();
	}
	static resolve(t = null) {
		return new e((e) => e(t));
	}
	then(t) {
		return new e((e) => {
			this.status === 1 ? e(t(this.resolution)) : this.waiters.push((n) => e(t(n)));
		});
	}
	onDone(e) {
		this.status = 1, this.resolution = e;
		for (let t of this.waiters) t(e);
	}
	onReject(e) {}
}, bi = class extends Nt {
	constructor() {
		super(...arguments), this.beanName = "dragAndDrop", this.dragSourceAndParamsList = [], this.dragItem = null, this.dragInitialSourcePointerOffsetX = 0, this.dragInitialSourcePointerOffsetY = 0, this.lastMouseEvent = null, this.lastDraggingEvent = null, this.dragSource = null, this.dragImageCompPromise = null, this.dragImageComp = null, this.dragImageLastIcon = void 0, this.dragImageLastLabel = void 0, this.dropTargets = [], this.externalDropZoneCount = 0, this.lastDropTarget = null;
	}
	addDragSource(e, t = !1) {
		let n = {
			capturePointer: !0,
			dragSource: e,
			eElement: e.eElement,
			dragStartPixels: e.dragStartPixels,
			onDragStart: (t) => this.onDragStart(e, t),
			onDragStop: this.onDragStop.bind(this),
			onDragging: this.onDragging.bind(this),
			onDragCancel: this.onDragCancel.bind(this),
			includeTouch: t
		};
		this.dragSourceAndParamsList.push(n), this.beans.dragSvc.addDragSource(n);
	}
	setDragImageCompIcon(e, t = !1) {
		let n = this.dragImageComp;
		n && (t || this.dragImageLastIcon !== e) && (this.dragImageLastIcon = e, n.setIcon(e, t));
	}
	removeDragSource(e) {
		let { dragSourceAndParamsList: t, beans: n } = this;
		for (let r = 0, i = t.length; r < i; r++) if (t[r].dragSource === e) {
			let e = t[r];
			n.dragSvc?.removeDragSource(e), t.splice(r, 1);
			break;
		}
	}
	destroy() {
		let { dragSourceAndParamsList: e, dropTargets: t, beans: n } = this, r = n.dragSvc;
		for (let t of e) r?.removeDragSource(t);
		e.length = 0, t.length = 0, this.externalDropZoneCount = 0, this.clearDragAndDropProperties(), super.destroy();
	}
	nudge() {
		let e = this.lastMouseEvent;
		e && this.onDragging(e, !0);
	}
	onDragStart(e, t) {
		this.lastMouseEvent = t, this.dragSource = e, this.dragItem = e.getDragItem();
		let n = e.eElement.getBoundingClientRect();
		this.dragInitialSourcePointerOffsetX = t.clientX - n.left, this.dragInitialSourcePointerOffsetY = t.clientY - n.top, e.onDragStarted?.(), this.createAndUpdateDragImageComp(e);
	}
	onDragStop(e) {
		let { dragSource: t, lastDropTarget: n } = this;
		if (t?.onDragStopped?.(), n) {
			let t = this.dropTargetEvent(n, e, !1);
			n.onDragStop?.(t);
		}
		this.clearDragAndDropProperties();
	}
	onDragCancel() {
		let { dragSource: e, lastDropTarget: t, lastMouseEvent: n } = this;
		if (e?.onDragCancelled?.(), t && n) {
			let e = this.dropTargetEvent(t, n, !1);
			t.onDragCancel?.(e);
		}
		this.clearDragAndDropProperties();
	}
	onDragging(e, t = !1) {
		this.positionDragImageComp(e);
		let n = this.findCurrentDropTarget(e), { lastDropTarget: r, dragSource: i, dragItem: a } = this, o = !1;
		if (n !== r) {
			if (o = !0, r) {
				let n = this.dropTargetEvent(r, e, t);
				r.onDragLeave?.(n);
			}
			if (r !== null && !n ? this.handleExit(i, a) : r === null && n && this.handleEnter(i, a), n) {
				let r = this.dropTargetEvent(n, e, t);
				n.onDragEnter?.(r);
			}
			this.lastDropTarget = n;
		} else if (n) {
			let r = this.dropTargetEvent(n, e, t);
			n.onDragging?.(r), r?.changed && (o = !0);
		}
		this.lastMouseEvent = e, o && this.updateDragImageComp();
	}
	clearDragAndDropProperties() {
		this.removeDragImageComp(this.dragImageComp), this.dragImageCompPromise = null, this.dragImageLastIcon = void 0, this.dragImageLastLabel = void 0, this.lastMouseEvent = null, this.lastDraggingEvent = null, this.lastDropTarget = null, this.dragItem = null, this.dragInitialSourcePointerOffsetX = 0, this.dragInitialSourcePointerOffsetY = 0, this.dragSource = null;
	}
	getAllContainersFromDropTarget(e) {
		let t = e.getContainer(), n = e.getSecondaryContainers?.(), r = n?.length;
		if (!r) return [[t]];
		let i = Array(r + 1);
		i[0] = [t];
		for (let e = 0; e < r; ++e) i[e + 1] = n[e];
		return i;
	}
	isMouseOnDropTarget(e, t) {
		let n = this.getAllContainersFromDropTarget(t), r = !1, i = (e, t) => {
			for (let n of t) {
				let { width: t, height: r, left: i, right: a, top: o, bottom: s } = n.getBoundingClientRect();
				if (t === 0 || r === 0) return !1;
				let c = e.clientX >= i && e.clientX < a, l = e.clientY >= o && e.clientY < s;
				if (!c || !l) return !1;
			}
			return !0;
		};
		for (let t of n) if (i(e, t)) {
			r = !0;
			break;
		}
		let { eElement: a, type: o } = this.dragSource;
		return t.targetContainsSource && !t.getContainer().contains(a) ? !1 : r && t.isInterestedIn(o, a);
	}
	findCurrentDropTarget(e) {
		let t = [], n = this.dropTargets;
		for (let r = 0, i = n.length; r < i; ++r) {
			let i = n[r];
			this.isMouseOnDropTarget(e, i) && t.push(i);
		}
		let r = t.length;
		if (r === 0) return null;
		if (r === 1) return t[0];
		let i = pe(this.beans).elementsFromPoint(e.clientX, e.clientY);
		for (let e = 0, n = i.length; e < n; ++e) {
			let n = i[e];
			for (let e = 0, r = t.length; e < r; e++) {
				let r = t[e], i = this.getAllContainersFromDropTarget(r), a = !1;
				for (let e = 0, t = i.length; e < t && !a; e++) {
					let t = i[e];
					for (let e = 0, r = t.length; e < r; e++) if (t[e] === n) {
						a = !0;
						break;
					}
				}
				if (a) return r;
			}
		}
		return null;
	}
	addDropTarget(e) {
		this.dropTargets.push(e), e.external && this.externalDropZoneCount++;
	}
	removeDropTarget(e) {
		let t = e.getContainer(), n = this.dropTargets, r = 0;
		for (let e = 0, i = n.length; e < i; ++e) {
			let i = n[e];
			if (i.getContainer() === t) {
				i.external && --this.externalDropZoneCount;
				continue;
			}
			r !== e && (n[r] = i), ++r;
		}
		n.length = r;
	}
	hasExternalDropZones() {
		return this.externalDropZoneCount > 0;
	}
	findExternalZone(e) {
		let t = this.dropTargets;
		for (let n = 0, r = t.length; n < r; ++n) {
			let r = t[n];
			if (r.external && r.getContainer() === e) return r;
		}
		return null;
	}
	dropTargetEvent(e, t, n) {
		let { dragSource: r, dragItem: i, lastDraggingEvent: a, lastMouseEvent: o, dragInitialSourcePointerOffsetX: s, dragInitialSourcePointerOffsetY: c } = this, l = e.getContainer(), u = l.getBoundingClientRect(), { clientX: d, clientY: f } = t, p = d - (o?.clientX || 0), m = f - (o?.clientY || 0), h = this.createEvent({
			event: t,
			x: d - u.left,
			y: f - u.top,
			vDirection: m > 0 ? "down" : m < 0 ? "up" : null,
			hDirection: p < 0 ? "left" : p > 0 ? "right" : null,
			initialSourcePointerOffsetX: s,
			initialSourcePointerOffsetY: c,
			dragSource: r,
			fromNudge: n,
			dragItem: i,
			dropZoneTarget: l,
			dropTarget: a?.dropTarget ?? null,
			changed: !!a?.changed
		});
		return this.lastDraggingEvent = h, h;
	}
	positionDragImageComp(e) {
		let t = this.dragImageComp?.getGui();
		t && Dt(t, e, this.beans);
	}
	removeDragImageComp(e) {
		this.dragImageComp === e && (this.dragImageComp = null), e && (e.getGui()?.remove(), this.destroyBean(e));
	}
	createAndUpdateDragImageComp(e) {
		let t = this.createDragImageComp(e) ?? null;
		this.dragImageCompPromise = t, t?.then((e) => {
			let n = this.lastMouseEvent;
			if (t !== this.dragImageCompPromise || !n || !this.isAlive()) {
				this.destroyBean(e);
				return;
			}
			this.dragImageCompPromise = null, this.dragImageLastIcon = void 0, this.dragImageLastLabel = void 0;
			let r = this.dragImageComp;
			r !== e && (this.dragImageComp = e, this.removeDragImageComp(r)), e && (this.appendDragImageComp(e), this.updateDragImageComp(), this.positionDragImageComp(n));
		});
	}
	appendDragImageComp(e) {
		let t = e.getGui(), n = t.style;
		n.position = "absolute", n.zIndex = "9999", this.beans.dragSvc?.hasPointerCapture() && (n.pointerEvents = "none"), this.gos.setInstanceDomData(t), this.beans.environment.applyThemeClasses(t), n.top = "20px", n.left = "20px";
		let r = ge(this.beans);
		r ? r.appendChild(t) : this.warnNoBody();
	}
	updateDragImageComp() {
		let { dragImageComp: e, dragSource: t, lastDropTarget: n, lastDraggingEvent: r, dragImageLastLabel: i } = this;
		if (!e) return;
		this.setDragImageCompIcon(n?.getIconName?.(r) ?? null);
		let a = t?.dragItemName;
		typeof a == "function" && (a = a(r)), a ||= "", i !== a && (this.dragImageLastLabel = a, e.setLabel(a));
	}
};
function xi(e) {
	return e ? e.prototype && "getGui" in e.prototype : !1;
}
function Si(e, t, n, r) {
	let { name: i } = n, a, o, s, c, l, u;
	if (t) {
		let n = t, d = n[i + "Selector"], f = d ? d(r) : null, p = (t) => {
			typeof t == "string" ? a = t : t != null && t !== !0 && (e.isFrameworkComponent(t) ? s = t : o = t);
		};
		f ? (p(f.component), c = f.params, l = f.popup, u = f.popupPosition) : p(n[i]);
	}
	return {
		compName: a,
		jsComp: o,
		fwComp: s,
		paramsFromSelector: c,
		popupFromSelector: l,
		popupPositionFromSelector: u
	};
}
var Ci = class extends H {
	constructor() {
		super(...arguments), this.beanName = "userCompFactory";
	}
	wireBeans(e) {
		this.agCompUtils = e.agCompUtils, this.registry = e.registry, this.frameworkCompWrapper = e.frameworkCompWrapper, this.gridOptions = e.gridOptions;
	}
	getCompDetailsFromGridOptions(e, t, n, r = !1) {
		return this.getCompDetails(this.gridOptions, e, t, n, r);
	}
	getCompDetails(e, t, n, r, i = !1) {
		let { name: a, cellRenderer: o } = t, { compName: s, jsComp: c, fwComp: l, paramsFromSelector: u, popupFromSelector: d, popupPositionFromSelector: f } = Si(this.beans.frameworkOverrides, e, t, r), p, m, h = (e) => {
			let t = this.registry.getUserComponent(a, e);
			t && (c = t.componentFromFramework ? void 0 : t.component, l = t.componentFromFramework ? t.component : void 0, p = t.params, m = t.processParams);
		};
		if (s != null && h(s), c == null && l == null && n != null && h(n), c && o && !xi(c) && (c = this.agCompUtils?.adaptFunction(t, c)), !c && !l) {
			let { validation: e } = this.beans;
			i && (s !== n || !n) ? s ? e?.isProvidedUserComp(s) || Rn(50, { compName: s }) : n ? e || Rn(260, {
				...this.gos.getModuleErrorParams(),
				propName: a,
				compName: n
			}) : Rn(216, { name: a }) : n && !e && Rn(146, { comp: n });
			return;
		}
		let g = this.mergeParams(e, t, r, u, p, m), _ = c == null, v = c ?? l;
		return {
			componentFromFramework: _,
			componentClass: v,
			params: g,
			type: t,
			popupFromSelector: d,
			popupPositionFromSelector: f,
			newAgStackInstance: () => this.newAgStackInstance(v, _, g, t)
		};
	}
	newAgStackInstance(e, t, n, r) {
		let i = !t, a;
		a = i ? new e() : this.frameworkCompWrapper.wrap(e, r.mandatoryMethods, r.optionalMethods, r), this.createBean(a);
		let o = a.init?.(n);
		return o == null ? X.resolve(a) : o.then(() => a);
	}
	mergeParams(e, t, n, r = null, i, a) {
		let o = {
			...n,
			...i
		}, s = e?.[t.name + "Params"];
		return typeof s == "function" ? Kt(o, s(n)) : typeof s == "object" && Kt(o, s), Kt(o, r), a ? a(o) : o;
	}
}, wi = {
	name: "dragAndDropImageComponent",
	mandatoryMethods: ["setIcon", "setLabel"]
}, Ti = {
	name: "headerComponent",
	optionalMethods: ["refresh"]
}, Ei = { name: "innerHeaderComponent" }, Di = { name: "innerHeaderGroupComponent" }, Oi = { name: "headerGroupComponent" }, ki = {
	name: "cellRenderer",
	optionalMethods: ["refresh", "afterGuiAttached"],
	cellRenderer: !0
}, Ai = {
	name: "loadingCellRenderer",
	cellRenderer: !0
}, ji = {
	name: "fullWidthCellRenderer",
	optionalMethods: ["refresh", "afterGuiAttached"],
	cellRenderer: !0
}, Mi = {
	name: "loadingCellRenderer",
	cellRenderer: !0
}, Ni = {
	name: "groupRowRenderer",
	optionalMethods: ["afterGuiAttached"],
	cellRenderer: !0
}, Pi = {
	name: "detailCellRenderer",
	optionalMethods: ["refresh"],
	cellRenderer: !0
};
function Fi(e, t) {
	return e.getCompDetailsFromGridOptions(wi, "agDragAndDropImage", t, !0);
}
function Ii(e, t, n) {
	return e.getCompDetails(t, Ti, "agColumnHeader", n);
}
function Li(e, t, n) {
	return e.getCompDetails(t, Ei, void 0, n);
}
function Ri(e, t) {
	let n = t.columnGroup.getColGroupDef();
	return e.getCompDetails(n, Oi, "agColumnGroupHeader", t);
}
function zi(e, t, n) {
	return e.getCompDetails(t, Di, void 0, n);
}
function Bi(e, t) {
	return e.getCompDetailsFromGridOptions(ji, void 0, t, !0);
}
function Vi(e, t) {
	return e.getCompDetailsFromGridOptions(Mi, "agLoadingCellRenderer", t, !0);
}
function Hi(e, t) {
	return e.getCompDetailsFromGridOptions(Ni, "agGroupRowRenderer", t, !0);
}
function Ui(e, t) {
	return e.getCompDetailsFromGridOptions(Pi, "agDetailCellRenderer", t, !0);
}
function Wi(e, t, n) {
	return e.getCompDetails(t, ki, void 0, n);
}
function Gi(e, t, n) {
	return e.getCompDetails(t, Ai, "agSkeletonCellRenderer", n, !0);
}
var Ki = class extends bi {
	createEvent(e) {
		return K(this.gos, e);
	}
	createDragImageComp(e) {
		let { gos: t, beans: n } = this;
		return Fi(n.userCompFactory, K(t, { dragSource: e }))?.newAgStackInstance();
	}
	handleEnter(e, t) {
		e?.onGridEnter?.(t);
	}
	handleExit(e, t) {
		e?.onGridExit?.(t);
	}
	warnNoBody() {
		W(54);
	}
	isDropZoneWithinThisGrid(e) {
		return this.beans.ctrlsSvc.getGridBodyCtrl().eGridBody.contains(e.dropZoneTarget);
	}
	registerGridDropTarget(e, t) {
		let n = {
			getContainer: e,
			isInterestedIn: (e) => e === 1 || e === 0,
			getIconName: () => "notAllowed"
		};
		this.addDropTarget(n), t.addDestroyFunc(() => this.removeDropTarget(n));
	}
}, qi = (e, t) => ({
	tag: "div",
	ref: `${e}Resizer`,
	cls: `ag-resizer ag-resizer-${t}`
});
qi("eTopLeft", "topLeft"), qi("eTop", "top"), qi("eTopRight", "topRight"), qi("eRight", "right"), qi("eBottomRight", "bottomRight"), qi("eBottom", "bottom"), qi("eBottomLeft", "bottomLeft"), qi("eLeft", "left");
var Ji = class {
	constructor(e) {
		this.cssClassStates = {}, this.getGui = e;
	}
	toggleCss(e, t) {
		if (e) {
			if (e.includes(" ")) {
				let n = (e || "").split(" ");
				if (n.length > 1) {
					for (let e of n) this.toggleCss(e, t);
					return;
				}
			}
			this.cssClassStates[e] !== t && e.length && (this.getGui()?.classList.toggle(e, t), this.cssClassStates[e] = t);
		}
	}
}, Yi = 0, Xi = class extends Nt {
	constructor(e, t) {
		super(), this.suppressDataRefValidation = !1, this.displayed = !0, this.visible = !0, this.compId = Yi++, this.cssManager = new Ji(() => this.eGui), this.componentSelectors = new Map((t ?? []).map((e) => [e.selector, e])), e && this.setTemplate(e);
	}
	preConstruct() {
		this.wireTemplate(this.getGui()), this.addGlobalCss();
	}
	wireTemplate(e, t) {
		e && this.gos && (this.applyElementsToComponent(e), this.createChildComponentsFromTags(e, t));
	}
	getCompId() {
		return this.compId;
	}
	getDataRefAttribute(e) {
		return e.getAttribute ? e.getAttribute(mt) : null;
	}
	applyElementsToComponent(e, t, n, r = null) {
		if (t === void 0 && (t = this.getDataRefAttribute(e)), t) {
			let i = this[t];
			if (i === null) this[t] = r ?? e;
			else {
				let e = n?.[t];
				if (!this.suppressDataRefValidation && !e) throw Error(`data-ref: ${t} on ${this.constructor.name} with ${i}`);
			}
		}
	}
	createChildComponentsFromTags(e, t) {
		let n = [];
		for (let t of e.childNodes ?? []) n.push(t);
		for (let r of n) {
			if (!(r instanceof HTMLElement)) continue;
			let n = this.createComponentFromElement(r, (e) => {
				let t = e.getGui();
				if (t) for (let e of r.attributes ?? []) t.setAttribute(e.name, e.value);
			}, t);
			if (n) {
				if (n.addItems && r.children.length) {
					this.createChildComponentsFromTags(r, t);
					let e = Array.prototype.slice.call(r.children);
					n.addItems(e);
				}
				this.swapComponentForNode(n, e, r);
			} else r.childNodes && this.createChildComponentsFromTags(r, t);
		}
	}
	createComponentFromElement(e, t, n) {
		let r = e.nodeName, i = this.getDataRefAttribute(e), a = r.indexOf("AG-") === 0, o = a ? this.componentSelectors.get(r) : null, s = null;
		if (o) {
			let e = n && i ? n[i] : void 0;
			s = new o.component(e), s.setParentComponent(this), this.createBean(s, null, t);
		} else if (a) throw Error(`selector: ${r}`);
		return this.applyElementsToComponent(e, i, n, s), s;
	}
	swapComponentForNode(e, t, n) {
		let r = e.getGui();
		t.replaceChild(r, n), t.insertBefore(document.createComment(n.nodeName), r), this.addDestroyFunc(this.destroyBean.bind(this, e));
	}
	activateTabIndex(e, t) {
		let n = t ?? this.gos.get("tabIndex");
		e ||= [], e.length || e.push(this.getGui());
		for (let t of e) t.setAttribute("tabindex", n.toString());
	}
	setTemplate(e, t, n) {
		let r;
		r = typeof e == "string" || e == null ? it(e) : _t(e), this.setTemplateFromElement(r, t, n);
	}
	setTemplateFromElement(e, t, n, r = !1) {
		if (this.eGui = e, this.suppressDataRefValidation = r, t) for (let e = 0; e < t.length; e++) {
			let n = t[e];
			this.componentSelectors.set(n.selector, n);
		}
		this.wireTemplate(e, n);
	}
	getGui() {
		return this.eGui;
	}
	getFocusableElement() {
		return this.eGui;
	}
	getAriaElement() {
		return this.getFocusableElement();
	}
	setParentComponent(e) {
		this.parentComponent = e;
	}
	getParentComponent() {
		return this.parentComponent;
	}
	setGui(e) {
		this.eGui = e;
	}
	queryForHtmlElement(e) {
		return this.eGui.querySelector(e);
	}
	getContainerAndElement(e, t) {
		let n = t;
		return e == null ? null : (n ||= this.eGui, lt(e) ? {
			element: e,
			parent: n
		} : {
			element: e.getGui(),
			parent: n
		});
	}
	prependChild(e, t) {
		let { element: n, parent: r } = this.getContainerAndElement(e, t) || {};
		!n || !r || r.prepend(n);
	}
	appendChild(e, t) {
		let { element: n, parent: r } = this.getContainerAndElement(e, t) || {};
		!n || !r || r.appendChild(n);
	}
	isDisplayed() {
		return this.displayed;
	}
	setVisible(e, t = {}) {
		if (e !== this.visible) {
			this.visible = e;
			let { skipAriaHidden: n } = t;
			Ge(this.eGui, e, { skipAriaHidden: n });
		}
	}
	setDisplayed(e, t = {}) {
		if (e !== this.displayed) {
			this.displayed = e;
			let { skipAriaHidden: n } = t;
			V(this.eGui, e, { skipAriaHidden: n });
			let r = {
				type: "displayChanged",
				visible: this.displayed
			};
			this.dispatchLocalEvent(r);
		}
	}
	destroy() {
		this.parentComponent &&= void 0, super.destroy();
	}
	addGuiEventListener(e, t, n) {
		this.eGui.addEventListener(e, t, n), this.addDestroyFunc(() => this.eGui.removeEventListener(e, t));
	}
	addCss(e) {
		this.cssManager.toggleCss(e, !0);
	}
	removeCss(e) {
		this.cssManager.toggleCss(e, !1);
	}
	toggleCss(e, t) {
		this.cssManager.toggleCss(e, t);
	}
	registerCSS(e) {
		this.css === Zi ? (this.css = [e], this.addGlobalCss()) : (this.css ||= [], this.css.push(e));
	}
	addGlobalCss() {
		if (Array.isArray(this.css)) {
			let e = "component-" + Object.getPrototypeOf(this)?.constructor?.name;
			for (let t of this.css ?? []) this.beans.environment.addGlobalCSS(t, e);
		}
		this.css = Zi;
	}
}, Zi = Symbol(), Qi = class extends Xi {}, $i, ea, ta, na, ra, ia, aa;
function oa() {
	return $i === void 0 && ($i = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)), $i;
}
function sa() {
	return ea === void 0 && (ea = /(firefox)/i.test(navigator.userAgent)), ea;
}
function ca() {
	return ta === void 0 && (ta = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)), ta;
}
function la() {
	return na === void 0 && (na = /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1), na;
}
function ua(e) {
	if (!e) return null;
	let t = e.tabIndex, n = e.getAttribute("tabIndex");
	return t === -1 && (n === null || n === "" && !sa()) ? null : t.toString();
}
function da() {
	if (aa !== void 0) return aa;
	if (!document.body) return -1;
	let e = 1e6, t = sa() ? 6e6 : 1e9, n = document.createElement("div");
	for (document.body.appendChild(n);;) {
		let r = e * 2;
		if (n.style.height = r + "px", r > t || n.clientHeight !== r) break;
		e = r;
	}
	return n.remove(), aa = e, e;
}
function fa() {
	return ia ?? pa(), ia;
}
function pa() {
	let e = document.body, t = document.createElement("div");
	t.style.width = t.style.height = "100px", t.style.opacity = "0", t.style.overflow = "scroll", t.style.msOverflowStyle = "scrollbar", t.style.position = "absolute", e.appendChild(t);
	let n = t.offsetWidth - t.clientWidth;
	n === 0 && t.clientWidth === 0 && (n = null), t.parentNode && t.remove(), n != null && (ia = n, ra = n === 0);
}
function ma() {
	return ra ?? pa(), ra;
}
var ha = !1, ga = 0;
function _a(e) {
	ga > 0 || (e.addEventListener("keydown", ya), e.addEventListener("mousedown", ya));
}
function va(e) {
	ga > 0 || (e.removeEventListener("keydown", ya), e.removeEventListener("mousedown", ya));
}
function ya(e) {
	let t = ha, n = e.type === "keydown";
	n && (e.ctrlKey || e.metaKey || e.altKey) || t !== n && (ha = n);
}
function ba(e) {
	let t = B(e);
	return _a(t), ga++, () => {
		ga--, va(t);
	};
}
function xa() {
	return ha;
}
function Sa(e, t, n = !1) {
	let r = He, i = Ue;
	t && (i += ", " + t), n && (i += ", [tabindex=\"-1\"]");
	let a = Array.prototype.slice.apply(e.querySelectorAll(r)).filter((e) => rt(e)), o = Array.prototype.slice.apply(e.querySelectorAll(i));
	return o.length ? ((e, t) => e.filter((e) => t.indexOf(e) === -1))(a, o) : a;
}
function Ca(e, t = !1, n = !1, r = !1) {
	let i = Sa(e, r ? ".ag-tab-guard" : null, n), a = t ? M(i) : i[0];
	return a ? (a.focus({ preventScroll: !0 }), !0) : !1;
}
function wa(e, t, n, r) {
	let i = Sa(t, n ? ":not([tabindex=\"-1\"])" : null), a = z(e), o;
	o = n ? i.findIndex((e) => e.contains(a)) : i.indexOf(a);
	let s = o + (r ? -1 : 1);
	return s < 0 || s >= i.length ? null : i[s];
}
function Ta(e, t = 5) {
	let n = 0;
	for (; e && ua(e) === null && ++n <= t;) e = e.parentElement;
	return ua(e) === null ? null : e;
}
var Ea = "ag-focus-managed", Da = class extends Nt {
	constructor(e, t = {
		isStopPropagation: () => !1,
		stopPropagation: () => {}
	}, n = {}) {
		super(), this.eFocusable = e, this.stopPropagationCallbacks = t, this.callbacks = n, this.callbacks = {
			shouldStopEventPropagation: () => !1,
			onTabKeyDown: (e) => {
				if (e.defaultPrevented) return;
				let t = wa(this.beans, this.eFocusable, !1, e.shiftKey);
				t && (t.focus(), e.preventDefault());
			},
			...n
		};
	}
	postConstruct() {
		let { eFocusable: e, callbacks: { onFocusIn: t, onFocusOut: n } } = this;
		e.classList.add(Ea), this.addKeyDownListeners(e), t && this.addManagedElementListeners(e, { focusin: t }), n && this.addManagedElementListeners(e, { focusout: n });
	}
	addKeyDownListeners(e) {
		this.addManagedElementListeners(e, { keydown: (e) => {
			if (e.defaultPrevented || this.stopPropagationCallbacks.isStopPropagation(e)) return;
			let { callbacks: t } = this;
			if (t.shouldStopEventPropagation(e)) {
				this.stopPropagationCallbacks.stopPropagation(e);
				return;
			}
			e.key === Y.TAB ? t.onTabKeyDown(e) : t.handleKeyDown && t.handleKeyDown(e);
		} });
	}
}, Oa = "__ag_Grid_Stop_Propagation";
function ka(e) {
	e[Oa] = !0;
}
function Aa(e) {
	return e[Oa] === !0;
}
var ja = {
	isStopPropagation: Aa,
	stopPropagation: ka
}, Ma = class extends Da {
	constructor(e, t) {
		super(e, ja, t);
	}
};
function Na(e) {
	let t = e.rowModel;
	return t.getType() === "clientSide" ? t : void 0;
}
var Pa = 500, Fa = 550, Ia, La = (e) => {
	if (!Ia) Ia = /* @__PURE__ */ new WeakSet();
	else if (Ia.has(e)) return !1;
	return Ia.add(e), !0;
}, Ra = class {
	constructor(e, t = !1) {
		this.eElement = e, this.preventClick = t, this.startListener = null, this.handlers = [], this.eventSvc = void 0, this.touchStart = null, this.lastTapTime = null, this.longPressTimer = 0, this.moved = !1;
	}
	addEventListener(e, t) {
		let n = this.eventSvc;
		if (!n) {
			if (n === null) return;
			this.eventSvc = n = new R();
			let e = this.onTouchStart.bind(this);
			this.startListener = e, this.eElement.addEventListener("touchstart", e, { passive: !0 });
		}
		n.addEventListener(e, t);
	}
	removeEventListener(e, t) {
		this.eventSvc?.removeEventListener(e, t);
	}
	onTouchStart(e) {
		if (this.touchStart || !La(e)) return;
		let t = e.touches[0];
		this.touchStart = t;
		let n = this.handlers;
		if (!n.length) {
			let e = this.eElement, t = e.ownerDocument, r = this.onTouchMove.bind(this), i = this.onTouchEnd.bind(this), a = this.onTouchCancel.bind(this), o = { passive: !0 }, s = { passive: !1 };
			Ot(n, [
				e,
				"touchmove",
				r,
				o
			], [
				t,
				"touchcancel",
				a,
				o
			], [
				t,
				"touchend",
				i,
				s
			], [
				t,
				"contextmenu",
				At,
				s
			]);
		}
		this.clearLongPress(), this.longPressTimer = window.setTimeout(() => {
			this.longPressTimer = 0, this.touchStart === t && !this.moved && (this.moved = !0, this.eventSvc?.dispatchEvent({
				type: "longTap",
				touchStart: t,
				touchEvent: e
			}));
		}, Fa);
	}
	onTouchMove(e) {
		let { moved: t, touchStart: n } = this;
		if (!t && n) {
			let t = Tt(n, e.touches);
			t && !wt(t, n, 4) && (this.clearLongPress(), this.moved = !0);
		}
	}
	onTouchEnd(e) {
		let t = this.touchStart;
		!t || !Tt(t, e.changedTouches) || (this.moved || (this.eventSvc?.dispatchEvent({
			type: "tap",
			touchStart: t
		}), this.checkDoubleTap(t)), this.preventClick && At(e), this.cancel());
	}
	onTouchCancel(e) {
		let t = this.touchStart;
		!t || !Tt(t, e.changedTouches) || (this.lastTapTime = null, this.cancel());
	}
	checkDoubleTap(e) {
		let t = Date.now(), n = this.lastTapTime;
		n && t - n > Pa && (this.eventSvc?.dispatchEvent({
			type: "doubleTap",
			touchStart: e
		}), t = null), this.lastTapTime = t;
	}
	cancel() {
		this.clearLongPress(), kt(this.handlers), this.touchStart = null;
	}
	clearLongPress() {
		window.clearTimeout(this.longPressTimer), this.longPressTimer = 0, this.moved = !1;
	}
	destroy() {
		let e = this.startListener;
		e && (this.startListener = null, this.eElement.removeEventListener("touchstart", e)), this.cancel(), this.eElement = null, this.eventSvc = null;
	}
}, za = 1, Ba = class {
	constructor(e) {
		this.beans = {}, this.createdBeans = [], this.destroyed = !1, this.instanceId = za++, e?.beanClasses && (this.beanDestroyComparator = e.beanDestroyComparator, this.init(e));
	}
	init(e) {
		this.id = e.id, this.beans.context = this, this.destroyCallback = e.destroyCallback;
		for (let t of Object.keys(e.providedBeanInstances)) this.beans[t] = e.providedBeanInstances[t];
		for (let t of e.beanClasses) {
			let e = new t();
			e.beanName ? this.beans[e.beanName] = e : console.error(`Bean ${t.name} is missing beanName`), this.createdBeans.push(e);
		}
		for (let t of e.derivedBeans ?? []) {
			let { beanName: e, bean: n } = t(this);
			this.beans[e] = n, this.createdBeans.push(n);
		}
		e.beanInitComparator && this.createdBeans.sort(e.beanInitComparator), this.initBeans(this.createdBeans);
	}
	getBeanInstances() {
		return Object.values(this.beans);
	}
	createBean(e, t) {
		return this.initBeans([e], t), e;
	}
	initBeans(e, t) {
		let n = this.beans;
		for (let t of e) t.preWireBeans?.(n), t.wireBeans?.(n);
		for (let t of e) t.preConstruct?.();
		t && e.forEach(t);
		for (let t of e) t.postConstruct?.();
	}
	getBeans() {
		return this.beans;
	}
	getBean(e) {
		return this.beans[e];
	}
	getId() {
		return this.id;
	}
	destroy() {
		if (this.destroyed) return;
		this.destroyed = !0;
		let e = this.getBeanInstances();
		this.beanDestroyComparator && e.sort(this.beanDestroyComparator), this.destroyBeans(e), this.beans = {}, this.createdBeans = [], this.destroyCallback?.();
	}
	destroyBean(e) {
		e?.destroy?.();
	}
	destroyBeans(e) {
		if (e) for (let t = 0; t < e.length; t++) this.destroyBean(e[t]);
		return [];
	}
	isDestroyed() {
		return this.destroyed;
	}
};
function Va(e) {
	return {
		beanName: "gridApi",
		bean: e.getBean("apiFunctionSvc").api
	};
}
var Ha = Object.fromEntries((/* @__PURE__ */ "licenseManager.environment.eventSvc.gos.paginationAutoPageSizeSvc.apiFunctionSvc.gridApi.registry.agCompUtils.userCompFactory.rowContainerHeight.horizontalResizeSvc.localeSvc.pinnedRowModel.dragSvc.colGroupSvc.visibleCols.popupSvc.selectionSvc.colFilter.quickFilter.filterManager.colModel.headerNavigation.pageBounds.pagination.pageBoundsListener.rowSpanSvc.stickyRowSvc.rowRenderer.expressionSvc.alignedGridsSvc.navigation.valueCache.valueSvc.autoWidthCalc.filterMenuFactory.dragAndDrop.focusSvc.cellNavigation.cellStyles.scrollVisibleSvc.sortSvc.colHover.colAnimation.autoColSvc.selectionColSvc.changeDetectionSvc.animationFrameSvc.undoRedo.colDefFactory.rowStyleSvc.rowNodeBlockLoader.rowNodeSorter.ctrlsSvc.pinnedCols.dataTypeSvc.syncSvc.overlays.stateSvc.expansionSvc.apiEventSvc.ariaAnnounce.menuSvc.colMoves.colAutosize.colFlex.colResize.pivotColsSvc.valueColsSvc.rowGroupColsSvc.colNames.colViewport.pivotResultCols.showRowGroupCols.validation".split(".")).map((e, t) => [e, t]));
function Ua(e, t) {
	return ((e.beanName ? Ha[e.beanName] : void 0) ?? 2 ** 53 - 1) - ((t.beanName ? Ha[t.beanName] : void 0) ?? 2 ** 53 - 1);
}
function Wa(e, t) {
	return e?.beanName === "gridDestroySvc" ? -1 : t?.beanName === "gridDestroySvc" ? 1 : 0;
}
function Ga(e, t) {
	let n = e.column === t.column, r = e.rowPinned === t.rowPinned, i = e.rowIndex === t.rowIndex;
	return n && r && i;
}
function Ka(e, t) {
	switch (e.rowPinned) {
		case "top":
			if (t.rowPinned !== "top") return !0;
			break;
		case "bottom":
			if (t.rowPinned !== "bottom") return !1;
			break;
		default:
			if (I(t.rowPinned)) return t.rowPinned !== "top";
			break;
	}
	return e.rowIndex < t.rowIndex;
}
function qa(e) {
	let t = 0, n, { pinnedRowModel: r, rowModel: i, pageBounds: a } = e;
	return r?.getPinnedTopRowCount() ? n = "top" : i.getRowCount() ? (n = null, t = a.getFirstRow()) : r?.getPinnedBottomRowCount() && (n = "bottom"), n === void 0 ? null : {
		rowIndex: t,
		rowPinned: n
	};
}
function Ja(e) {
	let t, n = null, { pinnedRowModel: r, pageBounds: i } = e, a = r?.getPinnedBottomRowCount(), o = r?.getPinnedTopRowCount();
	return a ? (n = "bottom", t = a - 1) : e.rowModel.getRowCount() ? t = i.getLastRow() : o && (n = "top", t = o - 1), t === void 0 ? null : {
		rowIndex: t,
		rowPinned: n
	};
}
function Ya(e, t) {
	switch (t.rowPinned) {
		case "top": return e.pinnedRowModel?.getPinnedTopRow(t.rowIndex);
		case "bottom": return e.pinnedRowModel?.getPinnedBottomRow(t.rowIndex);
		default: return e.rowModel.getRow(t.rowIndex);
	}
}
function Xa(e, t) {
	let n = e.spannedRowRenderer?.getCellByPosition(t);
	if (n) return n;
	let r = e.rowRenderer.getRowByPosition(t);
	return r ? r.getCellCtrl(t.column) : null;
}
function Za(e, t, n) {
	let { rowModel: r, pinnedRowModel: i } = e, a;
	return a ??= r?.getRowNode(t), n ? a ??= i?.getPinnedRowById(t, n) : (a ??= i?.getPinnedRowById(t, "top"), a ??= i?.getPinnedRowById(t, "bottom")), a;
}
function Qa(e, t, n = !1) {
	let { rowIndex: r, rowPinned: i } = t, { pageBounds: a, pinnedRowModel: o, rowModel: s } = e;
	return r === 0 ? i === "top" ? null : i === "bottom" && s.isRowsToRender() ? {
		rowIndex: a.getLastRow(),
		rowPinned: null
	} : o?.isRowsToRender("top") ? {
		rowIndex: o.getPinnedTopRowCount() - 1,
		rowPinned: "top"
	} : null : n ? eo(e, i ? void 0 : s.getRow(r), !0) ?? {
		rowIndex: r - 1,
		rowPinned: i
	} : {
		rowIndex: r - 1,
		rowPinned: i
	};
}
function $a(e, t, n = !1) {
	let { rowIndex: r, rowPinned: i } = t, { pageBounds: a, pinnedRowModel: o, rowModel: s } = e;
	return to(e, t) ? i === "bottom" ? null : i === "top" && s.isRowsToRender() ? {
		rowIndex: a.getFirstRow(),
		rowPinned: null
	} : o?.isRowsToRender("bottom") ? {
		rowIndex: 0,
		rowPinned: "bottom"
	} : null : n ? eo(e, i ? void 0 : s.getRow(r)) ?? {
		rowIndex: r + 1,
		rowPinned: i
	} : {
		rowIndex: r + 1,
		rowPinned: i
	};
}
function eo(e, t, n = !1) {
	let { gos: r, rowRenderer: i } = e;
	if (!t?.sticky || !nr(r)) return;
	let a = i.getStickyTopRowCtrls(), o = i.getStickyBottomRowCtrls(), s = !o.some((e) => e.rowNode.rowIndex === t.rowIndex), c = s ? a : o, l = (n ? -1 : 1) * (s ? -1 : 1), u;
	for (let e = 0; e < c.length; e++) if (c[e].rowNode.rowIndex === t.rowIndex) {
		u = c[e + l];
		break;
	}
	return u ? {
		rowIndex: u.rowNode.rowIndex,
		rowPinned: null
	} : void 0;
}
function to(e, t) {
	let { rowPinned: n, rowIndex: r } = t, { pinnedRowModel: i, pageBounds: a } = e;
	return n === "top" ? (i?.getPinnedTopRowCount() ?? 0) - 1 <= r : n === "bottom" ? (i?.getPinnedBottomRowCount() ?? 0) - 1 <= r : a.getLastRow() <= r;
}
function no(e) {
	return e.gos.get("suppressHeaderFocus") || !!e.overlays?.exclusive;
}
function ro(e) {
	return e.gos.get("suppressCellFocus") || !!e.overlays?.exclusive;
}
function io(e, t, n = !1) {
	let r = e.ctrlsSvc.get("gridCtrl"), i = r.focusNextInnerContainer(t);
	return i === !0 ? !0 : i === !1 ? i : ((n || !t && !r.isDetailGrid() && r.isFocusInsideGridBody()) && r.forceFocusOutOfContainer(t), !1);
}
function ao(e, t) {
	let n = e.focusSvc, r = n.getFocusedCell();
	if (r && t && Ga(r, t)) {
		let { rowIndex: r, rowPinned: i, column: a } = t;
		me(e) && n.setFocusedCell({
			rowIndex: r,
			column: a,
			rowPinned: i,
			forceBrowserFocus: !0,
			preventScrollOnBrowserFocus: !xa()
		});
	}
}
function oo(e, t) {
	let n = e.getFocusableContainerName();
	return n === "gridBody" ? t() : so(e, () => Sa(e.getGui(), ".ag-tab-guard").length > 0) ? n : null;
}
function so(e, t) {
	e.setAllowFocus?.(!0);
	try {
		return t();
	} finally {
		e.setAllowFocus?.(!1);
	}
}
function co(e) {
	return e.ctrlsSvc.getHeaderRowContainerCtrl()?.getRowCount() ?? 0;
}
function lo(e) {
	let t = [], n = e.ctrlsSvc.getHeaderRowContainerCtrls();
	for (let r of n) {
		if (!r) continue;
		let n = r.getGroupRowCount() || 0;
		for (let i = 0; i < n; i++) {
			let n = r.getGroupRowCtrlAtIndex(i), a = t[i];
			if (n) {
				let r = uo(e, n);
				(a == null || r > a) && (t[i] = r);
			}
		}
	}
	return t;
}
function uo(e, t) {
	let n = e.colModel.isPivotMode() ? _o(e) : ho(e), r = t.getHeaderCellCtrls();
	for (let e of r) {
		let { column: t } = e, r = t.getAutoHeaderHeight();
		r != null && r > n && t.isAutoHeaderHeight() && (n = r);
	}
	return n;
}
function fo(e) {
	let t = e.colModel.isPivotMode() ? go(e) : po(e);
	return e.colModel.forAllCols((e) => {
		let n = e.getAutoHeaderHeight();
		n != null && n > t && e.isAutoHeaderHeight() && (t = n);
	}), t;
}
function po(e) {
	return e.gos.get("headerHeight") ?? e.environment.getDefaultHeaderHeight();
}
function mo(e) {
	return e.gos.get("floatingFiltersHeight") ?? po(e);
}
function ho(e) {
	return e.gos.get("groupHeaderHeight") ?? po(e);
}
function go(e) {
	return e.gos.get("pivotHeaderHeight") ?? po(e);
}
function _o(e) {
	return e.gos.get("pivotGroupHeaderHeight") ?? ho(e);
}
function vo(e, t) {
	return e.headerRowIndex === t.headerRowIndex && e.column === t.column;
}
function yo(e) {
	return e?.headerRowIndex != null;
}
var bo = class extends H {
	setComp(e, t, n) {
		this.comp = e, this.eGui = t;
		let { beans: r } = this, { headerNavigation: i, touchSvc: a, ctrlsSvc: o } = r;
		i && this.createManagedBean(new Ma(n, {
			onTabKeyDown: this.onTabKeyDown.bind(this),
			handleKeyDown: this.handleKeyDown.bind(this),
			onFocusOut: this.onFocusOut.bind(this)
		})), this.addManagedEventListeners({
			columnPivotModeChanged: this.onPivotModeChanged.bind(this, r),
			displayedColumnsChanged: this.onDisplayedColumnsChanged.bind(this, r)
		}), this.onPivotModeChanged(r), this.setupHeaderHeight();
		let s = this.onHeaderContextMenu.bind(this);
		this.addManagedElementListeners(this.eGui, { contextmenu: s }), a?.mockHeaderContextMenu(this, s), o.register("gridHeaderCtrl", this);
	}
	setupHeaderHeight() {
		let e = this.setHeaderHeight.bind(this);
		e(), this.addManagedPropertyListeners([
			"headerHeight",
			"pivotHeaderHeight",
			"groupHeaderHeight",
			"pivotGroupHeaderHeight",
			"floatingFiltersHeight"
		], e), this.addManagedEventListeners({
			headerRowsChanged: e,
			columnHeaderHeightChanged: e,
			columnGroupHeaderHeightChanged: () => pt(this.beans, () => e()),
			stylesChanged: e,
			advancedFilterEnabledChanged: e
		});
	}
	setHeaderHeight() {
		let { beans: e } = this, t = 0, n = lo(e).reduce((e, t) => e + t, 0), r = fo(e);
		e.filterManager?.hasFloatingFilters() && (t += mo(e)), t += n, t += r;
		let i = e.environment.getHeaderRowBorderWidth(), a = t + i;
		if (this.headerHeightWithBorder !== a) {
			this.headerHeightWithBorder = a;
			let e = `${a}px`;
			this.comp.setHeightAndMinHeight(e);
		}
		this.headerHeight !== t && (this.headerHeight = t, this.eventSvc.dispatchEvent({ type: "headerHeightChanged" }));
	}
	onPivotModeChanged(e) {
		let t = e.colModel.isPivotMode();
		this.comp.toggleCss("ag-pivot-on", t), this.comp.toggleCss("ag-pivot-off", !t);
	}
	onDisplayedColumnsChanged(e) {
		let t = e.visibleCols.allCols.some((e) => e.isSpanHeaderHeight());
		this.comp.toggleCss("ag-header-allow-overflow", t);
	}
	onTabKeyDown(e) {
		let t = this.gos.get("enableRtl"), n = e.shiftKey, r = n === t ? "RIGHT" : "LEFT", { beans: i } = this, { headerNavigation: a, focusSvc: o } = i;
		(a.navigateHorizontally(r, !0, e) || !n && o.focusOverlay(!1) || io(i, n, !0)) && e.preventDefault();
	}
	handleKeyDown(e) {
		let t = null, { headerNavigation: n } = this.beans;
		switch (e.key) {
			case Y.LEFT: t = "LEFT";
			case Y.RIGHT:
				I(t) || (t = "RIGHT"), n.navigateHorizontally(t, !1, e) && e.preventDefault();
				break;
			case Y.UP: t = "UP";
			case Y.DOWN:
				I(t) || (t = "DOWN"), n.navigateVertically(t, e) && e.preventDefault();
				break;
			default: return;
		}
	}
	onFocusOut(e) {
		let { relatedTarget: t } = e, { eGui: n, beans: r } = this;
		!t && n.contains(z(r)) || n.contains(t) || (r.focusSvc.focusedHeader = null);
	}
	onHeaderContextMenu(e, t, n) {
		let { menuSvc: r, ctrlsSvc: i } = this.beans;
		if (!e && !n || !r?.isHeaderContextMenuEnabled()) return;
		let { target: a } = e ?? t;
		(a === this.eGui || a === i.getHeaderRowContainerCtrl()?.eViewport) && r.showHeaderContextMenu(void 0, e, n);
	}
}, xo = class extends H {
	constructor(e, t = !1) {
		super(), this.callback = e, this.addSpacer = t;
	}
	postConstruct() {
		let e = this.setWidth.bind(this);
		this.addManagedPropertyListener("domLayout", e), this.addManagedEventListeners({
			columnContainerWidthChanged: e,
			displayedColumnsChanged: e,
			leftPinnedWidthChanged: e
		}), this.addSpacer && this.addManagedEventListeners({
			rightPinnedWidthChanged: e,
			scrollVisibilityChanged: e,
			scrollbarWidthChanged: e
		}), this.setWidth();
	}
	setWidth() {
		let e = G(this.gos, "print"), { visibleCols: t, scrollVisibleSvc: n } = this.beans, r = t.bodyWidth, i = t.getColsLeftWidth(), a = t.getDisplayedColumnsRightWidth(), o;
		e ? o = r + i + a : (o = r, this.addSpacer && (this.gos.get("enableRtl") ? i : a) === 0 && n.verticalScrollShowing && (o += n.getScrollbarWidth())), this.callback(o);
	}
}, So = class extends H {};
function Co(e, t, n) {
	return n && e.addDestroyFunc(() => t.destroyBean(n)), n ?? e;
}
var wo = class extends H {
	constructor(e, t, n, r) {
		super(), this.columnOrGroup = e, this.eCell = t, this.colsSpanning = r, this.columnOrGroup = e, this.ariaEl = t.querySelector("[role=columnheader]") || t, this.beans = n;
	}
	setColsSpanning(e) {
		this.colsSpanning = e, this.onLeftChanged();
	}
	getColumnOrGroup() {
		let { beans: e, colsSpanning: t } = this;
		return e.gos.get("enableRtl") && t ? M(t) : this.columnOrGroup;
	}
	postConstruct() {
		let e = this.onLeftChanged.bind(this);
		this.addManagedListeners(this.columnOrGroup, { leftChanged: e }), this.setLeftFirstTime(), this.addManagedEventListeners({ displayedColumnsWidthChanged: e }), this.addManagedPropertyListener("domLayout", e);
	}
	setLeftFirstTime() {
		let { gos: e, colAnimation: t } = this.beans, n = e.get("suppressColumnMoveAnimation"), r = I(this.columnOrGroup.getOldLeft());
		t?.isActive() && r && !n ? this.animateInLeft() : this.onLeftChanged();
	}
	animateInLeft() {
		let e = this.getColumnOrGroup(), t = this.modifyLeftForPrintLayout(e, e.getOldLeft()), n = this.modifyLeftForPrintLayout(e, e.getLeft());
		this.setLeft(t), this.actualLeft = n, this.beans.colAnimation.executeNextVMTurn(() => {
			this.actualLeft === n && this.setLeft(n);
		});
	}
	onLeftChanged() {
		let e = this.getColumnOrGroup(), t = e.getLeft();
		this.actualLeft = this.modifyLeftForPrintLayout(e, t), this.setLeft(this.actualLeft);
	}
	modifyLeftForPrintLayout(e, t) {
		let { gos: n, visibleCols: r } = this.beans;
		if (!G(n, "print") || e.getPinned() === "left") return t;
		let i = r.getColsLeftWidth();
		return e.getPinned() === "right" ? i + r.bodyWidth + t : i + t;
	}
	setLeft(e) {
		if (I(e) && (this.eCell.style.left = `${e}px`), J(this.columnOrGroup)) {
			let e = this.columnOrGroup.getLeafColumns();
			if (!e.length) return;
			e.length > 1 && Re(this.ariaEl, e.length);
		}
	}
}, To = "ag-column-first", Eo = "ag-column-last";
function Do(e, t, n, r) {
	return L(e) ? [] : Ao(e.headerClass, e, t, n, r);
}
function Oo(e, t, n) {
	e.toggleCss(To, n.isColAtEdge(t, "first")), e.toggleCss(Eo, n.isColAtEdge(t, "last"));
}
function ko(e, t, n, r) {
	return K(t, {
		colDef: e,
		column: n,
		columnGroup: r
	});
}
function Ao(e, t, n, r, i) {
	if (L(e)) return [];
	let a;
	return a = typeof e == "function" ? e(ko(t, n, r, i)) : e, typeof a == "string" ? [a] : Array.isArray(a) ? [...a] : [];
}
var jo = 0, Mo = "headerCtrl", No = class extends H {
	constructor(e, t) {
		super(), this.column = e, this.rowCtrl = t, this.resizeToggleTimeout = 0, this.resizeMultiplier = 1, this.resizeFeature = null, this.lastFocusEvent = null, this.dragSource = null, this.reAttemptToFocus = !1, this.instanceId = e.getUniqueId() + "-" + jo++;
	}
	postConstruct() {
		let e = this.refreshTabIndex.bind(this);
		this.addManagedPropertyListeners(["suppressHeaderFocus"], e), this.addManagedEventListeners({ overlayExclusiveChanged: e });
	}
	setComp(e, t, n, r, i) {
		t.setAttribute("col-id", this.column.colIdSanitised), this.wireComp(e, t, n, r, i), this.reAttemptToFocus && (this.reAttemptToFocus = !1, this.focus(this.lastFocusEvent ?? void 0));
	}
	shouldStopEventPropagation(e) {
		let { headerRowIndex: t, column: n } = this.beans.focusSvc.focusedHeader, r = n.getDefinition(), i = r?.suppressHeaderKeyboardEvent;
		return I(i) ? !!i(K(this.gos, {
			colDef: r,
			column: n,
			headerRowIndex: t,
			event: e
		})) : !1;
	}
	getWrapperHasFocus() {
		return z(this.beans) === this.eGui;
	}
	setGui(e, t) {
		this.eGui = e, this.addDomData(t), t.addManagedListeners(this.beans.eventSvc, { displayedColumnsChanged: this.onDisplayedColumnsChanged.bind(this) }), t.addManagedElementListeners(this.eGui, { focus: this.onGuiFocus.bind(this) }), this.onDisplayedColumnsChanged(), this.refreshTabIndex();
	}
	refreshHeaderStyles() {
		let e = this.column.getDefinition();
		if (!e) return;
		let { headerStyle: t } = e, n;
		n = typeof t == "function" ? t(this.getHeaderClassParams()) : t, n && this.comp.setUserStyles(n);
	}
	onGuiFocus() {
		this.eventSvc.dispatchEvent({
			type: "headerFocused",
			column: this.column
		});
	}
	setupAutoHeight(e) {
		let { wrapperElement: t, checkMeasuringCallback: n, compBean: r } = e, { beans: i } = this, a = (e) => {
			if (!this.isAlive() || !r.isAlive()) return;
			let { paddingTop: n, paddingBottom: o, borderBottomWidth: s, borderTopWidth: c } = Je(this.eGui), l = n + o + s + c, u = t.offsetHeight + l;
			if (e < 5 && (!B(i)?.contains(t) || u == 0)) {
				Bt(() => a(e + 1), "raf", i);
				return;
			}
			this.setColHeaderHeight(this.column, u);
		}, o = !1, s, c = () => {
			let e = this.column.isAutoHeaderHeight();
			e && !o && l(), !e && o && u();
		}, l = () => {
			o = !0, this.comp.toggleCss("ag-header-cell-auto-height", !0), a(0), s = ft(this.beans, t, () => a(0));
		}, u = () => {
			o = !1, s && s(), this.comp.toggleCss("ag-header-cell-auto-height", !1), s = void 0;
		};
		c(), r.addDestroyFunc(() => u()), r.addManagedListeners(this.column, { widthChanged: () => o && a(0) }), r.addManagedEventListeners({ sortChanged: () => {
			o && window.setTimeout(() => a(0));
		} }), n && n(c);
	}
	onDisplayedColumnsChanged() {
		let { comp: e, column: t, beans: n, eGui: r } = this;
		!e || !t || !r || (Oo(e, t, n.visibleCols), Le(r, n.visibleCols.getAriaColIndex(t)));
	}
	addResizeAndMoveKeyboardListeners(e) {
		e.addManagedListeners(this.eGui, {
			keydown: this.onGuiKeyDown.bind(this),
			keyup: this.onGuiKeyUp.bind(this)
		});
	}
	refreshTabIndex() {
		let e = no(this.beans);
		this.eGui && ut(this.eGui, "tabindex", e ? null : "-1");
	}
	onGuiKeyDown(e) {
		let t = z(this.beans), n = e.key === Y.LEFT || e.key === Y.RIGHT;
		if (this.isResizing && (e.preventDefault(), e.stopImmediatePropagation()), t !== this.eGui || !e.shiftKey && !e.altKey && !e.ctrlKey && !e.metaKey) return;
		if ((this.isResizing || n) && (e.preventDefault(), e.stopImmediatePropagation()), (e.ctrlKey || e.metaKey) && yi(e) === Y.C) return this.beans.clipboardSvc?.copyToClipboard();
		if (!n) return;
		let r = e.key === Y.LEFT === this.gos.get("enableRtl") ? "right" : "left";
		if (e.altKey) {
			this.isResizing = !0, this.resizeMultiplier += 1;
			let t = this.getViewportAdjustedResizeDiff(e);
			this.resizeHeader(t, e.shiftKey), this.resizeFeature?.toggleColumnResizing(!0);
		} else this.moveHeader(r);
	}
	moveHeader(e) {
		this.beans.colMoves?.moveHeader(e, this.eGui, this.column, this.rowCtrl.pinned, this);
	}
	getViewportAdjustedResizeDiff(e) {
		let t = this.getResizeDiff(e), { pinnedCols: n } = this.beans;
		return n ? n.getHeaderResizeDiff(t, this.column) : t;
	}
	getResizeDiff(e) {
		let { gos: t, column: n } = this, r = e.key === Y.LEFT !== t.get("enableRtl"), i = n.getPinned(), a = t.get("enableRtl");
		return i && a !== (i === "right") && (r = !r), (r ? -1 : 1) * this.resizeMultiplier;
	}
	onGuiKeyUp() {
		this.isResizing && (this.resizeToggleTimeout &&= (window.clearTimeout(this.resizeToggleTimeout), 0), this.isResizing = !1, this.resizeMultiplier = 1, this.resizeToggleTimeout = window.setTimeout(() => {
			this.resizeFeature?.toggleColumnResizing(!1);
		}, 150));
	}
	handleKeyDown(e) {
		let t = this.getWrapperHasFocus();
		switch (e.key) {
			case Y.PAGE_DOWN:
			case Y.PAGE_UP:
			case Y.PAGE_HOME:
			case Y.PAGE_END: t && e.preventDefault();
		}
	}
	addDomData(e) {
		let t = Mo, { eGui: n, gos: r } = this;
		er(r, n, t, this), e.addDestroyFunc(() => er(r, n, t, null));
	}
	focus(e) {
		if (!this.isAlive()) return !1;
		let { eGui: t } = this;
		return t ? (this.lastFocusEvent = e || null, t.focus()) : this.reAttemptToFocus = !0, !0;
	}
	focusThis() {
		this.beans.focusSvc.focusedHeader = {
			headerRowIndex: this.rowCtrl.rowIndex,
			column: this.column
		};
	}
	removeDragSource() {
		this.dragSource &&= (this.beans.dragAndDrop?.removeDragSource(this.dragSource), null);
	}
	handleContextMenuMouseEvent(e, t, n) {
		let r = e ?? t, { menuSvc: i, gos: a } = this.beans;
		a.get("preventDefaultOnContextMenu") && r.preventDefault(), i?.isHeaderContextMenuEnabled(n) && i.showHeaderContextMenu(n, e, t), this.dispatchColumnMouseEvent("columnHeaderContextMenu", n);
	}
	dispatchColumnMouseEvent(e, t) {
		this.eventSvc.dispatchEvent({
			type: e,
			column: t
		});
	}
	setColHeaderHeight(e, t) {
		if (!e.setAutoHeaderHeight(t)) return;
		let { eventSvc: n } = this;
		e.isColumn ? n.dispatchEvent({
			type: "columnHeaderHeightChanged",
			column: e,
			columns: [e],
			source: "autosizeColumnHeaderHeight"
		}) : n.dispatchEvent({
			type: "columnGroupHeaderHeightChanged",
			columnGroup: e,
			source: "autosizeColumnGroupHeaderHeight"
		});
	}
	clearComponent() {
		this.removeDragSource(), this.resizeFeature = null, this.comp = null, this.eGui = null;
	}
	destroy() {
		super.destroy(), this.column = null, this.lastFocusEvent = null, this.rowCtrl = null;
	}
}, Po = class extends No {
	constructor() {
		super(...arguments), this.refreshFunctions = {}, this.userHeaderClasses = /* @__PURE__ */ new Set(), this.ariaDescriptionProperties = /* @__PURE__ */ new Map();
	}
	wireComp(e, t, n, r, i) {
		this.comp = e;
		let { rowCtrl: a, column: o, beans: s } = this, { colResize: c, context: l, colHover: u, rangeSvc: d } = s, f = Co(this, l, i);
		this.setGui(t, f), this.updateState(), this.setupWidth(f), this.setupMovingCss(f), this.setupMenuClass(f), this.setupSortableClass(f), this.setupWrapTextClass(), this.refreshSpanHeaderHeight(), this.setupAutoHeight({
			wrapperElement: r,
			checkMeasuringCallback: (e) => this.setRefreshFunction("measuring", e),
			compBean: f
		}), this.addColumnHoverListener(f), this.setupFilterClass(f), this.setupStylesFromColDef(), this.setupClassesFromColDef(), this.setupTooltip(), this.addActiveHeaderMouseListeners(f), this.setupSelectAll(f), this.setupUserComp(), this.refreshAria(), c ? this.resizeFeature = f.createManagedBean(c.createResizeFeature(a.pinned, o, n, e, this)) : V(n, !1), u?.createHoverFeature(f, [o], t), d?.createRangeHighlightFeature(f, o, e), f.createManagedBean(new wo(o, t, s)), f.createManagedBean(new Ma(t, {
			shouldStopEventPropagation: (e) => this.shouldStopEventPropagation(e),
			onTabKeyDown: () => null,
			handleKeyDown: this.handleKeyDown.bind(this),
			onFocusIn: this.onFocusIn.bind(this),
			onFocusOut: this.onFocusOut.bind(this)
		})), this.addResizeAndMoveKeyboardListeners(f), f.addManagedPropertyListeners([
			"suppressMovableColumns",
			"suppressMenuHide",
			"suppressAggFuncInHeader",
			"enableAdvancedFilter"
		], () => this.refresh()), f.addManagedListeners(o, {
			colDefChanged: () => this.refresh(),
			formulaRefChanged: () => this.refresh(),
			headerHighlightChanged: this.onHeaderHighlightChanged.bind(this)
		});
		let p = () => this.checkDisplayName();
		f.addManagedEventListeners({
			columnValueChanged: p,
			columnRowGroupChanged: p,
			columnPivotChanged: p,
			headerHeightChanged: this.onHeaderHeightChanged.bind(this)
		}), f.addDestroyFunc(() => {
			this.refreshFunctions = {}, this.selectAllFeature = null, this.dragSourceElement = void 0, this.userCompDetails = null, this.userHeaderClasses.clear(), this.ariaDescriptionProperties.clear(), this.clearComponent();
		});
	}
	resizeHeader(e, t) {
		this.beans.colResize?.resizeHeader(this.column, e, t);
	}
	getHeaderClassParams() {
		let { column: e, beans: t } = this, n = e.colDef;
		return K(t.gos, {
			colDef: n,
			column: e,
			floatingFilter: !1
		});
	}
	setupUserComp() {
		let e = this.lookupUserCompDetails();
		e && this.setCompDetails(e);
	}
	setCompDetails(e) {
		this.userCompDetails = e, this.comp.setUserCompDetails(e);
	}
	lookupUserCompDetails() {
		let e = this.createParams(), t = this.column.getColDef();
		return Ii(this.beans.userCompFactory, t, e);
	}
	createParams() {
		let { menuSvc: e, sortSvc: t, colFilter: n, gos: r } = this.beans;
		return K(r, {
			column: this.column,
			displayName: this.displayName,
			enableSorting: this.column.isSortable(),
			enableMenu: this.menuEnabled,
			enableFilterButton: this.openFilterEnabled && !!e?.isHeaderFilterButtonEnabled(this.column),
			enableFilterIcon: !!n && (!this.openFilterEnabled || hr(this.gos)),
			showColumnMenu: (t, n) => {
				e?.showColumnMenu({
					column: this.column,
					buttonElement: t,
					positionBy: "button",
					onClosedCallback: n
				});
			},
			showColumnMenuAfterMouseClick: (t, n) => {
				e?.showColumnMenu({
					column: this.column,
					mouseEvent: t,
					positionBy: "mouse",
					onClosedCallback: n
				});
			},
			showFilter: (t) => {
				e?.showFilterMenu({
					column: this.column,
					buttonElement: t,
					containerType: "columnFilter",
					positionBy: "button"
				});
			},
			progressSort: (e) => {
				t?.progressSort(this.column, !!e, "uiColumnSorted");
			},
			setSort: (e, n) => {
				t?.setSortForColumn(this.column, Or(e), !!n, "uiColumnSorted");
			},
			eGridHeader: this.eGui,
			setTooltip: (e, t) => {
				r.assertModuleRegistered("Tooltip", 3), this.setupTooltip(e, t);
			}
		});
	}
	setupSelectAll(e) {
		let { selectionSvc: t } = this.beans;
		t && (this.selectAllFeature = e.createOptionalManagedBean(t.createSelectAllFeature(this.column)), this.selectAllFeature?.setComp(this), e.addManagedPropertyListener("rowSelection", () => {
			let n = t.createSelectAllFeature(this.column);
			n && !this.selectAllFeature ? (this.selectAllFeature = e.createManagedBean(n), this.selectAllFeature?.setComp(this), this.comp.refreshSelectAllGui()) : this.selectAllFeature && !n && (this.comp.removeSelectAllGui(), this.selectAllFeature = this.destroyBean(this.selectAllFeature));
		}));
	}
	getSelectAllGui() {
		return this.selectAllFeature?.getCheckboxGui();
	}
	handleKeyDown(e) {
		super.handleKeyDown(e), e.key === Y.SPACE ? this.selectAllFeature?.onSpaceKeyDown(e) : e.key === Y.ENTER ? this.onEnterKeyDown(e) : e.key === Y.DOWN && e.altKey && this.showMenuOnKeyPress(e, !1);
	}
	onEnterKeyDown(e) {
		let { column: t, gos: n, sortable: r, beans: i } = this, a = !1;
		(e.ctrlKey || e.metaKey) && (a = this.showMenuOnKeyPress(e, !0)), a || (!e.altKey && dr(n) ? i.rangeSvc?.handleColumnSelection(t, e) : r && i.sortSvc?.progressSort(t, e.shiftKey, "uiColumnSorted"));
	}
	showMenuOnKeyPress(e, t) {
		let n = this.comp.getUserCompInstance();
		return Fo(n) && n.onMenuKeyboardShortcut(t) ? (e.preventDefault(), !0) : !1;
	}
	onFocusIn(e) {
		this.eGui.contains(e.relatedTarget) || (this.focusThis(), this.announceAriaDescription()), xa() && this.setActiveHeader(!0);
	}
	onFocusOut(e) {
		this.eGui.contains(e.relatedTarget) || this.setActiveHeader(!1);
	}
	setupTooltip(e, t) {
		this.tooltipFeature = this.beans.tooltipSvc?.setupHeaderTooltip(this.tooltipFeature, this, e, t);
	}
	setupStylesFromColDef() {
		this.setRefreshFunction("headerStyles", this.refreshHeaderStyles.bind(this)), this.refreshHeaderStyles();
	}
	setupClassesFromColDef() {
		let e = () => {
			let e = Do(this.column.getColDef(), this.gos, this.column, null), t = this.userHeaderClasses;
			this.userHeaderClasses = new Set(e);
			for (let n of e) t.has(n) ? t.delete(n) : this.comp.toggleCss(n, !0);
			for (let e of t) this.comp.toggleCss(e, !1);
		};
		this.setRefreshFunction("headerClasses", e), e();
	}
	setDragSource(e) {
		this.dragSourceElement = e, this.removeDragSource(), !(!e || !this.draggable) && (this.dragSource = this.beans.colMoves?.setDragSourceForHeader(e, this.column, this.displayName) ?? null);
	}
	updateState() {
		let { menuSvc: e } = this.beans;
		this.menuEnabled = !!e?.isColumnMenuInHeaderEnabled(this.column), this.openFilterEnabled = !!e?.isFilterMenuInHeaderEnabled(this.column), this.sortable = this.column.isSortable(), this.displayName = this.calculateDisplayName(), this.draggable = this.workOutDraggable();
	}
	setRefreshFunction(e, t) {
		this.refreshFunctions[e] = t;
	}
	refresh() {
		this.updateState(), this.refreshHeaderComp(), this.refreshAria();
		for (let e of Object.values(this.refreshFunctions)) e();
	}
	refreshHeaderComp() {
		let e = this.lookupUserCompDetails();
		e && (this.comp.getUserCompInstance() != null && this.userCompDetails.componentClass == e.componentClass && this.attemptHeaderCompRefresh(e.params) ? this.setDragSource(this.dragSourceElement) : this.setCompDetails(e));
	}
	attemptHeaderCompRefresh(e) {
		let t = this.comp.getUserCompInstance();
		return !t || !t.refresh ? !1 : t.refresh(e);
	}
	calculateDisplayName() {
		return this.beans.colNames.getDisplayNameForColumn(this.column, "header", !0);
	}
	checkDisplayName() {
		this.displayName !== this.calculateDisplayName() && this.refresh();
	}
	workOutDraggable() {
		let e = this.column.getColDef();
		return !this.gos.get("suppressMovableColumns") && !e.suppressMovable && !e.lockPosition || !!e.enableRowGroup || !!e.enablePivot;
	}
	setupWidth(e) {
		let t = () => {
			let e = this.column.getActualWidth();
			this.comp.setWidth(`${e}px`);
		};
		e.addManagedListeners(this.column, { widthChanged: t }), t();
	}
	setupMovingCss(e) {
		let t = () => {
			this.comp.toggleCss("ag-header-cell-moving", this.column.isMoving());
		};
		e.addManagedListeners(this.column, { movingChanged: t }), t();
	}
	setupMenuClass(e) {
		let t = () => {
			this.comp?.toggleCss("ag-column-menu-visible", this.column.isMenuVisible());
		};
		e.addManagedListeners(this.column, { menuVisibleChanged: t }), t();
	}
	setupSortableClass(e) {
		let t = () => {
			this.comp.toggleCss("ag-header-cell-sortable", !!this.sortable);
		};
		t(), this.setRefreshFunction("updateSortable", t), e.addManagedEventListeners({ sortChanged: this.refreshAriaSort.bind(this) });
	}
	setupFilterClass(e) {
		let t = () => {
			let e = this.column.isFilterActive();
			this.comp.toggleCss("ag-header-cell-filtered", e), this.refreshAria();
		};
		e.addManagedListeners(this.column, { filterActiveChanged: t }), t();
	}
	setupWrapTextClass() {
		let e = () => {
			let e = !!this.column.getColDef().wrapHeaderText;
			this.comp.toggleCss("ag-header-cell-wrap-text", e);
		};
		e(), this.setRefreshFunction("wrapText", e);
	}
	onHeaderHighlightChanged() {
		let e = this.column.getHighlighted(), t = e === 0, n = e === 1;
		this.comp.toggleCss("ag-header-highlight-before", t), this.comp.toggleCss("ag-header-highlight-after", n);
	}
	onDisplayedColumnsChanged() {
		super.onDisplayedColumnsChanged(), this.isAlive() && this.onHeaderHeightChanged();
	}
	onHeaderHeightChanged() {
		this.refreshSpanHeaderHeight();
	}
	refreshSpanHeaderHeight() {
		let { eGui: e, column: t, comp: n, beans: r } = this, i = lo(this.beans), a = i.reduce((e, t) => e + t, 0) === 0;
		if (n.toggleCss("ag-header-parent-hidden", a), !t.isSpanHeaderHeight()) {
			e.style.removeProperty("top"), e.style.removeProperty("height"), n.toggleCss("ag-header-span-height", !1), n.toggleCss("ag-header-span-total", !1);
			return;
		}
		let { numberOfParents: o, isSpanningTotal: s } = this.column.getColumnGroupPaddingInfo();
		n.toggleCss("ag-header-span-height", o > 0);
		let c = fo(r);
		if (o === 0) {
			n.toggleCss("ag-header-span-total", !1), e.style.setProperty("top", "0px"), e.style.setProperty("height", `${c}px`);
			return;
		}
		n.toggleCss("ag-header-span-total", s);
		let l = (this.column.getFirstRealParent()?.getLevel() ?? -1) + 1, u = i.length - l, d = 0;
		for (let e = 0; e < u; e++) d += i[i.length - 1 - e];
		e.style.setProperty("top", `${-d}px`), e.style.setProperty("height", `${c + d}px`);
	}
	refreshAriaSort() {
		let e = null, { beans: t, column: n, comp: r, sortable: i } = this;
		if (i) {
			let i = this.getLocaleTextFunc(), a = t.sortSvc?.getDisplaySortForColumn(n) ?? null;
			r.setAriaSort(we(a)), e = i("ariaSortableColumn", "Press ENTER to sort");
		} else r.setAriaSort();
		this.setAriaDescriptionProperty("sort", e);
	}
	refreshAriaMenu() {
		let e = null;
		this.menuEnabled && (e = this.getLocaleTextFunc()("ariaMenuColumn", "Press ALT DOWN to open column menu")), this.setAriaDescriptionProperty("menu", e);
	}
	refreshAriaFilterButton() {
		let e = null, { openFilterEnabled: t, gos: n } = this;
		t && !hr(n) && (e = this.getLocaleTextFunc()("ariaFilterColumn", "Press CTRL ENTER to open filter")), this.setAriaDescriptionProperty("filterButton", e);
	}
	refreshAriaFiltered() {
		let e = null;
		this.column.isFilterActive() && (e = this.getLocaleTextFunc()("ariaColumnFiltered", "Column Filtered")), this.setAriaDescriptionProperty("filter", e);
	}
	refreshAriaCellSelection() {
		let e = null, { gos: t, column: n } = this;
		dr(t) && !ai(n) && (e = this.getLocaleTextFunc()("ariaColumnCellSelection", "Press Enter to toggle selection for all visible cells in this column")), this.setAriaDescriptionProperty("cellSelection", e);
	}
	setAriaDescriptionProperty(e, t) {
		let n = this.ariaDescriptionProperties;
		t == null ? n.delete(e) : n.set(e, t);
	}
	announceAriaDescription() {
		let { beans: e, eGui: t, ariaDescriptionProperties: n } = this;
		if (!t.contains(z(e))) return;
		let r = Array.from(n.keys()).sort((e, t) => e === "filter" ? -1 : t.charCodeAt(0) - e.charCodeAt(0)).map((e) => n.get(e)).join(". ");
		e.ariaAnnounce?.announceValue(r, "columnHeader");
	}
	refreshAria() {
		this.refreshAriaSort(), this.refreshAriaMenu(), this.refreshAriaFilterButton(), this.refreshAriaFiltered(), this.refreshAriaCellSelection();
	}
	addColumnHoverListener(e) {
		this.beans.colHover?.addHeaderColumnHoverListener(e, this.comp, this.column);
	}
	addActiveHeaderMouseListeners(e) {
		let t = (e) => this.handleMouseOverChange(e.type === "mouseenter");
		e.addManagedListeners(this.eGui, {
			mouseenter: t,
			mouseleave: t,
			click: () => {
				this.setActiveHeader(!0), this.dispatchColumnMouseEvent("columnHeaderClicked", this.column);
			},
			contextmenu: (e) => this.handleContextMenuMouseEvent(e, void 0, this.column)
		});
	}
	handleMouseOverChange(e) {
		this.setActiveHeader(e), this.eventSvc.dispatchEvent({
			type: e ? "columnHeaderMouseOver" : "columnHeaderMouseLeave",
			column: this.column
		});
	}
	setActiveHeader(e) {
		this.comp.toggleCss("ag-header-active", e);
	}
	getAnchorElementForMenu(e) {
		let t = this.comp.getUserCompInstance();
		return Fo(t) ? t.getAnchorElementForMenu(e) : this.eGui;
	}
	destroy() {
		this.tooltipFeature = this.destroyBean(this.tooltipFeature), super.destroy();
	}
};
function Fo(e) {
	return typeof e?.getAnchorElementForMenu == "function" && typeof e.onMenuKeyboardShortcut == "function";
}
var Io = 0, Lo = class extends H {
	constructor(e, t, n) {
		super(), this.rowIndex = e, this.pinned = t, this.type = n, this.instanceId = Io++, this.comp = null, this.allCtrls = [];
		let r = "ag-header-row-column";
		n === "group" ? r = "ag-header-row-group" : n === "filter" && (r = "ag-header-row-filter"), this.headerRowClass = `ag-header-row ${r}`;
	}
	setRowIndex(e) {
		this.rowIndex = e, this.comp?.setRowIndex(this.getAriaRowIndex()), this.onRowHeightChanged();
	}
	postConstruct() {
		this.isPrintLayout = G(this.gos, "print"), this.isEnsureDomOrder = this.gos.get("ensureDomOrder");
	}
	areCellsRendered() {
		return this.comp ? this.allCtrls.every((e) => e.eGui != null) : !1;
	}
	setComp(e, t, n = !0) {
		this.comp = e, t = Co(this, this.beans.context, t), n && (this.setRowIndex(this.rowIndex), this.onVirtualColumnsChanged()), this.setWidth(), this.addEventListeners(t);
	}
	getAriaRowIndex() {
		return this.rowIndex + 1;
	}
	addEventListeners(e) {
		let t = this.onRowHeightChanged.bind(this), n = this.onDisplayedColumnsChanged.bind(this);
		e.addManagedEventListeners({
			columnResized: this.setWidth.bind(this),
			displayedColumnsChanged: n,
			virtualColumnsChanged: (e) => this.onVirtualColumnsChanged(e.afterScroll),
			columnGroupHeaderHeightChanged: t,
			columnHeaderHeightChanged: t,
			stylesChanged: t,
			advancedFilterEnabledChanged: t
		}), e.addManagedPropertyListener("domLayout", n), e.addManagedPropertyListener("ensureDomOrder", (e) => this.isEnsureDomOrder = e.currentValue), e.addManagedPropertyListeners([
			"headerHeight",
			"pivotHeaderHeight",
			"groupHeaderHeight",
			"pivotGroupHeaderHeight",
			"floatingFiltersHeight"
		], t);
	}
	onDisplayedColumnsChanged() {
		this.isPrintLayout = G(this.gos, "print"), this.onVirtualColumnsChanged(), this.setWidth(), this.onRowHeightChanged();
	}
	setWidth() {
		if (!this.comp) return;
		let e = this.getWidthForRow();
		this.comp.setWidth(`${e}px`);
	}
	getWidthForRow() {
		let { visibleCols: e } = this.beans;
		return this.isPrintLayout ? this.pinned == null ? e.getContainerWidth("right") + e.getContainerWidth("left") + e.getContainerWidth(null) : 0 : e.getContainerWidth(this.pinned);
	}
	onRowHeightChanged() {
		if (!this.comp) return;
		let { topOffset: e, rowHeight: t } = this.getTopAndHeight();
		this.comp.setTop(e + "px"), this.comp.setHeight(t + "px");
	}
	getTopAndHeight() {
		let e = 0, t = lo(this.beans);
		for (let n = 0; n < t.length; n++) {
			if (n === this.rowIndex && this.type === "group") return {
				topOffset: e,
				rowHeight: t[n]
			};
			e += t[n];
		}
		let n = fo(this.beans);
		if (this.type === "column") return {
			topOffset: e,
			rowHeight: n
		};
		e += n;
		let r = mo(this.beans);
		return {
			topOffset: e,
			rowHeight: r
		};
	}
	onVirtualColumnsChanged(e = !1) {
		if (!this.comp) return;
		let t = this.getUpdatedHeaderCtrls(), n = this.isEnsureDomOrder || this.isPrintLayout;
		this.comp.setHeaderCtrls(t, n, e);
	}
	getUpdatedHeaderCtrls() {
		let e = this.ctrlsById;
		this.ctrlsById = /* @__PURE__ */ new Map();
		let t = this.getColumnsInViewport();
		for (let n of t) this.recycleAndCreateHeaderCtrls(n, this.ctrlsById, e);
		let n = (e) => {
			let { focusSvc: t, visibleCols: n } = this.beans;
			return t.isHeaderWrapperFocused(e) ? n.isVisible(e.column) : !1;
		};
		if (e) for (let [t, r] of e) n(r) ? this.ctrlsById.set(t, r) : this.destroyBean(r);
		return this.allCtrls = Array.from(this.ctrlsById.values()), this.allCtrls;
	}
	getHeaderCellCtrls() {
		return this.allCtrls;
	}
	recycleAndCreateHeaderCtrls(e, t, n) {
		if (e.isEmptyGroup()) return;
		let r = e.getUniqueId(), i;
		if (n && (i = n.get(r), n.delete(r)), i && i.column != e && (this.destroyBean(i), i = void 0), i == null) switch (this.type) {
			case "filter":
				i = this.createBean(this.beans.registry.createDynamicBean("headerFilterCellCtrl", !0, e, this));
				break;
			case "group":
				i = this.createBean(this.beans.registry.createDynamicBean("headerGroupCellCtrl", !0, e, this));
				break;
			default:
				i = this.createBean(new Po(e, this));
				break;
		}
		t.set(r, i);
	}
	getColumnsInViewport() {
		if (!this.isPrintLayout) return this.getComponentsToRender();
		if (this.pinned) return [];
		let e = [];
		for (let t of [
			"left",
			null,
			"right"
		]) e.push(...this.getComponentsToRender(t));
		return e;
	}
	getComponentsToRender(e = this.pinned) {
		return this.type === "group" ? this.beans.colViewport.getHeadersToRender(e, this.rowIndex) : this.beans.colViewport.getColumnHeadersToRender(e);
	}
	focusHeader(e, t) {
		let n = this.allCtrls.find((t) => t.column == e);
		return n ? n.focus(t) : !1;
	}
	destroy() {
		this.allCtrls = this.destroyBeans(this.allCtrls), this.ctrlsById = void 0, this.comp = null, super.destroy();
	}
}, Ro = class extends H {
	constructor(e) {
		super(), this.pinned = e, this.hidden = !1, this.includeFloatingFilter = !1, this.groupsRowCtrls = [];
	}
	setComp(e, t) {
		this.comp = e, this.eViewport = t;
		let { pinnedCols: n, ctrlsSvc: r, colModel: i, colMoves: a } = this.beans;
		this.setupCenterWidth(), n?.setupHeaderPinnedWidth(this), this.setupDragAndDrop(a, this.eViewport);
		let o = this.refresh.bind(this, !0);
		this.addManagedEventListeners({
			displayedColumnsChanged: o,
			advancedFilterEnabledChanged: o
		});
		let s = `${typeof this.pinned == "string" ? this.pinned : "center"}Header`;
		r.register(s, this), i.ready && this.refresh();
	}
	getAllCtrls() {
		let e = [...this.groupsRowCtrls];
		return this.columnsRowCtrl && e.push(this.columnsRowCtrl), this.filtersRowCtrl && e.push(this.filtersRowCtrl), e;
	}
	refresh(e = !1) {
		let { focusSvc: t, filterManager: n, visibleCols: r } = this.beans, i = 0, a = t.getFocusHeaderToUseAfterRefresh(), o = () => {
			let t = r.headerGroupRowCount;
			i = t, e || (this.groupsRowCtrls = this.destroyBeans(this.groupsRowCtrls));
			let n = this.groupsRowCtrls.length;
			if (n !== t) {
				if (n > t) {
					for (let e = t; e < n; e++) this.destroyBean(this.groupsRowCtrls[e]);
					this.groupsRowCtrls.length = t;
					return;
				}
				for (let e = n; e < t; e++) {
					let t = this.createBean(new Lo(e, this.pinned, "group"));
					this.groupsRowCtrls.push(t);
				}
			}
		}, s = () => {
			let t = i++;
			if (this.hidden) {
				this.columnsRowCtrl = this.destroyBean(this.columnsRowCtrl);
				return;
			}
			this.columnsRowCtrl == null || !e ? (this.columnsRowCtrl = this.destroyBean(this.columnsRowCtrl), this.columnsRowCtrl = this.createBean(new Lo(t, this.pinned, "column"))) : this.columnsRowCtrl.rowIndex !== t && this.columnsRowCtrl.setRowIndex(t);
		}, c = () => {
			this.includeFloatingFilter = !!n?.hasFloatingFilters() && !this.hidden;
			let t = () => {
				this.filtersRowCtrl = this.destroyBean(this.filtersRowCtrl);
			};
			if (!this.includeFloatingFilter) {
				t();
				return;
			}
			e || t();
			let r = i++;
			this.filtersRowCtrl ? this.filtersRowCtrl.rowIndex !== r && this.filtersRowCtrl.setRowIndex(r) : this.filtersRowCtrl = this.createBean(new Lo(r, this.pinned, "filter"));
		}, l = this.getAllCtrls();
		o(), s(), c();
		let u = this.getAllCtrls();
		this.comp.setCtrls(u), this.restoreFocusOnHeader(t, a), l.length !== u.length && this.beans.eventSvc.dispatchEvent({ type: "headerRowsChanged" });
	}
	getHeaderCtrlForColumn(e) {
		let t = (t) => t?.getHeaderCellCtrls().find((t) => t.column === e);
		if (wr(e)) return t(this.columnsRowCtrl);
		if (this.groupsRowCtrls.length !== 0) for (let e = 0; e < this.groupsRowCtrls.length; e++) {
			let n = t(this.groupsRowCtrls[e]);
			if (n) return n;
		}
	}
	getHtmlElementForColumnHeader(e) {
		return this.getHeaderCtrlForColumn(e)?.eGui ?? null;
	}
	getRowType(e) {
		return this.getAllCtrls()[e]?.type;
	}
	focusHeader(e, t, n) {
		let r = this.getAllCtrls()[e];
		return r ? r.focusHeader(t, n) : !1;
	}
	getGroupRowCount() {
		return this.groupsRowCtrls.length;
	}
	getGroupRowCtrlAtIndex(e) {
		return this.groupsRowCtrls[e];
	}
	getRowCount() {
		return this.groupsRowCtrls.length + (this.columnsRowCtrl ? 1 : 0) + (this.filtersRowCtrl ? 1 : 0);
	}
	setHorizontalScroll(e) {
		this.comp.setViewportScrollLeft(e);
	}
	onScrollCallback(e) {
		this.addManagedElementListeners(this.eViewport, { scroll: e });
	}
	destroy() {
		this.filtersRowCtrl = this.destroyBean(this.filtersRowCtrl), this.columnsRowCtrl = this.destroyBean(this.columnsRowCtrl), this.groupsRowCtrls = this.destroyBeans(this.groupsRowCtrls), super.destroy();
	}
	setupDragAndDrop(e, t) {
		let n = e?.createBodyDropTarget(this.pinned, t);
		n && this.createManagedBean(n);
	}
	restoreFocusOnHeader(e, t) {
		if (!t) return;
		let { column: n } = t;
		n.getPinned() == this.pinned && e.focusHeaderPosition({
			headerPosition: t,
			scroll: !1
		});
	}
	setupCenterWidth() {
		this.pinned ?? this.createManagedBean(new xo((e) => this.comp.setCenterWidth(`${e}px`), !0));
	}
}, zo = {
	AUTO_HEIGHT: "ag-layout-auto-height",
	NORMAL: "ag-layout-normal",
	PRINT: "ag-layout-print"
}, Bo = class extends H {
	constructor(e) {
		super(), this.view = e;
	}
	postConstruct() {
		this.addManagedPropertyListener("domLayout", this.updateLayoutClasses.bind(this)), this.updateLayoutClasses();
	}
	updateLayoutClasses() {
		let e = this.gos.get("domLayout"), t = {
			autoHeight: e === "autoHeight",
			normal: e === "normal",
			print: e === "print"
		}, n = t.autoHeight ? zo.AUTO_HEIGHT : t.print ? zo.PRINT : zo.NORMAL;
		this.view.updateLayoutClasses(n, t);
	}
}, Vo = class extends Qi {
	constructor(e, t) {
		super(), this.direction = t, this.eViewport = null, this.eContainer = null, this.hideTimeout = 0, this.setTemplate(e);
	}
	postConstruct() {
		this.addManagedEventListeners({ scrollVisibilityChanged: this.onScrollVisibilityChanged.bind(this) }), this.onScrollVisibilityChanged(), this.toggleCss("ag-apple-scrollbar", ca() || la());
	}
	destroy() {
		super.destroy(), window.clearTimeout(this.hideTimeout);
	}
	initialiseInvisibleScrollbar() {
		this.invisibleScrollbar === void 0 && (this.invisibleScrollbar = ma(), this.invisibleScrollbar && (this.hideAndShowInvisibleScrollAsNeeded(), this.addActiveListenerToggles()));
	}
	addActiveListenerToggles() {
		let e = this.getGui(), t = () => this.toggleCss("ag-scrollbar-active", !0), n = () => this.toggleCss("ag-scrollbar-active", !1);
		this.addManagedListeners(e, {
			mouseenter: t,
			mousedown: t,
			touchstart: t,
			mouseleave: n,
			touchend: n
		});
	}
	onScrollVisibilityChanged() {
		this.invisibleScrollbar === void 0 && this.initialiseInvisibleScrollbar(), pt(this.beans, () => this.setScrollVisible());
	}
	hideAndShowInvisibleScrollAsNeeded() {
		this.addManagedEventListeners({
			bodyScroll: (e) => {
				e.direction === this.direction && (this.hideTimeout &&= (window.clearTimeout(this.hideTimeout), 0), this.toggleCss("ag-scrollbar-scrolling", !0));
			},
			bodyScrollEnd: () => {
				this.hideTimeout = window.setTimeout(() => {
					this.toggleCss("ag-scrollbar-scrolling", !1), this.hideTimeout = 0;
				}, 400);
			}
		});
	}
	attemptSettingScrollPosition(e) {
		let t = this.eViewport;
		Ut(this, () => rt(t), () => this.setScrollPosition(e), 100);
	}
	onScrollCallback(e) {
		this.addManagedElementListeners(this.eViewport, { scroll: e });
	}
}, Ho = {
	tag: "div",
	cls: "ag-body-horizontal-scroll",
	attrs: { "aria-hidden": "true" },
	children: [
		{
			tag: "div",
			ref: "eLeftSpacer",
			cls: "ag-horizontal-left-spacer"
		},
		{
			tag: "div",
			ref: "eViewport",
			cls: "ag-body-horizontal-scroll-viewport",
			children: [{
				tag: "div",
				ref: "eContainer",
				cls: "ag-body-horizontal-scroll-container"
			}]
		},
		{
			tag: "div",
			ref: "eRightSpacer",
			cls: "ag-horizontal-right-spacer"
		}
	]
}, Uo = class extends Vo {
	constructor() {
		super(Ho, "horizontal"), this.eLeftSpacer = null, this.eRightSpacer = null, this.setScrollVisibleDebounce = 0;
	}
	wireBeans(e) {
		this.visibleCols = e.visibleCols, this.scrollVisibleSvc = e.scrollVisibleSvc;
	}
	postConstruct() {
		super.postConstruct();
		let e = this.setFakeHScrollSpacerWidths.bind(this);
		this.addManagedEventListeners({
			displayedColumnsChanged: e,
			displayedColumnsWidthChanged: e,
			pinnedRowDataChanged: this.refreshCompBottom.bind(this)
		}), this.addManagedPropertyListener("domLayout", e), this.beans.ctrlsSvc.register("fakeHScrollComp", this), this.createManagedBean(new xo((e) => this.eContainer.style.width = `${e}px`)), this.addManagedPropertyListeners(["suppressHorizontalScroll"], this.onScrollVisibilityChanged.bind(this));
	}
	destroy() {
		window.clearTimeout(this.setScrollVisibleDebounce), super.destroy();
	}
	initialiseInvisibleScrollbar() {
		this.invisibleScrollbar === void 0 && (this.enableRtl = this.gos.get("enableRtl"), super.initialiseInvisibleScrollbar(), this.invisibleScrollbar && this.refreshCompBottom());
	}
	refreshCompBottom() {
		if (!this.invisibleScrollbar) return;
		let e = this.beans.pinnedRowModel?.getPinnedBottomTotalHeight() ?? 0;
		this.getGui().style.bottom = `${e}px`;
	}
	onScrollVisibilityChanged() {
		super.onScrollVisibilityChanged(), this.setFakeHScrollSpacerWidths();
	}
	setFakeHScrollSpacerWidths() {
		let e = this.scrollVisibleSvc.verticalScrollShowing, t = this.visibleCols.getDisplayedColumnsRightWidth(), n = !this.enableRtl && e, r = this.scrollVisibleSvc.getScrollbarWidth();
		n && (t += r), ot(this.eRightSpacer, t), this.eRightSpacer.classList.toggle("ag-scroller-corner", t <= r);
		let i = this.visibleCols.getColsLeftWidth();
		this.enableRtl && e && (i += r), ot(this.eLeftSpacer, i), this.eLeftSpacer.classList.toggle("ag-scroller-corner", i <= r);
	}
	setScrollVisible() {
		let e = this.scrollVisibleSvc.horizontalScrollShowing, t = this.invisibleScrollbar, n = this.gos.get("suppressHorizontalScroll"), r = e && this.scrollVisibleSvc.getScrollbarWidth() || 0, i = n ? 0 : r === 0 && t ? 16 : r, a = () => {
			this.setScrollVisibleDebounce = 0, this.toggleCss("ag-scrollbar-invisible", t), st(this.getGui(), i), st(this.eViewport, i), st(this.eContainer, i), i || this.eContainer.style.setProperty("min-height", "1px"), this.setVisible(e, { skipAriaHidden: !0 });
		};
		window.clearTimeout(this.setScrollVisibleDebounce), e ? this.setScrollVisibleDebounce = window.setTimeout(a, 100) : a();
	}
	getScrollPosition() {
		return Qe(this.eViewport, this.enableRtl);
	}
	setScrollPosition(e) {
		rt(this.eViewport) || this.attemptSettingScrollPosition(e), $e(this.eViewport, e, this.enableRtl);
	}
}, Wo = class extends H {
	constructor(e, t) {
		super(), this.eContainer = e, this.eViewport = t;
	}
	postConstruct() {
		this.addManagedEventListeners({ rowContainerHeightChanged: this.onHeightChanged.bind(this, this.beans.rowContainerHeight) });
	}
	onHeightChanged(e) {
		let t = e.uiContainerHeight, n = t == null ? "" : `${t}px`;
		this.eContainer.style.height = n, this.eViewport && (this.eViewport.style.height = n);
	}
}, Go = {
	tag: "div",
	cls: "ag-body-vertical-scroll",
	attrs: { "aria-hidden": "true" },
	children: [{
		tag: "div",
		ref: "eViewport",
		cls: "ag-body-vertical-scroll-viewport",
		children: [{
			tag: "div",
			ref: "eContainer",
			cls: "ag-body-vertical-scroll-container"
		}]
	}]
}, Ko = class extends Vo {
	constructor() {
		super(Go, "vertical");
	}
	postConstruct() {
		super.postConstruct(), this.createManagedBean(new Wo(this.eContainer));
		let { ctrlsSvc: e } = this.beans;
		e.register("fakeVScrollComp", this), this.addManagedEventListeners({ rowContainerHeightChanged: this.onRowContainerHeightChanged.bind(this, e) });
	}
	setScrollVisible() {
		let { scrollVisibleSvc: e } = this.beans, t = e.verticalScrollShowing, n = this.invisibleScrollbar, r = t && e.getScrollbarWidth() || 0, i = r === 0 && n ? 16 : r;
		this.toggleCss("ag-scrollbar-invisible", n), ot(this.getGui(), i), ot(this.eViewport, i), ot(this.eContainer, i), this.setDisplayed(t, { skipAriaHidden: !0 });
	}
	onRowContainerHeightChanged(e) {
		let t = e.getGridBodyCtrl().eBodyViewport, n = this.getScrollPosition(), r = t.scrollTop;
		n != r && this.setScrollPosition(r, !0);
	}
	getScrollPosition() {
		return this.eViewport.scrollTop;
	}
	setScrollPosition(e, t) {
		!t && !rt(this.eViewport) && this.attemptSettingScrollPosition(e), this.eViewport.scrollTop = e;
	}
}, qo = "Viewport", Jo = "fakeVScrollComp", Yo = [
	"fakeHScrollComp",
	"centerHeader",
	"topCenter",
	"bottomCenter",
	"stickyTopCenter",
	"stickyBottomCenter"
], Xo = 100, Zo = 150, Qo = class extends H {
	constructor(e) {
		super(), this.clearRetryListenerFncs = [], this.lastScrollSource = [null, null], this.scrollLeft = -1, this.nextScrollTop = -1, this.scrollTop = -1, this.lastOffsetHeight = -1, this.lastScrollTop = -1, this.lastIsHorizontalScrollShowing = !1, this.scrollTimer = 0, this.isScrollActive = !1, this.isVerticalPositionInvalidated = !0, this.isHorizontalPositionInvalidated = !0, this.eBodyViewport = e, this.resetLastHScrollDebounced = Vt(this, () => this.lastScrollSource[1] = null, Zo), this.resetLastVScrollDebounced = Vt(this, () => this.lastScrollSource[0] = null, Zo);
	}
	wireBeans(e) {
		this.ctrlsSvc = e.ctrlsSvc, this.animationFrameSvc = e.animationFrameSvc, this.visibleCols = e.visibleCols;
	}
	destroy() {
		super.destroy(), this.clearRetryListenerFncs = [], window.clearTimeout(this.scrollTimer);
	}
	postConstruct() {
		this.enableRtl = this.gos.get("enableRtl");
		let e = this.invalidateVerticalScroll.bind(this), t = this.invalidateHorizontalScroll.bind(this);
		this.addManagedEventListeners({
			displayedColumnsWidthChanged: this.onDisplayedColumnsWidthChanged.bind(this),
			bodyHeightChanged: e,
			scrollGapChanged: t
		}), this.addManagedElementListeners(this.eBodyViewport, { scroll: e }), this.ctrlsSvc.whenReady(this, (e) => {
			this.centerRowsCtrl = e.center, this.fakeVScrollComp = e.fakeVScrollComp, this.fakeHScrollComp = e.fakeHScrollComp, this.onDisplayedColumnsWidthChanged(), this.addScrollListener();
		});
	}
	invalidateHorizontalScroll() {
		this.isHorizontalPositionInvalidated = !0;
	}
	invalidateVerticalScroll() {
		this.isVerticalPositionInvalidated = !0;
	}
	addScrollListener() {
		this.addHorizontalScrollListeners(), this.addVerticalScrollListeners();
	}
	addHorizontalScrollListeners() {
		this.addManagedElementListeners(this.centerRowsCtrl.eViewport, { scroll: this.onHScroll.bind(this, qo) });
		for (let e of Yo) {
			let t = this.ctrlsSvc.get(e);
			this.registerScrollPartner(t, this.onHScroll.bind(this, e));
		}
	}
	addVerticalScrollListeners() {
		let e = this.gos.get("debounceVerticalScrollbar"), t = e ? Vt(this, this.onVScroll.bind(this, qo), Xo) : this.onVScroll.bind(this, qo), n = e ? Vt(this, this.onVScroll.bind(this, Jo), Xo) : this.onVScroll.bind(this, Jo);
		this.addManagedElementListeners(this.eBodyViewport, { scroll: t }), this.registerScrollPartner(this.fakeVScrollComp, n);
	}
	registerScrollPartner(e, t) {
		e.onScrollCallback(t);
	}
	onDisplayedColumnsWidthChanged() {
		this.enableRtl && this.horizontallyScrollHeaderCenterAndFloatingCenter();
	}
	horizontallyScrollHeaderCenterAndFloatingCenter(e) {
		this.centerRowsCtrl != null && (e === void 0 && (e = this.centerRowsCtrl.getCenterViewportScrollLeft()), this.setScrollLeftForAllContainersExceptCurrent(Math.abs(e)));
	}
	setScrollLeftForAllContainersExceptCurrent(e) {
		for (let t of [...Yo, qo]) this.lastScrollSource[1] !== t && $e(this.getViewportForSource(t), e, this.enableRtl);
	}
	getViewportForSource(e) {
		return e === qo ? this.centerRowsCtrl.eViewport : this.ctrlsSvc.get(e).eViewport;
	}
	isControllingScroll(e, t) {
		return this.lastScrollSource[t] == null ? (t === 0 ? this.lastScrollSource[0] = e : this.lastScrollSource[1] = e, !0) : this.lastScrollSource[t] === e;
	}
	onHScroll(e) {
		if (!this.isControllingScroll(e, 1)) return;
		let { scrollLeft: t } = this.centerRowsCtrl.eViewport;
		if (this.shouldBlockScrollUpdate(1, t, !0)) return;
		let n = Qe(this.getViewportForSource(e), this.enableRtl);
		this.doHorizontalScroll(n), this.resetLastHScrollDebounced();
	}
	onVScroll(e) {
		if (!this.isControllingScroll(e, 0)) return;
		let t = e === qo ? this.eBodyViewport.scrollTop : this.fakeVScrollComp.getScrollPosition(), n = t;
		if (this.shouldBlockScrollUpdate(0, n, !0)) return;
		e === qo ? this.fakeVScrollComp.setScrollPosition(n) : (this.eBodyViewport.scrollTop = t, n = this.eBodyViewport.scrollTop, this.invalidateVerticalScroll(), n !== t && this.fakeVScrollComp.setScrollPosition(n, !0));
		let { animationFrameSvc: r } = this;
		r?.setScrollTop(n), this.nextScrollTop = n, r?.active ? r.schedule() : this.scrollGridIfNeeded(!0), this.resetLastVScrollDebounced();
	}
	doHorizontalScroll(e) {
		let t = this.fakeHScrollComp.getScrollPosition();
		this.scrollLeft === e && e === t || (this.scrollLeft = e, this.fireScrollEvent(1), this.horizontallyScrollHeaderCenterAndFloatingCenter(e), this.centerRowsCtrl.onHorizontalViewportChanged(!0));
	}
	isScrolling() {
		return this.isScrollActive;
	}
	fireScrollEvent(e) {
		let t = {
			type: "bodyScroll",
			direction: e === 1 ? "horizontal" : "vertical",
			left: this.scrollLeft,
			top: this.scrollTop
		};
		this.isScrollActive = !0, this.eventSvc.dispatchEvent(t), window.clearTimeout(this.scrollTimer), this.scrollTimer = window.setTimeout(() => {
			this.scrollTimer = 0, this.isScrollActive = !1, this.eventSvc.dispatchEvent({
				...t,
				type: "bodyScrollEnd"
			});
		}, Zo);
	}
	shouldBlockScrollUpdate(e, t, n = !1) {
		return n && !la() ? !1 : e === 0 ? this.shouldBlockVerticalScroll(t) : this.shouldBlockHorizontalScroll(t);
	}
	shouldBlockVerticalScroll(e) {
		let t = Ye(this.eBodyViewport), { scrollHeight: n } = this.eBodyViewport;
		return e < 0 || e + t > n;
	}
	shouldBlockHorizontalScroll(e) {
		let t = this.centerRowsCtrl.getCenterWidth(), { scrollWidth: n } = this.centerRowsCtrl.eViewport;
		if (this.enableRtl) {
			if (e > 0) return !0;
		} else if (e < 0) return !0;
		return Math.abs(e) + t > n;
	}
	redrawRowsAfterScroll() {
		this.fireScrollEvent(0);
	}
	checkScrollLeft() {
		let e = this.scrollLeft, t = !1;
		for (let n of Yo) if (this.getViewportForSource(n).scrollLeft !== e) {
			t = !0;
			break;
		}
		t && this.onHScroll(qo);
	}
	scrollGridIfNeeded(e = !1) {
		let t = this.scrollTop != this.nextScrollTop;
		return t && (this.scrollTop = this.nextScrollTop, e && this.invalidateVerticalScroll(), this.redrawRowsAfterScroll()), t;
	}
	setHorizontalScrollPosition(e, t = !1) {
		let n = this.centerRowsCtrl.eViewport.scrollWidth - this.centerRowsCtrl.getCenterWidth();
		!t && this.shouldBlockScrollUpdate(1, e) && (e = this.enableRtl ? e > 0 ? 0 : n : Math.min(Math.max(e, 0), n)), $e(this.centerRowsCtrl.eViewport, Math.abs(e), this.enableRtl), this.doHorizontalScroll(e);
	}
	setVerticalScrollPosition(e) {
		this.invalidateVerticalScroll(), this.eBodyViewport.scrollTop = e;
	}
	getVScrollPosition() {
		if (!this.isVerticalPositionInvalidated) {
			let { lastOffsetHeight: e, lastScrollTop: t } = this;
			return {
				top: t,
				bottom: t + e
			};
		}
		this.isVerticalPositionInvalidated = !1;
		let { scrollTop: e, offsetHeight: t } = this.eBodyViewport;
		return this.lastScrollTop = e, this.lastOffsetHeight = t, {
			top: e,
			bottom: e + t
		};
	}
	getApproximateVScollPosition() {
		return this.lastScrollTop >= 0 && this.lastOffsetHeight >= 0 ? {
			top: this.scrollTop,
			bottom: this.scrollTop + this.lastOffsetHeight
		} : this.getVScrollPosition();
	}
	getHScrollPosition() {
		return this.centerRowsCtrl.getHScrollPosition();
	}
	isHorizontalScrollShowing() {
		return this.isHorizontalPositionInvalidated &&= (this.lastIsHorizontalScrollShowing = this.centerRowsCtrl.isHorizontalScrollShowing(), !1), this.lastIsHorizontalScrollShowing;
	}
	scrollHorizontally(e) {
		let t = this.centerRowsCtrl.eViewport.scrollLeft;
		return this.setHorizontalScrollPosition(t + e), this.centerRowsCtrl.eViewport.scrollLeft - t;
	}
	scrollToTop() {
		this.setVerticalScrollPosition(0);
	}
	ensureNodeVisible(e, t = null) {
		let { rowModel: n } = this.beans, r = n.getRowCount(), i = -1;
		for (let t = 0; t < r; t++) {
			let r = n.getRow(t);
			if (typeof e == "function") {
				if (r && e(r)) {
					i = t;
					break;
				}
			} else if (e === r || e === r.data) {
				i = t;
				break;
			}
		}
		i >= 0 && this.ensureIndexVisible(i, t);
	}
	ensureIndexVisible(e, t, n = 0) {
		if (G(this.gos, "print")) return;
		let { rowModel: r } = this.beans, i = r.getRowCount();
		if (typeof e != "number" || e < 0 || e >= i) {
			W(88, { index: e });
			return;
		}
		this.clearRetryListeners();
		let { frameworkOverrides: a, pageBounds: o, rowContainerHeight: s, rowRenderer: c } = this.beans;
		a.wrapIncoming(() => {
			let i = this.ctrlsSvc.getGridBodyCtrl(), a = r.getRow(e), l, u, d = 0;
			this.invalidateVerticalScroll();
			do {
				let { stickyTopHeight: e, stickyBottomHeight: n } = i, r = a.rowTop, f = a.rowHeight, p = o.getPixelOffset(), m = a.rowTop - p, h = m + a.rowHeight, g = this.getVScrollPosition(), _ = s.divStretchOffset, v = g.top + _, y = g.bottom + _, b = y - v, x = s.getScrollPositionForPixel(m), S = s.getScrollPositionForPixel(h - b), C = Math.min((x + S) / 2, m), w = v + e > m, T = y - n < h, E = null;
				t === "top" ? E = x - e : t === "bottom" ? E = S + n : t === "middle" ? E = C : w ? E = x - e : T && (E = S - x > b ? x - e : S + n), E !== null && (this.setVerticalScrollPosition(E), c.redraw({ afterScroll: !0 })), l = r !== a.rowTop || f !== a.rowHeight, u = e !== i.stickyTopHeight || n !== i.stickyBottomHeight, d++;
			} while ((l || u) && d < 10);
			if (this.animationFrameSvc?.flushAllFrames(), n < 10 && (a?.stub || !this.beans.rowAutoHeight?.areRowsMeasured())) {
				let i = this.getVScrollPosition().top;
				this.clearRetryListenerFncs = this.addManagedEventListeners({
					bodyScroll: () => {
						i !== this.getVScrollPosition().top && this.clearRetryListeners();
					},
					modelUpdated: () => {
						this.clearRetryListeners(), !(e >= r.getRowCount()) && this.ensureIndexVisible(e, t, n + 1);
					}
				});
			}
		});
	}
	clearRetryListeners() {
		for (let e of this.clearRetryListenerFncs) e();
		this.clearRetryListenerFncs = [];
	}
	ensureColumnVisible(e, t = "auto") {
		let { colModel: n, frameworkOverrides: r } = this.beans, i = n.getCol(e);
		if (!i || i.isPinned() || !this.visibleCols.isColDisplayed(i)) return;
		let a = this.getPositionedHorizontalScroll(i, t);
		r.wrapIncoming(() => {
			a !== null && this.centerRowsCtrl.setCenterViewportScrollLeft(a), this.centerRowsCtrl.onHorizontalViewportChanged(), this.animationFrameSvc?.flushAllFrames();
		});
	}
	getPositionedHorizontalScroll(e, t) {
		let { columnBeforeStart: n, columnAfterEnd: r } = this.isColumnOutsideViewport(e), i = this.centerRowsCtrl.getCenterWidth() < e.getActualWidth(), a = this.centerRowsCtrl.getCenterWidth(), o = this.enableRtl, s = (o ? n : r) || i, c = o ? r : n;
		t !== "auto" && (s = t === "start", c = t === "end");
		let l = t === "middle";
		if (s || c || l) {
			let { colLeft: t, colMiddle: n, colRight: r } = this.getColumnBounds(e);
			return l ? n - a / 2 : s ? o ? r : t : o ? t - a : r - a;
		}
		return null;
	}
	isColumnOutsideViewport(e) {
		let { start: t, end: n } = this.getViewportBounds(), { colLeft: r, colRight: i } = this.getColumnBounds(e), a = this.enableRtl;
		return {
			columnBeforeStart: a ? t > i : n < i,
			columnAfterEnd: a ? n < r : t > r
		};
	}
	getColumnBounds(e) {
		let t = this.enableRtl, n = this.visibleCols.bodyWidth, r = e.getActualWidth(), i = e.getLeft(), a = t ? -1 : 1, o = t ? n - i : i, s = o + r * a;
		return {
			colLeft: o,
			colMiddle: o + r / 2 * a,
			colRight: s
		};
	}
	getViewportBounds() {
		let e = this.centerRowsCtrl.getCenterWidth(), t = this.centerRowsCtrl.getCenterViewportScrollLeft();
		return {
			start: t,
			end: e + t,
			width: e
		};
	}
}, $o = {
	horizontal: {
		overflow: (e) => e.scrollWidth - e.clientWidth,
		scrollSize: (e) => e.scrollWidth,
		clientSize: (e) => e.clientWidth,
		opposite: "vertical"
	},
	vertical: {
		overflow: (e) => e.scrollHeight - e.clientHeight,
		scrollSize: (e) => e.scrollHeight,
		clientSize: (e) => e.clientHeight,
		opposite: "horizontal"
	}
};
function es(e, t, n = fa() || 0, r, i) {
	return ns(e, t, "horizontal", n, r, i);
}
function ts(e, t, n = fa() || 0, r, i) {
	return ns(e, t, "vertical", n, r, i);
}
function ns(e, t, n, r, i, a) {
	let o = $o[n], s = $o[o.opposite], c = i ? rt(i) : !0, l = a ? rt(a) : !0, u = o.overflow(e);
	if (u <= 0) return !1;
	if (!t || r === 0) return !0;
	let d = s.overflow(t);
	if (d <= 0) return !0;
	if (u <= r) {
		if (c && l && rs({
			candidateOverflow: d,
			candidateScrollSize: s.scrollSize(t),
			candidateClientSize: s.clientSize(t),
			scrollbarWidth: r
		})) return !1;
		let n = o.clientSize(e) + r;
		return o.scrollSize(e) <= n;
	}
	return !0;
}
function rs({ candidateOverflow: e, candidateScrollSize: t, candidateClientSize: n, scrollbarWidth: r }) {
	if (e <= 0 || e > r) return !1;
	let i = n + r;
	return t > n && t <= i;
}
var is = class extends H {
	constructor(e) {
		super(), this.centerContainerCtrl = e;
	}
	wireBeans(e) {
		this.scrollVisibleSvc = e.scrollVisibleSvc;
	}
	postConstruct() {
		this.beans.ctrlsSvc.whenReady(this, (e) => {
			this.gridBodyCtrl = e.gridBodyCtrl, this.listenForResize();
		}), this.addManagedEventListeners({ scrollbarWidthChanged: this.onScrollbarWidthChanged.bind(this) }), this.addManagedPropertyListeners(["alwaysShowHorizontalScroll", "alwaysShowVerticalScroll"], () => {
			this.checkViewportAndScrolls();
		});
	}
	listenForResize() {
		let { beans: e, centerContainerCtrl: t, gridBodyCtrl: n } = this, r = () => {
			pt(e, () => {
				this.onCenterViewportResized();
			});
		};
		t.registerViewportResizeListener(r), n.registerBodyViewportResizeListener(r);
	}
	onScrollbarWidthChanged() {
		this.checkViewportAndScrolls();
	}
	onCenterViewportResized() {
		if (this.scrollVisibleSvc.updateScrollGap(), this.centerContainerCtrl.isViewportInTheDOMTree()) {
			let { pinnedCols: e, colFlex: t } = this.beans;
			e?.keepPinnedColumnsNarrowerThanViewport(), this.checkViewportAndScrolls();
			let n = this.centerContainerCtrl.getCenterWidth();
			n !== this.centerWidth && (this.centerWidth = n, t?.refreshFlexedColumns({
				viewportWidth: this.centerWidth,
				updateBodyWidths: !0,
				fireResizedEvent: !0
			}));
		} else this.bodyHeight = 0;
	}
	checkViewportAndScrolls() {
		this.updateScrollVisibleService(), this.checkBodyHeight(), this.onHorizontalViewportChanged(), this.gridBodyCtrl.scrollFeature.checkScrollLeft();
	}
	getBodyHeight() {
		return this.bodyHeight;
	}
	checkBodyHeight() {
		let e = this.gridBodyCtrl.eBodyViewport, t = Ye(e);
		this.bodyHeight !== t && (this.bodyHeight = t, this.eventSvc.dispatchEvent({ type: "bodyHeightChanged" }));
	}
	updateScrollVisibleService() {
		this.updateScrollVisibleServiceImpl(), setTimeout(this.updateScrollVisibleServiceImpl.bind(this), 500);
	}
	updateScrollVisibleServiceImpl() {
		if (!this.isAlive()) return;
		let e = {
			horizontalScrollShowing: this.centerContainerCtrl.isHorizontalScrollShowing(),
			verticalScrollShowing: this.gridBodyCtrl.isVerticalScrollShowing()
		};
		this.scrollVisibleSvc.setScrollsVisible(e);
	}
	onHorizontalViewportChanged() {
		let { centerContainerCtrl: e, beans: t } = this, n = e.getCenterWidth(), r = e.getViewportScrollLeft();
		t.colViewport.setScrollPosition(n, r);
	}
};
function as(e) {
	return e.altKey || e.ctrlKey || e.metaKey ? !1 : e.key?.length === 1;
}
function os(e, t, n, r) {
	let i = t.getColDef().cellRendererParams?.suppressMouseEventHandling;
	return cs(e, t, n, r, i);
}
function ss(e, t, n, r) {
	let i = t?.suppressMouseEventHandling;
	return cs(e, void 0, n, r, i);
}
function cs(e, t, n, r, i) {
	return i ? i(K(e, {
		column: t,
		node: n,
		event: r
	})) : !1;
}
function ls(e, t, n) {
	let r = t;
	for (; r;) {
		let t = $n(e, r, n);
		if (t) return t;
		r = r.parentElement;
	}
	return null;
}
var us = "cellCtrl";
function ds(e, t) {
	return ls(e, t, us);
}
var fs = "renderedRow";
function ps(e, t) {
	return ls(e, t, fs);
}
function ms(e, t, n, r, i) {
	let a = r ? r.getColDef().suppressKeyboardEvent : void 0;
	if (!a) return !1;
	let o = K(e, {
		event: t,
		editing: i,
		column: r,
		node: n,
		data: n.data,
		colDef: r.getColDef()
	});
	return !!(a && a(o));
}
function hs(e) {
	let { pinnedRowModel: t, rowModel: n, rangeSvc: r, visibleCols: i } = e;
	if (!r || i.allCols.length === 0) return;
	let a = t?.isEmpty("top") ?? !0, o = t?.isEmpty("bottom") ?? !0, s = a ? null : "top", c, l;
	o ? (c = null, l = n.getRowCount() - 1) : (c = "bottom", l = t?.getPinnedBottomRowCount() ?? -1), r.setCellRange({
		rowStartIndex: 0,
		rowStartPinned: s,
		rowEndIndex: l,
		rowEndPinned: c
	});
}
var gs = class extends H {
	constructor(e) {
		super(), this.element = e;
	}
	postConstruct() {
		this.addKeyboardListeners(), this.addMouseListeners(), this.beans.touchSvc?.mockRowContextMenu(this), this.editSvc = this.beans.editSvc;
	}
	addKeyboardListeners() {
		let e = "keydown", t = this.processKeyboardEvent.bind(this, e);
		this.addManagedElementListeners(this.element, { [e]: t });
	}
	addMouseListeners() {
		let e = "mousedown";
		xt("pointerdown") ? e = "pointerdown" : xt("touchstart") && (e = "touchstart");
		let t = [
			"dblclick",
			"contextmenu",
			"mouseover",
			"mouseout",
			"click",
			e
		];
		for (let e of t) {
			let t = this.processMouseEvent.bind(this, e);
			this.addManagedElementListeners(this.element, { [e]: t });
		}
	}
	processMouseEvent(e, t) {
		if (!Et(this.beans, t) || Aa(t)) return;
		let { cellCtrl: n, rowCtrl: r } = this.getControlsForEventTarget(t.target);
		e === "contextmenu" ? (n?.column && n.dispatchCellContextMenuEvent(t), this.beans.contextMenuSvc?.handleContextMenuMouseEvent(t, void 0, r, n)) : (n && n.onMouseEvent(e, t), r && r.onMouseEvent(e, t));
	}
	getControlsForEventTarget(e) {
		let { gos: t } = this;
		return {
			cellCtrl: ds(t, e),
			rowCtrl: ps(t, e)
		};
	}
	processKeyboardEvent(e, t) {
		let { cellCtrl: n, rowCtrl: r } = this.getControlsForEventTarget(t.target);
		t.defaultPrevented || (n ? this.processCellKeyboardEvent(n, e, t) : r?.isFullWidth() && this.processFullWidthRowKeyboardEvent(r, e, t));
	}
	processCellKeyboardEvent(e, t, n) {
		let r = this.editSvc?.isEditing(e, { withOpenEditor: !0 }) ?? !1;
		ms(this.gos, n, e.rowNode, e.column, r) || t === "keydown" && (!r && this.beans.navigation?.handlePageScrollingKey(n) || e.onKeyDown(n), this.doGridOperations(n, r), as(n) && e.processCharacter(n)), t === "keydown" && this.eventSvc.dispatchEvent(e.createEvent(n, "cellKeyDown"));
	}
	processFullWidthRowKeyboardEvent(e, t, n) {
		let { rowNode: r } = e, { focusSvc: i, navigation: a } = this.beans, o = i.getFocusedCell()?.column;
		if (!ms(this.gos, n, r, o, !1)) {
			let r = n.key;
			if (t === "keydown") switch (r) {
				case Y.PAGE_HOME:
				case Y.PAGE_END:
				case Y.PAGE_UP:
				case Y.PAGE_DOWN:
					a?.handlePageScrollingKey(n, !0);
					break;
				case Y.LEFT:
				case Y.RIGHT: if (!this.gos.get("embedFullWidthRows")) break;
				case Y.UP:
				case Y.DOWN:
					e.onKeyboardNavigate(n);
					break;
				case Y.TAB:
					e.onTabKeyDown(n);
					break;
				default:
			}
		}
		t === "keydown" && this.eventSvc.dispatchEvent(e.createRowEvent("cellKeyDown", n));
	}
	doGridOperations(e, t) {
		if (!e.ctrlKey && !e.metaKey || t || !Et(this.beans, e)) return;
		let n = yi(e), { clipboardSvc: r, undoRedo: i } = this.beans;
		if (n === Y.A) return this.onCtrlAndA(e);
		if (n === Y.C) return this.onCtrlAndC(r, e);
		if (n === Y.D) return this.onCtrlAndD(r, e);
		if (n === Y.V) return this.onCtrlAndV(r, e);
		if (n === Y.X) return this.onCtrlAndX(r, e);
		if (n === Y.Y) return this.onCtrlAndY(i);
		if (n === Y.Z) return this.onCtrlAndZ(i, e);
	}
	onCtrlAndA(e) {
		let { beans: { rowModel: t, rangeSvc: n, selectionSvc: r }, gos: i } = this;
		n && ur(i) && !mr(i) && t.isRowsToRender() ? hs(this.beans) : r && r.selectAllRowNodes({
			source: "keyboardSelectAll",
			selectAll: pr(i)
		}), e.preventDefault();
	}
	onCtrlAndC(e, t) {
		if (!e || this.gos.get("enableCellTextSelection")) return;
		let { cellCtrl: n } = this.getControlsForEventTarget(t.target);
		this.editSvc?.isEditing(n, { withOpenEditor: !0 }) || (t.preventDefault(), e.copyToClipboard());
	}
	onCtrlAndX(e, t) {
		if (!e || this.gos.get("enableCellTextSelection") || this.gos.get("suppressCutToClipboard")) return;
		let { cellCtrl: n } = this.getControlsForEventTarget(t.target);
		this.editSvc?.isEditing(n, { withOpenEditor: !0 }) || (t.preventDefault(), e.cutToClipboard(void 0, "ui"));
	}
	onCtrlAndV(e, t) {
		let { cellCtrl: n } = this.getControlsForEventTarget(t.target);
		this.editSvc?.isEditing(n, { withOpenEditor: !0 }) || e && !this.gos.get("suppressClipboardPaste") && e.pasteFromClipboard();
	}
	onCtrlAndD(e, t) {
		e && !this.gos.get("suppressClipboardPaste") && e.copyRangeDown(), t.preventDefault();
	}
	onCtrlAndZ(e, t) {
		!this.gos.get("undoRedoCellEditing") || !e || (t.preventDefault(), t.shiftKey ? e.redo("ui") : e.undo("ui"));
	}
	onCtrlAndY(e) {
		e?.redo("ui");
	}
}, _s = (e) => e.topRowCtrls, vs = (e) => e.getStickyTopRowCtrls(), ys = (e) => e.getStickyBottomRowCtrls(), bs = (e) => e.bottomRowCtrls, xs = (e) => e.allRowCtrls, Ss = (e) => e.getCtrls("top"), Cs = (e) => e.getCtrls("center"), ws = (e) => e.getCtrls("bottom"), Ts = {
	center: {
		type: "center",
		name: "center-cols",
		getRowCtrls: xs,
		getSpannedRowCtrls: Cs
	},
	left: {
		type: "left",
		name: "pinned-left-cols",
		pinnedType: "left",
		getRowCtrls: xs,
		getSpannedRowCtrls: Cs
	},
	right: {
		type: "right",
		name: "pinned-right-cols",
		pinnedType: "right",
		getRowCtrls: xs,
		getSpannedRowCtrls: Cs
	},
	fullWidth: {
		type: "fullWidth",
		name: "full-width",
		fullWidth: !0,
		getRowCtrls: xs
	},
	topCenter: {
		type: "center",
		name: "floating-top",
		getRowCtrls: _s,
		getSpannedRowCtrls: Ss
	},
	topLeft: {
		type: "left",
		name: "pinned-left-floating",
		container: "ag-pinned-left-floating-top",
		pinnedType: "left",
		getRowCtrls: _s,
		getSpannedRowCtrls: Ss
	},
	topRight: {
		type: "right",
		name: "pinned-right-floating",
		container: "ag-pinned-right-floating-top",
		pinnedType: "right",
		getRowCtrls: _s,
		getSpannedRowCtrls: Ss
	},
	topFullWidth: {
		type: "fullWidth",
		name: "floating-top-full-width",
		fullWidth: !0,
		getRowCtrls: _s
	},
	stickyTopCenter: {
		type: "center",
		name: "sticky-top",
		getRowCtrls: vs
	},
	stickyTopLeft: {
		type: "left",
		name: "pinned-left-sticky-top",
		container: "ag-pinned-left-sticky-top",
		pinnedType: "left",
		getRowCtrls: vs
	},
	stickyTopRight: {
		type: "right",
		name: "pinned-right-sticky-top",
		container: "ag-pinned-right-sticky-top",
		pinnedType: "right",
		getRowCtrls: vs
	},
	stickyTopFullWidth: {
		type: "fullWidth",
		name: "sticky-top-full-width",
		fullWidth: !0,
		getRowCtrls: vs
	},
	stickyBottomCenter: {
		type: "center",
		name: "sticky-bottom",
		getRowCtrls: ys
	},
	stickyBottomLeft: {
		type: "left",
		name: "pinned-left-sticky-bottom",
		container: "ag-pinned-left-sticky-bottom",
		pinnedType: "left",
		getRowCtrls: ys
	},
	stickyBottomRight: {
		type: "right",
		name: "pinned-right-sticky-bottom",
		container: "ag-pinned-right-sticky-bottom",
		pinnedType: "right",
		getRowCtrls: ys
	},
	stickyBottomFullWidth: {
		type: "fullWidth",
		name: "sticky-bottom-full-width",
		fullWidth: !0,
		getRowCtrls: ys
	},
	bottomCenter: {
		type: "center",
		name: "floating-bottom",
		getRowCtrls: bs,
		getSpannedRowCtrls: ws
	},
	bottomLeft: {
		type: "left",
		name: "pinned-left-floating-bottom",
		container: "ag-pinned-left-floating-bottom",
		pinnedType: "left",
		getRowCtrls: bs,
		getSpannedRowCtrls: ws
	},
	bottomRight: {
		type: "right",
		name: "pinned-right-floating-bottom",
		container: "ag-pinned-right-floating-bottom",
		pinnedType: "right",
		getRowCtrls: bs,
		getSpannedRowCtrls: ws
	},
	bottomFullWidth: {
		type: "fullWidth",
		name: "floating-bottom-full-width",
		fullWidth: !0,
		getRowCtrls: bs
	}
};
function Es(e) {
	return `ag-${ks(e).name}-viewport`;
}
function Ds(e) {
	let t = ks(e);
	return t.container ?? `ag-${t.name}-container`;
}
function Os(e) {
	return `ag-${ks(e).name}-spanned-cells-container`;
}
function ks(e) {
	return Ts[e];
}
var As = [
	"topCenter",
	"topLeft",
	"topRight"
], js = [
	"bottomCenter",
	"bottomLeft",
	"bottomRight"
], Ms = [
	"center",
	"left",
	"right"
], Ns = [
	"center",
	"left",
	"right",
	"fullWidth"
], Ps = [
	"stickyTopCenter",
	"stickyBottomCenter",
	"center",
	"topCenter",
	"bottomCenter"
], Fs = [
	"left",
	"bottomLeft",
	"topLeft",
	"stickyTopLeft",
	"stickyBottomLeft"
], Is = [
	"right",
	"bottomRight",
	"topRight",
	"stickyTopRight",
	"stickyBottomRight"
], Ls = [
	"stickyTopCenter",
	"stickyTopLeft",
	"stickyTopRight"
], Rs = [
	"stickyBottomCenter",
	"stickyBottomLeft",
	"stickyBottomRight"
], zs = [
	...Ls,
	"stickyTopFullWidth",
	...Rs,
	"stickyBottomFullWidth"
], Bs = [
	...As,
	...js,
	...Ms,
	...Ls,
	...Rs
], Vs = class extends H {
	constructor(e) {
		super(), this.name = e, this.visible = !0, this.EMPTY_CTRLS = [], this.options = ks(e);
	}
	postConstruct() {
		this.enableRtl = this.gos.get("enableRtl"), this.forContainers(["center"], () => {
			this.viewportSizeFeature = this.createManagedBean(new is(this)), this.addManagedEventListeners({ stickyTopOffsetChanged: this.onStickyTopOffsetChanged.bind(this) });
		});
	}
	onStickyTopOffsetChanged(e) {
		this.comp.setOffsetTop(`${e.offset}px`);
	}
	registerWithCtrlsService() {
		this.options.fullWidth || this.beans.ctrlsSvc.register(this.name, this);
	}
	forContainers(e, t) {
		e.indexOf(this.name) >= 0 && t();
	}
	setComp(e, t, n, r) {
		this.comp = e, this.eContainer = t, this.eSpannedContainer = n, this.eViewport = r, this.createManagedBean(new gs(this.eViewport ?? this.eContainer)), this.addPreventScrollWhileDragging(), this.listenOnDomOrder();
		let { pinnedCols: i, rangeSvc: a } = this.beans, o = () => this.onPinnedWidthChanged();
		this.forContainers(Fs, () => {
			this.pinnedWidthFeature = this.createOptionalManagedBean(i?.createPinnedWidthFeature(!0, this.eContainer, this.eSpannedContainer)), this.addManagedEventListeners({ leftPinnedWidthChanged: o });
		}), this.forContainers(Is, () => {
			this.pinnedWidthFeature = this.createOptionalManagedBean(i?.createPinnedWidthFeature(!1, this.eContainer, this.eSpannedContainer)), this.addManagedEventListeners({ rightPinnedWidthChanged: o });
		}), this.forContainers(Ns, () => this.createManagedBean(new Wo(this.eContainer, this.name === "center" ? r : void 0))), a && this.forContainers(Bs, () => this.createManagedBean(a.createDragListenerFeature(this.eContainer))), this.forContainers(Ps, () => this.createManagedBean(new xo((e) => this.comp.setContainerWidth(`${e}px`)))), this.visible = this.isContainerVisible(), this.addListeners(), this.registerWithCtrlsService();
	}
	onScrollCallback(e) {
		this.addManagedElementListeners(this.eViewport, { scroll: e });
	}
	addListeners() {
		let { spannedRowRenderer: e, gos: t } = this.beans, n = this.onDisplayedColumnsChanged.bind(this);
		this.addManagedEventListeners({
			displayedColumnsChanged: n,
			displayedColumnsWidthChanged: n,
			displayedRowsChanged: (e) => this.onDisplayedRowsChanged(e.afterScroll)
		}), n(), this.onDisplayedRowsChanged(), e && this.options.getSpannedRowCtrls && t.get("enableCellSpan") && this.addManagedListeners(e, { spannedRowsUpdated: () => {
			let t = this.options.getSpannedRowCtrls(e);
			t && this.comp.setSpannedRowCtrls(t, !1);
		} });
	}
	listenOnDomOrder() {
		if (zs.indexOf(this.name) >= 0) {
			this.comp.setDomOrder(!0);
			return;
		}
		let e = () => {
			let e = this.gos.get("ensureDomOrder"), t = G(this.gos, "print");
			this.comp.setDomOrder(e || t);
		};
		this.addManagedPropertyListener("domLayout", e), e();
	}
	onDisplayedColumnsChanged() {
		this.forContainers(["center"], () => this.onHorizontalViewportChanged());
	}
	addPreventScrollWhileDragging() {
		let { dragSvc: e } = this.beans;
		if (!e) return;
		let t = (t) => {
			e.dragging && t.cancelable && t.preventDefault();
		};
		this.eContainer.addEventListener("touchmove", t, { passive: !1 }), this.addDestroyFunc(() => this.eContainer.removeEventListener("touchmove", t));
	}
	onHorizontalViewportChanged(e = !1) {
		let t = this.getCenterWidth(), n = this.getCenterViewportScrollLeft();
		this.beans.colViewport.setScrollPosition(t, n, e);
	}
	hasHorizontalScrollGap() {
		return this.eContainer.clientWidth - this.eViewport.clientWidth < 0;
	}
	hasVerticalScrollGap() {
		return this.eContainer.clientHeight - this.eViewport.clientHeight < 0;
	}
	getCenterWidth() {
		return Xe(this.eViewport);
	}
	getCenterViewportScrollLeft() {
		return Qe(this.eViewport, this.enableRtl);
	}
	registerViewportResizeListener(e) {
		let t = ft(this.beans, this.eViewport, e);
		this.addDestroyFunc(() => t());
	}
	isViewportInTheDOMTree() {
		return nt(this.eViewport);
	}
	getViewportScrollLeft() {
		return Qe(this.eViewport, this.enableRtl);
	}
	isHorizontalScrollShowing() {
		let { beans: e, gos: t, eViewport: n } = this, r = t.get("alwaysShowHorizontalScroll"), { ctrlsSvc: i } = e, a = i.getGridBodyCtrl()?.eBodyViewport, o = i.get("fakeHScrollComp")?.getGui(), s = i.get("fakeVScrollComp")?.getGui();
		return r || es(n, a, void 0, o, s);
	}
	setHorizontalScroll(e) {
		this.comp.setHorizontalScroll(e);
	}
	getHScrollPosition() {
		return {
			left: this.eViewport.scrollLeft,
			right: this.eViewport.scrollLeft + this.eViewport.offsetWidth
		};
	}
	setCenterViewportScrollLeft(e) {
		$e(this.eViewport, e, this.enableRtl);
	}
	isContainerVisible() {
		return this.options.pinnedType == null || !!this.pinnedWidthFeature && this.pinnedWidthFeature.getWidth() > 0;
	}
	onPinnedWidthChanged() {
		let e = this.isContainerVisible();
		this.visible != e && (this.visible = e, this.onDisplayedRowsChanged());
	}
	onDisplayedRowsChanged(e = !1) {
		let t = this.options.getRowCtrls(this.beans.rowRenderer);
		if (!this.visible || t.length === 0) {
			this.comp.setRowCtrls({ rowCtrls: this.EMPTY_CTRLS });
			return;
		}
		let n = G(this.gos, "print"), r = this.gos.get("embedFullWidthRows") || n, i = t.filter((e) => {
			let t = e.isFullWidth();
			return this.options.fullWidth ? !r && t : r || !t;
		});
		this.comp.setRowCtrls({
			rowCtrls: i,
			useFlushSync: e
		});
	}
}, Hs = "ag-force-vertical-scroll", Us = "ag-selectable", Ws = "ag-column-moving", Gs = class extends H {
	constructor() {
		super(...arguments), this.stickyTopHeight = 0, this.stickyBottomHeight = 0;
	}
	wireBeans(e) {
		this.ctrlsSvc = e.ctrlsSvc, this.colModel = e.colModel, this.scrollVisibleSvc = e.scrollVisibleSvc, this.pinnedRowModel = e.pinnedRowModel, this.filterManager = e.filterManager, this.rowGroupColsSvc = e.rowGroupColsSvc;
	}
	setComp(e, t, n, r, i, a, o) {
		this.comp = e, this.eGridBody = t, this.eBodyViewport = n, this.eTop = r, this.eBottom = i, this.eStickyTop = a, this.eStickyBottom = o, this.eCenterColsViewport = n.querySelector(`.${Es("center")}`), this.eFullWidthContainer = n.querySelector(`.${Ds("fullWidth")}`), this.setCellTextSelection(this.gos.get("enableCellTextSelection")), this.addManagedPropertyListener("enableCellTextSelection", (e) => this.setCellTextSelection(e.currentValue)), this.createManagedBean(new Bo(this.comp)), this.scrollFeature = this.createManagedBean(new Qo(n)), this.beans.rowDragSvc?.setupRowDrag(n, this), this.setupRowAnimationCssClass(), this.addEventListeners(), this.addFocusListeners([
			r,
			n,
			i,
			a,
			o
		]), this.setGridRootRole(), this.onGridColumnsChanged(), this.addBodyViewportListener(), this.setFloatingHeights(), this.disableBrowserDragging(), this.addStopEditingWhenGridLosesFocus(), this.updateScrollingClasses(), this.filterManager?.setupAdvFilterHeaderComp(r), this.ctrlsSvc.register("gridBodyCtrl", this);
	}
	addEventListeners() {
		let e = this.setFloatingHeights.bind(this), t = this.setGridRootRole.bind(this), n = this.toggleRowResizeStyles.bind(this);
		this.addManagedEventListeners({
			gridColumnsChanged: this.onGridColumnsChanged.bind(this),
			scrollVisibilityChanged: this.onScrollVisibilityChanged.bind(this),
			scrollGapChanged: this.updateScrollingClasses.bind(this),
			pinnedRowDataChanged: e,
			pinnedHeightChanged: e,
			pinnedRowsChanged: e,
			headerHeightChanged: this.setStickyTopOffsetTop.bind(this),
			columnRowGroupChanged: t,
			columnPivotChanged: t,
			rowResizeStarted: n,
			rowResizeEnded: n
		}), this.addManagedPropertyListener("treeData", t);
	}
	toggleRowResizeStyles(e) {
		let t = e.type === "rowResizeStarted";
		this.eBodyViewport.classList.toggle("ag-prevent-animation", t);
	}
	onGridColumnsChanged() {
		let e = this.beans.colModel.getCols();
		this.comp.setColumnCount(e.length);
	}
	onScrollVisibilityChanged() {
		let { scrollVisibleSvc: e } = this, t = e.verticalScrollShowing;
		this.setVerticalScrollPaddingVisible(t), this.setStickyWidth(t), this.setStickyBottomOffsetBottom();
		let n = `calc(100% + ${(t && e.getScrollbarWidth() || 0) + (ma() ? 16 : 0)}px)`;
		pt(this.beans, () => this.comp.setBodyViewportWidth(n)), this.updateScrollingClasses();
	}
	setGridRootRole() {
		let { rowGroupColsSvc: e, colModel: t, gos: n } = this, r = n.get("treeData");
		if (!r) {
			let n = t.isPivotMode();
			r = (e ? e.columns.length : 0) >= (n ? 2 : 1);
		}
		this.comp.setGridRootRole(r ? "treegrid" : "grid");
	}
	addFocusListeners(e) {
		for (let t of e) this.addManagedElementListeners(t, {
			focusin: (e) => {
				let { target: n } = e, r = qe(n, "ag-root", t);
				t.classList.toggle("ag-has-focus", !r);
			},
			focusout: (e) => {
				let { target: n, relatedTarget: r } = e, i = t.contains(r), a = qe(r, "ag-root", t);
				qe(n, "ag-root", t) || (!i || a) && t.classList.remove("ag-has-focus");
			}
		});
	}
	setColumnMovingCss(e) {
		this.comp.setColumnMovingCss(Ws, e);
	}
	setCellTextSelection(e = !1) {
		this.comp.setCellSelectableCss(Us, e);
	}
	updateScrollingClasses() {
		let { eGridBody: { classList: e }, scrollVisibleSvc: t } = this;
		e.toggle("ag-body-vertical-content-no-gap", !t.verticalScrollGap), e.toggle("ag-body-horizontal-content-no-gap", !t.horizontalScrollGap);
	}
	disableBrowserDragging() {
		this.addManagedElementListeners(this.eGridBody, { dragstart: (e) => {
			if (e.target instanceof HTMLImageElement) return e.preventDefault(), !1;
		} });
	}
	addStopEditingWhenGridLosesFocus() {
		this.beans.editSvc?.addStopEditingWhenGridLosesFocus([
			this.eBodyViewport,
			this.eBottom,
			this.eTop,
			this.eStickyTop,
			this.eStickyBottom
		]);
	}
	updateRowCount() {
		let e = (this.ctrlsSvc.getHeaderRowContainerCtrl()?.getRowCount() ?? 0) + (this.filterManager?.getHeaderRowCount() ?? 0), { rowModel: t } = this.beans, n = t.isLastRowIndexKnown() ? t.getRowCount() : -1, r = n === -1 ? -1 : e + n;
		this.comp.setRowCount(r);
	}
	registerBodyViewportResizeListener(e) {
		this.comp.registerBodyViewportResizeListener(e);
	}
	setVerticalScrollPaddingVisible(e) {
		let t = e ? "scroll" : "hidden";
		this.comp.setPinnedTopBottomOverflowY(t);
	}
	isVerticalScrollShowing() {
		let { gos: e, comp: t, ctrlsSvc: n } = this, r = e.get("alwaysShowVerticalScroll"), i = r ? Hs : null, a = G(e, "normal");
		t.setAlwaysVerticalScrollClass(i, r);
		let o = n.get("center")?.eViewport, s = n.get("fakeHScrollComp")?.getGui(), c = n.get("fakeVScrollComp")?.getGui();
		return r || a && ts(this.eBodyViewport, o, void 0, c, s);
	}
	setupRowAnimationCssClass() {
		let { rowContainerHeight: e, environment: t } = this.beans, n = t.sizesMeasured, r = () => {
			let t = n && tr(this.gos) && !e.stretching, r = t ? "ag-row-animation" : "ag-row-no-animation";
			this.comp.setRowAnimationCssOnBodyViewport(r, t);
		};
		r(), this.addManagedEventListeners({ heightScaleChanged: r }), this.addManagedPropertyListener("animateRows", r), this.addManagedEventListeners({ stylesChanged: () => {
			!n && t.sizesMeasured && (n = !0, r());
		} });
	}
	addBodyViewportListener() {
		let { eBodyViewport: e, eStickyTop: t, eStickyBottom: n, eTop: r, eBottom: i, beans: { popupSvc: a, touchSvc: o } } = this, s = this.onBodyViewportContextMenu.bind(this);
		this.addManagedElementListeners(e, { contextmenu: s }), o?.mockBodyContextMenu(this, s), this.addManagedElementListeners(e, { wheel: this.onBodyViewportWheel.bind(this, a) });
		let c = this.onStickyWheel.bind(this);
		for (let e of [
			t,
			n,
			r,
			i
		]) this.addManagedElementListeners(e, { wheel: c });
		let l = this.onHorizontalWheel.bind(this);
		for (let e of [
			"left",
			"right",
			"topLeft",
			"topRight",
			"bottomLeft",
			"bottomRight"
		]) this.addManagedElementListeners(this.ctrlsSvc.get(e).eContainer, { wheel: l });
		this.addFullWidthContainerWheelListener();
	}
	addFullWidthContainerWheelListener() {
		this.addManagedElementListeners(this.eFullWidthContainer, { wheel: (e) => this.onFullWidthContainerWheel(e) });
	}
	onFullWidthContainerWheel(e) {
		let { deltaX: t, deltaY: n, shiftKey: r } = e;
		(r || Math.abs(t) > Math.abs(n)) && Et(this.beans, e) && this.scrollGridBodyToMatchEvent(e);
	}
	onStickyWheel(e) {
		let { deltaY: t } = e;
		this.scrollVertically(t) > 0 && e.preventDefault();
	}
	onHorizontalWheel(e) {
		let { deltaX: t, deltaY: n, shiftKey: r } = e;
		(r || Math.abs(t) > Math.abs(n)) && this.scrollGridBodyToMatchEvent(e);
	}
	scrollGridBodyToMatchEvent(e) {
		let { deltaX: t, deltaY: n } = e;
		e.preventDefault(), this.eCenterColsViewport.scrollBy({ left: t || n });
	}
	onBodyViewportContextMenu(e, t, n) {
		if (!e && !n) return;
		this.gos.get("preventDefaultOnContextMenu") && (e || n).preventDefault();
		let { target: r } = e || t;
		(r === this.eBodyViewport || r === this.ctrlsSvc.get("center").eViewport) && this.beans.contextMenuSvc?.showContextMenu({
			mouseEvent: e,
			touchEvent: n,
			value: null,
			anchorToElement: this.eGridBody,
			source: "ui"
		});
	}
	onBodyViewportWheel(e, t) {
		this.gos.get("suppressScrollWhenPopupsAreOpen") && e?.hasAnchoredPopup() && t.preventDefault();
	}
	scrollVertically(e) {
		let t = this.eBodyViewport.scrollTop;
		return this.scrollFeature.setVerticalScrollPosition(t + e), this.eBodyViewport.scrollTop - t;
	}
	setFloatingHeights() {
		let { pinnedRowModel: e, beans: { environment: t } } = this, n = e?.getPinnedTopTotalHeight(), r = e?.getPinnedBottomTotalHeight(), i = t.getPinnedRowBorderWidth() - t.getRowBorderWidth(), a = n ? i + n : 0, o = r ? i + r : 0;
		this.comp.setTopHeight(a), this.comp.setBottomHeight(o), this.comp.setTopInvisible(a <= 0), this.comp.setBottomInvisible(o <= 0), this.setStickyTopOffsetTop(), this.setStickyBottomOffsetBottom();
	}
	setStickyTopHeight(e = 0) {
		this.comp.setStickyTopHeight(`${e}px`), this.stickyTopHeight = e;
	}
	setStickyBottomHeight(e = 0) {
		this.comp.setStickyBottomHeight(`${e}px`), this.stickyBottomHeight = e;
	}
	setStickyWidth(e) {
		if (!e) this.comp.setStickyTopWidth("100%"), this.comp.setStickyBottomWidth("100%");
		else {
			let e = this.scrollVisibleSvc.getScrollbarWidth();
			this.comp.setStickyTopWidth(`calc(100% - ${e}px)`), this.comp.setStickyBottomWidth(`calc(100% - ${e}px)`);
		}
	}
	setStickyTopOffsetTop() {
		let e = this.ctrlsSvc.get("gridHeaderCtrl").headerHeight + (this.filterManager?.getHeaderHeight() ?? 0), t = this.pinnedRowModel?.getPinnedTopTotalHeight() ?? 0, n = 0;
		e > 0 && (n += e), t > 0 && (n += t), n > 0 && (n += 1), this.comp.setStickyTopTop(`${n}px`);
	}
	setStickyBottomOffsetBottom() {
		let { pinnedRowModel: e, scrollVisibleSvc: t, comp: n } = this, r = (e?.getPinnedBottomTotalHeight() ?? 0) + (t.horizontalScrollShowing && t.getScrollbarWidth() || 0);
		n.setStickyBottomBottom(`${r}px`);
	}
};
function Ks(e) {
	return _t(e);
}
var qs = {
	TAB_GUARD: "ag-tab-guard",
	TAB_GUARD_TOP: "ag-tab-guard-top",
	TAB_GUARD_BOTTOM: "ag-tab-guard-bottom"
}, Js = class extends Nt {
	constructor(e, t) {
		super(), this.stopPropagationCallbacks = t, this.skipTabGuardFocus = !1, this.forcingFocusOut = !1, this.allowFocus = !1;
		let { comp: n, eTopGuard: r, eBottomGuard: i, focusTrapActive: a, forceFocusOutWhenTabGuardsAreEmpty: o, isFocusableContainer: s, focusInnerElement: c, onFocusIn: l, onFocusOut: u, shouldStopEventPropagation: d, onTabKeyDown: f, handleKeyDown: p, isEmpty: m, eFocusableElement: h } = e;
		this.comp = n, this.eTopGuard = r, this.eBottomGuard = i, this.providedFocusInnerElement = c, this.eFocusableElement = h, this.focusTrapActive = !!a, this.forceFocusOutWhenTabGuardsAreEmpty = !!o, this.isFocusableContainer = !!s, this.providedFocusIn = l, this.providedFocusOut = u, this.providedShouldStopEventPropagation = d, this.providedOnTabKeyDown = f, this.providedHandleKeyDown = p, this.providedIsEmpty = m;
	}
	postConstruct() {
		this.createManagedBean(new Da(this.eFocusableElement, this.stopPropagationCallbacks, {
			shouldStopEventPropagation: () => this.shouldStopEventPropagation(),
			onTabKeyDown: (e) => this.onTabKeyDown(e),
			handleKeyDown: (e) => this.handleKeyDown(e),
			onFocusIn: (e) => this.onFocusIn(e),
			onFocusOut: (e) => this.onFocusOut(e)
		})), this.activateTabGuards();
		for (let e of [this.eTopGuard, this.eBottomGuard]) this.addManagedElementListeners(e, { focus: this.onFocus.bind(this) });
	}
	handleKeyDown(e) {
		this.providedHandleKeyDown && this.providedHandleKeyDown(e);
	}
	tabGuardsAreActive() {
		return !!this.eTopGuard && this.eTopGuard.hasAttribute("tabIndex");
	}
	shouldStopEventPropagation() {
		return this.providedShouldStopEventPropagation ? this.providedShouldStopEventPropagation() : !1;
	}
	activateTabGuards() {
		if (this.forcingFocusOut) return;
		let e = this.gos.get("tabIndex");
		this.comp.setTabIndex(e.toString());
	}
	deactivateTabGuards() {
		this.comp.setTabIndex();
	}
	onFocus(e) {
		if (this.isFocusableContainer && !this.eFocusableElement.contains(e.relatedTarget) && !this.allowFocus) {
			this.findNextElementOutsideAndFocus(e.target === this.eBottomGuard);
			return;
		}
		if (this.skipTabGuardFocus) {
			this.skipTabGuardFocus = !1;
			return;
		}
		if (this.forceFocusOutWhenTabGuardsAreEmpty && (this.providedIsEmpty ? this.providedIsEmpty() : Sa(this.eFocusableElement, ".ag-tab-guard").length === 0)) {
			this.findNextElementOutsideAndFocus(e.target === this.eBottomGuard);
			return;
		}
		if (this.isFocusableContainer && this.eFocusableElement.contains(e.relatedTarget)) return;
		let t = e.target === this.eBottomGuard;
		!(this.providedFocusInnerElement ? this.providedFocusInnerElement(t) : this.focusInnerElement(t)) && this.forceFocusOutWhenTabGuardsAreEmpty && this.findNextElementOutsideAndFocus(e.target === this.eBottomGuard);
	}
	findNextElementOutsideAndFocus(e) {
		let t = Sa(B(this.beans).body, null, !0), n = t.indexOf(e ? this.eTopGuard : this.eBottomGuard);
		if (n === -1) return;
		let r, i;
		e ? (r = 0, i = n) : (r = n + 1, i = t.length);
		let a = t.slice(r, i), o = this.gos.get("tabIndex");
		a.sort((e, t) => {
			let n = Number.parseInt(e.getAttribute("tabindex") || "0"), r = Number.parseInt(t.getAttribute("tabindex") || "0");
			return r === o ? 1 : n === o ? -1 : n === 0 ? 1 : r === 0 ? -1 : n - r;
		}), a[e ? a.length - 1 : 0]?.focus();
	}
	onFocusIn(e) {
		this.focusTrapActive || this.forcingFocusOut || (this.providedFocusIn && this.providedFocusIn(e), this.isFocusableContainer || this.deactivateTabGuards());
	}
	onFocusOut(e) {
		this.focusTrapActive || (this.providedFocusOut && this.providedFocusOut(e), this.eFocusableElement.contains(e.relatedTarget) || this.activateTabGuards());
	}
	onTabKeyDown(e) {
		if (this.providedOnTabKeyDown) {
			this.providedOnTabKeyDown(e);
			return;
		}
		if (this.focusTrapActive || e.defaultPrevented) return;
		let t = this.tabGuardsAreActive();
		t && this.deactivateTabGuards();
		let n = this.getNextFocusableElement(e.shiftKey);
		t && setTimeout(() => this.activateTabGuards(), 0), n && (n.focus(), e.preventDefault());
	}
	focusInnerElement(e = !1) {
		let t = Sa(this.eFocusableElement);
		return this.tabGuardsAreActive() && (t.splice(0, 1), t.splice(-1, 1)), t.length ? (t[e ? t.length - 1 : 0].focus({ preventScroll: !0 }), !0) : !1;
	}
	getNextFocusableElement(e) {
		return wa(this.beans, this.eFocusableElement, !1, e);
	}
	forceFocusOutOfContainer(e = !1) {
		if (this.forcingFocusOut) return;
		let t = e ? this.eTopGuard : this.eBottomGuard;
		this.activateTabGuards(), this.skipTabGuardFocus = !0, this.forcingFocusOut = !0, t.focus(), window.setTimeout(() => {
			this.forcingFocusOut = !1, this.activateTabGuards();
		});
	}
	isTabGuard(e, t) {
		return e === this.eTopGuard && !t || e === this.eBottomGuard && (t ?? !0);
	}
	setAllowFocus(e) {
		this.allowFocus = e;
	}
}, Ys = (e, t) => so(e, () => Ca(e.getGui(), t, !1, !0)), Xs = (e) => e?.getFocusableContainerName() ?? "external", Zs = (e) => e == null ? "external" : typeof e == "string" ? e : "gridBody", Qs = class extends H {
	constructor() {
		super(...arguments), this.additionalFocusableContainers = /* @__PURE__ */ new Set();
	}
	setComp(e, t, n) {
		this.view = e, this.eGridHostDiv = t, this.eGui = n, this.eGui.setAttribute("grid-id", this.beans.context.getId());
		let { dragAndDrop: r, ctrlsSvc: i } = this.beans;
		r?.registerGridDropTarget(() => this.eGui, this), this.createManagedBean(new Bo(this.view)), this.view.setRtlClass(this.gos.get("enableRtl") ? "ag-rtl" : "ag-ltr");
		let a = ft(this.beans, this.eGridHostDiv, this.onGridSizeChanged.bind(this));
		this.addDestroyFunc(() => a()), i.register("gridCtrl", this);
	}
	isDetailGrid() {
		return Ta(this.getGui())?.getAttribute("row-id")?.startsWith("detail") || !1;
	}
	getOptionalSelectors() {
		let e = this.beans;
		return {
			paginationSelector: e.pagination?.getPaginationSelector(),
			gridHeaderDropZonesSelector: e.registry?.getSelector("AG-GRID-HEADER-DROP-ZONES"),
			sideBarSelector: e.sideBar?.getSelector(),
			statusBarSelector: e.registry?.getSelector("AG-STATUS-BAR"),
			watermarkSelector: e.licenseManager?.getWatermarkSelector()
		};
	}
	onGridSizeChanged() {
		this.eventSvc.dispatchEvent({
			type: "gridSizeChanged",
			clientWidth: this.eGridHostDiv.clientWidth,
			clientHeight: this.eGridHostDiv.clientHeight
		});
	}
	destroyGridUi() {
		this.view.destroyGridUi();
	}
	getGui() {
		return this.eGui;
	}
	setResizeCursor(e) {
		let { view: t } = this;
		e === !1 ? t.setCursor(null) : t.setCursor(e === 1 ? "ew-resize" : "ns-resize");
	}
	disableUserSelect(e) {
		this.view.setUserSelect(e ? "none" : null);
	}
	focusNextInnerContainer(e) {
		let t = this.getFocusableContainers(), { indexWithFocus: n, nextIndex: r } = this.getNextFocusableIndex(t, e), i = n === -1 ? e ? t.length - 1 : 0 : r, { gos: a, beans: { focusSvc: o, navigation: s } } = this, c = a.getCallback("tabToNextGridContainer");
		if (c) {
			let r = o.getDefaultTabToNextGridContainerTarget({
				backwards: e,
				focusableContainers: t,
				nextIndex: i
			}), a = Xs(t[i]), l = r == null && a === "gridBody" ? "gridBody" : Zs(r), u = c({
				backwards: e,
				previousContainer: Xs(t[n]),
				nextContainer: l,
				defaultTarget: r
			});
			if (u !== void 0) {
				if (typeof u == "boolean") return u;
				if (typeof u == "string") {
					if (u === "gridBody") return this.focusGridBodyDefault(e) || void 0;
					let n = t.find((e) => e.getFocusableContainerName() === u);
					if (!n) {
						rn(`tabToNextGridContainer - ${u} container not found`);
						return;
					}
					return Ys(n, e) ? !0 : void 0;
				}
				return yo(u) ? o.focusHeaderPosition({ headerPosition: u }) || void 0 : (s?.ensureCellVisible(u), o.setFocusedCell({
					...u,
					forceBrowserFocus: !0
				}), o.isCellFocused(u) || void 0);
			}
		}
		return this.focusNextInnerContainerDefault({
			backwards: e,
			focusableContainers: t,
			indexWithFocus: n,
			nextIndex: i
		}) || void 0;
	}
	focusInnerElement(e) {
		let { gos: t, beans: n, beans: { focusSvc: r, visibleCols: i } } = this;
		if (t.getCallback("focusGridInnerElement")?.({ fromBottom: !!e })) return !0;
		let a = this.getFocusableContainers();
		if (e) return this.focusNextInnerContainerDefault({
			backwards: !0,
			focusableContainers: a,
			indexWithFocus: a.length,
			nextIndex: a.length - 1
		}) ? !0 : r.focusGridView({
			column: M(i.allCols),
			backwards: !0
		});
		let o = i.allCols;
		if (t.get("headerHeight") === 0 || no(n)) {
			if (r.focusGridView({
				column: o[0],
				backwards: e
			})) return !0;
			for (let t = 1; t < a.length; t++) if (Ca(a[t].getGui(), e)) return !0;
			return !1;
		}
		return r.focusFirstHeader();
	}
	forceFocusOutOfContainer(e = !1) {
		this.view.forceFocusOutOfContainer(e);
	}
	isFocusInsideGridBody() {
		let e = this.getFocusableContainers(), { indexWithFocus: t } = this.getNextFocusableIndex(e);
		return e[t]?.getFocusableContainerName() === "gridBody";
	}
	addFocusableContainer(e) {
		this.additionalFocusableContainers.add(e);
	}
	removeFocusableContainer(e) {
		this.additionalFocusableContainers.delete(e);
	}
	allowFocusForNextCoreContainer(e) {
		let t = this.view.getFocusableContainers(), { indexWithFocus: n, nextIndex: r } = this.getNextFocusableIndex(t, e);
		this.focusNextInnerContainerDefault({
			backwards: !!e,
			focusableContainers: t,
			indexWithFocus: n,
			nextIndex: r
		}) || this.forceFocusOutOfContainer(e);
	}
	isFocusable() {
		let e = this.beans;
		return !ro(e) || !no(e) || !!e.sideBar?.comp?.isDisplayed();
	}
	getNextFocusableIndex(e, t) {
		let n = z(this.beans), r = e.findIndex((e) => e.getGui().contains(n));
		return {
			indexWithFocus: r,
			nextIndex: r + (t ? -1 : 1)
		};
	}
	focusGridBodyDefault(e) {
		let { gos: t, beans: n, beans: { focusSvc: r, visibleCols: { allCols: i } } } = this;
		return e ? r.focusGridView({
			column: M(i),
			backwards: !0
		}) : t.get("headerHeight") === 0 || no(n) ? r.focusGridView({ column: i[0] }) : r.focusFirstHeader();
	}
	focusNextInnerContainerDefault(e) {
		let { backwards: t, focusableContainers: n, indexWithFocus: r } = e, i = t ? -1 : 1;
		for (let a = e.nextIndex; a >= 0 && a < n.length; a += i) {
			let e = n[a];
			if (e.getFocusableContainerName() === "gridBody" && (r === -1 || (t ? r > a : r < a))) {
				if (this.focusGridBodyDefault(t)) return !0;
				continue;
			}
			if (Ys(e, t)) return !0;
		}
		return !1;
	}
	getFocusableContainers() {
		return [...this.view.getFocusableContainers(), ...this.additionalFocusableContainers];
	}
	destroy() {
		this.additionalFocusableContainers.clear(), super.destroy();
	}
}, Z = (e, t) => {
	for (let n of Object.keys(t)) t[n] = e;
	return t;
}, $s = {
	dispatchEvent: "CommunityCore",
	...Z("CommunityCore", {
		destroy: 0,
		getGridId: 0,
		getGridOption: 0,
		isDestroyed: 0,
		setGridOption: 0,
		updateGridOptions: 0,
		isModuleRegistered: 0
	}),
	...Z("GridState", {
		getState: 0,
		setState: 0
	}),
	...Z("SharedRowSelection", {
		setNodesSelected: 0,
		selectAll: 0,
		deselectAll: 0,
		selectAllFiltered: 0,
		deselectAllFiltered: 0,
		selectAllOnCurrentPage: 0,
		deselectAllOnCurrentPage: 0,
		getSelectedNodes: 0,
		getSelectedRows: 0
	}),
	...Z("RowApi", {
		redrawRows: 0,
		setRowNodeExpanded: 0,
		getRowNode: 0,
		addRenderedRowListener: 0,
		getRenderedNodes: 0,
		forEachNode: 0,
		getFirstDisplayedRowIndex: 0,
		getLastDisplayedRowIndex: 0,
		getDisplayedRowAtIndex: 0,
		getDisplayedRowCount: 0
	}),
	...Z("ScrollApi", {
		getVerticalPixelRange: 0,
		getHorizontalPixelRange: 0,
		ensureColumnVisible: 0,
		ensureIndexVisible: 0,
		ensureNodeVisible: 0
	}),
	...Z("KeyboardNavigation", {
		getFocusedCell: 0,
		clearFocusedCell: 0,
		setFocusedCell: 0,
		tabToNextCell: 0,
		tabToPreviousCell: 0,
		setFocusedHeader: 0
	}),
	...Z("EventApi", {
		addEventListener: 0,
		addGlobalListener: 0,
		removeEventListener: 0,
		removeGlobalListener: 0
	}),
	...Z("ValueCache", { expireValueCache: 0 }),
	...Z("CellApi", { getCellValue: 0 }),
	...Z("SharedMenu", {
		showColumnMenu: 0,
		hidePopupMenu: 0
	}),
	...Z("Sort", { onSortChanged: 0 }),
	...Z("PinnedRow", {
		getPinnedTopRowCount: 0,
		getPinnedBottomRowCount: 0,
		getPinnedTopRow: 0,
		getPinnedBottomRow: 0,
		forEachPinnedRow: 0
	}),
	...Z("Overlay", {
		showLoadingOverlay: 0,
		showNoRowsOverlay: 0,
		hideOverlay: 0
	}),
	...Z("RenderApi", {
		setGridAriaProperty: 0,
		refreshCells: 0,
		refreshHeader: 0,
		isAnimationFrameQueueEmpty: 0,
		flushAllAnimationFrames: 0,
		getSizesForCurrentTheme: 0,
		getCellRendererInstances: 0
	}),
	...Z("HighlightChanges", { flashCells: 0 }),
	...Z("RowDrag", {
		addRowDropZone: 0,
		removeRowDropZone: 0,
		getRowDropZoneParams: 0,
		getRowDropPositionIndicator: 0,
		setRowDropPositionIndicator: 0
	}),
	...Z("ColumnApi", {
		getColumnDefs: 0,
		getColumnDef: 0,
		getDisplayNameForColumn: 0,
		getColumn: 0,
		getColumns: 0,
		applyColumnState: 0,
		getColumnState: 0,
		resetColumnState: 0,
		isPinning: 0,
		isPinningLeft: 0,
		isPinningRight: 0,
		getDisplayedColAfter: 0,
		getDisplayedColBefore: 0,
		setColumnsVisible: 0,
		setColumnsPinned: 0,
		getAllGridColumns: 0,
		getDisplayedLeftColumns: 0,
		getDisplayedCenterColumns: 0,
		getDisplayedRightColumns: 0,
		getAllDisplayedColumns: 0,
		getAllDisplayedVirtualColumns: 0
	}),
	...Z("ColumnAutoSize", {
		sizeColumnsToFit: 0,
		autoSizeColumns: 0,
		autoSizeAllColumns: 0
	}),
	...Z("ColumnGroup", {
		setColumnGroupOpened: 0,
		getColumnGroup: 0,
		getProvidedColumnGroup: 0,
		getDisplayNameForColumnGroup: 0,
		getColumnGroupState: 0,
		setColumnGroupState: 0,
		resetColumnGroupState: 0,
		getLeftDisplayedColumnGroups: 0,
		getCenterDisplayedColumnGroups: 0,
		getRightDisplayedColumnGroups: 0,
		getAllDisplayedColumnGroups: 0
	}),
	...Z("ColumnMove", {
		moveColumnByIndex: 0,
		moveColumns: 0
	}),
	...Z("ColumnResize", { setColumnWidths: 0 }),
	...Z("ColumnHover", { isColumnHovered: 0 }),
	...Z("EditCore", {
		getCellEditorInstances: 0,
		getEditingCells: 0,
		getEditRowValues: 0,
		stopEditing: 0,
		startEditingCell: 0,
		isEditing: 0,
		validateEdit: 0
	}),
	...Z("BatchEdit", {
		startBatchEdit: 0,
		cancelBatchEdit: 0,
		commitBatchEdit: 0,
		isBatchEditing: 0
	}),
	...Z("UndoRedoEdit", {
		undoCellEditing: 0,
		redoCellEditing: 0,
		getCurrentUndoSize: 0,
		getCurrentRedoSize: 0
	}),
	...Z("FilterCore", {
		isAnyFilterPresent: 0,
		onFilterChanged: 0
	}),
	...Z("ColumnFilter", {
		isColumnFilterPresent: 0,
		getColumnFilterInstance: 0,
		destroyFilter: 0,
		setFilterModel: 0,
		getFilterModel: 0,
		getColumnFilterModel: 0,
		setColumnFilterModel: 0,
		showColumnFilter: 0,
		hideColumnFilter: 0,
		getColumnFilterHandler: 0,
		doFilterAction: 0
	}),
	...Z("QuickFilter", {
		isQuickFilterPresent: 0,
		getQuickFilter: 0,
		resetQuickFilter: 0
	}),
	...Z("Find", {
		findGetActiveMatch: 0,
		findGetTotalMatches: 0,
		findGoTo: 0,
		findNext: 0,
		findPrevious: 0,
		findGetNumMatches: 0,
		findGetParts: 0,
		findClearActive: 0,
		findRefresh: 0
	}),
	...Z("Pagination", {
		paginationIsLastPageFound: 0,
		paginationGetPageSize: 0,
		paginationGetCurrentPage: 0,
		paginationGetTotalPages: 0,
		paginationGetRowCount: 0,
		paginationGoToNextPage: 0,
		paginationGoToPreviousPage: 0,
		paginationGoToFirstPage: 0,
		paginationGoToLastPage: 0,
		paginationGoToPage: 0
	}),
	...Z("CsrmSsrmSharedApi", {
		expandAll: 0,
		collapseAll: 0,
		resetRowGroupExpansion: 0
	}),
	...Z("SsrmInfiniteSharedApi", {
		setRowCount: 0,
		getCacheBlockState: 0,
		isLastRowIndexKnown: 0
	}),
	...Z("ClientSideRowModelApi", {
		onGroupExpandedOrCollapsed: 0,
		refreshClientSideRowModel: 0,
		isRowDataEmpty: 0,
		forEachLeafNode: 0,
		forEachNodeAfterFilter: 0,
		forEachNodeAfterFilterAndSort: 0,
		applyTransaction: 0,
		applyTransactionAsync: 0,
		flushAsyncTransactions: 0,
		getBestCostNodeSelection: 0,
		onRowHeightChanged: 0,
		resetRowHeights: 0
	}),
	...Z("CsvExport", {
		getDataAsCsv: 0,
		exportDataAsCsv: 0
	}),
	...Z("InfiniteRowModel", {
		refreshInfiniteCache: 0,
		purgeInfiniteCache: 0,
		getInfiniteRowCount: 0
	}),
	...Z("AdvancedFilter", {
		getAdvancedFilterModel: 0,
		setAdvancedFilterModel: 0,
		showAdvancedFilterBuilder: 0,
		hideAdvancedFilterBuilder: 0
	}),
	...Z("IntegratedCharts", {
		getChartModels: 0,
		getChartRef: 0,
		getChartImageDataURL: 0,
		downloadChart: 0,
		openChartToolPanel: 0,
		closeChartToolPanel: 0,
		createRangeChart: 0,
		createPivotChart: 0,
		createCrossFilterChart: 0,
		updateChart: 0,
		restoreChart: 0
	}),
	...Z("Clipboard", {
		copyToClipboard: 0,
		cutToClipboard: 0,
		copySelectedRowsToClipboard: 0,
		copySelectedRangeToClipboard: 0,
		copySelectedRangeDown: 0,
		pasteFromClipboard: 0
	}),
	...Z("ExcelExport", {
		getDataAsExcel: 0,
		exportDataAsExcel: 0,
		getSheetDataForExcel: 0,
		getMultipleSheetsAsExcel: 0,
		exportMultipleSheetsAsExcel: 0
	}),
	...Z("SharedMasterDetail", {
		addDetailGridInfo: 0,
		removeDetailGridInfo: 0,
		getDetailGridInfo: 0,
		forEachDetailGridInfo: 0
	}),
	...Z("ContextMenu", { showContextMenu: 0 }),
	...Z("ColumnMenu", {
		showColumnChooser: 0,
		hideColumnChooser: 0
	}),
	...Z("CellSelection", {
		getCellRanges: 0,
		addCellRange: 0,
		clearRangeSelection: 0,
		clearCellSelection: 0
	}),
	...Z("SharedRowGrouping", {
		setRowGroupColumns: 0,
		removeRowGroupColumns: 0,
		addRowGroupColumns: 0,
		getRowGroupColumns: 0,
		moveRowGroupColumn: 0
	}),
	...Z("SharedAggregation", {
		addAggFuncs: 0,
		clearAggFuncs: 0,
		setColumnAggFunc: 0
	}),
	...Z("SharedPivot", {
		isPivotMode: 0,
		getPivotResultColumn: 0,
		setValueColumns: 0,
		getValueColumns: 0,
		removeValueColumns: 0,
		addValueColumns: 0,
		setPivotColumns: 0,
		removePivotColumns: 0,
		addPivotColumns: 0,
		getPivotColumns: 0,
		setPivotResultColumns: 0,
		getPivotResultColumns: 0
	}),
	...Z("ServerSideRowModelApi", {
		getServerSideSelectionState: 0,
		setServerSideSelectionState: 0,
		applyServerSideTransaction: 0,
		applyServerSideTransactionAsync: 0,
		applyServerSideRowData: 0,
		retryServerSideLoads: 0,
		flushServerSideAsyncTransactions: 0,
		refreshServerSide: 0,
		getServerSideGroupLevelState: 0,
		onRowHeightChanged: 0,
		resetRowHeights: 0
	}),
	...Z("SideBar", {
		isSideBarVisible: 0,
		setSideBarVisible: 0,
		setSideBarPosition: 0,
		openToolPanel: 0,
		closeToolPanel: 0,
		getOpenedToolPanel: 0,
		refreshToolPanel: 0,
		isToolPanelShowing: 0,
		getToolPanelInstance: 0,
		getSideBar: 0
	}),
	...Z("StatusBar", { getStatusPanel: 0 }),
	...Z("AiToolkit", { getStructuredSchema: 0 })
}, ec = {
	isDestroyed: () => !0,
	destroy() {},
	preConstruct() {},
	postConstruct() {},
	preWireBeans() {},
	wireBeans() {}
}, tc = (e, t) => e.eventSvc.dispatchEvent(t), nc = class {};
Reflect.defineProperty(nc, "name", { value: "GridApi" });
var rc = class extends H {
	constructor() {
		super(), this.beanName = "apiFunctionSvc", this.api = new nc(), this.fns = {
			...ec,
			dispatchEvent: tc
		}, this.preDestroyLink = "";
		let { api: e } = this;
		for (let t of Object.keys($s)) e[t] = this.makeApi(t)[t];
	}
	postConstruct() {
		this.preDestroyLink = this.beans.frameworkOverrides.getDocLink("grid-lifecycle/#grid-pre-destroyed");
	}
	addFunction(e, t) {
		let { fns: n, beans: r } = this;
		n !== ec && (n[e] = r?.validation?.validateApiFunction(e, t) ?? t);
	}
	makeApi(e) {
		return { [e]: (...t) => {
			let { beans: n, fns: { [e]: r } } = this;
			return r ? r(n, ...t) : this.apiNotFound(e);
		} };
	}
	apiNotFound(e) {
		let { beans: t, gos: n, preDestroyLink: r } = this;
		if (!t) W(26, {
			fnName: e,
			preDestroyLink: r
		});
		else {
			let t = $s[e];
			n.assertModuleRegistered(t, `api.${e}`) && W(27, {
				fnName: e,
				module: t
			});
		}
	}
	destroy() {
		super.destroy(), this.fns = ec, this.beans = null;
	}
};
function ic(e) {
	return e.context.getId();
}
function ac(e) {
	e.gridDestroySvc.destroy();
}
function oc(e) {
	return e.gridDestroySvc.destroyCalled;
}
function sc(e, t) {
	return e.gos.get(t);
}
function cc(e, t, n) {
	lc(e, { [t]: n });
}
function lc(e, t) {
	e.gos.updateGridOptions({ options: t });
}
function uc(e, t) {
	let n = t.replace(/Module$/, "");
	return e.gos.isModuleRegistered(n);
}
function dc(e, t, n) {
	let r = fc(e, t, n);
	if (r) {
		let { className: e } = r;
		if (typeof e == "string" && e.includes("ag-icon") || typeof e == "object" && e["ag-icon"]) return r;
	}
	let i = Ks({ tag: "span" });
	return i.appendChild(r), i;
}
function fc(e, t, n) {
	let r = null;
	e === "smallDown" ? W(262) : e === "smallLeft" ? W(263) : e === "smallRight" && W(264);
	let i = n?.getColDef().icons;
	if (i && (r = i[e]), t.gos && !r) {
		let n = t.gos.get("icons");
		n && (r = n[e]);
	}
	if (r) {
		let t;
		if (typeof r == "function") t = r();
		else if (typeof r == "string") t = r;
		else {
			W(38, { iconName: e });
			return;
		}
		if (typeof t == "string") return it(t);
		if (lt(t)) return t;
		W(133, { iconName: e });
		return;
	} else {
		let n = t.registry.getIcon(e);
		return n || t.validation?.validateIcon(e), Ks({
			tag: "span",
			cls: `ag-icon ag-icon-${n ?? e}`,
			role: "presentation",
			attrs: { unselectable: "on" }
		});
	}
}
var pc = ".ag-dnd-ghost{align-items:center;background-color:var(--ag-drag-and-drop-image-background-color);border:var(--ag-drag-and-drop-image-border);border-radius:var(--ag-border-radius);box-shadow:var(--ag-drag-and-drop-image-shadow);color:var(--ag-text-color);cursor:move;display:flex;font-weight:500;gap:var(--ag-cell-widget-spacing);height:var(--ag-header-height);overflow:hidden;padding-left:var(--ag-cell-horizontal-padding);padding-right:var(--ag-cell-horizontal-padding);text-overflow:ellipsis;transform:translateY(calc(var(--ag-spacing)*2));white-space:nowrap}.ag-dnd-ghost-not-allowed{border:var(--ag-drag-and-drop-image-not-allowed-border)}", mc = {
	tag: "div",
	children: [{
		tag: "div",
		ref: "eGhost",
		cls: "ag-dnd-ghost ag-unselectable",
		children: [{
			tag: "span",
			ref: "eIcon",
			cls: "ag-dnd-ghost-icon ag-shake-left-to-right"
		}, {
			tag: "div",
			ref: "eLabel",
			cls: "ag-dnd-ghost-label"
		}]
	}]
}, hc = class extends Qi {
	constructor() {
		super(), this.dragSource = null, this.eIcon = null, this.eLabel = null, this.eGhost = null, this.registerCSS(pc);
	}
	postConstruct() {
		let e = (e) => dc(e, this.beans, null);
		this.dropIconMap = {
			pinned: e("columnMovePin"),
			hide: e("columnMoveHide"),
			move: e("columnMoveMove"),
			left: e("columnMoveLeft"),
			right: e("columnMoveRight"),
			group: e("columnMoveGroup"),
			aggregate: e("columnMoveValue"),
			pivot: e("columnMovePivot"),
			notAllowed: e("dropNotAllowed")
		};
	}
	init(e) {
		this.dragSource = e.dragSource, this.setTemplate(mc), this.beans.environment.applyThemeClasses(this.eGhost);
	}
	destroy() {
		this.dragSource = null, super.destroy();
	}
	setIcon(e, t) {
		let { eGhost: n, eIcon: r, dragSource: i, dropIconMap: a, gos: o } = this;
		et(r);
		let s = null;
		e ||= i?.getDefaultIconName ? i.getDefaultIconName() : "notAllowed", s = a[e], n.classList.toggle("ag-dnd-ghost-not-allowed", e === "notAllowed"), r.classList.toggle("ag-shake-left-to-right", t), !(s === a.hide && o.get("suppressDragLeaveHidesColumns")) && s && r.appendChild(s);
	}
	setLabel(e) {
		this.eLabel.textContent = e;
	}
}, gc = (e, t) => {
	if (t != null && e?.setPointerCapture) try {
		return e.setPointerCapture(t), e.hasPointerCapture(t);
	} catch {}
	return !1;
}, _c = (e, t) => {
	if (typeof PointerEvent > "u" || !(t instanceof PointerEvent)) return null;
	let n = t.pointerId;
	if (!gc(e, n)) return null;
	let r = {
		eElement: e,
		pointerId: n,
		onLost(e) {
			bc(r, e);
		}
	};
	return e.addEventListener("lostpointercapture", r.onLost), r;
}, vc = (e) => {
	if (!e) return;
	yc(e);
	let { eElement: t, pointerId: n } = e;
	if (t) {
		try {
			t.releasePointerCapture(n);
		} catch {}
		e.eElement = null;
	}
}, yc = (e) => {
	let { eElement: t, onLost: n } = e;
	t && n && (t.removeEventListener("lostpointercapture", n), e.onLost = null);
}, bc = (e, t) => {
	yc(e);
	let { eElement: n, pointerId: r } = e;
	n && t.pointerId === r && gc(n, r);
}, xc, Sc, Cc = { passive: !0 }, wc = { passive: !1 }, Tc = (e) => {
	if (!Sc) Sc = /* @__PURE__ */ new WeakSet();
	else if (Sc.has(e)) return !1;
	return Sc.add(e), !0;
}, Ec = class extends Nt {
	constructor() {
		super(...arguments), this.beanName = "dragSvc", this.dragging = !1, this.drag = null, this.dragSources = [];
	}
	get startTarget() {
		return this.drag?.start.target ?? null;
	}
	isPointer() {
		return !!xc?.has(pe(this.beans));
	}
	hasPointerCapture() {
		let e = this.drag?.pointerCapture;
		return !!(e && this.beans.eRootDiv.hasPointerCapture?.(e.pointerId));
	}
	destroy() {
		this.drag && this.cancelDrag();
		let e = this.dragSources;
		for (let t of e) Dc(t);
		e.length = 0, super.destroy();
	}
	removeDragSource(e) {
		let t = this.dragSources;
		for (let n = 0, r = t.length; n < r; ++n) {
			let r = t[n];
			if (r.params === e) {
				t.splice(n, 1), Dc(r);
				break;
			}
		}
	}
	addDragSource(e) {
		if (!this.isAlive()) return;
		let { eElement: t, includeTouch: n } = e, r = [], i;
		if (n) {
			let e = t.style;
			e && (i = e.touchAction, e.touchAction = "none");
		}
		let a = {
			handlers: r,
			params: e,
			oldTouchAction: i
		};
		this.dragSources.push(a), Ot(r, [
			t,
			"pointerdown",
			(t) => this.onPointerDown(e, t),
			wc
		], [
			t,
			"mousedown",
			(t) => this.onMouseDown(e, t)
		]);
		let o = this.gos.get("suppressTouch");
		n && !o && Ot(r, [
			t,
			"touchstart",
			(t) => this.onTouchStart(e, t),
			wc
		]);
	}
	cancelDrag(e) {
		let t = this.drag;
		e ??= t?.eElement, e && this.eventSvc.dispatchEvent({
			type: "dragCancelled",
			target: e
		}), t?.params.onDragCancel?.(), this.destroyDrag();
	}
	shouldPreventMouseEvent(e) {
		let t = e.type;
		return (t === "mousemove" || t === "pointermove") && e.cancelable && Et(this.beans, e) && !We(kc(e));
	}
	initDrag(e, ...t) {
		this.drag = e;
		let n = this.beans, r = (e) => this.onScroll(e), i = (e) => this.onKeyDown(e), a = pe(n), o = B(n);
		Ot(e.handlers, [
			a,
			"contextmenu",
			At
		], [
			a,
			"keydown",
			i
		], [
			o,
			"scroll",
			r,
			{ capture: !0 }
		], [
			o.defaultView || window,
			"scroll",
			r
		], ...t);
	}
	destroyDrag() {
		this.dragging = !1;
		let e = this.drag;
		if (e) {
			let t = e.rootEl;
			xc?.get(t) === e && xc.delete(t), this.drag = null, vc(e.pointerCapture), kt(e.handlers);
		}
	}
	onPointerDown(e, t) {
		if (this.isPointer()) return;
		let n = this.beans;
		if (Sc?.has(t)) return;
		let r = t.pointerType;
		if (r === "touch" && (n.gos.get("suppressTouch") || !e.includeTouch || (e.stopPropagationForTouch && t.stopPropagation(), We(kc(t)))) || !t.isPrimary || r === "mouse" && t.button !== 0) return;
		this.destroyDrag();
		let i = pe(n), a = e.eElement, o = t.pointerId, s = new Oc(i, e, t, o);
		xc ??= /* @__PURE__ */ new WeakMap(), xc.set(i, s);
		let c = (e) => {
			e.pointerId === o && this.onMouseOrPointerMove(e);
		}, l = (e) => {
			e.pointerId === o && this.onMouseOrPointerUp(e);
		}, u = (e) => {
			e.pointerId === o && Tc(e) && this.cancelDrag();
		}, d = (e) => this.draggingPreventDefault(e);
		this.initDrag(s, [
			i,
			"pointerup",
			l
		], [
			i,
			"pointercancel",
			u
		], [
			i,
			"pointermove",
			c,
			wc
		], [
			i,
			"touchmove",
			d,
			wc
		], [
			a,
			"mousemove",
			d,
			wc
		]), e.dragStartPixels === 0 ? this.onMouseOrPointerMove(t) : Tc(t);
	}
	onTouchStart(e, t) {
		if (this.gos.get("suppressTouch") || !e.includeTouch || !Tc(t) || We(kc(t))) return;
		if (e.stopPropagationForTouch && t.stopPropagation(), this.isPointer()) {
			this.dragging && At(t);
			return;
		}
		this.destroyDrag();
		let n = this.beans, r = new Oc(pe(n), e, t.touches[0]), i = (e) => this.onTouchMove(e), a = (e) => this.onTouchUp(e), o = (e) => this.onTouchCancel(e), s = (e) => this.draggingPreventDefault(e), c = pe(n), l = t.target ?? e.eElement;
		this.initDrag(r, [
			l,
			"touchmove",
			i,
			Cc
		], [
			l,
			"touchend",
			a,
			Cc
		], [
			l,
			"touchcancel",
			o,
			Cc
		], [
			c,
			"touchmove",
			s,
			wc
		], [
			c,
			"touchend",
			a,
			wc
		], [
			c,
			"touchcancel",
			o,
			wc
		]), e.dragStartPixels === 0 && this.onMove(r.start);
	}
	draggingPreventDefault(e) {
		this.dragging && At(e);
	}
	onMouseDown(e, t) {
		if (t.button !== 0 || Sc?.has(t) || this.isPointer()) return;
		let n = this.beans;
		this.destroyDrag();
		let r = new Oc(pe(n), e, t), i = (e) => this.onMouseOrPointerMove(e), a = (e) => this.onMouseOrPointerUp(e), o = pe(n);
		this.initDrag(r, [
			o,
			"mousemove",
			i
		], [
			o,
			"mouseup",
			a
		]), e.dragStartPixels === 0 ? this.onMouseOrPointerMove(t) : Tc(t);
	}
	onScroll(e) {
		if (!Tc(e)) return;
		let t = this.drag, n = t?.lastDrag;
		n && this.dragging && t.params?.onDragging?.(n);
	}
	onMouseOrPointerMove(e) {
		Tc(e) && (oa() && B(this.beans).getSelection()?.removeAllRanges(), this.shouldPreventMouseEvent(e) && At(e), this.onMove(e));
	}
	onTouchCancel(e) {
		let t = this.drag;
		!t || !Tc(e) || Tt(t.start, e.changedTouches) && this.cancelDrag();
	}
	onTouchMove(e) {
		let t = this.drag;
		if (!t || !Tc(e)) return;
		let n = Tt(t.start, e.touches);
		n && (this.onMove(n), this.draggingPreventDefault(e));
	}
	onMove(e) {
		let t = this.drag;
		if (!t) return;
		t.lastDrag = e;
		let n = t.params;
		if (!this.dragging) {
			let r = t.start;
			if (wt(e, r, n.dragStartPixels ?? 4) || (this.dragging = !0, n.capturePointer && (t.pointerCapture = _c(this.beans.eRootDiv, e)), this.eventSvc.dispatchEvent({
				type: "dragStarted",
				target: n.eElement
			}), n.onDragStart?.(r), this.drag !== t) || (n.onDragging?.(r), this.drag !== t)) return;
		}
		n.onDragging?.(e);
	}
	onTouchUp(e) {
		let t = this.drag;
		t && Tc(e) && this.onUp(Tt(t.start, e.changedTouches));
	}
	onMouseOrPointerUp(e) {
		Tc(e) && this.onUp(e);
	}
	onUp(e) {
		let t = this.drag;
		t && (e ||= t.lastDrag, e && this.dragging && (this.dragging = !1, t.params.onDragStop?.(e), this.eventSvc.dispatchEvent({
			type: "dragStopped",
			target: t.params.eElement
		})), this.destroyDrag());
	}
	onKeyDown(e) {
		e.key === Y.ESCAPE && this.cancelDrag();
	}
}, Dc = (e) => {
	kt(e.handlers);
	let t = e.oldTouchAction;
	if (t != null) {
		let n = e.params.eElement.style;
		n && (n.touchAction = t);
	}
}, Oc = class {
	constructor(e, t, n, r = null) {
		this.rootEl = e, this.params = t, this.start = n, this.pointerId = r, this.handlers = [], this.lastDrag = null, this.pointerCapture = null, this.eElement = t.eElement;
	}
}, kc = (e) => {
	let t = e.target;
	return t instanceof Element ? t : null;
}, Ac = class extends Ec {
	shouldPreventMouseEvent(e) {
		return this.gos.get("enableCellTextSelection") && super.shouldPreventMouseEvent(e);
	}
}, jc = class extends H {
	constructor() {
		super(...arguments), this.beanName = "horizontalResizeSvc";
	}
	addResizeBar(e) {
		let t = {
			dragStartPixels: e.dragStartPixels || 0,
			eElement: e.eResizeBar,
			onDragStart: this.onDragStart.bind(this, e),
			onDragStop: this.onDragStop.bind(this, e),
			onDragging: this.onDragging.bind(this, e),
			onDragCancel: this.onDragStop.bind(this, e),
			includeTouch: !0,
			stopPropagationForTouch: !0
		}, { dragSvc: n } = this.beans;
		return n.addDragSource(t), () => n.removeDragSource(t);
	}
	onDragStart(e, t) {
		this.dragStartX = t.clientX, this.setResizeIcons();
		let n = t instanceof MouseEvent && t.shiftKey === !0;
		e.onResizeStart(n);
	}
	setResizeIcons() {
		let e = this.beans.ctrlsSvc.get("gridCtrl");
		e.setResizeCursor(1), e.disableUserSelect(!0);
	}
	onDragStop(e) {
		e.onResizeEnd(this.resizeAmount), this.resetIcons();
	}
	resetIcons() {
		let e = this.beans.ctrlsSvc.get("gridCtrl");
		e.setResizeCursor(!1), e.disableUserSelect(!1);
	}
	onDragging(e, t) {
		this.resizeAmount = t.clientX - this.dragStartX, e.onResizing(this.resizeAmount);
	}
}, Mc = (e) => {
	let t = e.childrenAfterGroup;
	for (; t?.length;) {
		let e = t[0];
		if (e.sourceRowIndex >= 0) return e;
		t = e.childrenAfterGroup;
	}
};
function Nc(e, t) {
	return ds(e, t.target)?.getFocusedCellPosition() ?? null;
}
var Pc = {
	moduleName: "Drag",
	version: U,
	beans: [Ac]
}, Fc = {
	moduleName: "SharedDragAndDrop",
	version: U,
	beans: [Ki],
	dependsOn: [Pc],
	userComponents: { agDragAndDropImage: hc },
	icons: {
		columnMovePin: "pin",
		columnMoveHide: "eye-slash",
		columnMoveMove: "arrows",
		columnMoveLeft: "left",
		columnMoveRight: "right",
		columnMoveGroup: "group",
		columnMoveValue: "aggregation",
		columnMovePivot: "pivot",
		dropNotAllowed: "not-allowed",
		rowDrag: "grip"
	}
}, Ic = {
	moduleName: "HorizontalResize",
	version: U,
	beans: [jc],
	dependsOn: [Pc]
}, Lc = ":where(.ag-ltr) :where(.ag-column-moving){.ag-cell,.ag-header-cell,.ag-spanned-cell-wrapper{transition:left .2s}.ag-header-group-cell{transition:left .2s,width .2s}}:where(.ag-rtl) :where(.ag-column-moving){.ag-cell,.ag-header-cell,.ag-spanned-cell-wrapper{transition:right .2s}.ag-header-group-cell{transition:right .2s,width .2s}}", Rc = class extends H {
	constructor() {
		super(...arguments), this.beanName = "colAnimation", this.executeNextFuncs = [], this.executeLaterFuncs = [], this.active = !1, this.activeNext = !1, this.suppressAnimation = !1, this.animationThreadCount = 0;
	}
	postConstruct() {
		this.beans.ctrlsSvc.whenReady(this, (e) => this.gridBodyCtrl = e.gridBodyCtrl);
	}
	isActive() {
		return this.active && !this.suppressAnimation;
	}
	setSuppressAnimation(e) {
		this.suppressAnimation = e;
	}
	start() {
		if (this.active) return;
		let { gos: e } = this;
		e.get("suppressColumnMoveAnimation") || e.get("enableRtl") || (this.ensureAnimationCssClassPresent(), this.active = !0, this.activeNext = !0);
	}
	finish() {
		this.active && this.flush(() => this.activeNext = !1, () => this.active = !1);
	}
	executeNextVMTurn(e) {
		this.activeNext ? this.executeNextFuncs.push(e) : e();
	}
	executeLaterVMTurn(e) {
		this.active ? this.executeLaterFuncs.push(e) : e();
	}
	ensureAnimationCssClassPresent() {
		this.animationThreadCount++;
		let e = this.animationThreadCount, { gridBodyCtrl: t } = this;
		t.setColumnMovingCss(!0), this.executeLaterFuncs.push(() => {
			this.animationThreadCount === e && t.setColumnMovingCss(!1);
		});
	}
	flush(e, t) {
		let { executeNextFuncs: n, executeLaterFuncs: r } = this;
		if (n.length === 0 && r.length === 0) {
			e(), t();
			return;
		}
		let i = (e) => {
			for (; e.length;) {
				let t = e.pop();
				t && t();
			}
		};
		this.beans.frameworkOverrides.wrapIncoming(() => {
			window.setTimeout(() => {
				e(), i(n);
			}, 0), window.setTimeout(() => {
				t(), i(r);
			}, 200);
		});
	}
};
function zc(e, t, n) {
	e.colMoves?.moveColumnByIndex(t, n, "api");
}
function Bc(e, t, n) {
	e.colMoves?.moveColumns(t, n, "api");
}
var Vc = class extends H {
	constructor(e) {
		super(), this.pinned = e, this.columnsToAggregate = [], this.columnsToGroup = [], this.columnsToPivot = [];
	}
	onDragEnter(e) {
		if (this.clearColumnsList(), this.gos.get("functionsReadOnly")) return;
		let t = e.dragItem.columns;
		if (t) for (let e of t) e.isPrimary() && (e.isAnyFunctionActive() || (e.isAllowValue() ? this.columnsToAggregate.push(e) : e.isAllowRowGroup() ? this.columnsToGroup.push(e) : e.isAllowPivot() && this.columnsToPivot.push(e)));
	}
	getIconName() {
		return this.columnsToAggregate.length + this.columnsToGroup.length + this.columnsToPivot.length > 0 ? this.pinned ? "pinned" : "move" : null;
	}
	onDragLeave(e) {
		this.clearColumnsList();
	}
	clearColumnsList() {
		this.columnsToAggregate.length = 0, this.columnsToGroup.length = 0, this.columnsToPivot.length = 0;
	}
	onDragging(e) {}
	onDragStop(e) {
		let { valueColsSvc: t, rowGroupColsSvc: n, pivotColsSvc: r } = this.beans;
		this.columnsToAggregate.length > 0 && t?.addColumns(this.columnsToAggregate, "toolPanelDragAndDrop"), this.columnsToGroup.length > 0 && n?.addColumns(this.columnsToGroup, "toolPanelDragAndDrop"), this.columnsToPivot.length > 0 && r?.addColumns(this.columnsToPivot, "toolPanelDragAndDrop");
	}
	onDragCancel() {
		this.clearColumnsList();
	}
};
function Hc(e, t) {
	!t || t.length <= 1 || t.filter((t) => e.indexOf(t) < 0).length > 0 || t.sort((t, n) => e.indexOf(t) - e.indexOf(n));
}
function Uc(e) {
	let t = [...e];
	for (let n of e) {
		let e = null, r = n.getParent();
		for (; r != null && r.getDisplayedLeafColumns().length === 1;) e = r, r = r.getParent();
		if (e != null) {
			let n = e.getColGroupDef()?.marryChildren ? e.getProvidedColumnGroup().getLeafColumns() : e.getLeafColumns();
			for (let e of n) t.includes(e) || t.push(e);
		}
	}
	return t;
}
function Wc(e, t, n, r) {
	let i = r.allCols, a = null, o = null;
	for (let r = 0; r < e.length; r++) {
		let s = e[r], c = n.getProposedColumnOrder(t, s);
		if (!n.doesOrderPassRules(c)) continue;
		let l = c.filter((e) => i.includes(e));
		if (o === null) o = l;
		else if (!N(l, o)) break;
		let u = Jc(c);
		(a === null || u < a.fragCount) && (a = {
			move: s,
			fragCount: u
		});
	}
	return a;
}
function Gc(e) {
	let { isFromHeader: t, fromLeft: n, xPosition: r, fromEnter: i, fakeEvent: a, pinned: o, gos: s, colModel: c, colMoves: l, visibleCols: u } = e, { allMovingColumns: d } = e;
	t && (d = Uc(d));
	let f = d.slice();
	Hc(c.getCols(), f);
	let p = Xc({
		movingCols: f,
		draggingRight: n,
		xPosition: r,
		pinned: o,
		gos: s,
		colModel: c,
		visibleCols: u
	}), m = qc(f, c);
	if (p.length === 0) return;
	let h = p[0];
	if (m !== null && (t || !i) && !a && (!n && h >= m || n && h <= m)) return;
	let g = Wc(p, f, l, u);
	if (!g) return;
	let _ = g.move;
	if (!(_ > c.getCols().length - f.length)) return {
		columns: f,
		toIndex: _
	};
}
function Kc(e) {
	let { columns: t, toIndex: n } = Gc(e) || {}, { finished: r, colMoves: i } = e;
	return !t || n == null ? null : (i.moveColumns(t, n, "uiColumnMoved", r), r ? null : {
		columns: t,
		toIndex: n
	});
}
function qc(e, t) {
	let n = t.getCols(), r = e.map((e) => n.indexOf(e)).sort((e, t) => e - t), i = r[0];
	return M(r) - i === r.length - 1 ? i : null;
}
function Jc(e) {
	function t(e) {
		let t = [], n = e.getOriginalParent();
		for (; n != null;) t.push(n), n = n.getOriginalParent();
		return t;
	}
	let n = 0;
	for (let r = 0; r < e.length - 1; r++) {
		let i = t(e[r]), a = t(e[r + 1]);
		[i, a] = i.length > a.length ? [i, a] : [a, i];
		for (let e of i) a.indexOf(e) === -1 && n++;
	}
	return n;
}
function Yc(e, t) {
	switch (t) {
		case "left": return e.leftCols;
		case "right": return e.rightCols;
		default: return e.centerCols;
	}
}
function Xc(e) {
	let { movingCols: t, draggingRight: n, xPosition: r, pinned: i, gos: a, colModel: o, visibleCols: s } = e;
	if (a.get("suppressMovableColumns") || t.some((e) => e.getColDef().suppressMovable)) return [];
	let c = Yc(s, i), l = o.getCols(), u = c.filter((e) => t.includes(e)), d = c.filter((e) => !t.includes(e)), f = l.filter((e) => !t.includes(e)), p = 0, m = r;
	if (n) {
		let e = 0;
		for (let t of u) e += t.getActualWidth();
		m -= e;
	}
	if (m > 0) {
		for (let e = 0; e < d.length; e++) {
			let t = d[e];
			if (m -= t.getActualWidth(), m < 0) break;
			p++;
		}
		n && p++;
	}
	let h;
	if (p > 0) {
		let e = d[p - 1];
		h = f.indexOf(e) + 1;
	} else h = f.indexOf(d[0]), h === -1 && (h = 0);
	let g = [h], _ = (e, t) => e - t;
	if (n) {
		let e = h + 1, t = l.length - 1;
		for (; e <= t;) g.push(e), e++;
		g.sort(_);
	} else {
		let e = h, t = l.length - 1, n = l[e];
		for (; e <= t && c.indexOf(n) < 0;) e++, g.push(e), n = l[e];
		for (e = h - 1; e >= 0;) g.push(e), e--;
		g.sort(_).reverse();
	}
	return g;
}
function Zc(e) {
	let { pinned: t, fromKeyboard: n, gos: r, ctrlsSvc: i, useHeaderRow: a, skipScrollPadding: o } = e, s = i.getHeaderRowContainerCtrl(t)?.eViewport, { x: c } = e;
	return s ? (n && (c -= s.getBoundingClientRect().left), r.get("enableRtl") && (a && (s = s.querySelector(".ag-header-row")), c = s.clientWidth - c), t == null && !o && (c += i.get("center").getCenterViewportScrollLeft()), c) : 0;
}
function Qc(e, t) {
	for (let n of e) n.moving = t, n.dispatchColEvent("movingChanged", "uiColumnMoved");
}
var $c = 7, el = 100, tl = el / 2, nl = 5, rl = 100, il = class extends H {
	constructor(e) {
		super(), this.pinned = e, this.needToMoveLeft = !1, this.needToMoveRight = !1, this.lastMovedInfo = null, this.isCenterContainer = !I(e);
	}
	postConstruct() {
		this.beans.ctrlsSvc.whenReady(this, (e) => {
			this.gridBodyCon = e.gridBodyCtrl;
		});
	}
	getIconName() {
		let { pinned: e, lastDraggingEvent: t } = this, { dragItem: n } = t || {}, r = n?.columns ?? [];
		for (let t of r) {
			let r = t.getPinned();
			if (t.getColDef().lockPinned) {
				if (r == e) return "move";
				continue;
			}
			let i = n?.containerType;
			if (i === e || !e) return "move";
			if (e && (!r || i !== e)) return "pinned";
		}
		return "notAllowed";
	}
	onDragEnter(e) {
		let t = e.dragItem, n = t.columns;
		if (e.dragSource.type === 0) this.setColumnsVisible(n, !0, "uiColumnDragged");
		else {
			let e = t.visibleState, r = (n || []).filter((t) => e[t.getId()] && !t.isVisible());
			this.setColumnsVisible(r, !0, "uiColumnDragged");
		}
		this.gos.get("suppressMoveWhenColumnDragging") || this.attemptToPinColumns(n, this.pinned), this.onDragging(e, !0, !0);
	}
	onDragging(e = this.lastDraggingEvent, t = !1, n = !1, r = !1) {
		let { gos: i, ctrlsSvc: a } = this.beans, o = i.get("suppressMoveWhenColumnDragging");
		if (r && !o) {
			this.finishColumnMoving();
			return;
		}
		if (this.lastDraggingEvent = e, !e || !r && L(e.hDirection)) return;
		let s = Zc({
			x: e.x,
			pinned: this.pinned,
			gos: i,
			ctrlsSvc: a
		});
		t || this.checkCenterForScrolling(s), o ? this.handleColumnDragWhileSuppressingMovement(e, t, n, s, r) : this.handleColumnDragWhileAllowingMovement(e, t, n, s, r);
	}
	onDragLeave() {
		this.ensureIntervalCleared(), this.clearHighlighted(), this.updateDragItemContainerType(), this.lastMovedInfo = null;
	}
	onDragStop() {
		this.onDragging(this.lastDraggingEvent, !1, !0, !0), this.ensureIntervalCleared(), this.lastMovedInfo = null;
	}
	onDragCancel() {
		this.clearHighlighted(), this.ensureIntervalCleared(), this.lastMovedInfo = null;
	}
	setColumnsVisible(e, t, n) {
		if (!e?.length) return;
		let r = e.filter((e) => !e.getColDef().lockVisible);
		r.length && this.beans.colModel.setColsVisible(r, t, n);
	}
	finishColumnMoving() {
		this.clearHighlighted();
		let e = this.lastMovedInfo;
		if (!e) return;
		let { columns: t, toIndex: n } = e;
		this.beans.colMoves.moveColumns(t, n, "uiColumnMoved", !0);
	}
	updateDragItemContainerType() {
		let { lastDraggingEvent: e } = this;
		if (this.gos.get("suppressMoveWhenColumnDragging") || !e) return;
		let t = e.dragItem;
		t && (t.containerType = this.pinned);
	}
	handleColumnDragWhileSuppressingMovement(e, t, n, r, i) {
		let a = this.getAllMovingColumns(e, !0);
		if (i) {
			let e = this.isAttemptingToPin(a);
			e && this.attemptToPinColumns(a, void 0, !0);
			let { fromLeft: r, xPosition: i } = this.getNormalisedXPositionInfo(a, e) || {};
			if (r == null || i == null) {
				this.finishColumnMoving();
				return;
			}
			this.moveColumnsAfterHighlight({
				allMovingColumns: a,
				xPosition: i,
				fromEnter: t,
				fakeEvent: n,
				fromLeft: r
			});
		} else {
			if (!this.beans.dragAndDrop.isDropZoneWithinThisGrid(e)) return;
			this.highlightHoveredColumn(a, r);
		}
	}
	handleColumnDragWhileAllowingMovement(e, t, n, r, i) {
		let a = this.getAllMovingColumns(e), o = this.normaliseDirection(e.hDirection) === "right", s = e.dragSource.type === 1, c = Kc({
			...this.getMoveColumnParams({
				allMovingColumns: a,
				isFromHeader: s,
				xPosition: r,
				fromLeft: o,
				fromEnter: t,
				fakeEvent: n
			}),
			finished: i
		});
		c && (this.lastMovedInfo = c);
	}
	getAllMovingColumns(e, t = !1) {
		let n = e.dragSource.getDragItem(), r = null;
		return t ? (r = n.columnsInSplit, r ||= n.columns) : r = n.columns, r ? r.filter((e) => e.getColDef().lockPinned ? e.getPinned() == this.pinned : !0) : [];
	}
	getMoveColumnParams(e) {
		let { allMovingColumns: t, isFromHeader: n, xPosition: r, fromLeft: i, fromEnter: a, fakeEvent: o } = e, { gos: s, colModel: c, colMoves: l, visibleCols: u } = this.beans;
		return {
			allMovingColumns: t,
			isFromHeader: n,
			fromLeft: i,
			xPosition: r,
			pinned: this.pinned,
			fromEnter: a,
			fakeEvent: o,
			gos: s,
			colModel: c,
			colMoves: l,
			visibleCols: u
		};
	}
	highlightHoveredColumn(e, t) {
		let { gos: n, colModel: r } = this.beans, i = n.get("enableRtl"), a = r.getCols().filter((e) => e.isVisible() && e.getPinned() === this.pinned), o = null, s = null, c = null;
		for (let e of a) {
			if (s = e.getActualWidth(), o = this.getNormalisedColumnLeft(e, 0, i), o != null) {
				let n = o + s;
				if (o <= t && n >= t) {
					c = e;
					break;
				}
			}
			o = null, s = null;
		}
		if (c) e.indexOf(c) !== -1 && (c = null);
		else {
			for (let e = a.length - 1; e >= 0; e--) {
				let t = a[e], n = a[e].getParent();
				if (!n) {
					c = t;
					break;
				}
				let r = n?.getDisplayedLeafColumns();
				if (r.length) {
					c = M(r);
					break;
				}
			}
			if (!c) return;
			o = this.getNormalisedColumnLeft(c, 0, i), s = c.getActualWidth();
		}
		if (c == null || o == null || s == null) {
			this.lastHighlightedColumn?.column !== c && this.clearHighlighted();
			return;
		}
		let l;
		if (t - o < s / 2) {
			let e = a.indexOf(c);
			e === 0 ? l = 0 : (l = 1, c = a[e - 1]);
		} else l = 1;
		(this.lastHighlightedColumn?.column !== c || this.lastHighlightedColumn?.position !== l) && this.clearHighlighted(), al(c, l), this.lastHighlightedColumn = {
			column: c,
			position: l
		};
	}
	getNormalisedXPositionInfo(e, t) {
		let { gos: n, visibleCols: r } = this.beans, i = n.get("enableRtl"), { firstMovingCol: a, column: o, position: s } = this.getColumnMoveAndTargetInfo(e, t, i);
		if (!a || !o || s == null) return;
		let c = r.allCols, l = c.indexOf(a), u = c.indexOf(o), d = s === 0, f = l < u || l === u && !d, p = 0;
		if (d ? f && --p : f || (p += 1), u + p === l) return;
		let m = c[u + p];
		if (m) return {
			fromLeft: f,
			xPosition: this.getNormalisedColumnLeft(m, 20, i)
		};
	}
	getColumnMoveAndTargetInfo(e, t, n) {
		let r = this.lastHighlightedColumn || {}, { firstMovingCol: i, lastMovingCol: a } = ol(e);
		if (!i || !a || r.column || !t) return {
			firstMovingCol: i,
			...r
		};
		let o = this.getPinDirection() === "left";
		return {
			firstMovingCol: i,
			position: o ? 1 : 0,
			column: o === n ? a : i
		};
	}
	normaliseDirection(e) {
		if (this.gos.get("enableRtl")) switch (e) {
			case "left": return "right";
			case "right": return "left";
		}
		return e;
	}
	getNormalisedColumnLeft(e, t, n) {
		let { gos: r, ctrlsSvc: i } = this.beans, a = e.getLeft();
		if (a == null) return null;
		let o = e.getActualWidth();
		return Zc({
			x: n ? a + o - t : a + t,
			pinned: e.getPinned(),
			useHeaderRow: n,
			skipScrollPadding: !0,
			gos: r,
			ctrlsSvc: i
		});
	}
	isAttemptingToPin(e) {
		let t = this.needToMoveLeft || this.needToMoveRight, n = this.failedMoveAttempts > $c;
		return t && n || e.some((e) => e.getPinned() !== this.pinned);
	}
	moveColumnsAfterHighlight(e) {
		let { allMovingColumns: t, xPosition: n, fromEnter: r, fakeEvent: i, fromLeft: a } = e, { columns: o, toIndex: s } = Gc(this.getMoveColumnParams({
			allMovingColumns: t,
			isFromHeader: !0,
			xPosition: n,
			fromLeft: a,
			fromEnter: r,
			fakeEvent: i
		})) || {};
		o && s != null && (this.lastMovedInfo = {
			columns: o,
			toIndex: s
		}), this.finishColumnMoving();
	}
	clearHighlighted() {
		let { lastHighlightedColumn: e } = this;
		e && (al(e.column, null), this.lastHighlightedColumn = null);
	}
	checkCenterForScrolling(e) {
		if (!this.isCenterContainer) return;
		let t = this.beans.ctrlsSvc.get("center"), n = t.getCenterViewportScrollLeft(), r = n + t.getCenterWidth(), i, a;
		this.gos.get("enableRtl") ? (i = e < n + tl, a = e > r - tl) : (a = e < n + tl, i = e > r - tl), this.needToMoveRight = i, this.needToMoveLeft = a, a || i ? this.ensureIntervalStarted() : this.ensureIntervalCleared();
	}
	ensureIntervalStarted() {
		this.movingIntervalId || (this.intervalCount = 0, this.failedMoveAttempts = 0, this.movingIntervalId = window.setInterval(this.moveInterval.bind(this), rl), this.beans.dragAndDrop.setDragImageCompIcon(this.needToMoveLeft ? "left" : "right", !0));
	}
	ensureIntervalCleared() {
		this.movingIntervalId && (window.clearInterval(this.movingIntervalId), this.movingIntervalId = null, this.failedMoveAttempts = 0, this.beans.dragAndDrop.setDragImageCompIcon(this.getIconName()));
	}
	moveInterval() {
		let e;
		this.intervalCount++, e = 10 + this.intervalCount * nl, e > el && (e = el);
		let t = null, n = this.gridBodyCon.scrollFeature;
		if (this.needToMoveLeft ? t = n.scrollHorizontally(-e) : this.needToMoveRight && (t = n.scrollHorizontally(e)), t !== 0) this.onDragging(this.lastDraggingEvent), this.failedMoveAttempts = 0;
		else {
			this.failedMoveAttempts++;
			let { pinnedCols: e, dragAndDrop: t, gos: n } = this.beans;
			if (this.failedMoveAttempts <= $c + 1 || !e) return;
			if (t.setDragImageCompIcon("pinned"), !n.get("suppressMoveWhenColumnDragging")) {
				let e = this.lastDraggingEvent?.dragItem.columns;
				this.attemptToPinColumns(e, void 0, !0);
			}
		}
	}
	getPinDirection() {
		if (this.needToMoveLeft || this.pinned === "left") return "left";
		if (this.needToMoveRight || this.pinned === "right") return "right";
	}
	attemptToPinColumns(e, t, n = !1) {
		let r = (e || []).filter((e) => !e.getColDef().lockPinned);
		if (!r.length) return 0;
		n && (t = this.getPinDirection());
		let { pinnedCols: i, dragAndDrop: a } = this.beans;
		return i?.setColsPinned(r, t, "uiColumnDragged"), n && a.nudge(), r.length;
	}
	destroy() {
		super.destroy(), this.lastDraggingEvent = null, this.clearHighlighted(), this.lastMovedInfo = null;
	}
};
function al(e, t) {
	e.highlighted !== t && (e.highlighted = t, e.dispatchColEvent("headerHighlightChanged", "uiColumnMoved"));
}
function ol(e) {
	let t = e.length, n, r;
	for (let i = 0; i < t; i++) {
		if (!n) {
			let t = e[i];
			t.getLeft() != null && (n = t);
		}
		if (!r) {
			let n = e[t - 1 - i];
			n.getLeft() != null && (r = n);
		}
		if (n && r) break;
	}
	return {
		firstMovingCol: n,
		lastMovingCol: r
	};
}
var sl = class extends H {
	constructor(e, t) {
		super(), this.pinned = e, this.eContainer = t;
	}
	postConstruct() {
		let { ctrlsSvc: e, dragAndDrop: t } = this.beans, n = this.pinned;
		e.whenReady(this, (e) => {
			let t, r = e.gridBodyCtrl.eBodyViewport;
			switch (n) {
				case "left":
					t = [
						[r, e.left.eContainer],
						[e.bottomLeft.eContainer],
						[e.topLeft.eContainer]
					];
					break;
				case "right":
					t = [
						[r, e.right.eContainer],
						[e.bottomRight.eContainer],
						[e.topRight.eContainer]
					];
					break;
				default:
					t = [
						[r, e.center.eViewport],
						[e.bottomCenter.eViewport],
						[e.topCenter.eViewport]
					];
					break;
			}
			this.eSecondaryContainers = t;
		}), this.moveColumnFeature = this.createManagedBean(new il(n)), this.bodyDropPivotTarget = this.createManagedBean(new Vc(n)), t.addDropTarget(this), this.addDestroyFunc(() => t.removeDropTarget(this));
	}
	isInterestedIn(e) {
		return e === 1 || e === 0 && this.gos.get("allowDragFromColumnsToolPanel");
	}
	getSecondaryContainers() {
		return this.eSecondaryContainers;
	}
	getContainer() {
		return this.eContainer;
	}
	getIconName() {
		return this.currentDropListener.getIconName();
	}
	isDropColumnInPivotMode(e) {
		return this.beans.colModel.isPivotMode() && e.dragSource.type === 0;
	}
	onDragEnter(e) {
		this.currentDropListener = this.isDropColumnInPivotMode(e) ? this.bodyDropPivotTarget : this.moveColumnFeature, this.currentDropListener.onDragEnter(e);
	}
	onDragLeave(e) {
		this.currentDropListener.onDragLeave(e);
	}
	onDragging(e) {
		this.currentDropListener.onDragging(e);
	}
	onDragStop(e) {
		this.currentDropListener.onDragStop(e);
	}
	onDragCancel() {
		this.currentDropListener.onDragCancel();
	}
};
function cl(e, t) {
	let n = [], r = [], i = [];
	return e.forEach((e) => {
		let t = e.getColDef().lockPosition;
		t === "right" ? i.push(e) : t === "left" || t === !0 ? n.push(e) : r.push(e);
	}), t.get("enableRtl") ? [
		...i,
		...r,
		...n
	] : [
		...n,
		...r,
		...i
	];
}
function ll(e, t) {
	let n = !0;
	return Qr(null, t, (t) => {
		if (!q(t)) return;
		let r = t;
		if (!r.getColGroupDef()?.marryChildren) return;
		let i = [];
		for (let t of r.getLeafColumns()) {
			let n = e.indexOf(t);
			i.push(n);
		}
		Math.max.apply(Math, i) - Math.min.apply(Math, i) > r.getLeafColumns().length - 1 && (n = !1);
	}), n;
}
var ul = class extends H {
	constructor() {
		super(...arguments), this.beanName = "colMoves";
	}
	moveColumnByIndex(e, t, n) {
		let r = this.beans.colModel.getCols();
		if (!r) return;
		let i = r[e];
		this.moveColumns([i], t, n);
	}
	moveColumns(e, t, n, r = !0) {
		let { colModel: i, colAnimation: a, visibleCols: o, eventSvc: s } = this.beans, c = i.getCols();
		if (!c) return;
		if (t > c.length - e.length) {
			W(30, { toIndex: t });
			return;
		}
		a?.start();
		let l = i.getColsForKeys(e);
		this.doesMovePassRules(l, t) && (ie(i.getCols(), l, t), o.refresh(n), s.dispatchEvent({
			type: "columnMoved",
			columns: l,
			column: l.length === 1 ? l[0] : null,
			toIndex: t,
			finished: r,
			source: n
		})), a?.finish();
	}
	doesMovePassRules(e, t) {
		let n = this.getProposedColumnOrder(e, t);
		return this.doesOrderPassRules(n);
	}
	doesOrderPassRules(e) {
		let { colModel: t, gos: n } = this.beans;
		return !(!ll(e, t.getColTree()) || !((e) => {
			let t = (e) => e ? e === "left" || e === !0 ? -1 : 1 : 0, r = n.get("enableRtl"), i = r ? 1 : -1, a = !0;
			for (let n of e) {
				let e = t(n.getColDef().lockPosition);
				r ? e > i && (a = !1) : e < i && (a = !1), i = e;
			}
			return a;
		})(e));
	}
	getProposedColumnOrder(e, t) {
		let n = this.beans.colModel.getCols().slice();
		return ie(n, e, t), n;
	}
	createBodyDropTarget(e, t) {
		return new sl(e, t);
	}
	moveHeader(e, t, n, r, i) {
		let { ctrlsSvc: a, gos: o, colModel: s, visibleCols: c, focusSvc: l } = this.beans, u = t.getBoundingClientRect(), d = u.left, f = J(n), p = f ? u.width : n.getActualWidth(), m = e === "left" !== o.get("enableRtl"), h = Zc({
			x: m ? d - 20 : d + p + 20,
			pinned: r,
			fromKeyboard: !0,
			gos: o,
			ctrlsSvc: a
		}), g = l.focusedHeader;
		Kc({
			allMovingColumns: f ? n.getLeafColumns() : [n],
			isFromHeader: !0,
			fromLeft: e === "right",
			xPosition: h,
			pinned: r,
			fromEnter: !1,
			fakeEvent: !1,
			gos: o,
			colModel: s,
			colMoves: this,
			visibleCols: c,
			finished: !0
		});
		let _;
		if (f) {
			let e = n.getDisplayedLeafColumns();
			_ = m ? e[0] : M(e);
		} else _ = n;
		if (a.getScrollFeature().ensureColumnVisible(_, "auto"), (!i.isAlive() || o.get("ensureDomOrder")) && g) {
			let e;
			if (f) {
				let t = n.getGroupId(), r = n.getLeafColumns();
				if (!r.length) return;
				let i = r[0].getParent();
				if (!i) return;
				e = dl(i, t);
			} else e = n;
			e && l.focusHeaderPosition({ headerPosition: {
				...g,
				column: e
			} });
		}
	}
	setDragSourceForHeader(e, t, n) {
		let { gos: r, colModel: i, dragAndDrop: a, visibleCols: o } = this.beans, s = !r.get("suppressDragLeaveHidesColumns"), c = J(t), l = c ? t.getProvidedColumnGroup().getLeafColumns() : [t], u = {
			type: 1,
			eElement: e,
			getDefaultIconName: () => s ? "hide" : "notAllowed",
			getDragItem: c ? () => pl(t, o.allCols) : () => fl(t),
			dragItemName: n,
			onDragStarted: () => {
				s = !r.get("suppressDragLeaveHidesColumns"), Qc(l, !0);
			},
			onDragStopped: () => Qc(l, !1),
			onDragCancelled: () => Qc(l, !1),
			onGridEnter: (e) => {
				if (s) {
					let { columns: t = [], visibleState: n } = e ?? {}, r = c ? (e) => !n || n[e.getColId()] : () => !0, a = t.filter((e) => !e.getColDef().lockVisible && r(e));
					i.setColsVisible(a, !0, "uiColumnMoved");
				}
			},
			onGridExit: (e) => {
				if (s) {
					let t = e?.columns?.filter((e) => !e.getColDef().lockVisible) || [];
					i.setColsVisible(t, !1, "uiColumnMoved");
				}
			}
		};
		return a.addDragSource(u, !0), u;
	}
};
function dl(e, t) {
	for (; e;) {
		if (e.getGroupId() === t) return e;
		e = e.getParent();
	}
}
function fl(e) {
	let t = {};
	return t[e.getId()] = e.isVisible(), {
		columns: [e],
		visibleState: t,
		containerType: e.pinned
	};
}
function pl(e, t) {
	let n = e.getProvidedColumnGroup().getLeafColumns(), r = {};
	for (let e of n) r[e.getId()] = e.isVisible();
	let i = [];
	for (let e of t) n.indexOf(e) >= 0 && (i.push(e), re(n, e));
	for (let e of n) i.push(e);
	let a = [], o = e.getLeafColumns();
	for (let e of i) o.indexOf(e) !== -1 && a.push(e);
	return {
		columns: i,
		columnsInSplit: a,
		visibleState: r,
		containerType: a[0]?.pinned
	};
}
var ml = {
	moduleName: "ColumnMove",
	version: U,
	beans: [ul, Rc],
	apiFunctions: {
		moveColumnByIndex: zc,
		moveColumns: Bc
	},
	dependsOn: [Fc],
	css: [Lc]
}, hl = {
	moduleName: "AutoWidth",
	version: U,
	beans: [class extends H {
		constructor() {
			super(...arguments), this.beanName = "autoWidthCalc";
		}
		postConstruct() {
			this.beans.ctrlsSvc.whenReady(this, (e) => {
				this.centerRowContainerCtrl = e.center;
			});
		}
		getPreferredWidthForColumn(e, t) {
			let n = this.getHeaderCellForColumn(e);
			if (!n) return -1;
			let r = this.beans.rowRenderer.getAllCellsNotSpanningForColumn(e);
			return t || r.push(n), this.getPreferredWidthForElements(r);
		}
		getPreferredWidthForColumnGroup(e) {
			let t = this.getHeaderCellForColumn(e);
			return t ? this.getPreferredWidthForElements([t]) : -1;
		}
		getPreferredWidthForElements(e, t) {
			let n = document.createElement("form");
			n.style.position = "fixed";
			let r = this.centerRowContainerCtrl.eContainer;
			for (let t of e) this.cloneItemIntoDummy(t, n);
			r.appendChild(n);
			let i = Math.ceil(n.getBoundingClientRect().width);
			return n.remove(), t ??= this.gos.get("autoSizePadding"), i + t;
		}
		getHeaderCellForColumn(e) {
			let t = null;
			for (let n of this.beans.ctrlsSvc.getHeaderRowContainerCtrls()) {
				let r = n.getHtmlElementForColumnHeader(e);
				r != null && (t = r);
			}
			return t;
		}
		cloneItemIntoDummy(e, t) {
			let n = e.cloneNode(!0);
			n.style.width = "", n.style.position = "static", n.style.left = "";
			let r = document.createElement("div"), i = r.classList;
			["ag-header-cell", "ag-header-group-cell"].some((e) => n.classList.contains(e)) ? (i.add("ag-header", "ag-header-row"), r.style.position = "static") : i.add("ag-row");
			let a = e.parentElement;
			for (; a;) {
				if (["ag-header-row", "ag-row"].some((e) => a.classList.contains(e))) {
					for (let e = 0; e < a.classList.length; e++) {
						let t = a.classList[e];
						t != "ag-row-position-absolute" && i.add(t);
					}
					break;
				}
				a = a.parentElement;
			}
			r.appendChild(n), t.appendChild(r);
		}
	}]
};
function gl(e, t, n = !0, r = "api") {
	e.colResize?.setColumnWidths(t, !1, n, r);
}
function _l(e, t) {
	if (!e || e.length == 0) return;
	let n = t(e[0]);
	for (let r = 1; r < e.length; r++) if (n !== t(e[r])) return;
	return n;
}
function vl(e, t, n) {
	if (!t.length) return;
	let r = t.length === 1 ? t[0] : null, i = _l(t, (e) => e.getPinned());
	e.dispatchEvent({
		type: "columnPinned",
		pinned: i ?? null,
		columns: t,
		column: r,
		source: n
	});
}
function yl(e, t, n) {
	if (!t.length) return;
	let r = t.length === 1 ? t[0] : null, i = _l(t, (e) => e.isVisible());
	e.dispatchEvent({
		type: "columnVisible",
		visible: i,
		columns: t,
		column: r,
		source: n
	});
}
function bl(e, t, n, r) {
	e.dispatchEvent({
		type: t,
		columns: n,
		column: n && n.length == 1 ? n[0] : null,
		source: r
	});
}
function xl(e, t, n, r, i = null) {
	t?.length && e.dispatchEvent({
		type: "columnResized",
		columns: t,
		column: t.length === 1 ? t[0] : null,
		flexColumns: i,
		finished: n,
		source: r
	});
}
var Sl = class extends H {
	constructor(e, t, n, r) {
		super(), this.comp = e, this.eResize = t, this.pinned = n, this.columnGroup = r;
	}
	postConstruct() {
		if (!this.columnGroup.isResizable()) {
			this.comp.setResizableDisplayed(!1);
			return;
		}
		let { horizontalResizeSvc: e, gos: t, colAutosize: n } = this.beans, r = e.addResizeBar({
			eResizeBar: this.eResize,
			onResizeStart: this.onResizeStart.bind(this),
			onResizing: this.onResizing.bind(this, !1),
			onResizeEnd: this.onResizing.bind(this, !0)
		});
		this.addDestroyFunc(r), !t.get("suppressAutoSize") && n && this.addDestroyFunc(n.addColumnGroupResize(this.eResize, this.columnGroup, () => this.resizeLeafColumnsToFit("uiColumnResized")));
	}
	onResizeStart(e) {
		let { columnsToResize: t, resizeStartWidth: n, resizeRatios: r, groupAfterColumns: i, groupAfterStartWidth: a, groupAfterRatios: o } = this.getInitialValues(e);
		this.resizeCols = t, this.resizeStartWidth = n, this.resizeRatios = r, this.resizeTakeFromCols = i, this.resizeTakeFromStartWidth = a, this.resizeTakeFromRatios = o, this.toggleColumnResizing(!0);
	}
	onResizing(e, t, n = "uiColumnResized") {
		let r = this.normaliseDragChange(t), i = this.resizeStartWidth + r;
		this.resizeColumnsFromLocalValues(i, n, e);
	}
	getInitialValues(e) {
		let t = (e) => e.reduce((e, t) => e + t.getActualWidth(), 0), n = (e, t) => e.map((e) => e.getActualWidth() / t), r = this.getColumnsToResize(), i = t(r), a = {
			columnsToResize: r,
			resizeStartWidth: i,
			resizeRatios: n(r, i)
		}, o = null;
		if (e && (o = this.beans.colGroupSvc?.getGroupAtDirection(this.columnGroup, "After") ?? null), o) {
			let e = a.groupAfterColumns = o.getDisplayedLeafColumns().filter((e) => e.isResizable());
			a.groupAfterRatios = n(e, a.groupAfterStartWidth = t(e));
		} else a.groupAfterColumns = void 0, a.groupAfterStartWidth = void 0, a.groupAfterRatios = void 0;
		return a;
	}
	resizeLeafColumnsToFit(e) {
		let t = this.beans.autoWidthCalc.getPreferredWidthForColumnGroup(this.columnGroup), n = this.getInitialValues();
		t > n.resizeStartWidth && this.resizeColumns(n, t, e, !0);
	}
	resizeColumnsFromLocalValues(e, t, n = !0) {
		if (!this.resizeCols || !this.resizeRatios) return;
		let r = {
			columnsToResize: this.resizeCols,
			resizeStartWidth: this.resizeStartWidth,
			resizeRatios: this.resizeRatios,
			groupAfterColumns: this.resizeTakeFromCols,
			groupAfterStartWidth: this.resizeTakeFromStartWidth,
			groupAfterRatios: this.resizeTakeFromRatios
		};
		this.resizeColumns(r, e, t, n);
	}
	resizeColumns(e, t, n, r = !0) {
		let { columnsToResize: i, resizeStartWidth: a, resizeRatios: o, groupAfterColumns: s, groupAfterStartWidth: c, groupAfterRatios: l } = e, u = [];
		if (u.push({
			columns: i,
			ratios: o,
			width: t
		}), s) {
			let e = t - a;
			u.push({
				columns: s,
				ratios: l,
				width: c - e
			});
		}
		this.beans.colResize?.resizeColumnSets({
			resizeSets: u,
			finished: r,
			source: n
		}), r && this.toggleColumnResizing(!1);
	}
	toggleColumnResizing(e) {
		this.comp.toggleCss("ag-column-resizing", e);
	}
	getColumnsToResize() {
		return this.columnGroup.getDisplayedLeafColumns().filter((e) => e.isResizable());
	}
	normaliseDragChange(e) {
		let t = e;
		return this.gos.get("enableRtl") ? this.pinned !== "left" && (t *= -1) : this.pinned === "right" && (t *= -1), t;
	}
	destroy() {
		super.destroy(), this.resizeCols = void 0, this.resizeRatios = void 0, this.resizeTakeFromCols = void 0, this.resizeTakeFromRatios = void 0;
	}
}, Cl = class extends H {
	constructor(e, t, n, r, i) {
		super(), this.pinned = e, this.column = t, this.eResize = n, this.comp = r, this.ctrl = i;
	}
	postConstruct() {
		let e = [], t, n, r = () => {
			if (V(this.eResize, t), !t) return;
			let { horizontalResizeSvc: r, colAutosize: i } = this.beans, a = r.addResizeBar({
				eResizeBar: this.eResize,
				onResizeStart: this.onResizeStart.bind(this),
				onResizing: this.onResizing.bind(this, !1),
				onResizeEnd: this.onResizing.bind(this, !0)
			});
			e.push(a), n && i && e.push(i.addColumnAutosizeListeners(this.eResize, this.column));
		}, i = () => {
			for (let t of e) t();
			e.length = 0;
		}, a = () => {
			let e = this.column.isResizable(), a = !this.gos.get("suppressAutoSize") && !this.column.getColDef().suppressAutoSize;
			(e !== t || a !== n) && (t = e, n = a, i(), r());
		};
		a(), this.addDestroyFunc(i), this.ctrl.setRefreshFunction("resize", a);
	}
	onResizing(e, t) {
		let { column: n, lastResizeAmount: r, resizeStartWidth: i, beans: a } = this, o = this.normaliseResizeAmount(t), s = [{
			key: n,
			newWidth: i + o
		}], { pinnedCols: c, ctrlsSvc: l, colResize: u } = a;
		if (this.column.getPinned()) {
			let e = c?.leftWidth ?? 0, t = c?.rightWidth ?? 0, n = Xe(l.getGridBodyCtrl().eBodyViewport) - 50;
			if (e + t + (o - r) > n) return;
		}
		this.lastResizeAmount = o, u?.setColumnWidths(s, this.resizeWithShiftKey, e, "uiColumnResized"), e && this.toggleColumnResizing(!1);
	}
	onResizeStart(e) {
		this.resizeStartWidth = this.column.getActualWidth(), this.lastResizeAmount = 0, this.resizeWithShiftKey = e, this.toggleColumnResizing(!0);
	}
	toggleColumnResizing(e) {
		this.column.resizing = e, this.comp.toggleCss("ag-column-resizing", e);
	}
	normaliseResizeAmount(e) {
		let t = e, n = this.pinned !== "left", r = this.pinned === "right";
		return this.gos.get("enableRtl") ? n && (t *= -1) : r && (t *= -1), t;
	}
}, wl = class extends H {
	constructor() {
		super(...arguments), this.beanName = "colResize";
	}
	setColumnWidths(e, t, n, r) {
		let i = [], { colModel: a, gos: o, visibleCols: s } = this.beans;
		for (let n of e) {
			let e = a.getColDefCol(n.key) || a.getCol(n.key);
			if (e && (i.push({
				width: n.newWidth,
				ratios: [1],
				columns: [e]
			}), o.get("colResizeDefault") === "shift" && (t = !t), t)) {
				let t = s.getColAfter(e);
				if (!t) continue;
				let r = e.getActualWidth() - n.newWidth, a = t.getActualWidth() + r;
				i.push({
					width: a,
					ratios: [1],
					columns: [t]
				});
			}
		}
		i.length !== 0 && this.resizeColumnSets({
			resizeSets: i,
			finished: n,
			source: r
		});
	}
	resizeColumnSets(e) {
		let { resizeSets: t, finished: n, source: r } = e;
		if (!(!t || t.every((e) => Tl(e)))) {
			if (n) {
				let e = t && t.length > 0 ? t[0].columns : null;
				xl(this.eventSvc, e, n, r);
			}
			return;
		}
		let i = [], a = [];
		for (let e of t) {
			let { width: t, columns: n, ratios: o } = e, s = {}, c = {};
			for (let e of n) a.push(e);
			let l = !0, u = 0;
			for (; l;) {
				if (u++, u > 1e3) {
					Rn(31);
					break;
				}
				l = !1;
				let e = [], r = 0, i = t;
				n.forEach((t, n) => {
					if (c[t.getId()]) i -= s[t.getId()];
					else {
						e.push(t);
						let i = o[n];
						r += i;
					}
				});
				let a = 1 / r;
				e.forEach((n, r) => {
					let u = r === e.length - 1, d;
					u ? d = i : (d = Math.round(o[r] * t * a), i -= d);
					let f = n.getMinWidth(), p = n.getMaxWidth();
					d < f ? (d = f, c[n.getId()] = !0, l = !0) : p > 0 && d > p && (d = p, c[n.getId()] = !0, l = !0), s[n.getId()] = d;
				});
			}
			for (let e of n) {
				let t = s[e.getId()];
				e.getActualWidth() !== t && (e.setActualWidth(t, r), i.push(e));
			}
		}
		let o = i.length > 0, s = [];
		if (o) {
			let { colFlex: e, visibleCols: t, colViewport: n } = this.beans;
			s = e?.refreshFlexedColumns({
				resizingCols: a,
				skipSetLeft: !0
			}) ?? [], t.setLeftValues(r), t.updateBodyWidths(), n.checkViewportColumns();
		}
		let c = a.concat(s);
		(o || n) && xl(this.eventSvc, c, n, r, s);
	}
	resizeHeader(e, t, n) {
		if (!e.isResizable()) return;
		let r = e.getActualWidth(), i = e.getMinWidth(), a = e.getMaxWidth(), o = Math.min(Math.max(r + t, i), a);
		this.setColumnWidths([{
			key: e,
			newWidth: o
		}], n, !0, "uiColumnResized");
	}
	createResizeFeature(e, t, n, r, i) {
		return new Cl(e, t, n, r, i);
	}
	createGroupResizeFeature(e, t, n, r) {
		return new Sl(e, t, n, r);
	}
};
function Tl(e) {
	let { columns: t, width: n } = e, r = 0, i = 0, a = !0;
	for (let e of t) {
		let t = e.getMinWidth();
		r += t || 0;
		let n = e.getMaxWidth();
		n > 0 ? i += n : a = !1;
	}
	return n >= r && (!a || n <= i);
}
var El = {
	moduleName: "ColumnResize",
	version: U,
	beans: [wl],
	apiFunctions: { setColumnWidths: gl },
	dependsOn: [Ic, hl]
}, Dl = class extends H {
	constructor(e, t) {
		super(), this.removeChildListenersFuncs = [], this.columnGroup = t, this.comp = e;
	}
	postConstruct() {
		this.addListenersToChildrenColumns(), this.addManagedListeners(this.columnGroup, { displayedChildrenChanged: this.onDisplayedChildrenChanged.bind(this) }), this.onWidthChanged(), this.addDestroyFunc(this.removeListenersOnChildrenColumns.bind(this));
	}
	addListenersToChildrenColumns() {
		this.removeListenersOnChildrenColumns();
		let e = this.onWidthChanged.bind(this);
		for (let t of this.columnGroup.getLeafColumns()) t.__addEventListener("widthChanged", e), t.__addEventListener("visibleChanged", e), this.removeChildListenersFuncs.push(() => {
			t.__removeEventListener("widthChanged", e), t.__removeEventListener("visibleChanged", e);
		});
	}
	removeListenersOnChildrenColumns() {
		for (let e of this.removeChildListenersFuncs) e();
		this.removeChildListenersFuncs = [];
	}
	onDisplayedChildrenChanged() {
		this.addListenersToChildrenColumns(), this.onWidthChanged();
	}
	onWidthChanged() {
		let e = this.columnGroup.getActualWidth();
		this.comp.setWidth(`${e}px`), this.comp.toggleCss("ag-hidden", e === 0);
	}
}, Ol = class extends No {
	constructor() {
		super(...arguments), this.onSuppressColMoveChange = () => {
			!this.isAlive() || this.isSuppressMoving() ? this.removeDragSource() : this.dragSource || this.setDragSource(this.eGui);
		};
	}
	wireComp(e, t, n, r, i) {
		let { column: a, beans: o } = this, { context: s, colNames: c, colHover: l, rangeSvc: u, colResize: d } = o;
		this.comp = e, i = Co(this, s, i), this.setGui(t, i), this.displayName = c.getDisplayNameForColumnGroup(a, "header"), this.refreshHeaderStyles(), this.addClasses(), this.setupMovingCss(i), this.setupExpandable(i), this.setupTooltip(), this.refreshAnnouncement(), this.setupAutoHeight({
			wrapperElement: r,
			compBean: i
		}), this.setupUserComp(), this.addHeaderMouseListeners(i, r), this.addManagedPropertyListener("groupHeaderHeight", this.refreshMaxHeaderHeight.bind(this)), this.refreshMaxHeaderHeight();
		let f = this.rowCtrl.pinned, p = a.getProvidedColumnGroup().getLeafColumns();
		l?.createHoverFeature(i, p, t), u?.createRangeHighlightFeature(i, a, e), i.createManagedBean(new wo(a, t, o)), i.createManagedBean(new Dl(e, a)), d ? this.resizeFeature = i.createManagedBean(d.createGroupResizeFeature(e, n, f, a)) : e.setResizableDisplayed(!1), i.createManagedBean(new Ma(t, {
			shouldStopEventPropagation: this.shouldStopEventPropagation.bind(this),
			onTabKeyDown: () => void 0,
			handleKeyDown: this.handleKeyDown.bind(this),
			onFocusIn: this.onFocusIn.bind(this)
		})), this.addHighlightListeners(i, p), this.addManagedEventListeners({ cellSelectionChanged: () => this.refreshAnnouncement() }), i.addManagedPropertyListener("suppressMovableColumns", this.onSuppressColMoveChange), this.addResizeAndMoveKeyboardListeners(i), i.addDestroyFunc(() => this.clearComponent());
	}
	getHeaderClassParams() {
		let { column: e, beans: t } = this, n = e.getDefinition();
		return K(t.gos, {
			colDef: n,
			columnGroup: e,
			floatingFilter: !1
		});
	}
	refreshMaxHeaderHeight() {
		let { gos: e, comp: t } = this, n = e.get("groupHeaderHeight");
		n == null ? (t.setHeaderWrapperHidden(!1), t.setHeaderWrapperMaxHeight(null)) : n === 0 ? t.setHeaderWrapperHidden(!0) : t.setHeaderWrapperMaxHeight(n);
	}
	addHighlightListeners(e, t) {
		if (this.beans.gos.get("suppressMoveWhenColumnDragging")) for (let n of t) e.addManagedListeners(n, { headerHighlightChanged: this.onLeafColumnHighlightChanged.bind(this, n) });
	}
	onLeafColumnHighlightChanged(e) {
		let t = this.column.getDisplayedLeafColumns(), n = t[0] === e, r = M(t) === e;
		if (!n && !r) return;
		let i = e.getHighlighted(), a = !!this.rowCtrl.getHeaderCellCtrls().find((e) => e.column.isMoving()), o = !1, s = !1;
		if (a) {
			let e = this.beans.gos.get("enableRtl"), t = i === 1, a = i === 0;
			n && (e ? s = t : o = a), r && (e ? o = a : s = t);
		}
		this.comp.toggleCss("ag-header-highlight-before", o), this.comp.toggleCss("ag-header-highlight-after", s);
	}
	resizeHeader(e, t) {
		let { resizeFeature: n } = this;
		if (!n) return;
		let r = n.getInitialValues(t);
		n.resizeColumns(r, r.resizeStartWidth + e, "uiColumnResized", !0);
	}
	resizeLeafColumnsToFit(e) {
		this.resizeFeature?.resizeLeafColumnsToFit(e);
	}
	setupUserComp() {
		let { colGroupSvc: e, userCompFactory: t, gos: n, enterpriseMenuFactory: r } = this.beans, i = this.column, a = i.getProvidedColumnGroup(), o = Ri(t, K(n, {
			displayName: this.displayName,
			columnGroup: i,
			setExpanded: (t) => {
				e.setColumnGroupOpened(a, t, "gridInitializing");
			},
			setTooltip: (e, t) => {
				n.assertModuleRegistered("Tooltip", 3), this.setupTooltip(e, t);
			},
			showColumnMenu: (e, t) => r?.showMenuAfterButtonClick(a, e, "columnMenu", t),
			showColumnMenuAfterMouseClick: (e, t) => r?.showMenuAfterMouseEvent(a, e, "columnMenu", t),
			eGridHeader: this.eGui
		}));
		o && this.comp.setUserCompDetails(o);
	}
	addHeaderMouseListeners(e, t) {
		let { column: n, comp: r, beans: { rangeSvc: i }, gos: a } = this, o = (e) => this.handleMouseOverChange(e.type === "mouseenter");
		e.addManagedListeners(this.eGui, {
			mouseenter: o,
			mouseleave: o,
			click: () => this.dispatchColumnMouseEvent("columnHeaderClicked", n.getProvidedColumnGroup()),
			contextmenu: (e) => this.handleContextMenuMouseEvent(e, void 0, n.getProvidedColumnGroup())
		}), r.toggleCss("ag-header-group-cell-selectable", dr(a));
		let s = i?.createHeaderGroupCellMouseListenerFeature(this.column, t);
		s && this.createManagedBean(s);
	}
	handleMouseOverChange(e) {
		this.eventSvc.dispatchEvent({
			type: e ? "columnHeaderMouseOver" : "columnHeaderMouseLeave",
			column: this.column.getProvidedColumnGroup()
		});
	}
	setupTooltip(e, t) {
		this.tooltipFeature = this.beans.tooltipSvc?.setupHeaderGroupTooltip(this.tooltipFeature, this, e, t);
	}
	setupExpandable(e) {
		let t = this.column.getProvidedColumnGroup();
		this.refreshExpanded();
		let n = this.refreshExpanded.bind(this);
		e.addManagedListeners(t, {
			expandedChanged: n,
			expandableChanged: n
		});
	}
	refreshExpanded() {
		let { column: e } = this;
		this.expandable = e.isExpandable();
		let t = e.isExpanded();
		this.expandable ? this.comp.setAriaExpanded(t ? "true" : "false") : this.comp.setAriaExpanded(void 0), this.refreshHeaderStyles();
	}
	addClasses() {
		let { column: e } = this, t = e.getColGroupDef(), n = Do(t, this.gos, null, e);
		e.isPadding() ? (n.push("ag-header-group-cell-no-group"), e.getLeafColumns().every((e) => e.isSpanHeaderHeight()) && n.push("ag-header-span-height")) : (n.push("ag-header-group-cell-with-group"), t?.wrapHeaderText && n.push("ag-header-cell-wrap-text"));
		for (let e of n) this.comp.toggleCss(e, !0);
	}
	setupMovingCss(e) {
		let { column: t } = this, n = t.getProvidedColumnGroup().getLeafColumns(), r = () => this.comp.toggleCss("ag-header-cell-moving", t.isMoving());
		for (let t of n) e.addManagedListeners(t, { movingChanged: r });
		r();
	}
	onFocusIn(e) {
		this.eGui.contains(e.relatedTarget) || (this.focusThis(), this.announceAriaDescription());
	}
	handleKeyDown(e) {
		if (super.handleKeyDown(e), !this.getWrapperHasFocus()) return;
		let { column: t, expandable: n, gos: r, beans: i } = this, a = dr(r);
		if (e.key == Y.ENTER) {
			if (a && !e.altKey) i.rangeSvc?.handleColumnSelection(t, e);
			else if (n) {
				let e = !t.isExpanded();
				i.colGroupSvc.setColumnGroupOpened(t.getProvidedColumnGroup(), e, "uiColumnExpanded");
			}
		}
	}
	refreshAnnouncement() {
		let e, { gos: t } = this;
		dr(t) && (e = this.getLocaleTextFunc()("ariaColumnGroupCellSelection", "Press Enter to toggle selection for all visible cells in this column group")), this.ariaAnnouncement = e;
	}
	announceAriaDescription() {
		let { beans: e, eGui: t, ariaAnnouncement: n } = this;
		!n || !t.contains(z(e)) || e.ariaAnnounce?.announceValue(n, "columnHeader");
	}
	setDragSource(e) {
		!this.isAlive() || this.isSuppressMoving() || (this.removeDragSource(), e && (this.dragSource = this.beans.colMoves?.setDragSourceForHeader(e, this.column, this.displayName) ?? null));
	}
	isSuppressMoving() {
		return this.gos.get("suppressMovableColumns") || this.column.getLeafColumns().some((e) => e.getColDef().suppressMovable || e.getColDef().lockPosition);
	}
	destroy() {
		this.tooltipFeature = this.destroyBean(this.tooltipFeature), super.destroy();
	}
};
function kl(e, t, n) {
	e.colGroupSvc?.setColumnGroupOpened(t, n, "api");
}
function Al(e, t, n) {
	return e.colGroupSvc?.getColumnGroup(t, n) ?? null;
}
function jl(e, t) {
	return e.colGroupSvc?.getProvidedColGroup(t) ?? null;
}
function Ml(e, t, n) {
	return e.colNames.getDisplayNameForColumnGroup(t, n) || "";
}
function Nl(e) {
	return e.colGroupSvc?.getColumnGroupState() ?? [];
}
function Pl(e, t) {
	e.colGroupSvc?.setColumnGroupState(t, "api");
}
function Fl(e) {
	e.colGroupSvc?.resetColumnGroupState("api");
}
function Il(e) {
	return e.visibleCols.treeLeft;
}
function Ll(e) {
	return e.visibleCols.treeCenter;
}
function Rl(e) {
	return e.visibleCols.treeRight;
}
function zl(e) {
	return e.visibleCols.getAllTrees();
}
var Bl = class {
	constructor() {
		this.existingIds = {};
	}
	getInstanceIdForKey(e) {
		let t = this.existingIds[e], n;
		return n = typeof t == "number" ? t + 1 : 0, this.existingIds[e] = n, n;
	}
};
function Vl(e, t) {
	for (let n = 0; n < t.length; n++) {
		let r = e.indexOf(t[n]);
		r >= 0 && (e[r] = e[e.length - 1], e.pop());
	}
}
var Hl = class extends H {
	constructor() {
		super(...arguments), this.beanName = "visibleCols", this.colsAndGroupsMap = {}, this.leftCols = [], this.rightCols = [], this.centerCols = [], this.allCols = [], this.headerGroupRowCount = 0, this.bodyWidth = 0, this.leftWidth = 0, this.rightWidth = 0, this.isBodyWidthDirty = !0;
	}
	refresh(e, t = !1) {
		let { colFlex: n, colModel: r, colGroupSvc: i, colViewport: a, selectionColSvc: o } = this.beans;
		t || this.buildTrees(r, i), i?.updateOpenClosedVisibility(), this.leftCols = Wl(this.treeLeft), this.centerCols = Wl(this.treeCenter), this.rightCols = Wl(this.treeRight), o?.refreshVisibility(this.leftCols, this.centerCols, this.rightCols), this.joinColsAriaOrder(r), this.joinCols(), this.headerGroupRowCount = this.getHeaderRowCount(), this.setLeftValues(e), this.autoHeightCols = this.allCols.filter((e) => e.isAutoHeight()), n?.refreshFlexedColumns(), this.updateBodyWidths(), this.setFirstRightAndLastLeftPinned(r, this.leftCols, this.rightCols, e), a.checkViewportColumns(!1), this.eventSvc.dispatchEvent({
			type: "displayedColumnsChanged",
			source: e
		});
	}
	getHeaderRowCount() {
		if (!this.gos.get("hidePaddedHeaderRows")) return this.beans.colModel.cols.treeDepth;
		let e = 0;
		for (let t of this.allCols) {
			let n = t.getParent();
			for (; n;) {
				if (!n.isPadding()) {
					let t = n.getProvidedColumnGroup().getLevel() + 1;
					t > e && (e = t);
					break;
				}
				n = n.getParent();
			}
		}
		return e;
	}
	updateBodyWidths() {
		let e = ti(this.centerCols), t = ti(this.leftCols), n = ti(this.rightCols);
		this.isBodyWidthDirty = this.bodyWidth !== e, (this.bodyWidth !== e || this.leftWidth !== t || this.rightWidth !== n) && (this.bodyWidth = e, this.leftWidth = t, this.rightWidth = n, this.eventSvc.dispatchEvent({ type: "columnContainerWidthChanged" }), this.eventSvc.dispatchEvent({ type: "displayedColumnsWidthChanged" }));
	}
	setLeftValues(e) {
		this.setLeftValuesOfCols(e), this.setLeftValuesOfGroups();
	}
	setFirstRightAndLastLeftPinned(e, t, n, r) {
		let i, a;
		this.gos.get("enableRtl") ? (i = t ? t[0] : null, a = n ? M(n) : null) : (i = t ? M(t) : null, a = n ? n[0] : null);
		for (let t of e.getCols()) t.setLastLeftPinned(t === i, r), t.setFirstRightPinned(t === a, r);
	}
	buildTrees(e, t) {
		let n = e.getColsToShow(), r = n.filter((e) => e.getPinned() == "left"), i = n.filter((e) => e.getPinned() == "right"), a = n.filter((e) => e.getPinned() != "left" && e.getPinned() != "right"), o = new Bl(), s = (e) => t ? t.createColumnGroups(e) : e.columns;
		this.treeLeft = s({
			columns: r,
			idCreator: o,
			pinned: "left",
			oldDisplayedGroups: this.treeLeft
		}), this.treeRight = s({
			columns: i,
			idCreator: o,
			pinned: "right",
			oldDisplayedGroups: this.treeRight
		}), this.treeCenter = s({
			columns: a,
			idCreator: o,
			pinned: null,
			oldDisplayedGroups: this.treeCenter
		}), this.updateColsAndGroupsMap();
	}
	clear() {
		this.leftCols = [], this.rightCols = [], this.centerCols = [], this.allCols = [], this.ariaOrderColumns = [];
	}
	joinColsAriaOrder(e) {
		let t = e.getCols(), n = [], r = [], i = [];
		for (let e of t) {
			let t = e.getPinned();
			t ? t === !0 || t === "left" ? n.push(e) : i.push(e) : r.push(e);
		}
		this.ariaOrderColumns = n.concat(r).concat(i);
	}
	getAriaColIndex(e) {
		let t;
		return t = J(e) ? e.getLeafColumns()[0] : e, this.ariaOrderColumns.indexOf(t) + 1;
	}
	setLeftValuesOfGroups() {
		for (let e of [
			this.treeLeft,
			this.treeRight,
			this.treeCenter
		]) for (let t of e) J(t) && t.checkLeft();
	}
	setLeftValuesOfCols(e) {
		let { colModel: t } = this.beans;
		if (!t.getColDefCols()) return;
		let n = t.getCols().slice(0), r = this.gos.get("enableRtl");
		for (let t of [
			this.leftCols,
			this.rightCols,
			this.centerCols
		]) {
			if (r) {
				let n = ti(t);
				for (let r of t) n -= r.getActualWidth(), r.setLeft(n, e);
			} else {
				let n = 0;
				for (let r of t) r.setLeft(n, e), n += r.getActualWidth();
			}
			Vl(n, t);
		}
		for (let t of n) t.setLeft(null, e);
	}
	joinCols() {
		this.gos.get("enableRtl") ? this.allCols = this.rightCols.concat(this.centerCols).concat(this.leftCols) : this.allCols = this.leftCols.concat(this.centerCols).concat(this.rightCols);
	}
	getAllTrees() {
		return this.treeLeft && this.treeRight && this.treeCenter ? this.treeLeft.concat(this.treeCenter).concat(this.treeRight) : null;
	}
	isColDisplayed(e) {
		return this.allCols.indexOf(e) >= 0;
	}
	getLeftColsForRow(e) {
		let { leftCols: t, beans: { colModel: n } } = this;
		return n.colSpanActive ? this.getColsForRow(e, t) : t;
	}
	getRightColsForRow(e) {
		let { rightCols: t, beans: { colModel: n } } = this;
		return n.colSpanActive ? this.getColsForRow(e, t) : t;
	}
	getColsForRow(e, t, n, r) {
		let i = [], a = null;
		for (let o = 0; o < t.length; o++) {
			let s = t[o], c = t.length - o, l = Math.min(s.getColSpan(e), c), u = [s];
			if (l > 1) {
				let e = l - 1;
				for (let n = 1; n <= e; n++) u.push(t[o + n]);
				o += e;
			}
			let d;
			if (n) {
				d = !1;
				for (let e of u) n(e) && (d = !0);
			} else d = !0;
			d && (i.length === 0 && a && r && r(s) && i.push(a), i.push(s)), a = s;
		}
		return i;
	}
	getContainerWidth(e) {
		switch (e) {
			case "left": return this.leftWidth;
			case "right": return this.rightWidth;
			default: return this.bodyWidth;
		}
	}
	getColBefore(e) {
		let t = this.allCols, n = t.indexOf(e);
		return n > 0 ? t[n - 1] : null;
	}
	isPinningLeft() {
		return this.leftCols.length > 0;
	}
	isPinningRight() {
		return this.rightCols.length > 0;
	}
	updateColsAndGroupsMap() {
		this.colsAndGroupsMap = {};
		let e = (e) => {
			this.colsAndGroupsMap[e.getUniqueId()] = e;
		};
		Ul(this.treeCenter, !1, e), Ul(this.treeLeft, !1, e), Ul(this.treeRight, !1, e);
	}
	isVisible(e) {
		return this.colsAndGroupsMap[e.getUniqueId()] === e;
	}
	getFirstColumn() {
		let e = this.gos.get("enableRtl"), t = [
			"leftCols",
			"centerCols",
			"rightCols"
		];
		e && t.reverse();
		for (let n = 0; n < t.length; n++) {
			let r = this[t[n]];
			if (r.length) return e ? M(r) : r[0];
		}
		return null;
	}
	getColAfter(e) {
		let t = this.allCols, n = t.indexOf(e);
		return n < t.length - 1 ? t[n + 1] : null;
	}
	getColsLeftWidth() {
		return ti(this.leftCols);
	}
	getDisplayedColumnsRightWidth() {
		return ti(this.rightCols);
	}
	isColAtEdge(e, t) {
		let n = this.allCols;
		if (!n.length) return !1;
		let r = t === "first", i;
		if (J(e)) {
			let t = e.getDisplayedLeafColumns();
			if (!t.length) return !1;
			i = r ? t[0] : M(t);
		} else i = e;
		return (r ? n[0] : M(n)) === i;
	}
};
function Ul(e, t, n) {
	if (e) for (let r = 0; r < e.length; r++) {
		let i = e[r];
		J(i) && Ul(t ? i.getDisplayedChildren() : i.getChildren(), t, n), n(i);
	}
}
function Wl(e) {
	let t = [];
	return Ul(e, !0, (e) => {
		wr(e) && t.push(e);
	}), t;
}
var Gl = {
	moduleName: "ColumnGroup",
	version: U,
	dynamicBeans: { headerGroupCellCtrl: Ol },
	beans: [class extends H {
		constructor() {
			super(...arguments), this.beanName = "colGroupSvc";
		}
		getColumnGroupState() {
			let e = [];
			return Qr(null, this.beans.colModel.getColTree(), (t) => {
				q(t) && e.push({
					groupId: t.getGroupId(),
					open: t.isExpanded()
				});
			}), e;
		}
		resetColumnGroupState(e) {
			let t = this.beans.colModel.getColDefColTree();
			if (!t) return;
			let n = [];
			Qr(null, t, (e) => {
				if (q(e)) {
					let t = e.getColGroupDef(), r = {
						groupId: e.getGroupId(),
						open: t ? t.openByDefault : void 0
					};
					n.push(r);
				}
			}), this.setColumnGroupState(n, e);
		}
		setColumnGroupState(e, t) {
			let { colModel: n, colAnimation: r, visibleCols: i, eventSvc: a } = this.beans;
			if (!n.getColTree().length) return;
			r?.start();
			let o = [];
			for (let t of e) {
				let e = t.groupId, n = t.open, r = this.getProvidedColGroup(e);
				r && r.isExpanded() !== n && (r.setExpanded(n), o.push(r));
			}
			i.refresh(t, !0), o.length && a.dispatchEvent({
				type: "columnGroupOpened",
				columnGroup: o.length === 1 ? o[0] : void 0,
				columnGroups: o
			}), r?.finish();
		}
		setColumnGroupOpened(e, t, n) {
			let r;
			r = q(e) ? e.getId() : e || "", this.setColumnGroupState([{
				groupId: r,
				open: t
			}], n);
		}
		getProvidedColGroup(e) {
			let t = null;
			return Qr(null, this.beans.colModel.getColTree(), (n) => {
				q(n) && n.getId() === e && (t = n);
			}), t;
		}
		getGroupAtDirection(e, t) {
			let n = e.getProvidedColumnGroup().getLevel() + e.getPaddingLevel(), r = e.getDisplayedLeafColumns(), i = t === "After" ? M(r) : r[0], a = `getCol${t}`;
			for (;;) {
				let t = this.beans.visibleCols[a](i);
				if (!t) return null;
				let r = this.getColGroupAtLevel(t, n);
				if (r !== e) return r;
			}
		}
		getColGroupAtLevel(e, t) {
			let n = e.getParent(), r, i;
			for (; r = n.getProvidedColumnGroup().getLevel(), i = n.getPaddingLevel(), !(r + i <= t);) n = n.getParent();
			return n;
		}
		updateOpenClosedVisibility() {
			Ul(this.beans.visibleCols.getAllTrees(), !1, (e) => {
				J(e) && e.calculateDisplayedColumns();
			});
		}
		getColumnGroup(e, t) {
			if (!e) return null;
			if (J(e)) return e;
			let n = this.beans.visibleCols.getAllTrees(), r = typeof t == "number", i = null;
			return Ul(n, !1, (n) => {
				if (J(n)) {
					let a = n, o;
					o = r ? e === a.getGroupId() && t === a.getPartId() : e === a.getGroupId(), o && (i = a);
				}
			}), i;
		}
		createColumnGroups(e) {
			let { columns: t, idCreator: n, pinned: r, oldDisplayedGroups: i, isStandaloneStructure: a } = e, o = this.mapOldGroupsById(i), s = [], c = t;
			for (; c.length;) {
				let e = c;
				c = [];
				let t = 0, i = (i) => {
					let l = t;
					t = i;
					let u = e[l], d = (J(u) ? u.getProvidedColumnGroup() : u).getOriginalParent();
					if (d == null) {
						for (let t = l; t < i; t++) s.push(e[t]);
						return;
					}
					let f = this.createColumnGroup(d, n, o, r, a);
					for (let t = l; t < i; t++) f.addChild(e[t]);
					c.push(f);
				};
				for (let n = 1; n < e.length; n++) {
					let r = e[n], a = (J(r) ? r.getProvidedColumnGroup() : r).getOriginalParent(), o = e[t];
					a !== (J(o) ? o.getProvidedColumnGroup() : o).getOriginalParent() && i(n);
				}
				t < e.length && i(e.length);
			}
			return a || this.setupParentsIntoCols(s, null), s;
		}
		createProvidedColumnGroup(e, t, n, r, i, a, o) {
			let s = i.getUniqueKey(t.groupId || null, null), c = Rr(this.beans, t, s), l = new Ir(c, s, !1, n);
			this.createBean(l);
			let u = this.findExistingGroup(t, a);
			u && a.splice(u.idx, 1);
			let d = u?.group;
			d && l.setExpanded(d.isExpanded());
			let f = Ur(this.beans, c.children, n + 1, e, r, i, a, o);
			return l.setChildren(f), l;
		}
		balanceColumnTree(e, t, n, r) {
			let i = [];
			for (let a = 0; a < e.length; a++) {
				let o = e[a];
				if (q(o)) {
					let e = o, a = this.balanceColumnTree(e.getChildren(), t + 1, n, r);
					e.setChildren(a), i.push(e);
				} else {
					let a, s;
					for (let e = t; e < n; e++) {
						let t = r.getUniqueKey(null, null), n = new Ir(Rr(this.beans, null, t), t, !0, e);
						this.createBean(n), s && s.setChildren([n]), s = n, a ||= s;
					}
					if (a && s) if (i.push(a), e.some((e) => q(e))) {
						s.setChildren([o]);
						continue;
					} else {
						s.setChildren(e);
						break;
					}
					i.push(o);
				}
			}
			return i;
		}
		findDepth(e) {
			let t = 0, n = e;
			for (; n?.[0] && q(n[0]);) t++, n = n[0].getChildren();
			return t;
		}
		findMaxDepth(e, t) {
			let n = t;
			for (let r = 0; r < e.length; r++) {
				let i = e[r];
				if (q(i)) {
					let e = i, r = this.findMaxDepth(e.getChildren(), t + 1);
					n < r && (n = r);
				}
			}
			return n;
		}
		balanceTreeForAutoCols(e, t) {
			let n = [];
			for (let r of e) {
				let e = r;
				for (let n = t - 1; n >= 0; n--) {
					let t = new Ir(null, `FAKE_PATH_${r.getId()}_${n}`, !0, n);
					this.createBean(t), t.setChildren([e]), e.originalParent = t, e = t;
				}
				t === 0 && (r.originalParent = null), n.push(e);
			}
			return n;
		}
		findExistingGroup(e, t) {
			if (e.groupId != null) for (let n = 0; n < t.length; n++) {
				let r = t[n];
				if (r.getColGroupDef() && r.getId() === e.groupId) return {
					idx: n,
					group: r
				};
			}
		}
		createColumnGroup(e, t, n, r, i) {
			let a = e.getGroupId(), o = t.getInstanceIdForKey(a), s = n[di(a, o)];
			return s && s.getProvidedColumnGroup() !== e && (s = null), I(s) ? s.reset() : (s = new fi(e, a, o, r), i || this.createBean(s)), s;
		}
		mapOldGroupsById(e) {
			let t = {}, n = (e) => {
				for (let r of e) if (J(r)) {
					let e = r;
					t[r.getUniqueId()] = e, n(e.getChildren());
				}
			};
			return e && n(e), t;
		}
		setupParentsIntoCols(e, t) {
			for (let n of e ?? []) if (n.parent !== t && (this.beans.colViewport.colsWithinViewportHash = ""), n.parent = t, J(n)) {
				let e = n;
				this.setupParentsIntoCols(e.getChildren(), e);
			}
		}
	}],
	apiFunctions: {
		getAllDisplayedColumnGroups: zl,
		getCenterDisplayedColumnGroups: Ll,
		getColumnGroup: Al,
		getColumnGroupState: Nl,
		getDisplayNameForColumnGroup: Ml,
		getLeftDisplayedColumnGroups: Il,
		getProvidedColumnGroup: jl,
		getRightDisplayedColumnGroups: Rl,
		resetColumnGroupState: Fl,
		setColumnGroupOpened: kl,
		setColumnGroupState: Pl
	}
};
function Kl(e, t, n) {
	let { colModel: r, rowGroupColsSvc: i, pivotColsSvc: a, autoColSvc: o, selectionColSvc: s, colAnimation: c, visibleCols: l, pivotResultCols: u, environment: d, valueColsSvc: f, eventSvc: p, gos: m } = e, h = r.getColDefCols() ?? [], g = s?.getColumns();
	if (!h.length && !g?.length) return !1;
	if (t?.state && !t.state.forEach) return W(32), !1;
	let _ = (r, o, s, c, l) => {
		if (!r) return;
		let u = li(o, t.defaultState), p = u("flex").value1, m = u("sort").value1, h = u("sortType").value1, g = kr(m) || Ar(h), _ = Pr(h), v = Nr(m), y = g ? {
			type: _,
			direction: v
		} : void 0;
		if (Gr(e, r, u("hide").value1, y, u("sortIndex").value1, u("pinned").value1, p, n), p == null) {
			let e = u("width").value1;
			if (e != null) {
				let t = r.getColDef().minWidth ?? d.getDefaultColumnMinWidth();
				t != null && e >= t && r.setActualWidth(e, n);
			}
		}
		l || !r.isPrimary() || (f?.syncColumnWithState(r, n, u), i?.syncColumnWithState(r, n, u, s), a?.syncColumnWithState(r, n, u, c));
	}, v = (c, u, d) => {
		let f = ql(e, n), h = u.slice(), g = {}, v = {}, y = [], b = [], x = [], S = 0, C = i?.columns.slice() ?? [], w = a?.columns.slice() ?? [];
		for (let e of c) {
			let t = e.colId;
			if (t.startsWith("ag-Grid-AutoColumn")) {
				y.push(e), x.push(e);
				continue;
			}
			if (ii(t)) {
				b.push(e), x.push(e);
				continue;
			}
			let n = d(t);
			n ? (_(n, e, g, v, !1), re(h, n)) : (x.push(e), S += 1);
		}
		let T = (e) => _(e, null, g, v, !1);
		h.forEach(T), i?.sortColumns($l.bind(i, g, C)), a?.sortColumns($l.bind(a, v, w)), r.refreshCols(!1, n);
		let E = (e, t, n = []) => {
			for (let r of t) {
				let t = e(r.colId);
				re(n, t), _(t, r, null, null, !0);
			}
			n.forEach(T);
		};
		return E((e) => o?.getColumn(e) ?? null, y, o?.getColumns()?.slice()), E((e) => s?.getColumn(e) ?? null, b, s?.getColumns()?.slice()), Xl(t, r, m), l.refresh(n), p.dispatchEvent({
			type: "columnEverythingChanged",
			source: n
		}), f(), {
			unmatchedAndAutoStates: x,
			unmatchedCount: S
		};
	};
	c?.start();
	let { unmatchedAndAutoStates: y, unmatchedCount: b } = v(t.state || [], h, (e) => r.getColDefCol(e));
	return (y.length > 0 || I(t.defaultState)) && (b = v(y, u?.getPivotResultCols()?.list ?? [], (e) => u?.getPivotResultCol(e) ?? null).unmatchedCount), c?.finish(), b === 0;
}
function ql(e, t) {
	let { rowGroupColsSvc: n, pivotColsSvc: r, valueColsSvc: i, colModel: a, sortSvc: o, eventSvc: s } = e, c = {
		rowGroupColumns: n?.columns.slice() ?? [],
		pivotColumns: r?.columns.slice() ?? [],
		valueColumns: i?.columns.slice() ?? []
	}, l = Jl(e), u = {};
	for (let e of l) u[e.colId] = e;
	return () => {
		let i = (e, n, r, i) => {
			if (N(n.map(i), r.map(i))) return;
			let a = new Set(n);
			for (let e of r) a.delete(e) || a.add(e);
			let o = [...a];
			s.dispatchEvent({
				type: e,
				columns: o,
				column: o.length === 1 ? o[0] : null,
				source: t
			});
		}, d = (e) => {
			let t = [];
			return a.forAllCols((n) => {
				let r = u[n.getColId()];
				r && e(r, n) && t.push(n);
			}), t;
		}, f = (e) => e.getColId();
		i("columnRowGroupChanged", c.rowGroupColumns, n?.columns ?? [], f), i("columnPivotChanged", c.pivotColumns, r?.columns ?? [], f);
		let p = d((e, t) => {
			let n = e.aggFunc != null, r = n != t.isValueActive(), i = n && e.aggFunc != t.getAggFunc();
			return r || i;
		});
		p.length > 0 && bl(s, "columnValueChanged", p, t), xl(s, d((e, t) => e.width != t.getActualWidth()), !0, t), vl(s, d((e, t) => e.pinned != t.getPinned()), t), yl(s, d((e, t) => e.hide == t.isVisible()), t);
		let m = d((e, t) => !Mr(t.getSortDef(), {
			type: Pr(e.sortType),
			direction: Nr(e.sort)
		}) || e.sortIndex != t.getSortIndex());
		m.length > 0 && o?.dispatchSortChangedEvents(t, m), Ql(l, Jl(e), t, a, s);
	};
}
function Jl(e) {
	let { colModel: t, rowGroupColsSvc: n, pivotColsSvc: r } = e;
	if (L(t.getColDefCols()) || !t.isAlive()) return [];
	let i = n?.columns, a = r?.columns, o = [], s = (e) => {
		let t = e.isRowGroupActive() && i ? i.indexOf(e) : null, n = e.isPivotActive() && a ? a.indexOf(e) : null, r = e.isValueActive() ? e.getAggFunc() : null, s = e.getSortIndex() == null ? null : e.getSortIndex();
		o.push({
			colId: e.getColId(),
			width: e.getActualWidth(),
			hide: !e.isVisible(),
			pinned: e.getPinned(),
			sort: e.getSort(),
			sortType: e.getSortDef()?.type,
			sortIndex: s,
			aggFunc: r,
			rowGroup: e.isRowGroupActive(),
			rowGroupIndex: t,
			pivot: e.isPivotActive(),
			pivotIndex: n,
			flex: e.getFlex() ?? null
		});
	};
	t.forAllCols((e) => s(e));
	let c = new Map(t.getCols().map((e, t) => [e.getColId(), t]));
	return o.sort((e, t) => (c.has(e.colId) ? c.get(e.colId) : -1) - (c.has(t.colId) ? c.get(t.colId) : -1)), o;
}
function Yl(e) {
	let t = (e, t) => e ?? t ?? null, n = e.getColDef(), r = Or(t(n.sort, n.initialSort)), i = r.direction, a = r.type, o = t(n.sortIndex, n.initialSortIndex), s = t(n.hide, n.initialHide), c = t(n.pinned, n.initialPinned), l = t(n.width, n.initialWidth), u = t(n.flex, n.initialFlex), d = t(n.rowGroupIndex, n.initialRowGroupIndex), f = t(n.rowGroup, n.initialRowGroup);
	d == null && !f && (d = null, f = null);
	let p = t(n.pivotIndex, n.initialPivotIndex), m = t(n.pivot, n.initialPivot);
	p == null && !m && (p = null, m = null);
	let h = t(n.aggFunc, n.initialAggFunc);
	return {
		colId: e.getColId(),
		sort: i,
		sortType: a,
		sortIndex: o,
		hide: s,
		pinned: c,
		width: l,
		flex: u,
		rowGroup: f,
		rowGroupIndex: d,
		pivot: m,
		pivotIndex: p,
		aggFunc: h
	};
}
function Xl(e, t, n) {
	if (!e.applyOrder || !e.state) return;
	let r = [];
	for (let t of e.state) t.colId != null && r.push(t.colId);
	Zl(t.cols, r, t, n);
}
function Zl(e, t, n, r) {
	if (e == null) return;
	let i = [], a = {};
	for (let n of t) {
		if (a[n]) continue;
		let t = e.map[n];
		t && (i.push(t), a[n] = !0);
	}
	let o = 0;
	for (let t of e.list) {
		let e = t.getColId();
		a[e] ?? (e.startsWith("ag-Grid-AutoColumn") ? i.splice(o++, 0, t) : i.push(t));
	}
	if (i = cl(i, r), !ll(i, n.getColTree())) {
		W(39);
		return;
	}
	e.list = i;
}
function Ql(e, t, n, r, i) {
	let a = {};
	for (let e of t) a[e.colId] = e;
	let o = {};
	for (let t of e) a[t.colId] && (o[t.colId] = !0);
	let s = e.filter((e) => o[e.colId]), c = t.filter((e) => o[e.colId]), l = [];
	c.forEach((e, t) => {
		let n = s?.[t];
		if (n && n.colId !== e.colId) {
			let e = r.getCol(n.colId);
			e && l.push(e);
		}
	}), l.length && i.dispatchEvent({
		type: "columnMoved",
		columns: l,
		column: l.length === 1 ? l[0] : null,
		finished: !0,
		source: n
	});
}
var $l = (e, t, n, r) => {
	let i = e[n.getId()], a = e[r.getId()], o = i != null, s = a != null;
	if (o && s) return i - a;
	if (o) return -1;
	if (s) return 1;
	let c = t.indexOf(n), l = t.indexOf(r), u = c >= 0;
	return u && l >= 0 ? c - l : u ? -1 : 1;
}, eu = class extends H {
	constructor() {
		super(...arguments), this.beanName = "colModel", this.pivotMode = !1, this.ready = !1, this.changeEventsDispatching = !1;
	}
	postConstruct() {
		this.pivotMode = this.gos.get("pivotMode"), this.addManagedPropertyListeners([
			"groupDisplayType",
			"treeData",
			"treeDataDisplayType",
			"groupHideOpenParents",
			"groupHideColumnsUntilExpanded",
			"rowNumbers",
			"hidePaddedHeaderRows"
		], (e) => this.refreshAll(si(e.source))), this.addManagedPropertyListeners([
			"defaultColDef",
			"defaultColGroupDef",
			"columnTypes",
			"suppressFieldDotNotation"
		], this.recreateColumnDefs.bind(this)), this.addManagedPropertyListener("pivotMode", (e) => this.setPivotMode(this.gos.get("pivotMode"), si(e.source)));
	}
	createColsFromColDefs(e) {
		let { beans: t } = this, { valueCache: n, colAutosize: r, rowGroupColsSvc: i, pivotColsSvc: a, valueColsSvc: o, visibleCols: s, eventSvc: c, groupHierarchyColSvc: l } = t, u = this.colDefs ? ql(t, e) : void 0;
		n?.expire();
		let d = this.colDefCols?.list, f = this.colDefCols?.tree, p = Vr(t, this.colDefs, !0, f, e);
		ni(t, this.colDefCols?.tree, p.columnTree);
		let m = p.columnTree, h = p.treeDepth, g = ei(m), _ = {};
		for (let e of g) _[e.getId()] = e;
		this.colDefCols = {
			tree: m,
			treeDepth: h,
			list: g,
			map: _
		}, this.createColumnsForService([l], this.colDefCols, e), i?.extractCols(e, d), a?.extractCols(e, d), o?.extractCols(e, d), this.ready = !0, this.changeEventsDispatching = !0, this.refreshCols(!0, e), this.changeEventsDispatching = !1, s.refresh(e), c.dispatchEvent({
			type: "columnEverythingChanged",
			source: e
		}), u && (this.changeEventsDispatching = !0, u(), this.changeEventsDispatching = !1), c.dispatchEvent({
			type: "newColumnsLoaded",
			source: e
		}), e === "gridInitializing" && r?.applyAutosizeStrategy();
	}
	refreshCols(e, t) {
		if (!this.colDefCols) return;
		let n = this.cols?.tree;
		this.saveColOrder();
		let { autoColSvc: r, selectionColSvc: i, rowNumbersSvc: a, quickFilter: o, pivotResultCols: s, showRowGroupCols: c, rowAutoHeight: l, visibleCols: u, colViewport: d, eventSvc: f, formula: p } = this.beans, m = this.selectCols(s, this.colDefCols);
		p?.setFormulasActive(m), this.createColumnsForService([
			r,
			i,
			a
		], m, t);
		let h = qn(this.gos, this.showingPivotResult);
		(!e || h) && this.restoreColOrder(m), this.positionLockedCols(m), c?.refresh(), o?.refreshCols(), this.setColSpanActive(), l?.setAutoHeightActive(m), u.clear(), d.clear(), N(n, this.cols.tree) || f.dispatchEvent({ type: "gridColumnsChanged" });
	}
	createColumnsForService(e, t, n) {
		for (let r of e) r && (r.createColumns(t, (e) => {
			this.lastOrder = e(this.lastOrder), this.lastPivotOrder = e(this.lastPivotOrder);
		}, n), r.addColumns(t));
	}
	selectCols(e, t) {
		let n = e?.getPivotResultCols() ?? null;
		this.showingPivotResult = n != null;
		let { map: r, list: i, tree: a, treeDepth: o } = n ?? t;
		return this.cols = {
			list: i.slice(),
			map: { ...r },
			tree: a.slice(),
			treeDepth: o
		}, n && (n.list.some((e) => this.cols?.map[e.getColId()] !== void 0) || (this.lastPivotOrder = null)), this.cols;
	}
	getColsToShow() {
		if (!this.cols) return [];
		let { beans: e, showingPivotResult: t, cols: n } = this, { valueColsSvc: r, selectionColSvc: i, gos: a } = e, o = this.isPivotMode() && !t, s = i?.isSelectionColumnEnabled(), c = Jn(e), l = r?.columns, u = ar(a);
		return n.list.filter((e) => {
			let t = ri(e);
			return o ? l?.includes(e) || t && (!u || e.isVisible()) || s && ii(e) || c && ai(e) : t && !u || e.isVisible();
		});
	}
	refreshAll(e) {
		this.ready && (this.refreshCols(!1, e), this.beans.visibleCols.refresh(e));
	}
	setColsVisible(e, t = !1, n) {
		Kl(this.beans, { state: e.map((e) => ({
			colId: typeof e == "string" ? e : e.getColId(),
			hide: !t
		})) }, n);
	}
	restoreColOrder(e) {
		let t = this.showingPivotResult ? this.lastPivotOrder : this.lastOrder;
		if (!t) return;
		let n = t.filter((t) => e.map[t.getId()] != null);
		if (n.length === 0) return;
		if (n.length === e.list.length) {
			e.list = n;
			return;
		}
		let r = (e) => {
			let t = e.getOriginalParent();
			return t ? t.getChildren().length > 1 ? !0 : r(t) : !1;
		};
		if (!n.some((e) => r(e))) {
			let t = new Set(n);
			for (let r of e.list) t.has(r) || n.push(r);
			e.list = n;
			return;
		}
		let i = /* @__PURE__ */ new Map();
		for (let e = 0; e < n.length; e++) {
			let t = n[e];
			i.set(t, e);
		}
		let a = e.list.filter((e) => !i.has(e));
		if (a.length === 0) {
			e.list = n;
			return;
		}
		let o = (e, t) => {
			let n = t ? t.getOriginalParent() : e.getOriginalParent();
			if (!n) return null;
			let r = null, a = null;
			for (let o of n.getChildren()) if (!(o === t || o === e)) {
				if (o instanceof Dr) {
					let e = i.get(o);
					if (e == null) continue;
					(r == null || r < e) && (r = e, a = o);
					continue;
				}
				o.forEachLeafColumn((e) => {
					let t = i.get(e);
					t != null && (r == null || r < t) && (r = t, a = e);
				});
			}
			return a ?? o(e, n);
		}, s = [], c = /* @__PURE__ */ new Map();
		for (let e of a) {
			let t = o(e, null);
			if (t == null) {
				s.push(e);
				continue;
			}
			let n = c.get(t);
			n === void 0 ? c.set(t, e) : Array.isArray(n) ? n.push(e) : c.set(t, [n, e]);
		}
		let l = Array(e.list.length), u = l.length - 1;
		for (let e = s.length - 1; e >= 0; e--) l[u--] = s[e];
		for (let e = n.length - 1; e >= 0; e--) {
			let t = n[e], r = c.get(t);
			if (r) if (Array.isArray(r)) for (let e = r.length - 1; e >= 0; e--) {
				let t = r[e];
				l[u--] = t;
			}
			else l[u--] = r;
			l[u--] = t;
		}
		e.list = l;
	}
	positionLockedCols(e) {
		e.list = cl(e.list, this.gos);
	}
	saveColOrder() {
		this.showingPivotResult ? this.lastPivotOrder = this.cols?.list ?? null : this.lastOrder = this.cols?.list ?? null;
	}
	getColumnDefs(e) {
		return this.colDefCols && this.beans.colDefFactory?.getColumnDefs(this.colDefCols.list, this.showingPivotResult, this.lastOrder, this.cols?.list ?? [], e);
	}
	setColSpanActive() {
		this.colSpanActive = !!this.cols?.list.some((e) => e.getColDef().colSpan != null);
	}
	isPivotMode() {
		return this.pivotMode;
	}
	setPivotMode(e, t) {
		if (e === this.pivotMode || (this.pivotMode = e, !this.ready)) return;
		this.refreshCols(!1, t);
		let { visibleCols: n, eventSvc: r } = this.beans;
		n.refresh(t), r.dispatchEvent({ type: "columnPivotModeChanged" });
	}
	isPivotActive() {
		let e = this.beans.pivotColsSvc?.columns;
		return this.pivotMode && !!e?.length;
	}
	recreateColumnDefs(e) {
		if (!this.cols) return;
		this.beans.autoColSvc?.updateColumns(e);
		let t = si(e.source);
		this.createColsFromColDefs(t);
	}
	setColumnDefs(e, t) {
		this.colDefs = e, this.createColsFromColDefs(t);
	}
	destroy() {
		ni(this.beans, this.colDefCols?.tree), super.destroy();
	}
	getColTree() {
		return this.cols?.tree ?? [];
	}
	getColDefColTree() {
		return this.colDefCols?.tree ?? [];
	}
	getColDefCols() {
		return this.colDefCols?.list ?? null;
	}
	getCols() {
		return this.cols?.list ?? [];
	}
	forAllCols(e) {
		let { pivotResultCols: t, autoColSvc: n, selectionColSvc: r, groupHierarchyColSvc: i } = this.beans;
		P(this.colDefCols?.list, e) || P(n?.columns?.list, e) || P(r?.columns?.list, e) || P(i?.columns?.list, e) || P(t?.getPivotResultCols()?.list, e);
	}
	getColsForKeys(e) {
		return e ? e.map((e) => this.getCol(e)).filter((e) => e != null) : [];
	}
	getColDefCol(e) {
		return this.colDefCols?.list ? this.getColFromCollection(e, this.colDefCols) : null;
	}
	getCol(e) {
		return e == null ? null : this.getColFromCollection(e, this.cols);
	}
	getColById(e) {
		return this.cols?.map[e] ?? null;
	}
	getColFromCollection(e, t) {
		if (t == null) return null;
		let { map: n, list: r } = t;
		if (typeof e == "string" && n[e]) return n[e];
		for (let t = 0; t < r.length; t++) if (ci(r[t], e)) return r[t];
		let { autoColSvc: i, selectionColSvc: a, groupHierarchyColSvc: o } = this.beans;
		return i?.getColumn(e) ?? a?.getColumn(e) ?? o?.getColumn(e) ?? null;
	}
}, tu = ".ag-label{white-space:nowrap}:where(.ag-ltr) .ag-label{margin-right:var(--ag-spacing)}:where(.ag-rtl) .ag-label{margin-left:var(--ag-spacing)}:where(.ag-label-align-right) .ag-label{order:1}:where(.ag-ltr) :where(.ag-label-align-right) .ag-label{margin-left:var(--ag-spacing)}:where(.ag-rtl) :where(.ag-label-align-right) .ag-label{margin-right:var(--ag-spacing)}:where(.ag-label-align-right){.ag-label,.ag-wrapper{flex:none}}.ag-label-align-top{align-items:flex-start;flex-direction:column}:where(.ag-label-align-top){.ag-label,.ag-wrapper{align-self:stretch}}.ag-label-ellipsis{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(.ag-label-align-top) .ag-label{margin-bottom:calc(var(--ag-spacing)*.5)}", nu = class extends Xi {
	constructor(e, t, n) {
		super(t, n), this.labelSeparator = "", this.labelAlignment = "left", this.disabled = !1, this.label = "", this.config = e || {}, this.registerCSS(tu);
	}
	postConstruct() {
		this.addCss("ag-labeled"), this.eLabel.classList.add("ag-label");
		let { labelSeparator: e, label: t, labelWidth: n, labelAlignment: r, disabled: i, labelEllipsis: a } = this.config;
		i != null && this.setDisabled(i), e != null && this.setLabelSeparator(e), t != null && this.setLabel(t), n != null && this.setLabelWidth(n), a != null && this.setLabelEllipsis(a), this.setLabelAlignment(r || this.labelAlignment), this.refreshLabel();
	}
	refreshLabel() {
		let { label: e, eLabel: t } = this;
		et(t), typeof e == "string" ? t.innerText = e + this.labelSeparator : e && t.appendChild(e), e === "" ? (V(t, !1), Ce(t, "presentation")) : (V(t, !0), Ce(t, null));
	}
	setLabelSeparator(e) {
		return this.labelSeparator === e ? this : (this.labelSeparator = e, this.label != null && this.refreshLabel(), this);
	}
	getLabelId() {
		let e = this.eLabel;
		return e.id = e.id || `ag-${this.getCompId()}-label`, e.id;
	}
	getLabel() {
		return this.label;
	}
	setLabel(e) {
		return this.label === e ? this : (this.label = e, this.refreshLabel(), this);
	}
	setLabelAlignment(e) {
		let t = this.getGui().classList;
		return t.toggle("ag-label-align-left", e === "left"), t.toggle("ag-label-align-right", e === "right"), t.toggle("ag-label-align-top", e === "top"), this;
	}
	setLabelEllipsis(e) {
		return this.eLabel.classList.toggle("ag-label-ellipsis", e), this;
	}
	setLabelWidth(e) {
		return this.label == null || at(this.eLabel, e), this;
	}
	setDisabled(e) {
		e = !!e;
		let t = this.getGui();
		return Ke(t, e), t.classList.toggle("ag-disabled", e), this.disabled = e, this;
	}
	isDisabled() {
		return !!this.disabled;
	}
}, ru = class extends nu {
	constructor(e, t, n, r) {
		super(e, t, n), this.className = r;
	}
	postConstruct() {
		super.postConstruct();
		let { width: e, value: t, onValueChange: n, ariaLabel: r } = this.config;
		e != null && this.setWidth(e), t != null && this.setValue(t), n != null && this.onValueChange(n), r != null && this.setAriaLabel(r), this.className && this.addCss(this.className), this.refreshAriaLabelledBy();
	}
	setLabel(e) {
		return super.setLabel(e), this.refreshAriaLabelledBy(), this;
	}
	refreshAriaLabelledBy() {
		let e = this.getAriaElement(), t = this.getLabelId(), n = this.getLabel();
		n == null || n == "" || Te(e) !== null ? De(e, "") : De(e, t ?? "");
	}
	setAriaLabel(e) {
		return Ee(this.getAriaElement(), e), this.refreshAriaLabelledBy(), this;
	}
	onValueChange(e) {
		return this.addManagedListeners(this, { fieldValueChanged: () => e(this.getValue()) }), this;
	}
	getWidth() {
		return this.getGui().clientWidth;
	}
	setWidth(e) {
		return ot(this.getGui(), e), this;
	}
	getPreviousValue() {
		return this.previousValue;
	}
	getValue() {
		return this.value;
	}
	setValue(e, t) {
		return this.value === e ? this : (this.previousValue = this.value, this.value = e, t || this.dispatchLocalEvent({ type: "fieldValueChanged" }), this);
	}
};
function iu(e) {
	return {
		tag: "div",
		role: "presentation",
		children: [{
			tag: "div",
			ref: "eLabel",
			cls: "ag-input-field-label"
		}, {
			tag: "div",
			ref: "eWrapper",
			cls: "ag-wrapper ag-input-wrapper",
			role: "presentation",
			children: [{
				tag: e,
				ref: "eInput",
				cls: "ag-input-field-input"
			}]
		}]
	};
}
var au = class extends ru {
	constructor(e, t, n = "text", r = "input") {
		super(e, e?.template ?? iu(r), [], t), this.inputType = n, this.displayFieldTag = r, this.eLabel = null, this.eWrapper = null, this.eInput = null;
	}
	postConstruct() {
		super.postConstruct(), this.setInputType(this.inputType);
		let { eLabel: e, eWrapper: t, eInput: n, className: r } = this;
		e.classList.add(`${r}-label`), t.classList.add(`${r}-input-wrapper`), n.classList.add(`${r}-input`), this.addCss("ag-input-field"), n.id = n.id || `ag-${this.getCompId()}-input`;
		let { inputName: i, inputWidth: a, inputPlaceholder: o, autoComplete: s, tabIndex: c } = this.config;
		i != null && this.setInputName(i), a != null && this.setInputWidth(a), o != null && this.setInputPlaceholder(o), s != null && this.setAutoComplete(s), this.addInputListeners(), this.activateTabIndex([n], c);
	}
	addInputListeners() {
		this.addManagedElementListeners(this.eInput, { input: (e) => this.setValue(e.target.value) });
	}
	setInputType(e) {
		this.displayFieldTag === "input" && (this.inputType = e, ut(this.eInput, "type", e));
	}
	getInputElement() {
		return this.eInput;
	}
	getWrapperElement() {
		return this.eWrapper;
	}
	setInputWidth(e) {
		return at(this.eWrapper, e), this;
	}
	setInputName(e) {
		return this.getInputElement().setAttribute("name", e), this;
	}
	getFocusableElement() {
		return this.eInput;
	}
	setMaxLength(e) {
		let t = this.eInput;
		return t.maxLength = e, this;
	}
	setInputPlaceholder(e) {
		return ut(this.eInput, "placeholder", e), this;
	}
	setInputAriaLabel(e) {
		return Ee(this.eInput, e), this.refreshAriaLabelledBy(), this;
	}
	setDisabled(e) {
		return Ke(this.eInput, e), super.setDisabled(e);
	}
	setAutoComplete(e) {
		if (e === !0) ut(this.eInput, "autocomplete", null);
		else {
			let t = typeof e == "string" ? e : "off";
			ut(this.eInput, "autocomplete", t);
		}
		return this;
	}
}, ou = {
	selector: "AG-CHECKBOX",
	component: class extends au {
		constructor(e, t = "ag-checkbox", n = "checkbox") {
			super(e, t, n), this.labelAlignment = "right", this.selected = !1, this.readOnly = !1, this.passive = !1;
		}
		postConstruct() {
			super.postConstruct();
			let { readOnly: e, passive: t, name: n } = this.config;
			typeof e == "boolean" && this.setReadOnly(e), typeof t == "boolean" && this.setPassive(t), n != null && this.setName(n);
		}
		addInputListeners() {
			this.addManagedElementListeners(this.eInput, { click: this.onCheckboxClick.bind(this) }), this.addManagedElementListeners(this.eLabel, { click: this.toggle.bind(this) });
		}
		getNextValue() {
			return this.selected === void 0 ? !0 : !this.selected;
		}
		setPassive(e) {
			this.passive = e;
		}
		isReadOnly() {
			return this.readOnly;
		}
		setReadOnly(e) {
			this.eWrapper.classList.toggle("ag-disabled", e), this.eInput.disabled = e, this.readOnly = e;
		}
		setDisabled(e) {
			return this.eWrapper.classList.toggle("ag-disabled", e), super.setDisabled(e);
		}
		toggle() {
			if (this.eInput.disabled) return;
			let e = this.isSelected(), t = this.getNextValue();
			this.passive ? this.dispatchChange(t, e) : this.setValue(t);
		}
		getValue() {
			return this.isSelected();
		}
		setValue(e, t) {
			return this.refreshSelectedClass(e), this.setSelected(e, t), this;
		}
		setName(e) {
			let t = this.getInputElement();
			return t.name = e, this;
		}
		isSelected() {
			return this.selected;
		}
		setSelected(e, t) {
			if (this.isSelected() === e) return;
			this.previousValue = this.isSelected(), e = this.selected = typeof e == "boolean" ? e : void 0;
			let n = this.eInput;
			n.checked = e, n.indeterminate = e === void 0, t || this.dispatchChange(this.selected, this.previousValue);
		}
		dispatchChange(e, t, n) {
			this.dispatchLocalEvent({
				type: "fieldValueChanged",
				selected: e,
				previousValue: t,
				event: n
			});
			let r = this.getInputElement();
			this.eventSvc.dispatchEvent({
				type: "checkboxChanged",
				id: r.id,
				name: r.name,
				selected: e,
				previousValue: t
			});
		}
		onCheckboxClick(e) {
			if (this.passive || this.eInput.disabled) return;
			let t = this.isSelected(), n = this.selected = e.target.checked;
			this.refreshSelectedClass(n), this.dispatchChange(n, t, e);
		}
		refreshSelectedClass(e) {
			let t = this.eWrapper.classList;
			t.toggle("ag-checked", e === !0), t.toggle("ag-indeterminate", e == null);
		}
	}
}, su = ".ag-checkbox-cell{height:100%}", cu = {
	tag: "div",
	cls: "ag-cell-wrapper ag-checkbox-cell",
	role: "presentation",
	children: [{
		tag: "ag-checkbox",
		ref: "eCheckbox",
		role: "presentation"
	}]
}, lu = class extends Qi {
	constructor() {
		super(cu, [ou]), this.eCheckbox = null, this.registerCSS(su);
	}
	init(e) {
		this.refresh(e);
		let { eCheckbox: t, beans: n } = this, r = t.getInputElement();
		r.setAttribute("tabindex", "-1"), Oe(r, "polite"), this.addManagedListeners(r, {
			click: (e) => {
				if (ka(e), t.isDisabled()) return;
				let n = t.getValue();
				this.onCheckboxChanged(n);
			},
			dblclick: (e) => {
				ka(e);
			}
		}), this.addManagedElementListeners(e.eGridCell, { keydown: (r) => {
			if (r.key === Y.SPACE && !t.isDisabled()) {
				e.eGridCell === z(n) && t.toggle();
				let i = t.getValue();
				this.onCheckboxChanged(i), r.preventDefault();
			}
		} });
	}
	refresh(e) {
		return this.params = e, this.updateCheckbox(e), !0;
	}
	updateCheckbox(e) {
		let t, n = !0, { value: r, column: i, node: a } = e;
		if (a.group && i) if (typeof r == "boolean") t = r;
		else {
			let e = i.getColId();
			e.startsWith("ag-Grid-AutoColumn") ? t = r == null || r === "" ? void 0 : r === "true" : a.aggData && a.aggData[e] !== void 0 || a.sourceRowIndex >= 0 ? t = r ?? void 0 : n = !1;
		}
		else t = r ?? void 0;
		let { eCheckbox: o } = this;
		if (!n) {
			o.setDisplayed(!1);
			return;
		}
		o.setValue(t);
		let s = e.disabled ?? !i?.isCellEditable(a);
		o.setDisabled(s);
		let c = this.getLocaleTextFunc(), l = Ve(c, t), u = s ? l : `${c("ariaToggleCellValue", "Press SPACE to toggle cell value")} (${l})`;
		o.setInputAriaLabel(u);
	}
	onCheckboxChanged(e) {
		let { params: t } = this, { column: n, node: r, value: i } = t, { editSvc: a } = this.beans;
		if (!n) return;
		let o = {
			rowNode: r,
			column: n
		};
		a?.dispatchCellEvent(o, null, "cellEditingStarted", { value: i });
		let s = r.setDataValue(n, e, "ui");
		a?.dispatchCellEvent(o, null, "cellEditingStopped", {
			oldValue: i,
			newValue: e,
			valueChanged: s
		}), s || this.updateCheckbox(t);
	}
}, uu = {
	tag: "div",
	cls: "ag-skeleton-container"
}, du = class extends Qi {
	constructor() {
		super(uu);
	}
	init(e) {
		let t = `ag-cell-skeleton-renderer-${this.getCompId()}`;
		this.getGui().setAttribute("id", t), this.addDestroyFunc(() => De(e.eParentOfValue)), De(e.eParentOfValue, t), e.deferRender ? this.setupLoading(e) : e.node.failedLoad ? this.setupFailed() : this.setupLoading(e);
	}
	setupFailed() {
		let e = this.getLocaleTextFunc();
		this.getGui().textContent = e("loadingError", "ERR");
		let t = e("ariaSkeletonCellLoadingFailed", "Row failed to load");
		Ee(this.getGui(), t);
	}
	setupLoading(e) {
		let t = Ks({
			tag: "div",
			cls: "ag-skeleton-effect"
		}), n = e.node.rowIndex;
		if (n != null) {
			let e = 75 + 25 * (n % 2 == 0 ? Math.sin(n) : Math.cos(n));
			t.style.width = `${e}%`;
		}
		this.getGui().appendChild(t);
		let r = this.getLocaleTextFunc(), i = e.deferRender ? r("ariaDeferSkeletonCellLoading", "Cell is loading") : r("ariaSkeletonCellLoading", "Row data is loading");
		Ee(this.getGui(), i);
	}
	refresh(e) {
		return !1;
	}
}, fu = {
	moduleName: "CheckboxCellRenderer",
	version: U,
	userComponents: { agCheckboxCellRenderer: lu }
}, pu = {
	moduleName: "SkeletonCellRenderer",
	version: U,
	userComponents: { agSkeletonCellRenderer: du }
}, mu = class extends H {
	constructor() {
		super(...arguments), this.beanName = "colFlex", this.columnsHidden = !1;
	}
	refreshFlexedColumns(e = {}) {
		let t = e.source ?? "flex";
		e.viewportWidth != null && (this.flexViewportWidth = e.viewportWidth);
		let n = this.flexViewportWidth, { visibleCols: r, colDelayRenderSvc: i } = this.beans, a = r.centerCols, o = -1;
		if (e.resizingCols) {
			let t = new Set(e.resizingCols);
			for (let e = a.length - 1; e >= 0; e--) if (t.has(a[e])) {
				o = e;
				break;
			}
		}
		let s = !1, c = a.map((e, t) => {
			let n = e.getFlex(), r = n != null && n > 0 && t > o;
			return s ||= r, {
				col: e,
				isFlex: r,
				flex: Math.max(0, n ?? 0),
				initialSize: e.getActualWidth(),
				min: e.getMinWidth(),
				max: e.getMaxWidth(),
				targetSize: 0
			};
		});
		if (s ? (i?.hideColumns("colFlex"), this.columnsHidden = !0) : this.columnsHidden && this.revealColumns(i), !n || !s) return [];
		let l = c.length, u = c.reduce((e, t) => e + t.flex, 0), d = n, f = (e, n) => {
			e.frozenSize = n, e.col.setActualWidth(n, t), d -= n, u -= e.flex, --l;
		}, p = (e) => e.frozenSize != null;
		for (let e of c) e.isFlex || f(e, e.initialSize);
		for (; l > 0;) {
			let e = Math.round(u < 1 ? d * u : d), t, n = 0, r = 0;
			for (let i of c) {
				if (p(i)) continue;
				t = i, r += e * (i.flex / u);
				let a = r - n, o = Math.round(a);
				i.targetSize = o, n += o;
			}
			t && (t.targetSize += e - n);
			let i = 0;
			for (let e of c) {
				if (p(e)) continue;
				let t = e.targetSize, n = Math.min(Math.max(t, e.min), e.max);
				i += n - t, e.violationType = n === t ? void 0 : n < t ? "max" : "min", e.targetSize = n;
			}
			let a = i === 0 ? "all" : i > 0 ? "min" : "max";
			for (let e of c) p(e) || (a === "all" || e.violationType === a) && f(e, e.targetSize);
		}
		e.skipSetLeft || r.setLeftValues(t), e.updateBodyWidths && r.updateBodyWidths();
		let m = c.filter((e) => e.isFlex && !e.violationType).map((e) => e.col);
		if (e.fireResizedEvent) {
			let e = c.filter((e) => e.initialSize !== e.frozenSize).map((e) => e.col), n = c.filter((e) => e.flex).map((e) => e.col);
			xl(this.eventSvc, e, !0, t, n);
		}
		return this.revealColumns(i), m;
	}
	revealColumns(e) {
		this.columnsHidden &&= (e?.revealColumns("colFlex"), !1);
	}
	initCol(e) {
		let { flex: t, initialFlex: n } = e.colDef;
		t === void 0 ? n !== void 0 && (e.flex = n) : e.flex = t;
	}
	setColFlex(e, t) {
		e.flex = t ?? null, e.dispatchStateUpdatedEvent("flex");
	}
}, hu = (e) => {
	if (typeof e == "bigint") return e;
	let t;
	if (typeof e == "number") t = e;
	else if (typeof e == "string" && (t = e.trim(), t === "" || (t.endsWith("n") && (t = t.slice(0, -1)), !/^[+-]?\d+$/.test(t)))) return null;
	if (t == null) return null;
	try {
		return BigInt(t);
	} catch {
		return null;
	}
}, gu = "T", _u = RegExp(`[${gu} ]`), vu = RegExp(`^\\d{4}-\\d{2}-\\d{2}(${gu}\\d{2}:\\d{2}:\\d{2}\\D?)?`);
function yu(e, t) {
	return e.toString().padStart(t, "0");
}
function bu(e, t = !0, n = gu) {
	if (!e) return null;
	let r = [
		e.getFullYear(),
		e.getMonth() + 1,
		e.getDate()
	].map((e) => yu(e, 2)).join("-");
	return t && (r += n + [
		e.getHours(),
		e.getMinutes(),
		e.getSeconds()
	].map((e) => yu(e, 2)).join(":")), r;
}
function xu(e, t = !1) {
	return !!Cu(e, t);
}
function Su(e) {
	return xu(e, !0);
}
function Cu(e, t = !1, n) {
	if (!e || !n && !vu.test(e)) return null;
	let [r, i] = e.split(_u);
	if (!r) return null;
	let a = r.split("-").map((e) => Number.parseInt(e, 10));
	if (a.filter((e) => !isNaN(e)).length !== 3) return null;
	let [o, s, c] = a, l = new Date(o, s - 1, c);
	if (l.getFullYear() !== o || l.getMonth() !== s - 1 || l.getDate() !== c || !i && t) return null;
	if (!i || i === "00:00:00") return l;
	let [u, d, f] = i.split(":").map((e) => Number.parseInt(e, 10));
	if (u >= 0 && u < 24) l.setHours(u);
	else if (t) return null;
	if (d >= 0 && d < 60) l.setMinutes(d);
	else if (t) return null;
	if (f >= 0 && f < 60) l.setSeconds(f);
	else if (t) return null;
	return l;
}
function wu(e, t, n) {
	if (!t || !e) return;
	if (!n) return e[t];
	let r = t.split("."), i = e;
	for (let e = 0; e < r.length; e++) {
		if (i == null) return;
		i = i[r[e]];
	}
	return i;
}
var Tu = [
	"dateTimeString",
	"dateString",
	"text",
	"number",
	"bigint",
	"boolean",
	"date"
], Eu = class extends H {
	constructor() {
		super(...arguments), this.beanName = "dataTypeSvc", this.dataTypeDefinitions = {}, this.isPendingInference = !1, this.isColumnTypeOverrideInDataTypeDefinitions = !1, this.columnStateUpdatesPendingInference = {}, this.columnStateUpdateListenerDestroyFuncs = [], this.columnDefinitionPropsPerDataType = {
			number() {
				return { cellEditor: "agNumberCellEditor" };
			},
			bigint({ filterModuleBean: e }) {
				return e ? { cellEditor: "agTextCellEditor" } : {
					cellEditor: "agTextCellEditor",
					comparator: {
						default: Nu,
						absolute: Pu
					}
				};
			},
			boolean() {
				return {
					cellEditor: "agCheckboxCellEditor",
					cellRenderer: "agCheckboxCellRenderer",
					getFindText: () => null,
					suppressKeyboardEvent: ({ node: e, event: t, column: n }) => t.key === Y.SPACE && n.isCellEditable(e)
				};
			},
			date({ formatValue: e }) {
				return {
					cellEditor: "agDateCellEditor",
					keyCreator: e
				};
			},
			dateString({ formatValue: e }) {
				return {
					cellEditor: "agDateStringCellEditor",
					keyCreator: e
				};
			},
			dateTime(e) {
				return this.date(e);
			},
			dateTimeString(e) {
				return this.dateString(e);
			},
			object({ formatValue: e, colModel: t, colId: n }) {
				return {
					cellEditorParams: { useFormatter: !0 },
					comparator: (r, i) => {
						let a = t.getColDefCol(n), o = a?.getColDef();
						if (!a || !o) return 0;
						let s = r == null ? "" : e({
							column: a,
							node: null,
							value: r
						}), c = i == null ? "" : e({
							column: a,
							node: null,
							value: i
						});
						return s === c ? 0 : s > c ? 1 : -1;
					},
					keyCreator: e
				};
			},
			text() {
				return {};
			}
		};
	}
	wireBeans(e) {
		this.colModel = e.colModel;
	}
	postConstruct() {
		this.processDataTypeDefinitions(), this.addManagedPropertyListener("dataTypeDefinitions", (e) => {
			this.processDataTypeDefinitions(), this.colModel.recreateColumnDefs(e);
		});
	}
	processDataTypeDefinitions() {
		let e = this.getDefaultDataTypes(), t = {}, n = {}, r = (e) => (t) => {
			let { column: n, node: r, value: i } = t, a = n.getColDef().valueFormatter;
			return a === e.groupSafeValueFormatter && (a = e.valueFormatter), this.beans.valueSvc.formatValue(n, r, i, a);
		};
		for (let i of Object.keys(e)) {
			let a = e[i], o = {
				...a,
				groupSafeValueFormatter: ju(a, this.gos)
			};
			t[i] = o, n[i] = r(o);
		}
		let i = this.gos.get("dataTypeDefinitions") ?? {}, a = {};
		for (let o of Object.keys(i)) {
			let s = i[o], c = this.processDataTypeDefinition(s, i, [o], e);
			c && (t[o] = c, s.dataTypeMatcher && (a[o] = s.dataTypeMatcher), n[o] = r(c));
		}
		let { valueParser: o, valueFormatter: s } = e.object, { valueParser: c, valueFormatter: l } = t.object;
		this.hasObjectValueParser = c !== o, this.hasObjectValueFormatter = l !== s, this.formatValueFuncs = n, this.dataTypeDefinitions = t, this.dataTypeMatchers = this.sortKeysInMatchers(a, e);
	}
	sortKeysInMatchers(e, t) {
		let n = { ...e };
		for (let r of Tu) delete n[r], n[r] = e[r] ?? t[r].dataTypeMatcher;
		return n;
	}
	processDataTypeDefinition(e, t, n, r) {
		let i, a = e.extendsDataType;
		if (e.columnTypes && (this.isColumnTypeOverrideInDataTypeDefinitions = !0), e.extendsDataType === e.baseDataType) {
			let n = r[a], o = t[a];
			if (n && o && (n = o), !Ou(e, n, a)) return;
			i = Du(n, e);
		} else {
			if (n.includes(a)) {
				W(44);
				return;
			}
			let o = t[a];
			if (!Ou(e, o, a)) return;
			let s = this.processDataTypeDefinition(o, t, [...n, a], r);
			if (!s) return;
			i = Du(s, e);
		}
		return {
			...i,
			groupSafeValueFormatter: ju(i, this.gos)
		};
	}
	updateColDefAndGetColumnType(e, t, n) {
		let { cellDataType: r } = t;
		r === void 0 && (r = e.cellDataType);
		let { field: i } = t;
		if ((r == null || r === !0) && (r = this.canInferCellDataType(e, t) ? this.inferCellDataType(i, n) : !1), this.addFormulaCellEditorToColDef(e, t), !r) {
			e.cellDataType = !1;
			return;
		}
		let a = this.dataTypeDefinitions[r];
		if (!a) {
			W(47, { cellDataType: r });
			return;
		}
		return e.cellDataType = r, a.groupSafeValueFormatter && (e.valueFormatter = a.groupSafeValueFormatter), a.valueParser && (e.valueParser = a.valueParser), a.suppressDefaultProperties || this.setColDefPropertiesForBaseDataType(e, r, a, n), a.columnTypes;
	}
	addFormulaCellEditorToColDef(e, t) {
		!(t.allowFormula ?? e.allowFormula) || t.cellEditor || (e.cellEditor = "agFormulaCellEditor");
	}
	addColumnListeners(e) {
		if (!this.isPendingInference) return;
		let t = this.columnStateUpdatesPendingInference[e.getColId()];
		if (!t) return;
		let n = (e) => {
			t.add(e.key);
		};
		e.__addEventListener("columnStateUpdated", n), this.columnStateUpdateListenerDestroyFuncs.push(() => e.__removeEventListener("columnStateUpdated", n));
	}
	canInferCellDataType(e, t) {
		let { gos: n } = this;
		if (!Un(n)) return !1;
		let r = {
			cellRenderer: !0,
			valueGetter: !0,
			valueParser: !0,
			refData: !0
		};
		if (Iu(t, r)) return !1;
		let i = t.type === null ? e.type : t.type;
		if (i) {
			let e = n.get("columnTypes") ?? {};
			if (oi(i).some((t) => {
				let n = e[t.trim()];
				return n && Iu(n, r);
			})) return !1;
		}
		return !Iu(e, r);
	}
	inferCellDataType(e, t) {
		if (!e) return;
		let n, r = this.getInitialData();
		if (r ? n = wu(r, e, e.includes(".") && !this.gos.get("suppressFieldDotNotation")) : this.initWaitForRowData(t), n != null) return Object.keys(this.dataTypeMatchers).find((e) => this.dataTypeMatchers[e](n)) ?? "object";
	}
	getInitialData() {
		let e = this.gos.get("rowData");
		if (e?.length) return e[0];
		if (this.initialData) return this.initialData;
		{
			let e = this.beans.rowModel.rootNode?._leafs;
			if (e?.length) return e[0].data;
		}
		return null;
	}
	initWaitForRowData(e) {
		if (this.columnStateUpdatesPendingInference[e] = /* @__PURE__ */ new Set(), this.isPendingInference) return;
		this.isPendingInference = !0;
		let t = this.isColumnTypeOverrideInDataTypeDefinitions, { colAutosize: n, eventSvc: r } = this.beans;
		t && n && (n.shouldQueueResizeOperations = !0);
		let [i] = this.addManagedEventListeners({ rowDataUpdateStarted: (e) => {
			let { firstRowData: a } = e;
			a && (i?.(), this.isPendingInference = !1, this.processColumnsPendingInference(a, t), this.columnStateUpdatesPendingInference = {}, t && n?.processResizeOperations(), r.dispatchEvent({ type: "dataTypesInferred" }));
		} });
	}
	processColumnsPendingInference(e, t) {
		this.initialData = e;
		let n = [];
		this.destroyColumnStateUpdateListeners();
		let r = {}, i = {};
		for (let e of Object.keys(this.columnStateUpdatesPendingInference)) {
			let a = this.columnStateUpdatesPendingInference[e], o = this.colModel.getCol(e);
			if (!o) continue;
			let s = o.getColDef();
			if (!this.resetColDefIntoCol(o, "cellDataTypeInferred")) continue;
			let c = o.getColDef();
			if (t && c.type && c.type !== s.type) {
				let t = Lu(o, a);
				t.rowGroup && t.rowGroupIndex == null && (r[e] = t), t.pivot && t.pivotIndex == null && (i[e] = t), n.push(t);
			}
		}
		t && n.push(...this.generateColumnStateForRowGroupAndPivotIndexes(r, i)), n.length && Kl(this.beans, { state: n }, "cellDataTypeInferred"), this.initialData = null;
	}
	generateColumnStateForRowGroupAndPivotIndexes(e, t) {
		let n = {}, { rowGroupColsSvc: r, pivotColsSvc: i } = this.beans;
		return r?.restoreColumnOrder(n, e), i?.restoreColumnOrder(n, t), Object.values(n);
	}
	resetColDefIntoCol(e, t) {
		let n = e.getUserProvidedColDef();
		if (!n) return !1;
		let r = Jr(this.beans, n, e.getColId());
		return e.setColDef(r, n, t), !0;
	}
	getDateStringTypeDefinition(e) {
		let { dateString: t } = this.dataTypeDefinitions;
		return e ? this.getDataTypeDefinition(e) ?? t : t;
	}
	getDateParserFunction(e) {
		return this.getDateStringTypeDefinition(e).dateParser;
	}
	getDateFormatterFunction(e) {
		return this.getDateStringTypeDefinition(e).dateFormatter;
	}
	getDateIncludesTimeFlag(e) {
		return e === "dateTime" || e === "dateTimeString";
	}
	getDataTypeDefinition(e) {
		let t = e.getColDef();
		if (t.cellDataType) return this.dataTypeDefinitions[t.cellDataType];
	}
	getBaseDataType(e) {
		return this.getDataTypeDefinition(e)?.baseDataType;
	}
	checkType(e, t) {
		if (t == null) return !0;
		let n = this.getDataTypeDefinition(e)?.dataTypeMatcher;
		return !n || e.getColDef().allowFormula && this.beans.formula?.isFormula(t) ? !0 : n(t);
	}
	validateColDef(e, t, n, r) {
		if (e.cellDataType === "object") {
			let i = (e) => e?.cellDataType == null || e?.cellDataType === !0, a = i(t) && i(n), o = (e) => W(48, {
				property: e,
				inferred: a,
				colId: r
			}), { object: s } = this.dataTypeDefinitions;
			e.valueFormatter === s.groupSafeValueFormatter && !this.hasObjectValueFormatter && o("Formatter"), e.editable && e.valueParser === s.valueParser && !this.hasObjectValueParser && o("Parser");
		}
	}
	postProcess(e) {
		let t = e.cellDataType;
		if (!t || typeof t != "string") return;
		let { dataTypeDefinitions: n, beans: r, formatValueFuncs: i } = this, a = n[t];
		a && r.colFilter?.setColDefPropsForDataType(e, a, i[t]);
	}
	getFormatValue(e) {
		return this.formatValueFuncs[e];
	}
	isColPendingInference(e) {
		return this.isPendingInference && !!this.columnStateUpdatesPendingInference[e];
	}
	setColDefPropertiesForBaseDataType(e, t, n, r) {
		let i = this.formatValueFuncs[t], a = this.columnDefinitionPropsPerDataType[n.baseDataType]({
			colDef: e,
			cellDataType: t,
			colModel: this.colModel,
			dataTypeDefinition: n,
			colId: r,
			formatValue: i,
			filterModuleBean: this.beans.filterManager
		});
		e.cellEditor === "agFormulaCellEditor" && a.cellEditor !== e.cellEditor && (a.cellEditor = e.cellEditor), Object.assign(e, a);
	}
	getDateObjectTypeDef(e) {
		let t = this.getLocaleTextFunc(), n = this.getDateIncludesTimeFlag(e);
		return {
			baseDataType: e,
			valueParser: (e) => Cu(e.newValue && String(e.newValue)),
			valueFormatter: (e) => e.value == null ? "" : !(e.value instanceof Date) || isNaN(e.value.getTime()) ? t("invalidDate", "Invalid Date") : bu(e.value, n) ?? "",
			dataTypeMatcher: (e) => e instanceof Date
		};
	}
	getDateStringTypeDef(e) {
		let t = this.getDateIncludesTimeFlag(e);
		return {
			baseDataType: e,
			dateParser: (e) => Cu(e) ?? void 0,
			dateFormatter: (e) => bu(e ?? null, t) ?? void 0,
			valueParser: (e) => xu(String(e.newValue)) ? e.newValue : null,
			valueFormatter: (e) => xu(String(e.value)) ? String(e.value) : "",
			dataTypeMatcher: (e) => typeof e == "string" && xu(e)
		};
	}
	getDefaultDataTypes() {
		let e = this.getLocaleTextFunc();
		return {
			number: {
				baseDataType: "number",
				valueParser: (e) => e.newValue?.trim?.() === "" ? null : Number(e.newValue),
				valueFormatter: (t) => t.value == null ? "" : typeof t.value != "number" || isNaN(t.value) ? e("invalidNumber", "Invalid Number") : String(t.value),
				dataTypeMatcher: (e) => typeof e == "number"
			},
			bigint: {
				baseDataType: "bigint",
				valueParser: (e) => {
					let { newValue: t } = e;
					return t == null || typeof t == "string" && t.trim() === "" ? null : hu(t);
				},
				valueFormatter: (t) => t.value == null ? "" : typeof t.value == "bigint" ? String(t.value) : e("invalidBigInt", "Invalid BigInt"),
				dataTypeMatcher: (e) => typeof e == "bigint"
			},
			text: {
				baseDataType: "text",
				valueParser: (e) => e.newValue === "" ? null : ae(e.newValue),
				dataTypeMatcher: (e) => typeof e == "string"
			},
			boolean: {
				baseDataType: "boolean",
				valueParser: (e) => e.newValue == null ? e.newValue : e.newValue?.trim?.() === "" ? null : String(e.newValue).toLowerCase() === "true",
				valueFormatter: (e) => e.value == null ? "" : String(e.value),
				dataTypeMatcher: (e) => typeof e == "boolean"
			},
			date: this.getDateObjectTypeDef("date"),
			dateString: this.getDateStringTypeDef("dateString"),
			dateTime: this.getDateObjectTypeDef("dateTime"),
			dateTimeString: {
				...this.getDateStringTypeDef("dateTimeString"),
				dataTypeMatcher: (e) => typeof e == "string" && Su(e)
			},
			object: {
				baseDataType: "object",
				valueParser: () => null,
				valueFormatter: (e) => ae(e.value) ?? ""
			}
		};
	}
	destroyColumnStateUpdateListeners() {
		for (let e of this.columnStateUpdateListenerDestroyFuncs) e();
		this.columnStateUpdateListenerDestroyFuncs = [];
	}
	destroy() {
		this.dataTypeDefinitions = {}, this.dataTypeMatchers = {}, this.formatValueFuncs = {}, this.columnStateUpdatesPendingInference = {}, this.destroyColumnStateUpdateListeners(), super.destroy();
	}
};
function Du(e, t) {
	let n = {
		...e,
		...t
	};
	return e.columnTypes && t.columnTypes && t.appendColumnTypes && (n.columnTypes = [...oi(e.columnTypes), ...oi(t.columnTypes)]), n;
}
function Ou(e, t, n) {
	return t ? t.baseDataType === e.baseDataType ? !0 : (W(46), !1) : (W(45, { parentCellDataType: n }), !1);
}
var ku = (e) => typeof e == "bigint" || typeof e == "number", Au = (e) => e === "number" || e === "bigint";
function ju(e, t) {
	if (e.valueFormatter) return (n) => {
		let { node: r, colDef: i, column: a, value: o } = n;
		if (r?.group) {
			let t = (i.pivotValueColumn ?? a).getAggFunc();
			if (t) {
				if (t === "first" || t === "last") return e.valueFormatter(n);
				let { baseDataType: r } = e;
				if (Au(r) && t !== "count") {
					if (ku(o)) return e.valueFormatter(n);
					if (o == null) return;
					if (typeof o == "object") {
						if (typeof o.toNumber == "function") return e.valueFormatter({
							...n,
							value: o.toNumber()
						});
						if ("value" in o) return e.valueFormatter({
							...n,
							value: o.value
						});
					}
				}
				return;
			}
		} else if (t.get("groupHideOpenParents") && n.column.isRowGroupActive() && typeof n.value == "string" && !e.dataTypeMatcher?.(n.value)) return;
		return e.valueFormatter(n);
	};
}
function Mu(e, t, n, r) {
	if (!t[n]) return !1;
	let i = e[n];
	return i === null ? (t[n] = !1, !1) : r === void 0 ? !!i : i === r;
}
function Nu(e, t) {
	if (e == null) return t == null ? 0 : -1;
	if (t == null) return 1;
	let n = hu(e), r = hu(t);
	return n != null && r != null ? n === r ? 0 : n > r ? 1 : -1 : 0;
}
function Pu(e, t) {
	if (e == null) return t == null ? 0 : -1;
	if (t == null) return 1;
	let n = Fu(e), r = Fu(t);
	return n != null && r != null ? n === r ? 0 : n > r ? 1 : -1 : 0;
}
function Fu(e) {
	let t = hu(e);
	return t == null ? null : t < 0n ? -t : t;
}
function Iu(e, t) {
	return [
		["cellRenderer", "agSparklineCellRenderer"],
		["valueGetter", void 0],
		["valueParser", void 0],
		["refData", void 0]
	].some(([n, r]) => Mu(e, t, n, r));
}
function Lu(e, t) {
	let n = Yl(e);
	for (let e of t) delete n[e], e === "rowGroup" ? delete n.rowGroupIndex : e === "pivot" && delete n.pivotIndex;
	return n;
}
var Ru = {
	moduleName: "DataType",
	version: U,
	beans: [Eu],
	dependsOn: [fu]
}, zu = {
	moduleName: "ColumnFlex",
	version: U,
	beans: [mu]
}, Bu = class extends H {
	constructor() {
		super(...arguments), this.beanName = "colNames";
	}
	getDisplayNameForColumn(e, t, n = !1) {
		if (!e) return null;
		let r = this.getHeaderName(e.getColDef(), e, null, null, t), { aggColNameSvc: i } = this.beans;
		return n && i ? i.getHeaderName(e, r) : r;
	}
	getDisplayNameForProvidedColumnGroup(e, t, n) {
		let r = t?.getColGroupDef();
		return r ? this.getHeaderName(r, null, e, t, n) : null;
	}
	getDisplayNameForColumnGroup(e, t) {
		return this.getDisplayNameForProvidedColumnGroup(e, e.getProvidedColumnGroup(), t);
	}
	getHeaderName(e, t, n, r, i) {
		let a = e.headerValueGetter;
		if (a) {
			let o = K(this.gos, {
				colDef: e,
				column: t,
				columnGroup: n,
				providedColumnGroup: r,
				location: i
			});
			return typeof a == "function" ? a(o) : typeof a == "string" ? this.beans.expressionSvc?.evaluate(a, o) ?? null : "";
		} else if (e.headerName != null) return e.headerName;
		else if (e.field) return fe(e.field);
		return "";
	}
}, Vu = class extends H {
	constructor() {
		super(...arguments), this.beanName = "colViewport", this.colsWithinViewport = [], this.headerColsWithinViewport = [], this.colsWithinViewportHash = "", this.rowsOfHeadersToRenderLeft = {}, this.rowsOfHeadersToRenderRight = {}, this.rowsOfHeadersToRenderCenter = {}, this.columnsToRenderLeft = [], this.columnsToRenderRight = [], this.columnsToRenderCenter = [];
	}
	wireBeans(e) {
		this.visibleCols = e.visibleCols, this.colModel = e.colModel;
	}
	postConstruct() {
		this.suppressColumnVirtualisation = this.gos.get("suppressColumnVirtualisation");
	}
	getScrollPosition() {
		return this.scrollPosition;
	}
	setScrollPosition(e, t, n = !1) {
		let { visibleCols: r } = this, i = r.isBodyWidthDirty;
		if (!(e === this.scrollWidth && t === this.scrollPosition && !i)) {
			if (this.scrollWidth = e, this.scrollPosition = t, r.isBodyWidthDirty = !0, this.gos.get("enableRtl")) {
				let n = r.bodyWidth;
				this.viewportLeft = n - t - e, this.viewportRight = n - t;
			} else this.viewportLeft = t, this.viewportRight = e + t;
			this.colModel.ready && this.checkViewportColumns(n);
		}
	}
	getColumnHeadersToRender(e) {
		switch (e) {
			case "left": return this.columnsToRenderLeft;
			case "right": return this.columnsToRenderRight;
			default: return this.columnsToRenderCenter;
		}
	}
	getHeadersToRender(e, t) {
		let n;
		switch (e) {
			case "left":
				n = this.rowsOfHeadersToRenderLeft[t];
				break;
			case "right":
				n = this.rowsOfHeadersToRenderRight[t];
				break;
			default:
				n = this.rowsOfHeadersToRenderCenter[t];
				break;
		}
		return n ?? [];
	}
	extractViewportColumns() {
		let e = this.visibleCols.centerCols;
		this.isColumnVirtualisationSuppressed() ? (this.colsWithinViewport = e, this.headerColsWithinViewport = e) : (this.colsWithinViewport = e.filter(this.isColumnInRowViewport.bind(this)), this.headerColsWithinViewport = e.filter(this.isColumnInHeaderViewport.bind(this)));
	}
	isColumnVirtualisationSuppressed() {
		return this.suppressColumnVirtualisation || this.viewportRight === 0;
	}
	clear() {
		this.rowsOfHeadersToRenderLeft = {}, this.rowsOfHeadersToRenderRight = {}, this.rowsOfHeadersToRenderCenter = {}, this.colsWithinViewportHash = "";
	}
	isColumnInHeaderViewport(e) {
		return e.isAutoHeaderHeight() || Hu(e) ? !0 : this.isColumnInRowViewport(e);
	}
	isColumnInRowViewport(e) {
		if (e.isAutoHeight()) return !0;
		let t = e.getLeft() || 0, n = t + e.getActualWidth(), r = this.viewportLeft - 200, i = this.viewportRight + 200;
		return !(t < r && n < r) && !(t > i && n > i);
	}
	getViewportColumns() {
		let { leftCols: e, rightCols: t } = this.visibleCols;
		return this.colsWithinViewport.concat(e).concat(t);
	}
	getColsWithinViewport(e) {
		if (!this.colModel.colSpanActive) return this.colsWithinViewport;
		let t = (e) => {
			let t = e.getLeft();
			return I(t) && t > this.viewportLeft;
		}, n = this.isColumnVirtualisationSuppressed() ? void 0 : this.isColumnInRowViewport.bind(this), { visibleCols: r } = this, i = r.centerCols;
		return r.getColsForRow(e, i, n, t);
	}
	checkViewportColumns(e = !1) {
		this.extractViewport() && this.eventSvc.dispatchEvent({
			type: "virtualColumnsChanged",
			afterScroll: e
		});
	}
	calculateHeaderRows() {
		let { leftCols: e, rightCols: t } = this.visibleCols;
		this.columnsToRenderLeft = e, this.columnsToRenderRight = t, this.columnsToRenderCenter = this.colsWithinViewport;
		let n = (e) => {
			let t = /* @__PURE__ */ new Set(), n = {};
			for (let r of e) {
				let e = r.getParent(), i = r.isSpanHeaderHeight();
				for (; e && !t.has(e);) {
					if (i && e.isPadding()) {
						e = e.getParent();
						continue;
					}
					let r = e.getProvidedColumnGroup().getLevel();
					n[r] ?? (n[r] = []), n[r].push(e), t.add(e), e = e.getParent();
				}
			}
			return n;
		};
		this.rowsOfHeadersToRenderLeft = n(e), this.rowsOfHeadersToRenderRight = n(t), this.rowsOfHeadersToRenderCenter = n(this.headerColsWithinViewport);
	}
	extractViewport() {
		let e = (e) => `${e.getId()}-${e.getPinned() || "normal"}`;
		this.extractViewportColumns();
		let t = this.getViewportColumns().map(e).join("#"), n = this.colsWithinViewportHash !== t;
		return n && (this.colsWithinViewportHash = t, this.calculateHeaderRows()), n;
	}
};
function Hu(e) {
	for (; e;) {
		if (e.isAutoHeaderHeight()) return !0;
		e = e.getParent();
	}
	return !1;
}
var Uu = {
	moduleName: "CellRendererFunction",
	version: U,
	beans: [class extends H {
		constructor() {
			super(...arguments), this.beanName = "agCompUtils";
		}
		adaptFunction(e, t) {
			if (!e.cellRenderer) return null;
			class n {
				refresh() {
					return !1;
				}
				getGui() {
					return this.eGui;
				}
				init(e) {
					let n = t(e), r = typeof n;
					if (r === "string" || r === "number" || r === "boolean") {
						this.eGui = it("<span>" + n + "</span>");
						return;
					}
					if (n == null) {
						this.eGui = Ks({ tag: "span" });
						return;
					}
					this.eGui = n;
				}
			}
			return n;
		}
	}]
}, Wu = class extends Nt {
	constructor() {
		super(...arguments), this.beanName = "registry";
	}
	registerDynamicBeans(e) {
		if (e) {
			this.dynamicBeans ??= {};
			for (let t of Object.keys(e)) this.dynamicBeans[t] = e[t];
		}
	}
	createDynamicBean(e, t, ...n) {
		if (!this.dynamicBeans) throw Error(this.getDynamicError(e, !0));
		let r = this.dynamicBeans[e];
		if (r == null) {
			if (t) throw Error(this.getDynamicError(e, !1));
			return;
		}
		return new r(...n);
	}
};
function Gu(e) {
	return typeof e == "object" && !!e.getComp;
}
var Ku = class extends Wu {
	constructor() {
		super(...arguments), this.agGridDefaults = {}, this.agGridDefaultOverrides = {}, this.jsComps = {}, this.selectors = {}, this.icons = {};
	}
	postConstruct() {
		let e = this.gos.get("components");
		if (e != null) for (let t of Object.keys(e)) this.jsComps[t] = e[t];
	}
	registerModule(e) {
		let { icons: t, userComponents: n, dynamicBeans: r, selectors: i } = e;
		if (n) {
			let e = (e, t, n, r) => {
				this.agGridDefaults[e] = t, (n || r) && (this.agGridDefaultOverrides[e] = {
					params: n,
					processParams: r
				});
			};
			for (let t of Object.keys(n)) {
				let r = n[t];
				if (Gu(r) && (r = r.getComp(this.beans)), typeof r == "object") {
					let { classImp: n, params: i, processParams: a } = r;
					e(t, n, i, a);
				} else e(t, r);
			}
		}
		this.registerDynamicBeans(r);
		for (let e of i ?? []) this.selectors[e.selector] = e;
		if (t) for (let e of Object.keys(t)) this.icons[e] = t[e];
	}
	getUserComponent(e, t) {
		let n = (e, t, n, r) => ({
			componentFromFramework: t,
			component: e,
			params: n,
			processParams: r
		}), { frameworkOverrides: r } = this.beans, i = r.frameworkComponent(t, this.gos.get("components"));
		if (i != null) return n(i, !0);
		let a = this.jsComps[t];
		if (a) return n(a, r.isFrameworkComponent(a));
		let o = this.agGridDefaults[t];
		if (o) {
			let e = this.agGridDefaultOverrides[t];
			return n(o, !1, e?.params, e?.processParams);
		}
		return this.beans.validation?.missingUserComponent(e, t, this.agGridDefaults, this.jsComps), null;
	}
	getSelector(e) {
		return this.selectors[e];
	}
	getIcon(e) {
		return this.icons[e];
	}
	getDynamicError(e, t) {
		return t ? Vn(279, { name: e }) : this.beans.validation?.missingDynamicBean(e) ?? Vn(256);
	}
}, qu = 23, Ju = class extends H {
	constructor() {
		super(...arguments), this.beanName = "ctrlsSvc", this.params = {}, this.ready = !1, this.readyCallbacks = [];
	}
	postConstruct() {
		this.addEventListener("ready", () => {
			if (this.updateReady(), this.ready) {
				for (let e of this.readyCallbacks) e(this.params);
				this.readyCallbacks.length = 0;
			}
		}, this.beans.frameworkOverrides.runWhenReadyAsync?.() ?? !1);
	}
	updateReady() {
		let e = Object.values(this.params);
		this.ready = e.length === qu && e.every((e) => e?.isAlive() ?? !1);
	}
	whenReady(e, t) {
		this.ready ? t(this.params) : this.readyCallbacks.push(t), e.addDestroyFunc(() => {
			let e = this.readyCallbacks.indexOf(t);
			e >= 0 && this.readyCallbacks.splice(e, 1);
		});
	}
	register(e, t) {
		this.params[e] = t, this.updateReady(), this.ready && this.dispatchLocalEvent({ type: "ready" }), t.addDestroyFunc(() => {
			this.updateReady();
		});
	}
	get(e) {
		return this.params[e];
	}
	getGridBodyCtrl() {
		return this.params.gridBodyCtrl;
	}
	getHeaderRowContainerCtrls() {
		let { leftHeader: e, centerHeader: t, rightHeader: n } = this.params;
		return [
			e,
			n,
			t
		];
	}
	getHeaderRowContainerCtrl(e) {
		let t = this.params;
		switch (e) {
			case "left": return t.leftHeader;
			case "right": return t.rightHeader;
			default: return t.centerHeader;
		}
	}
	getScrollFeature() {
		return this.getGridBodyCtrl().scrollFeature;
	}
}, Yu = ":where([class^=ag-]),:where([class^=ag-]):after,:where([class^=ag-]):before{box-sizing:border-box}:where([class^=ag-]):where(button){color:inherit}:where([class^=ag-]):where(div,span,label):focus-visible{box-shadow:inset var(--ag-focus-shadow);outline:none;&:where(.invalid){box-shadow:inset var(--ag-focus-error-shadow)}}:where([class^=ag-]) ::-ms-clear{display:none}.ag-hidden{display:none!important}.ag-invisible{visibility:hidden!important}.ag-tab-guard{display:block;height:0;position:absolute;width:0}.ag-tab-guard-top{top:1px}.ag-tab-guard-bottom{bottom:1px}.ag-measurement-container{height:0;overflow:hidden;visibility:hidden;width:0}.ag-measurement-element-border{display:inline-block}.ag-measurement-element-border:before{border-left:var(--ag-internal-measurement-border);content:\"\";display:block}.ag-popup-child{top:0;z-index:5}.ag-popup-child:where(:not(.ag-tooltip-custom)){box-shadow:var(--ag-popup-shadow)}.ag-input-wrapper,.ag-picker-field-wrapper{align-items:center;display:flex;flex:1 1 auto;line-height:normal;position:relative}.ag-input-field{align-items:center;display:flex;flex-direction:row}.ag-input-field-input:where(:not([type=checkbox],[type=radio])){flex:1 1 auto;min-width:0;width:100%}.ag-chart,.ag-dnd-ghost,.ag-external,.ag-popup,.ag-root-wrapper{cursor:default;line-height:normal;white-space:normal;-webkit-font-smoothing:antialiased;background-color:var(--ag-background-color);color:var(--ag-text-color);color-scheme:var(--ag-browser-color-scheme);font-family:var(--ag-font-family);font-size:var(--ag-font-size);font-weight:var(--ag-font-weight);--ag-indentation-level:0}:where(.ag-icon):before{align-items:center;background-color:currentcolor;color:inherit;content:\"\";display:flex;font-family:inherit;font-size:var(--ag-icon-size);font-style:normal;font-variant:normal;height:var(--ag-icon-size);justify-content:center;line-height:var(--ag-icon-size);-webkit-mask-size:contain;mask-size:contain;text-transform:none;width:var(--ag-icon-size)}.ag-icon{background-position:50%;background-repeat:no-repeat;background-size:contain;color:var(--ag-icon-color);display:block;height:var(--ag-icon-size);position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:var(--ag-icon-size)}.ag-disabled .ag-icon,[disabled] .ag-icon{opacity:.5}.ag-icon-grip.ag-disabled,.ag-icon-grip[disabled]{opacity:.35}.ag-icon-loading{animation-duration:1s;animation-iteration-count:infinite;animation-name:spin;animation-timing-function:linear}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.ag-resizer{pointer-events:none;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;z-index:1}:where(.ag-resizer){&.ag-resizer-topLeft{cursor:nwse-resize;height:5px;left:0;top:0;width:5px}&.ag-resizer-top{cursor:ns-resize;height:5px;left:5px;right:5px;top:0}&.ag-resizer-topRight{cursor:nesw-resize;height:5px;right:0;top:0;width:5px}&.ag-resizer-right{bottom:5px;cursor:ew-resize;right:0;top:5px;width:5px}&.ag-resizer-bottomRight{bottom:0;cursor:nwse-resize;height:5px;right:0;width:5px}&.ag-resizer-bottom{bottom:0;cursor:ns-resize;height:5px;left:5px;right:5px}&.ag-resizer-bottomLeft{bottom:0;cursor:nesw-resize;height:5px;left:0;width:5px}&.ag-resizer-left{bottom:5px;cursor:ew-resize;left:0;top:5px;width:5px}}.ag-menu{background-color:var(--ag-menu-background-color);border:var(--ag-menu-border);border-radius:var(--ag-border-radius);box-shadow:var(--ag-menu-shadow);color:var(--ag-menu-text-color);max-height:100%;overflow-y:auto;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none}", Xu = typeof window != "object" || !window?.document?.fonts?.forEach, Zu = !1, Qu = (e, t, n, r, i, a, o = !1) => {
	if (Xu || Zu) return;
	let s = e;
	r && (s = `@layer ${CSS.escape(r).replaceAll("\\.", ".")} { ${e} }`);
	let c = id.map.get(t);
	if (c || (c = [], id.map.set(t, c)), c.some((e) => e.injectedCss === s)) return;
	let l = document.createElement("style");
	a && l.setAttribute("nonce", a), l.dataset.agCss = n, l.dataset.agCssVersion = U, l.textContent = s;
	let u = {
		rawCss: e,
		injectedCss: s,
		el: l,
		priority: i,
		isParams: o
	}, d;
	for (let e of c) {
		if (e.priority > i) break;
		d = e;
	}
	if (d) {
		d.el.after(l);
		let e = c.indexOf(d);
		c.splice(e + 1, 0, u);
	} else t.nodeName === "STYLE" ? t.after(l) : t.insertBefore(l, t.querySelector(":not(title, meta)")), c.push(u);
}, $u = (e, t, n, r) => {
	Qu(Yu, e, "shared", t, 0, n), r?.forEach((r, i) => r.forEach((r) => Qu(r, e, i, t, 0, n)));
}, ed = (e, t, n, r, i, a) => {
	if (Xu || Zu) return;
	let o = id.grids.get(e);
	o ? o.paramsCss = t : id.grids.set(e, {
		styleContainer: r,
		paramsCss: t
	}), nd(r), t && n && Qu(t, r, n, i, 2, a, !0);
}, td = (e) => {
	let t = id.grids.get(e)?.styleContainer;
	t && (id.grids.delete(e), Array.from(id.grids.values()).some((e) => e.styleContainer === t) ? nd(t) : (nd(t, !0), id.map.delete(t)));
}, nd = (e, t = !1) => {
	let n = /* @__PURE__ */ new Set();
	for (let t of id.grids.values()) t.styleContainer === e && n.add(t.paramsCss);
	let r = id.map.get(e) ?? [];
	for (let e = r.length - 1; e >= 0; e--) (t || r[e].isParams && !n.has(r[e].rawCss)) && (r[e].el.remove(), r.splice(e, 1));
}, rd = () => {
	let e = globalThis.agStyleInjectionVersions ?? (globalThis.agStyleInjectionVersions = /* @__PURE__ */ new Map()), t = e.get(U);
	return t || (t = {
		map: /* @__PURE__ */ new WeakMap(),
		grids: /* @__PURE__ */ new Map(),
		paramsId: 0
	}, e.set(U, t)), t;
}, id = rd(), ad = (e) => new cd(e), od = "$default", sd = 0, cd = class {
	constructor({ feature: e, params: t, modeParams: n = {}, css: r, cssImports: i }) {
		this.feature = e, this.css = r, this.cssImports = i, this.modeParams = {
			[od]: {
				...n[od] ?? {},
				...t ?? {}
			},
			...n
		};
	}
	use(e, t, n) {
		let r = this._inject;
		if (r == null) {
			let { css: e } = this;
			if (e) {
				let t = `ag-theme-${this.feature ?? "part"}-${++sd}`;
				typeof e == "function" && (e = e()), e = `:where(.${t}) {
${e}
}
`;
				for (let t of this.cssImports ?? []) e = `@import url(${JSON.stringify(t)});
${e}`;
				r = {
					css: e,
					class: t
				};
			} else r = !1;
			this._inject = r;
		}
		return r && e && Qu(r.css, e, r.class, t, 1, n), r ? r.class : !1;
	}
}, ld = (e) => e.replace(/[A-Z]|\d+/g, (e) => `-${e}`).toLowerCase(), ud = (e) => `--ag-${ld(e)}`, dd = (e) => `var(${ud(e)})`, fd = (e, t, n) => Math.max(t, Math.min(n, e)), pd = (e) => {
	let t = /* @__PURE__ */ new Map();
	return (n) => {
		let r = n;
		return t.has(r) || t.set(r, e(n)), t.get(r);
	};
}, md = (e) => ({
	ref: "accentColor",
	mix: e
}), hd = (e) => ({
	ref: "foregroundColor",
	mix: e
}), gd = (e) => ({
	ref: "foregroundColor",
	mix: e,
	onto: "backgroundColor"
}), _d = (e) => ({
	ref: "foregroundColor",
	mix: e,
	onto: "headerBackgroundColor"
}), Q = { ref: "backgroundColor" }, vd = { ref: "foregroundColor" }, yd = { ref: "accentColor" }, bd = {
	backgroundColor: "#fff",
	foregroundColor: "#181d1f",
	borderColor: hd(.15),
	chromeBackgroundColor: gd(.02),
	browserColorScheme: "light"
}, xd = {
	...bd,
	textColor: vd,
	accentColor: "#2196f3",
	invalidColor: "#e02525",
	fontFamily: [
		"-apple-system",
		"BlinkMacSystemFont",
		"Segoe UI",
		"Roboto",
		"Oxygen-Sans",
		"Ubuntu",
		"Cantarell",
		"Helvetica Neue",
		"sans-serif"
	],
	subtleTextColor: {
		ref: "textColor",
		mix: .5
	},
	borderWidth: 1,
	borderRadius: 4,
	spacing: 8,
	fontSize: 14,
	fontWeight: "inherit",
	focusShadow: {
		spread: 3,
		color: md(.5)
	},
	focusErrorShadow: {
		spread: 3,
		color: {
			ref: "invalidColor",
			onto: "backgroundColor",
			mix: .5
		}
	},
	popupShadow: "0 0 16px #00000026",
	cardShadow: "0 1px 4px 1px #00000018",
	dropdownShadow: { ref: "cardShadow" },
	listItemHeight: { calc: "max(iconSize, dataFontSize) + widgetVerticalSpacing" },
	dragAndDropImageBackgroundColor: Q,
	dragAndDropImageBorder: !0,
	dragAndDropImageNotAllowedBorder: { color: {
		ref: "invalidColor",
		onto: "dragAndDropImageBackgroundColor",
		mix: .5
	} },
	dragAndDropImageShadow: { ref: "popupShadow" },
	iconSize: 16,
	iconColor: "inherit",
	toggleButtonWidth: 28,
	toggleButtonHeight: 18,
	toggleButtonOnBackgroundColor: yd,
	toggleButtonOffBackgroundColor: gd(.3),
	toggleButtonSwitchBackgroundColor: Q,
	toggleButtonSwitchInset: 2,
	tooltipBackgroundColor: { ref: "chromeBackgroundColor" },
	tooltipErrorBackgroundColor: {
		ref: "invalidColor",
		onto: "backgroundColor",
		mix: .1
	},
	tooltipTextColor: { ref: "textColor" },
	tooltipErrorTextColor: { ref: "invalidColor" },
	tooltipBorder: !0,
	tooltipErrorBorder: { color: {
		ref: "invalidColor",
		onto: "backgroundColor",
		mix: .25
	} },
	panelBackgroundColor: Q,
	panelTitleBarHeight: { ref: "headerHeight" },
	panelTitleBarBackgroundColor: { ref: "headerBackgroundColor" },
	panelTitleBarIconColor: { ref: "headerTextColor" },
	panelTitleBarTextColor: { ref: "headerTextColor" },
	panelTitleBarFontFamily: { ref: "headerFontFamily" },
	panelTitleBarFontSize: { ref: "headerFontSize" },
	panelTitleBarFontWeight: { ref: "headerFontWeight" },
	panelTitleBarBorder: !0,
	dialogShadow: { ref: "popupShadow" },
	dialogBorder: { color: hd(.2) },
	widgetContainerHorizontalPadding: { calc: "spacing * 1.5" },
	widgetContainerVerticalPadding: { calc: "spacing * 1.5" },
	widgetHorizontalSpacing: { calc: "spacing * 1.5" },
	widgetVerticalSpacing: { ref: "spacing" },
	dataFontSize: { ref: "fontSize" },
	headerBackgroundColor: { ref: "chromeBackgroundColor" },
	headerFontFamily: { ref: "fontFamily" },
	headerFontSize: { ref: "fontSize" },
	headerFontWeight: 500,
	headerTextColor: { ref: "textColor" },
	headerHeight: { calc: "max(iconSize, dataFontSize) + spacing * 4 * headerVerticalPaddingScale" },
	headerVerticalPaddingScale: 1,
	menuBorder: { color: hd(.2) },
	menuBackgroundColor: gd(.03),
	menuTextColor: gd(.95),
	menuShadow: { ref: "popupShadow" },
	menuSeparatorColor: { ref: "borderColor" }
}, Sd = [
	"colorScheme",
	"color",
	"length",
	"scale",
	"borderStyle",
	"border",
	"shadow",
	"image",
	"fontFamily",
	"fontWeight",
	"duration"
], Cd = pd((e) => (e = e.toLowerCase(), Sd.find((t) => e.endsWith(t.toLowerCase())) ?? "length")), wd = (e) => typeof e == "object" && e?.ref ? dd(e.ref) : typeof e == "string" ? e : typeof e == "number" ? String(e) : !1, Td = (e) => {
	if (typeof e == "string") return e;
	if (typeof e == "object" && e && "ref" in e) {
		let t = dd(e.ref);
		return e.mix == null ? t : `color-mix(in srgb, ${e.onto ? dd(e.onto) : "transparent"}, ${t} ${fd(e.mix * 100, 0, 100)}%)`;
	}
	return !1;
}, Ed = wd, Dd = (e) => typeof e == "string" ? e : typeof e == "number" ? `${e}px` : typeof e == "object" && e && "calc" in e ? `calc(${e.calc.replace(/ ?[*/+] ?/g, " $& ").replace(/-?\b[a-z][a-z0-9]*\b(?![-(])/gi, (e) => e[0] === "-" ? e : " " + dd(e) + " ")})` : typeof e == "object" && e && "ref" in e ? dd(e.ref) : !1, Od = wd, kd = (e, t) => typeof e == "string" ? e : e === !0 ? kd({}, t) : e === !1 ? t === "columnBorder" ? kd({ color: "transparent" }, t) : "none" : typeof e == "object" && e && "ref" in e ? dd(e.ref) : Md(e.style ?? "solid") + " " + Dd(e.width ?? { ref: "borderWidth" }) + " " + Td(e.color ?? { ref: "borderColor" }), Ad = (e) => [
	Dd(e.offsetX ?? 0),
	Dd(e.offsetY ?? 0),
	Dd(e.radius ?? 0),
	Dd(e.spread ?? 0),
	Td(e.color ?? { ref: "foregroundColor" }),
	...e.inset ? ["inset"] : []
].join(" "), jd = (e) => typeof e == "string" ? e : e === !1 ? "none" : typeof e == "object" && e && "ref" in e ? dd(e.ref) : Array.isArray(e) ? e.map(Ad).join(", ") : Ad(e), Md = wd, Nd = (e) => typeof e == "string" ? e.includes(",") ? e : Pd(e) : typeof e == "object" && e && "googleFont" in e ? Nd(e.googleFont) : typeof e == "object" && e && "ref" in e ? dd(e.ref) : Array.isArray(e) ? e.map((e) => (typeof e == "object" && "googleFont" in e && (e = e.googleFont), Pd(e))).join(", ") : !1, Pd = (e) => /^[\w-]+$|\w\(/.test(e) ? e : JSON.stringify(e), Fd = wd, Id = (e) => typeof e == "string" ? e : typeof e == "object" && e && "url" in e ? `url(${JSON.stringify(e.url)})` : typeof e == "object" && e && "svg" in e ? Id({ url: `data:image/svg+xml,${encodeURIComponent(e.svg)}` }) : typeof e == "object" && e && "ref" in e ? dd(e.ref) : !1, Ld = {
	color: Td,
	colorScheme: Ed,
	length: Dd,
	scale: Od,
	border: kd,
	borderStyle: Md,
	shadow: jd,
	image: Id,
	fontFamily: Nd,
	fontWeight: Fd,
	duration: (e, t, n) => typeof e == "string" ? e : typeof e == "number" ? (e >= 10 && n?.warn(104, {
		value: e,
		param: t
	}), `${e}s`) : typeof e == "object" && e && "ref" in e ? dd(e.ref) : !1
}, Rd = (e, t, n) => Ld[Cd(e)](t, e, n), zd = (e, t) => new Bd({
	themeLogger: e,
	overridePrefix: t
}), Bd = class e {
	constructor(e, t = []) {
		this.params = e, this.parts = t;
	}
	withPart(t) {
		return typeof t == "function" && (t = t()), t instanceof cd ? new e(this.params, [...this.parts, t]) : (this.params.themeLogger.preInitErr(259, "Invalid part", { part: t }), this);
	}
	withoutPart(e) {
		return this.withPart(ad({ feature: e }));
	}
	withParams(e, t = od) {
		return this.withPart(ad({ modeParams: { [t]: e } }));
	}
	_startUse({ styleContainer: e, cssLayer: t, nonce: n, loadThemeGoogleFonts: r, moduleCss: i }) {
		if (Xu || Zu) return;
		Wd(), $u(e, t, n, i);
		let a = Hd(this);
		if (a.length > 0) for (let e of a) r && Gd(e, n);
		for (let r of this.parts) r.use(e, t, n);
	}
	_getCssClass() {
		return Zu ? "ag-theme-quartz" : this._cssClassCache ??= Vd(this.parts).map((e) => e.use(void 0, void 0, void 0)).filter(Boolean).concat(this._getParamsClassName()).join(" ");
	}
	_getParamsClassName() {
		return this._paramsClassName ??= `ag-theme-params-${++rd().paramsId}`;
	}
	_getModeParams() {
		let e = this._paramsCache;
		if (!e) {
			let t = { [od]: { ...xd } };
			for (let e of Vd(this.parts)) for (let n of Object.keys(e.modeParams)) {
				let r = e.modeParams[n];
				if (r) {
					let e = t[n] ?? (t[n] = {}), i = /* @__PURE__ */ new Set();
					for (let t of Object.keys(r)) {
						let n = r[t];
						n !== void 0 && (e[t] = n, i.add(t));
					}
					if (n === od) for (let e of Object.keys(t)) {
						let n = t[e];
						if (e !== od) for (let e of i) delete n[e];
					}
				}
			}
			this._paramsCache = e = t;
		}
		return e;
	}
	_getParamsCss() {
		if (!this._paramsCssCache) {
			let e = "", t = "", n = this._getModeParams(), { overridePrefix: r, themeLogger: i } = this.params, a = r ? `--ag-${r}-` : void 0;
			for (let r of Object.keys(n)) {
				let o = n[r];
				if (r !== od) {
					let n = `:where([data-ag-theme-mode="${typeof CSS == "object" ? CSS.escape(r) : r}"]) & {
`;
					e += n, t += n;
				}
				for (let n of Object.keys(o).sort()) {
					let r = o[n], s = Rd(n, r, i);
					if (s === !1) i.error(107, {
						key: n,
						value: r
					});
					else {
						let r = ud(n), i = a ? r.replace("--ag-", a) : r, o = r.replace("--ag-", "--ag-inherited-");
						e += `	${r}: var(${o}, ${s});
`, t += `	${o}: var(${i});
`;
					}
				}
				r !== od && (e += "}\n", t += "}\n");
			}
			let o = `:where(.${this._getParamsClassName()})`, s = `${o} {
${e}}
`;
			s += `:has(> ${o}):not(${o}) {
${t}}
`, this._paramsCssCache = s;
		}
		return this._paramsCssCache;
	}
}, Vd = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let n of e) t.set(n.feature, n);
	let n = [];
	for (let r of e) (!r.feature || t.get(r.feature) === r) && n.push(r);
	return n;
}, Hd = (e) => {
	let t = /* @__PURE__ */ new Set(), n = (e) => {
		if (Array.isArray(e)) e.forEach(n);
		else {
			let n = e?.googleFont;
			typeof n == "string" && t.add(n);
		}
	};
	return Object.values(e._getModeParams()).flatMap((e) => Object.values(e)).forEach(n), Array.from(t).sort();
}, Ud = !1, Wd = () => {
	if (!Ud) {
		Ud = !0;
		for (let e of Array.from(document.head.querySelectorAll("style[data-ag-scope=\"legacy\"]"))) e.remove();
	}
}, Gd = async (e, t) => {
	Qu(`@import url('https://${Kd}/css2?family=${encodeURIComponent(e)}:wght@100;200;300;400;500;600;700;800;900&display=swap');
`, document.head, `googleFont:${e}`, void 0, 0, t);
}, Kd = "fonts.googleapis.com", qd = {
	changeKey: "listItemHeight",
	type: "length",
	defaultValue: 24
}, Jd = class extends Nt {
	constructor() {
		super(...arguments), this.beanName = "environment", this.sizeEls = /* @__PURE__ */ new Map(), this.lastKnownValues = /* @__PURE__ */ new Map(), this.sizesMeasured = !1, this.globalCSS = [];
	}
	wireBeans(e) {
		this.eRootDiv = e.eRootDiv;
	}
	postConstruct() {
		let { gos: e, eRootDiv: t } = this;
		e.setInstanceDomData(t);
		let n = e.get("themeStyleContainer"), r = typeof ShadowRoot < "u", i = r && t.getRootNode() instanceof ShadowRoot;
		this.eStyleContainer = (typeof n == "function" ? n() : n) ?? (i ? t : document.head), !n && !i && r && Xd(t, this.shadowRootError.bind(this), this.addDestroyFunc.bind(this)), this.cssLayer = e.get("themeCssLayer"), this.styleNonce = e.get("styleNonce"), this.addManagedPropertyListener("theme", () => this.handleThemeChange()), this.handleThemeChange(), this.getSizeEl(qd), this.initVariables(), this.addDestroyFunc(() => td(this)), this.mutationObserver = new MutationObserver(() => {
			this.fireStylesChangedEvent("theme");
		}), this.addDestroyFunc(() => this.mutationObserver.disconnect());
	}
	applyThemeClasses(e, t = []) {
		let { theme: n } = this, r = n ? n._getCssClass() : this.applyLegacyThemeClasses();
		for (let t of Array.from(e.classList)) t.startsWith("ag-theme-") && e.classList.remove(t);
		if (r) {
			let n = e.className;
			e.className = `${n}${n ? " " : ""}${r}${t?.length ? " " + t.join(" ") : ""}`;
		}
	}
	applyLegacyThemeClasses() {
		let e = "";
		this.mutationObserver.disconnect();
		let t = this.eRootDiv;
		for (; t;) {
			let n = !1;
			for (let r of Array.from(t.classList)) r.startsWith("ag-theme-") && (n = !0, e = e ? `${e} ${r}` : r);
			n && this.mutationObserver.observe(t, {
				attributes: !0,
				attributeFilter: ["class"]
			}), t = t.parentElement;
		}
		return e;
	}
	addGlobalCSS(e, t) {
		this.theme ? Qu(e, this.eStyleContainer, t, this.cssLayer, 0, this.styleNonce) : this.globalCSS.push([e, t]);
	}
	getDefaultListItemHeight() {
		return this.getCSSVariablePixelValue(qd);
	}
	getCSSVariablePixelValue(e) {
		let t = this.lastKnownValues.get(e);
		if (t != null) return t;
		let n = this.measureSizeEl(e);
		return n === "detached" || n === "no-styles" ? (e.cacheDefault && this.lastKnownValues.set(e, e.defaultValue), e.defaultValue) : (this.lastKnownValues.set(e, n), n);
	}
	measureSizeEl(e) {
		let t = this.getSizeEl(e);
		if (t.offsetParent == null) return "detached";
		let n = t.offsetWidth;
		return n === Yd ? "no-styles" : (this.sizesMeasured = !0, n);
	}
	getMeasurementContainer() {
		let e = this.eMeasurementContainer;
		return e || (e = this.eMeasurementContainer = _t({
			tag: "div",
			cls: "ag-measurement-container"
		}), this.eRootDiv.appendChild(e)), e;
	}
	getSizeEl(e) {
		let t = this.sizeEls.get(e);
		if (t) return t;
		let n = this.getMeasurementContainer();
		t = _t({ tag: "div" });
		let r = this.setSizeElStyles(t, e);
		n.appendChild(t), this.sizeEls.set(e, t);
		let { type: i, noWarn: a } = e;
		if (i !== "length" && i !== "border") return t;
		let o = this.measureSizeEl(e);
		o === "no-styles" && !a && this.varError(r, e.defaultValue);
		let s = ft(this.beans, t, () => {
			let t = this.measureSizeEl(e);
			t === "detached" || t === "no-styles" || (this.lastKnownValues.set(e, t), t !== o && (o = t, this.fireStylesChangedEvent(e.changeKey)));
		});
		return this.addDestroyFunc(() => s()), t;
	}
	setSizeElStyles(e, t) {
		let { changeKey: n, type: r } = t, i = ud(n);
		return r === "border" ? (i.endsWith("-width") && (i = i.slice(0, -6)), e.className = "ag-measurement-element-border", e.style.setProperty("--ag-internal-measurement-border", `var(${i}, solid ${Yd}px)`)) : e.style.width = `var(${i}, ${Yd}px)`, i;
	}
	handleThemeChange() {
		let { gos: e, theme: t } = this, n = e.get("theme"), r;
		if (n === "legacy") r = void 0;
		else {
			let e = n ?? this.getDefaultTheme();
			e instanceof Bd ? r = e : this.themeError(e);
		}
		r !== t && this.handleNewTheme(r), this.postProcessThemeChange(r, n);
	}
	handleNewTheme(e) {
		let { gos: t, eRootDiv: n, globalCSS: r } = this, i = this.getAdditionalCss();
		if (e) {
			$u(this.eStyleContainer, this.cssLayer, this.styleNonce, i);
			for (let [e, t] of r) Qu(e, this.eStyleContainer, t, this.cssLayer, 0, this.styleNonce);
			r.length = 0;
		}
		this.theme = e, e?._startUse({
			loadThemeGoogleFonts: t.get("loadThemeGoogleFonts"),
			styleContainer: this.eStyleContainer,
			cssLayer: this.cssLayer,
			nonce: this.styleNonce,
			moduleCss: i
		}), ed(this, e?._getParamsCss() ?? null, e?._getParamsClassName() ?? null, this.eStyleContainer, this.cssLayer, this.styleNonce), this.applyThemeClasses(n), this.fireStylesChangedEvent("theme");
	}
	fireStylesChangedEvent(e) {
		this.eventSvc.dispatchEvent({
			type: "stylesChanged",
			[`${e}Changed`]: !0
		});
	}
}, Yd = 15538, Xd = (e, t, n) => {
	let r = 60, i = setInterval(() => {
		typeof ShadowRoot < "u" && e.getRootNode() instanceof ShadowRoot && (t(), clearInterval(i)), (e.isConnected || --r < 0) && clearInterval(i);
	}, 1e3);
	n(() => clearInterval(i));
}, Zd = ".ag-aria-description-container{border:0;z-index:9999;clip:rect(1px,1px,1px,1px);height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.ag-unselectable{-webkit-user-select:none;-moz-user-select:none;user-select:none}.ag-selectable{-webkit-user-select:text;-moz-user-select:text;user-select:text}.ag-shake-left-to-right{animation-direction:alternate;animation-duration:.2s;animation-iteration-count:infinite;animation-name:ag-shake-left-to-right}@keyframes ag-shake-left-to-right{0%{padding-left:6px;padding-right:2px}to{padding-left:2px;padding-right:6px}}.ag-body-horizontal-scroll-viewport,.ag-body-vertical-scroll-viewport,.ag-body-viewport,.ag-center-cols-viewport,.ag-floating-bottom-viewport,.ag-floating-top-viewport,.ag-header-viewport,.ag-sticky-bottom-viewport,.ag-sticky-top-viewport{flex:1 1 auto;height:100%;min-width:0;overflow:hidden;position:relative}.ag-viewport{position:relative}.ag-spanning-container{position:absolute;top:0;z-index:1}.ag-body-viewport,.ag-center-cols-viewport,.ag-floating-bottom-viewport,.ag-floating-top-viewport,.ag-header-viewport,.ag-sticky-bottom-viewport,.ag-sticky-top-viewport{overflow-x:auto;-ms-overflow-style:none!important;scrollbar-width:none!important}.ag-body-viewport::-webkit-scrollbar,.ag-center-cols-viewport::-webkit-scrollbar,.ag-floating-bottom-viewport::-webkit-scrollbar,.ag-floating-top-viewport::-webkit-scrollbar,.ag-header-viewport::-webkit-scrollbar,.ag-sticky-bottom-viewport::-webkit-scrollbar,.ag-sticky-top-viewport::-webkit-scrollbar{display:none!important}.ag-body-viewport{display:flex;overflow-x:hidden;&:where(.ag-layout-normal){overflow-y:auto;-webkit-overflow-scrolling:touch}}.ag-floating-bottom-container,.ag-floating-top-container,.ag-sticky-bottom-container,.ag-sticky-top-container{min-height:1px}.ag-center-cols-viewport{min-height:100%;width:100%}.ag-body-horizontal-scroll-viewport{overflow-x:scroll}.ag-body-vertical-scroll-viewport{overflow-y:scroll}.ag-body-container,.ag-body-horizontal-scroll-container,.ag-body-vertical-scroll-container,.ag-center-cols-container,.ag-floating-bottom-container,.ag-floating-bottom-full-width-container,.ag-floating-top-container,.ag-full-width-container,.ag-header-container,.ag-pinned-left-cols-container,.ag-pinned-left-sticky-bottom,.ag-pinned-right-cols-container,.ag-pinned-right-sticky-bottom,.ag-sticky-bottom-container,.ag-sticky-top-container{position:relative}.ag-floating-bottom-container,.ag-floating-top-container,.ag-header-container,.ag-pinned-left-floating-bottom,.ag-pinned-left-floating-top,.ag-pinned-right-floating-bottom,.ag-pinned-right-floating-top,.ag-sticky-bottom-container,.ag-sticky-top-container{height:100%;white-space:nowrap}.ag-center-cols-container,.ag-pinned-right-cols-container{display:block}.ag-body-horizontal-scroll-container{height:100%}.ag-body-vertical-scroll-container{width:100%}.ag-floating-bottom-full-width-container,.ag-floating-top-full-width-container,.ag-full-width-container,.ag-sticky-bottom-full-width-container,.ag-sticky-top-full-width-container{pointer-events:none;position:absolute;top:0}:where(.ag-ltr) .ag-floating-bottom-full-width-container,:where(.ag-ltr) .ag-floating-top-full-width-container,:where(.ag-ltr) .ag-full-width-container,:where(.ag-ltr) .ag-sticky-bottom-full-width-container,:where(.ag-ltr) .ag-sticky-top-full-width-container{left:0}:where(.ag-rtl) .ag-floating-bottom-full-width-container,:where(.ag-rtl) .ag-floating-top-full-width-container,:where(.ag-rtl) .ag-full-width-container,:where(.ag-rtl) .ag-sticky-bottom-full-width-container,:where(.ag-rtl) .ag-sticky-top-full-width-container{right:0}.ag-full-width-container{width:100%}.ag-floating-bottom-full-width-container,.ag-floating-top-full-width-container{display:inline-block;height:100%;overflow:hidden;width:100%}.ag-body{display:flex;flex:1 1 auto;flex-direction:row!important;min-height:0;position:relative}.ag-body-horizontal-scroll,.ag-body-vertical-scroll{display:flex;min-height:0;min-width:0;position:relative;&:where(.ag-scrollbar-invisible){bottom:0;position:absolute;&:where(.ag-apple-scrollbar){opacity:0;transition:opacity .4s;visibility:hidden;&:where(.ag-scrollbar-active),&:where(.ag-scrollbar-scrolling){opacity:1;visibility:visible}}}}.ag-body-horizontal-scroll{width:100%;&:where(.ag-scrollbar-invisible){left:0;right:0}}.ag-body-vertical-scroll{height:100%;&:where(.ag-scrollbar-invisible){top:0;z-index:10}}:where(.ag-ltr) .ag-body-vertical-scroll{&:where(.ag-scrollbar-invisible){right:0}}:where(.ag-rtl) .ag-body-vertical-scroll{&:where(.ag-scrollbar-invisible){left:0}}.ag-force-vertical-scroll{overflow-y:scroll!important}.ag-horizontal-left-spacer,.ag-horizontal-right-spacer{height:100%;min-width:0;overflow-x:scroll;&:where(.ag-scroller-corner){overflow-x:hidden}}:where(.ag-row-animation) .ag-row{transition:transform .4s,top .4s,opacity .2s;&:where(.ag-after-created){transition:transform .4s,top .4s,height .4s,opacity .2s}}:where(.ag-row-animation.ag-prevent-animation) .ag-row{transition:none!important;&:where(.ag-row.ag-after-created){transition:none!important}}:where(.ag-row-no-animation) .ag-row{transition:none}.ag-row-loading{align-items:center;display:flex}.ag-row-position-absolute{position:absolute}.ag-row-position-relative{position:relative}.ag-full-width-row{overflow:hidden;pointer-events:all}.ag-row-inline-editing{z-index:1}.ag-row-dragging{z-index:2}.ag-stub-cell{align-items:center;display:flex}.ag-cell{display:inline-block;height:100%;position:absolute;white-space:nowrap;&:focus-visible{box-shadow:none}}.ag-cell-value{flex:1 1 auto}.ag-cell-value:not(.ag-allow-overflow),.ag-group-value{overflow:hidden;text-overflow:ellipsis}.ag-cell-wrap-text{white-space:normal;word-break:break-word}:where(.ag-cell) .ag-icon{display:inline-block;vertical-align:middle}.ag-floating-top{display:flex;overflow:hidden;position:relative;white-space:nowrap;width:100%}:where(.ag-floating-top:not(.ag-invisible)){border-bottom:var(--ag-pinned-row-border)}.ag-floating-bottom{display:flex;overflow:hidden;position:relative;white-space:nowrap;width:100%}:where(.ag-floating-bottom:not(.ag-invisible)){border-top:var(--ag-pinned-row-border)}.ag-sticky-bottom,.ag-sticky-top{background-color:var(--ag-data-background-color);display:flex;height:0;overflow:hidden;position:absolute;width:100%;z-index:1}.ag-sticky-bottom{box-sizing:content-box!important;:where(.ag-pinned-left-sticky-bottom),:where(.ag-pinned-right-sticky-bottom),:where(.ag-sticky-bottom-container){border-top:var(--ag-row-border);box-sizing:border-box}}.ag-opacity-zero{opacity:0!important}.ag-cell-label-container{align-items:center;display:flex;flex-direction:row-reverse;height:100%;justify-content:space-between;width:100%}:where(.ag-right-aligned-header){.ag-cell-label-container{flex-direction:row}.ag-header-cell-text{text-align:end}}.ag-column-group-icons{display:block;:where(.ag-column-group-closed-icon),:where(.ag-column-group-opened-icon){cursor:pointer}}:where(.ag-ltr){direction:ltr;.ag-body,.ag-body-horizontal-scroll,.ag-body-viewport,.ag-floating-bottom,.ag-floating-top,.ag-header,.ag-sticky-bottom,.ag-sticky-top{flex-direction:row}}:where(.ag-rtl){direction:rtl;text-align:right;.ag-body,.ag-body-horizontal-scroll,.ag-body-viewport,.ag-floating-bottom,.ag-floating-top,.ag-header,.ag-sticky-bottom,.ag-sticky-top{flex-direction:row-reverse}.ag-icon-contracted,.ag-icon-expanded,.ag-icon-tree-closed{display:block}}:where(.ag-rtl){.ag-icon-contracted,.ag-icon-expanded,.ag-icon-tree-closed{transform:rotate(180deg)}}:where(.ag-rtl){.ag-icon-contracted,.ag-icon-expanded,.ag-icon-tree-closed{transform:rotate(-180deg)}}:where(.ag-ltr) .ag-row:not(.ag-row-level-0) .ag-pivot-leaf-group{margin-left:var(--ag-row-group-indent-size)}:where(.ag-rtl) .ag-row:not(.ag-row-level-0) .ag-pivot-leaf-group{margin-right:var(--ag-row-group-indent-size)}:where(.ag-ltr) .ag-row-group-leaf-indent{margin-left:calc(var(--ag-cell-widget-spacing) + var(--ag-icon-size))}:where(.ag-rtl) .ag-row-group-leaf-indent{margin-right:calc(var(--ag-cell-widget-spacing) + var(--ag-icon-size))}.ag-value-change-delta{padding:0 2px}.ag-value-change-delta-up{color:var(--ag-value-change-delta-up-color)}.ag-value-change-delta-down{color:var(--ag-value-change-delta-down-color)}.ag-value-change-value{background-color:transparent;border-radius:1px;padding-left:1px;padding-right:1px;transition:background-color 1s}.ag-value-change-value-highlight{background-color:var(--ag-value-change-value-highlight-background-color);transition:background-color .1s}.ag-cell-data-changed{background-color:var(--ag-value-change-value-highlight-background-color)!important}.ag-cell-data-changed-animation{background-color:transparent}.ag-cell-highlight{background-color:var(--ag-range-selection-highlight-color)!important}.ag-row,.ag-spanned-row{color:var(--ag-cell-text-color);font-family:var(--ag-cell-font-family);font-size:var(--ag-cell-font-size);font-weight:var(--ag-cell-font-weight);white-space:nowrap;--ag-internal-content-line-height:calc(min(var(--ag-row-height), var(--ag-line-height, 1000px)) - var(--ag-internal-row-border-width, 1px) - 2px)}.ag-row{background-color:var(--ag-data-background-color);border-bottom:var(--ag-row-border);height:var(--ag-row-height);width:100%;&.ag-row-editing-invalid{background-color:var(--ag-full-row-edit-invalid-background-color)}}:where(.ag-body-vertical-content-no-gap>div>div>div,.ag-body-vertical-content-no-gap>div>div>div>div)>.ag-row-last{border-bottom-color:transparent}.ag-group-contracted,.ag-group-expanded{cursor:pointer}.ag-cell,.ag-full-width-row .ag-cell-wrapper.ag-row-group{border:1px solid transparent;line-height:var(--ag-internal-content-line-height);-webkit-font-smoothing:subpixel-antialiased}:where(.ag-ltr) .ag-cell{border-right:var(--ag-column-border)}:where(.ag-rtl) .ag-cell{border-left:var(--ag-column-border)}.ag-spanned-cell-wrapper{background-color:var(--ag-data-background-color);position:absolute}.ag-spanned-cell-wrapper>.ag-spanned-cell{display:block;position:relative}:where(.ag-ltr) :where(.ag-body-horizontal-content-no-gap) .ag-column-last{border-right-color:transparent}:where(.ag-rtl) :where(.ag-body-horizontal-content-no-gap) .ag-column-last{border-left-color:transparent}.ag-cell-wrapper{align-items:center;display:flex;>:where(:not(.ag-cell-value,.ag-group-value)){align-items:center;display:flex;height:var(--ag-internal-content-line-height)}&:where(.ag-row-group){align-items:flex-start}:where(.ag-full-width-row) &:where(.ag-row-group){align-items:center;height:100%}}:where(.ag-ltr) .ag-cell-wrapper{padding-left:calc(var(--ag-indentation-level)*var(--ag-row-group-indent-size))}:where(.ag-rtl) .ag-cell-wrapper{padding-right:calc(var(--ag-indentation-level)*var(--ag-row-group-indent-size))}:where(.ag-cell-wrap-text:not(.ag-cell-auto-height)) .ag-cell-wrapper{align-items:normal;height:100%;:where(.ag-cell-value){height:100%}}:where(.ag-ltr) .ag-row>.ag-cell-wrapper.ag-row-group{padding-left:calc(var(--ag-cell-horizontal-padding) + var(--ag-row-group-indent-size)*var(--ag-indentation-level))}:where(.ag-rtl) .ag-row>.ag-cell-wrapper.ag-row-group{padding-right:calc(var(--ag-cell-horizontal-padding) + var(--ag-row-group-indent-size)*var(--ag-indentation-level))}.ag-cell-focus:not(.ag-cell-range-selected):focus-within,.ag-cell-range-single-cell,.ag-cell-range-single-cell.ag-cell-range-handle,.ag-context-menu-open .ag-cell-focus:not(.ag-cell-range-selected),.ag-context-menu-open .ag-full-width-row.ag-row-focus .ag-cell-wrapper.ag-row-group,.ag-full-width-row.ag-row-focus:focus .ag-cell-wrapper.ag-row-group{border:1px solid;border-color:var(--ag-range-selection-border-color);border-style:var(--ag-range-selection-border-style);outline:initial}.ag-full-width-row.ag-row-focus:focus{box-shadow:none}:where(.ag-ltr) .ag-group-contracted,:where(.ag-ltr) .ag-group-expanded,:where(.ag-ltr) .ag-row-drag,:where(.ag-ltr) .ag-selection-checkbox{margin-right:var(--ag-cell-widget-spacing)}:where(.ag-rtl) .ag-group-contracted,:where(.ag-rtl) .ag-group-expanded,:where(.ag-rtl) .ag-row-drag,:where(.ag-rtl) .ag-selection-checkbox{margin-left:var(--ag-cell-widget-spacing)}.ag-drag-handle-disabled{opacity:.35;pointer-events:none}:where(.ag-ltr) .ag-group-child-count{margin-left:3px}:where(.ag-rtl) .ag-group-child-count{margin-right:3px}.ag-row-highlight-above:after,.ag-row-highlight-below:after,.ag-row-highlight-inside:after{background-color:var(--ag-row-drag-indicator-color);border-radius:calc(var(--ag-row-drag-indicator-width)/2);content:\"\";height:var(--ag-row-drag-indicator-width);pointer-events:none;position:absolute;width:calc(100% - 1px)}:where(.ag-ltr) .ag-row-highlight-above:after,:where(.ag-ltr) .ag-row-highlight-below:after,:where(.ag-ltr) .ag-row-highlight-inside:after{left:1px}:where(.ag-rtl) .ag-row-highlight-above:after,:where(.ag-rtl) .ag-row-highlight-below:after,:where(.ag-rtl) .ag-row-highlight-inside:after{right:1px}.ag-row-highlight-above:after{top:0}.ag-row-highlight-below:after{bottom:0}.ag-row-highlight-indent:after{display:block;width:auto}:where(.ag-ltr) .ag-row-highlight-indent:after{left:calc((var(--ag-cell-widget-spacing) + var(--ag-icon-size))*2 + var(--ag-cell-horizontal-padding) + var(--ag-row-highlight-level)*var(--ag-row-group-indent-size));right:1px}:where(.ag-rtl) .ag-row-highlight-indent:after{left:1px;right:calc((var(--ag-cell-widget-spacing) + var(--ag-icon-size))*2 + var(--ag-cell-horizontal-padding) + var(--ag-row-highlight-level)*var(--ag-row-group-indent-size))}.ag-row-highlight-inside:after{background-color:var(--ag-selected-row-background-color);border:1px solid var(--ag-range-selection-border-color);display:block;height:auto;inset:0;width:auto}.ag-body,.ag-floating-bottom,.ag-floating-top{background-color:var(--ag-data-background-color)}.ag-row-odd{background-color:var(--ag-odd-row-background-color)}.ag-row-selected:before{background-color:var(--ag-selected-row-background-color);content:\"\";display:block;inset:0;pointer-events:none;position:absolute}.ag-row-hover.ag-full-width-row.ag-row-group:before,.ag-row-hover:not(.ag-full-width-row):before{background-color:var(--ag-row-hover-color);content:\"\";display:block;inset:0;pointer-events:none;position:absolute}.ag-row-hover.ag-row-selected:before{background-color:var(--ag-row-hover-color);background-image:linear-gradient(var(--ag-selected-row-background-color),var(--ag-selected-row-background-color))}.ag-row.ag-full-width-row.ag-row-group>*{position:relative}.ag-column-hover{background-color:var(--ag-column-hover-color)}.ag-header-range-highlight{background-color:var(--ag-range-header-highlight-color)}.ag-right-aligned-cell{font-variant-numeric:tabular-nums}:where(.ag-ltr) .ag-right-aligned-cell{text-align:right}:where(.ag-rtl) .ag-right-aligned-cell{text-align:left}.ag-right-aligned-cell .ag-cell-value,.ag-right-aligned-cell .ag-group-value{margin-left:auto}:where(.ag-ltr) .ag-cell:not(.ag-cell-inline-editing),:where(.ag-ltr) .ag-full-width-row .ag-cell-wrapper.ag-row-group{padding-left:calc(var(--ag-cell-horizontal-padding) - 1px + var(--ag-row-group-indent-size)*var(--ag-indentation-level));padding-right:calc(var(--ag-cell-horizontal-padding) - 1px)}:where(.ag-rtl) .ag-cell:not(.ag-cell-inline-editing),:where(.ag-rtl) .ag-full-width-row .ag-cell-wrapper.ag-row-group{padding-left:calc(var(--ag-cell-horizontal-padding) - 1px);padding-right:calc(var(--ag-cell-horizontal-padding) - 1px + var(--ag-row-group-indent-size)*var(--ag-indentation-level))}.ag-row>.ag-cell-wrapper{padding-left:calc(var(--ag-cell-horizontal-padding) - 1px);padding-right:calc(var(--ag-cell-horizontal-padding) - 1px)}.ag-row-dragging{cursor:move;opacity:.5}.ag-details-row{background-color:var(--ag-data-background-color);padding:calc(var(--ag-spacing)*3.75)}.ag-layout-auto-height,.ag-layout-print{.ag-center-cols-container,.ag-center-cols-viewport{min-height:150px}}.ag-overlay-exporting-wrapper,.ag-overlay-loading-wrapper,.ag-overlay-modal-wrapper{background-color:var(--ag-modal-overlay-background-color)}.ag-skeleton-container{align-content:center;height:100%;width:100%}.ag-skeleton-effect{animation:ag-skeleton-loading 1.5s ease-in-out .5s infinite;background-color:var(--ag-row-loading-skeleton-effect-color);border-radius:.25rem;height:1em;width:100%}:where(.ag-ltr) .ag-right-aligned-cell .ag-skeleton-effect{margin-left:auto}:where(.ag-rtl) .ag-right-aligned-cell .ag-skeleton-effect{margin-right:auto}@keyframes ag-skeleton-loading{0%{background-color:var(--ag-row-loading-skeleton-effect-color)}50%{background-color:color-mix(in srgb,transparent,var(--ag-row-loading-skeleton-effect-color) 40%)}to{background-color:var(--ag-row-loading-skeleton-effect-color)}}.ag-loading{align-items:center;display:flex;height:100%}:where(.ag-ltr) .ag-loading{padding-left:var(--ag-cell-horizontal-padding)}:where(.ag-rtl) .ag-loading{padding-right:var(--ag-cell-horizontal-padding)}:where(.ag-ltr) .ag-loading-icon{padding-right:var(--ag-cell-widget-spacing)}:where(.ag-rtl) .ag-loading-icon{padding-left:var(--ag-cell-widget-spacing)}.ag-header{background-color:var(--ag-header-background-color);border-bottom:var(--ag-header-row-border);color:var(--ag-header-text-color);display:flex;font-family:var(--ag-header-font-family);font-size:var(--ag-header-font-size);font-weight:var(--ag-header-font-weight);overflow:hidden;white-space:nowrap;width:100%}.ag-header-row{height:var(--ag-header-height);position:absolute}.ag-floating-filter-button-button,.ag-header-cell-filter-button,.ag-header-cell-menu-button,.ag-header-expand-icon,.ag-panel-title-bar-button,:where(.ag-header-cell-sortable) .ag-header-cell-label,:where(.ag-header-group-cell-selectable) .ag-header-cell-comp-wrapper{cursor:pointer}:where(.ag-ltr) .ag-header-expand-icon{margin-left:4px}:where(.ag-rtl) .ag-header-expand-icon{margin-right:4px}.ag-header-row:where(:not(:first-child)){:where(.ag-header-cell:not(.ag-header-span-height.ag-header-span-total,.ag-header-parent-hidden)),:where(.ag-header-group-cell.ag-header-group-cell-with-group){border-top:var(--ag-header-row-border)}}.ag-header-row:where(:not(.ag-header-row-column-group)){overflow:hidden}:where(.ag-header.ag-header-allow-overflow) .ag-header-row{overflow:visible}.ag-header-cell{display:inline-flex;overflow:hidden}.ag-header-group-cell{contain:paint;display:flex}.ag-header-cell,.ag-header-group-cell{align-items:center;gap:var(--ag-cell-widget-spacing);height:100%;padding:0 var(--ag-cell-horizontal-padding);position:absolute}@property --ag-internal-moving-color{syntax:\"<color>\";inherits:false;initial-value:transparent}@property --ag-internal-hover-color{syntax:\"<color>\";inherits:false;initial-value:transparent}.ag-header-cell:where(:not(.ag-floating-filter)):before,.ag-header-group-cell:before{background-image:linear-gradient(var(--ag-internal-hover-color),var(--ag-internal-hover-color)),linear-gradient(var(--ag-internal-moving-color),var(--ag-internal-moving-color));content:\"\";inset:0;position:absolute;--ag-internal-moving-color:transparent;--ag-internal-hover-color:transparent;transition:--ag-internal-moving-color var(--ag-header-cell-background-transition-duration),--ag-internal-hover-color var(--ag-header-cell-background-transition-duration)}.ag-header-cell:where(:not(.ag-floating-filter)):where(:hover):before,.ag-header-group-cell:where(:hover):before{--ag-internal-hover-color:var(--ag-header-cell-hover-background-color)}.ag-header-cell:where(:not(.ag-floating-filter)):where(.ag-header-cell-moving):before,.ag-header-group-cell:where(.ag-header-cell-moving):before{--ag-internal-moving-color:var(--ag-header-cell-moving-background-color);--ag-internal-hover-color:var(--ag-header-cell-hover-background-color)}:where(.ag-header-cell:not(.ag-floating-filter)>*,.ag-header-group-cell>*){position:relative;z-index:1}.ag-header-cell-menu-button:where(:not(.ag-header-menu-always-show)){opacity:0;transition:opacity .2s}.ag-header-cell-filter-button,:where(.ag-header-cell.ag-header-active) .ag-header-cell-menu-button{opacity:1}.ag-header-cell-label,.ag-header-group-cell-label{align-items:center;align-self:stretch;display:flex;flex:1 1 auto;overflow:hidden;padding:5px 0}:where(.ag-ltr) .ag-sort-indicator-icon{padding-left:var(--ag-spacing)}:where(.ag-rtl) .ag-sort-indicator-icon{padding-right:var(--ag-spacing)}.ag-header-cell-label{text-overflow:ellipsis}.ag-header-group-cell-label.ag-sticky-label{flex:none;max-width:100%;overflow:visible;position:sticky}:where(.ag-ltr) .ag-header-group-cell-label.ag-sticky-label{left:var(--ag-cell-horizontal-padding)}:where(.ag-rtl) .ag-header-group-cell-label.ag-sticky-label{right:var(--ag-cell-horizontal-padding)}.ag-header-cell-text,.ag-header-group-text{overflow:hidden;text-overflow:ellipsis}.ag-header-cell-text{word-break:break-word}.ag-header-cell-comp-wrapper{width:100%}:where(.ag-header-group-cell) .ag-header-cell-comp-wrapper{display:flex}:where(.ag-header-cell:not(.ag-header-cell-auto-height)) .ag-header-cell-comp-wrapper{align-items:center;display:flex;height:100%}.ag-header-cell-wrap-text .ag-header-cell-comp-wrapper{white-space:normal}.ag-header-cell-comp-wrapper-limited-height>*{overflow:hidden}:where(.ag-right-aligned-header) .ag-header-cell-label{flex-direction:row-reverse}:where(.ag-header-cell:not(.ag-right-aligned-header)){.ag-header-col-ref{color:var(--ag-subtle-text-color)}}:where(.ag-ltr) :where(.ag-header-cell:not(.ag-right-aligned-header)){.ag-header-col-ref{margin-right:var(--ag-spacing)}.ag-header-label-icon,.ag-header-menu-icon{margin-left:var(--ag-spacing)}}:where(.ag-rtl) :where(.ag-header-cell:not(.ag-right-aligned-header)){.ag-header-col-ref{margin-left:var(--ag-spacing)}.ag-header-label-icon,.ag-header-menu-icon{margin-right:var(--ag-spacing)}}:where(.ag-header-cell.ag-right-aligned-header){.ag-header-col-ref{color:var(--ag-subtle-text-color)}}:where(.ag-ltr) :where(.ag-header-cell.ag-right-aligned-header){.ag-header-col-ref{margin-left:var(--ag-spacing)}.ag-header-label-icon,.ag-header-menu-icon{margin-right:var(--ag-spacing)}}:where(.ag-rtl) :where(.ag-header-cell.ag-right-aligned-header){.ag-header-col-ref{margin-right:var(--ag-spacing)}.ag-header-label-icon,.ag-header-menu-icon{margin-left:var(--ag-spacing)}}.ag-header-cell:after,.ag-header-group-cell:where(:not(.ag-header-span-height.ag-header-group-cell-no-group)):after{content:\"\";height:var(--ag-header-column-border-height);position:absolute;top:calc(50% - var(--ag-header-column-border-height)*.5);z-index:1}:where(.ag-ltr) .ag-header-cell:after,:where(.ag-ltr) .ag-header-group-cell:where(:not(.ag-header-span-height.ag-header-group-cell-no-group)):after{border-right:var(--ag-header-column-border);right:0}:where(.ag-rtl) .ag-header-cell:after,:where(.ag-rtl) .ag-header-group-cell:where(:not(.ag-header-span-height.ag-header-group-cell-no-group)):after{border-left:var(--ag-header-column-border);left:0}.ag-header-highlight-after:after,.ag-header-highlight-before:after{background-color:var(--ag-column-drag-indicator-color);border-radius:calc(var(--ag-column-drag-indicator-width)/2);content:\"\";height:100%;position:absolute;top:0;width:var(--ag-column-drag-indicator-width)}:where(.ag-ltr) .ag-header-highlight-before:after{left:0}:where(.ag-rtl) .ag-header-highlight-before:after{right:0}:where(.ag-ltr) .ag-header-highlight-after:after{right:0;:where(.ag-pinned-left-header) &{right:1px}}:where(.ag-rtl) .ag-header-highlight-after:after{left:0;:where(.ag-pinned-left-header) &{left:1px}}.ag-header-cell-resize{align-items:center;cursor:ew-resize;display:flex;height:100%;position:absolute;top:0;width:8px;z-index:2}:where(.ag-ltr) .ag-header-cell-resize{right:-3px}:where(.ag-rtl) .ag-header-cell-resize{left:-3px}.ag-header-cell-resize:after{background-color:var(--ag-header-column-resize-handle-color);content:\"\";height:var(--ag-header-column-resize-handle-height);position:absolute;top:calc(50% - var(--ag-header-column-resize-handle-height)*.5);width:var(--ag-header-column-resize-handle-width);z-index:1}:where(.ag-ltr) .ag-header-cell-resize:after{left:calc(50% - var(--ag-header-column-resize-handle-width))}:where(.ag-rtl) .ag-header-cell-resize:after{right:calc(50% - var(--ag-header-column-resize-handle-width))}:where(.ag-header-cell.ag-header-span-height) .ag-header-cell-resize:after{height:calc(100% - var(--ag-spacing)*4);top:calc(var(--ag-spacing)*2)}.ag-header-group-cell-no-group:where(.ag-header-span-height){display:none}.ag-sort-indicator-container{display:flex;gap:var(--ag-spacing)}.ag-layout-print{&.ag-body{display:block;height:unset}&.ag-root-wrapper{container-type:normal;display:inline-block}.ag-body-horizontal-scroll,.ag-body-vertical-scroll{display:none}&.ag-force-vertical-scroll{overflow-y:visible!important}}@media print{.ag-root-wrapper.ag-layout-print{container-type:normal;display:table;.ag-body-horizontal-scroll-viewport,.ag-body-viewport,.ag-center-cols-container,.ag-center-cols-viewport,.ag-root,.ag-root-wrapper-body,.ag-virtual-list-viewport{display:block!important;height:auto!important;overflow:hidden!important}.ag-cell,.ag-row{-moz-column-break-inside:avoid;break-inside:avoid}}}ag-grid,ag-grid-angular{display:block}.ag-root-wrapper{border:var(--ag-wrapper-border);border-radius:var(--ag-wrapper-border-radius);container-type:inline-size;display:flex;flex-direction:column;overflow:hidden;position:relative;&.ag-layout-normal{height:100%}}.ag-root-wrapper-body{display:flex;flex-direction:row;&.ag-layout-normal{flex:1 1 auto;height:0;min-height:0}}.ag-root{display:flex;flex-direction:column;position:relative;&.ag-layout-auto-height,&.ag-layout-normal{flex:1 1 auto;overflow:hidden;width:0}&.ag-layout-normal{height:100%}}.ag-drag-handle{color:var(--ag-drag-handle-color);cursor:grab;:where(.ag-icon){color:var(--ag-drag-handle-color)}}.ag-chart-menu-icon,.ag-chart-settings-next,.ag-chart-settings-prev,.ag-column-group-icons,.ag-column-select-header-icon,.ag-filter-toolpanel-expand,.ag-floating-filter-button-button,.ag-group-title-bar-icon,.ag-header-cell-filter-button,.ag-header-cell-menu-button,.ag-header-expand-icon,.ag-panel-title-bar-button,.ag-panel-title-bar-button-icon,.ag-set-filter-group-icons,:where(.ag-group-contracted) .ag-icon,:where(.ag-group-expanded) .ag-icon{background-color:var(--ag-icon-button-background-color);border-radius:var(--ag-icon-button-border-radius);box-shadow:0 0 0 var(--ag-icon-button-background-spread) var(--ag-icon-button-background-color);color:var(--ag-icon-button-color)}.ag-chart-menu-icon:hover,.ag-chart-settings-next:hover,.ag-chart-settings-prev:hover,.ag-column-group-icons:hover,.ag-column-select-header-icon:hover,.ag-filter-toolpanel-expand:hover,.ag-floating-filter-button-button:hover,.ag-group-title-bar-icon:hover,.ag-header-cell-filter-button:hover,.ag-header-cell-menu-button:hover,.ag-header-expand-icon:hover,.ag-panel-title-bar-button-icon:hover,.ag-panel-title-bar-button:hover,.ag-set-filter-group-icons:hover,:where(.ag-group-contracted) .ag-icon:hover,:where(.ag-group-expanded) .ag-icon:hover{background-color:var(--ag-icon-button-hover-background-color);box-shadow:0 0 0 var(--ag-icon-button-background-spread) var(--ag-icon-button-hover-background-color);color:var(--ag-icon-button-hover-color)}:where(.ag-filter-active),:where(.ag-filter-toolpanel-group-instance-header-icon),:where(.ag-filter-toolpanel-instance-header-icon){position:relative}:where(.ag-filter-active):after,:where(.ag-filter-toolpanel-group-instance-header-icon):after,:where(.ag-filter-toolpanel-instance-header-icon):after{background-color:var(--ag-icon-button-active-indicator-color);border-radius:50%;content:\"\";height:6px;position:absolute;top:-1px;width:6px}:where(.ag-ltr) :where(.ag-filter-active):after,:where(.ag-ltr) :where(.ag-filter-toolpanel-group-instance-header-icon):after,:where(.ag-ltr) :where(.ag-filter-toolpanel-instance-header-icon):after{right:-1px}:where(.ag-rtl) :where(.ag-filter-active):after,:where(.ag-rtl) :where(.ag-filter-toolpanel-group-instance-header-icon):after,:where(.ag-rtl) :where(.ag-filter-toolpanel-instance-header-icon):after{left:-1px}.ag-filter-active{background-image:linear-gradient(var(--ag-icon-button-active-background-color),var(--ag-icon-button-active-background-color));border-radius:1px;outline:solid var(--ag-icon-button-background-spread) var(--ag-icon-button-active-background-color);:where(.ag-icon-filter){clip-path:path(\"M8,0C8,4.415 11.585,8 16,8L16,16L0,16L0,0L8,0Z\");color:var(--ag-icon-button-active-color)}}", Qd = {
	wrapperBorder: !0,
	rowBorder: !0,
	headerRowBorder: !0,
	footerRowBorder: { ref: "rowBorder" },
	columnBorder: {
		style: "solid",
		width: 1,
		color: "transparent"
	},
	headerColumnBorder: !1,
	headerColumnBorderHeight: "100%",
	pinnedColumnBorder: !0,
	pinnedRowBorder: !0,
	sidePanelBorder: !0,
	sideBarPanelWidth: 250,
	sideBarPanelAnimationDuration: 0,
	sideBarBackgroundColor: { ref: "chromeBackgroundColor" },
	sideButtonBarBackgroundColor: { ref: "sideBarBackgroundColor" },
	sideButtonBarTopPadding: 0,
	sideButtonSelectedUnderlineWidth: 2,
	sideButtonSelectedUnderlineColor: "transparent",
	sideButtonSelectedUnderlineTransitionDuration: 0,
	sideButtonBackgroundColor: "transparent",
	sideButtonTextColor: { ref: "textColor" },
	sideButtonHoverBackgroundColor: { ref: "sideButtonBackgroundColor" },
	sideButtonHoverTextColor: { ref: "sideButtonTextColor" },
	sideButtonSelectedBackgroundColor: Q,
	sideButtonSelectedTextColor: { ref: "sideButtonTextColor" },
	sideButtonBorder: "solid 1px transparent",
	sideButtonSelectedBorder: !0,
	sideButtonLeftPadding: { ref: "spacing" },
	sideButtonRightPadding: { ref: "spacing" },
	sideButtonVerticalPadding: { calc: "spacing * 3" },
	cellFontFamily: { ref: "fontFamily" },
	cellFontSize: { ref: "dataFontSize" },
	cellFontWeight: { ref: "fontWeight" },
	headerCellHoverBackgroundColor: "transparent",
	headerCellMovingBackgroundColor: { ref: "headerCellHoverBackgroundColor" },
	headerCellBackgroundTransitionDuration: "0.2s",
	cellTextColor: { ref: "textColor" },
	rangeSelectionBorderStyle: "solid",
	rangeSelectionBorderColor: yd,
	rangeSelectionBackgroundColor: md(.2),
	rangeSelectionChartBackgroundColor: "#0058FF1A",
	rangeSelectionChartCategoryBackgroundColor: "#00FF841A",
	rangeSelectionHighlightColor: md(.5),
	rangeHeaderHighlightColor: _d(.08),
	rowNumbersSelectedColor: md(.5),
	rowHoverColor: md(.08),
	columnHoverColor: md(.05),
	selectedRowBackgroundColor: md(.12),
	modalOverlayBackgroundColor: {
		ref: "backgroundColor",
		mix: .66
	},
	dataBackgroundColor: Q,
	oddRowBackgroundColor: { ref: "dataBackgroundColor" },
	wrapperBorderRadius: 8,
	cellHorizontalPadding: { calc: "spacing * 2 * cellHorizontalPaddingScale" },
	cellWidgetSpacing: { calc: "spacing * 1.5" },
	cellHorizontalPaddingScale: 1,
	rowGroupIndentSize: { calc: "cellWidgetSpacing + iconSize" },
	valueChangeDeltaUpColor: "#43a047",
	valueChangeDeltaDownColor: "#e53935",
	valueChangeValueHighlightBackgroundColor: "#16a08580",
	rowHeight: { calc: "max(iconSize, cellFontSize) + spacing * 3.25 * rowVerticalPaddingScale" },
	rowVerticalPaddingScale: 1,
	paginationPanelHeight: {
		ref: "rowHeight",
		calc: "max(rowHeight, 22px)"
	},
	dragHandleColor: hd(.7),
	headerColumnResizeHandleHeight: "30%",
	headerColumnResizeHandleWidth: 2,
	headerColumnResizeHandleColor: { ref: "borderColor" },
	iconButtonColor: { ref: "iconColor" },
	iconButtonBackgroundColor: "transparent",
	iconButtonBackgroundSpread: 4,
	iconButtonBorderRadius: 1,
	iconButtonHoverColor: { ref: "iconButtonColor" },
	iconButtonHoverBackgroundColor: hd(.1),
	iconButtonActiveColor: yd,
	iconButtonActiveBackgroundColor: md(.28),
	iconButtonActiveIndicatorColor: yd,
	setFilterIndentSize: { ref: "iconSize" },
	chartMenuPanelWidth: 260,
	chartMenuLabelColor: hd(.8),
	cellEditingBorder: { color: yd },
	cellEditingShadow: { ref: "cardShadow" },
	fullRowEditInvalidBackgroundColor: {
		ref: "invalidColor",
		onto: "backgroundColor",
		mix: .25
	},
	columnSelectIndentSize: { ref: "iconSize" },
	toolPanelSeparatorBorder: !0,
	columnDropCellBackgroundColor: hd(.07),
	columnDropCellTextColor: { ref: "textColor" },
	columnDropCellDragHandleColor: { ref: "textColor" },
	columnDropCellBorder: { color: hd(.13) },
	selectCellBackgroundColor: hd(.07),
	selectCellBorder: { color: hd(.13) },
	advancedFilterBuilderButtonBarBorder: !0,
	advancedFilterBuilderIndentSize: { calc: "spacing * 2 + iconSize" },
	advancedFilterBuilderJoinPillColor: "#f08e8d",
	advancedFilterBuilderColumnPillColor: "#a6e194",
	advancedFilterBuilderOptionPillColor: "#f3c08b",
	advancedFilterBuilderValuePillColor: "#85c0e4",
	filterPanelApplyButtonColor: Q,
	filterPanelApplyButtonBackgroundColor: yd,
	columnPanelApplyButtonColor: Q,
	columnPanelApplyButtonBackgroundColor: yd,
	filterPanelCardSubtleColor: {
		ref: "textColor",
		mix: .7
	},
	filterPanelCardSubtleHoverColor: { ref: "textColor" },
	findMatchColor: vd,
	findMatchBackgroundColor: "#ffff00",
	findActiveMatchColor: vd,
	findActiveMatchBackgroundColor: "#ffa500",
	filterToolPanelGroupIndent: { ref: "spacing" },
	rowLoadingSkeletonEffectColor: hd(.15),
	statusBarLabelColor: vd,
	statusBarLabelFontWeight: 500,
	statusBarValueColor: vd,
	statusBarValueFontWeight: 500,
	pinnedSourceRowTextColor: { ref: "textColor" },
	pinnedSourceRowBackgroundColor: { ref: "dataBackgroundColor" },
	pinnedSourceRowFontWeight: 600,
	pinnedRowFontWeight: 600,
	pinnedRowBackgroundColor: { ref: "dataBackgroundColor" },
	pinnedRowTextColor: { ref: "textColor" },
	rowDragIndicatorColor: { ref: "rangeSelectionBorderColor" },
	rowDragIndicatorWidth: 2,
	columnDragIndicatorColor: { ref: "accentColor" },
	columnDragIndicatorWidth: 2
}, $d = ".ag-cell-batch-edit{background-color:var(--ag-cell-batch-edit-background-color);color:var(--ag-cell-batch-edit-text-color);display:inherit}.ag-row-batch-edit{background-color:var(--ag-row-batch-edit-background-color);color:var(--ag-row-batch-edit-text-color)}", ef = {
	cellBatchEditBackgroundColor: "rgba(220 181 139 / 16%)",
	cellBatchEditTextColor: "#422f00",
	rowBatchEditBackgroundColor: { ref: "cellBatchEditBackgroundColor" },
	rowBatchEditTextColor: { ref: "cellBatchEditTextColor" }
}, tf = {
	...ef,
	cellBatchEditTextColor: "#f3d0b3"
}, nf = ad({
	feature: "batchEditStyle",
	params: ef,
	css: $d
}), rf = ad({
	feature: "buttonStyle",
	params: {
		buttonTextColor: "inherit",
		buttonFontWeight: "normal",
		buttonBackgroundColor: "transparent",
		buttonBorder: !1,
		buttonBorderRadius: { ref: "borderRadius" },
		buttonHorizontalPadding: { calc: "spacing * 2" },
		buttonVerticalPadding: { ref: "spacing" },
		buttonHoverTextColor: { ref: "buttonTextColor" },
		buttonHoverBackgroundColor: { ref: "buttonBackgroundColor" },
		buttonHoverBorder: { ref: "buttonBorder" },
		buttonActiveTextColor: { ref: "buttonHoverTextColor" },
		buttonActiveBackgroundColor: { ref: "buttonHoverBackgroundColor" },
		buttonActiveBorder: { ref: "buttonHoverBorder" },
		buttonDisabledTextColor: { ref: "inputDisabledTextColor" },
		buttonDisabledBackgroundColor: { ref: "inputDisabledBackgroundColor" },
		buttonDisabledBorder: { ref: "inputDisabledBorder" },
		buttonBackgroundColor: Q,
		buttonBorder: !0,
		buttonHoverBackgroundColor: { ref: "rowHoverColor" },
		buttonActiveBorder: { color: yd }
	},
	css: ":where(.ag-button){background:none;border:none;color:inherit;cursor:pointer;font-family:inherit;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0;text-indent:inherit;text-shadow:inherit;text-transform:inherit;word-spacing:inherit;&:disabled{cursor:default}&:focus-visible{box-shadow:var(--ag-focus-shadow);outline:none}}.ag-standard-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--ag-button-background-color);border:var(--ag-button-border);border-radius:var(--ag-button-border-radius);color:var(--ag-button-text-color);cursor:pointer;font-weight:var(--ag-button-font-weight);padding:var(--ag-button-vertical-padding) var(--ag-button-horizontal-padding);&:active{background-color:var(--ag-button-active-background-color);border:var(--ag-button-active-border);color:var(--ag-button-active-text-color)}&:disabled{background-color:var(--ag-button-disabled-background-color);border:var(--ag-button-disabled-border);color:var(--ag-button-disabled-text-color)}}.ag-standard-button:hover{background-color:var(--ag-button-hover-background-color);border:var(--ag-button-hover-border);color:var(--ag-button-hover-text-color)}"
}), af = ad({
	feature: "columnDropStyle",
	css: ".ag-column-drop-vertical-empty-message{align-items:center;border:dashed var(--ag-border-width);border-color:var(--ag-border-color);display:flex;inset:0;justify-content:center;margin:calc(var(--ag-spacing)*1.5) calc(var(--ag-spacing)*2);overflow:hidden;padding:calc(var(--ag-spacing)*2);position:absolute}"
}), of = ad({
	feature: "formulaStyle",
	params: {
		formulaToken1Color: "#3269c6",
		formulaToken1BackgroundColor: {
			ref: "formulaToken1Color",
			mix: .08
		},
		formulaToken1Border: { color: { ref: "formulaToken1Color" } },
		formulaToken2Color: "#c0343f",
		formulaToken2BackgroundColor: {
			ref: "formulaToken2Color",
			mix: .06
		},
		formulaToken2Border: { color: { ref: "formulaToken2Color" } },
		formulaToken3Color: "#8156b8",
		formulaToken3BackgroundColor: {
			ref: "formulaToken3Color",
			mix: .08
		},
		formulaToken3Border: { color: { ref: "formulaToken3Color" } },
		formulaToken4Color: "#007c1f",
		formulaToken4BackgroundColor: {
			ref: "formulaToken4Color",
			mix: .06
		},
		formulaToken4Border: { color: { ref: "formulaToken4Color" } },
		formulaToken5Color: "#b03e85",
		formulaToken5BackgroundColor: {
			ref: "formulaToken5Color",
			mix: .08
		},
		formulaToken5Border: { color: { ref: "formulaToken5Color" } },
		formulaToken6Color: "#b74900",
		formulaToken6BackgroundColor: {
			ref: "formulaToken6Color",
			mix: .06
		},
		formulaToken6Border: { color: { ref: "formulaToken6Color" } },
		formulaToken7Color: "#247492",
		formulaToken7BackgroundColor: {
			ref: "formulaToken7Color",
			mix: .08
		},
		formulaToken7Border: { color: { ref: "formulaToken7Color" } }
	}
}), sf = {
	warn: (...e) => {
		W(e[0], e[1]);
	},
	error: (...e) => {
		Rn(e[0], e[1]);
	},
	preInitErr: (...e) => {
		zn(e[0], e[2], e[1]);
	}
}, cf = () => zd(sf).withParams(Qd).withPart(rf).withPart(af).withPart(nf).withPart(of), lf = ad({
	feature: "checkboxStyle",
	params: {
		checkboxBorderWidth: 1,
		checkboxBorderRadius: { ref: "borderRadius" },
		checkboxUncheckedBackgroundColor: Q,
		checkboxUncheckedBorderColor: gd(.3),
		checkboxCheckedBackgroundColor: yd,
		checkboxCheckedBorderColor: { ref: "checkboxCheckedBackgroundColor" },
		checkboxCheckedShapeImage: { svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"7\" fill=\"none\"><path stroke=\"#000\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.75\" d=\"M1 3.5 3.5 6l5-5\"/></svg>" },
		checkboxCheckedShapeColor: Q,
		checkboxIndeterminateBackgroundColor: gd(.3),
		checkboxIndeterminateBorderColor: { ref: "checkboxIndeterminateBackgroundColor" },
		checkboxIndeterminateShapeImage: { svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"10\" height=\"2\" fill=\"none\"><rect width=\"10\" height=\"2\" fill=\"#000\" rx=\"1\"/></svg>" },
		checkboxIndeterminateShapeColor: Q,
		radioCheckedShapeImage: { svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"6\" height=\"6\" fill=\"none\"><circle cx=\"3\" cy=\"3\" r=\"3\" fill=\"#000\"/></svg>" }
	},
	css: ".ag-checkbox-input-wrapper,.ag-radio-button-input-wrapper{background-color:var(--ag-checkbox-unchecked-background-color);border:solid var(--ag-checkbox-border-width) var(--ag-checkbox-unchecked-border-color);flex:none;height:var(--ag-icon-size);position:relative;width:var(--ag-icon-size);&:where(.ag-checked){background-color:var(--ag-checkbox-checked-background-color);border-color:var(--ag-checkbox-checked-border-color)}&:where(.ag-checked):after{background-color:var(--ag-checkbox-checked-shape-color)}&:where(.ag-disabled){filter:grayscale();opacity:.5}}.ag-checkbox-input,.ag-radio-button-input{-webkit-appearance:none;-moz-appearance:none;appearance:none;cursor:pointer;display:block;height:var(--ag-icon-size);margin:0;opacity:0;width:var(--ag-icon-size)}.ag-checkbox-input-wrapper:after,.ag-radio-button-input-wrapper:after{content:\"\";display:block;inset:0;-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;pointer-events:none;position:absolute}.ag-checkbox-input-wrapper:where(:focus-within,:active),.ag-radio-button-input-wrapper:where(:focus-within,:active){box-shadow:var(--ag-focus-shadow)}.ag-checkbox-input-wrapper{border-radius:var(--ag-checkbox-border-radius);&:where(.ag-checked):after{-webkit-mask-image:var(--ag-checkbox-checked-shape-image);mask-image:var(--ag-checkbox-checked-shape-image)}&:where(.ag-indeterminate){background-color:var(--ag-checkbox-indeterminate-background-color);border-color:var(--ag-checkbox-indeterminate-border-color)}&:where(.ag-indeterminate):after{background-color:var(--ag-checkbox-indeterminate-shape-color);-webkit-mask-image:var(--ag-checkbox-indeterminate-shape-image);mask-image:var(--ag-checkbox-indeterminate-shape-image)}}.ag-cell-editing-error .ag-checkbox-input-wrapper:focus-within{box-shadow:var(--ag-focus-error-shadow)}.ag-radio-button-input-wrapper{border-radius:100%;&:where(.ag-checked):after{-webkit-mask-image:var(--ag-radio-checked-shape-image);mask-image:var(--ag-radio-checked-shape-image)}}"
}), uf = () => ({
	...bd,
	...tf,
	backgroundColor: "hsl(217, 0%, 17%)",
	foregroundColor: "#FFF",
	chromeBackgroundColor: gd(.05),
	rowHoverColor: md(.15),
	selectedRowBackgroundColor: md(.2),
	menuBackgroundColor: gd(.1),
	browserColorScheme: "dark",
	popupShadow: "0 0px 20px #000A",
	cardShadow: "0 1px 4px 1px #000A",
	advancedFilterBuilderJoinPillColor: "#7a3a37",
	advancedFilterBuilderColumnPillColor: "#355f2d",
	advancedFilterBuilderOptionPillColor: "#5a3168",
	advancedFilterBuilderValuePillColor: "#374c86",
	filterPanelApplyButtonColor: vd,
	columnPanelApplyButtonColor: vd,
	findMatchColor: Q,
	findActiveMatchColor: Q,
	checkboxUncheckedBorderColor: gd(.4),
	toggleButtonOffBackgroundColor: gd(.4),
	rowBatchEditBackgroundColor: gd(.1),
	formulaToken1Color: "#4da3e5",
	formulaToken2Color: "#f55864",
	formulaToken3Color: "#b688f2",
	formulaToken4Color: "#24bb4a",
	formulaToken5Color: "#e772ba",
	formulaToken6Color: "#f69b5f",
	formulaToken7Color: "#a3e6ff"
}), df = () => ({
	...uf(),
	backgroundColor: "#1f2836"
}), ff = ad({
	feature: "colorScheme",
	params: bd,
	modeParams: {
		light: bd,
		dark: uf(),
		"dark-blue": df()
	}
}), pf = {
	aggregation: "<path d=\"M18 7V4H6l6 8-6 8h12v-3\"/>",
	arrows: "<polyline points=\"5 9 2 12 5 15\"/><polyline points=\"9 5 12 2 15 5\"/><polyline points=\"15 19 12 22 9 19\"/><polyline points=\"19 9 22 12 19 15\"/><line x1=\"2\" x2=\"22\" y1=\"12\" y2=\"12\"/><line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"22\"/>",
	asc: "<path d=\"m5 12 7-7 7 7\"/><path d=\"M12 19V5\"/>",
	cancel: "<path d=\"m18 6-12 12\"/><path d=\"m6 6 12 12\"/>",
	chart: "<line x1=\"18\" x2=\"18\" y1=\"20\" y2=\"10\"/><line x1=\"12\" x2=\"12\" y1=\"20\" y2=\"4\"/><line x1=\"6\" x2=\"6\" y1=\"20\" y2=\"14\"/>",
	"color-picker": "<path d=\"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z\"/><path d=\"m5 2 5 5\"/><path d=\"M2 13h15\"/><path d=\"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z\"/>",
	columns: "<path d=\"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18\"/>",
	contracted: "<path d=\"m9 18 6-6-6-6\"/>",
	copy: "<rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\" ry=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/>",
	cross: "<path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/>",
	csv: "<path d=\"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z\"/><polyline points=\"14 2 14 8 20 8\"/><path d=\"M8 13h2\"/><path d=\"M8 17h2\"/><path d=\"M14 13h2\"/><path d=\"M14 17h2\"/>",
	cut: "<circle cx=\"6\" cy=\"6\" r=\"3\"/><path d=\"M8.12 8.12 12 12\"/><path d=\"M20 4 8.12 15.88\"/><circle cx=\"6\" cy=\"18\" r=\"3\"/><path d=\"M14.8 14.8 20 20\"/>",
	desc: "<path d=\"M12 5v14\"/><path d=\"m19 12-7 7-7-7\"/>",
	down: "<path d=\"M12 5v14\"/><path d=\"m19 12-7 7-7-7\"/>",
	excel: "<path d=\"M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z\"/><polyline points=\"14 2 14 8 20 8\"/><path d=\"M8 13h2\"/><path d=\"M8 17h2\"/><path d=\"M14 13h2\"/><path d=\"M14 17h2\"/>",
	expanded: "<path d=\"m15 18-6-6 6-6\"/>",
	eye: "<path d=\"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/>",
	"eye-slash": "<path d=\"M9.88 9.88a3 3 0 1 0 4.24 4.24\"/><path d=\"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68\"/><path d=\"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61\"/><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/>",
	filter: "<path d=\"M3 6h18\"/><path d=\"M7 12h10\"/><path d=\"M10 18h4\"/>",
	first: "<path d=\"m17 18-6-6 6-6\"/><path d=\"M7 6v12\"/>",
	grip: "<circle cx=\"5\" cy=\"8\" r=\"0.5\"/><circle cx=\"12\" cy=\"8\" r=\"0.5\"/><circle cx=\"19\" cy=\"8\" r=\"0.5\"/><circle cx=\"5\" cy=\"16\" r=\"0.5\"/><circle cx=\"12\" cy=\"16\" r=\"0.5\"/><circle cx=\"19\" cy=\"16\" r=\"0.5\"/><g stroke=\"none\" fill=\"currentColor\"><circle cx=\"5\" cy=\"8\" r=\"1\"/><circle cx=\"12\" cy=\"8\" r=\"1\"/><circle cx=\"19\" cy=\"8\" r=\"1\"/><circle cx=\"5\" cy=\"16\" r=\"1\"/><circle cx=\"12\" cy=\"16\" r=\"1\"/><circle cx=\"19\" cy=\"16\" r=\"1\"/></g>",
	group: "<path d=\"M16 12H3\"/><path d=\"M16 18H3\"/><path d=\"M10 6H3\"/><path d=\"M21 18V8a2 2 0 0 0-2-2h-5\"/><path d=\"m16 8-2-2 2-2\"/>",
	last: "<path d=\"m7 18 6-6-6-6\"/><path d=\"M17 6v12\"/>",
	left: "<path d=\"m12 19-7-7 7-7\"/><path d=\"M19 12H5\"/>",
	linked: "<path d=\"M9 17H7A5 5 0 0 1 7 7h2\"/><path d=\"M15 7h2a5 5 0 1 1 0 10h-2\"/><line x1=\"8\" x2=\"16\" y1=\"12\" y2=\"12\"/>",
	loading: "<line x1=\"12\" x2=\"12\" y1=\"2\" y2=\"6\"/><line x1=\"12\" x2=\"12\" y1=\"18\" y2=\"22\"/><line x1=\"4.93\" x2=\"7.76\" y1=\"4.93\" y2=\"7.76\"/><line x1=\"16.24\" x2=\"19.07\" y1=\"16.24\" y2=\"19.07\"/><line x1=\"2\" x2=\"6\" y1=\"12\" y2=\"12\"/><line x1=\"18\" x2=\"22\" y1=\"12\" y2=\"12\"/><line x1=\"4.93\" x2=\"7.76\" y1=\"19.07\" y2=\"16.24\"/><line x1=\"16.24\" x2=\"19.07\" y1=\"7.76\" y2=\"4.93\"/>",
	maximize: "<polyline points=\"15 3 21 3 21 9\"/><polyline points=\"9 21 3 21 3 15\"/><line x1=\"21\" x2=\"14\" y1=\"3\" y2=\"10\"/><line x1=\"3\" x2=\"10\" y1=\"21\" y2=\"14\"/>",
	menu: "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"/><line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\"/><line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\"/>",
	"menu-alt": "<circle cx=\"12\" cy=\"5\" r=\"0.75\" fill=\"#D9D9D9\"/><circle cx=\"12\" cy=\"12\" r=\"0.75\" fill=\"#D9D9D9\"/><circle cx=\"12\" cy=\"19\" r=\"0.75\" fill=\"#D9D9D9\"/>",
	minimize: "<polyline points=\"4 14 10 14 10 20\"/><polyline points=\"20 10 14 10 14 4\"/><line x1=\"14\" x2=\"21\" y1=\"10\" y2=\"3\"/><line x1=\"3\" x2=\"10\" y1=\"21\" y2=\"14\"/>",
	minus: "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 12h8\"/>",
	next: "<path d=\"m9 18 6-6-6-6\"/>",
	none: "<path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/>",
	"not-allowed": "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m4.9 4.9 14.2 14.2\"/>",
	paste: "<path d=\"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z\"/><path d=\"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10\"/><path d=\"m17 10 4 4-4 4\"/>",
	pin: "<line x1=\"12\" x2=\"12\" y1=\"17\" y2=\"22\"/><path d=\"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z\"/>",
	pivot: "<path d=\"M15 3v18\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"3\" rx=\"2\"/><path d=\"M21 9H3\"/><path d=\"M21 15H3\"/>",
	plus: "<circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 12h8\"/><path d=\"M12 8v8\"/>",
	previous: "<path d=\"m15 18-6-6 6-6\"/>",
	right: "<path d=\"M5 12h14\"/><path d=\"m12 5 7 7-7 7\"/>",
	save: "<path d=\"M12 17V3\"/><path d=\"m6 11 6 6 6-6\"/><path d=\"M19 21H5\"/>",
	settings: "<path d=\"M20 7h-9\"/><path d=\"M14 17H5\"/><circle cx=\"17\" cy=\"17\" r=\"3\"/><circle cx=\"7\" cy=\"7\" r=\"3\"/>",
	"small-left": "<path d=\"m15 18-6-6 6-6\"/>",
	"small-right": "<path d=\"m9 18 6-6-6-6\"/>",
	tick: "<path d=\"M20 6 9 17l-5-5\"/>",
	"tree-closed": "<path d=\"m9 18 6-6-6-6\"/>",
	"tree-indeterminate": "<path d=\"M5 12h14\"/>",
	"tree-open": "<path d=\"m6 9 6 6 6-6\"/>",
	unlinked: "<path d=\"M9 17H7A5 5 0 0 1 7 7\"/><path d=\"M15 7h2a5 5 0 0 1 4 8\"/><line x1=\"8\" x2=\"12\" y1=\"12\" y2=\"12\"/><line x1=\"2\" x2=\"22\" y1=\"2\" y2=\"22\"/>",
	up: "<path d=\"m5 12 7-7 7 7\"/><path d=\"M12 19V5\"/>"
}, mf = {
	aasc: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.2012 8.07928C13.6346 8.0793 14.0128 8.15365 14.3359 8.30193C14.6609 8.45018 14.9141 8.65595 15.0947 8.9201C15.2754 9.18439 15.3683 9.49109 15.374 9.83904H14.1904C14.1676 9.60898 14.0695 9.4303 13.8965 9.30291C13.7235 9.1756 13.4889 9.1115 13.1924 9.1115C12.9909 9.1115 12.8204 9.1404 12.6816 9.19744C12.543 9.25255 12.4364 9.32917 12.3623 9.42791C12.2901 9.52678 12.2539 9.63933 12.2539 9.76482C12.2501 9.8692 12.272 9.9604 12.3193 10.0383C12.3688 10.1162 12.4369 10.1843 12.5225 10.2414C12.6079 10.2964 12.7064 10.3451 12.8184 10.3869C12.9304 10.4268 13.0505 10.4609 13.1777 10.4894L13.7031 10.6144C13.9578 10.6715 14.1914 10.7479 14.4043 10.8429C14.6173 10.938 14.8021 11.0547 14.958 11.1935C15.1138 11.3323 15.2348 11.4957 15.3203 11.6838C15.4077 11.8719 15.4522 12.088 15.4541 12.3312C15.4522 12.6885 15.3611 12.9986 15.1807 13.2609C15.0019 13.5214 14.7427 13.7248 14.4043 13.8693C14.0678 14.0118 13.6617 14.0832 13.1865 14.0832C12.7153 14.0832 12.3048 14.0107 11.9551 13.8664C11.6071 13.7219 11.3345 13.5071 11.1387 13.2238C10.9449 12.9387 10.8435 12.5862 10.834 12.1662H12.0283C12.0416 12.362 12.0984 12.5252 12.1973 12.6564C12.298 12.7857 12.4323 12.8838 12.5996 12.9504C12.7688 13.0149 12.96 13.047 13.1729 13.047C13.3817 13.047 13.563 13.0169 13.7168 12.9562C13.8727 12.8954 13.9935 12.8106 14.0791 12.7023C14.1647 12.5939 14.208 12.469 14.208 12.3283C14.2079 12.1974 14.1686 12.0875 14.0908 11.9982C14.0148 11.9089 13.9022 11.8324 13.7539 11.7697C13.6076 11.707 13.4276 11.6501 13.2148 11.5988L12.5791 11.4387C12.0869 11.3189 11.6982 11.1318 11.4131 10.8771C11.128 10.6224 10.9855 10.2793 10.9873 9.84783C10.9854 9.49418 11.0804 9.18439 11.2705 8.9201C11.4625 8.65603 11.7261 8.45015 12.0605 8.30193C12.3951 8.15369 12.7754 8.07928 13.2012 8.07928Z\" fill=\"black\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.8125 14.0002H4.48926L4.05664 12.6681H1.94824L1.51465 14.0002H0.19043L2.20703 8.15935H3.79883L5.8125 14.0002ZM2.26172 11.7043H3.74316L3.02539 9.49334H2.98047L2.26172 11.7043Z\" fill=\"black\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.45215 8.15935C8.88165 8.15935 9.24031 8.22251 9.52734 8.34978C9.81445 8.47717 10.0303 8.65477 10.1748 8.88103C10.3192 9.10536 10.3916 9.36368 10.3916 9.65642C10.3916 9.88452 10.3461 10.085 10.2549 10.258C10.1637 10.4289 10.0384 10.5696 9.87891 10.6799C9.72117 10.7882 9.54024 10.8657 9.33691 10.9113V10.9679C9.55917 10.9775 9.76716 11.0406 9.96094 11.1564C10.1568 11.2724 10.3158 11.4356 10.4375 11.6447C10.5591 11.8519 10.6201 12.099 10.6201 12.3859C10.6201 12.6958 10.5427 12.9727 10.3887 13.216C10.2366 13.4573 10.0113 13.6486 9.71289 13.7892C9.41443 13.9299 9.04655 14.0002 8.60938 14.0002H6.11426V8.15935H8.45215ZM7.34863 12.9904H8.35547C8.69943 12.9904 8.95057 12.9252 9.1084 12.7941C9.26621 12.661 9.34473 12.4834 9.34473 12.2629C9.34468 12.1014 9.30643 11.9587 9.22852 11.8351C9.15056 11.7116 9.03903 11.6145 8.89453 11.5441C8.75195 11.4738 8.58148 11.4387 8.38379 11.4387H7.34863V12.9904ZM7.34863 10.6037H8.26465C8.43369 10.6036 8.58376 10.5737 8.71484 10.5148C8.84793 10.454 8.95227 10.3683 9.02832 10.258C9.10628 10.1477 9.14551 10.0155 9.14551 9.8615C9.14546 9.65055 9.07008 9.48001 8.91992 9.35076C8.77165 9.22169 8.56064 9.15741 8.28711 9.1574H7.34863V10.6037Z\" fill=\"black\"/><path d=\"M7.16602 0.377127C7.44584 0.189493 7.82551 0.20905 8.08496 0.442557L11.418 3.44256C11.7257 3.71966 11.7507 4.19428 11.4736 4.50213C11.1966 4.80961 10.7228 4.83441 10.415 4.55779L7.60938 2.03338L5.11328 4.53045C4.82042 4.82326 4.34562 4.82322 4.05273 4.53045C3.75986 4.23757 3.75989 3.7628 4.05273 3.4699L7.05273 0.4699L7.16602 0.377127Z\" fill=\"black\"/></svg>",
	adesc: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.3867 11.4697C10.6796 11.1771 11.1544 11.1769 11.4473 11.4697C11.7399 11.7626 11.7399 12.2374 11.4473 12.5303L8.44727 15.5303L8.33398 15.623C8.05425 15.8106 7.67449 15.7909 7.41504 15.5576L4.08203 12.5576C3.77415 12.2805 3.74927 11.8059 4.02637 11.498C4.30342 11.1907 4.77722 11.1657 5.08496 11.4424L7.89062 13.9668L10.3867 11.4697Z\" fill=\"black\"/><path d=\"M13.2012 3.0791C13.6346 3.07912 14.0128 3.1535 14.3359 3.30176C14.6611 3.45006 14.9141 3.65661 15.0947 3.9209C15.2752 4.18513 15.3683 4.49104 15.374 4.83887H14.1904C14.1676 4.60882 14.0695 4.43012 13.8965 4.30273C13.7235 4.17546 13.4889 4.11133 13.1924 4.11133C12.9909 4.11133 12.8204 4.14023 12.6816 4.19727C12.5431 4.25236 12.4364 4.32902 12.3623 4.42773C12.2901 4.52659 12.2539 4.63919 12.2539 4.76465C12.2501 4.86901 12.272 4.96023 12.3193 5.03809C12.3688 5.11604 12.4369 5.18417 12.5225 5.24121C12.6079 5.29623 12.7064 5.34496 12.8184 5.38672C12.9304 5.42661 13.0505 5.46075 13.1777 5.48926L13.7031 5.61426C13.9578 5.67128 14.1914 5.74776 14.4043 5.84277C14.6172 5.93784 14.8021 6.05457 14.958 6.19336C15.1139 6.33216 15.2348 6.49633 15.3203 6.68457C15.4076 6.8727 15.4522 7.08885 15.4541 7.33203C15.4521 7.68929 15.3612 7.99944 15.1807 8.26172C15.0019 8.52216 14.7427 8.72465 14.4043 8.86914C14.0678 9.01165 13.6617 9.08301 13.1865 9.08301C12.7153 9.08299 12.3048 9.01057 11.9551 8.86621C11.6072 8.72173 11.3345 8.50786 11.1387 8.22461C10.9447 7.9394 10.8435 7.58622 10.834 7.16602H12.0283C12.0416 7.36176 12.0985 7.52509 12.1973 7.65625C12.298 7.78554 12.4323 7.88365 12.5996 7.9502C12.7688 8.01477 12.96 8.04785 13.1729 8.04785C13.3817 8.04781 13.5629 8.01678 13.7168 7.95605C13.8727 7.89522 13.9935 7.81051 14.0791 7.70215C14.1646 7.59387 14.2079 7.46965 14.208 7.3291C14.208 7.19796 14.1687 7.08739 14.0908 6.99805C14.0148 6.90868 13.9022 6.83228 13.7539 6.76953C13.6076 6.70685 13.4276 6.64993 13.2148 6.59863L12.5791 6.43848C12.0868 6.31871 11.6982 6.13163 11.4131 5.87695C11.1279 5.62221 10.9855 5.27916 10.9873 4.84766C10.9854 4.49404 11.0804 4.18517 11.2705 3.9209C11.4625 3.65661 11.7259 3.45006 12.0605 3.30176C12.3951 3.15353 12.7754 3.0791 13.2012 3.0791Z\" fill=\"black\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5.8125 9H4.48926L4.05664 7.66797H1.94824L1.51465 9H0.19043L2.20703 3.15918H3.79883L5.8125 9ZM2.26172 6.7041H3.74316L3.02539 4.49414H2.98047L2.26172 6.7041Z\" fill=\"black\"/><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M8.45215 3.15918C8.88181 3.15918 9.24025 3.22322 9.52734 3.35059C9.81445 3.47798 10.0303 3.6546 10.1748 3.88086C10.3193 4.10518 10.3916 4.36351 10.3916 4.65625C10.3916 4.88432 10.3461 5.08484 10.2549 5.25781C10.1636 5.4289 10.0386 5.57039 9.87891 5.68066C9.72118 5.78898 9.54022 5.86549 9.33691 5.91113V5.96875C9.55913 5.9783 9.76719 6.04044 9.96094 6.15625C10.1568 6.27223 10.3158 6.43538 10.4375 6.64453C10.5591 6.85173 10.6201 7.09875 10.6201 7.38574C10.6201 7.69567 10.5427 7.97245 10.3887 8.21582C10.2366 8.45719 10.0113 8.64841 9.71289 8.78906C9.41442 8.9297 9.04658 8.99999 8.60938 9H6.11426V3.15918H8.45215ZM7.34863 7.99023H8.35547C8.69948 7.99023 8.95057 7.92504 9.1084 7.79395C9.26621 7.66085 9.34473 7.48325 9.34473 7.2627C9.34466 7.10125 9.3064 6.95844 9.22852 6.83496C9.15056 6.71143 9.03899 6.61427 8.89453 6.54395C8.75196 6.47365 8.58145 6.43848 8.38379 6.43848H7.34863V7.99023ZM7.34863 5.60352H8.26465C8.43369 5.60347 8.58376 5.57354 8.71484 5.51465C8.84791 5.45381 8.95228 5.36807 9.02832 5.25781C9.10623 5.14755 9.14551 5.01529 9.14551 4.86133C9.14542 4.65046 9.07002 4.48078 8.91992 4.35156C8.77163 4.22228 8.56087 4.15724 8.28711 4.15723H7.34863V5.60352Z\" fill=\"black\"/></svg>",
	"chevron-down": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"ag-icon\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 6L8 10L4 6\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
	"chevron-left": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"ag-icon\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10 12L6 8L10 4\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
	"chevron-right": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"ag-icon\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 12L10 8L6 4\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
	"chevron-up": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"ag-icon\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4 10L8 6L12 10\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
	"column-arrow": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"ag-icon\" fill=\"none\" viewBox=\"0 0 32 32\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M0 26C0 28.2092 1.79086 30 4 30H14C16.2091 30 18 28.2092 18 26V15H25.8786L24.4394 16.4393C23.8536 17.0251 23.8536 17.9749 24.4394 18.5607C25.0252 19.1464 25.9748 19.1464 26.5606 18.5607L30.5606 14.5607C31.1464 13.9749 31.1464 13.0251 30.5606 12.4393L26.5606 8.43934C25.9748 7.85356 25.0252 7.85356 24.4394 8.43934C23.8536 9.02512 23.8536 9.97488 24.4394 10.5607L25.8786 12H18V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V26ZM14 5H10.5V12H15V6C15 5.44772 14.5523 5 14 5ZM4 5H7.5V12H3V6C3 5.44772 3.44772 5 4 5ZM10.5 15H15V26C15 26.5522 14.5523 27 14 27H10.5V15ZM4 27H7.5V15H3V26C3 26.5522 3.44772 27 4 27Z\" fill=\"currentColor\"/></svg>",
	edit: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M3.5 10.6262V12.5012H5.375L10.905 6.97122L9.03 5.09622L3.5 10.6262ZM12.355 5.52122C12.4014 5.47497 12.4381 5.42002 12.4632 5.35953C12.4883 5.29905 12.5012 5.23421 12.5012 5.16872C12.5012 5.10324 12.4883 5.0384 12.4632 4.97791C12.4381 4.91742 12.4014 4.86248 12.355 4.81622L11.185 3.64622C11.1387 3.59987 11.0838 3.5631 11.0233 3.53801C10.9628 3.51291 10.898 3.5 10.8325 3.5C10.767 3.5 10.7022 3.51291 10.6417 3.53801C10.5812 3.5631 10.5263 3.59987 10.48 3.64622L9.565 4.56122L11.44 6.43622L12.355 5.52122Z\" fill=\"currentColor\"/></svg>",
	"filter-add": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"ag-icon\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.12126 7.75L10.8517 7.75\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M6.65934 11.748L9.32778 11.748\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M12.2943 1.04872V6.19184M14.9886 3.74341H9.68478\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M8.25488 3C8.04799 3.18323 7.91706 3.45099 7.91699 3.74902C7.91713 4.04868 8.04988 4.31681 8.25879 4.5H2C1.58579 4.5 1.25 4.16421 1.25 3.75C1.25 3.33579 1.58579 3 2 3H8.25488Z\" fill=\"currentColor\"/></svg>",
	"pinned-bottom": "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" class=\"ag-icon\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M3.47 12.28A.75.75 0 0 1 4 11h8a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.53-.22ZM12.731 5.256a.75.75 0 0 1-.2.524l-4 4a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l2.72 2.72V2a.75.75 0 0 1 1.5 0v5.44l2.72-2.72a.75.75 0 0 1 1.26.536Z\"/></svg>",
	"pinned-top": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"ag-icon\" fill=\"none\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M12.53 3.72A.75.75 0 0 1 12 5H4a.75.75 0 0 1 0-1.5h8a.75.75 0 0 1 .53.22ZM3.269 10.744a.75.75 0 0 1 .2-.524l4-4a.75.75 0 0 1 1.06 0l4 4a.75.75 0 1 1-1.06 1.06L8.75 8.56V14a.75.75 0 0 1-1.5 0V8.56l-2.72 2.72a.75.75 0 0 1-1.26-.536Z\"/></svg>",
	"small-down": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"ag-icon\" fill=\"black\" stroke=\"none\" viewBox=\"0 0 32 32\"><path d=\"M7.334 10.667 16 21.334l8.667-10.667H7.334Z\"/></svg>",
	"small-up": "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"ag-icon\" fill=\"black\" stroke=\"none\" viewBox=\"0 0 32 32\"><path d=\"M7.334 21.333 16 10.666l8.667 10.667H7.334Z\"/></svg>",
	"un-pin": "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" class=\"ag-icon\" viewBox=\"0 0 16 16\"><path fill=\"currentColor\" d=\"M8 11a.75.75 0 0 0-.75.75v3.333a.75.75 0 1 0 1.5 0V11.75A.75.75 0 0 0 8 11Z\"/><path fill=\"currentColor\" d=\"M13.11 1.436a.75.75 0 0 0-1.22-.872l-10 14a.75.75 0 1 0 1.22.872L5.207 12.5h7.376a.75.75 0 0 0 .75-.75v-1.174a2.08 2.08 0 0 0-1.153-1.863l-1.185-.599-.005-.002a.58.58 0 0 1-.323-.522V5.165a2.083 2.083 0 0 0 1.854-2.904l.589-.825Zm-3.943 5.52v.634a2.08 2.08 0 0 0 1.153 1.863l1.185.6.005.002a.58.58 0 0 1 .323.522V11H6.28l2.887-4.044ZM9.277 1H5.25a2.084 2.084 0 0 0-.083 4.165v1.676l1.5-2.132v-.292a.75.75 0 0 0-.75-.75H5.25a.584.584 0 0 1 0-1.167h2.972L9.277 1Z\"/></svg>"
}, hf = (e = {}) => {
	let t = "";
	for (let n of [...Object.keys(pf), ...Object.keys(mf)]) {
		let r = gf(n, e.strokeWidth);
		t += `.ag-icon-${n}::before { mask-image: url('data:image/svg+xml,${encodeURIComponent(r)}'); }
`;
	}
	return t;
}, gf = (e, t = 1.5) => {
	let n = mf[e];
	if (n) return n;
	let r = pf[e];
	if (!r) throw Error(`Missing icon data for ${e}`);
	return `<svg xmlns="http://www.w3.org/2000/svg" class="ag-icon" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke="black" stroke-width="${t}" viewBox="0 0 24 24"><style>* { vector-effect: non-scaling-stroke; }</style>` + r + "</svg>";
}, _f = /* @__PURE__ */ ((e = {}) => ad({
	feature: "iconSet",
	css: () => hf(e)
}))(), vf = ":where(.ag-input-field-input[type=number]:not(.ag-number-field-input-stepper)){-webkit-appearance:textfield;-moz-appearance:textfield;appearance:textfield;&::-webkit-inner-spin-button,&::-webkit-outer-spin-button{-webkit-appearance:none;appearance:none;margin:0}}.ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){background-color:var(--ag-input-background-color);border:var(--ag-input-border);border-radius:var(--ag-input-border-radius);color:var(--ag-input-text-color);font-family:inherit;font-size:inherit;line-height:inherit;margin:0;min-height:var(--ag-input-height);padding:0;&:where(:disabled){background-color:var(--ag-input-disabled-background-color);border:var(--ag-input-disabled-border);color:var(--ag-input-disabled-text-color)}&:where(:focus){background-color:var(--ag-input-focus-background-color);border:var(--ag-input-focus-border);box-shadow:var(--ag-input-focus-shadow);color:var(--ag-input-focus-text-color);outline:none}&:where(:invalid){background-color:var(--ag-input-invalid-background-color);border:var(--ag-input-invalid-border);color:var(--ag-input-invalid-text-color)}&:where(.invalid){background-color:var(--ag-input-invalid-background-color);border:var(--ag-input-invalid-border);color:var(--ag-input-invalid-text-color)}&::-moz-placeholder{color:var(--ag-input-placeholder-text-color)}&::placeholder{color:var(--ag-input-placeholder-text-color)}}:where(.ag-ltr) .ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){padding-left:var(--ag-input-padding-start)}:where(.ag-rtl) .ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){padding-right:var(--ag-input-padding-start)}&:where(.ag-ltr,.ag-rtl) .ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){padding:0 var(--ag-input-padding-start)}:where(.ag-column-select-header-filter-wrapper),:where(.ag-filter-add-select),:where(.ag-filter-filter),:where(.ag-filter-toolpanel-search),:where(.ag-floating-filter-search-icon),:where(.ag-mini-filter){.ag-input-wrapper:before{background-color:currentcolor;color:var(--ag-input-icon-color);content:\"\";display:block;height:12px;-webkit-mask-image:url(\"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNNS4zIDlhMy43IDMuNyAwIDEgMCAwLTcuNSAzLjcgMy43IDAgMCAwIDAgNy41Wk0xMC41IDEwLjUgOC4zIDguMiIvPjwvc3ZnPg==\");mask-image:url(\"data:image/svg+xml;charset=utf-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41Ij48cGF0aCBkPSJNNS4zIDlhMy43IDMuNyAwIDEgMCAwLTcuNSAzLjcgMy43IDAgMCAwIDAgNy41Wk0xMC41IDEwLjUgOC4zIDguMiIvPjwvc3ZnPg==\");-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;opacity:.5;position:absolute;width:12px}}:where(.ag-ltr) :where(.ag-column-select-header-filter-wrapper),:where(.ag-ltr) :where(.ag-filter-add-select),:where(.ag-ltr) :where(.ag-filter-filter),:where(.ag-ltr) :where(.ag-filter-toolpanel-search),:where(.ag-ltr) :where(.ag-floating-filter-search-icon),:where(.ag-ltr) :where(.ag-mini-filter){.ag-input-wrapper:before{margin-left:var(--ag-spacing)}.ag-number-field-input,.ag-text-field-input{padding-left:calc(var(--ag-spacing)*1.5 + 12px)}}:where(.ag-rtl) :where(.ag-column-select-header-filter-wrapper),:where(.ag-rtl) :where(.ag-filter-add-select),:where(.ag-rtl) :where(.ag-filter-filter),:where(.ag-rtl) :where(.ag-filter-toolpanel-search),:where(.ag-rtl) :where(.ag-floating-filter-search-icon),:where(.ag-rtl) :where(.ag-mini-filter){.ag-input-wrapper:before{margin-right:var(--ag-spacing)}.ag-number-field-input,.ag-text-field-input{padding-right:calc(var(--ag-spacing)*1.5 + 12px)}}", yf = ".ag-input-field-input:where(input:not([type]),input[type=text],input[type=number],input[type=tel],input[type=date],input[type=datetime-local],textarea){&:focus{box-shadow:var(--ag-focus-shadow);&:where(.invalid),&:where(:invalid){box-shadow:var(--ag-focus-error-shadow)}}}", bf = ad({
	feature: "inputStyle",
	params: {
		inputBackgroundColor: "transparent",
		inputBorder: !1,
		inputBorderRadius: 0,
		inputTextColor: { ref: "textColor" },
		inputPlaceholderTextColor: {
			ref: "inputTextColor",
			mix: .5
		},
		inputPaddingStart: 0,
		inputHeight: { calc: "max(iconSize, fontSize) + spacing * 2" },
		inputFocusBackgroundColor: { ref: "inputBackgroundColor" },
		inputFocusBorder: { ref: "inputBorder" },
		inputFocusShadow: "none",
		inputFocusTextColor: { ref: "inputTextColor" },
		inputDisabledBackgroundColor: { ref: "inputBackgroundColor" },
		inputDisabledBorder: { ref: "inputBorder" },
		inputDisabledTextColor: { ref: "inputTextColor" },
		inputInvalidBackgroundColor: { ref: "inputBackgroundColor" },
		inputInvalidBorder: { ref: "inputBorder" },
		inputInvalidTextColor: { ref: "inputTextColor" },
		inputIconColor: { ref: "inputTextColor" },
		pickerButtonBorder: !1,
		pickerButtonFocusBorder: { ref: "inputFocusBorder" },
		pickerButtonBackgroundColor: { ref: "backgroundColor" },
		pickerButtonFocusBackgroundColor: { ref: "backgroundColor" },
		pickerListBorder: !1,
		pickerListBackgroundColor: { ref: "backgroundColor" },
		colorPickerThumbSize: 18,
		colorPickerTrackSize: 12,
		colorPickerThumbBorderWidth: 3,
		colorPickerTrackBorderRadius: 12,
		colorPickerColorBorderRadius: 4,
		inputBackgroundColor: Q,
		inputBorder: !0,
		inputBorderRadius: { ref: "borderRadius" },
		inputPaddingStart: { ref: "spacing" },
		inputFocusBorder: { color: yd },
		inputFocusShadow: { ref: "focusShadow" },
		inputDisabledBackgroundColor: gd(.06),
		inputDisabledTextColor: {
			ref: "textColor",
			mix: .5
		},
		inputInvalidBorder: { color: { ref: "invalidColor" } },
		pickerButtonBorder: !0,
		pickerListBorder: !0
	},
	css: () => vf + yf
}), xf = ad({
	feature: "tabStyle",
	params: {
		tabBarBackgroundColor: "transparent",
		tabBarHorizontalPadding: 0,
		tabBarTopPadding: 0,
		tabBackgroundColor: "transparent",
		tabTextColor: { ref: "textColor" },
		tabHorizontalPadding: { ref: "spacing" },
		tabTopPadding: { ref: "spacing" },
		tabBottomPadding: { ref: "spacing" },
		tabSpacing: "0",
		tabHoverBackgroundColor: { ref: "tabBackgroundColor" },
		tabHoverTextColor: { ref: "tabTextColor" },
		tabSelectedBackgroundColor: { ref: "tabBackgroundColor" },
		tabSelectedTextColor: { ref: "tabTextColor" },
		tabSelectedBorderWidth: { ref: "borderWidth" },
		tabSelectedBorderColor: "transparent",
		tabSelectedUnderlineColor: "transparent",
		tabSelectedUnderlineWidth: 0,
		tabSelectedUnderlineTransitionDuration: 0,
		tabBarBorder: !1,
		tabBarBorder: !0,
		tabBarBackgroundColor: hd(.05),
		tabTextColor: {
			ref: "textColor",
			mix: .7
		},
		tabSelectedTextColor: { ref: "textColor" },
		tabHoverTextColor: { ref: "textColor" },
		tabSelectedBorderColor: { ref: "borderColor" },
		tabSelectedBackgroundColor: Q
	},
	css: ".ag-tabs-header{background-color:var(--ag-tab-bar-background-color);border-bottom:var(--ag-tab-bar-border);display:flex;flex:1;gap:var(--ag-tab-spacing);padding:var(--ag-tab-bar-top-padding) var(--ag-tab-bar-horizontal-padding) 0}.ag-tabs-header-wrapper{display:flex}.ag-tabs-close-button-wrapper{align-items:center;border:0;display:flex;padding:var(--ag-spacing)}:where(.ag-ltr) .ag-tabs-close-button-wrapper{border-right:solid var(--ag-border-width) var(--ag-border-color)}:where(.ag-rtl) .ag-tabs-close-button-wrapper{border-left:solid var(--ag-border-width) var(--ag-border-color)}.ag-tabs-close-button{background-color:unset;border:0;cursor:pointer;padding:0}.ag-tab{align-items:center;background-color:var(--ag-tab-background-color);border-left:var(--ag-tab-selected-border-width) solid transparent;border-right:var(--ag-tab-selected-border-width) solid transparent;color:var(--ag-tab-text-color);cursor:pointer;display:flex;flex:1;justify-content:center;padding:var(--ag-tab-top-padding) var(--ag-tab-horizontal-padding) var(--ag-tab-bottom-padding);position:relative}.ag-tab:hover{background-color:var(--ag-tab-hover-background-color);color:var(--ag-tab-hover-text-color)}.ag-tab.ag-tab-selected{background-color:var(--ag-tab-selected-background-color);color:var(--ag-tab-selected-text-color)}:where(.ag-ltr) .ag-tab.ag-tab-selected:where(:not(:first-of-type)){border-left-color:var(--ag-tab-selected-border-color)}:where(.ag-rtl) .ag-tab.ag-tab-selected:where(:not(:first-of-type)){border-right-color:var(--ag-tab-selected-border-color)}:where(.ag-ltr) .ag-tab.ag-tab-selected:where(:not(:last-of-type)){border-right-color:var(--ag-tab-selected-border-color)}:where(.ag-rtl) .ag-tab.ag-tab-selected:where(:not(:last-of-type)){border-left-color:var(--ag-tab-selected-border-color)}.ag-tab:after{background-color:var(--ag-tab-selected-underline-color);bottom:0;content:\"\";display:block;height:var(--ag-tab-selected-underline-width);left:0;opacity:0;position:absolute;right:0;transition:opacity var(--ag-tab-selected-underline-transition-duration)}.ag-tab.ag-tab-selected:after{opacity:1}"
}), Sf = cf().withPart(lf).withPart(ff).withPart(_f).withPart(xf).withPart(bf).withPart(af).withParams({ fontFamily: [
	{ googleFont: "IBM Plex Sans" },
	"-apple-system",
	"BlinkMacSystemFont",
	"Segoe UI",
	"Roboto",
	"Oxygen-Sans",
	"Ubuntu"
] }), Cf = (e, t, n, r, i) => ({
	changeKey: e,
	type: t,
	defaultValue: n,
	noWarn: r,
	cacheDefault: i
}), wf = Cf("cellHorizontalPadding", "length", 16), Tf = Cf("indentationLevel", "length", 0, !0, !0), Ef = Cf("rowGroupIndentSize", "length", 0), Df = Cf("rowHeight", "length", 42), Of = Cf("headerHeight", "length", 48), kf = Cf("rowBorderWidth", "border", 1), Af = Cf("pinnedRowBorderWidth", "border", 1), jf = Cf("headerRowBorderWidth", "border", 1);
function Mf(e, t) {
	for (let n of t.sort((e, t) => e.moduleName.localeCompare(t.moduleName))) {
		let t = n.css;
		t && e.set(`module-${n.moduleName}`, t);
	}
}
var Nf = class extends Jd {
	initVariables() {
		this.addManagedPropertyListener("rowHeight", () => this.refreshRowHeightVariable()), this.getSizeEl(Df), this.getSizeEl(Of), this.getSizeEl(kf), this.getSizeEl(Af), this.refreshRowBorderWidthVariable();
	}
	getPinnedRowBorderWidth() {
		return this.getCSSVariablePixelValue(Af);
	}
	getRowBorderWidth() {
		return this.getCSSVariablePixelValue(kf);
	}
	getHeaderRowBorderWidth() {
		return this.getCSSVariablePixelValue(jf);
	}
	getDefaultRowHeight() {
		return this.getCSSVariablePixelValue(Df);
	}
	getDefaultHeaderHeight() {
		return this.getCSSVariablePixelValue(Of);
	}
	getDefaultCellHorizontalPadding() {
		return this.getCSSVariablePixelValue(wf);
	}
	getCellPaddingLeft() {
		let e = this.getDefaultCellHorizontalPadding(), t = this.getCSSVariablePixelValue(Tf), n = this.getCSSVariablePixelValue(Ef);
		return e - 1 + n * t;
	}
	getCellPadding() {
		let e = this.getDefaultCellHorizontalPadding() - 1;
		return this.getCellPaddingLeft() + e;
	}
	getDefaultColumnMinWidth() {
		return Math.min(36, this.getDefaultRowHeight());
	}
	refreshRowHeightVariable() {
		let { eRootDiv: e } = this, t = e.style.getPropertyValue("--ag-line-height").trim(), n = this.gos.get("rowHeight");
		if (n == null || isNaN(n) || !isFinite(n)) return t !== null && e.style.setProperty("--ag-line-height", null), -1;
		let r = `${n}px`;
		return t == r ? t == "" ? -1 : Number.parseFloat(t) : (e.style.setProperty("--ag-line-height", r), n);
	}
	fireStylesChangedEvent(e) {
		e === "rowBorderWidth" && this.refreshRowBorderWidthVariable(), super.fireStylesChangedEvent(e);
	}
	refreshRowBorderWidthVariable() {
		let e = this.getCSSVariablePixelValue(kf);
		this.eRootDiv.style.setProperty("--ag-internal-row-border-width", `${e}px`);
	}
	postProcessThemeChange(e, t) {
		e && getComputedStyle(this.getMeasurementContainer()).getPropertyValue("--ag-legacy-styles-loaded") && Rn(t ? 106 : 239);
	}
	getAdditionalCss() {
		let e = /* @__PURE__ */ new Map();
		return e.set("core", [Zd]), Mf(e, Array.from(yn())), e;
	}
	getDefaultTheme() {
		return Sf;
	}
	varError(e, t) {
		W(9, { variable: {
			cssName: e,
			defaultValue: t
		} });
	}
	themeError(e) {
		Rn(240, { theme: e });
	}
	shadowRootError() {
		Rn(293);
	}
}, Pf = class extends Nt {
	constructor() {
		super(...arguments), this.beanName = "eventSvc", this.eventServiceType = "global", this.globalSvc = new R();
	}
	addListener(e, t, n) {
		this.globalSvc.addEventListener(e, t, n);
	}
	removeListener(e, t, n) {
		this.globalSvc.removeEventListener(e, t, n);
	}
	addGlobalListener(e, t = !1) {
		this.globalSvc.addGlobalListener(e, t);
	}
	removeGlobalListener(e, t = !1) {
		this.globalSvc.removeGlobalListener(e, t);
	}
	dispatchEvent(e) {
		this.globalSvc.dispatchEvent(this.gos.addCommon(e));
	}
	dispatchEventOnce(e) {
		this.globalSvc.dispatchEventOnce(this.gos.addCommon(e));
	}
}, Ff = class extends Pf {
	postConstruct() {
		let { globalListener: e, globalSyncListener: t } = this.beans;
		e && this.addGlobalListener(e, !0), t && this.addGlobalListener(t, !1);
	}
};
function If(e, t, n) {
	let r = e.visibleCols.headerGroupRowCount;
	if (n >= r) return {
		column: t,
		headerRowIndex: n
	};
	let i = t.getParent();
	for (; i && i.getProvidedColumnGroup().getLevel() > n;) i = i.getParent();
	let a = t.isSpanHeaderHeight();
	return !i || a && i.isPadding() ? {
		column: t,
		headerRowIndex: r
	} : {
		column: i,
		headerRowIndex: i.getProvidedColumnGroup().getLevel()
	};
}
var Lf = class extends H {
	constructor() {
		super(...arguments), this.beanName = "headerNavigation", this.currentHeaderRowWithoutSpan = -1;
	}
	postConstruct() {
		let e = this.beans;
		e.ctrlsSvc.whenReady(this, (e) => {
			this.gridBodyCon = e.gridBodyCtrl;
		});
		let t = B(e);
		this.addManagedElementListeners(t, { mousedown: () => {
			this.currentHeaderRowWithoutSpan = -1;
		} });
	}
	getHeaderPositionForColumn(e, t) {
		let n, { colModel: r, colGroupSvc: i, ctrlsSvc: a } = this.beans;
		if (typeof e == "string" ? (n = r.getCol(e), n ||= i?.getColumnGroup(e) ?? null) : n = e, !n) return null;
		let o = a.getHeaderRowContainerCtrl()?.getAllCtrls(), s = M(o || []).type === "filter", c = co(this.beans) - 1, l = -1, u = n;
		for (; u;) l++, u = u.getParent();
		let d = l;
		return t && s && d === c - 1 && d++, d === -1 ? null : {
			headerRowIndex: d,
			column: n
		};
	}
	navigateVertically(e, t) {
		let { focusSvc: n, visibleCols: r } = this.beans, { focusedHeader: i } = n;
		if (!i) return !1;
		let { headerRowIndex: a } = i, o = i.column, s = co(this.beans), c = this.getHeaderRowType(a), l = r.headerGroupRowCount, { headerRowIndex: u, column: d, headerRowIndexWithoutSpan: f } = e === "UP" ? Rf(c, o, a) : zf(o, a, l), p = !1;
		return u < 0 && (u = 0, d = o, p = !0), u >= s ? (u = -1, this.currentHeaderRowWithoutSpan = -1) : f !== void 0 && (this.currentHeaderRowWithoutSpan = f), !p && !d ? !1 : n.focusHeaderPosition({
			headerPosition: {
				headerRowIndex: u,
				column: d
			},
			allowUserOverride: !0,
			event: t
		});
	}
	navigateHorizontally(e, t = !1, n) {
		let { focusSvc: r, gos: i } = this.beans, a = { ...r.focusedHeader }, o, s;
		this.currentHeaderRowWithoutSpan === -1 ? this.currentHeaderRowWithoutSpan = a.headerRowIndex : a.headerRowIndex = this.currentHeaderRowWithoutSpan, e === "LEFT" === i.get("enableRtl") ? (s = "After", o = this.findHeader(a, s)) : (s = "Before", o = this.findHeader(a, s));
		let c = i.getCallback("tabToNextHeader");
		if (t && c) {
			let e = r.focusHeaderPositionFromUserFunc({
				userFunc: c,
				headerPosition: o,
				direction: s
			});
			if (e) {
				let { headerRowIndex: e } = r.focusedHeader || {};
				e != null && e != a.headerRowIndex && (this.currentHeaderRowWithoutSpan = e);
			}
			return e;
		}
		return o || !t ? r.focusHeaderPosition({
			headerPosition: o,
			direction: s,
			fromTab: t,
			allowUserOverride: !0,
			event: n
		}) : this.focusNextHeaderRow(a, s, n);
	}
	focusNextHeaderRow(e, t, n) {
		let r = this.beans, i = e.headerRowIndex, a = null, o, s = co(r), c = this.beans.visibleCols.allCols;
		if (t === "Before") {
			if (i <= 0) return !1;
			a = M(c), o = i - 1, --this.currentHeaderRowWithoutSpan;
		} else a = c[0], o = i + 1, this.currentHeaderRowWithoutSpan < s ? this.currentHeaderRowWithoutSpan += 1 : this.currentHeaderRowWithoutSpan = -1;
		let { column: l, headerRowIndex: u } = If(this.beans, a, o);
		return u >= s && (u = -1), r.focusSvc.focusHeaderPosition({
			headerPosition: {
				column: l,
				headerRowIndex: u
			},
			direction: t,
			fromTab: !0,
			allowUserOverride: !0,
			event: n
		});
	}
	scrollToColumn(e, t = "After") {
		if (e.getPinned()) return;
		let n;
		if (J(e)) {
			let r = e.getDisplayedLeafColumns();
			n = t === "Before" ? M(r) : r[0];
		} else n = e;
		this.gridBodyCon.scrollFeature.ensureColumnVisible(n);
	}
	findHeader(e, t) {
		let { colGroupSvc: n, visibleCols: r } = this.beans, i = e.column;
		if (i instanceof fi) {
			let e = i.getDisplayedLeafColumns();
			i = t === "Before" ? e[0] : e[e.length - 1];
		}
		let a = t === "Before" ? r.getColBefore(i) : r.getColAfter(i);
		if (!a) return;
		let o = r.headerGroupRowCount;
		if (e.headerRowIndex >= o) return {
			headerRowIndex: e.headerRowIndex,
			column: a
		};
		let s = n?.getColGroupAtLevel(a, e.headerRowIndex);
		return s ? s.isPadding() && a.isSpanHeaderHeight() ? {
			headerRowIndex: r.headerGroupRowCount,
			column: a
		} : {
			headerRowIndex: e.headerRowIndex,
			column: s ?? a
		} : {
			headerRowIndex: a instanceof Dr && a.isSpanHeaderHeight() ? r.headerGroupRowCount : e.headerRowIndex,
			column: a
		};
	}
	getHeaderRowType(e) {
		let t = this.beans.ctrlsSvc.getHeaderRowContainerCtrl();
		if (t) return t.getRowType(e);
	}
};
function Rf(e, t, n) {
	let r = n - 1;
	if (e !== "filter") {
		let e = t instanceof Dr && t.isSpanHeaderHeight(), n = t.getParent();
		for (; n && (n.getProvidedColumnGroup().getLevel() > r || e && n.isPadding());) n = n.getParent();
		if (n) return e ? {
			column: n,
			headerRowIndex: n.getProvidedColumnGroup().getLevel(),
			headerRowIndexWithoutSpan: r
		} : {
			column: n,
			headerRowIndex: r,
			headerRowIndexWithoutSpan: r
		};
	}
	return {
		column: t,
		headerRowIndex: r,
		headerRowIndexWithoutSpan: r
	};
}
function zf(e, t, n) {
	let r = t + 1, i = {
		column: e,
		headerRowIndex: r,
		headerRowIndexWithoutSpan: r
	};
	if (e instanceof fi) {
		if (r >= n) return {
			column: e.getDisplayedLeafColumns()[0],
			headerRowIndex: n,
			headerRowIndexWithoutSpan: r
		};
		let t = e.getDisplayedChildren()[0];
		if (t instanceof fi && t.isPadding()) {
			let e = t.getDisplayedLeafColumns()[0];
			e.isSpanHeaderHeight() && (t = e);
		}
		i.column = t, t instanceof Dr && t.isSpanHeaderHeight() && (i.headerRowIndex = n, i.headerRowIndexWithoutSpan = r);
	}
	return i;
}
var Bf = class extends H {
	constructor() {
		super(...arguments), this.beanName = "focusSvc", this.focusFallbackTimeout = null, this.needsFocusRestored = !1;
	}
	wireBeans(e) {
		this.colModel = e.colModel, this.visibleCols = e.visibleCols, this.rowRenderer = e.rowRenderer, this.navigation = e.navigation, this.filterManager = e.filterManager, this.overlays = e.overlays;
	}
	postConstruct() {
		let e = this.clearFocusedCell.bind(this);
		this.addManagedEventListeners({
			columnPivotModeChanged: e,
			newColumnsLoaded: this.onColumnEverythingChanged.bind(this),
			columnGroupOpened: e,
			columnRowGroupChanged: e
		}), this.addDestroyFunc(ba(this.beans));
	}
	attemptToRecoverFocus() {
		this.needsFocusRestored = !0, this.focusFallbackTimeout != null && clearTimeout(this.focusFallbackTimeout), this.focusFallbackTimeout = window.setTimeout(this.setFocusRecovered.bind(this), 100);
	}
	setFocusRecovered() {
		this.needsFocusRestored = !1, this.focusFallbackTimeout != null && (clearTimeout(this.focusFallbackTimeout), this.focusFallbackTimeout = null);
	}
	shouldTakeFocus() {
		return this.gos.get("suppressFocusAfterRefresh") ? (this.setFocusRecovered(), !1) : this.needsFocusRestored ? (this.setFocusRecovered(), !0) : this.doesRowOrCellHaveBrowserFocus();
	}
	onColumnEverythingChanged() {
		if (!this.focusedCell) return;
		let e = this.focusedCell.column;
		e !== this.colModel.getCol(e.getId()) && this.clearFocusedCell();
	}
	getFocusCellToUseAfterRefresh() {
		let { gos: e, focusedCell: t } = this;
		return e.get("suppressFocusAfterRefresh") || e.get("suppressCellFocus") || !t || !this.doesRowOrCellHaveBrowserFocus() ? null : t;
	}
	getFocusHeaderToUseAfterRefresh() {
		return this.gos.get("suppressFocusAfterRefresh") || !this.focusedHeader || !this.isDomDataPresentInHierarchy(z(this.beans), Mo) ? null : this.focusedHeader;
	}
	doesRowOrCellHaveBrowserFocus() {
		let e = z(this.beans);
		return this.isDomDataPresentInHierarchy(e, us, !0) ? !0 : this.isDomDataPresentInHierarchy(e, fs, !0);
	}
	isDomDataPresentInHierarchy(e, t, n) {
		let r = e;
		for (; r;) {
			let e = $n(this.gos, r, t);
			if (e) return e.destroyed && n ? (this.attemptToRecoverFocus(), !1) : !0;
			r = r.parentNode;
		}
		return !1;
	}
	getFocusedCell() {
		return this.focusedCell;
	}
	getFocusEventParams(e) {
		let { rowIndex: t, rowPinned: n, column: r } = e, i = {
			rowIndex: t,
			rowPinned: n,
			column: r,
			isFullWidthCell: !1
		}, a = this.rowRenderer.getRowByPosition({
			rowIndex: t,
			rowPinned: n
		});
		return a && (i.isFullWidthCell = a.isFullWidth()), i;
	}
	clearFocusedCell() {
		if (this.focusedCell == null) return;
		let e = this.getFocusEventParams(this.focusedCell);
		this.focusedCell = null, this.eventSvc.dispatchEvent({
			type: "cellFocusCleared",
			...e
		});
	}
	setFocusedCell(e) {
		this.setFocusRecovered();
		let { column: t, rowIndex: n, rowPinned: r, forceBrowserFocus: i = !1, preventScrollOnBrowserFocus: a = !1, sourceEvent: o } = e, s = this.colModel.getCol(t);
		if (!s) {
			this.focusedCell = null;
			return;
		}
		this.focusedCell = {
			rowIndex: n,
			rowPinned: F(r),
			column: s
		};
		let c = this.getFocusEventParams(this.focusedCell);
		this.eventSvc.dispatchEvent({
			type: "cellFocused",
			...c,
			...this.previousCellFocusParams && { previousParams: this.previousCellFocusParams },
			forceBrowserFocus: i,
			preventScrollOnBrowserFocus: a,
			sourceEvent: o
		}), this.previousCellFocusParams = c;
	}
	isCellFocused(e) {
		return this.focusedCell == null ? !1 : Ga(e, this.focusedCell);
	}
	isHeaderWrapperFocused(e) {
		if (this.focusedHeader == null) return !1;
		let { column: t, rowCtrl: { rowIndex: n, pinned: r } } = e, { column: i, headerRowIndex: a } = this.focusedHeader;
		return t === i && n === a && r == i.getPinned();
	}
	focusHeaderPosition(e) {
		if (this.setFocusRecovered(), no(this.beans)) return !1;
		let { direction: t, fromTab: n, allowUserOverride: r, event: i, fromCell: a, rowWithoutSpanValue: o, scroll: s = !0 } = e, { headerPosition: c } = e;
		if (a && this.filterManager?.isAdvFilterHeaderActive()) return this.focusAdvancedFilter(c);
		if (r) {
			let e = this.focusedHeader, r = co(this.beans);
			if (n) {
				let n = this.gos.getCallback("tabToNextHeader");
				n && (c = this.getHeaderPositionFromUserFunc({
					userFunc: n,
					direction: t,
					currentPosition: e,
					headerPosition: c,
					headerRowCount: r
				}));
			} else {
				let t = this.gos.getCallback("navigateToNextHeader");
				if (t && i) {
					let n = t({
						key: i.key,
						previousHeaderPosition: e,
						nextHeaderPosition: c,
						headerRowCount: r,
						event: i
					});
					c = n === null ? e : n;
				}
			}
		}
		return c ? this.focusProvidedHeaderPosition({
			headerPosition: c,
			direction: t,
			event: i,
			fromCell: a,
			rowWithoutSpanValue: o,
			scroll: s
		}) : !1;
	}
	focusHeaderPositionFromUserFunc(e) {
		if (no(this.beans)) return !1;
		let { userFunc: t, headerPosition: n, direction: r, event: i } = e, a = this.focusedHeader, o = co(this.beans), s = this.getHeaderPositionFromUserFunc({
			userFunc: t,
			direction: r,
			currentPosition: a,
			headerPosition: n,
			headerRowCount: o
		});
		return !!s && this.focusProvidedHeaderPosition({
			headerPosition: s,
			direction: r,
			event: i
		});
	}
	getHeaderPositionFromUserFunc(e) {
		let { userFunc: t, direction: n, currentPosition: r, headerPosition: i, headerRowCount: a } = e, o = t({
			backwards: n === "Before",
			previousHeaderPosition: r,
			nextHeaderPosition: i,
			headerRowCount: a
		});
		return o === !0 ? r : o === !1 ? null : o;
	}
	focusProvidedHeaderPosition(e) {
		let { headerPosition: t, direction: n, fromCell: r, rowWithoutSpanValue: i, event: a, scroll: o = !0 } = e, { column: s, headerRowIndex: c } = t, { filterManager: l, ctrlsSvc: u, headerNavigation: d } = this.beans;
		if (this.focusedHeader && vo(e.headerPosition, this.focusedHeader)) return !1;
		if (c === -1) return l?.isAdvFilterHeaderActive() ? this.focusAdvancedFilter(t) : this.focusGridView({
			column: s,
			event: a
		});
		o && d?.scrollToColumn(s, n);
		let f = u.getHeaderRowContainerCtrl(s.getPinned())?.focusHeader(t.headerRowIndex, s, a) || !1;
		return d && f && (i != null || r) && (d.currentHeaderRowWithoutSpan = i ?? -1), f;
	}
	focusFirstHeader() {
		if (this.overlays?.exclusive && this.focusOverlay()) return !0;
		let e = this.visibleCols.allCols[0];
		if (!e) return !1;
		let t = If(this.beans, e, 0);
		return this.focusHeaderPosition({
			headerPosition: t,
			rowWithoutSpanValue: 0
		});
	}
	focusLastHeader(e) {
		if (this.overlays?.exclusive && this.focusOverlay(!0)) return !0;
		let t = co(this.beans) - 1, n = M(this.visibleCols.allCols);
		return this.focusHeaderPosition({
			headerPosition: {
				headerRowIndex: t,
				column: n
			},
			rowWithoutSpanValue: -1,
			event: e
		});
	}
	focusPreviousFromFirstCell(e) {
		return this.filterManager?.isAdvFilterHeaderActive() ? this.focusAdvancedFilter(null) : this.focusLastHeader(e);
	}
	isAnyCellFocused() {
		return !!this.focusedCell;
	}
	isRowFocused(e, t) {
		return this.focusedCell == null ? !1 : this.focusedCell.rowIndex === e && this.focusedCell.rowPinned === F(t);
	}
	focusOverlay(e) {
		let t = this.overlays?.isVisible() && this.overlays.eWrapper?.getGui();
		return !!t && Ca(t, e);
	}
	getDefaultTabToNextGridContainerTarget(e) {
		let { backwards: t, focusableContainers: n } = e, r = t ? -1 : 1, i, a = () => (i === void 0 && (i = this.getGridBodyTabTarget(t)), i);
		for (let t = e.nextIndex; t >= 0 && t < n.length; t += r) {
			let e = oo(n[t], a);
			if (e) return e;
		}
		return null;
	}
	getGridBodyTabTarget(e) {
		if (e) return this.getGridViewTabTarget({
			column: M(this.visibleCols.allCols),
			backwards: !0
		});
		let t = this.visibleCols.allCols[0];
		return this.gos.get("headerHeight") === 0 || no(this.beans) ? this.getGridViewTabTarget({ column: t }) : t ? If(this.beans, t, 0) : null;
	}
	getGridViewTabTarget(e) {
		let { backwards: t = !1 } = e, n = e.column ?? this.focusedHeader?.column;
		if (!n || this.overlays?.exclusive) return null;
		if (ro(this.beans)) return t && !no(this.beans) ? {
			headerRowIndex: co(this.beans) - 1,
			column: n
		} : null;
		let r = t ? Ja(this.beans) : qa(this.beans);
		if (r?.rowIndex == null) {
			if (this.overlays?.isVisible()) return null;
			if (t && !no(this.beans)) {
				let e = M(this.visibleCols.allCols);
				if (e) return {
					headerRowIndex: co(this.beans) - 1,
					column: e
				};
			}
			return null;
		}
		let i = Ya(this.beans, r);
		return !i || n.isSuppressNavigable(i) || t && this.rowRenderer.getRowByPosition(r)?.isFullWidth() ? null : {
			rowIndex: r.rowIndex,
			rowPinned: r.rowPinned,
			column: n
		};
	}
	focusGridView(e) {
		let { backwards: t = !1, canFocusOverlay: n = !0, event: r } = e;
		if (this.overlays?.exclusive) return n && this.focusOverlay(t);
		if (ro(this.beans)) return t && !no(this.beans) ? this.focusLastHeader() : n && this.focusOverlay(t) ? !0 : t ? !1 : io(this.beans, t);
		let i = t ? Ja(this.beans) : qa(this.beans);
		if (i) {
			let n = e.column ?? this.focusedHeader?.column, { rowIndex: a, rowPinned: o } = i, s = Ya(this.beans, i);
			if (!n || !s || a == null) return !1;
			if (n.isSuppressNavigable(s)) {
				let e = this.gos.get("enableRtl"), t;
				return t = !r || r.key === Y.TAB ? e ? Y.LEFT : Y.RIGHT : r.key, this.beans.navigation?.navigateToNextCell(null, t, {
					rowIndex: a,
					column: n,
					rowPinned: o || null
				}, !0), !0;
			}
			return this.navigation?.ensureCellVisible({
				rowIndex: a,
				column: n,
				rowPinned: o
			}), t && this.rowRenderer.getRowByPosition(i)?.isFullWidth() && this.navigation?.tryToFocusFullWidthRow(i, t) ? !0 : (this.setFocusedCell({
				rowIndex: a,
				column: n,
				rowPinned: F(o),
				forceBrowserFocus: !0
			}), ai(n) || this.beans.rangeSvc?.setRangeToCell({
				rowIndex: a,
				rowPinned: o,
				column: n
			}), !0);
		}
		return !!(n && this.focusOverlay(t) || t && this.focusLastHeader());
	}
	focusAdvancedFilter(e) {
		return this.advFilterFocusColumn = e?.column, this.beans.advancedFilter?.getCtrl().focusHeaderComp() ?? !1;
	}
	focusNextFromAdvancedFilter(e, t) {
		let n = (t ? void 0 : this.advFilterFocusColumn) ?? this.visibleCols.allCols?.[0];
		return e ? this.focusHeaderPosition({ headerPosition: {
			column: n,
			headerRowIndex: co(this.beans) - 1
		} }) : this.focusGridView({ column: n });
	}
	clearAdvancedFilterColumn() {
		this.advFilterFocusColumn = void 0;
	}
}, Vf = class extends H {
	constructor() {
		super(...arguments), this.beanName = "scrollVisibleSvc";
	}
	wireBeans(e) {
		this.ctrlsSvc = e.ctrlsSvc, this.colAnimation = e.colAnimation;
	}
	postConstruct() {
		let { gos: e } = this;
		this.horizontalScrollShowing = e.get("alwaysShowHorizontalScroll") === !0, this.verticalScrollShowing = e.get("alwaysShowVerticalScroll") === !0, this.getScrollbarWidth();
		let t = this.updateScrollVisible.bind(this);
		this.addManagedEventListeners({
			displayedColumnsChanged: t,
			displayedColumnsWidthChanged: t,
			newColumnsLoaded: t
		});
	}
	updateScrollVisible() {
		let { colAnimation: e } = this;
		e?.isActive() ? e.executeLaterVMTurn(() => {
			e.executeLaterVMTurn(() => this.updateScrollVisibleImpl());
		}) : this.updateScrollVisibleImpl();
	}
	updateScrollVisibleImpl() {
		let e = this.ctrlsSvc.get("center");
		if (!e || this.colAnimation?.isActive()) return;
		let t = {
			horizontalScrollShowing: e.isHorizontalScrollShowing(),
			verticalScrollShowing: this.verticalScrollShowing
		};
		this.setScrollsVisible(t), this.updateScrollGap();
	}
	updateScrollGap() {
		let e = this.ctrlsSvc.get("center"), t = e.hasHorizontalScrollGap(), n = e.hasVerticalScrollGap();
		(this.horizontalScrollGap !== t || this.verticalScrollGap !== n) && (this.horizontalScrollGap = t, this.verticalScrollGap = n, this.eventSvc.dispatchEvent({ type: "scrollGapChanged" }));
	}
	setScrollsVisible(e) {
		(this.horizontalScrollShowing !== e.horizontalScrollShowing || this.verticalScrollShowing !== e.verticalScrollShowing) && (this.horizontalScrollShowing = e.horizontalScrollShowing, this.verticalScrollShowing = e.verticalScrollShowing, this.eventSvc.dispatchEvent({ type: "scrollVisibilityChanged" }));
	}
	getScrollbarWidth() {
		if (this.scrollbarWidth == null) {
			let e = this.gos.get("scrollbarWidth"), t = typeof e == "number" && e >= 0 ? e : fa();
			t != null && (this.scrollbarWidth = t, this.eventSvc.dispatchEvent({ type: "scrollbarWidthChanged" }));
		}
		return this.scrollbarWidth;
	}
}, Hf = class extends H {
	constructor() {
		super(...arguments), this.beanName = "gridDestroySvc", this.destroyCalled = !1;
	}
	destroy() {
		if (this.destroyCalled) return;
		let { stateSvc: e, ctrlsSvc: t, context: n } = this.beans;
		this.eventSvc.dispatchEvent({
			type: "gridPreDestroyed",
			state: e?.getState() ?? {}
		}), this.destroyCalled = !0, t.get("gridCtrl")?.destroyGridUi(), n.destroy(), super.destroy();
	}
}, Uf = /* @__PURE__ */ "columnEverythingChanged.newColumnsLoaded.columnPivotModeChanged.pivotMaxColumnsExceeded.columnRowGroupChanged.expandOrCollapseAll.columnPivotChanged.gridColumnsChanged.columnValueChanged.columnMoved.columnVisible.columnPinned.columnGroupOpened.columnResized.displayedColumnsChanged.virtualColumnsChanged.columnHeaderMouseOver.columnHeaderMouseLeave.columnHeaderClicked.columnHeaderContextMenu.asyncTransactionsFlushed.rowGroupOpened.rowDataUpdated.pinnedRowDataChanged.pinnedRowsChanged.rangeSelectionChanged.cellSelectionChanged.chartCreated.chartRangeSelectionChanged.chartOptionsChanged.chartDestroyed.toolPanelVisibleChanged.toolPanelSizeChanged.modelUpdated.cutStart.cutEnd.pasteStart.pasteEnd.fillStart.fillEnd.cellSelectionDeleteStart.cellSelectionDeleteEnd.rangeDeleteStart.rangeDeleteEnd.undoStarted.undoEnded.redoStarted.redoEnded.cellClicked.cellDoubleClicked.cellMouseDown.cellContextMenu.cellValueChanged.cellEditRequest.rowValueChanged.headerFocused.cellFocused.rowSelected.selectionChanged.tooltipShow.tooltipHide.cellKeyDown.cellMouseOver.cellMouseOut.filterChanged.filterModified.filterUiChanged.filterOpened.floatingFilterUiChanged.advancedFilterBuilderVisibleChanged.sortChanged.virtualRowRemoved.rowClicked.rowDoubleClicked.gridReady.gridPreDestroyed.gridSizeChanged.viewportChanged.firstDataRendered.dragStarted.dragStopped.dragCancelled.rowEditingStarted.rowEditingStopped.cellEditingStarted.cellEditingStopped.bodyScroll.bodyScrollEnd.paginationChanged.componentStateChanged.storeRefreshed.stateUpdated.columnMenuVisibleChanged.contextMenuVisibleChanged.rowDragEnter.rowDragMove.rowDragLeave.rowDragEnd.rowDragCancel.findChanged.rowResizeStarted.rowResizeEnded.columnsReset.bulkEditingStarted.bulkEditingStopped.batchEditingStarted.batchEditingStopped".split("."), Wf = /* @__PURE__ */ new Set([
	"gridPreDestroyed",
	"fillStart",
	"pasteStart"
]), Gf = Uf.reduce((e, t) => (e[t] = gr(t), e), {}), Kf = {
	agSetColumnFilter: "SetFilter",
	agSetColumnFloatingFilter: "SetFilter",
	agMultiColumnFilter: "MultiFilter",
	agMultiColumnFloatingFilter: "MultiFilter",
	agGroupColumnFilter: "GroupFilter",
	agGroupColumnFloatingFilter: "GroupFilter",
	agGroupCellRenderer: "GroupCellRenderer",
	agGroupRowRenderer: "GroupCellRenderer",
	agRichSelect: "RichSelect",
	agRichSelectCellEditor: "RichSelect",
	agDetailCellRenderer: "SharedMasterDetail",
	agSparklineCellRenderer: "Sparklines",
	agDragAndDropImage: "SharedDragAndDrop",
	agColumnHeader: "ColumnHeaderComp",
	agColumnGroupHeader: "ColumnGroupHeaderComp",
	agSortIndicator: "Sort",
	agAnimateShowChangeCellRenderer: "HighlightChanges",
	agAnimateSlideCellRenderer: "HighlightChanges",
	agLoadingCellRenderer: "LoadingCellRenderer",
	agSkeletonCellRenderer: "SkeletonCellRenderer",
	agCheckboxCellRenderer: "CheckboxCellRenderer",
	agLoadingOverlay: "Overlay",
	agExportingOverlay: "Overlay",
	agNoRowsOverlay: "Overlay",
	agNoMatchingRowsOverlay: "Overlay",
	agTooltipComponent: "Tooltip",
	agReadOnlyFloatingFilter: "CustomFilter",
	agTextColumnFilter: "TextFilter",
	agNumberColumnFilter: "NumberFilter",
	agBigIntColumnFilter: "BigIntFilter",
	agDateColumnFilter: "DateFilter",
	agDateInput: "DateFilter",
	agTextColumnFloatingFilter: "TextFilter",
	agNumberColumnFloatingFilter: "NumberFilter",
	agBigIntColumnFloatingFilter: "BigIntFilter",
	agDateColumnFloatingFilter: "DateFilter",
	agFormulaCellEditor: "Formula",
	agCellEditor: "TextEditor",
	agSelectCellEditor: "SelectEditor",
	agTextCellEditor: "TextEditor",
	agNumberCellEditor: "NumberEditor",
	agDateCellEditor: "DateEditor",
	agDateStringCellEditor: "DateEditor",
	agCheckboxCellEditor: "CheckboxEditor",
	agLargeTextCellEditor: "LargeTextEditor",
	agMenuItem: "MenuItem",
	agColumnsToolPanel: "ColumnsToolPanel",
	agFiltersToolPanel: "FiltersToolPanel",
	agNewFiltersToolPanel: "NewFiltersToolPanel",
	agAggregationComponent: "StatusBar",
	agSelectedRowCountComponent: "StatusBar",
	agTotalRowCountComponent: "StatusBar",
	agFilteredRowCountComponent: "StatusBar",
	agTotalAndFilteredRowCountComponent: "StatusBar",
	agFindCellRenderer: "Find"
}, qf = {
	allowFormula: "Formula",
	aggFunc: "SharedAggregation",
	autoHeight: "RowAutoHeight",
	cellClass: "CellStyle",
	cellClassRules: "CellStyle",
	cellEditor: ({ cellEditor: e, editable: t, groupRowEditable: n }) => t || n ? typeof e == "string" ? Kf[e] ?? "CustomEditor" : "CustomEditor" : null,
	cellRenderer: ({ cellRenderer: e }) => typeof e == "string" ? Kf[e] : null,
	cellStyle: "CellStyle",
	columnChooserParams: "ColumnMenu",
	contextMenuItems: "ContextMenu",
	dndSource: "DragAndDrop",
	dndSourceOnRowDrag: "DragAndDrop",
	editable: ({ editable: e, cellEditor: t }) => e && !t ? "TextEditor" : null,
	groupRowEditable: ({ groupRowEditable: e, cellEditor: t }) => e ? t ? "RowGroupingEdit" : ["RowGroupingEdit", "TextEditor"] : null,
	groupRowValueSetter: ({ groupRowValueSetter: e }) => e ? "RowGroupingEdit" : null,
	enableCellChangeFlash: "HighlightChanges",
	enablePivot: "SharedPivot",
	enableRowGroup: "SharedRowGrouping",
	enableValue: "SharedAggregation",
	filter: ({ filter: e }) => e && typeof e != "string" && typeof e != "boolean" ? "CustomFilter" : typeof e == "string" ? Kf[e] ?? "ColumnFilter" : "ColumnFilter",
	floatingFilter: "ColumnFilter",
	getQuickFilterText: "QuickFilter",
	headerTooltip: "Tooltip",
	headerTooltipValueGetter: "Tooltip",
	mainMenuItems: "ColumnMenu",
	menuTabs: (e) => {
		let t = ["columnsMenuTab", "generalMenuTab"];
		return e.menuTabs?.some((e) => t.includes(e)) ? "ColumnMenu" : null;
	},
	pivot: "SharedPivot",
	pivotIndex: "SharedPivot",
	rowDrag: "RowDrag",
	rowGroup: "SharedRowGrouping",
	rowGroupIndex: "SharedRowGrouping",
	tooltipField: "Tooltip",
	tooltipValueGetter: "Tooltip",
	tooltipComponentSelector: "Tooltip",
	spanRows: "CellSpan",
	groupHierarchy: "SharedRowGrouping"
}, Jf = {
	alignedGrids: "AlignedGrids",
	allowContextMenuWithControlKey: "ContextMenu",
	autoSizeStrategy: "ColumnAutoSize",
	cellSelection: "CellSelection",
	columnHoverHighlight: "ColumnHover",
	datasource: "InfiniteRowModel",
	doesExternalFilterPass: "ExternalFilter",
	editType: "EditCore",
	invalidEditValueMode: "EditCore",
	enableAdvancedFilter: "AdvancedFilter",
	enableCellSpan: "CellSpan",
	enableCharts: "IntegratedCharts",
	enableRangeSelection: "CellSelection",
	enableRowPinning: "PinnedRow",
	findSearchValue: "Find",
	getFullRowEditValidationErrors: "EditCore",
	getContextMenuItems: "ContextMenu",
	getLocaleText: "Locale",
	getMainMenuItems: "ColumnMenu",
	getRowClass: "RowStyle",
	getRowStyle: "RowStyle",
	groupTotalRow: "SharedRowGrouping",
	grandTotalRow: "ClientSideRowModelHierarchy",
	initialState: "GridState",
	isExternalFilterPresent: "ExternalFilter",
	isRowPinnable: "PinnedRow",
	isRowPinned: "PinnedRow",
	localeText: "Locale",
	masterDetail: "SharedMasterDetail",
	pagination: "Pagination",
	pinnedBottomRowData: "PinnedRow",
	pinnedTopRowData: "PinnedRow",
	pivotMode: "SharedPivot",
	pivotPanelShow: "RowGroupingPanel",
	quickFilterText: "QuickFilter",
	rowClass: "RowStyle",
	rowClassRules: "RowStyle",
	rowData: "ClientSideRowModel",
	rowDragManaged: "RowDrag",
	refreshAfterGroupEdit: ["RowGrouping", "TreeData"],
	rowGroupPanelShow: "RowGroupingPanel",
	rowNumbers: "RowNumbers",
	rowSelection: "SharedRowSelection",
	rowStyle: "RowStyle",
	serverSideDatasource: "ServerSideRowModel",
	sideBar: "SideBar",
	statusBar: "StatusBar",
	treeData: "SharedTreeData",
	undoRedoCellEditing: "UndoRedoEdit",
	valueCache: "ValueCache",
	viewportDatasource: "ViewportRowModel"
}, Yf = 0, Xf = 0, Zf = "__ag_grid_instance", Qf = class extends H {
	constructor() {
		super(...arguments), this.beanName = "gos", this.domDataKey = "__AG_" + Math.random().toString(), this.instanceId = Xf++, this.gridReadyFired = !1, this.queueEvents = [], this.propEventSvc = new R(), this.globalEventHandlerFactory = (e) => (t, n) => {
			if (!this.isAlive()) return;
			let r = Wf.has(t);
			if (r && !e || !r && e || !$f(t)) return;
			let i = (e, t) => {
				let n = Gf[e], r = this.gridOptions[n];
				typeof r == "function" && this.beans.frameworkOverrides.wrapOutgoing(() => r(t));
			};
			if (this.gridReadyFired) i(t, n);
			else if (t === "gridReady") {
				i(t, n), this.gridReadyFired = !0;
				for (let e of this.queueEvents) i(e.eventName, e.event);
				this.queueEvents = [];
			} else this.queueEvents.push({
				eventName: t,
				event: n
			});
		};
	}
	wireBeans(e) {
		this.gridOptions = e.gridOptions, this.validation = e.validation, this.api = e.gridApi, this.gridId = e.context.getId();
	}
	get gridOptionsContext() {
		return this.gridOptions.context;
	}
	postConstruct() {
		this.validateGridOptions(this.gridOptions), this.eventSvc.addGlobalListener(this.globalEventHandlerFactory().bind(this), !0), this.eventSvc.addGlobalListener(this.globalEventHandlerFactory(!0).bind(this), !1), this.propEventSvc.setFrameworkOverrides(this.beans.frameworkOverrides), this.addManagedEventListeners({ gridOptionsChanged: ({ options: e }) => {
			this.updateGridOptions({
				options: e,
				force: !0,
				source: "optionsUpdated"
			});
		} });
	}
	destroy() {
		super.destroy(), this.queueEvents = [];
	}
	get(e) {
		return this.gridOptions[e] ?? Zt[e];
	}
	getCallback(e) {
		return this.mergeGridCommonParams(this.gridOptions[e]);
	}
	exists(e) {
		return I(this.gridOptions[e]);
	}
	mergeGridCommonParams(e) {
		return e && ((t) => e(this.addCommon(t)));
	}
	updateGridOptions({ options: e, force: t, source: n = "api" }) {
		let r = {
			id: Yf++,
			properties: []
		}, i = [], { gridOptions: a, validation: o } = this;
		for (let s of Object.keys(e)) {
			let c = Yt.applyGlobalGridOption(s, e[s]);
			o?.warnOnInitialPropertyUpdate(n, s);
			let l = t || typeof c == "object" && n === "api", u = a[s];
			if (l || u !== c) {
				a[s] = c;
				let e = {
					type: s,
					currentValue: c,
					previousValue: u,
					changeSet: r,
					source: n
				};
				i.push(e);
			}
		}
		this.validateGridOptions(this.gridOptions), r.properties = i.map((e) => e.type);
		for (let e of i) $t(this, `Updated property ${e.type} from`, e.previousValue, " to ", e.currentValue), this.propEventSvc.dispatchEvent(e);
	}
	addPropertyEventListener(e, t) {
		this.propEventSvc.addEventListener(e, t);
	}
	removePropertyEventListener(e, t) {
		this.propEventSvc.removeEventListener(e, t);
	}
	getDomDataKey() {
		return this.domDataKey;
	}
	addCommon(e) {
		return e.api = this.api, e.context = this.gridOptionsContext, e;
	}
	validateOptions(e, t) {
		for (let n of Object.keys(e)) {
			let r = e[n];
			if (r == null || r === !1) continue;
			let i = t[n];
			typeof i == "function" && (i = i(e, this.gridOptions, this.beans)), i && this.assertModuleRegistered(i, n);
		}
	}
	validateGridOptions(e) {
		this.validateOptions(e, Jf), this.validation?.processGridOptions(e);
	}
	validateColDef(e, t, n) {
		(n || !this.beans.dataTypeSvc?.isColPendingInference(t)) && (this.validateOptions(e, qf), this.validation?.validateColDef(e));
	}
	assertModuleRegistered(e, t) {
		let n = Array.isArray(e) ? e.some((e) => this.isModuleRegistered(e)) : this.isModuleRegistered(e);
		return n || Rn(200, {
			...this.getModuleErrorParams(),
			moduleName: e,
			reasonOrId: t
		}), n;
	}
	getModuleErrorParams() {
		return {
			gridId: this.gridId,
			gridScoped: _n(),
			rowModelType: this.get("rowModelType"),
			isUmd: Sn()
		};
	}
	isModuleRegistered(e) {
		return gn(e, this.gridId, this.get("rowModelType"));
	}
	setInstanceDomData(e) {
		e[Zf] = this.instanceId;
	}
	isElementInThisInstance(e) {
		let t = e;
		for (; t;) {
			let e = t[Zf];
			if (I(e)) return e === this.instanceId;
			t = t.parentElement;
		}
		return !1;
	}
};
function $f(e) {
	return !!Gf[e];
}
var ep = class extends H {
	constructor(e, t) {
		super(), this.column = e, this.eGui = t, this.lastMovingChanged = 0;
	}
	postConstruct() {
		this.addManagedElementListeners(this.eGui, { click: (e) => e && this.onClick(e) }), this.addManagedListeners(this.column, { movingChanged: () => {
			this.lastMovingChanged = Date.now();
		} });
	}
	onClick(e) {
		let { sortSvc: t, rangeSvc: n, gos: r } = this.beans;
		if (!(!dr(r) || e.altKey)) n?.handleColumnSelection(this.column, e);
		else if (this.column.isSortable()) {
			let n = this.column.isMoving(), r = Date.now() - this.lastMovingChanged < 50;
			n || r || t?.progressSortFromEvent(this.column, e);
		}
	}
};
function tp(e, t) {
	let n = { "aria-hidden": "true" };
	return {
		tag: "div",
		cls: "ag-cell-label-container",
		role: "presentation",
		children: [
			{
				tag: "span",
				ref: "eMenu",
				cls: "ag-header-icon ag-header-cell-menu-button",
				attrs: n
			},
			{
				tag: "span",
				ref: "eFilterButton",
				cls: "ag-header-icon ag-header-cell-filter-button",
				attrs: n
			},
			{
				tag: "div",
				ref: "eLabel",
				cls: "ag-header-cell-label",
				role: "presentation",
				children: [
					e ? {
						tag: "span",
						ref: "eColRef",
						cls: "ag-header-col-ref"
					} : null,
					{
						tag: "span",
						ref: "eText",
						cls: "ag-header-cell-text"
					},
					{
						tag: "span",
						ref: "eFilter",
						cls: "ag-header-icon ag-header-label-icon ag-filter-icon",
						attrs: n
					},
					t ? {
						tag: "ag-sort-indicator",
						ref: "eSortIndicator"
					} : null
				]
			}
		]
	};
}
var np = class extends Qi {
	constructor() {
		super(...arguments), this.eFilter = null, this.eFilterButton = null, this.eSortIndicator = null, this.eMenu = null, this.eLabel = null, this.eText = null, this.eColRef = null, this.eSortOrder = null, this.eSortAsc = null, this.eSortDesc = null, this.eSortMixed = null, this.eSortNone = null, this.eSortAbsoluteAsc = null, this.eSortAbsoluteDesc = null, this.isLoadingInnerComponent = !1;
	}
	refresh(e) {
		let t = this.params;
		if (this.params = e, this.workOutTemplate(e, !!this.beans?.sortSvc) != this.currentTemplate || this.workOutShowMenu() != this.currentShowMenu || e.enableSorting != this.currentSort || e.column.formulaRef != this.currentRef || this.currentSuppressMenuHide != null && this.shouldSuppressMenuHide() != this.currentSuppressMenuHide || t.enableFilterButton != e.enableFilterButton || t.enableFilterIcon != e.enableFilterIcon) return !1;
		if (this.innerHeaderComponent) {
			let t = { ...e };
			Kt(t, e.innerHeaderComponentParams), this.innerHeaderComponent.refresh?.(t);
		} else this.setDisplayName(e);
		return !0;
	}
	workOutTemplate(e, t) {
		let { formula: n } = this.beans, r = e.template;
		return r ? r?.trim ? r.trim() : r : tp(!!n?.active, t);
	}
	init(e) {
		this.params = e;
		let { sortSvc: t, touchSvc: n, rowNumbersSvc: r, userCompFactory: i } = this.beans, a = t?.getSortIndicatorSelector();
		this.currentTemplate = this.workOutTemplate(e, !!a), this.setTemplate(this.currentTemplate, a ? [a] : void 0), this.eLabel && (this.mouseListener ??= this.createManagedBean(new ep(e.column, this.eLabel))), n?.setupForHeader(this), this.setMenu(), this.setupSort(), this.setupColumnRefIndicator(), r?.setupForHeader(this), this.setupFilterIcon(), this.setupFilterButton(), this.workOutInnerHeaderComponent(i, e), this.setDisplayName(e);
	}
	workOutInnerHeaderComponent(e, t) {
		let n = Li(e, t, t);
		n && (this.isLoadingInnerComponent = !0, n.newAgStackInstance().then((e) => {
			this.isLoadingInnerComponent = !1, e && (this.isAlive() ? (this.innerHeaderComponent = e, this.eText && this.eText.appendChild(e.getGui())) : this.destroyBean(e));
		}));
	}
	setDisplayName(e) {
		let { displayName: t } = e, n = this.currentDisplayName;
		this.currentDisplayName = t, !(!this.eText || n === t || this.innerHeaderComponent || this.isLoadingInnerComponent) && (this.eText.textContent = le(t));
	}
	addInIcon(e, t, n) {
		let r = fc(e, this.beans, n);
		r && t.appendChild(r);
	}
	workOutShowMenu() {
		return this.params.enableMenu && !!this.beans.menuSvc?.isHeaderMenuButtonEnabled();
	}
	shouldSuppressMenuHide() {
		return !!this.beans.menuSvc?.isHeaderMenuButtonAlwaysShowEnabled();
	}
	setMenu() {
		if (!this.eMenu) return;
		if (this.currentShowMenu = this.workOutShowMenu(), !this.currentShowMenu) {
			tt(this.eMenu), this.eMenu = void 0;
			return;
		}
		let { gos: e, eMenu: t, params: n } = this, r = hr(e);
		this.addInIcon(r ? "menu" : "menuAlt", t, n.column), t.classList.toggle("ag-header-menu-icon", !r);
		let i = this.shouldSuppressMenuHide();
		this.currentSuppressMenuHide = i, this.addManagedElementListeners(t, { click: () => this.showColumnMenu(this.eMenu) }), this.toggleMenuAlwaysShow(i);
	}
	toggleMenuAlwaysShow(e) {
		this.eMenu?.classList.toggle("ag-header-menu-always-show", e);
	}
	showColumnMenu(e) {
		let { currentSuppressMenuHide: t, params: n } = this;
		t || this.toggleMenuAlwaysShow(!0), n.showColumnMenu(e, () => {
			t || this.toggleMenuAlwaysShow(!1);
		});
	}
	onMenuKeyboardShortcut(e) {
		let { params: t, gos: n, beans: r, eMenu: i, eFilterButton: a } = this, o = t.column, s = hr(n);
		if (e && !s) {
			if (r.menuSvc?.isFilterMenuInHeaderEnabled(o)) return t.showFilter(a ?? i ?? this.getGui()), !0;
		} else if (t.enableMenu) return this.showColumnMenu(i ?? a ?? this.getGui()), !0;
		return !1;
	}
	setupSort() {
		let { sortSvc: e } = this.beans;
		if (!e) return;
		let { enableSorting: t, column: n } = this.params;
		if (this.currentSort = t, !this.eSortIndicator) {
			this.eSortIndicator = this.createBean(e.createSortIndicator(!0));
			let { eSortIndicator: t, eSortOrder: n, eSortAsc: r, eSortDesc: i, eSortMixed: a, eSortNone: o, eSortAbsoluteAsc: s, eSortAbsoluteDesc: c } = this;
			t.attachCustomElements(n, r, i, a, o, s, c);
		}
		this.eSortIndicator.setupSort(n), this.currentSort && e.setupHeader(this, n);
	}
	setupColumnRefIndicator() {
		let { eColRef: e, beans: { editModelSvc: t }, params: n } = this;
		e && (this.currentRef = n.column.formulaRef, e.textContent = this.currentRef, V(e, !1), this.addManagedEventListeners({
			cellEditingStarted: () => {
				let n = t?.getEditPositions();
				V(e, !!this.currentRef && !!n?.some((e) => e.column.isAllowFormula()));
			},
			cellEditingStopped: () => {
				V(e, !1);
			}
		}));
	}
	setupFilterIcon() {
		let { eFilter: e, params: t } = this;
		e && this.configureFilter(t.enableFilterIcon, e, () => {
			V(e, t.column.isFilterActive(), { skipAriaHidden: !0 });
		}, "filterActive");
	}
	setupFilterButton() {
		let { eFilterButton: e, params: t } = this;
		e && (this.configureFilter(t.enableFilterButton, e, this.onFilterChangedButton.bind(this), "filter") ? this.addManagedElementListeners(e, { click: () => t.showFilter(e) }) : this.eFilterButton = void 0);
	}
	configureFilter(e, t, n, r) {
		if (!e) return tt(t), !1;
		let i = this.params.column;
		return this.addInIcon(r, t, i), this.addManagedListeners(i, { filterChanged: n }), n(), !0;
	}
	onFilterChangedButton() {
		let e = this.params.column.isFilterActive();
		this.eFilterButton.classList.toggle("ag-filter-active", e);
	}
	getAnchorElementForMenu(e) {
		let { eFilterButton: t, eMenu: n } = this;
		return e ? t ?? n ?? this.getGui() : n ?? t ?? this.getGui();
	}
	destroy() {
		super.destroy(), this.innerHeaderComponent = this.destroyBean(this.innerHeaderComponent), this.mouseListener = this.destroyBean(this.mouseListener);
	}
}, rp = class extends H {
	constructor(e, t) {
		super(), this.eLabel = e, this.columnGroup = t, this.isSticky = !1, this.left = null, this.right = null;
	}
	postConstruct() {
		let { columnGroup: e, beans: t } = this, { ctrlsSvc: n } = t;
		n.whenReady(this, () => {
			let t = this.refreshPosition.bind(this);
			e.getPinned() ?? this.addManagedEventListeners({ bodyScroll: (e) => {
				e.direction === "horizontal" && this.updateSticky(e.left);
			} }), this.addManagedListeners(e, {
				leftChanged: t,
				displayedChildrenChanged: t
			}), this.addManagedEventListeners({ columnResized: t }), this.refreshPosition();
		});
	}
	refreshPosition() {
		let { columnGroup: e, beans: t } = this, n = e.getLeft(), r = e.getActualWidth();
		if (n == null || r === 0) {
			this.left = null, this.right = null, this.setSticky(!1);
			return;
		}
		this.left = n, this.right = n + r;
		let i = t.colViewport.getScrollPosition();
		i != null && this.updateSticky(i);
	}
	updateSticky(e) {
		let { beans: t, left: n, right: r } = this;
		if (n == null || r == null) {
			this.setSticky(!1);
			return;
		}
		let { gos: i, visibleCols: a } = t, o = i.get("enableRtl") ? a.bodyWidth - e : e;
		this.setSticky(n < o && r > o);
	}
	setSticky(e) {
		let { isSticky: t, eLabel: n } = this;
		t !== e && (this.isSticky = e, n.classList.toggle("ag-sticky-label", e));
	}
}, ip = {
	tag: "div",
	cls: "ag-header-group-cell-label",
	role: "presentation",
	children: [
		{
			tag: "span",
			ref: "agLabel",
			cls: "ag-header-group-text",
			role: "presentation"
		},
		{
			tag: "span",
			ref: "agOpened",
			cls: "ag-header-icon ag-header-expand-icon ag-header-expand-icon-expanded"
		},
		{
			tag: "span",
			ref: "agClosed",
			cls: "ag-header-icon ag-header-expand-icon ag-header-expand-icon-collapsed"
		}
	]
}, ap = class extends Qi {
	constructor() {
		super(ip), this.agOpened = null, this.agClosed = null, this.agLabel = null, this.isLoadingInnerComponent = !1;
	}
	init(e) {
		let { userCompFactory: t, touchSvc: n } = this.beans;
		this.params = e, this.checkWarnings(), this.workOutInnerHeaderGroupComponent(t, e), this.setupLabel(e), this.addGroupExpandIcon(e), this.setupExpandIcons(), n?.setupForHeaderGroup(this);
	}
	checkWarnings() {
		this.params.template && W(89);
	}
	workOutInnerHeaderGroupComponent(e, t) {
		let n = zi(e, t, t);
		n && (this.isLoadingInnerComponent = !0, n.newAgStackInstance().then((e) => {
			this.isLoadingInnerComponent = !1, e && (this.isAlive() ? (this.innerHeaderGroupComponent = e, this.agLabel.appendChild(e.getGui())) : this.destroyBean(e));
		}));
	}
	setupExpandIcons() {
		let { agOpened: e, agClosed: t, params: { columnGroup: n }, beans: { colGroupSvc: r } } = this;
		this.addInIcon("columnGroupOpened", e), this.addInIcon("columnGroupClosed", t);
		let i = (e) => {
			if (Aa(e)) return;
			let t = !n.isExpanded();
			r.setColumnGroupOpened(n.getProvidedColumnGroup(), t, "uiColumnExpanded");
		};
		this.addTouchAndClickListeners(t, i), this.addTouchAndClickListeners(e, i);
		let a = (e) => {
			ka(e);
		};
		this.addManagedElementListeners(t, { dblclick: a }), this.addManagedElementListeners(e, { dblclick: a }), this.addManagedElementListeners(this.getGui(), { dblclick: i }), this.updateIconVisibility();
		let o = n.getProvidedColumnGroup(), s = this.updateIconVisibility.bind(this);
		this.addManagedListeners(o, {
			expandedChanged: s,
			expandableChanged: s
		});
	}
	addTouchAndClickListeners(e, t) {
		this.beans.touchSvc?.setupForHeaderGroupElement(this, e, t), this.addManagedElementListeners(e, { click: t });
	}
	updateIconVisibility() {
		let { agOpened: e, agClosed: t, params: { columnGroup: n } } = this;
		if (n.isExpandable()) {
			let r = n.isExpanded();
			V(e, r), V(t, !r);
		} else V(e, !1), V(t, !1);
	}
	addInIcon(e, t) {
		let n = fc(e, this.beans, null);
		n && t.appendChild(n);
	}
	addGroupExpandIcon(e) {
		if (!e.columnGroup.isExpandable()) {
			let { agOpened: e, agClosed: t } = this;
			V(e, !1), V(t, !1);
		}
	}
	setupLabel(e) {
		let { displayName: t, columnGroup: n } = e, { innerHeaderGroupComponent: r, isLoadingInnerComponent: i } = this, a = r || i;
		I(t) && !a && (this.agLabel.textContent = le(t)), n.getColGroupDef()?.suppressStickyLabel || this.createManagedBean(new rp(this.getGui(), n));
	}
	destroy() {
		super.destroy(), this.innerHeaderGroupComponent &&= (this.destroyBean(this.innerHeaderGroupComponent), void 0);
	}
}, op = {
	moduleName: "ColumnHeaderComp",
	version: U,
	userComponents: { agColumnHeader: np },
	icons: {
		menu: "menu",
		menuAlt: "menu-alt"
	}
}, sp = {
	moduleName: "ColumnGroupHeaderComp",
	version: U,
	userComponents: { agColumnGroupHeader: ap },
	icons: {
		columnGroupOpened: "expanded",
		columnGroupClosed: "contracted"
	}
}, cp = {
	moduleName: "AnimationFrame",
	version: U,
	beans: [class extends H {
		constructor() {
			super(...arguments), this.beanName = "animationFrameSvc", this.p1 = {
				list: [],
				sorted: !1
			}, this.p2 = {
				list: [],
				sorted: !1
			}, this.f1 = {
				list: [],
				sorted: !1
			}, this.destroyTasks = [], this.ticking = !1, this.scrollGoingDown = !0, this.lastScrollTop = 0, this.taskCount = 0;
		}
		setScrollTop(e) {
			this.scrollGoingDown = e >= this.lastScrollTop, e === 0 && (this.scrollGoingDown = !0), this.lastScrollTop = e;
		}
		postConstruct() {
			this.active = !this.gos.get("suppressAnimationFrame"), this.batchFrameworkComps = this.beans.frameworkOverrides.batchFrameworkComps;
		}
		verify() {
			this.active === !1 && W(92);
		}
		createTask(e, t, n, r, i = !1) {
			this.verify();
			let a = n;
			r && this.batchFrameworkComps && (a = "f1");
			let o = {
				task: e,
				index: t,
				createOrder: ++this.taskCount,
				deferred: i
			};
			this.addTaskToList(this[a], o), this.schedule();
		}
		addTaskToList(e, t) {
			e.list.push(t), e.sorted = !1;
		}
		sortTaskList(e) {
			if (e.sorted) return;
			let t = this.scrollGoingDown ? 1 : -1;
			e.list.sort((e, n) => e.deferred === n.deferred ? e.index === n.index ? n.createOrder - e.createOrder : t * (n.index - e.index) : e.deferred ? -1 : 1), e.sorted = !0;
		}
		addDestroyTask(e) {
			this.verify(), this.destroyTasks.push(e), this.schedule();
		}
		executeFrame(e) {
			let { p1: t, p2: n, f1: r, destroyTasks: i, beans: a } = this, { ctrlsSvc: o, frameworkOverrides: s } = a, c = t.list, l = n.list, u = r.list, d = Date.now(), f = 0, p = e <= 0, m = o.getScrollFeature();
			for (; p || f < e;) {
				if (!m.scrollGridIfNeeded()) {
					let a;
					if (c.length) this.sortTaskList(t), a = c.pop().task;
					else if (l.length) this.sortTaskList(n), a = l.pop().task;
					else if (u.length) s.wrapOutgoing(() => {
						for (; (p || f < e) && !m.scrollGridIfNeeded() && u.length;) this.sortTaskList(r), a = u.pop().task, a(), f = Date.now() - d;
					}), a = () => {};
					else if (i.length) a = i.pop();
					else break;
					a();
				}
				f = Date.now() - d;
			}
			c.length || l.length || u.length || i.length ? this.requestFrame() : this.ticking = !1;
		}
		flushAllFrames() {
			this.active && this.executeFrame(-1);
		}
		schedule() {
			this.active && (this.ticking || (this.ticking = !0, this.requestFrame()));
		}
		requestFrame() {
			let e = this.executeFrame.bind(this, 60);
			pt(this.beans, e);
		}
		isQueueEmpty() {
			return !this.ticking;
		}
	}]
}, lp = class extends H {
	constructor() {
		super(...arguments), this.beanName = "iconSvc";
	}
	createIconNoSpan(e, t) {
		return fc(e, this.beans, t?.column);
	}
}, up = (e, t, n) => t || e && n, dp = {
	moduleName: "Touch",
	version: U,
	beans: [class extends H {
		constructor() {
			super(...arguments), this.beanName = "touchSvc";
		}
		mockBodyContextMenu(e, t) {
			this.mockContextMenu(e, e.eBodyViewport, t);
		}
		mockHeaderContextMenu(e, t) {
			this.mockContextMenu(e, e.eGui, t);
		}
		mockRowContextMenu(e) {
			la() && this.mockContextMenu(e, e.element, (t, n, r) => {
				let { rowCtrl: i, cellCtrl: a } = e.getControlsForEventTarget(r?.target ?? null);
				a?.column && a.dispatchCellContextMenuEvent(r ?? null), this.beans.contextMenuSvc?.handleContextMenuMouseEvent(void 0, r, i, a);
			});
		}
		handleCellDoubleClick(e, t) {
			return (() => {
				if (!la() || xt("dblclick")) return !1;
				let t = Date.now(), n = t - e.lastIPadMouseClickEvent < 200;
				return e.lastIPadMouseClickEvent = t, n;
			})() ? (e.onCellDoubleClicked(t), t.preventDefault(), !0) : !1;
		}
		setupForHeader(e) {
			let { gos: t, sortSvc: n, menuSvc: r } = this.beans;
			if (t.get("suppressTouch")) return;
			let { params: i, eMenu: a, eFilterButton: o } = e, s = new Ra(e.getGui(), !0);
			e.addDestroyFunc(() => s.destroy());
			let c = e.shouldSuppressMenuHide(), l = c && I(a) && i.enableMenu, u = !!r?.isHeaderContextMenuEnabled(i.column), d = up(i.enableMenu, u, hr(t)), f = s;
			l && (f = new Ra(a, !0), e.addDestroyFunc(() => f.destroy()));
			let p = (e) => i.showColumnMenuAfterMouseClick(e.touchStart);
			if (l && i.enableMenu && e.addManagedListeners(f, { tap: p }), d && e.addManagedListeners(s, { longTap: p }), i.enableSorting && e.addManagedListeners(s, { tap: (e) => {
				let t = e.touchStart.target;
				c && (a?.contains(t) || o?.contains(t)) || n?.progressSort(i.column, !1, "uiColumnSorted");
			} }), i.enableFilterButton && o) {
				let t = new Ra(o, !0);
				e.addManagedListeners(t, { tap: () => i.showFilter(o) }), e.addDestroyFunc(() => t.destroy());
			}
		}
		setupForHeaderGroup(e) {
			let t = e.params;
			if (this.beans.menuSvc?.isHeaderContextMenuEnabled(t.columnGroup.getProvidedColumnGroup())) {
				let n = new Ra(t.eGridHeader, !0);
				e.addManagedListeners(n, { longTap: (e) => t.showColumnMenuAfterMouseClick(e.touchStart) }), e.addDestroyFunc(() => n.destroy());
			}
		}
		setupForHeaderGroupElement(e, t, n) {
			let r = new Ra(t, !0);
			e.addManagedListeners(r, { tap: n }), e.addDestroyFunc(() => r.destroy());
		}
		mockContextMenu(e, t, n) {
			if (!la()) return;
			let r = new Ra(t);
			e.addManagedListeners(r, { longTap: (e) => {
				Et(this.beans, e.touchEvent) && n(void 0, e.touchStart, e.touchEvent);
			} }), e.addDestroyFunc(() => r.destroy());
		}
	}]
}, fp = class extends H {
	constructor() {
		super(...arguments), this.beanName = "cellNavigation";
	}
	wireBeans(e) {
		this.rowSpanSvc = e.rowSpanSvc;
	}
	getNextCellToFocus(e, t, n = !1) {
		return n ? this.getNextCellToFocusWithCtrlPressed(e, t) : this.getNextCellToFocusWithoutCtrlPressed(e, t);
	}
	getNextCellToFocusWithCtrlPressed(e, t) {
		let n = e === Y.UP, r = e === Y.DOWN, i = e === Y.LEFT, a, o, { pageBounds: s, gos: c, visibleCols: l, pinnedRowModel: u } = this.beans, { rowPinned: d } = t;
		if (n || r) o = d && u ? n ? 0 : d === "top" ? u.getPinnedTopRowCount() - 1 : u.getPinnedBottomRowCount() - 1 : n ? s.getFirstRow() : s.getLastRow(), a = t.column;
		else {
			let e = c.get("enableRtl");
			o = t.rowIndex, a = (i === e ? [...l.allCols].reverse() : l.allCols).find((e) => !ai(e) && this.isCellGoodToFocusOn({
				rowIndex: o,
				rowPinned: null,
				column: e
			}));
		}
		return a ? {
			rowIndex: o,
			rowPinned: d,
			column: a
		} : null;
	}
	getNextCellToFocusWithoutCtrlPressed(e, t) {
		let n = t, r = !1;
		for (; !r;) {
			switch (e) {
				case Y.UP:
					n = this.getCellAbove(n);
					break;
				case Y.DOWN:
					n = this.getCellBelow(n);
					break;
				case Y.RIGHT:
					n = this.gos.get("enableRtl") ? this.getCellToLeft(n) : this.getCellToRight(n);
					break;
				case Y.LEFT:
					n = this.gos.get("enableRtl") ? this.getCellToRight(n) : this.getCellToLeft(n);
					break;
				default:
					n = null, W(8, { key: e });
					break;
			}
			r = n ? this.isCellGoodToFocusOn(n) : !0;
		}
		return n;
	}
	isCellGoodToFocusOn(e) {
		let t = e.column, n, { pinnedRowModel: r, rowModel: i } = this.beans;
		switch (e.rowPinned) {
			case "top":
				n = r?.getPinnedTopRow(e.rowIndex);
				break;
			case "bottom":
				n = r?.getPinnedBottomRow(e.rowIndex);
				break;
			default:
				n = i.getRow(e.rowIndex);
				break;
		}
		return n ? !this.isSuppressNavigable(t, n) : !1;
	}
	getCellToLeft(e) {
		if (!e) return null;
		let t = this.beans.visibleCols.getColBefore(e.column);
		return t ? {
			rowIndex: e.rowIndex,
			column: t,
			rowPinned: e.rowPinned
		} : null;
	}
	getCellToRight(e) {
		if (!e) return null;
		let t = this.beans.visibleCols.getColAfter(e.column);
		return t ? {
			rowIndex: e.rowIndex,
			column: t,
			rowPinned: e.rowPinned
		} : null;
	}
	getCellBelow(e) {
		if (!e) return null;
		let t = this.rowSpanSvc?.getCellEnd(e) ?? e, n = $a(this.beans, t, !0);
		return n ? {
			rowIndex: n.rowIndex,
			column: e.column,
			rowPinned: n.rowPinned
		} : null;
	}
	getCellAbove(e) {
		if (!e) return null;
		let t = this.rowSpanSvc?.getCellStart(e) ?? e, n = Qa(this.beans, {
			rowIndex: t.rowIndex,
			rowPinned: t.rowPinned
		}, !0);
		return n ? {
			rowIndex: n.rowIndex,
			column: e.column,
			rowPinned: n.rowPinned
		} : null;
	}
	getNextTabbedCell(e, t) {
		return t ? this.getNextTabbedCellBackwards(e) : this.getNextTabbedCellForwards(e);
	}
	getNextTabbedCellForwards(e) {
		let { visibleCols: t, pagination: n } = this.beans, r = t.allCols, i = e.rowIndex, a = e.rowPinned, o = t.getColAfter(e.column);
		if (!o) {
			o = r[0];
			let t = $a(this.beans, e, !0);
			if (L(t) || !t.rowPinned && !(n?.isRowInPage(t.rowIndex) ?? !0)) return null;
			i = t ? t.rowIndex : null, a = t ? t.rowPinned : null;
		}
		return {
			rowIndex: i,
			column: o,
			rowPinned: a
		};
	}
	getNextTabbedCellBackwards(e) {
		let { beans: t } = this, { visibleCols: n, pagination: r } = t, i = n.allCols, a = e.rowIndex, o = e.rowPinned, s = n.getColBefore(e.column);
		if (!s) {
			s = M(i);
			let n = Qa(t, {
				rowIndex: e.rowIndex,
				rowPinned: e.rowPinned
			}, !0);
			if (L(n) || !n.rowPinned && !(r?.isRowInPage(n.rowIndex) ?? !0)) return null;
			a = n ? n.rowIndex : null, o = n ? n.rowPinned : null;
		}
		return {
			rowIndex: a,
			column: s,
			rowPinned: o
		};
	}
	isSuppressNavigable(e, t) {
		let { suppressNavigable: n } = e.colDef;
		return typeof n == "boolean" ? n : typeof n == "function" ? n(e.createColumnFunctionCallbackParams(t)) : !1;
	}
};
function pp(e) {
	return e.focusSvc.getFocusedCell();
}
function mp(e) {
	return e.focusSvc.clearFocusedCell();
}
function hp(e, t, n, r) {
	e.focusSvc.setFocusedCell({
		rowIndex: t,
		column: n,
		rowPinned: r,
		forceBrowserFocus: !0
	});
}
function gp(e, t) {
	return e.navigation?.tabToNextCell(!1, t) ?? !1;
}
function _p(e, t) {
	return e.navigation?.tabToNextCell(!0, t) ?? !1;
}
function vp(e, t, n = !1) {
	let r = e.headerNavigation?.getHeaderPositionForColumn(t, n);
	r && e.focusSvc.focusHeaderPosition({ headerPosition: r });
}
function yp(e) {
	let t = e;
	return t?.getFrameworkComponentInstance == null ? e : t.getFrameworkComponentInstance();
}
var bp = class {
	constructor() {
		this.cellValidations = /* @__PURE__ */ new Map();
	}
	getCellValidation(e) {
		let { rowNode: t, column: n } = e || {};
		return this.cellValidations?.get(t)?.get(n);
	}
	hasCellValidation(e) {
		return !e?.rowNode || !e.column ? this.cellValidations.size > 0 : !!this.getCellValidation(e);
	}
	setCellValidation(e, t) {
		let { rowNode: n, column: r } = e;
		this.cellValidations.has(n) || this.cellValidations.set(n, /* @__PURE__ */ new Map()), this.cellValidations.get(n).set(r, t);
	}
	clearCellValidation(e) {
		let { rowNode: t, column: n } = e;
		this.cellValidations.get(t)?.delete(n);
	}
	setCellValidationMap(e) {
		this.cellValidations = e;
	}
	getCellValidationMap() {
		return this.cellValidations;
	}
	clearCellValidationMap() {
		this.cellValidations.clear();
	}
}, xp = class {
	constructor() {
		this.rowValidations = /* @__PURE__ */ new Map();
	}
	getRowValidation(e) {
		let { rowNode: t } = e || {};
		return this.rowValidations.get(t);
	}
	hasRowValidation(e) {
		return e?.rowNode ? !!this.getRowValidation(e) : this.rowValidations.size > 0;
	}
	setRowValidation({ rowNode: e }, t) {
		this.rowValidations.set(e, t);
	}
	clearRowValidation({ rowNode: e }) {
		this.rowValidations.delete(e);
	}
	setRowValidationMap(e) {
		this.rowValidations = e;
	}
	getRowValidationMap() {
		return this.rowValidations;
	}
	clearRowValidationMap() {
		this.rowValidations.clear();
	}
};
function Sp(e, t = {}) {
	let { rowIndex: n, rowId: r, rowCtrl: i, rowPinned: a } = t;
	if (i) return i;
	let { rowModel: o, rowRenderer: s } = e, { rowNode: c } = t;
	return c || (r ? c = Za(e, r, a) : n != null && (c = o.getRow(n))), c ? s.getRowCtrlByNode(c) : void 0;
}
function Cp(e, t = {}) {
	let { cellCtrl: n, colId: r, columnId: i, column: a } = t;
	if (n) return n;
	let o = e.colModel.getCol(r ?? i ?? wp(a)), s = t.rowCtrl ?? Sp(e, t), c = s?.getCellCtrl(o) ?? void 0;
	if (c) return c;
	let l = t.rowNode ?? s?.rowNode;
	if (l) return e.rowRenderer.getCellCtrls([l], [o])?.[0];
}
function wp(e) {
	if (e) return typeof e == "string" ? e : e.getColId();
}
var Tp = Symbol("unedited");
function Ep(e, t, n) {
	let r = { editorValueExists: !1 };
	if (Np(e) && (t.getValidationErrors?.()?.length ?? 0) > 0 || n?.isCancelling) return r;
	if (n?.isStopping) {
		let e = t?.isCancelAfterEnd?.();
		if (e) return {
			...r,
			isCancelAfterEnd: e
		};
	}
	return {
		editorValue: t.getValue(),
		editorValueExists: !0
	};
}
function Dp(e, t) {
	for (let n of e.editModelSvc?.getEditPositions() ?? []) {
		let r = Cp(e, n);
		if (!r) continue;
		let i = r.comp?.getCellEditor();
		if (!i) continue;
		let { editorValue: a, editorValueExists: o, isCancelAfterEnd: s } = Ep(e, i, t);
		if (s) {
			let { cellStartedEditing: t, cellStoppedEditing: r } = e.editModelSvc?.getEdit(n)?.editorState || {};
			e.editModelSvc?.setEdit(n, { editorState: {
				isCancelAfterEnd: s,
				cellStartedEditing: t,
				cellStoppedEditing: r
			} });
		}
		Op(e, n, a, void 0, !o, t);
	}
}
function Op(e, t, n, r, i, a) {
	let { editModelSvc: o, valueSvc: s } = e;
	if (!o) return;
	let { rowNode: c, column: l } = t;
	if (!(c && l)) return;
	let u = o.getEdit(t);
	if (u?.sourceValue === void 0) {
		let n = u ? kp(e, u.editorValue, !1, l) : Tp, r = {
			sourceValue: s.getValue(l, c, "data"),
			pendingValue: n
		};
		a?.persist && (r.state = "changed"), u = o.setEdit(t, r);
	}
	o.setEdit(t, { editorValue: i ? kp(e, u.sourceValue, !0, l) : n }), a?.persist && Ap(e, t);
}
function kp(e, t, n, r) {
	let { formula: i } = e;
	return r.isAllowFormula() && i?.isFormula(t) ? i?.normaliseFormula(t, n) ?? t : t;
}
function Ap(e, t) {
	let { editModelSvc: n } = e, r = n?.getEdit(t), i = { pendingValue: kp(e, r?.editorValue, !1, t.column) };
	!r?.editorState?.cellStoppedEditing && r?.state !== "editing" && (i.state = "changed"), n?.setEdit(t, i);
}
function jp(e) {
	if (!e) return !1;
	for (let t = 0, n = e.length; t < n; ++t) {
		let n = e[t], r = n.cellEditorParams;
		if (!(!r || !n.editable && !n.groupRowEditable) && (r.minLength !== void 0 || r.maxLength !== void 0 || r.getValidationErrors !== void 0 || r.min !== void 0 || r.max !== void 0)) return !0;
	}
	return !1;
}
function Mp(e) {
	let t = e.rowRenderer.getCellCtrls();
	for (let e = 0, n = t.length; e < n; ++e) {
		let n = t[e].comp?.getCellEditor();
		if (n) {
			let e = yp(n);
			if (e.getValidationElement || e.getValidationErrors) return !0;
		}
	}
	return !1;
}
function Np(e) {
	return !!e.gos.get("getFullRowEditValidationErrors") || jp(e.colModel.getColumnDefs()) || Mp(e);
}
function Pp(e, t) {
	if (!(t || Np(e))) return;
	let n = new bp(), { ariaAnnounce: r, localeSvc: i, editModelSvc: a, gos: o } = e, s = o.get("editType") === "fullRow", c = Mt(i)("ariaValidationErrorPrefix", "Cell Editor Validation"), l = /* @__PURE__ */ new Set();
	for (let t of e.rowRenderer.getCellCtrls()) {
		let e = t.comp?.getCellEditor();
		if (!e) continue;
		let i = yp(e), { rowNode: a, column: o } = t, s = i.getValidationErrors?.() ?? [], u = i.getValidationElement?.(!1) || !i.isPopup?.() && t.eGui;
		if (u) {
			let e = s != null && s.length > 0, t = e ? s.join(". ") : "";
			je(u, e), e && r.announceValue(`${c} ${s}`, "editorValidation"), u instanceof HTMLInputElement ? u.setCustomValidity(t) : u.classList.toggle("invalid", e);
		}
		s?.length > 0 && n.setCellValidation({
			rowNode: a,
			column: o
		}, { errorMessages: s }), l.add(t.rowCtrl);
	}
	if (Dp(e, { persist: !1 }), a?.setCellValidationModel(n), s) {
		let t = Fp(e);
		a?.setRowValidationModel(t);
	}
	for (let e of l.values()) {
		e.rowEditStyleFeature?.applyRowStyles();
		for (let t of e.getAllCellCtrls()) t.tooltipFeature?.refreshTooltip(!0), t.editorTooltipFeature?.refreshTooltip(!0), t.editStyleFeature?.applyCellStyles?.();
	}
}
var Fp = (e) => {
	let t = new xp(), n = e.gos.get("getFullRowEditValidationErrors"), r = e.editModelSvc?.getEditMap();
	if (!r) return t;
	for (let e of r.keys()) {
		let i = r.get(e);
		if (!i) continue;
		let a = [], { rowIndex: o, rowPinned: s } = e;
		for (let e of i.keys()) {
			let t = i.get(e);
			if (!t) continue;
			let { editorValue: n, pendingValue: r, sourceValue: c } = t, l = n ?? (r === Tp ? void 0 : r) ?? c;
			a.push({
				column: e,
				colId: e.getColId(),
				rowIndex: o,
				rowPinned: s,
				oldValue: c,
				newValue: l
			});
		}
		let c = n?.({ editorsState: a }) ?? [];
		c.length > 0 && t.setRowValidation({ rowNode: e }, { errorMessages: c });
	}
	return t;
};
function Ip(e) {
	return !!(e.rowPinned && e.pinnedSibling);
}
function Lp(e, t, n, { rowNode: r, column: i }, a) {
	return K(e.gos, {
		type: n,
		node: r,
		data: r.data,
		value: a,
		column: i,
		colDef: i.getColDef(),
		rowPinned: r.rowPinned,
		event: t,
		rowIndex: r.rowIndex
	});
}
function Rp(e, t = !1) {
	return e === Y.DELETE ? !0 : !t && e === Y.BACKSPACE ? ca() : !1;
}
var zp = class extends H {
	constructor(e, t, n, r) {
		super(), this.cellCtrl = e, this.rowNode = n, this.rowCtrl = r, this.beans = t;
	}
	init() {
		this.eGui = this.cellCtrl.eGui;
	}
	onKeyDown(e) {
		let t = e.key;
		if (!(t === Y.ENTER && ai(this.cellCtrl.column) && this.beans.rowNumbersSvc?.handleKeyDownOnCell(this.cellCtrl.cellPosition, e))) switch (t) {
			case Y.ENTER:
				this.onEnterKeyDown(e);
				break;
			case Y.F2:
				this.onF2KeyDown(e);
				break;
			case Y.ESCAPE:
				this.onEscapeKeyDown(e);
				break;
			case Y.TAB:
				this.onTabKeyDown(e);
				break;
			case Y.BACKSPACE:
			case Y.DELETE:
				this.onBackspaceOrDeleteKeyDown(t, e);
				break;
			case Y.DOWN:
			case Y.UP:
			case Y.RIGHT:
			case Y.LEFT:
				this.onNavigationKeyDown(e, t);
				break;
		}
	}
	onNavigationKeyDown(e, t) {
		let { cellCtrl: n, beans: r } = this;
		if (!r.editSvc?.isEditing(n, { withOpenEditor: !0 })) {
			if (e.shiftKey && n.isRangeSelectionEnabled()) this.onShiftRangeSelect(e);
			else {
				let i = n.getFocusedCellPosition();
				r.navigation?.navigateToNextCell(e, t, i, !0);
			}
			e.preventDefault();
		}
	}
	onShiftRangeSelect(e) {
		let { rangeSvc: t, navigation: n } = this.beans;
		if (!t) return;
		let r = t.extendLatestRangeInDirection(e);
		r && (e.key === Y.LEFT || e.key === Y.RIGHT ? n?.ensureColumnVisible(r.column) : n?.ensureRowVisible(r.rowIndex));
	}
	onTabKeyDown(e) {
		this.beans.navigation?.onTabKeyDown(this.cellCtrl, e);
	}
	onBackspaceOrDeleteKeyDown(e, t) {
		let { cellCtrl: n, beans: r, rowNode: i } = this, { gos: a, rangeSvc: o, eventSvc: s, editSvc: c } = r;
		if (s.dispatchEvent({ type: "keyShortcutChangedCellStart" }), Rp(e, a.get("enableCellEditingOnBackspace")) && !c?.isEditing(n, { withOpenEditor: !0 })) {
			if (o && ur(a)) o.clearCellRangeCellValues({
				dispatchWrapperEvents: !0,
				wrapperEventSource: "deleteKey"
			});
			else if (n.isCellEditable()) {
				let e = r.valueSvc.getDeleteValue(n.column, i);
				i.setDataValue(n.column, e, "cellClear");
			}
		} else c?.isEditing(n, { withOpenEditor: !0 }) || r.editSvc?.startEditing(n, {
			startedEdit: !0,
			event: t
		});
		s.dispatchEvent({ type: "keyShortcutChangedCellEnd" });
	}
	onEnterKeyDown(e) {
		let { cellCtrl: t, beans: n } = this, { editSvc: r, navigation: i } = n, a = r?.isEditing(t, { withOpenEditor: !0 }), o = t.rowNode, s = r?.isRowEditing(o, { withOpenEditor: !0 }), c = (t) => {
			r?.startEditing(t, {
				startedEdit: !0,
				event: e,
				source: "edit"
			}) && e.preventDefault();
		};
		if (a || s) {
			if (this.isCtrlEnter(e)) {
				r?.applyBulkEdit(t, n?.rangeSvc?.getCellRanges() || []);
				return;
			}
			if (Pp(n), r?.checkNavWithValidation(void 0, e) === "block-stop") return;
			r?.isEditing(t, { withOpenEditor: !0 }) ? r?.stopEditing(t, {
				event: e,
				source: "edit"
			}) : s && !t.isCellEditable() ? r?.stopEditing({ rowNode: o }, {
				event: e,
				source: "edit"
			}) : c(t);
		} else if (n.gos.get("enterNavigatesVertically")) {
			let n = e.shiftKey ? Y.UP : Y.DOWN;
			i?.navigateToNextCell(null, n, t.cellPosition, !1);
		} else {
			if (r?.hasValidationErrors()) return;
			r?.hasValidationErrors(t) && r.revertSingleCellEdit(t, !0), c(t);
		}
	}
	isCtrlEnter(e) {
		return (e.ctrlKey || e.metaKey) && e.key === Y.ENTER;
	}
	onF2KeyDown(e) {
		let { cellCtrl: t, beans: { editSvc: n } } = this;
		n?.isEditing() && (Pp(this.beans), n?.checkNavWithValidation(void 0, e) === "block-stop") || n?.startEditing(t, {
			startedEdit: !0,
			event: e
		});
	}
	onEscapeKeyDown(e) {
		let { cellCtrl: t, beans: { editSvc: n } } = this;
		n?.checkNavWithValidation(t, e) === "block-stop" && n.revertSingleCellEdit(t), setTimeout(() => {
			n?.stopEditing(t, {
				event: e,
				cancel: !0
			});
		});
	}
	processCharacter(e) {
		let t = e.target !== this.eGui, { beans: { editSvc: n }, cellCtrl: r } = this;
		if (!t && !n?.isEditing(r, { withOpenEditor: !0 })) {
			if (e.key === Y.SPACE) this.onSpaceKeyDown(e);
			else if (n?.isCellEditable(r, "ui")) {
				if (n?.hasValidationErrors() && !n?.hasValidationErrors(r)) return;
				n?.startEditing(r, {
					startedEdit: !0,
					event: e,
					source: "api",
					editable: !0
				}), r.editCompDetails?.params?.suppressPreventDefault || e.preventDefault();
			}
		}
	}
	onSpaceKeyDown(e) {
		let { gos: t, editSvc: n } = this.beans, { rowNode: r } = this.cellCtrl;
		!n?.isEditing(this.cellCtrl, { withOpenEditor: !0 }) && Gn(t) && this.beans.selectionSvc?.handleSelectionEvent(e, r, "spaceKey"), e.preventDefault();
	}
}, Bp = class extends H {
	constructor(e, t, n) {
		super(), this.cellCtrl = e, this.column = n, this.beans = t;
	}
	onMouseEvent(e, t) {
		if (!Aa(t)) switch (e) {
			case "click":
				this.onCellClicked(t);
				break;
			case "pointerdown":
			case "mousedown":
			case "touchstart":
				this.onMouseDown(t);
				break;
			case "dblclick":
				this.onCellDoubleClicked(t);
				break;
			case "mouseout":
				this.onMouseOut(t);
				break;
			case "mouseover":
				this.onMouseOver(t);
				break;
		}
	}
	onCellClicked(e) {
		if (this.beans.touchSvc?.handleCellDoubleClick(this, e)) return;
		let { eventSvc: t, rangeSvc: n, editSvc: r, editModelSvc: i, frameworkOverrides: a, gos: o } = this.beans, s = e.ctrlKey || e.metaKey, { cellCtrl: c } = this, { column: l, cellPosition: u, rowNode: d } = c, f = os(o, l, d, e);
		n && s && !f && n.getCellRangeCount(u) > 1 && n.intersectLastRange(!0);
		let p = c.createEvent(e, "cellClicked");
		p.isEventHandlingSuppressed = f, t.dispatchEvent(p);
		let m = l.getColDef();
		if (m.onCellClicked && window.setTimeout(() => {
			a.wrapOutgoing(() => {
				m.onCellClicked(p);
			});
		}, 0), !f && i?.getState(c) !== "editing") {
			let t = r?.isEditing(), n = r?.isRangeSelectionEnabledWhileEditing(), a = i?.getCellValidationModel().getCellValidationMap().size ?? 0, o = i?.getRowValidationModel().getRowValidationMap().size ?? 0;
			if (t && (n || a > 0 || o > 0)) return;
			r?.shouldStartEditing(c, e) ? r?.startEditing(c, { event: e }) : r?.shouldStopEditing(c, e) && (this.beans.gos.get("editType") === "fullRow" ? r?.stopEditing(c, {
				event: e,
				source: "edit"
			}) : r?.stopEditing(void 0, {
				event: e,
				source: "edit"
			}));
		}
	}
	onCellDoubleClicked(e) {
		let { column: t, beans: n, cellCtrl: r } = this, { eventSvc: i, frameworkOverrides: a, editSvc: o, editModelSvc: s, gos: c } = n, l = os(c, r.column, r.rowNode, e), u = t.getColDef(), d = r.createEvent(e, "cellDoubleClicked");
		if (d.isEventHandlingSuppressed = l, i.dispatchEvent(d), typeof u.onCellDoubleClicked == "function" && window.setTimeout(() => {
			a.wrapOutgoing(() => {
				u.onCellDoubleClicked(d);
			});
		}, 0), !l && o?.shouldStartEditing(r, e) && s?.getState(r) !== "editing") {
			let t = o?.isEditing(), n = o?.isRangeSelectionEnabledWhileEditing(), i = s?.getCellValidationModel().getCellValidationMap().size ?? 0, a = s?.getRowValidationModel().getRowValidationMap().size ?? 0;
			if (t && (n || i > 0 || a > 0)) return;
			o?.startEditing(r, { event: e });
		}
	}
	onMouseDown(e) {
		let { shiftKey: t } = e, n = e.target, { cellCtrl: r, beans: i } = this, { eventSvc: a, rangeSvc: o, rowNumbersSvc: s, focusSvc: c, gos: l, editSvc: u } = i, { column: d, rowNode: f, cellPosition: p } = r, m = os(l, d, f, e), h = () => {
			let t = r.createEvent(e, "cellMouseDown");
			t.isEventHandlingSuppressed = m, a.dispatchEvent(t);
		};
		if (m) {
			h();
			return;
		}
		if (this.isRightClickInExistingRange(e)) return;
		let g = o && !o.isEmpty(), _ = this.containsWidget(n), v = ai(d);
		if (!(s && v && !s.handleMouseDownOnCell(p, e))) {
			if (!t || !g) {
				let t = u?.isEditing(r), i = l.get("enableCellTextSelection") && e.defaultPrevented, a = (oa() || i) && !t && !We(n) && !_;
				r.focusCell(a, e);
			}
			if (t && g && !c.isCellFocused(p)) {
				e.preventDefault();
				let t = c.getFocusedCell();
				if (t) {
					let { column: n, rowIndex: r, rowPinned: i } = t, a = !!u?.isRangeSelectionEnabledWhileEditing?.();
					u?.isEditing(t) && !a && u?.stopEditing(t), a || c.setFocusedCell({
						column: n,
						rowIndex: r,
						rowPinned: i,
						forceBrowserFocus: !0,
						preventScrollOnBrowserFocus: !0,
						sourceEvent: e
					});
				}
			}
			_ || (o?.handleCellMouseDown(e, p), h());
		}
	}
	isRightClickInExistingRange(e) {
		let { rangeSvc: t } = this.beans;
		if (t) {
			let n = t.isCellInAnyRange(this.cellCtrl.cellPosition), r = br(this.beans, e);
			if (n && r) return !0;
		}
		return !1;
	}
	containsWidget(e) {
		return qe(e, "ag-selection-checkbox", 3) || qe(e, "ag-drag-handle", 3);
	}
	onMouseOut(e) {
		if (this.mouseStayingInsideCell(e)) return;
		let { eventSvc: t, colHover: n } = this.beans;
		t.dispatchEvent(this.cellCtrl.createEvent(e, "cellMouseOut")), n?.clearMouseOver();
	}
	onMouseOver(e) {
		if (this.mouseStayingInsideCell(e)) return;
		let { eventSvc: t, colHover: n } = this.beans;
		t.dispatchEvent(this.cellCtrl.createEvent(e, "cellMouseOver")), n?.setMouseOver([this.column]);
	}
	mouseStayingInsideCell(e) {
		if (!e.target || !e.relatedTarget) return !1;
		let t = this.cellCtrl.eGui, n = t.contains(e.target), r = t.contains(e.relatedTarget);
		return n && r;
	}
}, Vp = class extends H {
	constructor(e, t) {
		super(), this.cellCtrl = e, this.beans = t, this.column = e.column, this.rowNode = e.rowNode;
	}
	setupRowSpan() {
		this.rowSpan = this.column.getRowSpan(this.rowNode), this.addManagedListeners(this.beans.eventSvc, { newColumnsLoaded: () => this.onNewColumnsLoaded() });
	}
	init() {
		this.eSetLeft = this.cellCtrl.getRootElement(), this.eContent = this.cellCtrl.eGui;
		let e = this.cellCtrl.getCellSpan();
		if (e || (this.setupColSpan(), this.setupRowSpan()), this.onLeftChanged(), this.onWidthChanged(), e || this._legacyApplyRowSpan(), e) {
			let t = this.refreshSpanHeight.bind(this, e);
			t(), this.addManagedListeners(this.beans.eventSvc, {
				paginationChanged: t,
				recalculateRowBounds: t,
				pinnedHeightChanged: t
			});
		}
	}
	refreshSpanHeight(e) {
		let t = e.getCellHeight();
		t != null && (this.eContent.style.height = `${t}px`);
	}
	onNewColumnsLoaded() {
		let e = this.column.getRowSpan(this.rowNode);
		this.rowSpan !== e && (this.rowSpan = e, this._legacyApplyRowSpan(!0));
	}
	onDisplayColumnsChanged() {
		let e = this.getColSpanningList();
		N(this.colsSpanning, e) || (this.colsSpanning = e, this.onWidthChanged(), this.onLeftChanged());
	}
	setupColSpan() {
		this.column.getColDef().colSpan != null && (this.colsSpanning = this.getColSpanningList(), this.addManagedListeners(this.beans.eventSvc, {
			displayedColumnsChanged: this.onDisplayColumnsChanged.bind(this),
			displayedColumnsWidthChanged: this.onWidthChanged.bind(this)
		}));
	}
	onWidthChanged() {
		if (!this.eContent) return;
		let e = this.getCellWidth();
		this.eContent.style.width = `${e}px`;
	}
	getCellWidth() {
		return this.colsSpanning ? this.colsSpanning.reduce((e, t) => e + t.getActualWidth(), 0) : this.column.getActualWidth();
	}
	getColSpanningList() {
		let { column: e, rowNode: t } = this, n = e.getColSpan(t), r = [];
		if (n === 1) r.push(e);
		else {
			let t = e, i = e.getPinned();
			for (let e = 0; t && e < n && (r.push(t), t = this.beans.visibleCols.getColAfter(t), !(!t || L(t) || i !== t.getPinned())); e++);
		}
		return r;
	}
	onLeftChanged() {
		if (!this.eSetLeft) return;
		let e = this.modifyLeftForPrintLayout(this.getCellLeft());
		this.eSetLeft.style.left = e + "px";
	}
	getCellLeft() {
		let e;
		return e = this.beans.gos.get("enableRtl") && this.colsSpanning ? M(this.colsSpanning) : this.column, e.getLeft();
	}
	modifyLeftForPrintLayout(e) {
		if (!this.cellCtrl.printLayout || this.column.getPinned() === "left") return e;
		let { visibleCols: t } = this.beans, n = t.getColsLeftWidth();
		return this.column.getPinned() === "right" ? n + t.bodyWidth + (e || 0) : n + (e || 0);
	}
	_legacyApplyRowSpan(e) {
		if (this.rowSpan === 1 && !e) return;
		let t = Zn(this.beans) * this.rowSpan;
		this.eContent.style.height = `${t}px`, this.eContent.style.zIndex = "1";
	}
	destroy() {
		super.destroy();
	}
}, Hp = "ag-cell", Up = "ag-cell-auto-height", Wp = "ag-cell-normal-height", Gp = "ag-cell-focus", Kp = "ag-cell-first-right-pinned", qp = "ag-cell-last-left-pinned", Jp = "ag-cell-not-inline-editing", Yp = "ag-cell-wrap-text", Xp = 0, Zp = class extends H {
	constructor(e, t, n, r) {
		super(), this.column = e, this.rowNode = t, this.rowCtrl = r, this.rangeFeature = void 0, this.rowResizeFeature = void 0, this.positionFeature = void 0, this.customStyleFeature = void 0, this.editStyleFeature = void 0, this.mouseListener = void 0, this.keyboardListener = void 0, this.suppressRefreshCell = !1, this.onCompAttachedFuncs = [], this.onEditorAttachedFuncs = [], this.focusEventWhileNotReady = null, this.hasBeenFocused = !1, this.hasEdit = !1, this.tooltipFeature = void 0, this.editorTooltipFeature = void 0, this.beans = n, this.gos = n.gos, this.editSvc = n.editSvc, this.hasEdit = !!n.editSvc;
		let { colId: i } = e;
		this.instanceId = i + "-" + Xp++, this.createCellPosition(), this.updateAndFormatValue(!1);
	}
	addFeatures() {
		let { beans: e } = this;
		this.positionFeature = new Vp(this, e), this.customStyleFeature = e.cellStyles?.createCellCustomStyleFeature(this), this.editStyleFeature = e.editSvc?.createCellStyleFeature(this), this.mouseListener = new Bp(this, e, this.column), this.keyboardListener = new zp(this, e, this.rowNode, this.rowCtrl), this.enableTooltipFeature();
		let { rangeSvc: t } = e;
		t && ur(e.gos) && (this.rangeFeature = t.createCellRangeFeature(this)), ai(this.column) && (this.rowResizeFeature = this.beans.rowNumbersSvc.createRowNumbersRowResizerFeature(this));
	}
	isCellSpanning() {
		return !1;
	}
	getCellSpan() {}
	removeFeatures() {
		let e = this.beans.context;
		this.positionFeature = e.destroyBean(this.positionFeature), this.editorTooltipFeature = e.destroyBean(this.editorTooltipFeature), this.customStyleFeature = e.destroyBean(this.customStyleFeature), this.editStyleFeature = e.destroyBean(this.editStyleFeature), this.mouseListener = e.destroyBean(this.mouseListener), this.keyboardListener = e.destroyBean(this.keyboardListener), this.rangeFeature = e.destroyBean(this.rangeFeature), this.rowResizeFeature = e.destroyBean(this.rowResizeFeature), this.disableTooltipFeature();
	}
	enableTooltipFeature(e, t) {
		this.tooltipFeature = this.beans.tooltipSvc?.enableCellTooltipFeature(this, e, t);
	}
	disableTooltipFeature() {
		this.tooltipFeature = this.beans.context.destroyBean(this.tooltipFeature);
	}
	enableEditorTooltipFeature(e) {
		this.editorTooltipFeature && this.disableEditorTooltipFeature(), this.editorTooltipFeature = this.beans.tooltipSvc?.setupCellEditorTooltip(this, e), Pp(this.beans);
	}
	disableEditorTooltipFeature() {
		this.editorTooltipFeature = this.beans.context.destroyBean(this.editorTooltipFeature);
	}
	setComp(e, t, n, r, i, a, o) {
		this.comp = e, this.eGui = t, this.printLayout = i, o ??= this, this.addDomData(o), this.addFeatures(), o.addDestroyFunc(() => this.removeFeatures()), this.onSuppressCellFocusChanged(this.beans.gos.get("suppressCellFocus")), this.setupFocus(), this.applyStaticCssClasses(), this.setWrapText(), this.onFirstRightPinnedChanged(), this.onLastLeftPinnedChanged(), this.onColumnHover(), this.setupControlComps(), this.setupAutoHeight(r, o), this.refreshFirstAndLastStyles(), this.checkFormulaError(), this.refreshAriaRowIndex(), this.refreshAriaColIndex(), this.positionFeature?.init(), this.customStyleFeature?.setComp(e), this.editStyleFeature?.setComp(e), this.tooltipFeature?.refreshTooltip(), this.keyboardListener?.init(), this.rangeFeature?.setComp(e), this.rowResizeFeature?.refreshRowResizer();
		let s = a ? this.isCellEditable() : void 0, c = !s && this.hasEdit && this.editSvc?.isEditing(this, { withOpenEditor: !0 });
		if (s || c ? this.editSvc?.startEditing(this, {
			startedEdit: !1,
			source: "api",
			silent: !0,
			continueEditing: !0,
			editable: s
		}) : this.showValue(!1, !0), this.onCompAttachedFuncs.length) {
			for (let e of this.onCompAttachedFuncs) e();
			this.onCompAttachedFuncs = [];
		}
	}
	checkFormulaError() {
		let e = !!this.beans.formula?.getFormulaError(this.column, this.rowNode);
		this.eGui.classList.toggle("formula-error", e);
	}
	setupAutoHeight(e, t) {
		this.isAutoHeight = this.beans.rowAutoHeight?.setupCellAutoHeight(this, e, t) ?? !1;
	}
	getCellAriaRole() {
		return this.column.getColDef().cellAriaRole ?? "gridcell";
	}
	isCellRenderer() {
		let e = this.column.getColDef();
		return e.cellRenderer != null || e.cellRendererSelector != null;
	}
	getValueToDisplay() {
		return this.valueFormatted ?? this.value;
	}
	getDeferLoadingCellRenderer() {
		let { beans: e, column: t } = this, { userCompFactory: n, ctrlsSvc: r, eventSvc: i } = e, a = t.getColDef(), o = this.createCellRendererParams();
		o.deferRender = !0;
		let s = Gi(n, a, o);
		if (r.getGridBodyCtrl()?.scrollFeature?.isScrolling()) {
			let e, t = new X((t) => {
				e = t;
			}), [n] = this.addManagedListeners(i, { bodyScrollEnd: () => {
				e(), n();
			} });
			return {
				loadingComp: s,
				onReady: t
			};
		}
		return {
			loadingComp: s,
			onReady: X.resolve()
		};
	}
	showValue(e, t) {
		let { beans: n, column: r, rowNode: i, rangeFeature: a } = this, { userCompFactory: o } = n, s = this.getValueToDisplay(), c, l = i.stub && i.groupData?.[r.getId()] == null, u = r.getColDef();
		if (l || this.isCellRenderer()) {
			let e = this.createCellRendererParams();
			c = !l || ai(r) ? Wi(o, u, e) : Gi(o, u, e);
		}
		if (!c && !l && n.findSvc?.isMatch(i, r)) {
			let e = this.createCellRendererParams();
			c = Wi(o, {
				...r.getColDef(),
				cellRenderer: "agFindCellRenderer"
			}, e);
		}
		if (this.hasEdit && this.editSvc.isBatchEditing() && this.editSvc.isRowEditing(i, { checkSiblings: !0 })) {
			let e = this.editSvc.prepDetailsDuringBatch(this, {
				compDetails: c,
				valueToDisplay: s
			});
			e && (e.compDetails ? c = e.compDetails : e.valueToDisplay && (s = e.valueToDisplay));
		}
		this.comp.setRenderDetails(c, s, e), this.customRowDragComp?.refreshVisibility(), !t && a && pt(n, () => a?.refreshRangeStyleAndHandle()), this.rowResizeFeature?.refreshRowResizer();
	}
	setupControlComps() {
		let e = this.column.getColDef();
		this.includeSelection = this.isIncludeControl(this.isCheckboxSelection(e), !0), this.includeRowDrag = this.isIncludeControl(e.rowDrag), this.includeDndSource = this.isIncludeControl(e.dndSource), this.comp.setIncludeSelection(this.includeSelection), this.comp.setIncludeDndSource(this.includeDndSource), this.comp.setIncludeRowDrag(this.includeRowDrag);
	}
	isForceWrapper() {
		return this.beans.gos.get("enableCellTextSelection") || this.column.isAutoHeight();
	}
	getCellValueClass() {
		let e = this.column.getColDef().cellRenderer === "agCheckboxCellRenderer", t = "";
		return e && (t = " ag-allow-overflow"), `ag-cell-value${t}`;
	}
	isIncludeControl(e, t = !1) {
		return (this.rowNode.rowPinned == null || t && Ip(this.rowNode)) && !!e;
	}
	isCheckboxSelection(e) {
		let { rowSelection: t, groupDisplayType: n } = this.beans.gridOptions, r = lr(t), i = ii(this.column);
		return n === "custom" && r !== "selectionColumn" && i ? !1 : e.checkboxSelection || i && typeof t == "object" && cr(t);
	}
	refreshShouldDestroy() {
		let e = this.column.getColDef(), t = this.includeSelection != this.isIncludeControl(this.isCheckboxSelection(e), !0), n = this.includeRowDrag != this.isIncludeControl(e.rowDrag), r = this.includeDndSource != this.isIncludeControl(e.dndSource), i = this.isAutoHeight != this.column.isAutoHeight();
		return t || n || r || i;
	}
	onPopupEditorClosed(e) {
		let { editSvc: t } = this.beans;
		if (!t?.isEditing(this, { withOpenEditor: !0 })) return;
		let n = e instanceof KeyboardEvent, r = e instanceof MouseEvent, i = n && e.key === Y.ESCAPE;
		t.stopEditing(this, {
			source: t.isBatchEditing() ? "ui" : "api",
			cancel: i,
			event: n || r ? e : void 0
		}), i && this.focusCell(!0, e);
	}
	stopEditing(e = !1) {
		let { editSvc: t } = this.beans;
		return t?.stopEditing(this, {
			cancel: e,
			source: t?.isBatchEditing() ? "ui" : "api"
		}) ?? !1;
	}
	createCellRendererParams() {
		let { value: e, valueFormatted: t, column: n, rowNode: r, comp: i, eGui: a, beans: { valueSvc: o, gos: s, editSvc: c } } = this;
		return K(s, {
			value: e,
			valueFormatted: t,
			getValue: () => o.getValueForDisplay({
				column: n,
				node: r,
				from: "edit"
			}).value,
			setValue: (e) => c?.setDataValue({
				rowNode: r,
				column: n
			}, e) || r.setDataValue(n, e),
			formatValue: this.formatValue.bind(this),
			data: r.data,
			node: r,
			pinned: n.getPinned(),
			colDef: n.getColDef(),
			column: n,
			refreshCell: this.refreshCell.bind(this),
			eGridCell: a,
			eParentOfValue: i.getParentOfValue(),
			registerRowDragger: (e, t, n, r) => this.registerRowDragger(e, t, r),
			setTooltip: (e, t) => {
				s.assertModuleRegistered("Tooltip", 3), this.tooltipFeature && this.disableTooltipFeature(), this.enableTooltipFeature(e, t), this.tooltipFeature?.refreshTooltip();
			}
		});
	}
	onCellChanged(e) {
		e.column === this.column && this.refreshCell();
	}
	refreshOrDestroyCell(e) {
		if (this.refreshShouldDestroy() ? this.rowCtrl?.recreateCell(this) : this.refreshCell(e), this.hasEdit && this.editCompDetails) {
			let { editSvc: e, comp: t } = this;
			!t?.getCellEditor() && e.isEditing(this, { withOpenEditor: !0 }) && e.startEditing(this, {
				startedEdit: !1,
				source: "api",
				silent: !0
			});
		}
	}
	refreshCell(e) {
		let { editStyleFeature: t, customStyleFeature: n, rowCtrl: { rowEditStyleFeature: r }, beans: { cellFlashSvc: i, filterManager: a }, column: o, comp: s, suppressRefreshCell: c, tooltipFeature: l } = this;
		if (c) return;
		let { field: u, valueGetter: d, showRowGroup: f, enableCellChangeFlash: p } = o.getColDef(), m = u == null && d == null && f == null, h = e?.newData ?? !1, g = m || e && (e.force || h), _ = !!s, v = this.updateAndFormatValue(_), y = g || v;
		if (_) {
			if (y) {
				this.showValue(!!h, !1);
				let o = a?.isSuppressFlashingCellsBecauseFiltering();
				!e?.suppressFlash && !o && p && i?.flashCell(this), t?.applyCellStyles?.(), n?.applyUserStyles(), n?.applyClassesFromColDef(), r?.applyRowStyles(), this.checkFormulaError();
			}
			l?.refreshTooltip(), n?.applyCellClassRules();
		}
	}
	isCellEditable() {
		return this.column.isCellEditable(this.rowNode);
	}
	formatValue(e) {
		return this.callValueFormatter(e) ?? e;
	}
	callValueFormatter(e) {
		return this.beans.valueSvc.formatValue(this.column, this.rowNode, e);
	}
	updateAndFormatValue(e) {
		let t = this.value, n = this.valueFormatted, { value: r, valueFormatted: i } = this.beans.valueSvc.getValueForDisplay({
			column: this.column,
			node: this.rowNode,
			includeValueFormatted: !0,
			from: "edit"
		});
		return this.value = r, this.valueFormatted = i, e ? !this.valuesAreEqual(t, this.value) || this.valueFormatted != n : !0;
	}
	valuesAreEqual(e, t) {
		let n = this.column.getColDef();
		return n.equals ? n.equals(e, t) : e === t;
	}
	addDomData(e) {
		let t = this.eGui;
		er(this.beans.gos, t, us, this), e.addDestroyFunc(() => er(this.beans.gos, t, us, null));
	}
	createEvent(e, t) {
		let { rowNode: n, column: r, value: i, beans: a } = this;
		return Lp(a, e, t, {
			rowNode: n,
			column: r
		}, i);
	}
	processCharacter(e) {
		this.keyboardListener?.processCharacter(e);
	}
	onKeyDown(e) {
		this.keyboardListener?.onKeyDown(e);
	}
	onMouseEvent(e, t) {
		this.mouseListener?.onMouseEvent(e, t);
	}
	getColSpanningList() {
		return this.positionFeature?.getColSpanningList() ?? [];
	}
	onLeftChanged() {
		this.comp && this.positionFeature?.onLeftChanged();
	}
	onDisplayedColumnsChanged() {
		this.eGui && (this.refreshAriaColIndex(), this.refreshFirstAndLastStyles());
	}
	refreshFirstAndLastStyles() {
		let { comp: e, column: t, beans: n } = this;
		Oo(e, t, n.visibleCols);
	}
	refreshAriaColIndex() {
		let e = this.beans.visibleCols.getAriaColIndex(this.column);
		Le(this.eGui, e);
	}
	onWidthChanged() {
		return this.positionFeature?.onWidthChanged();
	}
	getRowPosition() {
		let { rowIndex: e, rowPinned: t } = this.cellPosition;
		return {
			rowIndex: e,
			rowPinned: t
		};
	}
	updateRangeBordersIfRangeCount() {
		this.comp && this.rangeFeature?.updateRangeBordersIfRangeCount();
	}
	onCellSelectionChanged() {
		this.comp && this.rangeFeature?.onCellSelectionChanged();
	}
	isRangeSelectionEnabled() {
		return this.rangeFeature != null;
	}
	focusCell(e = !1, t) {
		let n = this.editSvc?.allowedFocusTargetOnValidation(this);
		n && n !== this || this.beans.focusSvc.setFocusedCell({
			...this.getFocusedCellPosition(),
			forceBrowserFocus: e,
			sourceEvent: t
		});
	}
	restoreFocus(e = !1) {
		let { beans: { editSvc: t, focusSvc: n }, comp: r } = this;
		if (!r || t?.isEditing(this) || !this.isCellFocused() || !n.shouldTakeFocus()) return;
		let i = () => {
			if (!this.isAlive()) return;
			let e = r.getFocusableElement();
			this.isCellFocused() && e.focus({ preventScroll: !0 });
		};
		if (e) {
			setTimeout(i, 0);
			return;
		}
		i();
	}
	onRowIndexChanged() {
		this.createCellPosition(), this.refreshAriaRowIndex(), this.onCellFocused(), this.restoreFocus(), this.rangeFeature?.onCellSelectionChanged(), this.rowResizeFeature?.refreshRowResizer();
	}
	onSuppressCellFocusChanged(e) {
		let t = this.eGui;
		t && ut(t, "tabindex", e ? void 0 : -1);
	}
	onFirstRightPinnedChanged() {
		if (!this.comp) return;
		let e = this.column.isFirstRightPinned();
		this.comp.toggleCss(Kp, e);
	}
	onLastLeftPinnedChanged() {
		if (!this.comp) return;
		let e = this.column.isLastLeftPinned();
		this.comp.toggleCss(qp, e);
	}
	checkCellFocused() {
		return this.beans.focusSvc.isCellFocused(this.cellPosition);
	}
	isCellFocused() {
		let e = this.checkCellFocused();
		return this.hasBeenFocused ||= e, e;
	}
	setupFocus() {
		this.restoreFocus(!0), this.onCellFocused(this.focusEventWhileNotReady ?? void 0);
	}
	onCellFocused(e) {
		let { beans: t } = this;
		if (ro(t)) return;
		if (!this.comp) {
			e && (this.focusEventWhileNotReady = e);
			return;
		}
		let n = this.isCellFocused(), r = t.editSvc?.isEditing(this) ?? !1;
		if (this.comp.toggleCss(Gp, n), n && (e?.forceBrowserFocus || !this.hasBrowserFocus() && this.beans.focusSvc.shouldTakeFocus())) {
			let n = this.comp.getFocusableElement();
			if (r) {
				let e = Sa(n, null, !0);
				e.length && (n = e[0]);
			}
			let i = e ? e.preventScrollOnBrowserFocus : !0;
			n.focus({ preventScroll: i }), dt(t, n);
		}
		n && this.focusEventWhileNotReady && (this.focusEventWhileNotReady = null), n && e && this.rowCtrl.announceDescription();
	}
	createCellPosition() {
		let { rowIndex: e, rowPinned: t } = this.rowNode;
		this.cellPosition = {
			rowIndex: e,
			rowPinned: F(t),
			column: this.column
		};
	}
	applyStaticCssClasses() {
		let { comp: e } = this;
		e.toggleCss(Hp, !0), e.toggleCss(Jp, !0);
		let t = this.column.isAutoHeight() == 1;
		e.toggleCss(Up, t), e.toggleCss(Wp, !t);
	}
	onColumnHover() {
		this.beans.colHover?.onCellColumnHover(this.column, this.comp);
	}
	onColDefChanged() {
		this.comp && (this.column.isTooltipEnabled() ? (this.disableTooltipFeature(), this.enableTooltipFeature()) : this.disableTooltipFeature(), this.setWrapText(), this.editSvc?.isEditing(this) ? this.editSvc?.handleColDefChanged(this) : this.refreshOrDestroyCell({
			force: !0,
			suppressFlash: !0
		}));
	}
	setWrapText() {
		let e = this.column.getColDef().wrapText == 1;
		this.comp.toggleCss(Yp, e);
	}
	dispatchCellContextMenuEvent(e) {
		let t = this.column.getColDef(), n = this.createEvent(e, "cellContextMenu"), { beans: r } = this;
		r.eventSvc.dispatchEvent(n), t.onCellContextMenu && window.setTimeout(() => {
			r.frameworkOverrides.wrapOutgoing(() => {
				t.onCellContextMenu(n);
			});
		}, 0);
	}
	getCellRenderer() {
		return this.comp?.getCellRenderer() ?? null;
	}
	destroy() {
		this.onCompAttachedFuncs = [], this.onEditorAttachedFuncs = [], this.isCellFocused() && this.hasBrowserFocus() && this.beans.focusSvc.attemptToRecoverFocus(), super.destroy();
	}
	hasBrowserFocus() {
		return this.eGui?.contains(z(this.beans)) ?? !1;
	}
	createSelectionCheckbox() {
		let e = this.beans.selectionSvc?.createCheckboxSelectionComponent();
		if (e) return this.beans.context.createBean(e), e.init({
			rowNode: this.rowNode,
			column: this.column
		}), e;
	}
	createDndSource() {
		let e = this.beans.registry.createDynamicBean("dndSourceComp", !1, this.rowNode, this.column, this.eGui);
		return e && this.beans.context.createBean(e), e;
	}
	registerRowDragger(e, t, n) {
		if (this.customRowDragComp) {
			this.customRowDragComp.setDragElement(e, t);
			return;
		}
		let r = this.createRowDragComp(e, t, n);
		r && (this.customRowDragComp = r, this.addDestroyFunc(() => {
			this.beans.context.destroyBean(r), this.customRowDragComp = null;
		}), r.refreshVisibility());
	}
	createRowDragComp(e, t, n) {
		let r = this.beans.rowDragSvc?.createRowDragCompForCell(this.rowNode, this.column, () => this.value, e, t, n);
		if (r) return this.beans.context.createBean(r), r;
	}
	cellEditorAttached() {
		for (let e of this.onEditorAttachedFuncs) e();
		this.onEditorAttachedFuncs = [];
	}
	setFocusedCellPosition(e) {}
	getFocusedCellPosition() {
		return this.cellPosition;
	}
	refreshAriaRowIndex() {
		if (!ai(this.column) || !this.eGui) return;
		let { ariaRowIndex: e } = this.rowCtrl;
		e != null && Fe(this.eGui, e);
	}
	getRootElement() {
		return this.eGui;
	}
};
function Qp(e) {
	if (e.group) return e.level;
	let t = e.parent;
	return t ? t.level + 1 : 0;
}
var $p = 0, em = class extends H {
	constructor(e, t, n, r, i) {
		super(), this.rowNode = e, this.useAnimationFrameForCreate = r, this.printLayout = i, this.focusEventWhileNotReady = null, this.allRowGuis = [], this.active = !0, this.centerCellCtrls = {
			list: [],
			map: {}
		}, this.leftCellCtrls = {
			list: [],
			map: {}
		}, this.rightCellCtrls = {
			list: [],
			map: {}
		}, this.slideInAnimation = {
			left: !1,
			center: !1,
			right: !1,
			fullWidth: !1
		}, this.fadeInAnimation = {
			left: !1,
			center: !1,
			right: !1,
			fullWidth: !1
		}, this.rowDragComps = [], this.lastMouseDownOnDragger = !1, this.emptyStyle = {}, this.updateColumnListsPending = !1, this.rowId = null, this.ariaRowIndex = null, this.businessKey = null, this.beans = t, this.gos = t.gos, this.paginationPage = t.pagination?.getCurrentPage() ?? 0, this.suppressRowTransform = this.gos.get("suppressRowTransform"), this.instanceId = e.id + "-" + $p++, this.rowId = ue(e.id), this.initRowBusinessKey(), this.rowFocused = t.focusSvc.isRowFocused(this.rowNode.rowIndex, this.rowNode.rowPinned), this.rowLevel = Qp(this.rowNode), this.setRowType(), this.setAnimateFlags(n), this.rowStyles = this.processStylesFromGridOptions(), this.rowEditStyleFeature = t.editSvc?.createRowStyleFeature(this), this.addListeners();
	}
	initRowBusinessKey() {
		this.businessKeyForNodeFunc = this.gos.get("getBusinessKeyForNode"), this.updateRowBusinessKey();
	}
	updateRowBusinessKey() {
		typeof this.businessKeyForNodeFunc == "function" && (this.businessKey = ue(this.businessKeyForNodeFunc(this.rowNode)));
	}
	updateGui(e, t) {
		e === "left" ? this.leftGui = t : e === "right" ? this.rightGui = t : e === "fullWidth" ? this.fullWidthGui = t : this.centerGui = t;
	}
	setComp(e, t, n, r) {
		let { context: i, rowRenderer: a } = this.beans;
		r = Co(this, i, r);
		let o = {
			rowComp: e,
			element: t,
			containerType: n,
			compBean: r
		};
		this.allRowGuis.push(o), this.updateGui(n, o), this.initialiseRowComp(o);
		let s = this.rowNode, c = this.rowType === "FullWidthLoading" || s.stub, l = !s.data && this.beans.rowModel.getType() === "infinite";
		!c && !l && !s.rowPinned && a.dispatchFirstDataRenderedEvent(), this.setupFocus();
	}
	unsetComp(e) {
		this.allRowGuis = this.allRowGuis.filter((t) => t.containerType !== e), this.updateGui(e, void 0);
	}
	isCacheable() {
		return this.rowType === "FullWidthDetail" && this.gos.get("keepDetailRows");
	}
	setCached(e) {
		let t = e ? "none" : "";
		for (let e of this.allRowGuis) e.element.style.display = t;
	}
	initialiseRowComp(e) {
		let t = this.gos;
		this.onSuppressCellFocusChanged(this.beans.gos.get("suppressCellFocus")), this.listenOnDomOrder(e), this.onRowHeightChanged(e), this.updateRowIndexes(e), this.setFocusedClasses(e), this.setStylesFromGridOptions(!1, e), Gn(t) && this.rowNode.selectable && this.onRowSelected(e), this.updateColumnLists(!this.useAnimationFrameForCreate);
		let n = e.rowComp, r = this.getInitialRowClasses(e.containerType);
		for (let e of r) n.toggleCss(e, !0);
		this.executeSlideAndFadeAnimations(e), this.rowNode.group && Ne(e.element, !!this.rowNode.expanded), this.setRowCompRowId(n), this.setRowCompRowBusinessKey(n), er(t, e.element, fs, this), e.compBean.addDestroyFunc(() => er(t, e.element, fs, null)), this.useAnimationFrameForCreate ? this.beans.animationFrameSvc.createTask(this.addHoverFunctionality.bind(this, e), this.rowNode.rowIndex, "p2", !1) : this.addHoverFunctionality(e), this.isFullWidth() && this.setupFullWidth(e), t.get("rowDragEntireRow") && this.addRowDraggerToRow(e), this.useAnimationFrameForCreate && this.beans.animationFrameSvc.addDestroyTask(() => {
			this.isAlive() && e.rowComp.toggleCss("ag-after-created", !0);
		}), this.executeProcessRowPostCreateFunc();
	}
	setRowCompRowBusinessKey(e) {
		this.businessKey != null && e.setRowBusinessKey(this.businessKey);
	}
	setRowCompRowId(e) {
		let t = ue(this.rowNode.id);
		this.rowId = t, t != null && e.setRowId(t);
	}
	executeSlideAndFadeAnimations(e) {
		let { containerType: t } = e;
		this.slideInAnimation[t] && (Bt(() => {
			this.onTopChanged();
		}), this.slideInAnimation[t] = !1), this.fadeInAnimation[t] && (Bt(() => {
			e.rowComp.toggleCss("ag-opacity-zero", !1);
		}), this.fadeInAnimation[t] = !1);
	}
	addRowDraggerToRow(e) {
		let t = this.beans.rowDragSvc?.createRowDragCompForRow(this.rowNode, e.element);
		if (!t) return;
		let n = this.createBean(t, this.beans.context);
		this.rowDragComps.push(n), e.compBean.addDestroyFunc(() => {
			this.rowDragComps = this.rowDragComps.filter((e) => e !== n), this.rowEditStyleFeature = this.destroyBean(this.rowEditStyleFeature, this.beans.context), this.destroyBean(n, this.beans.context);
		});
	}
	setupFullWidth(e) {
		let t = this.getPinnedForContainer(e.containerType), n = this.createFullWidthCompDetails(e.element, t);
		e.rowComp.showFullWidth(n);
	}
	getFullWidthCellRenderers() {
		return this.gos.get("embedFullWidthRows") ? this.allRowGuis.map((e) => e?.rowComp?.getFullWidthCellRenderer()) : [this.fullWidthGui?.rowComp?.getFullWidthCellRenderer()];
	}
	executeProcessRowPostCreateFunc() {
		let e = this.gos.getCallback("processRowPostCreate");
		!e || !this.areAllContainersReady() || e({
			eRow: this.centerGui.element,
			ePinnedLeftRow: this.leftGui ? this.leftGui.element : void 0,
			ePinnedRightRow: this.rightGui ? this.rightGui.element : void 0,
			node: this.rowNode,
			rowIndex: this.rowNode.rowIndex,
			addRenderedRowListener: this.addEventListener.bind(this)
		});
	}
	areAllContainersReady() {
		let { leftGui: e, centerGui: t, rightGui: n, beans: { visibleCols: r } } = this, i = !!e || !r.isPinningLeft(), a = !!t, o = !!n || !r.isPinningRight();
		return i && a && o;
	}
	isNodeFullWidthCell() {
		if (this.rowNode.detail) return !0;
		let e = this.beans.gos.getCallback("isFullWidthRow");
		return e ? e({ rowNode: this.rowNode }) : !1;
	}
	setRowType() {
		let { rowNode: e, gos: t, beans: { colModel: n } } = this, r = e.stub && !t.get("suppressServerSideFullWidthLoadingRow") && !t.get("groupHideOpenParents"), i = this.isNodeFullWidthCell(), a = t.get("masterDetail") && e.detail, o = sr(t, e, n.isPivotMode());
		r ? this.rowType = "FullWidthLoading" : a ? this.rowType = "FullWidthDetail" : i ? this.rowType = "FullWidth" : o ? this.rowType = "FullWidthGroup" : this.rowType = "Normal";
	}
	updateColumnLists(e = !1, t = !1) {
		if (this.isFullWidth()) return;
		let { animationFrameSvc: n } = this.beans;
		if (!n?.active || e || this.printLayout) {
			this.updateColumnListsImpl(t);
			return;
		}
		this.updateColumnListsPending ||= (n.createTask(() => {
			this.active && this.updateColumnListsImpl(!0);
		}, this.rowNode.rowIndex, "p1", !1), !0);
	}
	getNewCellCtrl(e) {
		if (!this.beans.rowSpanSvc?.isCellSpanning(e, this.rowNode)) return new Zp(e, this.rowNode, this.beans, this);
	}
	isCorrectCtrlForSpan(e) {
		return !this.beans.rowSpanSvc?.isCellSpanning(e.column, this.rowNode);
	}
	createCellCtrls(e, t, n = null) {
		let r = {
			list: [],
			map: {}
		}, i = (e, t, n) => {
			n == null ? r.list.push(t) : r.list.splice(n, 0, t), r.map[e] = t;
		}, a = [];
		for (let n of t) {
			let t = n.getInstanceId(), r = e.map[t];
			r && !this.isCorrectCtrlForSpan(r) && (r.destroy(), r = void 0), r ||= this.getNewCellCtrl(n), r && i(t, r);
		}
		for (let t of e.list) {
			let e = t.column.getInstanceId();
			r.map[e] ?? (this.isCellEligibleToBeRemoved(t, n) ? t.destroy() : a.push([e, t]));
		}
		if (a.length) for (let [e, t] of a) {
			let n = r.list.findIndex((e) => e.column.getLeft() > t.column.getLeft());
			i(e, t, n === -1 ? void 0 : Math.max(n - 1, 0));
		}
		let { focusSvc: o, visibleCols: s } = this.beans, c = o.getFocusedCell();
		if (c && c.column.getPinned() == n) {
			let e = c.column.getInstanceId();
			if (!r.map[e] && s.allCols.includes(c.column)) {
				let t = this.createFocusedCellCtrl();
				if (t) {
					let n = r.list.findIndex((e) => e.column.getLeft() > t.column.getLeft());
					i(e, t, n === -1 ? void 0 : Math.max(n - 1, 0));
				}
			}
		}
		return r;
	}
	createFocusedCellCtrl() {
		let { focusSvc: e, rowSpanSvc: t } = this.beans, n = e.getFocusedCell();
		if (!n) return;
		let r = t?.getCellSpan(n.column, this.rowNode);
		if (r) {
			if (r.firstNode !== this.rowNode || !r.doesSpanContain(n)) return;
		} else if (!e.isRowFocused(this.rowNode.rowIndex, this.rowNode.rowPinned)) return;
		return this.getNewCellCtrl(n.column);
	}
	updateColumnListsImpl(e) {
		this.updateColumnListsPending = !1, this.createAllCellCtrls(), this.setCellCtrls(e);
	}
	setCellCtrls(e) {
		for (let t of this.allRowGuis) {
			let n = this.getCellCtrlsForContainer(t.containerType);
			t.rowComp.setCellCtrls(n, e);
		}
	}
	getCellCtrlsForContainer(e) {
		switch (e) {
			case "left": return this.leftCellCtrls.list;
			case "right": return this.rightCellCtrls.list;
			case "fullWidth": return [];
			case "center": return this.centerCellCtrls.list;
		}
	}
	createAllCellCtrls() {
		let e = this.beans.colViewport, t = this.beans.visibleCols;
		if (this.printLayout) this.centerCellCtrls = this.createCellCtrls(this.centerCellCtrls, t.allCols), this.leftCellCtrls = {
			list: [],
			map: {}
		}, this.rightCellCtrls = {
			list: [],
			map: {}
		};
		else {
			let n = e.getColsWithinViewport(this.rowNode);
			this.centerCellCtrls = this.createCellCtrls(this.centerCellCtrls, n);
			let r = t.getLeftColsForRow(this.rowNode);
			this.leftCellCtrls = this.createCellCtrls(this.leftCellCtrls, r, "left");
			let i = t.getRightColsForRow(this.rowNode);
			this.rightCellCtrls = this.createCellCtrls(this.rightCellCtrls, i, "right");
		}
	}
	isCellEligibleToBeRemoved(e, t) {
		let { column: n } = e;
		if (n.getPinned() != t || !this.isCorrectCtrlForSpan(e)) return !0;
		let { visibleCols: r, editSvc: i } = this.beans, a = i?.isEditing(e), o = e.isCellFocused();
		return a || o ? !(r.allCols.indexOf(n) >= 0) : !0;
	}
	getDomOrder() {
		return this.gos.get("ensureDomOrder") || G(this.gos, "print");
	}
	listenOnDomOrder(e) {
		e.compBean.addManagedPropertyListeners(["domLayout", "ensureDomOrder"], () => {
			e.rowComp.setDomOrder(this.getDomOrder());
		});
	}
	setAnimateFlags(e) {
		if (this.rowNode.sticky || !e) return;
		let t = I(this.rowNode.oldRowTop), { visibleCols: n } = this.beans, r = n.isPinningLeft(), i = n.isPinningRight();
		if (t) {
			let { slideInAnimation: e } = this;
			if (this.isFullWidth() && !this.gos.get("embedFullWidthRows")) {
				e.fullWidth = !0;
				return;
			}
			e.center = !0, e.left = r, e.right = i;
		} else {
			let { fadeInAnimation: e } = this;
			if (this.isFullWidth() && !this.gos.get("embedFullWidthRows")) {
				e.fullWidth = !0;
				return;
			}
			e.center = !0, e.left = r, e.right = i;
		}
	}
	isFullWidth() {
		return this.rowType !== "Normal";
	}
	refreshFullWidth() {
		let e = (e, t) => e ? e.rowComp.refreshFullWidth(() => this.createFullWidthCompDetails(e.element, t).params) : !0, t = e(this.fullWidthGui, null), n = e(this.centerGui, null), r = e(this.leftGui, "left"), i = e(this.rightGui, "right");
		return t && n && r && i;
	}
	addListeners() {
		let { beans: e, gos: t, rowNode: n } = this, { expansionSvc: r, eventSvc: i, context: a, rowSpanSvc: o } = e;
		this.addManagedListeners(this.rowNode, {
			heightChanged: () => this.onRowHeightChanged(),
			rowSelected: () => this.onRowSelected(),
			rowIndexChanged: this.onRowIndexChanged.bind(this),
			topChanged: this.onTopChanged.bind(this),
			...r?.getRowExpandedListeners(this) ?? {}
		}), n.detail && this.addManagedListeners(n.parent, { dataChanged: this.onRowNodeDataChanged.bind(this) }), this.addManagedListeners(n, {
			dataChanged: this.onRowNodeDataChanged.bind(this),
			cellChanged: this.postProcessCss.bind(this),
			rowHighlightChanged: this.onRowNodeHighlightChanged.bind(this),
			draggingChanged: this.postProcessRowDragging.bind(this),
			uiLevelChanged: this.onUiLevelChanged.bind(this),
			rowPinned: this.onRowPinned.bind(this)
		}), this.addManagedListeners(i, {
			paginationPixelOffsetChanged: this.onPaginationPixelOffsetChanged.bind(this),
			heightScaleChanged: this.onTopChanged.bind(this),
			displayedColumnsChanged: this.onDisplayedColumnsChanged.bind(this),
			virtualColumnsChanged: this.onVirtualColumnsChanged.bind(this),
			cellFocused: this.onCellFocusChanged.bind(this),
			cellFocusCleared: this.onCellFocusChanged.bind(this),
			paginationChanged: this.onPaginationChanged.bind(this),
			modelUpdated: this.refreshFirstAndLastRowStyles.bind(this),
			columnMoved: () => this.updateColumnLists()
		}), o && this.addManagedListeners(o, { spannedCellsUpdated: ({ pinned: e }) => {
			e && !n.rowPinned || this.updateColumnLists();
		} }), this.addDestroyFunc(() => {
			this.rowDragComps = this.destroyBeans(this.rowDragComps, a), this.tooltipFeature = this.destroyBean(this.tooltipFeature, a), this.rowEditStyleFeature = this.destroyBean(this.rowEditStyleFeature, a);
		}), this.addManagedPropertyListeners([
			"rowStyle",
			"getRowStyle",
			"rowClass",
			"getRowClass",
			"rowClassRules"
		], this.postProcessCss.bind(this)), this.addManagedPropertyListener("rowDragEntireRow", () => {
			if (t.get("rowDragEntireRow")) {
				for (let e of this.allRowGuis) this.addRowDraggerToRow(e);
				return;
			}
			this.rowDragComps = this.destroyBeans(this.rowDragComps, a);
		}), this.addListenersForCellComps();
	}
	addListenersForCellComps() {
		this.addManagedListeners(this.rowNode, {
			rowIndexChanged: () => {
				for (let e of this.getAllCellCtrls()) e.onRowIndexChanged();
			},
			cellChanged: (e) => {
				for (let t of this.getAllCellCtrls()) t.onCellChanged(e);
			}
		});
	}
	onRowPinned() {
		for (let e of this.allRowGuis) e.rowComp.toggleCss("ag-row-pinned-source", !!this.rowNode.pinnedSibling);
	}
	onRowNodeDataChanged(e) {
		this.refreshRow({
			suppressFlash: !e.update,
			newData: !e.update
		});
	}
	refreshRow(e) {
		if (this.isFullWidth() !== !!this.isNodeFullWidthCell()) {
			this.beans.rowRenderer.redrawRow(this.rowNode);
			return;
		}
		if (this.isFullWidth()) {
			this.refreshFullWidth() || this.beans.rowRenderer.redrawRow(this.rowNode);
			return;
		}
		for (let t of this.getAllCellCtrls()) t.refreshCell(e);
		for (let e of this.allRowGuis) this.setRowCompRowId(e.rowComp), this.updateRowBusinessKey(), this.setRowCompRowBusinessKey(e.rowComp);
		this.onRowSelected(), this.postProcessCss();
	}
	postProcessCss() {
		this.setStylesFromGridOptions(!0), this.postProcessClassesFromGridOptions(), this.postProcessRowClassRules(), this.rowEditStyleFeature?.applyRowStyles(), this.postProcessRowDragging();
	}
	onRowNodeHighlightChanged() {
		let e = this.beans.rowDropHighlightSvc, t = e?.row === this.rowNode ? e.position : "none", n = t === "above", r = t === "inside", i = t === "below", a = t !== "none", o = n || i, s = this.rowNode.uiLevel, c = o && s > 0, l = c ? s.toString() : "0";
		for (let e of this.allRowGuis) {
			let t = e.rowComp;
			t.toggleCss("ag-row-highlight-above", n), t.toggleCss("ag-row-highlight-inside", r), t.toggleCss("ag-row-highlight-below", i), t.toggleCss("ag-row-highlight-indent", c), a ? e.element.style.setProperty("--ag-row-highlight-level", l) : e.element.style.removeProperty("--ag-row-highlight-level");
		}
	}
	postProcessRowDragging() {
		let e = this.rowNode.dragging;
		for (let t of this.allRowGuis) t.rowComp.toggleCss("ag-row-dragging", e);
	}
	onDisplayedColumnsChanged() {
		this.updateColumnLists(!0), this.beans.rowAutoHeight?.requestCheckAutoHeight();
	}
	onVirtualColumnsChanged() {
		this.updateColumnLists(!1, !0);
	}
	getRowPosition() {
		return {
			rowPinned: F(this.rowNode.rowPinned),
			rowIndex: this.rowNode.rowIndex
		};
	}
	onKeyboardNavigate(e) {
		let t = this.findFullWidthInfoForEvent(e);
		if (!t) return;
		let { rowGui: n, column: r } = t;
		if (n.element !== e.target) return;
		let i = this.rowNode, { focusSvc: a, navigation: o } = this.beans, s = a.getFocusedCell(), c = {
			rowIndex: i.rowIndex,
			rowPinned: i.rowPinned,
			column: s?.column ?? r
		};
		o?.navigateToNextCell(e, e.key, c, !0), e.preventDefault();
	}
	onTabKeyDown(e) {
		if (e.defaultPrevented || Aa(e)) return;
		let t = this.allRowGuis.find((t) => t.element.contains(e.target)), n = t ? t.element : null, r = n === e.target, i = z(this.beans), a = !1;
		n && i && (a = n.contains(i) && i.classList.contains("ag-cell"));
		let o = null;
		!r && !a && (o = wa(this.beans, n, !1, e.shiftKey)), (this.isFullWidth() && r || !o) && this.beans.navigation?.onTabKeyDown(this, e);
	}
	getFullWidthElement() {
		return this.fullWidthGui ? this.fullWidthGui.element : null;
	}
	getRowYPosition() {
		let e = this.allRowGuis.find((e) => rt(e.element))?.element;
		return e ? e.getBoundingClientRect().top : 0;
	}
	onSuppressCellFocusChanged(e) {
		let t = this.isFullWidth() && e ? void 0 : this.gos.get("tabIndex");
		for (let e of this.allRowGuis) ut(e.element, "tabindex", t);
	}
	setupFocus() {
		this.isFullWidth() && (this.restoreFullWidthFocus(!0), this.onFullWidthRowFocused(this.focusEventWhileNotReady ?? void 0));
	}
	restoreFullWidthFocus(e = !1) {
		let { focusSvc: t, editSvc: n } = this.beans;
		if (n?.isEditing(this) || !t.isRowFocused(this.rowNode.rowIndex, this.rowNode.rowPinned) || !t.shouldTakeFocus()) return;
		let r = this.getFullWidthRowGuiForFocus();
		if (!r) return;
		let i = () => {
			this.isAlive() && t.isRowFocused(this.rowNode.rowIndex, this.rowNode.rowPinned) && r.element.focus({ preventScroll: !0 });
		};
		if (e) {
			setTimeout(i, 0);
			return;
		}
		i();
	}
	getFullWidthRowGuiForFocus(e) {
		if (this.fullWidthGui) return this.fullWidthGui;
		let t = this.beans.focusSvc.getFocusedCell(), n = this.beans.colModel.getCol(e?.column ?? t?.column);
		if (!n) return;
		let r = n?.pinned;
		return r === "right" ? this.rightGui : r === "left" ? this.leftGui : this.centerGui;
	}
	setFullWidthRowFocusedClass(e, t) {
		this.forEachGui(void 0, (n) => {
			n.element.classList.toggle("ag-full-width-focus", t && n === e);
		});
	}
	onFullWidthRowFocused(e) {
		let { focusSvc: t } = this.beans;
		if (!(this.isFullWidth() && t.isRowFocused(this.rowNode.rowIndex, this.rowNode.rowPinned))) {
			this.setFullWidthRowFocusedClass(void 0, !1);
			return;
		}
		let n = this.getFullWidthRowGuiForFocus(e);
		if (!n) {
			e && (this.focusEventWhileNotReady = e), this.setFullWidthRowFocusedClass(void 0, !1);
			return;
		}
		this.setFullWidthRowFocusedClass(n, !0), this.focusEventWhileNotReady = null, e?.forceBrowserFocus && n.element.focus({ preventScroll: !0 });
	}
	recreateCell(e) {
		this.centerCellCtrls = this.removeCellCtrl(this.centerCellCtrls, e), this.leftCellCtrls = this.removeCellCtrl(this.leftCellCtrls, e), this.rightCellCtrls = this.removeCellCtrl(this.rightCellCtrls, e), e.destroy(), this.updateColumnLists();
	}
	removeCellCtrl(e, t) {
		let n = {
			list: [],
			map: {}
		};
		for (let r of e.list) r !== t && (n.list.push(r), n.map[r.column.getInstanceId()] = r);
		return n;
	}
	onMouseEvent(e, t) {
		switch (e) {
			case "dblclick":
				this.onRowDblClick(t);
				break;
			case "click":
				this.onRowClick(t);
				break;
			case "pointerdown":
			case "touchstart":
			case "mousedown":
				this.onRowMouseDown(t);
				break;
		}
	}
	createRowEvent(e, t) {
		let { rowNode: n } = this;
		return K(this.gos, {
			type: e,
			node: n,
			data: n.data,
			rowIndex: n.rowIndex,
			rowPinned: n.rowPinned,
			event: t
		});
	}
	createRowEventWithSource(e, t) {
		let n = this.createRowEvent(e, t);
		return n.source = this, n;
	}
	onRowDblClick(e) {
		if (Aa(e)) return;
		let t = this.createRowEventWithSource("rowDoubleClicked", e);
		t.isEventHandlingSuppressed = this.isSuppressMouseEvent(e), this.beans.eventSvc.dispatchEvent(t);
	}
	findFullWidthInfoForEvent(e) {
		if (!e) return;
		let t = this.findFullWidthRowGui(e.target), n = this.getColumnForFullWidth(t);
		if (!(!t || !n)) return {
			rowGui: t,
			column: n
		};
	}
	findFullWidthRowGui(e) {
		return this.allRowGuis.find((t) => t.element.contains(e));
	}
	getColumnForFullWidth(e) {
		let { visibleCols: t } = this.beans;
		switch (e?.containerType) {
			case "center": return t.centerCols[0];
			case "left": return t.leftCols[0];
			case "right": return t.rightCols[0];
			default: return t.allCols[0];
		}
	}
	onRowMouseDown(e) {
		if (this.lastMouseDownOnDragger = qe(e.target, "ag-row-drag", 3), !this.isFullWidth() || this.isSuppressMouseEvent(e)) return;
		let { rangeSvc: t, focusSvc: n } = this.beans;
		t?.removeAllCellRanges();
		let r = this.findFullWidthInfoForEvent(e);
		if (!r) return;
		let { rowGui: i, column: a } = r, o = i.element, s = e.target, c = this.rowNode, l = e.defaultPrevented || oa();
		o && o.contains(s) && We(s) && (l = !1), n.setFocusedCell({
			rowIndex: c.rowIndex,
			column: a,
			rowPinned: c.rowPinned,
			forceBrowserFocus: l
		});
	}
	isSuppressMouseEvent(e) {
		let { gos: t, rowNode: n } = this;
		if (this.isFullWidth()) return ss(t, this.findFullWidthRowGui(e.target)?.rowComp.getFullWidthCellRendererParams(), n, e);
		let r = ds(t, e.target);
		return r != null && os(t, r.column, n, e);
	}
	onRowClick(e) {
		if (Aa(e) || this.lastMouseDownOnDragger) return;
		let t = this.isSuppressMouseEvent(e), { eventSvc: n, selectionSvc: r } = this.beans, i = this.createRowEventWithSource("rowClicked", e);
		i.isEventHandlingSuppressed = t, n.dispatchEvent(i), !t && r?.handleSelectionEvent(e, this.rowNode, "rowClicked");
	}
	setupDetailRowAutoHeight(e) {
		this.rowType === "FullWidthDetail" && this.beans.masterDetailSvc?.setupDetailRowAutoHeight(this, e);
	}
	createFullWidthCompDetails(e, t) {
		let { gos: n, rowNode: r } = this, i = K(n, {
			fullWidth: !0,
			data: r.data,
			node: r,
			value: r.key,
			valueFormatted: r.key,
			eGridCell: e,
			eParentOfValue: e,
			pinned: t,
			addRenderedRowListener: this.addEventListener.bind(this),
			registerRowDragger: (e, t, n, r) => this.addFullWidthRowDragging(e, t, n, r),
			setTooltip: (e, t) => {
				n.assertModuleRegistered("Tooltip", 3), this.setupFullWidthRowTooltip(e, t);
			}
		}), a = this.beans.userCompFactory;
		switch (this.rowType) {
			case "FullWidthDetail": return Ui(a, i);
			case "FullWidthGroup": {
				let { value: e, valueFormatted: t } = this.beans.valueSvc.getValueForDisplay({
					node: this.rowNode,
					includeValueFormatted: !0,
					from: "edit"
				});
				return i.value = e, i.valueFormatted = t, Hi(a, i);
			}
			case "FullWidthLoading": return Vi(a, i);
			default: return Bi(a, i);
		}
	}
	setupFullWidthRowTooltip(e, t) {
		this.fullWidthGui && (this.tooltipFeature = this.beans.tooltipSvc?.setupFullWidthRowTooltip(this.tooltipFeature, this, e, t));
	}
	addFullWidthRowDragging(e, t, n = "", r) {
		let { rowDragSvc: i, context: a } = this.beans;
		if (!i || !this.isFullWidth()) return;
		let o = i.createRowDragComp(() => n, this.rowNode, void 0, e, t, r);
		this.createBean(o, a), this.addDestroyFunc(() => {
			this.destroyBean(o, a);
		});
	}
	onUiLevelChanged() {
		let e = Qp(this.rowNode);
		if (this.rowLevel != e) {
			let t = "ag-row-level-" + e, n = "ag-row-level-" + this.rowLevel;
			for (let e of this.allRowGuis) e.rowComp.toggleCss(t, !0), e.rowComp.toggleCss(n, !1);
		}
		this.rowLevel = e;
	}
	isFirstRowOnPage() {
		return this.rowNode.rowIndex === this.beans.pageBounds.getFirstRow();
	}
	isLastRowOnPage() {
		return this.rowNode.rowIndex === this.beans.pageBounds.getLastRow();
	}
	refreshFirstAndLastRowStyles() {
		let e = this.isFirstRowOnPage(), t = this.isLastRowOnPage();
		if (this.firstRowOnPage !== e) {
			this.firstRowOnPage = e;
			for (let t of this.allRowGuis) t.rowComp.toggleCss("ag-row-first", e);
		}
		if (this.lastRowOnPage !== t) {
			this.lastRowOnPage = t;
			for (let e of this.allRowGuis) e.rowComp.toggleCss("ag-row-last", t);
		}
	}
	getAllCellCtrls() {
		return this.leftCellCtrls.list.length === 0 && this.rightCellCtrls.list.length === 0 ? this.centerCellCtrls.list : [
			...this.centerCellCtrls.list,
			...this.leftCellCtrls.list,
			...this.rightCellCtrls.list
		];
	}
	postProcessClassesFromGridOptions() {
		let e = [];
		if (this.beans.rowStyleSvc?.processClassesFromGridOptions(e, this.rowNode), e.length) for (let t of e) for (let e of this.allRowGuis) e.rowComp.toggleCss(t, !0);
	}
	postProcessRowClassRules() {
		this.beans.rowStyleSvc?.processRowClassRules(this.rowNode, (e) => {
			for (let t of this.allRowGuis) t.rowComp.toggleCss(e, !0);
		}, (e) => {
			for (let t of this.allRowGuis) t.rowComp.toggleCss(e, !1);
		});
	}
	setStylesFromGridOptions(e, t) {
		e && (this.rowStyles = this.processStylesFromGridOptions()), this.forEachGui(t, (e) => e.rowComp.setUserStyles(this.rowStyles));
	}
	getPinnedForContainer(e) {
		return e === "left" || e === "right" ? e : null;
	}
	getInitialRowClasses(e) {
		let t = this.getPinnedForContainer(e), n = this.isFullWidth(), { rowNode: r, beans: i } = this, a = [];
		a.push("ag-row"), a.push(this.rowFocused ? "ag-row-focus" : "ag-row-no-focus"), this.fadeInAnimation[e] && a.push("ag-opacity-zero"), a.push(r.rowIndex % 2 == 0 ? "ag-row-even" : "ag-row-odd"), r.isRowPinned() && (a.push("ag-row-pinned"), i.pinnedRowModel?.isManual() && a.push("ag-row-pinned-manual")), !r.isRowPinned() && r.pinnedSibling && a.push("ag-row-pinned-source"), r.isSelected() && a.push("ag-row-selected"), r.footer && a.push("ag-row-footer"), a.push("ag-row-level-" + this.rowLevel), r.stub && a.push("ag-row-loading"), n && a.push("ag-full-width-row"), i.expansionSvc?.addExpandedCss(a, r), r.dragging && a.push("ag-row-dragging");
		let { rowStyleSvc: o } = i;
		return o && (o.processClassesFromGridOptions(a, r), o.preProcessRowClassRules(a, r)), a.push(this.printLayout ? "ag-row-position-relative" : "ag-row-position-absolute"), this.isFirstRowOnPage() && a.push("ag-row-first"), this.isLastRowOnPage() && a.push("ag-row-last"), n && (t === "left" && a.push("ag-cell-last-left-pinned"), t === "right" && a.push("ag-cell-first-right-pinned")), a;
	}
	processStylesFromGridOptions() {
		return this.beans.rowStyleSvc?.processStylesFromGridOptions(this.rowNode) ?? this.emptyStyle;
	}
	onRowSelected(e) {
		this.beans.selectionSvc?.onRowCtrlSelected(this, (e) => {
			(e === this.centerGui || e === this.fullWidthGui) && this.announceDescription();
		}, e);
	}
	announceDescription() {
		this.beans.selectionSvc?.announceAriaRowSelection(this.rowNode);
	}
	addHoverFunctionality(e) {
		if (!this.active) return;
		let { element: t, compBean: n } = e, { rowNode: r, beans: i, gos: a } = this;
		n.addManagedListeners(t, {
			pointerenter: (e) => {
				e.pointerType === "mouse" && r.dispatchRowEvent("mouseEnter");
			},
			pointerleave: (e) => {
				e.pointerType === "mouse" && r.dispatchRowEvent("mouseLeave");
			}
		}), n.addManagedListeners(r, {
			mouseEnter: () => {
				!i.dragSvc?.dragging && !a.get("suppressRowHoverHighlight") && (t.classList.add("ag-row-hover"), r.setHovered(!0));
			},
			mouseLeave: () => {
				this.resetHoveredStatus(t);
			}
		});
	}
	resetHoveredStatus(e) {
		let t = e ? [e] : this.allRowGuis.map((e) => e.element);
		for (let e of t) e.classList.remove("ag-row-hover");
		this.rowNode.setHovered(!1);
	}
	roundRowTopToBounds(e) {
		let t = this.beans.ctrlsSvc.getScrollFeature().getApproximateVScollPosition(), n = this.applyPaginationOffset(t.top, !0) - 100, r = this.applyPaginationOffset(t.bottom, !0) + 100;
		return Math.min(Math.max(n, e), r);
	}
	forEachGui(e, t) {
		if (e) t(e);
		else for (let e of this.allRowGuis) t(e);
	}
	isRowRendered() {
		return this.allRowGuis.length > 0;
	}
	onRowHeightChanged(e) {
		if (this.rowNode.rowHeight == null) return;
		let t = this.rowNode.rowHeight, n = this.beans.environment.getDefaultRowHeight(), r = Kn(this.gos) ? Yn(this.beans, this.rowNode).height : void 0, i = r ? `${Math.min(n, r) - 2}px` : void 0;
		this.forEachGui(e, (e) => {
			e.element.style.height = `${t}px`, i && e.element.style.setProperty("--ag-line-height", i);
		});
	}
	destroyFirstPass(e = !1) {
		this.active = !1;
		let { rowNode: t } = this;
		if (!e && tr(this.gos) && !t.sticky) if (t.rowTop != null) {
			let e = this.roundRowTopToBounds(t.rowTop);
			this.setRowTop(e);
		} else for (let e of this.allRowGuis) e.rowComp.toggleCss("ag-opacity-zero", !0);
		this.fullWidthGui?.element.contains(z(this.beans)) && this.beans.focusSvc.attemptToRecoverFocus(), t.setHovered(!1);
		let n = this.createRowEvent("virtualRowRemoved");
		this.dispatchLocalEvent(n), this.beans.eventSvc.dispatchEvent(n), super.destroy();
	}
	destroySecondPass() {
		this.allRowGuis.length = 0;
		let e = (e) => {
			for (let t of e.list) t.destroy();
			return {
				list: [],
				map: {}
			};
		};
		this.centerCellCtrls = e(this.centerCellCtrls), this.leftCellCtrls = e(this.leftCellCtrls), this.rightCellCtrls = e(this.rightCellCtrls);
	}
	setFocusedClasses(e) {
		this.forEachGui(e, (e) => {
			e.rowComp.toggleCss("ag-row-focus", this.rowFocused), e.rowComp.toggleCss("ag-row-no-focus", !this.rowFocused);
		});
	}
	onCellFocusChanged() {
		let { focusSvc: e } = this.beans, t = e.isRowFocused(this.rowNode.rowIndex, this.rowNode.rowPinned);
		t !== this.rowFocused && (this.rowFocused = t, this.setFocusedClasses());
	}
	onPaginationChanged() {
		let e = this.beans.pagination?.getCurrentPage() ?? 0;
		this.paginationPage !== e && (this.paginationPage = e, this.onTopChanged()), this.refreshFirstAndLastRowStyles();
	}
	onTopChanged() {
		this.setRowTop(this.rowNode.rowTop);
	}
	onPaginationPixelOffsetChanged() {
		this.onTopChanged();
	}
	applyPaginationOffset(e, t = !1) {
		return this.rowNode.isRowPinned() || this.rowNode.sticky ? e : e + this.beans.pageBounds.getPixelOffset() * (t ? 1 : -1);
	}
	setRowTop(e) {
		if (!this.printLayout && I(e)) {
			let t = this.applyPaginationOffset(e), n = `${this.rowNode.isRowPinned() || this.rowNode.sticky ? t : this.beans.rowContainerHeight.getRealPixelPosition(t)}px`;
			this.setRowTopStyle(n);
		}
	}
	getInitialRowTop(e) {
		return this.suppressRowTransform ? this.getInitialRowTopShared(e) : void 0;
	}
	getInitialTransform(e) {
		return this.suppressRowTransform ? void 0 : `translateY(${this.getInitialRowTopShared(e)})`;
	}
	getInitialRowTopShared(e) {
		if (this.printLayout) return "";
		let t = this.rowNode, n;
		if (t.sticky) n = t.stickyRowTop;
		else {
			let r = this.slideInAnimation[e] ? this.roundRowTopToBounds(t.oldRowTop) : t.rowTop, i = this.applyPaginationOffset(r);
			n = t.isRowPinned() ? i : this.beans.rowContainerHeight.getRealPixelPosition(i);
		}
		return n + "px";
	}
	setRowTopStyle(e) {
		for (let t of this.allRowGuis) this.suppressRowTransform ? t.rowComp.setTop(e) : t.rowComp.setTransform(`translateY(${e})`);
	}
	getCellCtrl(e, t = !1) {
		let n = null;
		for (let t of this.getAllCellCtrls()) t.column == e && (n = t);
		if (n != null || t) return n;
		for (let t of this.getAllCellCtrls()) t?.getColSpanningList().indexOf(e) >= 0 && (n = t);
		return n;
	}
	onRowIndexChanged() {
		this.rowNode.rowIndex != null && (this.onCellFocusChanged(), this.updateRowIndexes(), this.postProcessCss());
	}
	updateRowIndexes(e) {
		let t = this.rowNode.getRowIndexString();
		if (t === null) return;
		let n = (this.beans.ctrlsSvc.getHeaderRowContainerCtrl()?.getRowCount() ?? 0) + (this.beans.filterManager?.getHeaderRowCount() ?? 0), r = this.rowNode.rowIndex % 2 == 0, i = this.ariaRowIndex = n + this.rowNode.rowIndex + 1;
		this.forEachGui(e, (e) => {
			e.rowComp.setRowIndex(t), e.rowComp.toggleCss("ag-row-even", r), e.rowComp.toggleCss("ag-row-odd", !r), Fe(e.element, i);
		});
	}
}, tm = class extends H {
	constructor() {
		super(), this.beanName = "navigation", this.onPageDown = Ht(this.onPageDown, 100), this.onPageUp = Ht(this.onPageUp, 100);
	}
	postConstruct() {
		this.beans.ctrlsSvc.whenReady(this, (e) => {
			this.gridBodyCon = e.gridBodyCtrl;
		});
	}
	handlePageScrollingKey(e, t = !1) {
		let n = e.key, r = e.altKey, i = e.ctrlKey || e.metaKey, a = !!this.beans.rangeSvc && e.shiftKey, o = Nc(this.gos, e), s = !1;
		switch (n) {
			case Y.PAGE_HOME:
			case Y.PAGE_END:
				!i && !r && (this.onHomeOrEndKey(n), s = !0);
				break;
			case Y.LEFT:
			case Y.RIGHT:
			case Y.UP:
			case Y.DOWN:
				if (!o) return !1;
				i && !r && !a && (this.onCtrlUpDownLeftRight(n, o), s = !0);
				break;
			case Y.PAGE_DOWN:
			case Y.PAGE_UP:
				!i && !r && (s = this.handlePageUpDown(n, o, t));
				break;
		}
		return s && e.preventDefault(), s;
	}
	handlePageUpDown(e, t, n) {
		return n && (t = this.beans.focusSvc.getFocusedCell()), t ? (e === Y.PAGE_UP ? this.onPageUp(t) : this.onPageDown(t), !0) : !1;
	}
	navigateTo({ scrollIndex: e, scrollType: t, scrollColumn: n, focusIndex: r, focusColumn: i, isAsync: a, rowPinned: o }) {
		let { scrollFeature: s } = this.gridBodyCon;
		I(n) && !n.isPinned() && s.ensureColumnVisible(n), I(e) && s.ensureIndexVisible(e, t), a || s.ensureIndexVisible(r);
		let { focusSvc: c } = this.beans;
		c.setFocusedCell({
			rowIndex: r,
			column: i,
			rowPinned: o,
			forceBrowserFocus: !0
		}), this.setRangeToCellIfSupported({
			rowIndex: r,
			rowPinned: o,
			column: i
		});
	}
	onPageDown(e) {
		let t = this.beans, n = nm(t), r = this.getViewportHeight(), { pageBounds: i, rowModel: a, rowAutoHeight: o } = t, s = i.getPixelOffset(), c = n.top + r, l = a.getRowIndexAtPixel(c + s);
		o?.active ? this.navigateToNextPageWithAutoHeight(e, l) : this.navigateToNextPage(e, l);
	}
	onPageUp(e) {
		let t = this.beans, n = nm(t), { pageBounds: r, rowModel: i, rowAutoHeight: a } = t, o = r.getPixelOffset(), s = n.top, c = i.getRowIndexAtPixel(s + o);
		a?.active ? this.navigateToNextPageWithAutoHeight(e, c, !0) : this.navigateToNextPage(e, c, !0);
	}
	navigateToNextPage(e, t, n = !1) {
		let { pageBounds: r, rowModel: i } = this.beans, a = this.getViewportHeight(), o = r.getFirstRow(), s = r.getLastRow(), c = r.getPixelOffset(), l = i.getRow(e.rowIndex), u = n ? l?.rowHeight - a - c : a - c, d = l?.rowTop + u, f = i.getRowIndexAtPixel(d + c);
		if (f === e.rowIndex) {
			let r = n ? -1 : 1;
			t = f = e.rowIndex + r;
		}
		let p;
		n ? (p = "bottom", f < o && (f = o), t < o && (t = o)) : (p = "top", f > s && (f = s), t > s && (t = s)), this.isRowTallerThanView(i.getRow(f)) && (t = f, p = "top"), this.navigateTo({
			scrollIndex: t,
			scrollType: p,
			scrollColumn: null,
			focusIndex: f,
			focusColumn: e.column
		});
	}
	navigateToNextPageWithAutoHeight(e, t, n = !1) {
		this.navigateTo({
			scrollIndex: t,
			scrollType: n ? "bottom" : "top",
			scrollColumn: null,
			focusIndex: t,
			focusColumn: e.column
		}), setTimeout(() => {
			let r = this.getNextFocusIndexForAutoHeight(e, n);
			this.navigateTo({
				scrollIndex: t,
				scrollType: n ? "bottom" : "top",
				scrollColumn: null,
				focusIndex: r,
				focusColumn: e.column,
				isAsync: !0
			});
		}, 50);
	}
	getNextFocusIndexForAutoHeight(e, t = !1) {
		let n = t ? -1 : 1, r = this.getViewportHeight(), { pageBounds: i, rowModel: a } = this.beans, o = i.getLastRow(), s = 0, c = e.rowIndex;
		for (; c >= 0 && c <= o;) {
			let e = a.getRow(c);
			if (e) {
				let t = e.rowHeight ?? 0;
				if (s + t > r) break;
				s += t;
			}
			c += n;
		}
		return Math.max(0, Math.min(c, o));
	}
	getViewportHeight() {
		let e = this.beans, t = nm(e), n = this.beans.scrollVisibleSvc.getScrollbarWidth(), r = t.bottom - t.top;
		return e.ctrlsSvc.get("center").isHorizontalScrollShowing() && (r -= n), r;
	}
	isRowTallerThanView(e) {
		if (!e) return !1;
		let t = e.rowHeight;
		return typeof t == "number" ? t > this.getViewportHeight() : !1;
	}
	onCtrlUpDownLeftRight(e, t) {
		let n = this.beans.cellNavigation.getNextCellToFocus(e, t, !0);
		if (!n) return;
		let { rowIndex: r, rowPinned: i, column: a } = this.getNormalisedPosition(n) ?? n, o = a;
		this.navigateTo({
			scrollIndex: r,
			scrollType: null,
			scrollColumn: o,
			focusIndex: r,
			focusColumn: o,
			rowPinned: i
		});
	}
	onHomeOrEndKey(e) {
		let t = e === Y.PAGE_HOME, { visibleCols: n, pageBounds: r, rowModel: i } = this.beans, a = n.allCols, o = t ? r.getFirstRow() : r.getLastRow(), s = i.getRow(o);
		if (!s) return;
		let c = (t ? a : [...a].reverse()).find((e) => !e.isSuppressNavigable(s) && !ai(e));
		c && this.navigateTo({
			scrollIndex: o,
			scrollType: null,
			scrollColumn: c,
			focusIndex: o,
			focusColumn: c
		});
	}
	onTabKeyDown(e, t) {
		let n = t.shiftKey, r = this.tabToNextCellCommon(e, n, t), i = this.beans, { ctrlsSvc: a, pageBounds: o, focusSvc: s, gos: c } = i;
		if (r !== !1) {
			r ? t.preventDefault() : r === null && a.get("gridCtrl").allowFocusForNextCoreContainer(n);
			return;
		}
		if (n) {
			let { rowIndex: n, rowPinned: r } = e.getRowPosition();
			(r ? n === 0 : n === o.getFirstRow()) && (c.get("headerHeight") === 0 || no(i) ? io(i, !0, !0) : (t.preventDefault(), s.focusPreviousFromFirstCell(t)));
		} else e instanceof Zp && e.focusCell(!0), (s.focusOverlay(!1) || io(i, n)) && t.preventDefault();
	}
	tabToNextCell(e, t) {
		let n = this.beans, { focusSvc: r, rowRenderer: i } = n, a = r.getFocusedCell();
		if (!a) return !1;
		let o = Xa(n, a);
		return !o && (o = i.getRowByPosition(a), !o?.isFullWidth()) ? !1 : !!this.tabToNextCellCommon(o, e, t, "api");
	}
	tabToNextCellCommon(e, t, n, r = "ui") {
		let { editSvc: i, focusSvc: a } = this.beans, o, s = e instanceof Zp ? e : e.getAllCellCtrls()?.[0];
		return o = i?.isEditing() ? i?.moveToNextCell(s, t, n, r) : this.moveToNextCellNotEditing(e, t, n), o === null ? o : o || !!a.focusedHeader;
	}
	moveToNextCellNotEditing(e, t, n) {
		let r = this.beans.visibleCols.allCols, i;
		if (e instanceof em) {
			if (i = {
				...e.getRowPosition(),
				column: t ? r[0] : M(r)
			}, this.gos.get("embedFullWidthRows") && n) {
				let t = e.findFullWidthInfoForEvent(n);
				t && (i.column = t.column);
			}
		} else i = e.getFocusedCellPosition();
		let a = this.findNextCellToFocusOn(i, {
			backwards: t,
			startEditing: !1
		});
		if (a === !1) return null;
		if (a instanceof Zp) a.focusCell(!0);
		else if (a) return this.tryToFocusFullWidthRow(a, t);
		return I(a);
	}
	findNextCellToFocusOn(e, { backwards: t, startEditing: n, skipToNextEditableCell: r }) {
		let i = e, a = this.beans, { cellNavigation: o, gos: s, focusSvc: c, rowRenderer: l } = a;
		for (;;) {
			e !== i && (e = i), t || (i = this.getLastCellOfColSpan(i)), i = o.getNextTabbedCell(i, t);
			let u = s.getCallback("tabToNextCell");
			if (I(u)) {
				let r = u({
					backwards: t,
					editing: n,
					previousCellPosition: e,
					nextCellPosition: i || null
				});
				if (r === !0) i = e;
				else if (r === !1) return !1;
				else i = {
					rowIndex: r.rowIndex,
					column: r.column,
					rowPinned: r.rowPinned
				};
			}
			if (!i) return null;
			if (i.rowIndex < 0) {
				let e = co(a);
				return c.focusHeaderPosition({
					headerPosition: {
						headerRowIndex: e + i.rowIndex,
						column: i.column
					},
					fromCell: !0
				}), null;
			}
			let d = s.get("editType") === "fullRow";
			if (n && (!d || r) && !this.isCellEditable(i)) continue;
			this.ensureCellVisible(i);
			let f = Xa(a, i);
			if (!f) {
				let e = l.getRowByPosition(i);
				if (!e || !e.isFullWidth() || n) continue;
				return {
					...e.getRowPosition(),
					column: i?.column
				};
			}
			if (!o.isSuppressNavigable(f.column, f.rowNode)) return f.setFocusedCellPosition(i), this.setRangeToCellIfSupported(i), f;
		}
	}
	isCellEditable(e) {
		let t = this.lookupRowNodeForCell(e);
		return t ? e.column.isCellEditable(t) : !1;
	}
	lookupRowNodeForCell({ rowIndex: e, rowPinned: t }) {
		let { pinnedRowModel: n, rowModel: r } = this.beans;
		return t === "top" ? n?.getPinnedTopRow(e) : t === "bottom" ? n?.getPinnedBottomRow(e) : r.getRow(e);
	}
	navigateToNextCell(e, t, n, r) {
		let i = n, a = !1, o = this.beans, { cellNavigation: s, focusSvc: c, gos: l } = o;
		for (; i && (i === n || !this.isValidNavigateCell(i));) l.get("enableRtl") ? t === Y.LEFT && (i = this.getLastCellOfColSpan(i)) : t === Y.RIGHT && (i = this.getLastCellOfColSpan(i)), i = s.getNextCellToFocus(t, i), a = L(i);
		if (a && e && e.key === Y.UP && (i = {
			rowIndex: -1,
			rowPinned: null,
			column: n.column
		}), r) {
			let r = l.getCallback("navigateToNextCell");
			if (I(r)) {
				let a = r({
					key: t,
					previousCellPosition: n,
					nextCellPosition: i || null,
					event: e
				});
				i = I(a) ? {
					rowPinned: a.rowPinned,
					rowIndex: a.rowIndex,
					column: a.column
				} : null;
			}
		}
		if (!i) return;
		if (i.rowIndex < 0) {
			let t = co(o);
			c.focusHeaderPosition({
				headerPosition: {
					headerRowIndex: t + i.rowIndex,
					column: i.column ?? n.column
				},
				event: e || void 0,
				fromCell: !0
			});
			return;
		}
		let u = this.getNormalisedPosition(i);
		u ? this.focusPosition(u) : this.tryToFocusFullWidthRow(i);
	}
	getNormalisedPosition(e) {
		if (this.beans.spannedRowRenderer?.getCellByPosition(e)) return e;
		this.ensureCellVisible(e);
		let t = Xa(this.beans, e);
		return t ? (e = t.getFocusedCellPosition(), this.ensureCellVisible(e), e) : null;
	}
	tryToFocusFullWidthRow(e, t) {
		let { visibleCols: n, rowRenderer: r, focusSvc: i, eventSvc: a } = this.beans, o = n.allCols;
		if (!r.getRowByPosition(e)?.isFullWidth()) return !1;
		let s = i.getFocusedCell(), c = {
			rowIndex: e.rowIndex,
			rowPinned: e.rowPinned,
			column: e.column || (t ? M(o) : o[0])
		};
		this.focusPosition(c);
		let l = t ?? (s != null && Ka(c, s));
		return a.dispatchEvent({
			type: "fullWidthRowFocused",
			rowIndex: c.rowIndex,
			rowPinned: c.rowPinned,
			column: c.column,
			isFullWidthCell: !0,
			fromBelow: l
		}), !0;
	}
	focusPosition(e) {
		let { focusSvc: t } = this.beans;
		t.setFocusedCell({
			rowIndex: e.rowIndex,
			column: e.column,
			rowPinned: e.rowPinned,
			forceBrowserFocus: !0
		}), this.setRangeToCellIfSupported(e);
	}
	setRangeToCellIfSupported(e) {
		ai(e.column) || this.beans.rangeSvc?.setRangeToCell(e);
	}
	isValidNavigateCell(e) {
		return !!Ya(this.beans, e);
	}
	getLastCellOfColSpan(e) {
		let t = Xa(this.beans, e);
		if (!t) return e;
		let n = t.getColSpanningList();
		return n.length === 1 ? e : {
			rowIndex: e.rowIndex,
			column: M(n),
			rowPinned: e.rowPinned
		};
	}
	ensureCellVisible(e) {
		let t = nr(this.gos), n = this.beans.rowModel.getRow(e.rowIndex), r = t && n?.sticky, { scrollFeature: i } = this.gridBodyCon;
		!r && L(e.rowPinned) && i.ensureIndexVisible(e.rowIndex), e.column.isPinned() || i.ensureColumnVisible(e.column);
	}
	ensureColumnVisible(e) {
		let t = this.gridBodyCon.scrollFeature;
		e.isPinned() || t.ensureColumnVisible(e);
	}
	ensureRowVisible(e) {
		this.gridBodyCon.scrollFeature.ensureIndexVisible(e);
	}
};
function nm(e) {
	return e.ctrlsSvc.getScrollFeature().getVScrollPosition();
}
var rm = {
	moduleName: "KeyboardNavigation",
	version: U,
	beans: [
		tm,
		fp,
		Lf
	],
	apiFunctions: {
		getFocusedCell: pp,
		clearFocusedCell: mp,
		setFocusedCell: hp,
		setFocusedHeader: vp,
		tabToNextCell: gp,
		tabToPreviousCell: _p
	}
}, im = class extends H {
	constructor() {
		super(...arguments), this.beanName = "pageBoundsListener";
	}
	postConstruct() {
		this.addManagedEventListeners({
			modelUpdated: this.onModelUpdated.bind(this),
			recalculateRowBounds: this.calculatePages.bind(this)
		}), this.onModelUpdated();
	}
	onModelUpdated(e) {
		this.calculatePages(), this.eventSvc.dispatchEvent({
			type: "paginationChanged",
			animate: e?.animate ?? !1,
			newData: e?.newData ?? !1,
			newPage: e?.newPage ?? !1,
			newPageSize: e?.newPageSize ?? !1,
			keepRenderedRows: e?.keepRenderedRows ?? !1
		});
	}
	calculatePages() {
		let { pageBounds: e, pagination: t, rowModel: n } = this.beans;
		t ? t.calculatePages() : e.calculateBounds(0, n.getRowCount() - 1);
	}
}, am = class extends H {
	constructor() {
		super(...arguments), this.beanName = "pageBounds", this.pixelOffset = 0;
	}
	getFirstRow() {
		return this.topRowBounds?.rowIndex ?? -1;
	}
	getLastRow() {
		return this.bottomRowBounds?.rowIndex ?? -1;
	}
	getCurrentPageHeight() {
		let { topRowBounds: e, bottomRowBounds: t } = this;
		return !e || !t ? 0 : Math.max(t.rowTop + t.rowHeight - e.rowTop, 0);
	}
	getCurrentPagePixelRange() {
		let { topRowBounds: e, bottomRowBounds: t } = this;
		return {
			pageFirstPixel: e?.rowTop ?? 0,
			pageLastPixel: t ? t.rowTop + t.rowHeight : 0
		};
	}
	calculateBounds(e, t) {
		let { rowModel: n } = this.beans, r = n.getRowBounds(e);
		r && (r.rowIndex = e), this.topRowBounds = r;
		let i = n.getRowBounds(t);
		i && (i.rowIndex = t), this.bottomRowBounds = i, this.calculatePixelOffset();
	}
	getPixelOffset() {
		return this.pixelOffset;
	}
	calculatePixelOffset() {
		let e = this.topRowBounds?.rowTop ?? 0;
		this.pixelOffset !== e && (this.pixelOffset = e, this.eventSvc.dispatchEvent({ type: "paginationPixelOffsetChanged" }));
	}
}, om = ".ag-pinned-left-floating-bottom,.ag-pinned-left-floating-top,.ag-pinned-right-floating-bottom,.ag-pinned-right-floating-top{min-width:0;overflow:hidden;position:relative}.ag-pinned-left-sticky-top,.ag-pinned-right-sticky-top{height:100%;overflow:hidden;position:relative}.ag-sticky-bottom-full-width-container,.ag-sticky-top-full-width-container{height:100%;overflow:hidden;width:100%}.ag-pinned-left-header,.ag-pinned-right-header{display:inline-block;height:100%;overflow:hidden;position:relative}.ag-body-horizontal-scroll:not(.ag-scrollbar-invisible){.ag-horizontal-left-spacer:not(.ag-scroller-corner){border-right:var(--ag-pinned-column-border)}.ag-horizontal-right-spacer:not(.ag-scroller-corner){border-left:var(--ag-pinned-column-border)}}.ag-pinned-right-header{border-left:var(--ag-pinned-column-border)}.ag-pinned-left-header{border-right:var(--ag-pinned-column-border)}.ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left,.ag-cell-range-single-cell,.ag-cell-focus:not(.ag-cell-range-selected):focus-within){border-left:var(--ag-pinned-column-border)}.ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right,.ag-cell-range-single-cell,.ag-cell-focus:not(.ag-cell-range-selected):focus-within){border-right:var(--ag-pinned-column-border)}.ag-pinned-left-header .ag-header-cell-resize:after{left:calc(50% - var(--ag-header-column-resize-handle-width))}.ag-pinned-right-header .ag-header-cell-resize:after{left:50%}.ag-pinned-left-header .ag-header-cell-resize{right:-3px}.ag-pinned-right-header .ag-header-cell-resize{left:-3px}", sm = class extends H {
	constructor(e, t) {
		super(), this.isLeft = e, this.elements = t, this.getWidth = e ? () => this.beans.pinnedCols.leftWidth : () => this.beans.pinnedCols.rightWidth;
	}
	postConstruct() {
		this.addManagedEventListeners({ [`${this.isLeft ? "left" : "right"}PinnedWidthChanged`]: this.onPinnedWidthChanged.bind(this) });
	}
	onPinnedWidthChanged() {
		let e = this.getWidth(), t = e > 0;
		for (let n of this.elements) n && (V(n, t), ot(n, e));
	}
}, cm = {
	moduleName: "PinnedColumn",
	version: U,
	beans: [class extends H {
		constructor() {
			super(...arguments), this.beanName = "pinnedCols";
		}
		postConstruct() {
			this.beans.ctrlsSvc.whenReady(this, (e) => {
				this.gridBodyCtrl = e.gridBodyCtrl;
			});
			let e = this.checkContainerWidths.bind(this);
			this.addManagedEventListeners({
				displayedColumnsChanged: e,
				displayedColumnsWidthChanged: e
			}), this.addManagedPropertyListener("domLayout", e);
		}
		checkContainerWidths() {
			let { gos: e, visibleCols: t, eventSvc: n } = this.beans, r = G(e, "print"), i = r ? 0 : t.getColsLeftWidth(), a = r ? 0 : t.getDisplayedColumnsRightWidth();
			i != this.leftWidth && (this.leftWidth = i, n.dispatchEvent({ type: "leftPinnedWidthChanged" })), a != this.rightWidth && (this.rightWidth = a, n.dispatchEvent({ type: "rightPinnedWidthChanged" }));
		}
		keepPinnedColumnsNarrowerThanViewport() {
			let e = this.gridBodyCtrl.eBodyViewport, t = Xe(e);
			if (t <= 50) return;
			let n = this.getPinnedColumnsOverflowingViewport(t - 50), r = this.gos.getCallback("processUnpinnedColumns"), { columns: i, hasLockedPinned: a } = n, o = i;
			!o.length && !a || (r && (o = r({
				columns: o,
				viewportWidth: t
			})), o?.length && (o = o.filter((e) => !ai(e)), this.setColsPinned(o, null, "viewportSizeFeature")));
		}
		createPinnedWidthFeature(e, ...t) {
			return new sm(e, t);
		}
		setColsPinned(e, t, n) {
			let { colModel: r, colAnimation: i, visibleCols: a, gos: o } = this.beans;
			if (!r.cols || !e?.length) return;
			if (G(o, "print")) {
				W(37);
				return;
			}
			i?.start();
			let s;
			s = t === !0 || t === "left" ? "left" : t === "right" ? "right" : null;
			let c = [];
			for (let t of e) {
				if (!t) continue;
				let e = r.getCol(t);
				e && e.getPinned() !== s && (this.setColPinned(e, s), c.push(e));
			}
			c.length && (a.refresh(n), vl(this.eventSvc, c, n)), i?.finish();
		}
		initCol(e) {
			let { pinned: t, initialPinned: n } = e.colDef;
			t === void 0 ? this.setColPinned(e, n) : this.setColPinned(e, t);
		}
		setColPinned(e, t) {
			t === !0 || t === "left" ? e.pinned = "left" : t === "right" ? e.pinned = "right" : e.pinned = null, e.dispatchStateUpdatedEvent("pinned");
		}
		setupHeaderPinnedWidth(e) {
			let { scrollVisibleSvc: t } = this.beans;
			if (e.pinned == null) return;
			let n = e.pinned === "left", r = e.pinned === "right";
			e.hidden = !0;
			let i = () => {
				let i = n ? this.leftWidth : this.rightWidth;
				if (i == null) return;
				let a = i == 0, o = e.hidden !== a, s = this.gos.get("enableRtl"), c = t.getScrollbarWidth(), l = t.verticalScrollShowing && (s && n || !s && r) ? i + c : i;
				e.comp.setPinnedContainerWidth(`${l}px`), e.comp.setDisplayed(!a), o && (e.hidden = a, e.refresh());
			};
			e.addManagedEventListeners({
				leftPinnedWidthChanged: i,
				rightPinnedWidthChanged: i,
				scrollVisibilityChanged: i,
				scrollbarWidthChanged: i
			});
		}
		getHeaderResizeDiff(e, t) {
			if (t.getPinned()) {
				let { leftWidth: t, rightWidth: n } = this, r = Xe(this.beans.ctrlsSvc.getGridBodyCtrl().eBodyViewport) - 50;
				if (t + n + e > r) if (r > t + n) e = r - t - n;
				else return 0;
			}
			return e;
		}
		getPinnedColumnsOverflowingViewport(e) {
			let t = (this.rightWidth ?? 0) + (this.leftWidth ?? 0), n = !1;
			if (t < e) return {
				columns: [],
				hasLockedPinned: n
			};
			let { visibleCols: r } = this.beans, i = [...r.leftCols], a = [...r.rightCols], o = 0, s = 0, c = [], l = t - 0 - e;
			for (; (s < i.length || o < a.length) && l > 0;) {
				if (o < a.length) {
					let e = a[o++];
					if (e.colDef.lockPinned) {
						n = !0;
						continue;
					}
					l -= e.getActualWidth(), c.push(e);
				}
				if (s < i.length && l > 0) {
					let e = i[s++];
					if (e.colDef.lockPinned) {
						n = !0;
						continue;
					}
					l -= e.getActualWidth(), c.push(e);
				}
			}
			return {
				columns: c,
				hasLockedPinned: n
			};
		}
	}],
	css: [om]
}, lm = class extends Nt {
	constructor() {
		super(), this.beanName = "ariaAnnounce", this.descriptionContainer = null, this.pendingAnnouncements = /* @__PURE__ */ new Map(), this.lastAnnouncement = "", this.updateAnnouncement = Vt(this, this.updateAnnouncement.bind(this), 200);
	}
	postConstruct() {
		let e = this.beans, t = this.descriptionContainer = B(e).createElement("div");
		t.classList.add("ag-aria-description-container"), Oe(t, "polite"), Ae(t, "additions text"), ke(t, !0), e.eRootDiv.appendChild(t);
	}
	announceValue(e, t) {
		this.pendingAnnouncements.set(t, e), this.updateAnnouncement();
	}
	updateAnnouncement() {
		if (!this.descriptionContainer) return;
		let e = Array.from(this.pendingAnnouncements.values()).join(". ");
		this.pendingAnnouncements.clear(), this.descriptionContainer.textContent = "", setTimeout(() => {
			this.handleAnnouncementUpdate(e);
		}, 50);
	}
	handleAnnouncementUpdate(e) {
		if (!this.isAlive() || !this.descriptionContainer) return;
		let t = e;
		if (t == null || t.replace(/[ .]/g, "") == "") {
			this.lastAnnouncement = "";
			return;
		}
		this.lastAnnouncement === t && (t = `${t}\u200B`), this.lastAnnouncement = t, this.descriptionContainer.textContent = t;
	}
	destroy() {
		super.destroy();
		let { descriptionContainer: e } = this;
		e && (et(e), e.remove()), this.descriptionContainer = null, this.pendingAnnouncements.clear();
	}
}, um = {
	moduleName: "Aria",
	version: U,
	beans: [class extends lm {}]
}, dm = ":where(.ag-delay-render){.ag-cell,.ag-header-cell,.ag-header-group-cell,.ag-row,.ag-spanned-cell-wrapper{visibility:hidden}}", fm = "ag-delay-render", pm = {
	moduleName: "ColumnDelayRender",
	version: U,
	beans: [class extends H {
		constructor() {
			super(...arguments), this.beanName = "colDelayRenderSvc", this.hideRequested = !1, this.alreadyRevealed = !1, this.timesRetried = 0, this.requesters = /* @__PURE__ */ new Set();
		}
		hideColumns(e) {
			this.alreadyRevealed || this.requesters.has(e) || (this.requesters.add(e), this.hideRequested ||= (this.beans.ctrlsSvc.whenReady(this, (e) => {
				e.gridBodyCtrl.eGridBody.classList.add(fm);
			}), !0));
		}
		revealColumns(e) {
			if (this.alreadyRevealed || !this.isAlive() || (this.requesters.delete(e), this.requesters.size > 0)) return;
			let { renderStatus: t, ctrlsSvc: n } = this.beans;
			if (t) {
				if (!t.areHeaderCellsRendered() && this.timesRetried < 5) {
					this.timesRetried++, setTimeout(() => this.revealColumns(e));
					return;
				}
				this.timesRetried = 0;
			}
			n.getGridBodyCtrl().eGridBody.classList.remove(fm), this.alreadyRevealed = !0;
		}
	}],
	css: [dm]
}, mm = class extends Qi {
	constructor() {
		super();
	}
}, hm = {
	tag: "div",
	cls: "ag-overlay-exporting-center",
	children: [{
		tag: "span",
		ref: "eExportingIcon",
		cls: "ag-loading-icon"
	}, {
		tag: "span",
		ref: "eExportingText",
		cls: "ag-exporting-text"
	}]
}, gm = class extends mm {
	constructor() {
		super(...arguments), this.eExportingIcon = null, this.eExportingText = null;
	}
	init(e) {
		let { beans: t } = this;
		this.setTemplate(hm);
		let n = fc("overlayExporting", t, null);
		n && this.eExportingIcon.appendChild(n);
		let r = e.exporting?.overlayText ?? this.getLocaleTextFunc()("exportingOoo", "Exporting...");
		this.eExportingText.textContent = r, t.ariaAnnounce.announceValue(r, "overlay");
	}
}, _m = {
	tag: "div",
	cls: "ag-overlay-loading-center",
	children: [{
		tag: "span",
		ref: "eLoadingIcon",
		cls: "ag-loading-icon"
	}, {
		tag: "span",
		ref: "eLoadingText",
		cls: "ag-loading-text"
	}]
}, vm = class extends mm {
	constructor() {
		super(...arguments), this.eLoadingIcon = null, this.eLoadingText = null;
	}
	init(e) {
		let { beans: t, gos: n } = this, r = F(n.get("overlayLoadingTemplate")?.trim());
		if (this.setTemplate(r ?? _m), !r) {
			let n = fc("overlayLoading", t, null);
			n && this.eLoadingIcon.appendChild(n);
			let r = e.loading?.overlayText ?? this.getLocaleTextFunc()("loadingOoo", "Loading...");
			this.eLoadingText.textContent = r, t.ariaAnnounce.announceValue(r, "overlay");
		}
	}
}, ym = {
	tag: "span",
	cls: "ag-overlay-no-matching-rows-center"
}, bm = class extends mm {
	init(e) {
		let { beans: t } = this;
		this.setTemplate(ym);
		let n = e.noMatchingRows?.overlayText ?? this.getLocaleTextFunc()("noMatchingRows", "No Matching Rows");
		this.getGui().textContent = n, t.ariaAnnounce.announceValue(n, "overlay");
	}
}, xm = {
	tag: "span",
	cls: "ag-overlay-no-rows-center"
}, Sm = class extends mm {
	init(e) {
		let { beans: t, gos: n } = this, r = F(n.get("overlayNoRowsTemplate")?.trim());
		if (this.setTemplate(r ?? xm), !r) {
			let n = e.noRows?.overlayText ?? this.getLocaleTextFunc()("noRowsToShow", "No Rows To Show");
			this.getGui().textContent = n, t.ariaAnnounce.announceValue(n, "overlay");
		}
	}
};
function Cm(e) {
	e.overlays?.showLoadingOverlay();
}
function wm(e) {
	e.overlays?.showNoRowsOverlay();
}
function Tm(e) {
	e.overlays?.hideOverlay();
}
var Em = ".ag-overlay{inset:0;pointer-events:none;position:absolute;z-index:2}.ag-overlay-panel,.ag-overlay-wrapper{display:flex;height:100%;width:100%}.ag-overlay-wrapper{align-items:center;flex:none;justify-content:center;text-align:center}.ag-overlay-exporting-wrapper,.ag-overlay-loading-wrapper,.ag-overlay-modal-wrapper{pointer-events:all}.ag-overlay-exporting-center,.ag-overlay-loading-center{background:var(--ag-background-color);border:solid var(--ag-border-width) var(--ag-border-color);border-radius:var(--ag-border-radius);box-shadow:var(--ag-popup-shadow);display:flex;padding:var(--ag-spacing)}", Dm = {
	tag: "div",
	cls: "ag-overlay",
	role: "presentation",
	children: [{
		tag: "div",
		cls: "ag-overlay-panel",
		role: "presentation",
		children: [{
			tag: "div",
			ref: "eOverlayWrapper",
			cls: "ag-overlay-wrapper",
			role: "presentation"
		}]
	}]
}, Om = class extends Qi {
	constructor() {
		super(Dm), this.eOverlayWrapper = null, this.activeOverlay = null, this.activePromise = null, this.activeCssClass = null, this.elToFocusAfter = null, this.overlayExclusive = !1, this.oldWrapperPadding = null, this.registerCSS(Em);
	}
	handleKeyDown(e) {
		if (e.key !== Y.TAB || e.defaultPrevented || Aa(e)) return;
		let { beans: t, eOverlayWrapper: n } = this;
		if (n && wa(t, n, !1, e.shiftKey)) return;
		let r = !1;
		r = e.shiftKey ? t.focusSvc.focusGridView({
			column: M(t.visibleCols.allCols),
			backwards: !0,
			canFocusOverlay: !1
		}) : io(t, !1), r && e.preventDefault();
	}
	updateLayoutClasses(e, t) {
		let n = this.eOverlayWrapper;
		if (!n) return;
		let r = n.classList, { AUTO_HEIGHT: i, NORMAL: a, PRINT: o } = zo;
		r.toggle(i, t.autoHeight), r.toggle(a, t.normal), r.toggle(o, t.print);
	}
	postConstruct() {
		this.createManagedBean(new Bo(this)), this.setDisplayed(!1, { skipAriaHidden: !0 }), this.beans.overlays.setWrapperComp(this, !1), this.addManagedElementListeners(this.getFocusableElement(), { keydown: this.handleKeyDown.bind(this) }), this.addManagedEventListeners({ gridSizeChanged: this.refreshWrapperPadding.bind(this) });
	}
	setWrapperTypeClass(e) {
		let t = this.eOverlayWrapper?.classList;
		if (!t) {
			this.activeCssClass = null;
			return;
		}
		this.activeCssClass && t.toggle(this.activeCssClass, !1), this.activeCssClass = e, t.toggle(e, !0);
	}
	showOverlay(e, t, n) {
		if (this.destroyActiveOverlay(), this.elToFocusAfter = null, this.activePromise = e, this.overlayExclusive = n, !e) return this.refreshWrapperPadding(), X.resolve();
		if (this.setWrapperTypeClass(t), this.setDisplayed(!0, { skipAriaHidden: !0 }), this.refreshWrapperPadding(), n && this.isGridFocused()) {
			let e = z(this.beans);
			e && !me(this.beans) && (this.elToFocusAfter = e);
		}
		return e.then((t) => {
			let r = this.eOverlayWrapper;
			if (!r) {
				this.destroyBean(t);
				return;
			}
			if (this.activePromise !== e) {
				this.activeOverlay !== t && (this.destroyBean(t), t = null);
				return;
			}
			this.activePromise = null, t && (this.activeOverlay !== t && (r.appendChild(t.getGui()), this.activeOverlay = t), n && this.isGridFocused() && Ca(r));
		}), e;
	}
	refreshWrapperPadding() {
		if (!this.eOverlayWrapper) {
			this.oldWrapperPadding = null;
			return;
		}
		let e = !!this.activeOverlay || !!this.activePromise, t = 0;
		e && !this.overlayExclusive && (t = this.beans.ctrlsSvc.get("gridHeaderCtrl")?.headerHeight || 0), t !== this.oldWrapperPadding && (this.oldWrapperPadding = t, this.eOverlayWrapper.style.setProperty("padding-top", `${t}px`));
	}
	destroyActiveOverlay() {
		this.activePromise = null;
		let e = this.activeOverlay;
		if (!e) {
			this.overlayExclusive = !1, this.elToFocusAfter = null, this.refreshWrapperPadding();
			return;
		}
		let t = this.elToFocusAfter;
		this.elToFocusAfter = null, this.activeOverlay = null, this.overlayExclusive = !1, t && !this.isGridFocused() && (t = null), this.destroyBean(e);
		let n = this.eOverlayWrapper;
		n && et(n), t?.focus?.({ preventScroll: !0 }), this.refreshWrapperPadding();
	}
	hideOverlay() {
		this.destroyActiveOverlay(), this.setDisplayed(!1, { skipAriaHidden: !0 });
	}
	isGridFocused() {
		let e = z(this.beans);
		return !!e && this.beans.eGridDiv.contains(e);
	}
	destroy() {
		this.elToFocusAfter = null, this.destroyActiveOverlay(), this.beans.overlays.setWrapperComp(this, !0), super.destroy(), this.eOverlayWrapper = null;
	}
}, km = {
	selector: "AG-OVERLAY-WRAPPER",
	component: Om
}, Am = ["refresh"], jm = (e) => ({
	name: e,
	optionalMethods: Am
}), Mm = {
	id: "agLoadingOverlay",
	overlayType: "loading",
	comp: jm("loadingOverlayComponent"),
	wrapperCls: "ag-overlay-loading-wrapper",
	exclusive: !0,
	compKey: "loadingOverlayComponent",
	paramsKey: "loadingOverlayComponentParams",
	isSuppressed: (e) => {
		let t = e.get("loading");
		return t === !1 || e.get("suppressLoadingOverlay") === !0 && t !== !0;
	}
}, Nm = {
	id: "agNoRowsOverlay",
	overlayType: "noRows",
	comp: jm("noRowsOverlayComponent"),
	wrapperCls: "ag-overlay-no-rows-wrapper",
	compKey: "noRowsOverlayComponent",
	paramsKey: "noRowsOverlayComponentParams",
	isSuppressed: (e) => e.get("suppressNoRowsOverlay")
}, Pm = {
	id: "agNoMatchingRowsOverlay",
	overlayType: "noMatchingRows",
	comp: jm("noMatchingRowsOverlayComponent"),
	wrapperCls: "ag-overlay-no-matching-rows-wrapper"
}, Fm = {
	id: "agExportingOverlay",
	overlayType: "exporting",
	comp: jm("exportingOverlayComponent"),
	wrapperCls: "ag-overlay-exporting-wrapper",
	exclusive: !0
}, Im = {
	id: "activeOverlay",
	comp: jm("activeOverlay"),
	wrapperCls: "ag-overlay-modal-wrapper",
	exclusive: !0
}, Lm = (e) => e ? {
	agLoadingOverlay: Mm,
	agNoRowsOverlay: Nm,
	agNoMatchingRowsOverlay: Pm,
	agExportingOverlay: Fm
}[e] ?? Im : null, Rm = (e) => e ? {
	loading: Mm,
	noRows: Nm,
	noMatchingRows: Pm,
	exporting: Fm
}[e] : null, zm = {
	moduleName: "Overlay",
	version: U,
	userComponents: {
		agLoadingOverlay: vm,
		agNoRowsOverlay: Sm,
		agNoMatchingRowsOverlay: bm,
		agExportingOverlay: gm
	},
	apiFunctions: {
		showLoadingOverlay: Cm,
		showNoRowsOverlay: wm,
		hideOverlay: Tm
	},
	icons: {
		overlayLoading: "loading",
		overlayExporting: "loading"
	},
	beans: [class extends H {
		constructor() {
			super(...arguments), this.beanName = "overlays", this.eWrapper = void 0, this.exclusive = !1, this.oldExclusive = !1, this.currentDef = null, this.showInitialOverlay = !0, this.userForcedNoRows = !1, this.exportsInProgress = 0, this.newColumnsLoadedCleanup = null;
		}
		postConstruct() {
			let e = this.gos;
			this.showInitialOverlay = Un(e);
			let t = () => {
				this.userForcedNoRows || this.updateOverlay(!1);
			}, [n, r, i, a] = this.addManagedEventListeners({
				newColumnsLoaded: t,
				rowCountReady: () => {
					this.disableInitialOverlay(), t(), r();
				},
				rowDataUpdated: t,
				modelUpdated: t
			});
			this.newColumnsLoadedCleanup = n, this.addManagedPropertyListeners([
				"loading",
				"activeOverlay",
				"activeOverlayParams",
				"overlayComponentParams",
				"loadingOverlayComponentParams",
				"noRowsOverlayComponentParams"
			], (e) => this.onPropChange(new Set(e.changeSet?.properties)));
		}
		destroy() {
			this.doHideOverlay(), super.destroy(), this.eWrapper = void 0;
		}
		setWrapperComp(e, t) {
			this.isAlive() && (t ? this.eWrapper === e && (this.eWrapper = void 0) : this.eWrapper = e, this.updateOverlay(!1));
		}
		isVisible() {
			return !!this.currentDef;
		}
		showLoadingOverlay() {
			this.showInitialOverlay = !1;
			let e = this.gos;
			if (!this.eWrapper || e.get("activeOverlay") || this.isDisabled(Mm)) return;
			let t = e.get("loading");
			!t && t !== void 0 || this.doShowOverlay(Mm);
		}
		showNoRowsOverlay() {
			this.showInitialOverlay = !1;
			let e = this.gos;
			!this.eWrapper || e.get("activeOverlay") || e.get("loading") || this.isDisabled(Nm) || (this.userForcedNoRows = !0, this.doShowOverlay(Nm));
		}
		async showExportOverlay(e) {
			let { gos: t, beans: n } = this;
			if (!this.eWrapper || t.get("activeOverlay") || t.get("loading") || this.isDisabled(Fm) || this.userForcedNoRows && this.currentDef === Nm) {
				e();
				return;
			}
			let r = this.getDesiredDefWithOverride(Fm);
			if (!r) {
				e();
				return;
			}
			this.exportsInProgress++, this.focusedCell = n.focusSvc.getFocusedCell(), await this.doShowOverlay(r), await new Promise((e) => setTimeout(() => e()));
			let i = Date.now();
			try {
				e();
			} finally {
				let e = Date.now() - i, t = Math.max(0, 300 - e), r = () => {
					this.exportsInProgress--, this.exportsInProgress === 0 && (this.updateOverlay(!1), ao(n, this.focusedCell), this.focusedCell = null);
				};
				t > 0 ? setTimeout(() => r(), t) : r();
			}
		}
		hideOverlay() {
			let e = this.gos;
			this.showInitialOverlay = !1;
			let t = this.userForcedNoRows;
			if (this.userForcedNoRows = !1, e.get("loading")) {
				W(99);
				return;
			}
			if (e.get("activeOverlay")) {
				W(296);
				return;
			}
			if (this.currentDef === Pm) {
				W(297);
				return;
			}
			this.doHideOverlay(), t && this.getOverlayDef() !== Nm && this.updateOverlay(!1);
		}
		getOverlayWrapperSelector() {
			return km;
		}
		getOverlayWrapperCompClass() {
			return Om;
		}
		onPropChange(e) {
			let t = e.has("activeOverlay");
			if ((t || e.has("loading")) && this.updateOverlay(t)) return;
			let n = this.currentDef, r = this.eWrapper?.activeOverlay;
			if (r && n) {
				let t = e.has("activeOverlayParams");
				if (n === Im) t && r.refresh?.(this.makeCompParams(!0));
				else {
					let t = n.paramsKey;
					(e.has("overlayComponentParams") || t && e.has(t)) && r.refresh?.(this.makeCompParams(!1, t, n.overlayType));
				}
			}
		}
		updateOverlay(e) {
			let t = this.eWrapper;
			if (!t) return this.currentDef = null, !1;
			let n = this.getDesiredDefWithOverride();
			return n === this.currentDef ? n === Im && e && n ? (t.hideOverlay(), this.doShowOverlay(n), !0) : (n || this.disableInitialOverlay(), !1) : n ? (this.doShowOverlay(n), !0) : (this.disableInitialOverlay(), this.doHideOverlay());
		}
		getDesiredDefWithOverride(e) {
			let { gos: t } = this, n = Lm(t.get("activeOverlay"));
			return n || (n = e ?? this.getOverlayDef(), n && this.isDisabled(n) && (n = null)), n;
		}
		getOverlayDef() {
			let { gos: e, beans: t } = this, { rowModel: n } = t, r = e.get("loading");
			if (r !== void 0) {
				if (this.disableInitialOverlay(), r) return Mm;
			} else if (this.showInitialOverlay) {
				if (!this.isDisabled(Mm) && (!e.get("columnDefs") || !e.get("rowData"))) return Mm;
				this.disableInitialOverlay();
			} else this.disableInitialOverlay();
			return Rm(n.getOverlayType());
		}
		disableInitialOverlay() {
			this.showInitialOverlay = !1, this.newColumnsLoadedCleanup?.(), this.newColumnsLoadedCleanup = null;
		}
		doShowOverlay(e) {
			let { gos: t, beans: n } = this, { userCompFactory: r } = n;
			this.currentDef = e;
			let i = e !== Im, a = !!e.exclusive;
			this.exclusive = a;
			let o;
			(e.paramsKey && t.get(e.paramsKey) || e.compKey && t.get(e.compKey)) && (o = e.paramsKey);
			let s;
			i && (t.get("overlayComponent") || t.get("overlayComponentSelector")) && (s = r.getCompDetailsFromGridOptions({
				name: "overlayComponent",
				optionalMethods: ["refresh"]
			}, void 0, this.makeCompParams(!1, e.paramsKey, e.overlayType))), s ??= r.getCompDetailsFromGridOptions(e.comp, i ? e.id : void 0, this.makeCompParams(!i, o, e.overlayType), !1);
			let c = s?.newAgStackInstance() ?? null, l = this.eWrapper ? this.eWrapper.showOverlay(c, e.wrapperCls, a) : X.resolve();
			return this.eWrapper?.refreshWrapperPadding(), this.setExclusive(a), l;
		}
		makeCompParams(e, t, n) {
			let { gos: r } = this;
			return K(r, (e ? r.get("activeOverlayParams") : {
				...r.get("overlayComponentParams"),
				...t && r.get(t) || null,
				overlayType: n
			}) ?? {});
		}
		doHideOverlay() {
			let e = !1;
			this.currentDef && (this.currentDef = null, e = !0), this.exclusive = !1;
			let t = this.eWrapper;
			return t && (t.hideOverlay(), t.refreshWrapperPadding(), this.setExclusive(!1)), e;
		}
		setExclusive(e) {
			this.oldExclusive !== e && (this.oldExclusive = e, this.eventSvc.dispatchEvent({ type: "overlayExclusiveChanged" }));
		}
		isDisabled(e) {
			let { gos: t } = this;
			return e.overlayType && t.get("suppressOverlays")?.includes(e.overlayType) || e.isSuppressed?.(t) === !0;
		}
	}]
}, Bm = class extends H {
	constructor() {
		super(...arguments), this.beanName = "rowContainerHeight", this.scrollY = 0, this.uiBodyHeight = 0;
	}
	postConstruct() {
		this.addManagedEventListeners({ bodyHeightChanged: this.updateOffset.bind(this) }), this.maxDivHeight = da(), $t(this.gos, "RowContainerHeightService - maxDivHeight = " + this.maxDivHeight);
	}
	updateOffset() {
		if (!this.stretching) return;
		let e = this.beans.ctrlsSvc.getScrollFeature().getVScrollPosition().top, t = this.getUiBodyHeight();
		(e !== this.scrollY || t !== this.uiBodyHeight) && (this.scrollY = e, this.uiBodyHeight = t, this.calculateOffset());
	}
	calculateOffset() {
		this.setUiContainerHeight(this.maxDivHeight), this.pixelsToShave = this.modelHeight - this.uiContainerHeight, this.maxScrollY = this.uiContainerHeight - this.uiBodyHeight;
		let e = this.scrollY / this.maxScrollY, t = e * this.pixelsToShave;
		$t(this.gos, `RowContainerHeightService - Div Stretch Offset = ${t} (${this.pixelsToShave} * ${e})`), this.setDivStretchOffset(t);
	}
	setUiContainerHeight(e) {
		e !== this.uiContainerHeight && (this.uiContainerHeight = e, this.eventSvc.dispatchEvent({ type: "rowContainerHeightChanged" }));
	}
	clearOffset() {
		this.setUiContainerHeight(this.modelHeight), this.pixelsToShave = 0, this.setDivStretchOffset(0);
	}
	setDivStretchOffset(e) {
		let t = typeof e == "number" ? Math.floor(e) : null;
		this.divStretchOffset !== t && (this.divStretchOffset = t, this.eventSvc.dispatchEvent({ type: "heightScaleChanged" }));
	}
	setModelHeight(e) {
		this.modelHeight = e, this.stretching = e != null && this.maxDivHeight > 0 && e > this.maxDivHeight, this.stretching ? this.calculateOffset() : this.clearOffset();
	}
	getRealPixelPosition(e) {
		return e - this.divStretchOffset;
	}
	getUiBodyHeight() {
		let e = this.beans.ctrlsSvc.getScrollFeature().getVScrollPosition();
		return e.bottom - e.top;
	}
	getScrollPositionForPixel(e) {
		if (this.pixelsToShave <= 0) return e;
		let t = e / (this.modelHeight - this.getUiBodyHeight());
		return this.maxScrollY * t;
	}
}, Vm = 400, Hm = class extends H {
	constructor() {
		super(...arguments), this.beanName = "rowRenderer", this.destroyFuncsForColumnListeners = [], this.rowCtrlsByRowIndex = {}, this.zombieRowCtrls = {}, this.allRowCtrls = [], this.topRowCtrls = [], this.bottomRowCtrls = [], this.refreshInProgress = !1, this.dataFirstRenderedFired = !1, this.setupRangeSelectionListeners = () => {
			let e = () => {
				for (let e of this.getAllCellCtrls()) e.onCellSelectionChanged();
			}, t = () => {
				for (let e of this.getAllCellCtrls()) e.updateRangeBordersIfRangeCount();
			}, n = () => {
				this.eventSvc.addListener("cellSelectionChanged", e), this.eventSvc.addListener("columnMoved", t), this.eventSvc.addListener("columnPinned", t), this.eventSvc.addListener("columnVisible", t);
			}, r = () => {
				this.eventSvc.removeListener("cellSelectionChanged", e), this.eventSvc.removeListener("columnMoved", t), this.eventSvc.removeListener("columnPinned", t), this.eventSvc.removeListener("columnVisible", t);
			};
			this.addDestroyFunc(() => r()), this.addManagedPropertyListeners(["enableRangeSelection", "cellSelection"], () => {
				ur(this.gos) ? n() : r();
			}), ur(this.gos) && n();
		};
	}
	wireBeans(e) {
		this.pageBounds = e.pageBounds, this.colModel = e.colModel, this.pinnedRowModel = e.pinnedRowModel, this.rowModel = e.rowModel, this.focusSvc = e.focusSvc, this.rowContainerHeight = e.rowContainerHeight, this.ctrlsSvc = e.ctrlsSvc, this.editSvc = e.editSvc;
	}
	postConstruct() {
		this.ctrlsSvc.whenReady(this, (e) => {
			this.gridBodyCtrl = e.gridBodyCtrl, this.initialise();
		});
	}
	initialise() {
		this.addManagedEventListeners({
			paginationChanged: this.onPageLoaded.bind(this),
			pinnedRowDataChanged: this.onPinnedRowDataChanged.bind(this),
			pinnedRowsChanged: this.onPinnedRowsChanged.bind(this),
			displayedColumnsChanged: this.onDisplayedColumnsChanged.bind(this),
			bodyScroll: this.onBodyScroll.bind(this),
			bodyHeightChanged: this.redraw.bind(this, {})
		}), this.addManagedPropertyListeners(["domLayout", "embedFullWidthRows"], () => this.onDomLayoutChanged()), this.addManagedPropertyListeners(["suppressMaxRenderedRowRestriction", "rowBuffer"], () => this.redraw()), this.addManagedPropertyListener("suppressCellFocus", (e) => this.onSuppressCellFocusChanged(e.currentValue)), this.addManagedPropertyListeners([
			"groupSuppressBlankHeader",
			"getBusinessKeyForNode",
			"fullWidthCellRenderer",
			"fullWidthCellRendererParams",
			"suppressStickyTotalRow",
			"groupRowRenderer",
			"groupRowRendererParams",
			"loadingCellRenderer",
			"loadingCellRendererParams",
			"detailCellRenderer",
			"detailCellRendererParams",
			"enableRangeSelection",
			"enableCellTextSelection"
		], () => this.redrawRows()), this.addManagedPropertyListener("cellSelection", ({ currentValue: e, previousValue: t }) => {
			(!t && e || t && !e) && this.redrawRows();
		});
		let { stickyRowSvc: e, gos: t, showRowGroupCols: n } = this.beans;
		if (n && this.addManagedPropertyListener("showOpenedGroup", () => {
			let e = n.columns;
			e.length && this.refreshCells({
				columns: e,
				force: !0
			});
		}), e) this.stickyRowFeature = e.createStickyRowFeature(this, this.createRowCon.bind(this), this.destroyRowCtrls.bind(this));
		else {
			let e = this.gridBodyCtrl;
			e.setStickyTopHeight(0), e.setStickyBottomHeight(0);
		}
		this.registerCellEventListeners(), this.initialiseCache(), this.printLayout = G(t, "print"), this.embedFullWidthRows = this.printLayout || t.get("embedFullWidthRows"), this.redrawAfterModelUpdate();
	}
	initialiseCache() {
		this.gos.get("keepDetailRows") && (this.cachedRowCtrls = new Um(this.getKeepDetailRowsCount() ?? 3));
	}
	getKeepDetailRowsCount() {
		return this.gos.get("keepDetailRowsCount");
	}
	getStickyTopRowCtrls() {
		return this.stickyRowFeature?.stickyTopRowCtrls ?? [];
	}
	getStickyBottomRowCtrls() {
		return this.stickyRowFeature?.stickyBottomRowCtrls ?? [];
	}
	updateAllRowCtrls() {
		let e = Object.values(this.rowCtrlsByRowIndex), t = Object.values(this.zombieRowCtrls), n = this.cachedRowCtrls?.getEntries() ?? [];
		t.length > 0 || n.length > 0 ? this.allRowCtrls = [
			...e,
			...t,
			...n
		] : this.allRowCtrls = e;
	}
	isCellBeingRendered(e, t) {
		let n = this.rowCtrlsByRowIndex[e];
		return !t || !n ? !!n : n.isFullWidth() ? !0 : !!this.beans.spannedRowRenderer?.getCellByPosition({
			rowIndex: e,
			column: t,
			rowPinned: null
		}) || !!n.getCellCtrl(t) || !n.isRowRendered();
	}
	updateCellFocus(e) {
		for (let t of this.getAllCellCtrls()) t.onCellFocused(e);
		for (let t of this.getFullWidthRowCtrls()) t.onFullWidthRowFocused(e);
	}
	onCellFocusChanged(e) {
		if (e?.rowIndex != null && !e.rowPinned) {
			let t = this.beans.colModel.getCol(e.column) ?? void 0;
			this.isCellBeingRendered(e.rowIndex, t) || this.redraw();
		}
		this.updateCellFocus(e);
	}
	onSuppressCellFocusChanged(e) {
		for (let t of this.getAllCellCtrls()) t.onSuppressCellFocusChanged(e);
		for (let t of this.getFullWidthRowCtrls()) t.onSuppressCellFocusChanged(e);
	}
	registerCellEventListeners() {
		this.addManagedEventListeners({
			cellFocused: (e) => this.onCellFocusChanged(e),
			cellFocusCleared: () => this.updateCellFocus(),
			flashCells: (e) => {
				let { cellFlashSvc: t } = this.beans;
				if (t) for (let n of this.getAllCellCtrls()) t.onFlashCells(n, e);
			},
			columnHoverChanged: () => {
				for (let e of this.getAllCellCtrls()) e.onColumnHover();
			},
			displayedColumnsChanged: () => {
				for (let e of this.getAllCellCtrls()) e.onDisplayedColumnsChanged();
			},
			displayedColumnsWidthChanged: () => {
				if (this.printLayout) for (let e of this.getAllCellCtrls()) e.onLeftChanged();
			}
		}), this.setupRangeSelectionListeners(), this.refreshListenersToColumnsForCellComps(), this.addManagedEventListeners({ gridColumnsChanged: this.refreshListenersToColumnsForCellComps.bind(this) }), this.addDestroyFunc(this.removeGridColumnListeners.bind(this));
	}
	removeGridColumnListeners() {
		for (let e of this.destroyFuncsForColumnListeners) e();
		this.destroyFuncsForColumnListeners.length = 0;
	}
	refreshListenersToColumnsForCellComps() {
		this.removeGridColumnListeners();
		let e = this.colModel.getCols();
		for (let t of e) {
			let e = (e) => {
				for (let n of this.getAllCellCtrls()) n.column === t && e(n);
			}, n = () => {
				e((e) => e.onLeftChanged());
			}, r = () => {
				e((e) => e.onWidthChanged());
			}, i = () => {
				e((e) => e.onFirstRightPinnedChanged());
			}, a = () => {
				e((e) => e.onLastLeftPinnedChanged());
			}, o = () => {
				e((e) => e.onColDefChanged());
			};
			t.__addEventListener("leftChanged", n), t.__addEventListener("widthChanged", r), t.__addEventListener("firstRightPinnedChanged", i), t.__addEventListener("lastLeftPinnedChanged", a), t.__addEventListener("colDefChanged", o), this.destroyFuncsForColumnListeners.push(() => {
				t.__removeEventListener("leftChanged", n), t.__removeEventListener("widthChanged", r), t.__removeEventListener("firstRightPinnedChanged", i), t.__removeEventListener("lastLeftPinnedChanged", a), t.__removeEventListener("colDefChanged", o);
			});
		}
	}
	onDomLayoutChanged() {
		let e = G(this.gos, "print"), t = e || this.gos.get("embedFullWidthRows"), n = t !== this.embedFullWidthRows || this.printLayout !== e;
		this.printLayout = e, this.embedFullWidthRows = t, n && this.redrawAfterModelUpdate({ domLayoutChanged: !0 });
	}
	datasourceChanged() {
		this.firstRenderedRow = 0, this.lastRenderedRow = -1;
		let e = Object.keys(this.rowCtrlsByRowIndex);
		this.removeRowCtrls(e);
	}
	onPageLoaded(e) {
		let t = {
			recycleRows: e.keepRenderedRows,
			animate: e.animate,
			newData: e.newData,
			newPage: e.newPage,
			onlyBody: !0
		};
		this.redrawAfterModelUpdate(t);
	}
	getAllCellsNotSpanningForColumn(e) {
		let t = [];
		for (let n of this.getAllRowCtrls()) {
			let r = n.getCellCtrl(e, !0)?.eGui;
			r && t.push(r);
		}
		return t;
	}
	refreshFloatingRowComps(e = !0) {
		this.refreshFloatingRows(this.topRowCtrls, "top", e), this.refreshFloatingRows(this.bottomRowCtrls, "bottom", e);
	}
	refreshFloatingRows(e, t, n) {
		let { pinnedRowModel: r, beans: i, printLayout: a } = this, o = Object.fromEntries(e.map((e) => [e.rowNode.id, e]));
		r?.forEachPinnedRow(t, (s, c) => {
			let l = e[c];
			l && r.getPinnedRowById(l.rowNode.id, t) === void 0 && (l.destroyFirstPass(), l.destroySecondPass()), s.id in o && n ? (e[c] = o[s.id], delete o[s.id]) : e[c] = new em(s, i, !1, !1, a);
		}), e.length = (t === "top" ? r?.getPinnedTopRowCount() : r?.getPinnedBottomRowCount()) ?? 0;
	}
	onPinnedRowDataChanged() {
		this.redrawAfterModelUpdate({ recycleRows: !0 });
	}
	onPinnedRowsChanged() {
		this.redrawAfterModelUpdate({ recycleRows: !0 });
	}
	redrawRow(e, t = !1) {
		if (e.sticky) this.stickyRowFeature?.refreshStickyNode(e);
		else if (this.cachedRowCtrls?.has(e)) {
			this.cachedRowCtrls.removeRow(e);
			return;
		} else {
			let t = (t) => {
				let n = t[e.rowIndex];
				n && n.rowNode === e && (n.destroyFirstPass(), n.destroySecondPass(), t[e.rowIndex] = this.createRowCon(e, !1, !1));
			};
			switch (e.rowPinned) {
				case "top":
					t(this.topRowCtrls);
					break;
				case "bottom":
					t(this.bottomRowCtrls);
					break;
				default: t(this.rowCtrlsByRowIndex), this.updateAllRowCtrls();
			}
		}
		t || this.dispatchDisplayedRowsChanged(!1);
	}
	redrawRows(e) {
		let { editSvc: t } = this.beans;
		if (t?.isEditing() && (t.isBatchEditing() ? t.cleanupEditors() : t.stopEditing(void 0, { source: "api" })), e != null) {
			for (let t of e ?? []) this.redrawRow(t, !0);
			this.dispatchDisplayedRowsChanged(!1);
			return;
		}
		this.redrawAfterModelUpdate();
	}
	redrawAfterModelUpdate(e = {}) {
		this.getLockOnRefresh();
		let t = this.beans.focusSvc?.getFocusCellToUseAfterRefresh();
		this.updateContainerHeights(), this.scrollToTopIfNewData(e);
		let n = !e.domLayoutChanged && !!e.recycleRows, r = e.animate && tr(this.gos), i = n ? this.getRowsToRecycle() : null;
		n || this.removeAllRowComps(), this.workOutFirstAndLastRowsToRender();
		let { stickyRowFeature: a, gos: o } = this;
		if (a) {
			a.checkStickyRows();
			let e = a.extraTopHeight + a.extraBottomHeight;
			e && this.updateContainerHeights(e);
		}
		this.recycleRows(i, r), this.gridBodyCtrl.updateRowCount(), e.onlyBody || this.refreshFloatingRowComps(o.get("enableRowPinning") ? n : void 0), this.dispatchDisplayedRowsChanged(), t != null && this.restoreFocusedCell(t), this.releaseLockOnRefresh();
	}
	scrollToTopIfNewData(e) {
		let t = e.newData || e.newPage, n = this.gos.get("suppressScrollOnNewData");
		t && !n && (this.gridBodyCtrl.scrollFeature.scrollToTop(), this.stickyRowFeature?.resetOffsets());
	}
	updateContainerHeights(e = 0) {
		let { rowContainerHeight: t } = this;
		if (this.printLayout) {
			t.setModelHeight(null);
			return;
		}
		let n = this.pageBounds.getCurrentPageHeight();
		n === 0 && (n = 1), t.setModelHeight(n + e);
	}
	getLockOnRefresh() {
		if (this.refreshInProgress) throw Error(Vn(252));
		this.refreshInProgress = !0, this.beans.frameworkOverrides.getLockOnRefresh?.();
	}
	releaseLockOnRefresh() {
		this.refreshInProgress = !1, this.beans.frameworkOverrides.releaseLockOnRefresh?.();
	}
	isRefreshInProgress() {
		return this.refreshInProgress;
	}
	restoreFocusedCell(e) {
		if (!e) return;
		let t = this.beans.focusSvc, n = this.findPositionToFocus(e);
		if (!n) {
			t.focusHeaderPosition({ headerPosition: {
				headerRowIndex: co(this.beans) - 1,
				column: e.column
			} });
			return;
		}
		if (e.rowIndex !== n.rowIndex || e.rowPinned != n.rowPinned) {
			t.setFocusedCell({
				...n,
				preventScrollOnBrowserFocus: !0,
				forceBrowserFocus: !0
			});
			return;
		}
		t.doesRowOrCellHaveBrowserFocus() || this.updateCellFocus(K(this.gos, {
			...n,
			forceBrowserFocus: !0,
			preventScrollOnBrowserFocus: !0,
			type: "cellFocused"
		}));
	}
	findPositionToFocus(e) {
		let { pagination: t, pageBounds: n } = this.beans, r = e;
		for (r.rowPinned == null && t && n && !t.isRowInPage(r.rowIndex) && (r = {
			rowPinned: null,
			rowIndex: n.getFirstRow()
		}); r;) {
			if (r.rowPinned == null && n) if (r.rowIndex < n.getFirstRow()) {
				if (r = Qa(this.beans, {
					rowPinned: null,
					rowIndex: 0
				}), !r) return null;
			} else r.rowIndex > n.getLastRow() && (r = {
				rowPinned: null,
				rowIndex: n.getLastRow()
			});
			let t = this.getRowByPosition(r);
			if (t?.isAlive()) return {
				...t.getRowPosition(),
				column: e.column
			};
			r = Qa(this.beans, r);
		}
		return null;
	}
	getAllCellCtrls() {
		let e = [], t = this.getAllRowCtrls(), n = t.length;
		for (let r = 0; r < n; r++) {
			let n = t[r].getAllCellCtrls(), i = n.length;
			for (let t = 0; t < i; t++) e.push(n[t]);
		}
		return e;
	}
	getAllRowCtrls() {
		let { spannedRowRenderer: e } = this.beans, t = this.getStickyTopRowCtrls(), n = this.getStickyBottomRowCtrls();
		return [
			...this.topRowCtrls,
			...this.bottomRowCtrls,
			...t,
			...n,
			...e?.getCtrls("top") ?? [],
			...e?.getCtrls("bottom") ?? [],
			...e?.getCtrls("center") ?? [],
			...Object.values(this.rowCtrlsByRowIndex)
		];
	}
	addRenderedRowListener(e, t, n) {
		let r = this.rowCtrlsByRowIndex[t];
		r && r.addEventListener(e, n);
	}
	refreshCells({ rowNodes: e, columns: t, force: n, suppressFlash: r } = {}) {
		let i = {
			force: n,
			newData: !1,
			suppressFlash: r
		};
		for (let n of this.getCellCtrls(e, t)) n.refreshOrDestroyCell(i);
		this.refreshFullWidth(e);
	}
	refreshRows(e = {}) {
		for (let t of this.getRowCtrls(e.rowNodes)) t.refreshRow(e);
		this.refreshFullWidth(e.rowNodes);
	}
	getRowCtrlByNode(e) {
		let t = e.rowIndex;
		if (t == null) return;
		let n = e.rowPinned;
		if (n === "top") {
			let n = this.topRowCtrls[t];
			return n?.rowNode === e ? n : void 0;
		}
		if (n === "bottom") {
			let n = this.bottomRowCtrls[t];
			return n?.rowNode === e ? n : void 0;
		}
		let r = this.rowCtrlsByRowIndex[t];
		return r?.rowNode === e ? r : this.getStickyRowCtrlByNode(e);
	}
	getStickyRowCtrlByNode(e) {
		let t = this.stickyRowFeature;
		if (t) {
			for (let n of t.stickyTopRowCtrls) if (n.rowNode === e) return n;
			for (let n of t.stickyBottomRowCtrls) if (n.rowNode === e) return n;
		}
	}
	refreshRowByNode(e) {
		e && this.getRowCtrlByNode(e)?.refreshRow();
	}
	refreshFullWidth(e) {
		if (!e) return;
		let t = !1;
		for (let n of this.getRowCtrls(e)) n.isFullWidth() && (n.refreshFullWidth() || (t = !0, this.redrawRow(n.rowNode, !0)));
		t && this.dispatchDisplayedRowsChanged(!1);
	}
	getRowCtrls(e) {
		let t = Wm(e), n = this.getAllRowCtrls();
		return !e || !t ? n : n.filter((e) => {
			let n = e.rowNode;
			return Gm(n, t);
		});
	}
	getCellCtrls(e, t) {
		let n;
		I(t) && (n = {}, t.forEach((e) => {
			let t = this.colModel.getCol(e);
			I(t) && (n[t.getId()] = !0);
		}));
		let r = [];
		for (let t of this.getRowCtrls(e)) for (let e of t.getAllCellCtrls()) {
			let t = e.column.getId();
			n && !n[t] || r.push(e);
		}
		return r;
	}
	destroy() {
		this.removeAllRowComps(!0), super.destroy();
	}
	removeAllRowComps(e = !1) {
		let t = Object.keys(this.rowCtrlsByRowIndex);
		this.removeRowCtrls(t, e), this.stickyRowFeature?.destroyStickyCtrls();
	}
	getRowsToRecycle() {
		let e = [];
		for (let t of Object.keys(this.rowCtrlsByRowIndex)) this.rowCtrlsByRowIndex[t].rowNode.id ?? e.push(t);
		this.removeRowCtrls(e);
		let t = {};
		for (let e of Object.values(this.rowCtrlsByRowIndex)) {
			let n = e.rowNode;
			t[n.id] = e;
		}
		return this.rowCtrlsByRowIndex = {}, t;
	}
	removeRowCtrls(e, t = !1) {
		for (let n of e) {
			let e = this.rowCtrlsByRowIndex[n];
			e && (e.destroyFirstPass(t), e.destroySecondPass()), delete this.rowCtrlsByRowIndex[n];
		}
	}
	onBodyScroll(e) {
		e.direction === "vertical" && this.redraw({ afterScroll: !0 });
	}
	redraw(e = {}) {
		let { focusSvc: t, animationFrameSvc: n } = this.beans, { afterScroll: r } = e, i, a = this.stickyRowFeature;
		a && (i = t?.getFocusCellToUseAfterRefresh() || void 0);
		let o = this.firstRenderedRow, s = this.lastRenderedRow;
		this.workOutFirstAndLastRowsToRender();
		let c = !1;
		if (a) {
			c = a.checkStickyRows();
			let e = a.extraTopHeight + a.extraBottomHeight;
			e && this.updateContainerHeights(e);
		}
		let l = this.firstRenderedRow !== o || this.lastRenderedRow !== s;
		if (!(r && !c && !l) && (this.getLockOnRefresh(), this.recycleRows(null, !1, r), this.releaseLockOnRefresh(), this.dispatchDisplayedRowsChanged(r && !c), i != null)) {
			let e = t?.getFocusCellToUseAfterRefresh();
			i != null && e == null && (n?.flushAllFrames(), this.restoreFocusedCell(i));
		}
	}
	removeRowCompsNotToDraw(e, t) {
		let n = {};
		for (let t of e) n[t] = !0;
		let r = Object.keys(this.rowCtrlsByRowIndex).filter((e) => !n[e]);
		this.removeRowCtrls(r, t);
	}
	calculateIndexesToDraw(e) {
		let t = [];
		for (let e = this.firstRenderedRow; e <= this.lastRenderedRow; e++) t.push(e);
		let n = this.beans.pagination, r = this.beans.focusSvc?.getFocusedCell()?.rowIndex;
		r != null && (r < this.firstRenderedRow || r > this.lastRenderedRow) && (!n || n.isRowInPage(r)) && r < this.rowModel.getRowCount() && t.push(r);
		let i = (e) => {
			let n = e.rowNode.rowIndex;
			n == null || n === r || (n < this.firstRenderedRow || n > this.lastRenderedRow) && this.doNotUnVirtualiseRow(e) && t.push(n);
		};
		for (let e of Object.values(this.rowCtrlsByRowIndex)) i(e);
		if (e) for (let t of Object.values(e)) i(t);
		t.sort((e, t) => e - t);
		let a = [];
		for (let e = 0; e < t.length; e++) {
			let n = t[e], r = this.rowModel.getRow(n);
			r && !r.sticky && a.push(n);
		}
		return a;
	}
	recycleRows(e, t = !1, n = !1) {
		let r = this.calculateIndexesToDraw(e);
		(this.printLayout || n) && (t = !1), this.removeRowCompsNotToDraw(r, !t);
		for (let i of r) this.createOrUpdateRowCtrl(i, e, t, n);
		if (e) {
			let { animationFrameSvc: r } = this.beans;
			r?.active && n && !this.printLayout ? r.addDestroyTask(() => {
				this.destroyRowCtrls(e, t), this.updateAllRowCtrls(), this.dispatchDisplayedRowsChanged();
			}) : this.destroyRowCtrls(e, t);
		}
		this.updateAllRowCtrls();
	}
	dispatchDisplayedRowsChanged(e = !1) {
		this.eventSvc.dispatchEvent({
			type: "displayedRowsChanged",
			afterScroll: e
		});
	}
	onDisplayedColumnsChanged() {
		let { visibleCols: e } = this.beans, t = e.isPinningLeft(), n = e.isPinningRight();
		(this.pinningLeft !== t || n !== this.pinningRight) && (this.pinningLeft = t, this.pinningRight = n, this.embedFullWidthRows && this.redrawFullWidthEmbeddedRows());
	}
	redrawFullWidthEmbeddedRows() {
		let e = [];
		for (let t of this.getFullWidthRowCtrls()) {
			let n = t.rowNode.rowIndex;
			e.push(n.toString());
		}
		this.refreshFloatingRowComps(), this.removeRowCtrls(e), this.redraw({ afterScroll: !0 });
	}
	getFullWidthRowCtrls(e) {
		let t = Wm(e);
		return this.getAllRowCtrls().filter((e) => {
			if (!e.isFullWidth()) return !1;
			let n = e.rowNode;
			return !(t != null && !Gm(n, t));
		});
	}
	createOrUpdateRowCtrl(e, t, n, r) {
		let i, a = this.rowCtrlsByRowIndex[e];
		if (a || (i = this.rowModel.getRow(e), I(i) && I(t) && t[i.id] && i.alreadyRendered && (a = t[i.id], t[i.id] = null)), !a) if (i ||= this.rowModel.getRow(e), I(i)) a = this.createRowCon(i, n, r);
		else return;
		i && (i.alreadyRendered = !0), this.rowCtrlsByRowIndex[e] = a;
	}
	destroyRowCtrls(e, t) {
		let n = [];
		if (e) {
			for (let r of Object.values(e)) if (r) {
				if (this.cachedRowCtrls && r.isCacheable()) {
					this.cachedRowCtrls.addRow(r);
					continue;
				}
				if (r.destroyFirstPass(!t), t) {
					let e = r.instanceId;
					this.zombieRowCtrls[e] = r, n.push(() => {
						r.destroySecondPass(), delete this.zombieRowCtrls[e];
					});
				} else r.destroySecondPass();
			}
		}
		t && (n.push(() => {
			this.isAlive() && (this.updateAllRowCtrls(), this.dispatchDisplayedRowsChanged());
		}), window.setTimeout(() => {
			for (let e of n) e();
		}, Vm));
	}
	getRowBuffer() {
		return this.gos.get("rowBuffer");
	}
	getRowBufferInPixels() {
		return this.getRowBuffer() * Zn(this.beans);
	}
	workOutFirstAndLastRowsToRender() {
		let { rowContainerHeight: e, pageBounds: t, rowModel: n } = this;
		e.updateOffset();
		let r, i;
		if (!n.isRowsToRender()) r = 0, i = -1;
		else if (this.printLayout) this.beans.environment.refreshRowHeightVariable(), r = t.getFirstRow(), i = t.getLastRow();
		else {
			let a = this.getRowBufferInPixels(), o = this.ctrlsSvc.getScrollFeature(), s = this.gos.get("suppressRowVirtualisation"), c = !1, l, u;
			do {
				let n = t.getPixelOffset(), { pageFirstPixel: r, pageLastPixel: i } = t.getCurrentPagePixelRange(), d = e.divStretchOffset, f = o.getVScrollPosition(), p = f.top, m = f.bottom;
				s ? (l = r + d, u = i + d) : (l = Math.max(p + n - a, r) + d, u = Math.min(m + n + a, i) + d), this.firstVisibleVPixel = Math.max(p + n, r) + d, this.lastVisibleVPixel = Math.min(m + n, i) + d, c = this.ensureAllRowsInRangeHaveHeightsCalculated(l, u);
			} while (c);
			let d = n.getRowIndexAtPixel(l), f = n.getRowIndexAtPixel(u), p = t.getFirstRow(), m = t.getLastRow();
			d < p && (d = p), f > m && (f = m), r = d, i = f;
		}
		let a = G(this.gos, "normal"), o = this.gos.get("suppressMaxRenderedRowRestriction"), s = Math.max(this.getRowBuffer(), 500);
		a && !o && i - r > s && (i = r + s);
		let c = r !== this.firstRenderedRow, l = i !== this.lastRenderedRow;
		(c || l) && (this.firstRenderedRow = r, this.lastRenderedRow = i, this.eventSvc.dispatchEvent({
			type: "viewportChanged",
			firstRow: r,
			lastRow: i
		}));
	}
	dispatchFirstDataRenderedEvent() {
		this.dataFirstRenderedFired || (this.dataFirstRenderedFired = !0, pt(this.beans, () => {
			this.beans.eventSvc.dispatchEvent({
				type: "firstDataRendered",
				firstRow: this.firstRenderedRow,
				lastRow: this.lastRenderedRow
			});
		}));
	}
	ensureAllRowsInRangeHaveHeightsCalculated(e, t) {
		let n = this.pinnedRowModel?.ensureRowHeightsValid(), r = this.stickyRowFeature?.ensureRowHeightsValid(), { pageBounds: i, rowModel: a } = this, o = a.ensureRowHeightsValid(e, t, i.getFirstRow(), i.getLastRow());
		return (o || r) && this.eventSvc.dispatchEvent({ type: "recalculateRowBounds" }), r || o || n ? (this.updateContainerHeights(), !0) : !1;
	}
	doNotUnVirtualiseRow(e) {
		let t = e.rowNode, n = this.focusSvc.isRowFocused(t.rowIndex, t.rowPinned), r = this.editSvc?.isEditing(e), i = t.detail;
		return n || r || i ? !!this.isRowPresent(t) : !1;
	}
	isRowPresent(e) {
		return this.rowModel.isRowPresent(e) ? this.beans.pagination?.isRowInPage(e.rowIndex) ?? !0 : !1;
	}
	createRowCon(e, t, n) {
		let r = this.cachedRowCtrls?.getRow(e) ?? null;
		if (r) return r;
		let i = n && !this.printLayout && !!this.beans.animationFrameSvc?.active;
		return new em(e, this.beans, t, i, this.printLayout);
	}
	getRenderedNodes() {
		let e = Object.values(this.rowCtrlsByRowIndex).map((e) => e.rowNode), t = this.getStickyTopRowCtrls().map((e) => e.rowNode), n = this.getStickyBottomRowCtrls().map((e) => e.rowNode);
		return [
			...t,
			...e,
			...n
		];
	}
	getRowByPosition(e) {
		let t, { rowIndex: n } = e;
		switch (e.rowPinned) {
			case "top":
				t = this.topRowCtrls[n];
				break;
			case "bottom":
				t = this.bottomRowCtrls[n];
				break;
			default:
				t = this.rowCtrlsByRowIndex[n], t || (t = this.getStickyTopRowCtrls().find((e) => e.rowNode.rowIndex === n) || null, t ||= this.getStickyBottomRowCtrls().find((e) => e.rowNode.rowIndex === n) || null);
				break;
		}
		return t;
	}
	isRangeInRenderedViewport(e, t) {
		if (e == null || t == null) return !1;
		let n = e > this.lastRenderedRow;
		return !(t < this.firstRenderedRow) && !n;
	}
}, Um = class {
	constructor(e) {
		this.entriesMap = {}, this.entriesList = [], this.maxCount = e;
	}
	addRow(e) {
		if (this.entriesMap[e.rowNode.id] = e, this.entriesList.push(e), e.setCached(!0), this.entriesList.length > this.maxCount) {
			let e = this.entriesList[0];
			e.destroyFirstPass(), e.destroySecondPass(), this.removeFromCache(e);
		}
	}
	getRow(e) {
		if (e?.id == null) return null;
		let t = this.entriesMap[e.id];
		return t ? (this.removeFromCache(t), t.setCached(!1), t.rowNode == e ? t : null) : null;
	}
	has(e) {
		return this.entriesMap[e.id] != null;
	}
	removeRow(e) {
		let t = e.id, n = this.entriesMap[t];
		delete this.entriesMap[t], re(this.entriesList, n);
	}
	removeFromCache(e) {
		let t = e.rowNode.id;
		delete this.entriesMap[t], re(this.entriesList, e);
	}
	getEntries() {
		return this.entriesList;
	}
};
function Wm(e) {
	if (!e) return;
	let t = {
		top: {},
		bottom: {},
		normal: {}
	};
	for (let n of e) {
		let e = n.id;
		switch (n.rowPinned) {
			case "top":
				t.top[e] = n;
				break;
			case "bottom":
				t.bottom[e] = n;
				break;
			default:
				t.normal[e] = n;
				break;
		}
	}
	return t;
}
function Gm(e, t) {
	let n = e.id;
	switch (e.rowPinned) {
		case "top": return t.top[n] != null;
		case "bottom": return t.bottom[n] != null;
		default: return t.normal[n] != null;
	}
}
var Km = class extends H {
	constructor() {
		super(...arguments), this.beanName = "rowNodeSorter", this.accentedSort = !1, this.primaryColumnsSortGroups = !1, this.pivotActive = !1;
	}
	postConstruct() {
		this.firstLeaf = Un(this.gos) ? Mc : qm, this.addManagedPropertyListeners([
			"accentedSort",
			"autoGroupColumnDef",
			"treeData"
		], this.updateOptions.bind(this));
		let e = this.updatePivotModeState.bind(this);
		this.addManagedEventListeners({
			columnPivotModeChanged: e,
			columnPivotChanged: e
		}), this.updateOptions(), e();
	}
	updateOptions() {
		this.accentedSort = !!this.gos.get("accentedSort"), this.primaryColumnsSortGroups = rr(this.gos);
	}
	updatePivotModeState() {
		this.pivotActive = this.beans.colModel.isPivotActive();
	}
	doFullSortInPlace(e, t) {
		return e.sort((e, n) => this.compareRowNodes(t, e, n));
	}
	compareRowNodes(e, t, n) {
		if (t === n) return 0;
		let r = this.accentedSort;
		for (let i = 0, a = e.length; i < a; ++i) {
			let a = e[i], o = a.sort === "desc", s = this.getValue(t, a.column), c = this.getValue(n, a.column), l, u = this.getComparator(a, t);
			if (u ? l = u(s, c, t, n, o) : (a.type === "absolute" && (s = Jm(s), c = Jm(c)), l = oe(s, c, r)), l) return a.sort === "asc" ? l : -l;
		}
		return 0;
	}
	getComparator(e, t) {
		let n = e.column.getColDef(), r = this.getComparatorFromColDef(n, e);
		if (r) return r;
		if (!n.showRowGroup) return;
		let i = !t.group && n.field;
		if (!i) return;
		let a = this.beans.colModel.getColDefCol(i);
		if (a) return this.getComparatorFromColDef(a.getColDef(), e);
	}
	getComparatorFromColDef(e, t) {
		let n = e.comparator;
		if (n != null) return typeof n == "object" ? n[Pr(t.type)] : n;
	}
	getValue(e, t) {
		let n = this.beans;
		if (this.primaryColumnsSortGroups) {
			if (e.rowGroupColumn === t) return this.getGroupDataValue(e, t);
			if (e.group && t.getColDef().showRowGroup) return;
		}
		let r = n.valueSvc.getValue(t, e, "data");
		if (t.isAllowFormula()) {
			let i = n.formula;
			if (i?.isFormula(r)) return i.resolveValue(t, e);
		}
		return r;
	}
	getGroupDataValue(e, t) {
		if (or(this.gos, this.pivotActive)) {
			let n = this.firstLeaf(e);
			return n && this.beans.valueSvc.getValue(t, n, "data");
		}
		let n = this.beans.showRowGroupCols?.getShowRowGroupCol(t.getId());
		return n ? e.groupData?.[n.getId()] : void 0;
	}
}, qm = (e) => {
	if (e.data) return e;
	let t = e.childrenAfterGroup;
	for (; t?.length;) {
		let e = t[0];
		if (e.data) return e;
		t = e.childrenAfterGroup;
	}
}, Jm = (e) => {
	if (!e) return e;
	if (typeof e == "bigint") return e < 0n ? -e : e;
	let t = Number(e);
	return isNaN(t) ? e : Math.abs(t);
};
function Ym(e) {
	e.sortSvc?.onSortChanged("api");
}
var Xm = (e, t) => ({
	tag: "span",
	ref: `eSort${e}`,
	cls: `ag-sort-indicator-icon ag-sort-${t} ag-hidden`,
	attrs: { "aria-hidden": "true" }
}), Zm = {
	tag: "span",
	cls: "ag-sort-indicator-container",
	children: [
		Xm("Order", "order"),
		Xm("Asc", "ascending-icon"),
		Xm("Desc", "descending-icon"),
		Xm("Mixed", "mixed-icon"),
		Xm("AbsoluteAsc", "absolute-ascending-icon"),
		Xm("AbsoluteDesc", "absolute-descending-icon"),
		Xm("None", "none-icon")
	]
}, Qm = class extends Qi {
	constructor(e) {
		super(), this.eSortOrder = null, this.eSortAsc = null, this.eSortDesc = null, this.eSortMixed = null, this.eSortNone = null, this.eSortAbsoluteAsc = null, this.eSortAbsoluteDesc = null, e || this.setTemplate(Zm);
	}
	attachCustomElements(e, t, n, r, i, a, o) {
		this.eSortOrder = e, this.eSortAsc = t, this.eSortDesc = n, this.eSortMixed = r, this.eSortNone = i, this.eSortAbsoluteAsc = a, this.eSortAbsoluteDesc = o;
	}
	setupSort(e, t = !1, n) {
		if (this.column = e, this.suppressOrder = t, this.getSortDefOverride = n, this.setupMultiSortIndicator(), !e.isSortable() && !e.getColDef().showRowGroup) return;
		this.addInIcon("sortAscending", this.eSortAsc, e), this.addInIcon("sortDescending", this.eSortDesc, e), this.addInIcon("sortUnSort", this.eSortNone, e), this.addInIcon("sortAbsoluteAscending", this.eSortAbsoluteAsc, e), this.addInIcon("sortAbsoluteDescending", this.eSortAbsoluteDesc, e);
		let r = this.updateIcons.bind(this), i = this.onSortChanged.bind(this);
		this.addManagedPropertyListener("unSortIcon", r), this.addManagedEventListeners({
			newColumnsLoaded: r,
			sortChanged: i,
			columnRowGroupChanged: i
		}), this.onSortChanged();
	}
	addInIcon(e, t, n) {
		if (t == null) return;
		let r = fc(e, this.beans, n);
		r && t.appendChild(r);
	}
	onSortChanged() {
		this.updateIcons(), this.suppressOrder || this.updateSortOrder();
	}
	updateIcons() {
		let { eSortAsc: e, eSortDesc: t, eSortAbsoluteAsc: n, eSortAbsoluteDesc: r, eSortNone: i, column: a, gos: o, beans: s } = this, c = Fr(a, s, this.getSortDefOverride), l = c.isDefaultSortAllowed, u = c.isAbsoluteSortAllowed, { isAbsoluteSort: d, isDefaultSort: f, isAscending: p, isDescending: m, direction: h } = c;
		e && V(e, p && f && l, { skipAriaHidden: !0 }), t && V(t, m && f && l, { skipAriaHidden: !0 }), i && V(i, !(!a.getColDef().unSortIcon && !o.get("unSortIcon")) && !h, { skipAriaHidden: !0 }), n && V(n, p && d && u, { skipAriaHidden: !0 }), r && V(r, m && d && u, { skipAriaHidden: !0 });
	}
	setupMultiSortIndicator() {
		let { eSortMixed: e, column: t, gos: n } = this;
		this.addInIcon("sortUnSort", e, t);
		let r = t.getColDef().showRowGroup;
		rr(n) && r && (this.addManagedEventListeners({
			sortChanged: this.updateMultiSortIndicator.bind(this),
			columnRowGroupChanged: this.updateMultiSortIndicator.bind(this)
		}), this.updateMultiSortIndicator());
	}
	updateMultiSortIndicator() {
		let { eSortMixed: e, beans: t, column: n } = this;
		e && V(e, t.sortSvc.getDisplaySortForColumn(n)?.direction === "mixed", { skipAriaHidden: !0 });
	}
	updateSortOrder() {
		let { eSortOrder: e, column: t, beans: { sortSvc: n } } = this;
		if (!e) return;
		let r = n.getColumnsWithSortingOrdered(), i = n.getDisplaySortIndexForColumn(t) ?? -1, a = r.some((e) => n.getDisplaySortIndexForColumn(e) ?? !1);
		V(e, i >= 0 && a, { skipAriaHidden: !0 }), i >= 0 ? e.textContent = (i + 1).toString() : et(e);
	}
	refresh() {
		this.onSortChanged();
	}
}, $m = {
	selector: "AG-SORT-INDICATOR",
	component: Qm
}, eh = {
	moduleName: "Sort",
	version: U,
	beans: [class extends H {
		constructor() {
			super(...arguments), this.beanName = "sortSvc";
		}
		progressSort(e, t, n) {
			let r = this.getNextSortDirection(e);
			this.setSortForColumn(e, r, t, n);
		}
		progressSortFromEvent(e, t) {
			let n = this.gos.get("multiSortKey") === "ctrl" ? t.ctrlKey || t.metaKey : t.shiftKey;
			this.progressSort(e, n, "uiColumnSorted");
		}
		setSortForColumn(e, t, n, r) {
			let { gos: i, showRowGroupCols: a } = this.beans, o = rr(i), s = [e];
			if (o && e.getColDef().showRowGroup) {
				let t = (a?.getSourceColumnsForGroupColumn?.(e))?.filter((e) => e.isSortable());
				t && (s = [e, ...t]);
			}
			for (let e of s) this.setColSort(e, t, r);
			let c = (n || i.get("alwaysMultiSort")) && !i.get("suppressMultiSort"), l = [];
			if (!c) {
				let e = this.clearSortBarTheseColumns(s, r);
				l.push(...e);
			}
			this.updateSortIndex(e), l.push(...s), this.dispatchSortChangedEvents(r, l);
		}
		updateSortIndex(e) {
			let { gos: t, colModel: n, showRowGroupCols: r } = this.beans, i = rr(t), a = r?.getShowRowGroupCol(e.getId()), o = i && a || e, s = this.getColumnsWithSortingOrdered();
			n.forAllCols((e) => this.setColSortIndex(e, null));
			let c = s.filter((e) => i && e.getColDef().showRowGroup ? !1 : e !== o);
			(o.getSortDef() ? [...c, o] : c).forEach((e, t) => this.setColSortIndex(e, t));
		}
		onSortChanged(e, t) {
			this.dispatchSortChangedEvents(e, t);
		}
		isSortActive() {
			let e = !1;
			return this.beans.colModel.forAllCols((t) => {
				if (t.getSortDef()) return e = !0, !0;
			}), e;
		}
		dispatchSortChangedEvents(e, t) {
			let n = {
				type: "sortChanged",
				source: e
			};
			t && (n.columns = t), this.eventSvc.dispatchEvent(n);
		}
		clearSortBarTheseColumns(e, t) {
			let n = [];
			return this.beans.colModel.forAllCols((r) => {
				e.includes(r) || (r.getSortDef() && n.push(r), this.setColSort(r, void 0, t));
			}), n;
		}
		getNextSortDirection(e, t) {
			let n = e.getSortingOrder(), r = t === void 0 ? e.getSortDef() : Or(t), i = n.findIndex((e) => Mr(e, r)) + 1;
			return i >= n.length && (i = 0), Or(n[i]);
		}
		getIndexedSortMap() {
			let { gos: e, colModel: t, showRowGroupCols: n, rowGroupColsSvc: r } = this.beans, i = [];
			if (t.forAllCols((e) => {
				e.getSortDef() && i.push(e);
			}), t.isPivotMode()) {
				let t = rr(e);
				i = i.filter((e) => {
					let r = !!e.getAggFunc(), i = !e.isPrimary(), a = t ? n?.getShowRowGroupCol(e.getId()) : e.getColDef().showRowGroup;
					return r || i || a;
				});
			}
			let a = r?.columns.filter((e) => !!e.getSortDef()) ?? [], o = {};
			i.forEach((e, t) => o[e.getId()] = t), i.sort((e, t) => {
				let n = e.getSortIndex(), r = t.getSortIndex();
				return n != null && r != null ? n - r : n == null && r == null ? o[e.getId()] > o[t.getId()] ? 1 : -1 : r == null ? -1 : 1;
			});
			let s = rr(e) && !!a.length;
			s && (i = [...new Set(i.map((e) => n?.getShowRowGroupCol(e.getId()) ?? e))]);
			let c = /* @__PURE__ */ new Map();
			if (i.forEach((e, t) => c.set(e, t)), s) for (let e of a) {
				let t = n.getShowRowGroupCol(e.getId());
				c.set(e, c.get(t));
			}
			return c;
		}
		getColumnsWithSortingOrdered() {
			return [...this.getIndexedSortMap().entries()].sort(([, e], [, t]) => e - t).map(([e]) => e);
		}
		collectSortItems(e = !1) {
			let t = [], n = this.getColumnsWithSortingOrdered();
			for (let r of n) {
				let n = r.getSortDef()?.direction;
				if (!n) continue;
				let i = {
					sort: n,
					type: Pr(r.getSortDef()?.type)
				};
				e ? i.colId = r.getId() : i.column = r, t.push(i);
			}
			return t;
		}
		getSortModel() {
			return this.collectSortItems(!0);
		}
		getSortOptions() {
			return this.collectSortItems();
		}
		canColumnDisplayMixedSort(e) {
			let t = rr(this.gos), n = !!e.getColDef().showRowGroup;
			return t && n;
		}
		getDisplaySortForColumn(e) {
			let t = this.beans.showRowGroupCols?.getSourceColumnsForGroupColumn(e);
			if (!this.canColumnDisplayMixedSort(e) || !t?.length) return e.getSortDef();
			let n = e.getColDef().field != null || e.getColDef().valueGetter ? [e, ...t] : t, r = n[0].getSortDef();
			return n.every((e) => Mr(e.getSortDef(), r)) ? r : {
				type: Pr(e.getSortDef()?.type),
				direction: "mixed"
			};
		}
		getDisplaySortIndexForColumn(e) {
			return this.getIndexedSortMap().get(e);
		}
		setupHeader(e, t) {
			let n = () => {
				let { type: n, direction: r } = Or(t.getSortDef());
				if (e.toggleCss("ag-header-cell-sorted-asc", r === "asc"), e.toggleCss("ag-header-cell-sorted-desc", r === "desc"), e.toggleCss("ag-header-cell-sorted-abs-asc", n === "absolute" && r === "asc"), e.toggleCss("ag-header-cell-sorted-abs-desc", n === "absolute" && r === "desc"), e.toggleCss("ag-header-cell-sorted-none", !r), t.getColDef().showRowGroup) {
					let n = !(this.beans.showRowGroupCols?.getSourceColumnsForGroupColumn(t))?.every((e) => r == e.getSortDef()?.direction);
					e.toggleCss("ag-header-cell-sorted-mixed", n);
				}
			};
			e.addManagedEventListeners({
				sortChanged: n,
				columnPinned: n,
				columnRowGroupChanged: n,
				displayedColumnsChanged: n
			});
		}
		initCol(e) {
			let { sortIndex: t, initialSortIndex: n } = e.colDef, r = ui(e.colDef);
			r && e.setSortDef(r, !0), t === void 0 ? n !== null && (e.sortIndex = n) : t !== null && (e.sortIndex = t);
		}
		updateColSort(e, t, n) {
			t !== void 0 && this.setColSort(e, Or(t), n);
		}
		setColSort(e, t, n) {
			Mr(e.getSortDef(), t) || (e.setSortDef(Or(t), t === void 0), e.dispatchColEvent("sortChanged", n)), e.dispatchStateUpdatedEvent("sort");
		}
		setColSortIndex(e, t) {
			e.sortIndex = t, e.dispatchStateUpdatedEvent("sortIndex");
		}
		createSortIndicator(e) {
			return new Qm(e);
		}
		getSortIndicatorSelector() {
			return $m;
		}
	}, Km],
	apiFunctions: { onSortChanged: Ym },
	userComponents: { agSortIndicator: Qm },
	icons: {
		sortAscending: "asc",
		sortDescending: "desc",
		sortUnSort: "none",
		sortAbsoluteAscending: "aasc",
		sortAbsoluteDescending: "adesc"
	}
}, th = class extends H {
	constructor() {
		super(...arguments), this.beanName = "syncSvc", this.waitingForColumns = !1;
	}
	postConstruct() {
		this.addManagedPropertyListener("columnDefs", (e) => this.setColumnDefs(e));
	}
	start() {
		this.beans.ctrlsSvc.whenReady(this, () => {
			let e = this.gos.get("columnDefs");
			e ? this.setColumnsAndData(e) : this.waitingForColumns = !0, this.gridReady();
		});
	}
	setColumnsAndData(e) {
		let { colModel: t, rowModel: n } = this.beans;
		t.setColumnDefs(e ?? [], "gridInitializing"), n.start();
	}
	gridReady() {
		let { eventSvc: e, gos: t } = this;
		e.dispatchEvent({ type: "gridReady" }), $t(t, `initialised successfully, enterprise = ${t.isModuleRegistered("EnterpriseCore")}`);
	}
	setColumnDefs(e) {
		let t = this.gos.get("columnDefs");
		if (t) {
			if (this.waitingForColumns) {
				this.waitingForColumns = !1, this.setColumnsAndData(t);
				return;
			}
			this.beans.colModel.setColumnDefs(t, si(e.source));
		}
	}
}, nh = "paste", rh = class extends H {
	constructor() {
		super(...arguments), this.beanName = "changeDetectionSvc", this.deferredDepth = 0, this.batchedPath = null, this.batchedNodes = null;
	}
	destroy() {
		super.destroy(), this.batchedPath = null, this.batchedNodes = null;
	}
	postConstruct() {
		this.csrm = Na(this.beans), this.addManagedEventListeners({ cellValueChanged: this.onCellValueChanged.bind(this) });
	}
	beginDeferred() {
		this.deferredDepth++;
	}
	endDeferred() {
		if (this.deferredDepth === 0 || --this.deferredDepth > 0) return;
		let e = this.batchedPath, t = this.batchedNodes;
		this.batchedPath = null, this.batchedNodes = null, e && this.csrm?.doAggregate(e);
		let { rowRenderer: n } = this.beans;
		if (t) for (let e of t) ih(n, e);
		if (e) {
			let t = e.getSortedRows();
			for (let e = 0, r = t.length; e < r; ++e) ih(n, t[e]);
		}
		(this.batchedPath || this.batchedNodes) && (this.deferredDepth = 1, this.endDeferred());
	}
	onCellValueChanged(e) {
		let { gos: t, rowModel: n, changedPathFactory: r } = this.beans;
		if (e.source === nh || t.get("suppressChangeDetection") || !n.rootNode) return;
		let i = e.node.primaryRow;
		if (this.csrm) {
			let n = this.batchedPath;
			n || (n = r?.newPath(t.get("aggregateOnlyChangedColumns")) ?? null, this.batchedPath = n);
			let a = i;
			i.group || ((this.batchedNodes ??= /* @__PURE__ */ new Set()).add(i), a = i.parent), n?.addCell(a, e.column.getColId());
		} else (this.batchedNodes ??= /* @__PURE__ */ new Set()).add(i);
		this.deferredDepth === 0 && (this.deferredDepth = 1, this.endDeferred());
	}
}, ih = (e, t) => {
	let { sibling: n, pinnedSibling: r } = t;
	e.refreshRowByNode(t), e.refreshRowByNode(n), e.refreshRowByNode(r), e.refreshRowByNode(n?.pinnedSibling), e.refreshRowByNode(r?.sibling);
}, ah = {
	moduleName: "CommunityCore",
	version: U,
	beans: [
		Hf,
		rc,
		Ku,
		Ci,
		Bm,
		Hl,
		Ff,
		Qf,
		eu,
		am,
		im,
		Hm,
		class extends H {
			constructor() {
				super(...arguments), this.beanName = "valueSvc", this.initialised = !1, this.isSsrm = !1;
			}
			wireBeans(e) {
				this.expressionSvc = e.expressionSvc, this.colModel = e.colModel, this.valueCache = e.valueCache, this.dataTypeSvc = e.dataTypeSvc, this.editSvc = e.editSvc, this.formulaDataSvc = e.formulaDataSvc, this.rowGroupColsSvc = e.rowGroupColsSvc;
			}
			postConstruct() {
				this.initialised || this.init();
			}
			init() {
				let { gos: e, valueCache: t } = this;
				this.executeValueGetter = t ? this.executeValueGetterWithValueCache.bind(this) : this.executeValueGetterWithoutValueCache.bind(this), this.isSsrm = Wn(e), this.cellExpressions = e.get("enableCellExpressions"), this.isTreeData = e.get("treeData"), this.initialised = !0;
				let n = (e) => this.callColumnCellValueChangedHandler(e);
				this.eventSvc.addListener("cellValueChanged", n, !0), this.addDestroyFunc(() => this.eventSvc.removeListener("cellValueChanged", n, !0)), this.addManagedPropertyListener("treeData", (e) => this.isTreeData = e.currentValue);
			}
			getValueForDisplay(e) {
				let t = this.beans, n = e.column, r = e.node, i = t.showRowGroupColValueSvc, a = !n && r.group, o = n?.colDef.showRowGroup, s = !this.isTreeData || r.footer;
				if (i && s && (a || o)) {
					let t = i.getGroupValue(r, n, this.displayIgnoresAggData(r));
					return t == null ? {
						value: null,
						valueFormatted: null
					} : {
						value: t.value,
						valueFormatted: e.includeValueFormatted ? i.formatAndPrefixGroupColValue(t, n, e.exporting) : null
					};
				}
				if (!n) return {
					value: r.key,
					valueFormatted: null
				};
				let c = this.getValue(n, r, e.from, this.displayIgnoresAggData(r)), l = c, u = t.formula;
				n.isAllowFormula() && u?.isFormula(c) && (e.useRawFormula ? (c = u.normaliseFormula(c, !0), l = u.resolveValue(n, r)) : (c = u.resolveValue(n, r), l = c));
				let d = e.includeValueFormatted && !(e.exporting && n.colDef.useValueFormatterForExport === !1);
				return {
					value: c,
					valueFormatted: d ? this.formatValue(n, r, l) : null
				};
			}
			getValue(e, t, n, r = !1) {
				if (this.initialised || this.init(), !t) return;
				let i = e.colDef, a = t.group;
				if (!a) {
					let t = i.pivotValueColumn;
					t && (e = t);
				}
				let o = this.editSvc?.getPendingEditValue(t, e, n);
				if (o !== void 0) return o;
				let s = this.resolveValue(e, t, r, a);
				if (s === void 0) {
					if (a) {
						let e = i.showRowGroup;
						if (typeof e == "string") {
							let n = this.rowGroupColsSvc?.getColumnIndex(e);
							if (n != null && n > t.level) return null;
						}
					}
					return;
				}
				if (this.cellExpressions && de(s)) {
					let n = s.substring(1);
					s = this.executeValueGetter(n, t.data, e, t);
				}
				return s;
			}
			displayIgnoresAggData(e) {
				return !e.group || e.footer || e.level === -1 || !e.sibling || this.gos.get("groupSuppressBlankHeader") || e.leafGroup && this.colModel.isPivotMode() ? !1 : !!e.expanded;
			}
			resolveValue(e, t, n, r) {
				let i = e.colDef, a = e.colId, o = !r && this.formulaDataSvc;
				if (o && o.hasDataSource() && i.allowFormula === !0) {
					let n = o.getFormula({
						column: e,
						rowNode: t
					});
					if (de(n)) return n;
				}
				let s = r && !n ? t.aggData : void 0, c = this.isTreeData;
				if (c && s?.[a] !== void 0) return s[a];
				let l = t.data, u = i.field, d = i.valueGetter;
				if (c) {
					if (d) return this.executeValueGetter(d, l, e, t);
					if (u && l) return wu(l, u, e.isFieldContainsDots());
				}
				let f = t.groupData;
				if (f && a in f) return f[a];
				if (s?.[a] !== void 0) return s[a];
				let p = i.showRowGroup, m = typeof p != "string" || !r, h = this.isSsrm, g = h && n && !!i.aggFunc;
				if (d && !g) return m ? this.executeValueGetter(d, l, e, t) : void 0;
				if (h && t.footer && t.field && (p === !0 || p === t.field)) return wu(l, t.field, e.isFieldContainsDots());
				if (u && l && !g) return m ? wu(l, u, e.isFieldContainsDots()) : void 0;
			}
			parseValue(e, t, n, r) {
				let i = e.getColDef();
				if (i.allowFormula && this.beans.formula?.isFormula(n)) return n;
				let a = i.valueParser;
				if (I(a)) {
					let o = K(this.gos, {
						node: t,
						data: t?.data,
						oldValue: r,
						newValue: n,
						colDef: i,
						column: e
					});
					return typeof a == "function" ? a(o) : this.expressionSvc?.evaluate(a, o);
				}
				return n;
			}
			getDeleteValue(e, t) {
				return I(e.getColDef().valueParser) ? this.parseValue(e, t, "", this.getValueForDisplay({
					column: e,
					node: t,
					from: "edit"
				}).value) ?? null : null;
			}
			formatValue(e, t, n, r, i = !0) {
				let { expressionSvc: a } = this.beans, o = null, s, c = e.getColDef();
				if (r ? s = r : i && (s = c.valueFormatter), s) {
					let r = t ? t.data : null, i = K(this.gos, {
						value: n,
						node: t,
						data: r,
						colDef: c,
						column: e
					});
					o = typeof s == "function" ? s(i) : a ? a.evaluate(s, i) : null;
				} else if (c.refData) return c.refData[n] || "";
				return o == null && Array.isArray(n) && (o = n.join(", ")), o;
			}
			setValue(e, t, n, r) {
				let i = t.getColDef();
				if (!e.data && this.canCreateRowNodeData(e, i) && (e.data = {}), !this.isSetValueSupported(t, e, n, i)) return !1;
				let a = this.getValue(t, e, "data"), o = K(this.gos, {
					node: e,
					data: e.data,
					oldValue: a,
					newValue: n,
					colDef: i,
					column: t
				}), s = !1;
				if (e.data) {
					let a = this.handleExternalFormulaChange({
						column: t,
						eventSource: r,
						newValue: n,
						setterParams: o,
						rowNode: e
					});
					if (a !== null) return a;
					s = this.computeValueChange({
						column: t,
						rowNode: e,
						newValue: n,
						params: o,
						rowData: e.data,
						valueSetter: i.valueSetter,
						field: i.field
					}) ?? !0;
				}
				let c = this.beans.changeDetectionSvc;
				c?.beginDeferred();
				try {
					if (e.group) {
						let i = this.beans.rowGroupingEditValueSvc?.setGroupDataValue(e, t, n, a, r, s || n !== a);
						if (i !== void 0) return !s && !i ? !1 : this.finishValueChange(e, t, o, r, n);
					}
					return s ? this.finishValueChange(e, t, o, r) : !1;
				} finally {
					c?.endDeferred();
				}
			}
			canCreateRowNodeData(e, t) {
				return e.group ? !(t.groupRowValueSetter != null || t.groupRowEditable != null || t.pivotValueColumn) : !0;
			}
			finishValueChange(e, t, n, r, i) {
				e.resetQuickFilterAggregateText(), this.valueCache?.onDataChanged();
				let a = i === void 0 ? this.getValue(t, e, "data") : i;
				return this.dispatchCellValueChangedEvent(e, n, a, r), e.pinnedSibling && this.dispatchCellValueChangedEvent(e.pinnedSibling, n, a, r), !0;
			}
			isSetValueSupported(e, t, n, r) {
				let { field: i, valueSetter: a } = r, o = this.beans.formula, s = e.isAllowFormula() && o?.isFormula(n), c = !!this.formulaDataSvc?.hasDataSource();
				return L(i) && L(a) && !(c && s) ? t.group && (r.groupRowValueSetter || r.groupRowEditable) ? !0 : (W(17), !1) : this.dataTypeSvc && !this.dataTypeSvc.checkType(e, n) ? (W(135), !1) : !0;
			}
			handleExternalFormulaChange(e) {
				let { column: t, rowNode: n, newValue: r, eventSource: i, setterParams: a } = e, o = this.beans.formula, s = this.formulaDataSvc;
				if (!s?.hasDataSource() || !t.isAllowFormula()) return null;
				let c = o?.isFormula(r), l = s.getFormula({
					column: t,
					rowNode: n
				});
				if (c) {
					if (l === r) return !1;
					s.setFormula({
						column: t,
						rowNode: n,
						formula: r
					});
					let e = o?.resolveValue(t, n), c = t.getColDef();
					if (I(c.valueSetter) || !L(c.field)) {
						let r = {
							...a,
							newValue: e
						};
						this.computeValueChange({
							column: t,
							rowNode: n,
							newValue: e,
							params: r,
							rowData: n.data,
							valueSetter: c.valueSetter,
							field: c.field
						});
					}
					return this.finishValueChange(n, t, a, i);
				}
				return l !== void 0 && s.setFormula({
					column: t,
					rowNode: n,
					formula: void 0
				}), null;
			}
			computeValueChange(e) {
				let { valueSetter: t, params: n, rowData: r, field: i, column: a, newValue: o } = e;
				return I(t) ? typeof t == "function" ? t(n) : this.expressionSvc?.evaluate(t, n) : !!r && this.setValueUsingField(r, i, o, a.isFieldContainsDots());
			}
			dispatchCellValueChangedEvent(e, t, n, r) {
				this.eventSvc.dispatchEvent({
					type: "cellValueChanged",
					event: null,
					rowIndex: e.rowIndex,
					rowPinned: e.rowPinned,
					column: t.column,
					colDef: t.colDef,
					data: e.data,
					node: e,
					oldValue: t.oldValue,
					newValue: n,
					newRawValue: t.newValue,
					value: n,
					source: r
				});
			}
			callColumnCellValueChangedHandler(e) {
				let t = e.colDef.onCellValueChanged;
				typeof t == "function" && this.beans.frameworkOverrides.wrapOutgoing(() => {
					t(e);
				});
			}
			setValueUsingField(e, t, n, r) {
				if (!t) return !1;
				let i = !1;
				if (!r) i = e[t] === n, i || (e[t] = n);
				else {
					let r = t.split("."), a = e;
					for (; r.length > 0 && a;) {
						let e = r.shift();
						r.length === 0 ? (i = a[e] === n, i || (a[e] = n)) : a = a[e];
					}
				}
				return !i;
			}
			executeValueGetterWithValueCache(e, t, n, r) {
				let i = n.getColId(), a = this.valueCache.getValue(r, i);
				if (a !== void 0) return a;
				let o = this.executeValueGetterWithoutValueCache(e, t, n, r);
				return this.valueCache.setValue(r, i, o), o;
			}
			executeValueGetterWithoutValueCache(e, t, n, r) {
				let i = K(this.gos, {
					data: t,
					node: r,
					column: n,
					colDef: n.getColDef(),
					getValue: (e) => this.getValueCallback(r, e)
				}), a;
				return a = typeof e == "function" ? e(i) : this.expressionSvc?.evaluate(e, i), a;
			}
			getValueCallback(e, t) {
				let n = this.colModel.getColDefCol(t);
				return n ? this.getValue(n, e, "data") : null;
			}
			getKeyForNode(e, t) {
				let n = this.getValue(e, t, "data"), r = e.getColDef().keyCreator, i = n;
				return r && (i = r(K(this.gos, {
					value: n,
					colDef: e.getColDef(),
					column: e,
					node: t,
					data: t.data
				}))), typeof i == "string" || i == null ? i : (i = String(i), i === "[object Object]" && W(121), i);
			}
		},
		Bf,
		Nf,
		Vf,
		Ju,
		th,
		Bu,
		Vu,
		lp
	],
	icons: {
		selectOpen: "small-down",
		smallDown: "small-down",
		colorPicker: "color-picker",
		smallUp: "small-up",
		checkboxChecked: "small-up",
		checkboxIndeterminate: "checkbox-indeterminate",
		checkboxUnchecked: "checkbox-unchecked",
		radioButtonOn: "radio-button-on",
		radioButtonOff: "radio-button-off",
		smallLeft: "small-left",
		smallRight: "small-right"
	},
	apiFunctions: {
		getGridId: ic,
		destroy: ac,
		isDestroyed: oc,
		getGridOption: sc,
		setGridOption: cc,
		updateGridOptions: lc,
		isModuleRegistered: uc
	},
	dependsOn: [
		Ru,
		ml,
		El,
		eh,
		op,
		Gl,
		sp,
		zm,
		{
			moduleName: "ChangeDetection",
			version: U,
			beans: [rh]
		},
		cp,
		rm,
		cm,
		um,
		dp,
		Uu,
		zu,
		{
			moduleName: "Expression",
			version: U,
			beans: [class extends H {
				constructor() {
					super(...arguments), this.beanName = "expressionSvc", this.cache = {};
				}
				evaluate(e, t) {
					if (typeof e == "string") return this.evaluateExpression(e, t);
					Rn(15, { expression: e });
				}
				evaluateExpression(e, t) {
					try {
						return this.createExpressionFunction(e)(t.value, t.context, t.oldValue, t.newValue, t.value, t.node, t.data, t.colDef, t.rowIndex, t.api, t.getValue, t.column, t.columnGroup);
					} catch (n) {
						return Rn(16, {
							expression: e,
							params: t,
							e: n
						}), null;
					}
				}
				createExpressionFunction(e) {
					let t = this.cache;
					if (t[e]) return t[e];
					let n = this.createFunctionBody(e), r = Function("x, ctx, oldValue, newValue, value, node, data, colDef, rowIndex, api, getValue, column, columnGroup", n);
					return t[e] = r, r;
				}
				createFunctionBody(e) {
					return e.includes("return") ? e : "return " + e + ";";
				}
			}]
		},
		pu,
		pm
	]
}, oh = [
	"TextFilter",
	"NumberFilter",
	"BigIntFilter",
	"DateFilter",
	"SetFilter",
	"MultiFilter",
	"GroupFilter",
	"CustomFilter"
];
[...oh], [...oh];
var sh = () => "No AG Grid modules are registered! It is recommended to start with all Community features via the AllCommunityModule:\n                    \n    import { ModuleRegistry, AllCommunityModule } from 'ag-grid-community';\n    \n    ModuleRegistry.registerModules([ AllCommunityModule ]);\n    ";
function ch({ moduleName: e, rowModelType: t }) {
	return `To use the ${e}Module you must set the gridOption "rowModelType='${t}'"`;
}
var lh = class {
	constructor(e = "javascript") {
		this.frameworkName = e, this.renderingEngine = "vanilla", this.batchFrameworkComps = !1, this.wrapIncoming = (e) => e(), this.wrapOutgoing = (e) => e(), this.baseDocLink = `${Qt}/${this.frameworkName}-data-grid`, kn(this.baseDocLink);
	}
	frameworkComponent(e) {
		return null;
	}
	isFrameworkComponent(e) {
		return !1;
	}
	getDocLink(e) {
		return this.baseDocLink + (e ? "/" + e : "");
	}
}, uh = /* @__PURE__ */ new WeakMap(), dh = /* @__PURE__ */ new WeakMap(), fh = 1, ph = class {
	create(e, t, n, r, i, a) {
		let o = Yt.applyGlobalGridOptions(t), s = o.gridId ?? String(fh++), c = this.getRegisteredModules(i, s, o.rowModelType), l = this.createBeansList(o.rowModelType, c, s), u = this.createProvidedBeans(e, o, i);
		if (!l) return;
		let d = new Ba({
			providedBeanInstances: u,
			beanClasses: l,
			id: s,
			beanInitComparator: Ua,
			beanDestroyComparator: Wa,
			derivedBeans: [Va],
			destroyCallback: () => {
				dh.delete(f), uh.delete(e), hn(s), a?.();
			}
		});
		this.registerModuleFeatures(d, c), n(d), d.getBean("syncSvc").start(), r?.(d);
		let f = d.getBean("gridApi");
		return uh.set(e, f), dh.set(f, e), f;
	}
	getRegisteredModules(e, t, n) {
		return mn(ah, void 0, !0), e?.modules?.forEach((e) => mn(e, t)), vn(t, mh(n));
	}
	registerModuleFeatures(e, t) {
		let n = e.getBean("registry"), r = e.getBean("apiFunctionSvc");
		for (let e of t) {
			n.registerModule(e);
			let t = e.apiFunctions;
			if (t) {
				let e = Object.keys(t);
				for (let n of e) r?.addFunction(n, t[n]);
			}
		}
	}
	createProvidedBeans(e, t, n) {
		let r = n ? n.frameworkOverrides : null;
		L(r) && (r = new lh());
		let i = {
			gridOptions: t,
			eGridDiv: e,
			eRootDiv: e,
			globalListener: n ? n.globalListener : null,
			globalSyncListener: n ? n.globalSyncListener : null,
			frameworkOverrides: r,
			withinStudio: n?.withinStudio
		};
		return n?.providedBeanInstances && Object.assign(i, n.providedBeanInstances), i;
	}
	createBeansList(e, t, n) {
		let r = {
			clientSide: "ClientSideRowModel",
			infinite: "InfiniteRowModel",
			serverSide: "ServerSideRowModel",
			viewport: "ViewportRowModel"
		}, i = mh(e), a = r[i];
		if (!a) {
			zn(201, { rowModelType: i }, `Unknown rowModelType ${i}.`);
			return;
		}
		if (!xn()) {
			zn(272, void 0, sh());
			return;
		}
		if (!e) {
			let e = Object.entries(r).filter(([e, t]) => gn(t, n, e));
			if (e.length == 1) {
				let [t, n] = e[0];
				if (t !== i) {
					let e = {
						moduleName: n,
						rowModelType: t
					};
					zn(275, e, ch(e));
					return;
				}
			}
		}
		if (!gn(a, n, i)) {
			let e = Sn(), t = `rowModelType = '${i}'`, r = e ? `Unable to use ${t} as that requires the ag-grid-enterprise script to be included.
` : `Missing module ${a}Module for rowModelType ${i}.`;
			zn(200, {
				reasonOrId: t,
				moduleName: a,
				gridScoped: _n(),
				gridId: n,
				rowModelType: i,
				isUmd: e
			}, r);
			return;
		}
		let o = /* @__PURE__ */ new Set();
		for (let e of t) for (let t of e.beans ?? []) o.add(t);
		return Array.from(o);
	}
};
function mh(e) {
	return e ?? "clientSide";
}
new Set(Object.keys({
	paste: "api",
	rangeSvc: "api",
	fillHandle: "api",
	cellClear: "api",
	bulk: "api"
})), new Set(Object.values({
	agSetColumnFilter: "agSetColumnFilterHandler",
	agMultiColumnFilter: "agMultiColumnFilterHandler",
	agGroupColumnFilter: "agGroupColumnFilterHandler",
	agNumberColumnFilter: "agNumberColumnFilterHandler",
	agBigIntColumnFilter: "agBigIntColumnFilterHandler",
	agDateColumnFilter: "agDateColumnFilterHandler",
	agTextColumnFilter: "agTextColumnFilterHandler"
}));
var hh = class {
	wrap(e, t, n, r) {
		let i = this.createWrapper(e, r);
		for (let e of t ?? []) this.createMethod(i, e, !0);
		for (let e of n ?? []) this.createMethod(i, e, !1);
		return i;
	}
	createMethod(e, t, n) {
		e.addMethod(t, this.createMethodProxy(e, t, n));
	}
	createMethodProxy(e, t, n) {
		return function() {
			return e.hasMethod(t) ? e.callMethod(t, arguments) : (n && W(49, { methodName: t }), null);
		};
	}
}, gh = class extends Js {
	constructor(e) {
		super(e, ja);
	}
}, $ = c.createContext({}), _h = c.createContext("default"), vh = (e, t, n, r) => {
	if (!e || e.componentFromFramework || t.isDestroyed()) return;
	let i = e.newAgStackInstance(), a, o, s = !1;
	return i.then((e) => {
		if (s) {
			t.destroyBean(e);
			return;
		}
		a = e, o = a.getGui(), n.appendChild(o), yh(r, a);
	}), () => {
		s = !0, a && (o?.remove(), t.destroyBean(a), r && yh(r, void 0));
	};
}, yh = (e, t) => {
	if (e) if (e instanceof Function) e(t);
	else {
		let n = e;
		n.current = t;
	}
}, bh = (...e) => e.filter((e) => e != null && e !== "").join(" "), xh = class e {
	constructor(...e) {
		this.classesMap = {};
		for (let t of e) this.classesMap[t] = !0;
	}
	setClass(t, n) {
		if (!!this.classesMap[t] == n) return this;
		let r = new e();
		return r.classesMap = { ...this.classesMap }, r.classesMap[t] = n, r;
	}
	toString() {
		return Object.keys(this.classesMap).filter((e) => this.classesMap[e]).join(" ");
	}
}, Sh = (e) => typeof e == "function" && !(e.prototype && e.prototype.isReactComponent) || typeof e == "object" && e.$$typeof === (typeof Symbol == "function" && Symbol.for ? Symbol.for("react.memo") : 60115), Ch = c.version?.split(".")[0], wh = Ch === "16" || Ch === "17";
function Th() {
	return Ch === "19";
}
var Eh = !1;
function Dh(e) {
	return Eh || setTimeout(() => Eh = !1, 0), Eh = !0, e();
}
var Oh = (e, t) => {
	!wh && e && !Eh ? w.flushSync(t) : t();
}, kh = (e) => {
	wh ? e() : c.startTransition(e);
};
function Ah(e, t, n) {
	return c.useSyncExternalStore ? c.useSyncExternalStore(e, t) : n;
}
function jh(e, t, n) {
	if (t == null || e == null) return t;
	if (e === t || t.length === 0 && e.length === 0) return e;
	if (n || e.length === 0 && t.length > 0 || e.length > 0 && t.length === 0) return t;
	let r = [], i = [], a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
	for (let e = 0; e < t.length; e++) {
		let n = t[e];
		o.set(n.instanceId, n);
	}
	for (let t = 0; t < e.length; t++) {
		let n = e[t];
		a.set(n.instanceId, n), o.has(n.instanceId) && r.push(n);
	}
	for (let e = 0; e < t.length; e++) {
		let n = t[e], r = n.instanceId;
		a.has(r) || i.push(n);
	}
	return r.length === e.length && i.length === 0 ? e : r.length === 0 && i.length === t.length ? t : r.length === 0 ? i : i.length === 0 ? r : [...r, ...i];
}
var Mh = p((e, t) => {
	let { registry: n, context: r } = g($), i = x(null), a = x(null), o = x(null), s = x(null), l = x(null), u = x(), [d, f] = S(), [p, m] = S(), [_, C] = S(), [w, T] = S(() => new xh()), [E, D] = S(() => new xh("ag-hidden")), [ee, O] = S(() => new xh("ag-hidden")), [k, A] = S(() => new xh("ag-invisible"));
	v(t, () => ({ refresh() {
		return !1;
	} })), y(() => vh(d, r, a.current), [d]);
	let te = h((t) => {
		if (i.current = t, !t || r.isDestroyed()) {
			u.current = r.destroyBean(u.current);
			return;
		}
		let a = {
			setInnerRenderer: (e, t) => {
				f(e), C(t);
			},
			setChildCount: (e) => m(e),
			toggleCss: (e, t) => T((n) => n.setClass(e, t)),
			setContractedDisplayed: (e) => O((t) => t.setClass("ag-hidden", !e)),
			setExpandedDisplayed: (e) => D((t) => t.setClass("ag-hidden", !e)),
			setCheckboxVisible: (e) => A((t) => t.setClass("ag-invisible", !e)),
			setCheckboxSpacing: (e) => A((t) => t.setClass("ag-group-checkbox-spacing", e))
		}, c = n.createDynamicBean("groupCellRendererCtrl", !0);
		c && (u.current = r.createBean(c), u.current.init(a, t, o.current, s.current, l.current, Mh, e));
	}, []), ne = b(() => `ag-cell-wrapper ${w.toString()}`, [w]), j = b(() => `ag-group-expanded ${E.toString()}`, [E]), M = b(() => `ag-group-contracted ${ee.toString()}`, [ee]), N = b(() => `ag-group-checkbox ${k.toString()}`, [k]), P = d?.componentFromFramework, re = P ? d.componentClass : void 0, ie = d == null && _ != null, F = le(_);
	return /* @__PURE__ */ c.createElement("span", {
		className: ne,
		ref: te,
		...e.colDef ? {} : { role: u.current?.getCellAriaRole() }
	}, /* @__PURE__ */ c.createElement("span", {
		className: j,
		ref: s
	}), /* @__PURE__ */ c.createElement("span", {
		className: M,
		ref: l
	}), /* @__PURE__ */ c.createElement("span", {
		className: N,
		ref: o
	}), /* @__PURE__ */ c.createElement("span", {
		className: "ag-group-value",
		ref: a
	}, ie ? F : P ? /* @__PURE__ */ c.createElement(re, { ...d.params }) : null), /* @__PURE__ */ c.createElement("span", { className: "ag-group-child-count" }, p));
}), Nh = Mh, Ph = d({ setMethods: () => {} }), Fh = m((e) => {
	let { initialProps: t, addUpdateCallback: n, CustomComponentClass: r, setMethods: i } = e, [{ key: a, ...o }, s] = S(t);
	return _(() => {
		n((e) => s(e));
	}, []), /* @__PURE__ */ c.createElement(Ph.Provider, { value: { setMethods: i } }, /* @__PURE__ */ c.createElement(r, {
		key: a,
		...o
	}));
}), Ih = 0;
function Lh() {
	return `agPortalKey_${++Ih}`;
}
var Rh = class {
	constructor(e, t, n, r) {
		this.portal = null, this.oldPortal = null, this.reactComponent = e, this.portalManager = t, this.componentType = n, this.suppressFallbackMethods = !!r, this.statelessComponent = this.isStateless(this.reactComponent), this.key = Lh(), this.portalKey = Lh(), this.instanceCreated = this.isStatelessComponent() ? X.resolve(!1) : new X((e) => {
			this.resolveInstanceCreated = e;
		});
	}
	getGui() {
		return this.eParentElement;
	}
	getRootElement() {
		return this.eParentElement.firstChild;
	}
	destroy() {
		this.componentInstance && typeof this.componentInstance.destroy == "function" && this.componentInstance.destroy();
		let e = this.portal;
		e && this.portalManager.destroyPortal(e);
	}
	createParentElement(e) {
		let t = this.portalManager.getComponentWrappingElement(), n = document.createElement(t || "div");
		return n.classList.add("ag-react-container"), e.reactContainer = n, n;
	}
	statelessComponentRendered() {
		return this.eParentElement.childElementCount > 0 || this.eParentElement.childNodes.length > 0;
	}
	getFrameworkComponentInstance() {
		return this.componentInstance;
	}
	isStatelessComponent() {
		return this.statelessComponent;
	}
	getReactComponentName() {
		return this.reactComponent.name;
	}
	getMemoType() {
		return this.hasSymbol() ? Symbol.for("react.memo") : 60115;
	}
	hasSymbol() {
		return typeof Symbol == "function" && Symbol.for;
	}
	isStateless(e) {
		return typeof e == "function" && !(e.prototype && e.prototype.isReactComponent) || typeof e == "object" && e.$$typeof === this.getMemoType();
	}
	hasMethod(e) {
		let t = this.getFrameworkComponentInstance();
		return !!t && t[e] != null || this.fallbackMethodAvailable(e);
	}
	callMethod(e, t) {
		let n = this.getFrameworkComponentInstance();
		if (this.isStatelessComponent()) return this.fallbackMethod(e, t && t[0] ? t[0] : {});
		if (!n) {
			setTimeout(() => this.callMethod(e, t));
			return;
		}
		let r = n[e];
		if (r) return r.apply(n, t);
		if (this.fallbackMethodAvailable(e)) return this.fallbackMethod(e, t && t[0] ? t[0] : {});
	}
	addMethod(e, t) {
		this[e] = t;
	}
	init(e) {
		return this.eParentElement = this.createParentElement(e), this.createOrUpdatePortal(e), new X((e) => this.createReactComponent(e));
	}
	createOrUpdatePortal(e) {
		this.isStatelessComponent() || (this.ref = (e) => {
			this.componentInstance = e, this.resolveInstanceCreated?.(!0), this.resolveInstanceCreated = void 0;
		}, e.ref = this.ref), this.reactElement = this.createElement(this.reactComponent, {
			...e,
			key: this.key
		}), this.portal = T(this.reactElement, this.eParentElement, this.portalKey);
	}
	createElement(e, t) {
		return f(e, t);
	}
	createReactComponent(e) {
		this.portalManager.mountReactPortal(this.portal, this, e);
	}
	rendered() {
		return this.isStatelessComponent() && this.statelessComponentRendered() || !!(!this.isStatelessComponent() && this.getFrameworkComponentInstance());
	}
	refreshComponent(e) {
		this.oldPortal = this.portal, this.createOrUpdatePortal(e), this.portalManager.updateReactPortal(this.oldPortal, this.portal);
	}
	fallbackMethod(e, t) {
		let n = this[`${e}Component`];
		if (!this.suppressFallbackMethods && n) return n.bind(this)(t);
	}
	fallbackMethodAvailable(e) {
		return this.suppressFallbackMethods ? !1 : !!this[`${e}Component`];
	}
};
function zh(e, t, n) {
	for (let r of e) {
		let e = t[r];
		e && (n[r] = e);
	}
}
var Bh = class extends Rh {
	constructor() {
		super(...arguments), this.awaitUpdateCallback = new X((e) => {
			this.resolveUpdateCallback = e;
		}), this.wrapperComponent = Fh;
	}
	init(e) {
		return this.sourceParams = e, super.init(this.getProps());
	}
	addMethod() {}
	getInstance() {
		return this.instanceCreated.then(() => this.componentInstance);
	}
	getFrameworkComponentInstance() {
		return this;
	}
	createElement(e, t) {
		return super.createElement(this.wrapperComponent, {
			initialProps: t,
			CustomComponentClass: e,
			setMethods: (e) => this.setMethods(e),
			addUpdateCallback: (e) => {
				this.updateCallback = () => (e(this.getProps()), new X((e) => {
					setTimeout(() => {
						e();
					});
				})), this.resolveUpdateCallback();
			}
		});
	}
	setMethods(e) {
		this.providedMethods = e, zh(this.getOptionalMethods(), this.providedMethods, this);
	}
	getOptionalMethods() {
		return [];
	}
	getProps() {
		return {
			...this.sourceParams,
			key: this.key,
			ref: this.ref
		};
	}
	refreshProps() {
		return this.updateCallback ? this.updateCallback() : new X((e) => this.awaitUpdateCallback.then(() => {
			this.updateCallback().then(() => e());
		}));
	}
}, Vh = class extends Bh {
	refresh(e) {
		return this.sourceParams = e, this.refreshProps(), !0;
	}
}, Hh = class extends Bh {
	refresh(e) {
		this.sourceParams = e, this.refreshProps();
	}
}, Uh = class extends Bh {
	constructor() {
		super(...arguments), this.date = null, this.onDateChange = (e) => this.updateDate(e);
	}
	getDate() {
		return this.date;
	}
	setDate(e) {
		this.date = e, this.refreshProps();
	}
	refresh(e) {
		this.sourceParams = e, this.refreshProps();
	}
	getOptionalMethods() {
		return [
			"afterGuiAttached",
			"setInputPlaceholder",
			"setInputAriaLabel",
			"setDisabled"
		];
	}
	updateDate(e) {
		this.setDate(e), this.sourceParams.onDateChanged();
	}
	getProps() {
		let e = super.getProps();
		return e.date = this.date, e.onDateChange = this.onDateChange, delete e.onDateChanged, e;
	}
}, Wh = class extends Bh {
	constructor() {
		super(...arguments), this.label = "", this.icon = null, this.shake = !1;
	}
	setIcon(e, t) {
		this.icon = e, this.shake = t, this.refreshProps();
	}
	setLabel(e) {
		this.label = e, this.refreshProps();
	}
	getProps() {
		let e = super.getProps(), { label: t, icon: n, shake: r } = this;
		return e.label = t, e.icon = n, e.shake = r, e;
	}
}, Gh = class extends Bh {
	constructor() {
		super(...arguments), this.model = null, this.onModelChange = (e) => this.updateModel(e), this.onUiChange = () => this.sourceParams.filterModifiedCallback(), this.expectingNewMethods = !0, this.hasBeenActive = !1, this.awaitSetMethodsCallback = new X((e) => {
			this.resolveSetMethodsCallback = e;
		});
	}
	isFilterActive() {
		return this.model != null;
	}
	doesFilterPass(e) {
		return this.providedMethods.doesFilterPass(e);
	}
	getModel() {
		return this.model;
	}
	setModel(e) {
		return this.expectingNewMethods = !0, this.model = e, this.hasBeenActive ||= this.isFilterActive(), this.refreshProps();
	}
	refresh(e) {
		return this.sourceParams = e, this.refreshProps(), !0;
	}
	afterGuiAttached(e) {
		let t = this.providedMethods;
		t ? t.afterGuiAttached?.(e) : this.awaitSetMethodsCallback.then(() => this.providedMethods?.afterGuiAttached?.(e));
	}
	getOptionalMethods() {
		return [
			"afterGuiDetached",
			"onNewRowsLoaded",
			"getModelAsString",
			"onAnyFilterChanged"
		];
	}
	setMethods(e) {
		this.expectingNewMethods === !1 && this.hasBeenActive && this.providedMethods?.doesFilterPass !== e?.doesFilterPass && setTimeout(() => {
			this.sourceParams.filterChangedCallback();
		}), this.expectingNewMethods = !1, super.setMethods(e), this.resolveSetMethodsCallback(), this.resolveFilterPassCallback?.(), this.resolveFilterPassCallback = void 0;
	}
	updateModel(e) {
		this.resolveFilterPassCallback?.();
		let t = new X((e) => {
			this.resolveFilterPassCallback = e;
		});
		this.setModel(e).then(() => {
			t.then(() => {
				this.sourceParams.filterChangedCallback();
			});
		});
	}
	getProps() {
		let e = super.getProps();
		return e.model = this.model, e.onModelChange = this.onModelChange, e.onUiChange = this.onUiChange, delete e.filterChangedCallback, e;
	}
}, Kh = class extends Bh {
	constructor() {
		super(...arguments), this.awaitSetMethodsCallback = new X((e) => {
			this.resolveSetMethodsCallback = e;
		});
	}
	refresh(e) {
		return this.sourceParams = e, this.refreshProps(), !0;
	}
	afterGuiAttached(e) {
		let t = this.providedMethods;
		t ? t.afterGuiAttached?.(e) : this.awaitSetMethodsCallback.then(() => this.providedMethods?.afterGuiAttached?.(e));
	}
	getOptionalMethods() {
		return [
			"afterGuiDetached",
			"onNewRowsLoaded",
			"onAnyFilterChanged"
		];
	}
	setMethods(e) {
		super.setMethods(e), this.resolveSetMethodsCallback();
	}
};
function qh(e, t) {
	e.parentFilterInstance((n) => {
		(n.setModel(t) || X.resolve()).then(() => {
			e.filterParams.filterChangedCallback();
		});
	});
}
var Jh = class {
	constructor(e, t) {
		this.floatingFilterParams = e, this.refreshProps = t, this.model = null, this.onModelChange = (e) => this.updateModel(e);
	}
	getProps() {
		return {
			...this.floatingFilterParams,
			model: this.model,
			onModelChange: this.onModelChange
		};
	}
	onParentModelChanged(e) {
		this.model = e, this.refreshProps();
	}
	refresh(e) {
		this.floatingFilterParams = e, this.refreshProps();
	}
	setMethods(e) {
		zh(this.getOptionalMethods(), e, this);
	}
	getOptionalMethods() {
		return ["afterGuiAttached"];
	}
	updateModel(e) {
		this.model = e, this.refreshProps(), qh(this.floatingFilterParams, e);
	}
}, Yh = class extends Bh {
	constructor() {
		super(...arguments), this.model = null, this.onModelChange = (e) => this.updateModel(e);
	}
	onParentModelChanged(e) {
		this.model = e, this.refreshProps();
	}
	refresh(e) {
		this.sourceParams = e, this.refreshProps();
	}
	getOptionalMethods() {
		return ["afterGuiAttached"];
	}
	updateModel(e) {
		this.model = e, this.refreshProps(), qh(this.sourceParams, e);
	}
	getProps() {
		let e = super.getProps();
		return e.model = this.model, e.onModelChange = this.onModelChange, e;
	}
}, Xh = class extends Bh {
	refresh(e) {
		this.sourceParams = e, this.refreshProps();
	}
	getOptionalMethods() {
		return ["afterGuiAttached"];
	}
}, Zh = class extends Bh {
	refresh(e) {
		return this.sourceParams = e, this.refreshProps(), !0;
	}
}, Qh = class extends Bh {
	constructor() {
		super(...arguments), this.active = !1, this.expanded = !1, this.onActiveChange = (e) => this.updateActive(e);
	}
	setActive(e) {
		this.awaitSetActive(e);
	}
	setExpanded(e) {
		this.expanded = e, this.refreshProps();
	}
	getOptionalMethods() {
		return ["select", "configureDefaults"];
	}
	awaitSetActive(e) {
		return this.active = e, this.refreshProps();
	}
	updateActive(e) {
		let t = this.awaitSetActive(e);
		e && t.then(() => this.sourceParams.onItemActivated());
	}
	getProps() {
		let e = super.getProps();
		return e.active = this.active, e.expanded = this.expanded, e.onActiveChange = this.onActiveChange, delete e.onItemActivated, e;
	}
}, $h = class extends Bh {
	refresh(e) {
		return this.sourceParams = e, this.refreshProps(), !0;
	}
}, eg = class extends Bh {
	constructor() {
		super(...arguments), this.onStateChange = (e) => this.updateState(e);
	}
	refresh(e) {
		return this.sourceParams = e, this.refreshProps(), !0;
	}
	getState() {
		return this.state;
	}
	updateState(e) {
		this.state = e, this.refreshProps(), this.sourceParams.onStateUpdated();
	}
	getProps() {
		let e = super.getProps();
		return e.state = this.state, e.onStateChange = this.onStateChange, e;
	}
};
function tg() {
	W(231);
}
var ng = 1e3, rg = class {
	constructor(e, t, n) {
		this.destroyed = !1, this.portals = [], this.hasPendingPortalUpdate = !1, this.wrappingElement = t || "div", this.refresher = e, this.maxComponentCreationTimeMs = n || ng;
	}
	getPortals() {
		return this.portals;
	}
	destroy() {
		this.destroyed = !0;
	}
	destroyPortal(e) {
		this.portals = this.portals.filter((t) => t !== e), this.batchUpdate();
	}
	getComponentWrappingElement() {
		return this.wrappingElement;
	}
	mountReactPortal(e, t, n) {
		this.portals = [...this.portals, e], this.waitForInstance(t, n), this.batchUpdate();
	}
	updateReactPortal(e, t) {
		this.portals[this.portals.indexOf(e)] = t, this.batchUpdate();
	}
	batchUpdate() {
		this.hasPendingPortalUpdate ||= (setTimeout(() => {
			this.destroyed || (this.refresher(), this.hasPendingPortalUpdate = !1);
		}), !0);
	}
	waitForInstance(e, t, n = Date.now()) {
		if (this.destroyed) {
			t(null);
			return;
		}
		if (e.rendered()) t(e);
		else {
			if (Date.now() - n >= this.maxComponentCreationTimeMs && !this.hasPendingPortalUpdate) {
				Oh(!0, () => this.refresher()), e.rendered() && t(e);
				return;
			}
			window.setTimeout(() => {
				this.waitForInstance(e, t, n);
			});
		}
	}
}, ig = c.createContext([]), ag = c.createContext(void 0), og = m(({ ctrl: e }) => {
	let t = e.isAlive(), { context: n } = g($), [r, i] = S(), [a, o] = S(), s = x(), l = x(null), u = x(null), d = x(null), f = x(), p = x();
	t && !p.current && (p.current = new Ji(() => l.current));
	let m = h((t) => {
		if (l.current = t, !t || !e.isAlive() || n.isDestroyed()) {
			s.current = n.destroyBean(s.current);
			return;
		}
		s.current = n.createBean(new So());
		let r = () => {
			let t = e.getSelectAllGui();
			t && (u.current?.insertAdjacentElement("afterend", t), s.current.addDestroyFunc(() => t.remove()));
		}, a = {
			setWidth: (e) => {
				l.current && (l.current.style.width = e);
			},
			toggleCss: (e, t) => p.current.toggleCss(e, t),
			setUserStyles: (e) => o(e),
			setAriaSort: (e) => {
				l.current && (e ? ze(l.current, e) : Be(l.current));
			},
			setUserCompDetails: (e) => i(e),
			getUserCompInstance: () => f.current || void 0,
			refreshSelectAllGui: r,
			removeSelectAllGui: () => e.getSelectAllGui()?.remove()
		};
		e.setComp(a, t, u.current, d.current, s.current), r();
	}, []);
	y(() => vh(r, n, d.current, f), [r]), _(() => {
		e.setDragSource(l.current);
	}, [r]);
	let v = b(() => !!(r?.componentFromFramework && Sh(r.componentClass)), [r]), C = r?.componentFromFramework, w = r?.componentClass;
	return /* @__PURE__ */ c.createElement("div", {
		ref: m,
		style: a,
		className: "ag-header-cell",
		role: "columnheader"
	}, /* @__PURE__ */ c.createElement("div", {
		ref: u,
		className: "ag-header-cell-resize",
		role: "presentation"
	}), /* @__PURE__ */ c.createElement("div", {
		ref: d,
		className: "ag-header-cell-comp-wrapper",
		role: "presentation"
	}, C ? v ? /* @__PURE__ */ c.createElement(w, { ...r.params }) : /* @__PURE__ */ c.createElement(w, {
		...r.params,
		ref: f
	}) : null));
}), sg = class {
	constructor(e, t) {
		this.floatingFilterParams = e, this.refreshProps = t;
	}
	getProps() {
		return this.floatingFilterParams;
	}
	refresh(e) {
		this.floatingFilterParams = e, this.refreshProps();
	}
	setMethods(e) {
		zh(this.getOptionalMethods(), e, this);
	}
	getOptionalMethods() {
		return ["afterGuiAttached"];
	}
}, cg = m(({ ctrl: e }) => {
	let { context: t, gos: n } = g($), [r, i] = S(), [a, o] = S(() => new xh("ag-header-cell", "ag-floating-filter")), [s, l] = S(() => new xh()), [u, d] = S(() => new xh("ag-floating-filter-button", "ag-hidden")), [f, p] = S("false"), [m, v] = S(), [, C] = S(1), w = x(), T = x(null), E = x(null), D = x(null), ee = x(null), O = x(), k = x(), A = (e) => {
		e != null && O.current?.(e);
	}, te = h((n) => {
		if (T.current = n, !n || !e.isAlive() || t.isDestroyed()) {
			w.current = t.destroyBean(w.current);
			return;
		}
		w.current = t.createBean(new So()), k.current = new X((e) => {
			O.current = e;
		}), e.setComp({
			toggleCss: (e, t) => o((n) => n.setClass(e, t)),
			setUserStyles: (e) => i(e),
			addOrRemoveBodyCssClass: (e, t) => l((n) => n.setClass(e, t)),
			setButtonWrapperDisplayed: (e) => {
				d((t) => t.setClass("ag-hidden", !e)), p(e ? "false" : "true");
			},
			setWidth: (e) => {
				T.current && (T.current.style.width = e);
			},
			setCompDetails: (e) => v(e),
			getFloatingFilterComp: () => k.current ? k.current : null,
			setMenuIcon: (e) => ee.current?.appendChild(e)
		}, n, ee.current, E.current, w.current);
	}, []);
	y(() => vh(m, t, E.current, A), [m]);
	let ne = b(() => a.toString(), [a]), j = b(() => s.toString(), [s]), M = b(() => u.toString(), [u]), N = b(() => !!(m && m.componentFromFramework && Sh(m.componentClass)), [m]), P = b(() => n.get("reactiveCustomComponents"), []), re = b(() => n.get("enableFilterHandlers"), []), [ie, F] = S();
	_(() => {
		if (m?.componentFromFramework) if (P) {
			let e = new (re ? sg : Jh)(m.params, () => C((e) => e + 1));
			A(e), F(e);
		} else tg();
	}, [m]);
	let I = ie?.getProps(), L = m?.componentFromFramework, ae = m?.componentClass;
	return /* @__PURE__ */ c.createElement("div", {
		ref: te,
		style: r,
		className: ne,
		role: "gridcell"
	}, /* @__PURE__ */ c.createElement("div", {
		ref: E,
		className: j,
		role: "presentation"
	}, L ? P ? I && /* @__PURE__ */ c.createElement(Ph.Provider, { value: { setMethods: (e) => ie.setMethods(e) } }, /* @__PURE__ */ c.createElement(ae, { ...I })) : /* @__PURE__ */ c.createElement(ae, {
		...m.params,
		ref: N ? () => {} : A
	}) : null), /* @__PURE__ */ c.createElement("div", {
		ref: D,
		"aria-hidden": f,
		className: M,
		role: "presentation"
	}, /* @__PURE__ */ c.createElement("button", {
		ref: ee,
		type: "button",
		className: "ag-button ag-floating-filter-button-button",
		tabIndex: -1
	})));
}), lg = m(({ ctrl: e }) => {
	let { context: t } = g($), [n, r] = S(), [i, a] = S(() => new xh()), [o, s] = S(() => new xh()), [l, u] = S("false"), [d, f] = S(), [p, m] = S(), v = x(), C = x(null), w = x(null), T = x(null), E = x(), D = h((n) => {
		if (C.current = n, !n || !e.isAlive() || t.isDestroyed()) {
			v.current = t.destroyBean(v.current);
			return;
		}
		v.current = t.createBean(new So()), e.setComp({
			setWidth: (e) => {
				C.current && (C.current.style.width = e);
			},
			toggleCss: (e, t) => a((n) => n.setClass(e, t)),
			setUserStyles: (e) => r(e),
			setHeaderWrapperHidden: (e) => {
				let t = T.current;
				t && (e ? t.style.setProperty("display", "none") : t.style.removeProperty("display"));
			},
			setHeaderWrapperMaxHeight: (e) => {
				let t = T.current;
				t && (e == null ? t.style.removeProperty("max-height") : t.style.setProperty("max-height", `${e}px`), t.classList.toggle("ag-header-cell-comp-wrapper-limited-height", e != null));
			},
			setUserCompDetails: (e) => m(e),
			setResizableDisplayed: (e) => {
				s((t) => t.setClass("ag-hidden", !e)), u(e ? "false" : "true");
			},
			setAriaExpanded: (e) => f(e),
			getUserCompInstance: () => E.current || void 0
		}, n, w.current, T.current, v.current);
	}, []);
	y(() => vh(p, t, T.current), [p]), _(() => {
		C.current && e.setDragSource(C.current);
	}, [p]);
	let ee = b(() => !!(p?.componentFromFramework && Sh(p.componentClass)), [p]), O = b(() => "ag-header-group-cell " + i.toString(), [i]), k = b(() => "ag-header-cell-resize " + o.toString(), [o]), A = p?.componentFromFramework, te = p?.componentClass;
	return /* @__PURE__ */ c.createElement("div", {
		ref: D,
		style: n,
		className: O,
		role: "columnheader",
		"aria-expanded": d
	}, /* @__PURE__ */ c.createElement("div", {
		ref: T,
		className: "ag-header-cell-comp-wrapper",
		role: "presentation"
	}, A ? ee ? /* @__PURE__ */ c.createElement(te, { ...p.params }) : /* @__PURE__ */ c.createElement(te, {
		...p.params,
		ref: E
	}) : null), /* @__PURE__ */ c.createElement("div", {
		ref: w,
		"aria-hidden": l,
		className: k
	}));
}), ug = m(({ ctrl: e }) => {
	let { gos: t, context: n } = g($), { topOffset: r, rowHeight: i } = b(() => e.getTopAndHeight(), []), a = b(() => t.get("tabIndex"), []), [o, s] = S(() => e.getAriaRowIndex()), l = e.headerRowClass, [u, d] = S(() => i + "px"), [f, p] = S(() => r + "px"), m = x(null), [_, v] = S(() => e.getUpdatedHeaderCtrls()), y = x(), C = x(null), w = h((t) => {
		if (C.current = t, !t || !e.isAlive() || n.isDestroyed()) {
			y.current = n.destroyBean(y.current);
			return;
		}
		y.current = n.createBean(new So()), e.setComp({
			setHeight: (e) => d(e),
			setTop: (e) => p(e),
			setHeaderCtrls: (e, t, n) => {
				let r = m.current, i = jh(r, e, t);
				i !== r && (m.current = i, Oh(n, () => v(i)));
			},
			setWidth: (e) => {
				C.current && (C.current.style.width = e);
			},
			setRowIndex: (e) => {
				s(e);
			}
		}, y.current, !1);
	}, []), T = b(() => ({
		height: u,
		top: f
	}), [u, f]), E = h((t) => {
		switch (e.type) {
			case "group": return /* @__PURE__ */ c.createElement(lg, {
				ctrl: t,
				key: t.instanceId
			});
			case "filter": return /* @__PURE__ */ c.createElement(cg, {
				ctrl: t,
				key: t.instanceId
			});
			default: return /* @__PURE__ */ c.createElement(og, {
				ctrl: t,
				key: t.instanceId
			});
		}
	}, []);
	return /* @__PURE__ */ c.createElement("div", {
		ref: w,
		className: l,
		role: "row",
		style: T,
		tabIndex: a,
		"aria-rowindex": o
	}, _.map(E));
}), dg = m(({ pinned: e }) => {
	let [t, n] = S(!0), [r, i] = S([]), { context: a } = g($), o = x(null), s = x(null), l = x(), u = e === "left", d = e === "right", f = !u && !d, p = h((t) => {
		if (o.current = t, !t || a.isDestroyed()) {
			l.current = a.destroyBean(l.current);
			return;
		}
		l.current = a.createBean(new Ro(e));
		let r = {
			setDisplayed: n,
			setCtrls: (e) => i(e),
			setCenterWidth: (e) => {
				s.current && (s.current.style.width = e);
			},
			setViewportScrollLeft: (e) => {
				o.current && (o.current.scrollLeft = e);
			},
			setPinnedContainerWidth: (e) => {
				o.current && (o.current.style.width = e, o.current.style.minWidth = e, o.current.style.maxWidth = e);
			}
		};
		l.current.setComp(r, o.current);
	}, []), m = t ? "" : "ag-hidden", _ = () => r.map((e) => /* @__PURE__ */ c.createElement(ug, {
		ctrl: e,
		key: e.instanceId
	}));
	return u ? /* @__PURE__ */ c.createElement("div", {
		ref: p,
		className: "ag-pinned-left-header " + m,
		"aria-hidden": !t,
		role: "rowgroup"
	}, _()) : d ? /* @__PURE__ */ c.createElement("div", {
		ref: p,
		className: "ag-pinned-right-header " + m,
		"aria-hidden": !t,
		role: "rowgroup"
	}, _()) : f ? /* @__PURE__ */ c.createElement("div", {
		ref: p,
		className: "ag-header-viewport " + m,
		role: "rowgroup",
		tabIndex: -1
	}, /* @__PURE__ */ c.createElement("div", {
		ref: s,
		className: "ag-header-container",
		role: "presentation"
	}, _())) : null;
}), fg = m(() => {
	let [e, t] = S(() => new xh()), [n, r] = S(), { context: i } = g($), a = x(null), o = x(), s = h((e) => {
		if (a.current = e, !e || i.isDestroyed()) {
			o.current = i.destroyBean(o.current);
			return;
		}
		o.current = i.createBean(new bo()), o.current.setComp({
			toggleCss: (e, n) => t((t) => t.setClass(e, n)),
			setHeightAndMinHeight: (e) => r(e)
		}, e, e);
	}, []), l = b(() => "ag-header " + e.toString(), [e]), u = b(() => ({
		height: n,
		minHeight: n
	}), [n]);
	return /* @__PURE__ */ c.createElement("div", {
		ref: s,
		className: l,
		style: u,
		role: "presentation"
	}, /* @__PURE__ */ c.createElement(dg, { pinned: "left" }), /* @__PURE__ */ c.createElement(dg, { pinned: null }), /* @__PURE__ */ c.createElement(dg, { pinned: "right" }));
}), pg = (e, t) => {
	_(() => {
		let n = t.current;
		if (n) {
			let t = n.parentElement;
			if (t) {
				let r = document.createComment(e);
				return t.insertBefore(r, n), () => {
					r.remove();
				};
			}
		}
	}, [e]);
}, mg = class {
	constructor(e, t) {
		this.cellEditorParams = e, this.refreshProps = t, this.instanceCreated = new X((e) => {
			this.resolveInstanceCreated = e;
		}), this.onValueChange = (e) => this.updateValue(e), this.value = e.value;
	}
	getProps() {
		return {
			...this.cellEditorParams,
			initialValue: this.cellEditorParams.value,
			value: this.value,
			onValueChange: this.onValueChange
		};
	}
	getValue() {
		return this.value;
	}
	refresh(e) {
		this.cellEditorParams = e, this.refreshProps();
	}
	setMethods(e) {
		zh(this.getOptionalMethods(), e, this);
	}
	getInstance() {
		return this.instanceCreated.then(() => this.componentInstance);
	}
	setRef(e) {
		this.componentInstance = e, this.resolveInstanceCreated?.(), this.resolveInstanceCreated = void 0;
	}
	getOptionalMethods() {
		return [
			"isCancelBeforeStart",
			"isCancelAfterEnd",
			"focusIn",
			"focusOut",
			"afterGuiAttached",
			"getValidationErrors",
			"getValidationElement"
		];
	}
	updateValue(e) {
		this.value = e, this.refreshProps();
	}
}, hg = (e) => {
	let t = x(e), n = x(), r = x(!1), i = x(!1), [, a] = S(0);
	r.current && (i.current = !0), _(() => (r.current ||= (n.current = t.current(), !0), a((e) => e + 1), () => {
		i.current && n.current?.();
	}), []);
}, gg = m((e) => {
	let [t, n] = S(), r = g($), { context: i, popupSvc: a, gos: o, editSvc: s } = r, { editDetails: c, cellCtrl: l, eParentCell: u } = e;
	return hg(() => {
		let { compDetails: t } = c, r = o.get("stopEditingWhenCellsLoseFocus"), d, f;
		if (!i.isDestroyed()) {
			f = i.createBean(s.createPopupEditorWrapper(t.params));
			let o = f.getGui();
			if (e.jsChildComp) {
				let t = e.jsChildComp.getGui();
				t && o.appendChild(t);
			}
			let { column: p, rowNode: m } = l, h = {
				column: p,
				rowNode: m,
				type: "popupCellEditor",
				eventSource: u,
				ePopup: o,
				position: c.popupPosition,
				keepWithinBounds: !0
			}, g = a?.positionPopupByComponent.bind(a, h), _ = a?.addPopup({
				modal: r,
				eChild: o,
				closeOnEsc: !0,
				closedCallback: (e) => {
					l.onPopupEditorClosed(e);
				},
				anchorToElement: u,
				positionCallback: g,
				ariaOwns: u
			});
			d = _ ? _.hideFunc : void 0, n(f), e.jsChildComp?.afterGuiAttached?.();
		}
		return () => {
			d?.(), i.destroyBean(f);
		};
	}), y(() => () => {
		l.isCellFocused() && t?.getGui().contains(z(r)) && u.focus({ preventScroll: !0 });
	}, [t]), t && e.wrappedContent ? T(e.wrappedContent, t.getGui()) : null;
}), _g = (e, t, n) => {
	let { compProxy: r } = e;
	n(r);
	let i = r.getProps(), a = Sh(t);
	return /* @__PURE__ */ c.createElement(Ph.Provider, { value: { setMethods: (e) => r.setMethods(e) } }, a ? /* @__PURE__ */ c.createElement(t, { ...i }) : /* @__PURE__ */ c.createElement(t, {
		...i,
		ref: (e) => r.setRef(e)
	}));
}, vg = (e, t, n) => e.compProxy ? _g(e, t, n) : /* @__PURE__ */ c.createElement(t, {
	...e.compDetails.params,
	ref: n
}), yg = (e, t, n, r, i) => {
	let a = e.compDetails, o = a.componentClass, s = a.componentFromFramework && !e.popup, l = a.componentFromFramework && e.popup, u = !a.componentFromFramework && e.popup;
	return s ? vg(e, o, t) : l ? /* @__PURE__ */ c.createElement(gg, {
		editDetails: e,
		cellCtrl: r,
		eParentCell: n,
		wrappedContent: vg(e, o, t)
	}) : u && i ? /* @__PURE__ */ c.createElement(gg, {
		editDetails: e,
		cellCtrl: r,
		eParentCell: n,
		jsChildComp: i
	}) : null;
}, bg = (e, t, n, r, i, a, o = !1) => {
	let { context: s } = g($), c = h(() => {
		let e = i.current;
		if (!e) return;
		let t = e.getGui();
		t && t.parentElement && t.remove(), s.destroyBean(e), i.current = void 0;
	}, []);
	_(() => {
		let r = e != null && !o, s = e?.compDetails && !e.compDetails.componentFromFramework;
		if (!(r && s && !(t && n == null))) {
			c();
			return;
		}
		let l = e.compDetails;
		if (i.current) {
			let t = i.current, n = t.refresh != null && e.force == 0 ? t.refresh(l.params) : !1;
			if (n === !0 || n === void 0) return;
			c();
		}
		l.newAgStackInstance().then((e) => {
			if (!e) return;
			let r = e.getGui();
			r && ((t ? n : a.current).appendChild(r), i.current = e);
		});
	}, [
		e,
		t,
		r,
		o
	]), _(() => c, []);
}, xg = ({ cellCtrl: e, parent: t }) => {
	let n = x(), r = b(() => {
		let { loadingComp: t } = e.getDeferLoadingCellRenderer();
		return t ? {
			value: void 0,
			compDetails: t,
			force: !1
		} : void 0;
	}, [e]);
	if (bg(r, !1, void 0, 1, n, t), r?.compDetails?.componentFromFramework) {
		let e = r.compDetails.componentClass;
		return /* @__PURE__ */ c.createElement(e, { ...r.compDetails.params });
	}
	return /* @__PURE__ */ c.createElement(c.Fragment, null);
}, Sg = m(({ cellCtrl: e, printLayout: t, editingCell: n }) => {
	let { context: r } = g($), { column: { colIdSanitised: i }, instanceId: a } = e, o = x(), [s, l] = S(() => e.isCellRenderer() ? void 0 : {
		compDetails: void 0,
		value: e.getValueToDisplay(),
		force: !1
	}), [d, f] = S(), [p, m] = S(1), [_, v] = S(), [C, w] = S(!1), [T, E] = S(!1), [D, ee] = S(!1), O = x(null), [k, A] = S(), te = b(() => e.isForceWrapper(), [e]), ne = b(() => e.getCellAriaRole(), [e]), j = x(null), M = x(null), N = x(null), P = x(), re = x(), ie = x(), F = x([]), I = x(), L = x(), [ae, oe] = S(0), R = h((e) => {
		L.current = e, oe((e) => e + 1);
	}, []), se = s != null && (C || D || T) && (d == null || !!d.popup), ce = te || se, le = b(() => e.getCellValueClass(), [e]), ue = h((t) => {
		if (re.current = t, t) {
			let n = t.isCancelBeforeStart && t.isCancelBeforeStart();
			setTimeout(() => {
				n ? (e.stopEditing(!0), e.focusCell(!0)) : (e.cellEditorAttached(), e.enableEditorTooltipFeature(t));
			});
		}
	}, [e]), de = x();
	de.current ||= new Ji(() => j.current);
	let fe = !!d && !d.popup;
	bg(s, ce, L.current, ae, P, j, fe);
	let pe = x();
	y(() => {
		let e = pe.current, t = s;
		if (pe.current = s, e == null || e.compDetails == null || t == null || t.compDetails == null) return;
		I.current?.refreshVisibility();
		let n = e.compDetails, r = t.compDetails;
		n.componentClass == r.componentClass && N.current?.refresh != null && N.current.refresh(r.params) != 1 && m((e) => e + 1);
	}, [s]), y(() => {
		if (!(d && !d.compDetails.componentFromFramework) || r.isDestroyed()) return;
		let t = d.compDetails, n = d.popup === !0, i = t.newAgStackInstance();
		return i.then((e) => {
			if (!e) return;
			let t = e.getGui();
			ue(e), n || ((te ? ie : j).current?.appendChild(t), e.afterGuiAttached?.()), A(e);
		}), () => {
			i.then((t) => {
				let n = t.getGui();
				e.disableEditorTooltipFeature(), r.destroyBean(t), ue(void 0), A(void 0), n?.remove();
			});
		};
	}, [d]);
	let z = h((t) => {
		if (ie.current = t, !t || r.isDestroyed() || !e.isAlive()) {
			let e = F.current;
			F.current = [];
			for (let t of e) t();
			return;
		}
		let n, i = (e) => {
			e && (t.insertAdjacentElement("afterbegin", e.getGui()), F.current.push(() => {
				tt(e.getGui()), r.destroyBean(e), I.current === n && (I.current = void 0);
			}));
		};
		C && i(e.createSelectionCheckbox()), D && i(e.createDndSource()), T && (n = e.createRowDragComp(), I.current = n, n && (i(n), n.refreshVisibility()));
	}, [
		e,
		r,
		D,
		T,
		C
	]), B = h(() => {
		let i = !e.isCellSpanning() || M.current, a = j.current;
		if (!a || !i || !e || !e.isAlive() || r.isDestroyed()) {
			o.current = r.destroyBean(o.current);
			return;
		}
		o.current = r.createBean(new So());
		let s = {
			toggleCss: (e, t) => de.current.toggleCss(e, t),
			setUserStyles: (e) => v(e),
			getFocusableElement: () => j.current,
			setIncludeSelection: (e) => w(e),
			setIncludeRowDrag: (e) => E(e),
			setIncludeDndSource: (e) => ee(e),
			setRowResizerElement: (e) => {
				O.current && tt(O.current), O.current = e, e && j.current && j.current.appendChild(e);
			},
			getCellEditor: () => re.current ?? null,
			getCellRenderer: () => N.current ?? P.current,
			getParentOfValue: () => L.current ?? ie.current ?? j.current,
			setRenderDetails: (t, n, r) => {
				let i = () => {
					l((e) => e?.compDetails !== t || e?.value !== n || e?.force !== r ? {
						value: n,
						compDetails: t,
						force: r
					} : e);
				};
				if (t?.params?.deferRender && !e.rowNode.group) {
					let { loadingComp: t, onReady: n } = e.getDeferLoadingCellRenderer();
					if (t) {
						l({
							value: void 0,
							compDetails: t,
							force: !1
						}), n.then(() => kh(i));
						return;
					}
				}
				i();
			},
			setEditDetails: (t, n, r, i) => {
				if (t) {
					let e;
					t.componentFromFramework && (i ? e = new mg(t.params, () => m((e) => e + 1)) : tg()), f({
						compDetails: t,
						popup: n,
						popupPosition: r,
						compProxy: e
					}), n || l(void 0);
				} else e.hasBrowserFocus() && s.getFocusableElement().focus({ preventScroll: !0 }), re.current = void 0, f(void 0);
			},
			refreshEditStyles: (e, t) => {
				if (!j.current) return;
				let { current: n } = de;
				n.toggleCss("ag-cell-value", !ce), n.toggleCss("ag-cell-inline-editing", !!e && !t), n.toggleCss("ag-cell-popup-editing", !!e && !!t), n.toggleCss("ag-cell-not-inline-editing", !e || !!t);
			}
		}, c = ie.current || void 0;
		e.setComp(s, a, M.current ?? void 0, c, t, n, o.current);
	}, []), me = h((e) => {
		j.current = e, B();
	}, []), he = h((e) => {
		M.current = e, B();
	}, []), ge = b(() => !!(s?.compDetails?.componentFromFramework && Sh(s.compDetails.componentClass)), [s]);
	y(() => {
		if (!j.current) return;
		let { current: e } = de;
		e.toggleCss("ag-cell-value", !ce), e.toggleCss("ag-cell-inline-editing", !!d && !d.popup), e.toggleCss("ag-cell-popup-editing", !!d && !!d.popup), e.toggleCss("ag-cell-not-inline-editing", !d || !!d.popup);
	});
	let _e = () => {
		let { compDetails: t, value: n } = s;
		if (!t) return n?.toString?.() ?? n;
		if (t.componentFromFramework) {
			let n = t.componentClass;
			return /* @__PURE__ */ c.createElement(u, { fallback: /* @__PURE__ */ c.createElement(xg, {
				cellCtrl: e,
				parent: j
			}) }, ge ? /* @__PURE__ */ c.createElement(n, {
				...t.params,
				key: p
			}) : /* @__PURE__ */ c.createElement(n, {
				...t.params,
				key: p,
				ref: N
			}));
		}
	}, ve = () => {
		let t = () => s == null ? null : ce ? /* @__PURE__ */ c.createElement("span", {
			role: "presentation",
			id: `cell-${a}`,
			className: le,
			ref: R
		}, _e()) : _e(), n = (t) => yg(t, ue, j.current, e, k);
		return d == null ? t() : d.popup ? /* @__PURE__ */ c.createElement(c.Fragment, null, t(), n(d)) : n(d);
	}, ye = () => /* @__PURE__ */ c.createElement("div", {
		ref: me,
		style: _,
		role: ne,
		"col-id": i
	}, ce ? /* @__PURE__ */ c.createElement("div", {
		className: "ag-cell-wrapper",
		role: "presentation",
		ref: z
	}, ve()) : ve());
	return e.isCellSpanning() ? /* @__PURE__ */ c.createElement("div", {
		ref: he,
		className: "ag-spanned-cell-wrapper",
		role: "presentation"
	}, ye()) : ye();
}), Cg = m(({ rowCtrl: e, containerType: t }) => {
	let { context: n, gos: r, editSvc: i } = g($), a = g(_h) === "default", o = x(), s = x(e.getDomOrder()), l = e.isFullWidth(), u = e.rowNode.displayed, [d, f] = S(() => u ? e.rowNode.getRowIndexString() : null), [p, m] = S(() => e.rowId), [v, C] = S(() => e.businessKey), [w, T] = S(() => e.rowStyles), E = x(null), [D, ee] = S(() => null), [O, k] = S(), [A, te] = S(() => u ? e.getInitialRowTop(t) : void 0), [ne, j] = S(() => u ? e.getInitialTransform(t) : void 0), M = x(null), N = x(), P = x(), re = x(!1), [ie, F] = S(0);
	_(() => {
		if (re.current || !O || ie > 10) return;
		let t = M.current?.firstChild;
		t ? (e.setupDetailRowAutoHeight(t), re.current = !0) : F((e) => e + 1);
	}, [O, ie]);
	let I = x();
	I.current ||= new Ji(() => M.current);
	let L = x(() => {}), ae = Ah(h((e) => (L.current = e, () => {
		L.current = () => {};
	}), []), () => E.current, []), oe = a ? ae : D, R = h((r) => {
		if (M.current = r, o.current = r ? n.createBean(new So()) : n.destroyBean(o.current), !r) {
			e.unsetComp(t);
			return;
		}
		if (!e.isAlive() || n.isDestroyed()) return;
		let i = {
			setTop: te,
			setTransform: j,
			toggleCss: (e, t) => I.current.toggleCss(e, t),
			setDomOrder: (e) => s.current = e,
			setRowIndex: f,
			setRowId: m,
			setRowBusinessKey: C,
			setUserStyles: T,
			setCellCtrls: (e, t) => {
				let n = E.current, r = jh(n, e, s.current);
				r !== n && (E.current = r, a ? L.current() : Oh(t, () => ee(r)));
			},
			showFullWidth: (e) => {
				P.current = e.params, k(e);
			},
			getFullWidthCellRenderer: () => N.current,
			getFullWidthCellRendererParams: () => P.current,
			refreshFullWidth: (e) => {
				let t = e();
				return P.current = t, de.current ? (k((e) => ({
					...e,
					params: t
				})), !0) : !N.current || !N.current.refresh ? !1 : N.current.refresh(t);
			}
		};
		e.setComp(i, r, t, o.current);
	}, []);
	y(() => vh(O, n, M.current, N), [O]);
	let se = b(() => {
		let e = {
			top: A,
			transform: ne
		};
		return Object.assign(e, w), e;
	}, [
		A,
		ne,
		w
	]), ce = l && O?.componentFromFramework, le = !l && oe != null, ue = b(() => !!(O?.componentFromFramework && Sh(O.componentClass)), [O]), de = x(!1);
	_(() => {
		de.current = ue && !!O && !!r.get("reactiveCustomComponents");
	}, [ue, O]);
	let fe = () => oe?.map((t) => /* @__PURE__ */ c.createElement(Sg, {
		cellCtrl: t,
		editingCell: i?.isEditing(t, { withOpenEditor: !0 }) ?? !1,
		printLayout: e.printLayout,
		key: t.instanceId
	})), pe = () => {
		let e = O.componentClass;
		return ue ? /* @__PURE__ */ c.createElement(e, { ...O.params }) : /* @__PURE__ */ c.createElement(e, {
			...O.params,
			ref: N
		});
	};
	return /* @__PURE__ */ c.createElement("div", {
		ref: R,
		role: "row",
		style: se,
		"row-index": d,
		"row-id": p,
		"row-business-key": v
	}, le ? fe() : ce ? pe() : null);
}), wg = m(({ name: e }) => {
	let { context: t, gos: n } = g($), r = b(() => ks(e), [e]), i = x(null), a = x(null), o = x(null), s = x([]), l = x([]), [u, d] = S(() => []), f = !!n.get("enableCellSpan") && !!r.getSpannedRowCtrls, p = x([]), m = x([]), [_, v] = S(() => []), y = x(!1), C = x(), w = b(() => bh("ag-viewport", Es(e)), [e]), T = b(() => bh(Ds(e)), [e]), E = b(() => bh("ag-spanning-container", Os(e)), [e]), D = r.type === "center" || f, ee = D ? i : a;
	pg(" AG Row Container " + e + " ", ee);
	let O = h(() => {
		let e = !D || i.current != null, t = a.current != null, n = !f || o.current != null;
		return e && t && n;
	}, []), k = h(() => i.current == null && a.current == null && o.current == null, []), A = h(() => {
		if (k() && (C.current = t.destroyBean(C.current)), !t.isDestroyed() && O()) {
			let n = (e) => {
				let t = jh(l.current, s.current, y.current);
				t !== l.current && (l.current = t, Oh(e, () => d(t)));
			}, r = (e) => {
				let t = jh(m.current, p.current, y.current);
				t !== m.current && (m.current = t, Oh(e, () => v(t)));
			};
			C.current = t.createBean(new Vs(e)), C.current.setComp({
				setHorizontalScroll: (e) => {
					i.current && (i.current.scrollLeft = e);
				},
				setViewportHeight: (e) => {
					i.current && (i.current.style.height = e);
				},
				setRowCtrls: ({ rowCtrls: e, useFlushSync: t }) => {
					let r = !!t && s.current.length > 0 && e.length > 0;
					s.current = e, n(r);
				},
				setSpannedRowCtrls: (e, t) => {
					let n = !!t && p.current.length > 0 && e.length > 0;
					p.current = e, r(n);
				},
				setDomOrder: (e) => {
					y.current != e && (y.current = e, n(!1));
				},
				setContainerWidth: (e) => {
					a.current && (a.current.style.width = e);
				},
				setOffsetTop: (e) => {
					a.current && (a.current.style.transform = `translateY(${e})`);
				}
			}, a.current, o.current ?? void 0, i.current);
		}
	}, [O, k]), te = h((e) => {
		a.current = e, A();
	}, [A]), ne = h((e) => {
		o.current = e, A();
	}, [A]), j = h((e) => {
		i.current = e, A();
	}, [A]), M = () => /* @__PURE__ */ c.createElement("div", {
		className: T,
		ref: te,
		role: D ? "presentation" : "rowgroup"
	}, u.map((e) => /* @__PURE__ */ c.createElement(Cg, {
		rowCtrl: e,
		containerType: r.type,
		key: e.instanceId
	})));
	return D ? /* @__PURE__ */ c.createElement("div", {
		className: w,
		ref: j,
		role: "rowgroup"
	}, M(), f ? /* @__PURE__ */ c.createElement("div", {
		className: E,
		ref: ne,
		role: "presentation"
	}, _.map((e) => /* @__PURE__ */ c.createElement(Cg, {
		rowCtrl: e,
		containerType: r.type,
		key: e.instanceId
	}))) : null) : M();
}), Tg = m(() => {
	let e = g($), { context: t, overlays: n } = e, [r, i] = S(""), [a, o] = S(0), [s, l] = S(0), [u, d] = S("0px"), [f, p] = S("0px"), [m, _] = S("100%"), [v, y] = S("0px"), [C, w] = S("0px"), [T, E] = S("100%"), [D, ee] = S(!0), [O, k] = S(!0), [A, te] = S(null), [ne, j] = S(""), [M, N] = S(null), [P, re] = S("ag-layout-normal"), ie = x();
	ie.current ||= new Ji(() => F.current);
	let F = x(null), I = x(null), L = x(null), ae = x(null), oe = x(null), R = x(null), se = x(null), ce = x([]), le = x([]);
	pg(" AG Grid Body ", F), pg(" AG Pinned Top ", I), pg(" AG Sticky Top ", L), pg(" AG Middle ", R), pg(" AG Pinned Bottom ", se);
	let ue = h((r) => {
		if (F.current = r, !r || t.isDestroyed()) {
			ce.current = t.destroyBeans(ce.current);
			for (let e of le.current) e();
			le.current = [];
			return;
		}
		let a = (e, t) => {
			e.appendChild(t), le.current.push(() => t.remove());
		}, s = (e) => {
			let n = t.createBean(new e());
			return ce.current.push(n), n;
		}, c = (e, t, n) => {
			a(e, document.createComment(n)), a(e, s(t).getGui());
		};
		c(r, Uo, " AG Fake Horizontal Scroll ");
		let u = n?.getOverlayWrapperCompClass();
		u && c(r, u, " AG Overlay Wrapper "), oe.current && c(oe.current, Ko, " AG Fake Vertical Scroll ");
		let f = {
			setRowAnimationCssOnBodyViewport: i,
			setColumnCount: (e) => {
				F.current && Ie(F.current, e);
			},
			setRowCount: (e) => {
				F.current && Pe(F.current, e);
			},
			setTopHeight: o,
			setBottomHeight: l,
			setStickyTopHeight: d,
			setStickyTopTop: p,
			setStickyTopWidth: _,
			setTopInvisible: ee,
			setBottomInvisible: k,
			setColumnMovingCss: (e, t) => ie.current.toggleCss(e, t),
			updateLayoutClasses: re,
			setAlwaysVerticalScrollClass: te,
			setPinnedTopBottomOverflowY: j,
			setCellSelectableCss: (e, t) => N(t ? e : null),
			setBodyViewportWidth: (e) => {
				R.current && (R.current.style.width = e);
			},
			registerBodyViewportResizeListener: (t) => {
				if (R.current) {
					let n = ft(e, R.current, t);
					le.current.push(() => n());
				}
			},
			setStickyBottomHeight: y,
			setStickyBottomBottom: w,
			setStickyBottomWidth: E,
			setGridRootRole: (e) => r.setAttribute("role", e)
		}, m = t.createBean(new Gs());
		ce.current.push(m), m.setComp(f, r, R.current, I.current, se.current, L.current, ae.current);
	}, []), de = b(() => bh("ag-root", "ag-unselectable", P), [P]), fe = b(() => bh("ag-body-viewport", r, P, A, M), [
		r,
		P,
		A,
		M
	]), pe = b(() => bh("ag-body", P), [P]), z = b(() => bh("ag-floating-top", D ? "ag-invisible" : null, M), [M, D]), B = b(() => bh("ag-sticky-top", M), [M]), me = b(() => bh("ag-sticky-bottom", v === "0px" ? "ag-invisible" : null, M), [M, v]), he = b(() => bh("ag-floating-bottom", O ? "ag-invisible" : null, M), [M, O]), ge = b(() => ({
		height: a,
		minHeight: a,
		overflowY: ne
	}), [a, ne]), _e = b(() => ({
		height: u,
		top: f,
		width: m
	}), [
		u,
		f,
		m
	]), ve = b(() => ({
		height: v,
		bottom: C,
		width: T
	}), [
		v,
		C,
		T
	]), ye = b(() => ({
		height: s,
		minHeight: s,
		overflowY: ne
	}), [s, ne]), be = (e) => /* @__PURE__ */ c.createElement(wg, {
		name: e,
		key: `${e}-container`
	}), xe = ({ section: e, children: t, className: n, style: r }) => /* @__PURE__ */ c.createElement("div", {
		ref: e,
		className: n,
		role: "presentation",
		style: r
	}, t.map(be));
	return /* @__PURE__ */ c.createElement("div", {
		ref: ue,
		className: de
	}, /* @__PURE__ */ c.createElement(fg, null), xe({
		section: I,
		className: z,
		style: ge,
		children: [
			"topLeft",
			"topCenter",
			"topRight",
			"topFullWidth"
		]
	}), /* @__PURE__ */ c.createElement("div", {
		className: pe,
		ref: oe,
		role: "presentation"
	}, xe({
		section: R,
		className: fe,
		children: [
			"left",
			"center",
			"right",
			"fullWidth"
		]
	})), xe({
		section: L,
		className: B,
		style: _e,
		children: [
			"stickyTopLeft",
			"stickyTopCenter",
			"stickyTopRight",
			"stickyTopFullWidth"
		]
	}), xe({
		section: ae,
		className: me,
		style: ve,
		children: [
			"stickyBottomLeft",
			"stickyBottomCenter",
			"stickyBottomRight",
			"stickyBottomFullWidth"
		]
	}), xe({
		section: se,
		className: he,
		style: ye,
		children: [
			"bottomLeft",
			"bottomCenter",
			"bottomRight",
			"bottomFullWidth"
		]
	}));
}), Eg = m(p((e, t) => {
	let { children: n, eFocusableElement: r, onTabKeyDown: i, gridCtrl: a, forceFocusOutWhenTabGuardsAreEmpty: o, isEmpty: s } = e, { context: l } = g($), u = x(null), d = x(null), f = x(), p = (e) => {
		let t = e == null ? void 0 : parseInt(e, 10).toString();
		for (let e of [u, d]) t === void 0 ? e.current?.removeAttribute("tabindex") : e.current?.setAttribute("tabindex", t);
	};
	v(t, () => ({ forceFocusOutOfContainer(e) {
		f.current?.forceFocusOutOfContainer(e);
	} }));
	let m = h(() => {
		let e = u.current, t = d.current;
		if (!e && !t || l.isDestroyed()) {
			f.current = l.destroyBean(f.current);
			return;
		}
		if (e && t) {
			let n = { setTabIndex: p };
			f.current = l.createBean(new gh({
				comp: n,
				eTopGuard: e,
				eBottomGuard: t,
				eFocusableElement: r,
				onTabKeyDown: i,
				forceFocusOutWhenTabGuardsAreEmpty: o,
				focusInnerElement: (e) => a.focusInnerElement(e),
				isEmpty: s
			}));
		}
	}, []), _ = h((e) => {
		u.current = e, m();
	}, [m]), y = h((e) => {
		d.current = e, m();
	}, [m]), b = (e) => {
		let t = e === "top" ? qs.TAB_GUARD_TOP : qs.TAB_GUARD_BOTTOM;
		return /* @__PURE__ */ c.createElement("div", {
			className: `${qs.TAB_GUARD} ${t}`,
			role: "presentation",
			ref: e === "top" ? _ : y
		});
	};
	return /* @__PURE__ */ c.createElement(c.Fragment, null, b("top"), n, b("bottom"));
})), Dg = m(({ context: e }) => {
	let [t, n] = S(""), [r, i] = S(""), [a, o] = S(null), [s, l] = S(null), [u, d] = S(!1), [f, p] = S(), m = x(), g = x(null), v = x(), [y, C] = S(null), w = x(() => void 0), T = x(), E = x([]), D = h(() => void 0, []);
	pg(" AG Grid ", g);
	let ee = h((t) => {
		if (g.current = t, m.current = t ? e.createBean(new Qs()) : e.destroyBean(m.current), !t || e.isDestroyed()) return;
		let r = m.current;
		w.current = r.focusInnerElement.bind(r);
		let a = {
			destroyGridUi: () => {},
			setRtlClass: n,
			forceFocusOutOfContainer: (e) => {
				if (!e && T.current?.isDisplayed()) {
					T.current.forceFocusOutOfContainer(e);
					return;
				}
				v.current?.forceFocusOutOfContainer(e);
			},
			updateLayoutClasses: i,
			getFocusableContainers: () => {
				let e = [], t = [], n = g.current?.querySelector(".ag-root");
				for (let n of E.current) {
					if (!n.isDisplayed()) continue;
					let r = n.getFocusableContainerName();
					if (r === "rowGroupToolbar" || r === "pivotToolbar") {
						e.push(n);
						continue;
					}
					t.push(n);
				}
				let r = [...e];
				return n && r.push({
					getGui: () => n,
					getFocusableContainerName: () => "gridBody"
				}), r.push(...t), r;
			},
			setCursor: o,
			setUserSelect: l
		};
		r.setComp(a, t, t), d(!0);
	}, []);
	_(() => {
		let t = m.current, n = g.current;
		if (!f || !t || !y || !n || e.isDestroyed()) return;
		let r = [];
		E.current = [], T.current = void 0;
		let { watermarkSelector: i, paginationSelector: a, sideBarSelector: o, statusBarSelector: s, gridHeaderDropZonesSelector: c } = t.getOptionalSelectors(), l = [];
		if (c) {
			let t = e.createBean(new c.component()), i = t.getGui();
			n.insertAdjacentElement("afterbegin", i), l.push(i), r.push(t), E.current.push(...t.getFocusableContainers?.() ?? []);
		}
		if (o) {
			let t = e.createBean(new o.component()), n = t.getGui(), i = y.querySelector(".ag-tab-guard-bottom");
			i && (i.insertAdjacentElement("beforebegin", n), l.push(n)), r.push(t), E.current.push(t);
		}
		let u = (t) => {
			let i = e.createBean(new t()), a = i.getGui();
			return n.insertAdjacentElement("beforeend", a), l.push(a), r.push(i), i;
		};
		if (s) {
			let e = u(s.component);
			E.current.push(e);
		}
		if (a) {
			let e = u(a.component);
			T.current = e, E.current.push(e);
		}
		return i && u(i.component), () => {
			e.destroyBeans(r), E.current = [], T.current = void 0;
			for (let e of l) e.remove();
		};
	}, [
		f,
		y,
		e
	]);
	let O = b(() => bh("ag-root-wrapper", t, r), [t, r]), k = b(() => bh("ag-root-wrapper-body", "ag-focus-managed", r), [r]), A = b(() => ({
		userSelect: s ?? "",
		WebkitUserSelect: s ?? "",
		cursor: a ?? ""
	}), [s, a]), te = h((e) => {
		v.current = e, p(e !== null);
	}, []), ne = h(() => !m.current?.isFocusable(), []);
	return /* @__PURE__ */ c.createElement("div", {
		ref: ee,
		className: O,
		style: A,
		role: "presentation"
	}, /* @__PURE__ */ c.createElement("div", {
		className: k,
		ref: C,
		role: "presentation"
	}, u && y && !e.isDestroyed() && /* @__PURE__ */ c.createElement($.Provider, { value: e.getBeans() }, /* @__PURE__ */ c.createElement(Eg, {
		ref: te,
		eFocusableElement: y,
		onTabKeyDown: D,
		gridCtrl: m.current,
		forceFocusOutWhenTabGuardsAreEmpty: !0,
		isEmpty: ne
	}, /* @__PURE__ */ c.createElement(Tg, null)))));
}), Og = class extends H {
	postConstruct() {
		if (this.beans.colAutosize) {
			let e = this.queueResizeOperationsForTick.bind(this);
			this.addManagedEventListeners({
				rowExpansionStateChanged: e,
				expandOrCollapseAll: e,
				cellValueChanged: e,
				rowNodeDataChanged: e,
				rowDataUpdated: e
			});
		}
	}
	queueResizeOperationsForTick() {
		let e = this.beans.colAutosize;
		e.shouldQueueResizeOperations = !0, setTimeout(() => {
			e.processResizeOperations();
		}, 0);
	}
	areHeaderCellsRendered() {
		return this.beans.ctrlsSvc.getHeaderRowContainerCtrls().every((e) => e.getAllCtrls().every((e) => e.areCellsRendered()));
	}
	areCellsRendered() {
		return this.beans.rowRenderer.getAllRowCtrls().every((e) => e.isRowRendered() && e.getAllCellCtrls().every((e) => !!e.eGui));
	}
}, kg = typeof window > "u" ? _ : y, Ag = {
	setGridApi: void 0,
	maxComponentCreationTimeMs: void 0,
	children: void 0
}, jg = {
	gridOptions: void 0,
	modules: void 0,
	containerStyle: void 0,
	className: void 0,
	passGridApi: void 0,
	componentWrappingElement: void 0,
	...Ag
}, Mg = new Set(Object.keys(jg)), Ng = new Set(Object.keys(Ag)), Pg = (e) => {
	let t = g(ig), n = g(ag), r = x(), i = x(null), a = x(null), o = x([]), s = x([]), l = x(e), u = x(), d = x(), f = x(!1), [p, m] = S(void 0), [, v] = S(0), y = x(), C = (e) => {
		let t = i.current?.classList, n = (e = "") => e.trim().split(/\s+/g).filter(Boolean);
		if (y.current !== e) {
			for (let e of n(y.current)) t?.contains(e) && t.remove(e);
			for (let r of n(e)) t?.contains(r) || t?.add(r);
			y.current = e;
		}
	};
	kg(() => {
		C(e.className);
	}, [e.className]);
	let w = h((c) => {
		if (i.current = c, C(e.className), !c) {
			for (let e of o.current) e();
			o.current.length = 0;
			return;
		}
		let l = [...e.modules ?? [], ...t ?? []];
		n && Cn(l)?.setLicenseKey(n), a.current || (a.current = new rg(() => v((e) => e + 1), e.componentWrappingElement, e.maxComponentCreationTimeMs), o.current.push(() => {
			a.current?.destroy(), a.current = null;
		}));
		let p = _r(e.gridOptions, e, Object.keys(e).filter((e) => !Mg.has(e))), h = new Rg(() => {
			if (f.current) {
				let e = () => u.current?.shouldQueueUpdates() ? void 0 : s.current.shift(), t = e();
				for (; t;) t(), t = e();
			}
		});
		u.current = h;
		let g = new Og(), _ = {
			providedBeanInstances: {
				frameworkCompWrapper: new Ig(a.current, p),
				renderStatus: g
			},
			modules: l,
			frameworkOverrides: h,
			setThemeOnGridDiv: !0
		}, y = (t) => {
			m(t), t.createBean(g), o.current.push(() => {
				t.destroy();
			}), t.getBean("ctrlsSvc").whenReady({ addDestroyFunc: (e) => {
				o.current.push(e);
			} }, () => {
				if (t.isDestroyed()) return;
				let n = r.current;
				n && e.passGridApi?.(n);
			});
		}, b = (e) => {
			e.getBean("ctrlsSvc").whenReady({ addDestroyFunc: (e) => {
				o.current.push(e);
			} }, () => {
				for (let e of s.current) e();
				s.current.length = 0, f.current = !0;
			});
		}, x = new ph();
		p.gridId ??= d.current, r.current = x.create(c, p, y, b, _), o.current.push(() => {
			r.current = void 0;
		}), r.current && (d.current = r.current.getGridId());
	}, []), T = b(() => ({
		height: "100%",
		...e.containerStyle || {}
	}), [e.containerStyle]), E = h((e) => {
		f.current && !u.current?.shouldQueueUpdates() ? e() : s.current.push(e);
	}, []);
	_(() => {
		let t = Fg(l.current, e);
		l.current = e, E(() => {
			r.current && vr(t, r.current);
		});
	}, [e]);
	let D = !c.useSyncExternalStore || yr(e, "renderingMode") === "legacy" ? "legacy" : "default";
	return /* @__PURE__ */ c.createElement("div", {
		style: T,
		ref: w
	}, /* @__PURE__ */ c.createElement(_h.Provider, { value: D }, p && !p.isDestroyed() ? /* @__PURE__ */ c.createElement(Dg, {
		key: p.instanceId,
		context: p
	}) : null, a.current?.getPortals() ?? null));
};
function Fg(e, t) {
	let n = {};
	for (let r of Object.keys(t)) {
		if (Mg.has(r)) {
			Ng.has(r) && W(274, { prop: r });
			continue;
		}
		let i = t[r];
		e[r] !== i && (n[r] = i);
	}
	return n;
}
var Ig = class extends hh {
	constructor(e, t) {
		super(), this.parent = e, this.gridOptions = t;
	}
	createWrapper(e, t) {
		let n = this.gridOptions;
		if (yr(n, "reactiveCustomComponents")) {
			let r = ((e) => {
				switch (e) {
					case "filter": return yr(n, "enableFilterHandlers") ? Kh : Gh;
					case "floatingFilterComponent": return yr(n, "enableFilterHandlers") ? Xh : Yh;
					case "dateComponent": return Uh;
					case "dragAndDropImageComponent": return Wh;
					case "loadingOverlayComponent":
					case "noRowsOverlayComponent":
					case "activeOverlay": return Hh;
					case "statusPanel": return $h;
					case "toolPanel": return eg;
					case "menuItem": return Qh;
					case "cellRenderer": return Vh;
					case "innerHeaderComponent": return Zh;
				}
			})(t.name);
			if (r) return new r(e, this.parent, t);
		} else switch (t.name) {
			case "filter":
			case "floatingFilterComponent":
			case "dateComponent":
			case "dragAndDropImageComponent":
			case "loadingOverlayComponent":
			case "noRowsOverlayComponent":
			case "activeOverlay":
			case "statusPanel":
			case "toolPanel":
			case "menuItem":
			case "cellRenderer":
				tg();
				break;
		}
		let r = !t.cellRenderer && t.name !== "toolPanel";
		return new Rh(e, this.parent, t, r);
	}
}, Lg = p((e, t) => {
	let n = g($), { registry: r, context: i, gos: a, rowModel: o } = n, [s, l] = S(() => new xh()), [u, d] = S(() => new xh()), [f, p] = S(), [m, _] = S(), y = x(), C = x(null), w = x(), T = b(() => bn(e.api.getGridId(), f?.rowModelType ?? "clientSide"), [e]), E = b(() => s.toString() + " ag-details-row", [s]), D = b(() => u.toString() + " ag-details-grid", [u]);
	t && v(t, () => ({ refresh() {
		return y.current?.refresh() ?? !1;
	} })), e.template && W(230);
	let ee = h((t) => {
		if (C.current = t, !t || i.isDestroyed()) {
			y.current = i.destroyBean(y.current), w.current?.();
			return;
		}
		let s = {
			toggleCss: (e, t) => l((n) => n.setClass(e, t)),
			toggleDetailGridCss: (e, t) => d((n) => n.setClass(e, t)),
			setDetailGrid: (e) => p(e),
			setRowData: (e) => _(e),
			getGui: () => C.current
		}, c = r.createDynamicBean("detailCellRendererCtrl", !0);
		if (c && (i.createBean(c), c.init(s, e), y.current = c, a.get("detailRowAutoHeight"))) {
			let r = () => {
				if (C.current == null) return;
				let t = C.current.clientHeight;
				t != null && t > 0 && setTimeout(() => {
					e.node.setRowHeight(t), (Un(a, o) || Wn(a, o)) && o.onRowHeightChanged();
				}, 0);
			};
			w.current = ft(n, t, r), r();
		}
	}, []), O = h((e) => {
		y.current?.registerDetailWithMaster(e);
	}, []);
	return /* @__PURE__ */ c.createElement("div", {
		className: E,
		ref: ee
	}, f && /* @__PURE__ */ c.createElement(Pg, {
		className: D,
		...f,
		modules: T,
		rowData: m,
		passGridApi: O
	}));
}), Rg = class extends lh {
	constructor(e) {
		super("react"), this.processQueuedUpdates = e, this.queueUpdates = !1, this.renderingEngine = "react", this.frameworkComponents = {
			agGroupCellRenderer: Nh,
			agGroupRowRenderer: Nh,
			agDetailCellRenderer: Lg
		}, this.wrapIncoming = (e, t) => t === "ensureVisible" ? Dh(e) : e();
	}
	frameworkComponent(e) {
		return this.frameworkComponents[e];
	}
	isFrameworkComponent(e) {
		if (!e) return !1;
		let t = e.prototype;
		return !(t && "getGui" in t);
	}
	getLockOnRefresh() {
		this.queueUpdates = !0;
	}
	releaseLockOnRefresh() {
		this.queueUpdates = !1, this.processQueuedUpdates();
	}
	shouldQueueUpdates() {
		return this.queueUpdates;
	}
	runWhenReadyAsync() {
		return Th();
	}
}, zg = class extends l {
	constructor() {
		super(...arguments), this.apiListeners = [], this.setGridApi = (e) => {
			this.api = e;
			for (let t of this.apiListeners) t(e);
		};
	}
	registerApiListener(e) {
		this.apiListeners.push(e);
	}
	componentWillUnmount() {
		this.apiListeners.length = 0;
	}
	render() {
		return /* @__PURE__ */ c.createElement(Pg, {
			...this.props,
			passGridApi: this.setGridApi
		});
	}
}, Bg = {
	selectAll: "(Выделить все)",
	selectAllSearchResults: "(Выделить все результаты поиска)",
	addCurrentSelectionToFilter: "Добавить текущий выбор в фильтр",
	searchOoo: "Поиск...",
	blanks: "(Пустые)",
	noMatches: "Нет совпадений",
	filterOoo: "Фильтр...",
	equals: "Равно",
	notEqual: "Не равно",
	blank: "Пусто",
	notBlank: "Не пусто",
	empty: "Выберите один",
	lessThan: "Меньше чем",
	greaterThan: "Больше чем",
	lessThanOrEqual: "Меньше или равно",
	greaterThanOrEqual: "Больше или равно",
	inRange: "Между",
	inRangeStart: "От",
	inRangeEnd: "До",
	contains: "Содержит",
	notContains: "Не содержит",
	startsWith: "Начинается с",
	endsWith: "Кончается на",
	dateFormatOoo: "dd.mm.yyyy",
	before: "До",
	after: "После",
	andCondition: "И",
	orCondition: "ИЛИ",
	applyFilter: "Применить",
	resetFilter: "Сбросить",
	clearFilter: "Очистить",
	cancelFilter: "Отмена",
	textFilter: "Текстовый фильтр",
	numberFilter: "Числовой фильтр",
	dateFilter: "Фильтр по дате",
	setFilter: "Выбрать фильтр",
	groupFilterSelect: "Выбрать поле:",
	advancedFilterContains: "содержит",
	advancedFilterNotContains: "не содержит",
	advancedFilterTextEquals: "равно",
	advancedFilterTextNotEqual: "не равно",
	advancedFilterStartsWith: "начинается с",
	advancedFilterEndsWith: "заканчивается на",
	advancedFilterBlank: "пусто",
	advancedFilterNotBlank: "не пусто",
	advancedFilterEquals: "=",
	advancedFilterNotEqual: "!=",
	advancedFilterGreaterThan: ">",
	advancedFilterGreaterThanOrEqual: ">=",
	advancedFilterLessThan: "<",
	advancedFilterLessThanOrEqual: "<=",
	advancedFilterTrue: "истина",
	advancedFilterFalse: "ложь",
	advancedFilterAnd: "И",
	advancedFilterOr: "ИЛИ",
	advancedFilterApply: "Применить",
	advancedFilterBuilder: "Конструктор",
	advancedFilterValidationMissingColumn: "Отсутствует столбец",
	advancedFilterValidationMissingOption: "Отсутствует параметр",
	advancedFilterValidationMissingValue: "Отсутствует значение",
	advancedFilterValidationInvalidColumn: "Столбец не найден",
	advancedFilterValidationInvalidOption: "Параметр не найден",
	advancedFilterValidationMissingQuote: "Отсутствует закрывающая кавычка",
	advancedFilterValidationNotANumber: "Значение не является числом",
	advancedFilterValidationInvalidDate: "Недействительная дата",
	advancedFilterValidationMissingCondition: "Отсутствует условие",
	advancedFilterValidationJoinOperatorMismatch: "Операторы объединения внутри условия должны быть одинаковыми",
	advancedFilterValidationInvalidJoinOperator: "Оператор объединения не найден",
	advancedFilterValidationMissingEndBracket: "Отсутствует закрывающая скобка",
	advancedFilterValidationExtraEndBracket: "Лишние закрывающие скобки",
	advancedFilterValidationMessage: "Ошибка в выражении. ${variable} - ${variable}.",
	advancedFilterValidationMessageAtEnd: "Ошибка в выражении. ${variable} в конце выражения.",
	advancedFilterBuilderTitle: "Продвинутый фильтр",
	advancedFilterBuilderApply: "Применить",
	advancedFilterBuilderCancel: "Отмена",
	advancedFilterBuilderAddButtonTooltip: "Добавить фильтр или группу",
	advancedFilterBuilderRemoveButtonTooltip: "Удалить",
	advancedFilterBuilderMoveUpButtonTooltip: "Переместить вверх",
	advancedFilterBuilderMoveDownButtonTooltip: "Переместить вниз",
	advancedFilterBuilderAddJoin: "Добавить группу",
	advancedFilterBuilderAddCondition: "Добавить фильтр",
	advancedFilterBuilderSelectColumn: "Выберите столбец",
	advancedFilterBuilderSelectOption: "Выберите параметр",
	advancedFilterBuilderEnterValue: "Введите значение...",
	advancedFilterBuilderValidationAlreadyApplied: "Текущий фильтр уже применен.",
	advancedFilterBuilderValidationIncomplete: "Не все условия завершены.",
	advancedFilterBuilderValidationSelectColumn: "Необходимо выбрать столбец.",
	advancedFilterBuilderValidationSelectOption: "Необходимо выбрать параметр.",
	advancedFilterBuilderValidationEnterValue: "Необходимо ввести значение.",
	columns: "Столбцы",
	filters: "Фильтры",
	pivotMode: "Режим сводной таблицы",
	groups: "Группы строк",
	rowGroupColumnsEmptyMessage: "Перетащите сюда для группировки по строкам",
	values: "Значения",
	valueColumnsEmptyMessage: "Перетащите сюда для агрегации",
	pivots: "Метки столбцов",
	pivotColumnsEmptyMessage: "Перетащите сюда для задания заголовков столбцам",
	group: "Группа",
	rowDragRow: "строка",
	rowDragRows: "строки",
	loadingOoo: "Загрузка...",
	loadingError: "Ошибка",
	noRowsToShow: "Нет данных",
	enabled: "Включено",
	pinColumn: "Закрепить столбец",
	pinLeft: "Закрепить слева",
	pinRight: "Закрепить справа",
	noPin: "Не закреплять",
	valueAggregation: "Агрегация значений",
	noAggregation: "Нет",
	autosizeThisColumn: "Авторазмер этого столбца",
	autosizeAllColumns: "Авторазмер всех столбцов",
	groupBy: "Группировать по",
	ungroupBy: "Разгруппировать по",
	ungroupAll: "Разгруппировать все",
	addToValues: "Добавить ${variable} в значения",
	removeFromValues: "Удалить ${variable} из значений",
	addToLabels: "Добавить ${variable} в метки",
	removeFromLabels: "Удалить ${variable} из меток",
	resetColumns: "Сбросить столбцы",
	expandAll: "Развернуть все группы строк",
	collapseAll: "Свернуть все группы строк",
	copy: "Копировать",
	ctrlC: "Ctrl+C",
	ctrlX: "Ctrl+X",
	copyWithHeaders: "Копировать с заголовками",
	copyWithGroupHeaders: "Копировать с групповыми заголовками",
	cut: "Вырезать",
	paste: "Вставить",
	ctrlV: "Ctrl+V",
	export: "Экспорт",
	csvExport: "Экспорт CSV",
	excelExport: "Экспорт Excel",
	columnFilter: "Фильтр столбца",
	columnChooser: "Выбор столбцов",
	chooseColumns: "Выберите столбцы",
	sortAscending: "Сортировать по возрастанию",
	sortDescending: "Сортировать по убыванию",
	sortUnSort: "Очистить сортировку",
	sum: "Сумма",
	first: "Первый",
	last: "Последний",
	min: "Минимум",
	max: "Максимум",
	none: "Пусто",
	count: "Количество",
	avg: "Среднее",
	filteredRows: "Отфильтрованные",
	selectedRows: "Выбрано",
	totalRows: "Всего строк",
	totalAndFilteredRows: "Строки",
	more: "Еще",
	to: "по",
	of: "из",
	page: "Страница",
	pageLastRowUnknown: "?",
	nextPage: "Следующая страница",
	lastPage: "Последняя страница",
	firstPage: "Первая страница",
	previousPage: "Предыдущая страница",
	pageSizeSelectorLabel: "Размер страницы:",
	footerTotal: "Итого",
	pivotColumnGroupTotals: "Всего",
	pivotChartAndPivotMode: "Сводная диаграмма и режим сводки",
	pivotChart: "Сводная диаграмма",
	chartRange: "Диапазон диаграммы",
	columnChart: "Столбчатая",
	groupedColumn: "Группированная",
	stackedColumn: "Сложенная",
	normalizedColumn: "100% сложенная",
	barChart: "Гистограмма",
	groupedBar: "Группированная",
	stackedBar: "Сложенная",
	normalizedBar: "100% сложенная",
	pieChart: "Круговая",
	pie: "Круговая",
	donut: "Кольцевая",
	lineChart: "Линейная",
	stackedLine: "Сложенная",
	normalizedLine: "100% сложенная",
	xyChart: "XY (Точечная)",
	scatter: "Точечная",
	bubble: "Пузырьковая",
	areaChart: "Область",
	area: "Диаграмма с областями",
	stackedArea: "Сложенная",
	normalizedArea: "100% сложенная",
	histogramChart: "Гистограмма",
	polarChart: "Полярная",
	radarLine: "Радарная линия",
	radarArea: "Радарная область",
	nightingale: "Диаграмма Найтинга́йл",
	radialColumn: "Радиальная колонка",
	radialBar: "Радиальная гистограмма",
	statisticalChart: "Статистическая",
	boxPlot: "Ящичный график",
	rangeBar: "Диапазонная гистограмма",
	rangeArea: "Диапазонная область",
	hierarchicalChart: "Иерархическая",
	treemap: "Древовидная карта",
	sunburst: "Солнечная диаграмма",
	specializedChart: "Специализированная",
	waterfall: "Водопадная",
	heatmap: "Тепловая карта",
	combinationChart: "Комбинированная",
	columnLineCombo: "Столбчатая и линейная",
	AreaColumnCombo: "Площадная и столбчатая",
	pivotChartTitle: "Сводная диаграмма",
	rangeChartTitle: "График диапазона",
	settings: "Настройки",
	data: "Данные",
	format: "Формат",
	categories: "Категории",
	defaultCategory: "(Пусто)",
	series: "Серии",
	switchCategorySeries: "Переключить категорию / ряд",
	categoryValues: "Значения категорий",
	seriesLabels: "Метки рядов",
	aggregate: "Агрегация",
	xyValues: "Значения X Y",
	paired: "Парный режим",
	axis: "Ось",
	xAxis: "Горизонтальная ось",
	yAxis: "Вертикальная ось",
	polarAxis: "Полярная ось",
	radiusAxis: "Ось радиуса",
	navigator: "Навигатор",
	zoom: "Масштаб",
	animation: "Анимация",
	crosshair: "Перекрестие",
	color: "Цвет",
	thickness: "Толщина",
	preferredLength: "Предпочитаемая длина",
	xType: "Тип X",
	axisType: "Тип оси",
	automatic: "Автоматически",
	category: "Категория",
	number: "Число",
	time: "Время",
	timeFormat: "Формат времени",
	autoRotate: "Автоповорот",
	xRotation: "X Поворот",
	yRotation: "Y Поворот",
	labelRotation: "Вращение",
	circle: "Круг",
	polygon: "Многоугольник",
	square: "Квадрат",
	cross: "Крест",
	diamond: "Ромб",
	plus: "Плюс",
	triangle: "Треугольник",
	heart: "Сердце",
	orientation: "Ориентация",
	fixed: "Фиксированная",
	parallel: "Параллельная",
	perpendicular: "Перпендикулярная",
	radiusAxisPosition: "Позиция",
	ticks: "Отметки",
	gridLines: "Линии сетки",
	width: "Ширина",
	height: "Высота",
	length: "Длина",
	padding: "Внутренний отступ",
	spacing: "Отступ",
	chart: "Диаграмма",
	chartStyle: "Стиль диаграммы",
	title: "Заголовок",
	chartTitles: "Заголовки",
	chartTitle: "Заголовок диаграммы",
	chartSubtitle: "Подзаголовок",
	horizontalAxisTitle: "Заголовок горизонтальной оси",
	verticalAxisTitle: "Заголовок вертикальной оси",
	polarAxisTitle: "Заголовок полярной оси",
	titlePlaceholder: "Заголовок диаграммы - двойной щелчок для редактирования",
	background: "Фон",
	font: "Шрифт",
	weight: "Толщина",
	top: "Верх",
	right: "Право",
	bottom: "Низ",
	left: "Лево",
	labels: "Метки",
	calloutLabels: "Выноски",
	sectorLabels: "Метки секторов",
	positionRatio: "Коэффициент положения",
	size: "Размер",
	shape: "Форма",
	minSize: "Минимальный размер",
	maxSize: "Максимальный размер",
	legend: "Легенда",
	position: "Позиция",
	markerSize: "Размер маркера",
	markerStroke: "Обводка маркера",
	markerPadding: "Отступ маркера",
	itemSpacing: "Расстояние между элементами",
	itemPaddingX: "Горизонтальный отступ элемента по X",
	itemPaddingY: "Вертикальный отступ элемента по Y",
	layoutHorizontalSpacing: "Горизонтальный отступ",
	layoutVerticalSpacing: "Вертикальный отступ",
	strokeWidth: "Толщина линии",
	offset: "Смещение",
	offsets: "Смещения",
	tooltips: "Подсказки",
	callout: "Выноска",
	markers: "Маркеры",
	shadow: "Тень",
	blur: "Размытие",
	xOffset: "Смещение по X",
	yOffset: "Смещение по Y",
	lineWidth: "Ширина линии",
	lineDash: "Тип линии",
	lineDashOffset: "Смещение штрихов",
	scrollingZoom: "Прокрутка",
	scrollingStep: "Шаг прокрутки",
	selectingZoom: "Выделение",
	durationMillis: "Длительность (мс)",
	crosshairLabel: "Метка перекрестия",
	crosshairSnap: "Привязка к узлу",
	normal: "Обычный",
	bold: "Жирный",
	italic: "Курсив",
	boldItalic: "Жирный курсив",
	predefined: "Предопределенный",
	fillOpacity: "Непрозрачность заливки",
	strokeColor: "Цвет линии",
	strokeOpacity: "Непрозрачность линии",
	miniChart: "Мини-диаграмма",
	histogramBinCount: "Количество корзин",
	connectorLine: "Соединительная линия",
	seriesItems: "Элементы серии",
	seriesItemType: "Тип элемента",
	seriesItemPositive: "Положительный",
	seriesItemNegative: "Отрицательный",
	seriesItemLabels: "Метки элементов",
	columnGroup: "Столбцы",
	barGroup: "Гистограмма",
	pieGroup: "Круговая",
	lineGroup: "Линейная",
	scatterGroup: "Точечная",
	areaGroup: "Площадная",
	polarGroup: "Полярная",
	statisticalGroup: "Статистическая",
	hierarchicalGroup: "Иерархическая",
	specializedGroup: "Специализированная",
	combinationGroup: "Комбинированная",
	groupedColumnTooltip: "Группированная",
	stackedColumnTooltip: "Сложенная",
	normalizedColumnTooltip: "100% сложенная",
	groupedBarTooltip: "Группированная",
	stackedBarTooltip: "Сложенная",
	normalizedBarTooltip: "100% сложенная",
	pieTooltip: "Круговая",
	donutTooltip: "Кольцевая",
	lineTooltip: "Линейная",
	stackedLineTooltip: "Сложенная",
	normalizedLineTooltip: "100% сложенная",
	groupedAreaTooltip: "Площадная",
	stackedAreaTooltip: "Сложенная",
	normalizedAreaTooltip: "100% сложенная",
	scatterTooltip: "Точечная",
	bubbleTooltip: "Пузырьковая",
	histogramTooltip: "Гистограмма",
	radialColumnTooltip: "Радиальная колонка",
	radialBarTooltip: "Радиальная гистограмма",
	radarLineTooltip: "Радарная линия",
	radarAreaTooltip: "Радарная область",
	nightingaleTooltip: "Диаграмма Найтинга́йл",
	rangeBarTooltip: "Диапазонная гистограмма",
	rangeAreaTooltip: "Диапазонная область",
	boxPlotTooltip: "Ящичный график",
	treemapTooltip: "Древовидная карта",
	sunburstTooltip: "Солнечная диаграмма",
	waterfallTooltip: "Водопадная диаграмма",
	heatmapTooltip: "Тепловая карта",
	columnLineComboTooltip: "Столбчатая и линейная",
	areaColumnComboTooltip: "Площадная и столбчатая",
	customComboTooltip: "Настраиваемая комбинация",
	innerRadius: "Внутренний радиус",
	startAngle: "Начальный угол",
	endAngle: "Конечный угол",
	reverseDirection: "Обратное направление",
	groupPadding: "Отступ группы",
	seriesPadding: "Отступ ряда",
	tile: "Плитка",
	whisker: "Усы",
	cap: "Крышка",
	capLengthRatio: "Соотношение длины",
	labelPlacement: "Размещение метки",
	inside: "Внутри",
	outside: "Снаружи",
	noDataToChart: "Нет данных для построения диаграммы.",
	pivotChartRequiresPivotMode: "Для сводной диаграммы необходим режим сводной диаграммы.",
	chartSettingsToolbarTooltip: "Меню",
	chartLinkToolbarTooltip: "Связано с таблицей",
	chartUnlinkToolbarTooltip: "Отключено от таблицы",
	chartDownloadToolbarTooltip: "Скачать диаграмму",
	chartMenuToolbarTooltip: "Меню",
	chartEdit: "Редактировать диаграмму",
	chartAdvancedSettings: "Расширенные настройки",
	chartLink: "Связать с таблицей",
	chartUnlink: "Отключить от таблицы",
	chartDownload: "Скачать диаграмму",
	histogramFrequency: "Частота",
	seriesChartType: "Тип диаграммы ряда",
	seriesType: "Тип ряда",
	secondaryAxis: "Вторая ось",
	seriesAdd: "Добавить ряд",
	categoryAdd: "Добавить категорию",
	bar: "Гистограмма",
	column: "Столбцы",
	histogram: "Гистограмма",
	advancedSettings: "Расширенные настройки",
	direction: "Направление",
	horizontal: "Горизонтальное",
	vertical: "Вертикальное",
	seriesGroupType: "Тип группы",
	groupedSeriesGroupType: "Группированная",
	stackedSeriesGroupType: "Сложенная",
	normalizedSeriesGroupType: "100% сложенная",
	legendEnabled: "Включена",
	invalidColor: "Некорректный цвет",
	groupedColumnFull: "Группированная столбчатая",
	stackedColumnFull: "Сложенная столбчатая",
	normalizedColumnFull: "100% сложенная столбчатая",
	groupedBarFull: "Группированная гистограмма",
	stackedBarFull: "Сложенная гистограмма",
	normalizedBarFull: "100% сложенная гистограмма",
	stackedAreaFull: "Сложенная площадная",
	normalizedAreaFull: "100% сложенная площадная",
	customCombo: "Настраиваемая комбинация",
	funnel: "Воронка",
	coneFunnel: "Конусная воронка",
	pyramid: "Пирамида",
	funnelGroup: "Воронка",
	funnelTooltip: "Воронка",
	coneFunnelTooltip: "Конусная воронка",
	pyramidTooltip: "Пирамида",
	dropOff: "Отказ",
	stageLabels: "Метки этапов",
	reverse: "Обратное направление",
	ariaAdvancedFilterBuilderItem: "${variable}. Уровень ${variable}. Нажмите ENTER для редактирования",
	ariaAdvancedFilterBuilderItemValidation: "${variable}. Уровень ${variable}. ${variable} Нажмите ENTER для редактирования",
	ariaAdvancedFilterBuilderList: "Список конструктора продвинутого фильтра",
	ariaAdvancedFilterBuilderFilterItem: "Условие фильтра",
	ariaAdvancedFilterBuilderGroupItem: "Группа фильтров",
	ariaAdvancedFilterBuilderColumn: "Столбец",
	ariaAdvancedFilterBuilderOption: "Опция",
	ariaAdvancedFilterBuilderValueP: "Значение",
	ariaAdvancedFilterBuilderJoinOperator: "Оператор объединения",
	ariaAdvancedFilterInput: "Поле ввода продвинутого фильтра",
	ariaChecked: "выбрано",
	ariaColumn: "Столбец",
	ariaColumnGroup: "Группа столбцов",
	ariaColumnFiltered: "Столбец отфильтрован",
	ariaColumnSelectAll: "Переключить видимость всех столбцов",
	ariaDateFilterInput: "Поле ввода фильтра даты",
	ariaDefaultListName: "Список",
	ariaFilterColumnsInput: "Поле ввода для фильтрации столбцов",
	ariaFilterFromValue: "Фильтр от значения",
	ariaFilterInput: "Поле ввода фильтра",
	ariaFilterList: "Список фильтров",
	ariaFilterToValue: "Фильтр до значения",
	ariaFilterValue: "Значение фильтра",
	ariaFilterMenuOpen: "Открыть меню фильтра",
	ariaFilteringOperator: "Оператор фильтрации",
	ariaHidden: "скрыто",
	ariaIndeterminate: "неопределено",
	ariaInputEditor: "Редактор ввода",
	ariaMenuColumn: "Нажмите ALT + ВНИЗ для открытия меню столбца",
	ariaFilterColumn: "Нажмите CTRL + ENTER для открытия фильтра",
	ariaRowDeselect: "Нажмите ПРОБЕЛ, чтобы отменить выбор этой строки",
	ariaHeaderSelection: "Столбец с выбором заголовка",
	ariaSelectAllCells: "Нажмите ПРОБЕЛ, чтобы выбрать все ячейки",
	ariaRowSelectAll: "Нажмите ПРОБЕЛ, чтобы переключить выбор всех строк",
	ariaRowToggleSelection: "Нажмите ПРОБЕЛ, чтобы переключить выбор строки",
	ariaRowSelect: "Нажмите ПРОБЕЛ, чтобы выбрать эту строку",
	ariaRowSelectionDisabled: "Выбор строк отключен для этой строки",
	ariaSearch: "Поиск",
	ariaSortableColumn: "Нажмите ENTER для сортировки",
	ariaToggleVisibility: "Нажмите ПРОБЕЛ, чтобы переключить видимость",
	ariaToggleCellValue: "Нажмите ПРОБЕЛ, чтобы переключить значение ячейки",
	ariaUnchecked: "не выбрано",
	ariaVisible: "видимо",
	ariaSearchFilterValues: "Поиск значений фильтра",
	ariaPageSizeSelectorLabel: "Размер страницы",
	ariaChartMenuClose: "Закрыть меню редактирования диаграммы",
	ariaChartSelected: "Выбрано",
	ariaSkeletonCellLoadingFailed: "Ошибка загрузки строки",
	ariaSkeletonCellLoading: "Загрузка данных строки",
	ariaRowGroupDropZonePanelLabel: "Группы строк",
	ariaValuesDropZonePanelLabel: "Значения",
	ariaPivotDropZonePanelLabel: "Метки столбцов",
	ariaDropZoneColumnComponentDescription: "Нажмите DELETE, чтобы удалить",
	ariaDropZoneColumnValueItemDescription: "Нажмите ENTER, чтобы изменить тип агрегации",
	ariaDropZoneColumnGroupItemDescription: "Нажмите ENTER для сортировки",
	ariaDropZoneColumnComponentAggFuncSeparator: " из ",
	ariaDropZoneColumnComponentSortAscending: "по возрастанию",
	ariaDropZoneColumnComponentSortDescending: "по убыванию",
	ariaLabelDialog: "Диалог",
	ariaLabelColumnMenu: "Меню столбцов",
	ariaLabelColumnFilter: "Фильтр столбцов",
	ariaLabelCellEditor: "Редактор ячеек",
	ariaLabelSelectField: "Выбрать поле",
	ariaLabelLoadingContextMenu: "Загрузка контекстного меню",
	ariaLabelRichSelectField: "Поле расширенного выбора",
	ariaLabelRichSelectToggleSelection: "Нажмите ПРОБЕЛ, чтобы переключить выбор",
	ariaLabelRichSelectDeselectAllItems: "Нажмите DELETE, чтобы снять выделение со всех элементов",
	ariaLabelRichSelectDeleteSelection: "Нажмите DELETE, чтобы снять выделение с элемента",
	ariaLabelTooltip: "Подсказка",
	ariaLabelContextMenu: "Контекстное меню",
	ariaLabelSubMenu: "Подменю",
	ariaLabelAggregationFunction: "Функция агрегации",
	ariaLabelAdvancedFilterAutocomplete: "Автозаполнение продвинутого фильтра",
	ariaLabelAdvancedFilterBuilderAddField: "Конструктор продвинутого фильтра - добавить поле",
	ariaLabelAdvancedFilterBuilderColumnSelectField: "Конструктор продвинутого фильтра - выбор столбца",
	ariaLabelAdvancedFilterBuilderOptionSelectField: "Конструктор продвинутого фильтра - выбор опции",
	ariaLabelAdvancedFilterBuilderJoinSelectField: "Конструктор продвинутого фильтра - выбор оператора объединения",
	ariaColumnPanelList: "Список столбцов",
	ariaFilterPanelList: "Список фильтров",
	thousandSeparator: ",",
	decimalSeparator: ".",
	true: "Истина",
	false: "Ложь",
	invalidDate: "Недействительная дата",
	invalidNumber: "Недействительное число",
	january: "Январь",
	february: "Февраль",
	march: "Март",
	april: "Апрель",
	may: "Май",
	june: "Июнь",
	july: "Июль",
	august: "Август",
	september: "Сентябрь",
	october: "Октябрь",
	november: "Ноябрь",
	december: "Декабрь",
	timeFormatSlashesDDMMYYYY: "DD/MM/YYYY",
	timeFormatSlashesMMDDYYYY: "MM/DD/YYYY",
	timeFormatSlashesDDMMYY: "DD/MM/YY",
	timeFormatSlashesMMDDYY: "MM/DD/YY",
	timeFormatDotsDDMYY: "DD.M.YY",
	timeFormatDotsMDDYY: "M.DD.YY",
	timeFormatDashesYYYYMMDD: "YYYY-MM-DD",
	timeFormatSpacesDDMMMMYYYY: "DD MMMM YYYY",
	timeFormatHHMMSS: "HH:MM:SS",
	timeFormatHHMMSSAmPm: "HH:MM:SS AM/PM"
}, Vg = ({ theme: e, ...t }) => /* @__PURE__ */ C(zg, {
	theme: e || Sf,
	localeText: Bg,
	quickFilterParser: (e) => {
		if (!e) return [];
		let t = /"([^"]+)"|(\S+)/g, n = [], r;
		for (; (r = t.exec(e)) !== null;) n.push(r[1] || r[2]);
		return n;
	},
	includeHiddenColumnsInQuickFilter: !1,
	suppressCellFocus: !0,
	enableCellTextSelection: !0,
	...t
});
//#endregion
export { Vg as AgGridReactBase, E as Button, j as Checkbox, k as DatePicker, D as Input, A as InputNumber, te as RadioGroup, ee as Select, ne as Spin, O as TextArea };
