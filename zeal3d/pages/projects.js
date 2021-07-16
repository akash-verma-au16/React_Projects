import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchSection from '../components/SearchSection';
import PropertyCards from '../components/ProjectsPage/PropertyCards';
import ProjectsBanner from '../components/ProjectsPage/ProjectsBanner';

export default function Home() {
  const navMenu = ['Home', 'Projects', 'Localities', 'Developers'];
  const [activeNav, setActiveNav] = useState('Projects');
  const [bedrooms, setBedrooms] = useState(2);
  const properties = [
    {
      imgSrc:
        'https://images.unsplash.com/photo-1531870095880-cac1a675e830?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80',
      developerName: 'Lodha Group',
      propertyName: 'Lodha Miracles',
      address: 'Andheri East, Mumbai',
      lowerRange: 450,
      upperRange: 680,
      area: 450,
      bhk: 2,
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1531870095880-cac1a675e830?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80',
      developerName: 'Lodha Group',
      propertyName: 'Lodha Miracles',
      address: 'Andheri East, Mumbai',
      lowerRange: 450,
      upperRange: 680,
      area: 450,
      bhk: 2,
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1531870095880-cac1a675e830?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80',
      developerName: 'Lodha Group',
      propertyName: 'Lodha Miracles',
      address: 'Andheri East, Mumbai',
      lowerRange: 450,
      upperRange: 680,
      area: 450,
      bhk: 2,
    },
    {
      imgSrc:
        'https://images.unsplash.com/photo-1531870095880-cac1a675e830?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=376&q=80',
      developerName: 'Lodha Group',
      propertyName: 'Lodha Miracles',
      address: 'Andheri East, Mumbai',
      lowerRange: 450,
      upperRange: 680,
      area: 450,
      bhk: 2,
    },
  ];

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
      <ProjectsBanner />
      <SearchSection />
      <PropertyCards
        properties={properties}
        bedrooms={bedrooms}
        setBedrooms={setBedrooms}
      />
      <Footer />
    </div>
  );
}
