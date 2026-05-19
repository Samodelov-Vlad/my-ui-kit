import { Input as AntdInput } from 'antd';
import type { TextAreaRef } from 'antd/es/input/TextArea';
import type { TextAreaProps as AntdTextAreaProps } from 'antd/lib/input';
import { forwardRef } from 'react';

export interface TextAreaProps extends AntdTextAreaProps {}

export const AntdTextArea = forwardRef<TextAreaRef, TextAreaProps>(({ ...rest }, ref) => {
  return (
    <AntdInput.TextArea
      ref={ref}
      {...rest}
    />
  );
});
