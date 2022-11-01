import type { NextPage } from 'next'
import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/Header/Header';
// import Link from 'next/link'

import MainPage from './MainPage/MainPage';
import About from './About/About';
import Skills from './Skills/Skills';

const Home: NextPage = () => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Portifolio Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.home_main}>
        <Header/>
        <MainPage />
        <About/>
        <Skills/>
      </div>
    
      {/* <h1 className={styles.color}>Home</h1>

      <Link href="/about">
        <a>About</a>
      </Link> */}
      
    </div>
  )
}

export default Home
