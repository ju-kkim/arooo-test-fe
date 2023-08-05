import { styled } from 'styled-components';

const Header = () => {
  return (
    <Wrap>
      <Logo>Arooo</Logo>
    </Wrap>
  );
};

const Wrap = styled.header`
  padding: 20px;
  border-bottom: 1px solid #ebebeb;
`;

const Logo = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
`;

export default Header;
