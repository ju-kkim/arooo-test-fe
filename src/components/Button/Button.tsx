import { MouseEventHandler } from 'react';
import { styled } from 'styled-components';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick: MouseEventHandler;
  buttonStyle: string;
};
const Button = ({ type = 'button', children, onClick, buttonStyle }: ButtonProps) => {
  return (
    <ButtonStyle type={type} onClick={onClick} buttonStyle={buttonStyle}>
      {children}
    </ButtonStyle>
  );
};

const ButtonStyle = styled.button<{ buttonStyle: string }>`
  ${({ buttonStyle }) => buttonStyle}
`;

export default Button;
