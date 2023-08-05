import Button from 'components/Button/Button';
import { useState } from 'react';
import { flex } from 'styles/mixins';
import { Likes } from 'types/content';
import { fetchData } from 'utils/fetchData';

type LikeProps = {
  id: string;
  likes: Likes;
  isLike: boolean;
};

const Like = ({ id, likes, isLike }: LikeProps) => {
  const [isLikeState, setIsLikeState] = useState(isLike);
  const [likeNum, setLikeNum] = useState(likes);

  const clickLike = async () => {
    const { likes, isLike } = await fetchData<{ likes: Likes; isLike: boolean }>(
      `/library/content/${id}/like`,
      { method: 'POST' }
    );

    setIsLikeState(isLike);
    setLikeNum(likes);
  };

  return (
    <Button onClick={clickLike} buttonStyle={LikeStyle}>
      <span>{isLikeState ? '❤️' : '🤍'}</span>
      <span>{likeNum}</span>
    </Button>
  );
};

const LikeStyle = `
  ${flex({ alignItems: 'center', gap: '5px' })}
  flex-shrink: 0;
  padding: 5px 0;
`;

export default Like;
