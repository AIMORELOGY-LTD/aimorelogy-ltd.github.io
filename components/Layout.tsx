
import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { RoutePath } from '../types';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHome = location.pathname === RoutePath.HOME;

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">
      <Header />
      {/* 
        If it's Home, no padding (content goes behind transparent header).
        Otherwise, add pt-[72px] to push content below fixed header.
      */}
      <main className={`flex-grow ${isHome ? '' : 'pt-[72px]'}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
