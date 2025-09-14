
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Specializations from './pages/Specializations/Specializations';
import Teachers from './pages/Teachers/Teachers';
import Dashboard from './pages/Dashboard/Dashboard';
import News from './pages/News/News';
import Activities from './pages/Activities/Activities';
import Contact from './pages/Contact/Contact';
import Bagrut from './pages/Bagrut/Bagrut';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/specializations" element={<Specializations />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/news" element={<News />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/bagrut" element={<Bagrut />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;