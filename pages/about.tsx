import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import '../styles/about.css';

const About: React.FC = () => {
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
    </Layout>

      );
};

export default About;
