import type { Meta, StoryObj } from '@storybook/react';

import Detail from './Detail';

const meta = {
  title: 'Layout/Detail',
  component: Detail,
  tags: ['autodocs'],
} satisfies Meta<typeof Detail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ContentDetail: Story = {
  args: {
    id: 'abcd0123efgh456',
    title: '콘텐츠 타이틀1',
    likes: 1,
    content:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea dolor excepturi veniam libero facilis vel quis nisi tenetur iste delectus similique blanditiis consequatur error, quas fuga voluptatibus animi doloremque repudiandae!',
  },
};
