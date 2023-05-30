import Link from 'next/link';
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
    // <Layout>
    //   <h1>{text}</h1>
    //   {/* Ajoute ton contenu spécifique à la page ici */}
    //   <section className="social-icons">
    //     <a href="#" className="social-icon">
    //       <i className="fab fa-facebook-f"></i>
    //     </a>
    //     <a href="#" className="social-icon">
    //       <i className="fab fa-twitter"></i>
    //     </a>
    //     <a href="#" className="social-icon">
    //       <i className="fab fa-instagram"></i>
    //     </a>
    //   </section>
    // </Layout>

    <div className='home'>
      <img className='vector1' src="/vector1.svg" alt="" />
      <img className='vector2' src="/vector2.svg" alt="" />
      <img className='vector3' src="/vector3.svg" alt="" />
      <img className='vector4' src="/vector4.svg" alt="" />
      <img className='vector5' src="/vector5.svg" alt="" />
      <img className='vector6' src="/vector6.svg" alt="" />
      <img className='vector7' src="/vector7.svg" alt="" />


      {/* <div className='vector1' ></div>
      <div className='vector2' ></div>
      <div className='vector3' ></div>
      <div className='vector4' ></div>
      <div className='vector5' ></div>
      <div className='vector6' ></div>
      <div className='vector7' ></div> */}

      <div className='center_div'>

        <div className='coming'>
          <img src="/comming.svg" alt="" />
        </div>
        <div className='coming_bg'>
          <img src="/cooming.svg" alt="" />
          <img src="/cooming.svg" alt="" />
        </div>

      </div>

      <div className='testeur'>
        <img src="/testeur.svg" alt="" />
      </div>

      <div className='buttons'>
        <Link href="/contact" legacyBehavior>
          <img src="/prevent.svg" alt="" />
        </Link>
      </div>

      <div className='socials'>
        <Link href="/contact" legacyBehavior>
          <img src="/twitter.svg" alt="" />
        </Link>
        <Link href="/contact" legacyBehavior>
          <img src="/discord.svg" alt="" />
        </Link>
        <Link href="/contact" legacyBehavior>
          <img src="/insta.svg" alt="" />
        </Link>
      </div>

    </div>
  );
};

export default HomePage;
