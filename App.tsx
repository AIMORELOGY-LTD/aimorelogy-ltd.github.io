
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductDetail_AFC from './pages/ProductDetail_AFC';
import ProductDetail_SOPHGO from './pages/ProductDetail_SOPHGO'; 
import ProductDetail_Espressif from './pages/ProductDetail_Espressif'; 
import SolutionDemo from './pages/SolutionDemo';
import SolutionDetail_AICamera from './pages/SolutionDetail_AICamera'; 
import Technology_AITracking from './pages/Technology_AITracking'; 
import Technology_DShot from './pages/Technology_DShot'; // New Import
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import About from './pages/About';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import { RoutePath } from './types';
import i18n from './i18n';
import { getStoredLang, normalizeLang, saveLang } from './i18n-routing';

const LanguageRoutes: React.FC = () => {
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const normalized = normalizeLang(lang);
    if (lang !== normalized) {
      navigate(`/${normalized}`, { replace: true });
      return;
    }
    if (i18n.language !== normalized) {
      i18n.changeLanguage(normalized);
    }
    saveLang(normalized);
  }, [lang, navigate]);

  return (
    <Layout>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="products/afc-v1" element={<ProductDetail_AFC />} />
        <Route path="products/sophgo/:modelId" element={<ProductDetail_SOPHGO />} />
        <Route path="products/espressif/:modelId" element={<ProductDetail_Espressif />} />
        <Route path="solutions/demo" element={<SolutionDemo />} />
        <Route path="solutions/ai-camera" element={<SolutionDetail_AICamera />} />
        <Route path="technology/ai-tracking" element={<Technology_AITracking />} />
        <Route path="technology/control-protocol" element={<Technology_DShot />} />
        <Route path="blog" element={<Blog />} />
        <Route path="careers" element={<Careers />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="legal/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="legal/terms-of-service" element={<TermsOfService />} />
        <Route path="legal/cookie-preferences" element={<CookiePolicy />} />
      </Routes>
    </Layout>
  );
};

const App: React.FC = () => {
  const defaultLang = getStoredLang();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={`/${defaultLang}`} replace />} />
        <Route path="/:lang/*" element={<LanguageRoutes />} />
        <Route path="*" element={<Navigate to={`/${defaultLang}`} replace />} />
      </Routes>
    </Router>
  );
};

export default App;
