import type { Meta, StoryObj } from '@storybook/react';

import Title from './Title';

const meta = {
  title: 'Component/Title',
  component: Title,
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const H2Text: Story = {
  args: {
    text: 'H2 제목',
    isBold: true,
  },
};
export const H3Text: Story = {
  args: {
    tag: 'h3',
    text: 'H3 제목',
  },
};
