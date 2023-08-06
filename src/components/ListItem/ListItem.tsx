import React from 'react';
import Like from 'components/Like/Like';
import Title from 'components/Title/Title';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { flex } from 'styles/mixins';
import { Content } from 'types/content';

const ListItem = React.memo(({ id, title, likes, isLike }: Content) => {
  return (
    <Item>
      <ViewLink to={`/view/${id}`}>
        <Title text={title} />
      </ViewLink>
      <Like id={id} likes={likes} isLike={isLike} />
    </Item>
  );
});

const Item = styled.li`
  ${flex({ justifyContent: 'space-between', alignItems: 'center' })}
`;

const ViewLink = styled(Link)`
  width: 100%;
  padding: 20px;
  overflow: hidden;

  h2 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

export default ListItem;
