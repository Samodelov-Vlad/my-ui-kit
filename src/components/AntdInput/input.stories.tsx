import type { Meta, StoryObj } from "@storybook/react";
import { AntdInput } from ".";

// Описание компонента
const meta: Meta<typeof AntdInput> = {
  title: "MyLibrary/AntdInput", // Заголовок в боковой панели
  component: AntdInput,
  tags: ["autodocs"], // Автоматически создаст страницу с документацией
  argTypes: {
    onChange: { action: "changed" },
    onPressEnter: { action: "pressedEnter" },
  },
};

export default meta;
type Story = StoryObj<typeof AntdInput>;

// Первая вариация: Обычный инпут
export const Default: Story = {
  args: {
    placeholder: "Введите текст...",
  },
};

// Вторая вариация: Инпут с значением
export const WithValue: Story = {
  args: {
    defaultValue: "Значение по умолчанию",
    placeholder: "Введите текст...",
  },
};

// // Третья вариация: Неактивный инпут
// export const Disabled: Story = {
//   args: {
//     placeholder: "Неактивный инпут",
//     disabled: true,
//   },
// };

// // Четвёртая вариация: Инпут с размером
// export const Sizes: Story = {
//   args: {
//     placeholder: "Размер small",
//     size: "small",
//   },
// };

// // Пятая вариация: Инпут с префиксом и суффиксом
// export const WithPrefixSuffix: Story = {
//   args: {
//     placeholder: "Введите текст",
//     prefix: "🔍",
//     suffix: "🔎",
//   },
// };

// // Шестая вариация: Инпут с паролем
// export const Password: Story = {
//   args: {
//     placeholder: "Введите пароль",
//     type: "password",
//   },
// };
