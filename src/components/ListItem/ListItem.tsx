import Like from 'components/Like/Like';
import Title from 'components/Title/Title';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { flex } from 'styles/mixins';
import { Content } from 'types/content';

/* 
TODO
- like 기능
*/

const ListItem = ({ id, title, likes }: Content) => {
  return (
    <Item>
      <ViewLink to={`/view/${id}`}>
        <Title text={title} />
      </ViewLink>
      <Like likes={likes} />
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
