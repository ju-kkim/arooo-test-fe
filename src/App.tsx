import { Route, Routes } from 'react-router-dom';
import Home from 'page/Home/Home';
import View from 'page/View/View';

function App() {
  return (
    <>
      <h1>Arooo</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view/:contentId" element={<View />} />
      </Routes>
    </>
  );
}

export default App;
