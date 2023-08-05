import ListItem from 'components/ListItem/ListItem';
import { styled } from 'styled-components';
import { Content } from 'types/content';

type ListProps = {
  contents: Content[];
};

const List = ({ contents }: ListProps) => {
  return (
    <ListWrap>
      {contents.map((content) => (
        <ListItem key={content.id} {...content} />
      ))}
    </ListWrap>
  );
};

const ListWrap = styled.ul`
  li {
    border-bottom: 1px solid #ebebeb;
  }
`;

export default List;
