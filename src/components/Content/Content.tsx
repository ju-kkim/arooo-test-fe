import { styled } from 'styled-components';
import { typography } from 'styles/mixins';

type ContentProps = {
  children: React.ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return <Typography>{children}</Typography>;
};

const Typography = styled.div`
  ${typography({ size: 'medium' })}
  line-height: 1.4;
`;

export default Content;
