
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useLang } from '../i18n-routing';
import { RoutePath } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const lang = useLang();
  const isHome = location.pathname === `/${lang}` || location.pathname === `/${lang}/`;
  const isRu = lang === 'ru';

  return (
    <div className={`flex flex-col min-h-screen bg-white text-gray-900 font-sans ${isRu ? 'lang-ru' : ''}`} lang={lang}>
      {isRu && (
        <style>{`
          .lang-ru {
            overflow-x: hidden;
          }
          .lang-ru :where(h1, h2, h3, h4, p, span, button, a, li, td, th, div) {
            overflow-wrap: anywhere;
            word-break: break-word;
            hyphens: auto;
          }
        `}</style>
      )}
      <Header />
      {/* 
        If it's Home, no padding (content goes behind transparent header).
        Otherwise, add pt-[72px] to push content below fixed header.
      */}
      <main className={`flex-grow ${isHome ? '' : 'pt-[72px]'} ${isRu ? 'overflow-x-hidden' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
