import { DatePicker as AntdDatePicker, type DatePickerProps as AntdDatePickerProps } from "antd";
import { forwardRef, type ComponentRef } from "react";

export interface DatePickerProps extends AntdDatePickerProps {
  format: 'DD.MM.YYYY' | 'DD.MM.YYYY HH:mm' | (string & {});
}

type DatePickerRef = ComponentRef<typeof AntdDatePicker>;

export const DatePicker = forwardRef<DatePickerRef, DatePickerProps>(
  ({ format, ...rest }, ref) => {
    return (
      <AntdDatePicker
        ref={ref} 
        allowClear
        showNow
        format={{
          format: format,
          type: 'mask'
        }}
        {...rest}
      />
    );
  }
);

// Задаем displayName, чтобы в инструментах разработчика (React DevTools) компонент отображался красиво, а не как "ForwardRef"