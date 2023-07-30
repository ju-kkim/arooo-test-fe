import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ListButton: Story = {
  args: {
    children: '목록',
    onClick: () => {
      console.log('목록 버튼');
    },
    buttonStyle: `
      padding: 5px 10px;
      border: 1px solid black
    `,
  },
};

export const LikeButton: Story = {
  args: {
    children: '❤️좋아요',
    onClick: () => {
      console.log('좋아요 버튼');
    },
    buttonStyle: `
      padding: 5px 10px;
    `,
  },
};
