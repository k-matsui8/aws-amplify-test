import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import News from './components/News';
import Service from './components/Service';
import Interview from './components/Interview';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/service' element={< Service />} />
          <Route path='/interview' element={<Interview />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
