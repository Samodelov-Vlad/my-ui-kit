import type { Meta, StoryObj } from "@storybook/react";
import { AntdButton } from ".";

// Описание компонента
const meta: Meta<typeof AntdButton> = {
  title: "MyLibrary/AntdButton", // Заголовок в боковой панели
  component: AntdButton,
  tags: ["autodocs"], // Автоматически создаст страницу с документацией
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof AntdButton>;

// Первая вариация: Основная кнопка
export const Default: Story = {
  args: {
    size: "large",
    children: "Отправить", // Добавьте эту строку
  },
};

// Вторая вариация: Обычная кнопка
export const Secondary: Story = {
  args: {
    danger: true,
    children: "Кнопка", // Добавьте эту строку
  },
};
