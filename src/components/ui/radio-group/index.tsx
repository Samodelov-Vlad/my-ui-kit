import { Radio as AntdRadio, type RadioGroupProps as AntdRadioGroupProps } from 'antd';
import { forwardRef, type ComponentRef } from 'react';

export interface RadioGroupProps extends AntdRadioGroupProps {}

// Автоматически извлекаем правильный тип рефа для Radio.Group
type RadioGroupRef = ComponentRef<typeof AntdRadio.Group>;

export const RadioGroup = forwardRef<RadioGroupRef, RadioGroupProps>((props, ref) => {
  return (
    <AntdRadio.Group
      ref={ref}
      optionType='button'
      buttonStyle='solid'
      {...props}
    />
  );
});
