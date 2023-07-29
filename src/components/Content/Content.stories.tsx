import type { Meta, StoryObj } from '@storybook/react';

import Content from './Content';
import { styled } from 'styled-components';

const meta = {
  title: 'Component/Content',
  component: Content,
  tags: ['autodocs'],
} satisfies Meta<typeof Content>;

export default meta;
type Story = StoryObj<typeof meta>;

const Paragraph = styled.p`
  margin: 15px 0;
`;

export const Typography: Story = {
  args: {
    children: (
      <>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor praesentium explicabo
          maiores dolore, eum laudantium aspernatur enim molestiae hic ipsa ex eveniet? Quod
          veritatis hic nesciunt aut labore enim facere!
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor praesentium explicabo
          maiores dolore, eum laudantium aspernatur enim molestiae hic ipsa ex eveniet? Quod
          veritatis hic nesciunt aut labore enim facere! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Dolor praesentium explicabo maiores dolore, eum laudantium aspernatur
          enim molestiae hic ipsa ex eveniet? Quod veritatis hic nesciunt aut labore enim facere!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor praesentium explicabo
          maiores dolore, eum laudantium aspernatur enim molestiae hic ipsa ex eveniet? Quod
          veritatis hic nesciunt aut labore enim facere!
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor praesentium explicabo
          maiores dolore, eum laudantium aspernatur enim molestiae hic ipsa ex eveniet? Quod
          veritatis hic nesciunt aut labore enim facere!
        </Paragraph>
      </>
    ),
  },
};
