import type { Meta, StoryObj } from '@storybook/react';

import List from './List';

const meta = {
  title: 'Layout/List',
  component: List,
  tags: ['autodocs'],
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContentList: Story = {
  args: {
    contents: [
      {
        id: 'abcd0123efgh456',
        title: '콘텐츠 타이틀1',
        likes: 1,
      },
      {
        id: '123efgh456abcd0',
        title: '콘텐츠 타이틀2',
        likes: 3,
      },
      {
        id: 'gh456abcd0123ef',
        title: '콘텐츠 타이틀3',
        likes: 0,
      },
    ],
  },
};
