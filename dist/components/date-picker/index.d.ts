import { type DatePickerProps as AntdDatePickerProps } from 'antd';
export interface DatePickerProps extends AntdDatePickerProps {
    format: 'DD.MM.YYYY' | 'DD.MM.YYYY HH:mm' | (string & {});
}
export declare const DatePicker: React.FC<DatePickerProps>;
//# sourceMappingURL=index.d.ts.map