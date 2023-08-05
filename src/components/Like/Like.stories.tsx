import type { Meta, StoryObj } from '@storybook/react';

import Like from './Like';

const meta = {
  title: 'Component/Like',
  component: Like,
  tags: ['autodocs'],
} satisfies Meta<typeof Like>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LikeButton: Story = {
  args: {
    id: 'abc',
    likes: 2,
    isLike: false,
  },
};
