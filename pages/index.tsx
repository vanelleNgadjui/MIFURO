import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';

const HomePage: React.FC = () => {
  return (
    <div className='body'>
      <header>
        <div className='logo_svg'>
          <img src="/logo.svg" alt="" />
        </div>
      </header>

      <main>
        <section className='section1'>
          <div className='presation'>
            <div className='logo-image'>
              <div className='dessin-logo'>
                <p className='full-text'>CRITIK EYE</p>
                <img src="/lunettes.png" alt="" />
                <p className='noFull-text'>CRITIK EYE</p>
              </div>
            </div>

            <div className='text-presentation'>
              <h2 className='text1'>ON RÉMUNÈRE LES CRASHS TESTEURS</h2>
              <p className='text2'>Êtes-vous prêt à nous faire part de vos opinions qui nous permettront d'améliorer des inventions futures?</p>

              <Link href="#section_contact" legacyBehavior>
                <div className='buttons'>
                  <p> PARTICIPEZ !</p>
                  <img src="/arrow.svg" alt="" />
                </div>
              </Link>
            </div>
          </div>
          <Link href="#section_contact" legacyBehavior>
            <div className='logo-circle'>
              <img src="/circle-logo.svg" alt="" />
            </div></Link>
          <div className='bandeau'>
            <img src="/bandeau.svg" alt="" />
            <img src="/bandeau.svg" alt="" />
          </div>
        </section>

        <section className='section2'>
          <div className='services' >


            <div className='title'>
              <h1>NOS SERVICES</h1>
              <img src="star.svg" alt="" />
            </div>
            <div className='text'>
              <p>
                <span> Testez en avant-première des produits technologiques</span> avec <span>Critikeye</span> et évaluez leur qualité,
                leur fonctionnement et leur convivialité. <span>Votre avis est précieux et vous serez récompensé(e)
                  pour chaque évaluation effectuée.</span> Rejoignez notre communauté passionnée,
                découvrez des produits exclusifs, collaborez avec des entreprises innovantes
                et participez à façonner l'avenir de la technologie. Inscrivez-vous dès aujourd'hui et
                transformez votre passion pour la technologie en une opportunité rémunérée !</p>
            </div>
          </div>
          <div className='bandeau'>
            <img src="/bandeau.svg" alt="" />
            <img src="/bandeau.svg" alt="" />
          </div>
        </section>

        <section className='section3'>
          <div className='title'>
            <h1 className='h1'>VOS PROJETS CONCRÉTISÉS</h1>
            <img src="star.svg" alt="" />
          </div>
          <div className='bgCriteye'>
            <img src="criteyebg.svg" alt="" />
          </div>
          <div className='formSection'>
            <div className='text-form'>
              <h3>
                De l'idée à l'image : réalisez votre gadget de rêve en un clin d'oeil !
              </h3>
              <p>Exprimez vos idées les plus audacieuses et recevez représentation visuelle époustouflante votre gadget technologique idéal.  Remplissez le formulaire ci-dessous et laissez-nous transformer votre imagination en réalité technologique.</p>
            </div>

            <form action="">
              <div className="inputbox">
                <input className='input' type="text" required />
                <span >E-mail</span>
              </div>
              <div className="inputbox">
                <input className='input' type="text" required />
                <span >Nom  & Prénom</span>
              </div>
              <div className="inputbox">
                <span >Description du produit</span>
                <textarea className='input' required />
              </div>
              <div className="inputbox">
                <input className='input' type="text" required />
                <span >Objectifs du produit</span>
              </div>
              <div className="inputbox">
                <input className='input' type="text" required />
                <span>Fonctionnalités souhaitées</span>
              </div>
              <Link href="#section_contact" legacyBehavior>
                <div className='buttons envoyer'>
                  <p> ENVOYEZ</p>
                </div>
              </Link>
            </form>
          </div>

        </section>
      </main>

      <footer>
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
      </footer>
    </div>
  );
};

export default HomePage;
