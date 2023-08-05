import { useParams } from 'react-router-dom';

const View = () => {
  const { contentId } = useParams();
  return (
    <main>
      <p>View {contentId}</p>
    </main>
  );
};

export default View;
