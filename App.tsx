
import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import Layout from './components/Layout';

const Home = lazy(() => import('./pages/Home'));
const ProductDetail_AFC = lazy(() => import('./pages/ProductDetail_AFC'));
const ProductDetail_SOPHGO = lazy(() => import('./pages/ProductDetail_SOPHGO'));
const ProductDetail_Espressif = lazy(() => import('./pages/ProductDetail_Espressif'));
const ProductDetail_STM = lazy(() => import('./pages/ProductDetail_STM'));
const SolutionDetail_AICamera = lazy(() => import('./pages/SolutionDetail_AICamera'));
const Technology_AITracking = lazy(() => import('./pages/Technology_AITracking'));
const Technology_DShot = lazy(() => import('./pages/Technology_DShot'));
const Blog = lazy(() => import('./pages/Blog'));
const Careers = lazy(() => import('./pages/Careers'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
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
    document.documentElement.lang = normalized;
    saveLang(normalized);
  }, [lang, navigate]);

  return (
    <Layout>
      <Suspense
        fallback={(
          <div className="min-h-[50vh] flex items-center justify-center text-gray-700 text-sm uppercase tracking-[0.2em]">
            Loading
          </div>
        )}
      >
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="products/afc-v1" element={<ProductDetail_AFC />} />
          <Route path="products/sophgo/:modelId" element={<ProductDetail_SOPHGO />} />
          <Route path="products/espressif/:modelId" element={<ProductDetail_Espressif />} />
          <Route path="products/stm/:modelId" element={<ProductDetail_STM />} />
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
      </Suspense>
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
