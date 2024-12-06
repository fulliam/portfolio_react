import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Hero from './pages/Hero/Hero';
import Projects from './pages/Projects/Projects';
import '@assets/styles/main.scss';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;