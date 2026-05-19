import { type ModalProps as AntdModalProps } from "antd";
import React, { type PropsWithChildren } from "react";
import "./index.css";
type Size = {
    width: number;
    height: number;
};
export type ModalProps = Omit<AntdModalProps, "width" | "height" | "modalRender" | "zIndex"> & {
    isDraggable?: boolean;
    isResizable?: boolean;
    initialSize?: Size;
};
export declare const BaseModal: React.FC<PropsWithChildren<ModalProps>>;
export {};
//# sourceMappingURL=index.d.ts.map