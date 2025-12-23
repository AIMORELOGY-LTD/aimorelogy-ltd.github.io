
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path={RoutePath.HOME} element={<Home />} />
          <Route path={RoutePath.PRODUCT_AFC} element={<ProductDetail_AFC />} />
          <Route path="/products/sophgo/:modelId" element={<ProductDetail_SOPHGO />} />
          <Route path="/products/espressif/:modelId" element={<ProductDetail_Espressif />} />
          <Route path={RoutePath.SOLUTION_DEMO} element={<SolutionDemo />} />
          <Route path={RoutePath.SOLUTION_AI_CAMERA} element={<SolutionDetail_AICamera />} />
          <Route path={RoutePath.TECHNOLOGY_AI_TRACKING} element={<Technology_AITracking />} />
          <Route path={RoutePath.TECHNOLOGY_DSHOT} element={<Technology_DShot />} />
          <Route path={RoutePath.BLOG} element={<Blog />} />
          {/* News Routes Removed */}
          <Route path={RoutePath.CAREERS} element={<Careers />} />
          <Route path={RoutePath.CONTACT} element={<Contact />} />
          <Route path={RoutePath.ABOUT} element={<About />} />
          
          {/* Legal Pages */}
          <Route path={RoutePath.PRIVACY} element={<PrivacyPolicy />} />
          <Route path={RoutePath.TERMS} element={<TermsOfService />} />
          <Route path={RoutePath.COOKIES} element={<CookiePolicy />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
