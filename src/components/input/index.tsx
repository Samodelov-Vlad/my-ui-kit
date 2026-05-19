import { Input as AntdInput, type InputRef } from "antd";
import { type InputProps as AntdInputProps } from "antd";
import { forwardRef } from "react";

export interface InputProps extends AntdInputProps {}

export const Input = forwardRef<InputRef, InputProps>(({ ...rest }, ref) => {
  return <Input ref={ref} {...rest} />;
});
