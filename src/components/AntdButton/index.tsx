import { Button, type ButtonProps as AntdButtonProps } from "antd";
import { forwardRef } from "react";

export interface ButtonProps extends AntdButtonProps {}

export const AntdButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ ...rest }, ref) => {
    return <Button ref={ref} {...rest} />;
  },
);
