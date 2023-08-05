import Button from 'components/Button/Button';
import { flex } from 'styles/mixins';
import { Likes } from 'types/content';

type LikeProps = {
  id: string;
  likes: Likes;
  isLike: boolean;
};

const Like = ({ id, likes, isLike }: LikeProps) => {
  return (
    <Button
      onClick={() => {
        // TODO: counter
        console.log('좋아요');
      }}
      buttonStyle={LikeStyle}>
      <span>{isLike ? '❤️' : '🤍'}</span>
      <span>{likes}</span>
    </Button>
  );
};

const LikeStyle = `
  ${flex({ alignItems: 'center', gap: '5px' })}
  flex-shrink: 0;
  padding: 5px 0;
`;

export default Like;
