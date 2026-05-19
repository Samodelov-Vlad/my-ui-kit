// import { css } from '@emotion/css';
import cn from "classnames";
import { ComponentRef, type PropsWithChildren, forwardRef } from "react";
import {
  InputNumber as AntdInputNumber,
  type InputNumberProps as AntdInputNumberProps,
} from "antd";

export interface InputNumberProps extends AntdInputNumberProps {
  isPretty?: boolean;
  // isTextCenter?: boolean;
}

// Извлекаем чистый тип рефа прямо из самого компонента Antd
type InputNumberRef = ComponentRef<typeof AntdInputNumber>;

export const InputNumber = forwardRef<
  InputNumberRef,
  PropsWithChildren<InputNumberProps>
>(({ isPretty = true, ...rest }, ref) => {
  return (
    <AntdInputNumber
      ref={ref}
      decimalSeparator=","
      {...(isPretty && {
        formatter: (value) => {
          return String(value)
            .replace(".", ",")
            .replace(/\B(?=(\d{3})+(?!\d{1,2}))/g, " ");
        },
      })}
      // className={cn(
      //   {
      //     [css`
      //       input {
      //         text-align: center !important;
      //       }
      //     `]: isTextCenter
      //   },
      //   className
      // )}
      {...rest}
    />
  );
});
