import Like from 'components/Like/Like';
import Title from 'components/Title/Title';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { flex } from 'styles/mixins';

type ListItemProps = {
  id: string;
  title: string;
  likes: number;
};

/* 
TODO
- like 기능
*/

const ListItem = (content: ListItemProps) => {
  return (
    <Item>
      <ViewLink to={`/view/${content.id}`}>
        <Title text={content.title} />
      </ViewLink>
      <Like likes={content.likes} />
    </Item>
  );
};

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
