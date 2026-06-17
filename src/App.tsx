import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash/Splash';
import Greeting from './pages/Greeting/Greeting';
import Card from './pages/Card/Card';
import Story from './pages/Story/Story';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/card" element={<Card />} />
        <Route path="/story" element={<Story />} />
      </Routes>
    </Router>
  );
}

export default App;
