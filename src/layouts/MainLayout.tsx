import React, { ReactNode } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface MainLayoutProps {
  children: ReactNode;
  theme: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, theme }) => {
  return (
    <div>
      <Header theme={theme} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
