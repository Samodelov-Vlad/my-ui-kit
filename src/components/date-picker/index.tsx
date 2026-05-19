import { DatePicker as AntdDatePicker, type DatePickerProps as AntdDatePickerProps } from 'antd';

export interface DatePickerProps extends AntdDatePickerProps {
  format: 'DD.MM.YYYY' | 'DD.MM.YYYY HH:mm' | (string & {});
}

// TODO нужно сделать обертку над ref наверное
export const DatePicker: React.FC<DatePickerProps> = ({ format, ...rest }) => {
  return (
    <AntdDatePicker
      // {...(showTime && { format: 'HH:mm' })}
      allowClear
      showNow
      format={{
        format: format,
        type: 'mask'
      }}
      {...rest}
    />
  );
};
