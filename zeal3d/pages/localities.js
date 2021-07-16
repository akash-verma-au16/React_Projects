import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchLocalities from '../components/LocalitiesPage/SearchLocalities';
import LocalitiesResults from '../components/LocalitiesPage/LocalitiesResults';
import LocalitiesBanner from '../components/LocalitiesPage/LocalitiesBanner';

export default function Home() {
  const navMenu = ['Home', 'Projects', 'Localities', 'Developers'];
  const [activeNav, setActiveNav] = useState('Localities');

  return (
    <div>
      <Head>
        <title>Zeal</title>
        <meta name='description' content='Zeal 3D' />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <Header
        navMenu={navMenu}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      <LocalitiesBanner />
      <SearchLocalities />
      <LocalitiesResults />
      <Footer />
    </div>
  );
}
