import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import News from './components/News';
import Post from './components/news/[id]';
import Service from './components/Service';
import Interview from './components/Interview';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <main className="App">
        <Header />
        <div class="p-inner">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news' element={<News />} />
            <Route exact path="/news/:id" element={<Post />} />
            <Route path='/service' element={< Service />} />
            <Route path='/interview' element={<Interview />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
