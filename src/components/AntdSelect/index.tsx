import { Select, type SelectProps } from "antd";
import { forwardRef, type ComponentRef } from "react"; // <-- Добавили ComponentRef сюда

export interface AntdSelectProps extends SelectProps {}

// Извлекаем тип без использования префикса React.
type SelectRef = ComponentRef<typeof Select>;

export const AntdSelect = forwardRef<SelectRef, AntdSelectProps>(
  ({ ...rest }, ref) => {
    return (
      <Select
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
