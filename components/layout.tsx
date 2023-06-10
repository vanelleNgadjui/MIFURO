import React, { ReactNode } from 'react';
import Link from 'next/link';
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      Ajoute ici les éléments de mise en page communs
     
    </div>
  );
};

export default Layout;
