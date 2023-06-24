import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Second from './pages/secondpage'
const App = () => {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/secondpage" element={<Second />} />
        {/* Add other routes/components here */}
      </Routes>
    </Router>
  );
};

export default App;
