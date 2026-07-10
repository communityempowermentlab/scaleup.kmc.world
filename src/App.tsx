import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@/src/components/layout/Navbar';
import Footer from '@/src/components/layout/Footer';

// Pages
import Home from '@/src/pages/Home';
import Model from '@/src/pages/Model';
import Impact from '@/src/pages/Impact';
import Fund from '@/src/pages/Fund';
import Start from '@/src/pages/Start';
import About from '@/src/pages/About';
import Donate from '@/src/pages/Donate';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/model" element={<Model />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/fund" element={<Fund />} />
          <Route path="/start" element={<Start />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
