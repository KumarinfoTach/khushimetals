import React from 'react'
import { Footer } from './Footer'
import Header from './Header'
import ScrollButton from '../Components/SmallComponents/ScrollTop'
import Head from "next/head";
import { useRouter } from "next/router";
const Layout = ({title, children }) => {
  const router = useRouter();
    title = router.pathname.split("/")[1];
  return (
    <>
      <Head>
        <title>
          {title
            ? title +
              "-Khushi metal & Alloys| Hi-Nickel Alloy,Cobalt Stainless Steel Scraps - Khushimetal.com"
            : "Khushi metal & Alloys | Hi-Nickel Alloy,Cobalt Stainless Steel Scraps - Khushimetal.com"}
        </title>
        <meta
          name="description"
          content="Khushi metal and alloys has made a name for itself in the list of top suppliers of Scrap, Scrap in India. The supplier company is located in Mumbai, Maharashtra and is one of the leading sellers of listed products. Buy Scrap in bulk from us for the best quality products and service."
        />
        <meta
          name="keywords"
          content="Khushi Metal,Khushi Metals,Khushi Metal and steel ,Khushi steel,Khushi steel & alloys,Khushi metals and alloy, steel scraps, alloys scrap mumbai, alloys scrap india,Iconel 600,inconel 800,inconel 625,inconel 825,904L,HC-276,HC-22,Monel 400,Monel k500,Nickel,F75,SH-6,Sh-4,Nicr,Tungsten,Moly,Titanium,Cobalt scrap,SS Scrap,Turnings"
        />
        <meta name="author" content="Khushimetal.com" />
        <meta
          name="google-site-verification"
          content="wsVVMilTgVZRkjsPkBBTM4KKbhuPjYtA-nCElavgGbg"
        />
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
      </Head>
      <Header />
      {children}
      <ScrollButton />
      <Footer />
    </>
  );
}

export default Layout