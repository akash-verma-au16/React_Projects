import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchSection from '../components/SearchSection';
import Project from '../components/HomePage/ProjectBanner';
import HomeBanner from '../components/HomePage/HomeBanner';
import QuickExplore from '../components/HomePage/QuickExplore';
import PropertySelection from '../components/HomePage/PropertySelection';
import LocalitiesBanner from '../components/HomePage/LocalitiesBanner';
import AboutUsBanner from '../components/HomePage/AboutUsBanner';
import WhatWeDoBanner from '../components/HomePage/WhatWeDoBanner';
import RecentProjects from '../components/HomePage/RecentProjects';

export default function Home() {
  const navMenu = ['Home', 'Projects', 'Localities', 'Developers'];
  const [activeNav, setActiveNav] = useState('Home');
  const [bedrooms, setBedrooms] = useState(2);

  return (
    <div>
      <Head>
        <title>Zeal</title>
        <meta name='description' content='Zeal 3D' />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <HomeBanner />
      <Header
        navMenu={navMenu}
        activeNav={activeNav}
        setActiveNav={setActiveNav}
      />
      <Project />
      <SearchSection bedrooms={bedrooms} setBedrooms={setBedrooms} />
      <QuickExplore />
      <PropertySelection />
      <LocalitiesBanner />
      <AboutUsBanner />
      <WhatWeDoBanner />
      <RecentProjects />
      <Footer />
    </div>
  );
}
