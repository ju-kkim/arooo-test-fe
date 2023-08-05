import Button from 'components/Button/Button';
import { styled } from 'styled-components';
import { flex } from 'styles/mixins';

type LikeProps = {
  likes: number;
};

const Like = ({ likes }: LikeProps) => {
  return (
    <LikeWrap>
      <Button
        onClick={() => {
          // TODO: counter
          console.log('좋아요');
        }}
        buttonStyle={LikeStyle}>
        ❤️ 좋아요
      </Button>
      <span>{likes}</span>
    </LikeWrap>
  );
};

const LikeWrap = styled.div`
  ${flex({ alignItems: 'center', gap: '5px' })}
  flex-shrink: 0;
`;

const LikeStyle = `
  padding: 5px 0
`;

export default Like;
