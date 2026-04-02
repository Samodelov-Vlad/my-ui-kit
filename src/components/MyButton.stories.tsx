import type { Meta, StoryObj } from '@storybook/react';
import { MyButton } from './MyButton';

// Описание компонента
const meta: Meta<typeof MyButton> = {
  title: 'MyLibrary/MyButton', // Заголовок в боковой панели
  component: MyButton,
  tags: ['autodocs'], // Автоматически создаст страницу с документацией
  argTypes: {
    onClick: { action: 'clicked' }, 
  },
};

export default meta;
type Story = StoryObj<typeof MyButton>;

// Первая вариация: Основная кнопка
export const Primary: Story = {
  args: {
    label: 'Главная кнопка',
    primary: true,
  },
};

// Вторая вариация: Обычная кнопка
export const Secondary: Story = {
  args: {
    label: 'Обычная кнопка',
    primary: false,
  },
};