import {
  Button as AntdButton,
  type ButtonProps as AntdButtonProps,
} from "antd";
import { forwardRef } from "react";

export interface ButtonProps extends AntdButtonProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...rest }, ref) => {
    return <AntdButton ref={ref} {...rest} />;
  },
);
