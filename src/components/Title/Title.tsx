import { styled } from 'styled-components';
import { typography } from 'styles/mixins';

type TitleProps = {
  tag?: React.ElementType;
  text: string;
  isBold?: boolean;
};

const Title = ({ tag, text, isBold = false }: TitleProps) => {
  return (
    <TitleStyle as={tag} isBold={isBold}>
      {text}
    </TitleStyle>
  );
};

const TitleStyle = styled.h2<{ as?: React.ElementType; isBold?: boolean }>`
  ${({ isBold }) =>
    isBold ? typography({ size: 'large', weight: 'bold' }) : typography({ size: 'large' })}
`;

export default Title;
