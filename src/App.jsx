import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import AutoChains from './pages/AutoChains';
import MotorcycleSprockets from './pages/MotorcycleSprockets';
import QualityPolicy from './pages/QualityPolicy';
import Contact from './pages/Contact';
import Enquiry from './pages/Enquiry';
import ProductDetail from './pages/ProductDetail';
import SplashScreen from './components/SplashScreen';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Router>
            <ScrollToTop />
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/auto-chains" element={<AutoChains />} />
                <Route path="/motorcycle-sprockets" element={<MotorcycleSprockets />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/quality-policy" element={<QualityPolicy />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/enquiry" element={<Enquiry />} />
              </Routes>
            </Layout>
          </Router>
        </motion.div>
      )}
    </>
  );
}

export default App;
