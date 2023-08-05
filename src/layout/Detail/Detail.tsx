import Content from 'components/Content/Content';
import Like from 'components/Like/Like';
import Title from 'components/Title/Title';
import { styled } from 'styled-components';
import { flex } from 'styles/mixins';
import { ContentDetail } from 'types/content';

const Detail = ({ title, likes, content }: ContentDetail) => {
  return (
    <div>
      <HeaderWrap>
        <Title text={title} isBold={true} />
        <Like likes={likes} />
      </HeaderWrap>
      <BodyWrap>
        <Content>{content}</Content>
      </BodyWrap>
    </div>
  );
};

const Wrap = styled.div`
  border-bottom: 1px solid #ebebeb;
`;

const HeaderWrap = styled(Wrap)`
  padding: 10px 20px;
  ${flex({ alignItems: 'center', justifyContent: 'space-between' })}
`;

const BodyWrap = styled(Wrap)`
  padding: 20px;
`;

export default Detail;
