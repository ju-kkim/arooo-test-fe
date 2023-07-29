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
