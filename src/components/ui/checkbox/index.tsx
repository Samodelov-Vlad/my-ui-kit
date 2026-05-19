import {
  Checkbox as AntdCheckbox,
  type CheckboxProps as AntdCheckboxProps,
} from "antd";
import { forwardRef, type ComponentRef } from "react";

// Расширяем оригинальные пропсы Ant Design Checkbox для будущих кастомных настроек
export interface CheckboxProps extends AntdCheckboxProps {}

// Автоматически и безопасно извлекаем правильный тип рефа для Checkbox
type CheckboxRef = ComponentRef<typeof AntdCheckbox>;

export const Checkbox = forwardRef<CheckboxRef, CheckboxProps>(
  ({ ...rest }, ref) => {
    return (
      <AntdCheckbox
        ref={ref} // Прокидываем реф в оригинальный компонент
        {...rest} // Передаем все остальные пропсы (checked, onChange, disabled и т.д.)
      />
    );
  },
);
