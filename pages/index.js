import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Home_main from './Home_main'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Khushi metal & Alloys | Hi-Nickel Alloy, Stainless Steel, Round Bar,
          Centrifugal Pipe - Khushimetalandalloys.com
        </title>
        <meta
          name="description"
          content="Khushi metal and alloys has made a name for itself in the list of top suppliers of Scrap, Scrap in India. The supplier company is located in Mumbai, Maharashtra and is one of the leading sellers of listed products. Buy Scrap in bulk from us for the best quality products and service."
        />
        <meta
          name="keywords"
          content="Khushi Metal,Khushi Metals,Khushi Metal and steel ,Khushi steel,Khushi steel & alloys,Khushi metals and alloy, steel scraps, alloys scrap mumbai, alloys scrap india"
        />
        <meta name="author" content="Khushimetalandalloys.com" />

        <link rel="icon" href="/favicon.ico" />

        <script
          src="https://code.jquery.com/jquery-3.6.1.min.js"
          integrity="sha256-o88AwQnZB+VDvE9tvIXrMQaPlFFSUTR+nldQm1LuPXQ="
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />
        <meta
          name="google-site-verification"
          content="wsVVMilTgVZRkjsPkBBTM4KKbhuPjYtA-nCElavgGbg"
        />
      </Head>
      <Home_main />
    </div>
  );
}
