import React, { ReactNode } from 'react';
import Link from 'next/link';
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* Ajoute ici les éléments de mise en page communs */}
      <header>
        {/* Contenu de l'en-tête */}
        {/* <img src='logo.png'></img> */}
        <div className="logo">
          {/* Insérer le logo ici */}
          <Link legacyBehavior href="/">
            <a>
              <img src="/logo.png" alt="logo" />
            </a>
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link href="/" legacyBehavior>
                <a>
                  {/* <img className="icon" src="/app/assets/dashboard.svg" /> */}
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about" legacyBehavior>
                <a>
                  {/* <img className="icon" src="/app/assets/bd.svg" /> */}
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior>
                <a>
                  {/* <img className="icon" src="/app/assets/send.svg" /> */}
                  Contact
                </a>
              </Link>
            </li>
            
            {/* Ajouter d'autres liens de navigation ici */}
          </ul>
        </nav>
      </header>
      <main>
        {children}
      </main>
      <footer>
        {/* Contenu du pied de page */}
      </footer>
    </div>
  );
};

export default Layout;
