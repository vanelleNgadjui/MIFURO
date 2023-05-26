import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';

const HomePage: React.FC = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const fullText = "Ce site est en construction...";
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100); // Vitesse de frappe du texte (en millisecondes)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Layout>
      <h1>{text}</h1>
      {/* Ajoute ton contenu spécifique à la page ici */}
      <section className="social-icons">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
      </section>
    </Layout>
  );
};

export default HomePage;
