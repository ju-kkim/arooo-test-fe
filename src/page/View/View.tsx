import Button from 'components/Button/Button';
import Detail from 'layout/Detail/Detail';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ContentDetail } from 'types/content';
import { fetchData } from 'utils/fetchData';

const View = () => {
  const { contentId } = useParams();
  const [data, setData] = useState<ContentDetail | null>(null);
  const navigate = useNavigate();

  const goList = () => navigate(-1);

  useEffect(() => {
    const url = `/library/content/${contentId}`;
    const getData = async () => {
      const data = await fetchData<ContentDetail>(url);
      setData(data);
    };

    getData();
  }, [contentId]);

  return (
    <main>
      {data && <Detail {...data} />}
      <Button onClick={goList} buttonStyle={BackButton}>
        목록
      </Button>
    </main>
  );
};

const BackButton = `
  display: block;
  border: 1px solid #000;
  padding: 5px 10px;
  margin: 20px auto 0;
`;

export default View;
