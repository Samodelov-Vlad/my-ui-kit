import { Spin as AntdSpin, type SpinProps as AntdSpinProps } from "antd";
import React from "react";

interface SpinProps extends AntdSpinProps {}

export const Spin: React.FC<SpinProps> = ({ ...rest }) => {
  return (
    <AntdSpin
      // className={cn(
      //   {
      //     'm-auto': true,
      //     // 'm-auto': isCenter,
      //   },
      //   className
      // )}
      // fullscreen
      {...rest}
    />
  );
};
