import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Home_main from './Home_main'


export default function Home() {
  return (
    <div className={styles.container}>
    
      <Home_main />
    </div>
  );
}
