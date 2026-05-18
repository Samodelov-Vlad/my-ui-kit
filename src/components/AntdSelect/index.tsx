import { Select, type SelectProps } from "antd";
import { forwardRef } from "react";

// import type { SelectRef } from 'antd/es/select'
export interface AntdSelectProps extends SelectProps {}

type SelectRef = React.ComponentRef<typeof Select>;

export const AntdSelect = forwardRef<SelectRef, SelectProps>(
  ({ ...rest }, ref) => {
    return (
      <AntdSelect
        // popupMatchSelectWidth={false} // ЭТОТ параметр позволяет списку выйти за границы контейнера
        ref={ref}
        showSearch
        optionFilterProp="label"
        allowClear
        {...rest}
      />
    );
  },
);
