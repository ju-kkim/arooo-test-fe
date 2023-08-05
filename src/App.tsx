import { Route, Routes } from 'react-router-dom';
import Home from 'page/Home/Home';
import View from 'page/View/View';
import { styled } from 'styled-components';
import Header from 'layout/Header/Header';

function App() {
  return (
    <Wrap>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:contentId" element={<View />} />
      </Routes>
    </Wrap>
  );
}

const Wrap = styled.div`
  max-width: 440px;
  width: 100%;
  margin: 0 auto;
`;

export default App;
