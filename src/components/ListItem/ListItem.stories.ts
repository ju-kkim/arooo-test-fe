import type { Meta, StoryObj } from '@storybook/react';

import ListItem from './ListItem';

const meta = {
  title: 'Component/ListItem',
  component: ListItem,
  tags: ['autodocs'],
} satisfies Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Item: Story = {
  args: {
    id: 'abcd0123efgh456',
    title: '콘텐츠 타이틀1',
    likes: 1,
    isLike: false,
  },
};

export const LongTitleItem: Story = {
  args: {
    id: 'abcd0456efgh456',
    title:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ipsa reiciendis vel id ab sint cupiditate, adipisci incidunt quae excepturi neque dicta quam ea! Possimus tempora voluptates nostrum dolorem fuga.',
    likes: 1,
    isLike: false,
  },
};
