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
      <img className='vector_21' src="/vector1.svg" alt="" />
      <img className='vector_22' src="/vector2.svg" alt="" />
      <img className='vector_23' src="/vector3.svg" alt="" />
      <img className='vector_24' src="/vector4.svg" alt="" />
      <img className='vector_25' src="/vector5.svg" alt="" />
      <img className='vector_26' src="/vector6.svg" alt="" />
      <img className='vector_27' src="/vector7.svg" alt="" />
      <section className='section section1'>
        <div className='logo_svg'>
          <img src="/logo.svg" alt="" />
        </div>

        <div className='techRate'>
          <img src="/TechRatePhone.svg" alt="" />
        </div>

        {/* <div className='center_div'>

        <div className='coming'>
          <img src="/comming.svg" alt="" />
        </div>
        <div className='coming_bg'>
          <img src="/cooming.svg" alt="" />
          <img src="/cooming.svg" alt="" />
        </div>

      </div> */}

        <div className='testeur'>
          <img src="/testeur.svg" alt="" />
        </div>

        <div className='text'>
          <img src="/text.svg" alt="" />
        </div>

        <div className='buttons'>
          <Link href="#section_contact" legacyBehavior>
            <img src="/prevent.svg" alt="" />
          </Link>
        </div>

        <div className='end_section'>
          <img src="/section.svg" alt="" />
        </div>
      </section>

      <section className='section section2'>
        <div className='title'>
          <img src="/service.svg" alt="" />
        </div>
        <div className='text2'>
          <img src="/text2.svg" alt="" />
        </div>
        <div className='end_section'>
          <img src="/section.svg" alt="" />
        </div>
      </section>

      <section className='section section3' id='section_contact'>
        <div className='title'>
          <img src="/contact.svg" alt="" />
        </div>
        <div className='form_container'>
          <form className='form'>
            <div className="form-group">
              <p className="input-label uil uil-user">Nom et prenom<span className="required-icon">*</span></p>
              <input type="text" name="logname" className="form-style" id="logname" />

            </div>
            <div className="form-group mt-2">
              <p className="input-label uil uil-at">Email<span className="required-icon">*</span></p>

              <input type="email" name="logemail" className="form-style" id="logemail" />

            </div>
            <div className="form-group mt-2">
              <p className="input-label uil uil-lock-alt">Message</p>

              <textarea  name="logpass" className="form-style" id="logpass"> </textarea>

            </div>
            <div className='form-button'>
              <Link href="#section_contact" legacyBehavior>
                <img src="/form-button.svg" alt="" />
              </Link>
            </div>
          </form>
        </div>
      
        <div className='socials'>
          <Link href="/contact" legacyBehavior>
            <img src="/twitter.svg" alt="" />
          </Link>
          <Link href="/contact" legacyBehavior>
            <img src="/tiktok.svg" alt="" />
          </Link>
          <Link href="/contact" legacyBehavior>
            <img src="/insta.svg" alt="" />
          </Link>
          <Link href="/contact" legacyBehavior>
            <img src="/linkedin.svg" alt="" />
          </Link>
        </div>
      
      </section>



    </div>
  );
};

export default HomePage;
