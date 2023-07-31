import { FONT } from 'comstants/font';

type Typography = {
  size: 'large' | 'medium' | 'small';
  weight?: 'regular' | 'bold';
};

export const typography = ({ size, weight = 'regular' }: Typography) => {
  return `
    font-size: ${FONT[size].size};
    font-weight: ${FONT[size].weight[weight]};
  `;
};

type Flex = {
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  alignItems?: 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
  gap?: string;
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
};

export const flex = ({
  direction = 'row',
  alignItems = 'stretch',
  justifyContent = 'flex-start',
  gap = '0px',
  wrap = 'nowrap',
}: Flex) => {
  return `
    display: flex;
    flex-direction: ${direction};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    gap: ${gap};
    flex-wrap: ${wrap};
  `;
};
