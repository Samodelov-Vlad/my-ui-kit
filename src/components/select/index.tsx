import {
  Select as AntdSelect,
  type SelectProps as AntdSelectProps,
} from "antd";
import { forwardRef } from "react";

export interface SelectProps extends AntdSelectProps {}

// Извлекаем тип без использования префикса React.
// type SelectRef = ComponentRef<typeof Select>;

export const Select = forwardRef<any, SelectProps>(({ ...rest }, ref) => {
  return (
    <AntdSelect
      // popupMatchSelectWidth={false} // ЭТОТ параметр позволяет списку выйти за границы контейнера
      ref={ref}
      showSearch
      optionFilterProp="label"
      allowClear
      // getPopupContainer={(triggerNode) => triggerNode.parentNode}
      {...rest}
    />
  );
});
