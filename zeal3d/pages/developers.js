import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DevelopersIcons from '../components/DevelopersPage/DevelopersIcons';
import ProjectCards from '../components/DevelopersPage/ProjectCards';
import DevelopersBanner from '../components/DevelopersPage/DevelopersBanner';

export default function Home() {
  const navMenu = ['Home', 'Projects', 'Localities', 'Developers'];
  const [activeNav, setActiveNav] = useState('Developers');
  const projects = [
    {
      logoSrc: '/assets/lodha.png',
      name: 'Lodha Group',
      experience: '35+ years of experience',
      done: '140+ Projects Done',
      completed: 19,
      ongoing: 5,
      upcoming: 2,
    },
    {
      logoSrc: '/assets/prestige.png',
      name: 'Prestige Group',
      experience: '35+ years of experience',
      done: '140+ Projects Done',
      completed: 19,
      ongoing: 5,
      upcoming: 2,
    },
    {
      logoSrc: '/assets/brigade.png',
      name: 'Brigade Group',
      experience: '35+ years of experience',
      done: '140+ Projects Done',
      completed: 19,
      ongoing: 5,
      upcoming: 2,
    },
    {
      logoSrc: '/assets/brigade.png',
      name: 'Brigade Group',
      experience: '35+ years of experience',
      done: '140+ Projects Done',
      completed: 19,
      ongoing: 5,
      upcoming: 2,
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
      <DevelopersBanner />
      <DevelopersIcons projects={projects} />
      <ProjectCards projects={projects} />
      <Footer />
    </div>
  );
}
