import { type DatePickerProps as AntdDatePickerProps } from "antd";
export interface DatePickerProps extends AntdDatePickerProps {
    format: 'DD.MM.YYYY' | 'DD.MM.YYYY HH:mm' | (string & {});
}
export declare const DatePicker: import("react").ForwardRefExoticComponent<Omit<DatePickerProps, "ref"> & import("react").RefAttributes<import("rc-picker").PickerRef>>;
//# sourceMappingURL=index.d.ts.map