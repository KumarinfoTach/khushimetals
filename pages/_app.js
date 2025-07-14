import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout from '../Components/Layout'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import Loader from '../Components/SmallComponents/Loader'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true)
  
  Router.events.on('routeChangeStart', (url) => {
    setLoading(true)
    document.getElementById("mobile_list").classList.add("d_none_m");
  })
  
  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false)
  })
  
  useEffect(() => {
    setLoading(false)
  }, [])

  // JSON-LD structured data
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Khushi Metal And Alloys",
    "description": "Trader and wholesaler of Hi Nickel & Special Alloy Scraps including Inconel Scrap, Nicrum Spring 80/20, and Scrap 904l since 2013.",
    "foundingDate": "2013",
    "founder": {
      "@type": "Person",
      "name": "Lalit Modi"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No - 02, Ground Floor, 91, Haji Mansion, 3rd Kamithipura Lane, Mumbai Central",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400008",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-8291870720",
        "contactType": "customer service"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-8080059591",
        "contactType": "customer service"
      }
    ],
    "email": [
      "khushimetalandalloy@gmail.com",
      "lalitmodi2014@gmail.com"
    ],
    "url": "https://khushimetal.com",
    "sameAs": [],
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10",
      "unitText": "employees"
    },
    "vatID": "27BNQPS1539G1ZJ",
    "paymentAccepted": ["Cash", "Credit Card", "DD", "Cheque"],
    "priceRange": "Rs. 1 - 2 Crore",
    "serviceArea": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Metal Scrap Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Hi-Nickel Scrap",
            "description": "Including Inconal 600, 625, 800, 825, 904L, Monal K 400/500, Hast-C 22/276, SMO 254"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Cobalt Base Alloys Scrap",
            "description": "Including SH-4, SH-6, SH-12, SH-21, SH-25, SH-31, SH-605, F-75, FSX-414"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Pure Metal",
            "description": "Pure Nickel, Pure Molly, Pure Chromium, Pure Tungsten, Pure Mergence, Pure Cobalt, Pure Niobium, Pure Tantalum"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Stainless Steel Scrap",
            "description": "200, 300 and 400 series including 201, 202, 304, 304L, 310, 316, 316L, 321, 410, 430, Duplex 2205, Super Duplex 2507"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Ferro Alloys",
            "description": "Ferro Molly, Ferro Niobium, Ferro Tungsten, Ferro vanadium, Ferro mergence, Ferro chromium, L.C. chromium, L.C. mergence"
          }
        }
      ]
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Khushi Metal And Alloys",
    "image": "https://khushimetal.com/Images/logo.png",
    "description": "Leading trader and wholesaler of Hi Nickel & Special Alloy Scraps in Mumbai. Established in 2013, we specialize in Inconel Scrap, Nicrum Spring 80/20, and Scrap 904l with quality assured products.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No - 02, Ground Floor, 91, Haji Mansion, 3rd Kamithipura Lane, Mumbai Central",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400008",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "18.9667",
      "longitude": "72.8333"
    },
    "telephone": "+91-8291870720",
    "email": "khushimetalandalloy@gmail.com",
    "url": "https://khushimetal.com",
    "openingHours": "Mo-Sa 09:00-18:00",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "DD", "Cheque"]
  }

  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <title>Khushi Metal And Alloys - Hi Nickel & Special Alloy Scraps Trader | Mumbai</title>
        <meta name="description" content="Leading trader and wholesaler of Hi Nickel & Special Alloy Scraps in Mumbai since 2013. We specialize in Inconel Scrap, Nicrum Spring 80/20, Scrap 904l, Stainless Steel Scrap, Pure Metals, and Ferro Alloys with quality assured products." />
        <meta name="keywords" content="nickel scrap, inconel scrap, stainless steel scrap, metal scrap trader, alloy scrap, ferro alloys, pure metals, cobalt base alloys, mumbai metal scrap, khushi metal alloys" />
        <meta name="author" content="Khushi Metal And Alloys" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Khushi Metal And Alloys - Hi Nickel & Special Alloy Scraps Trader | Mumbai" />
        <meta property="og:description" content="Leading trader and wholesaler of Hi Nickel & Special Alloy Scraps in Mumbai since 2013. Quality assured Inconel Scrap, Nicrum Spring 80/20, and Scrap 904l." />
        <meta property="og:url" content="https://khushimetal.com" />
        <meta property="og:site_name" content="Khushi Metal And Alloys" />
        <meta property="og:image" content="https://khushimetal.com/Images/logo.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Khushi Metal And Alloys Logo" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Khushi Metal And Alloys - Hi Nickel & Special Alloy Scraps Trader | Mumbai" />
        <meta name="twitter:description" content="Leading trader and wholesaler of Hi Nickel & Special Alloy Scraps in Mumbai since 2013. Quality assured Inconel Scrap, Nicrum Spring 80/20, and Scrap 904l." />
        <meta name="twitter:image" content="https://khushimetal.com/Images/logo.png" />
        <meta name="twitter:image:alt" content="Khushi Metal And Alloys Logo" />
        
        {/* Business Information */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        <meta name="geo.position" content="18.9667;72.8333" />
        <meta name="ICBM" content="18.9667, 72.8333" />
        
        {/* Contact Information */}
        <meta name="contact" content="khushimetalandalloy@gmail.com" />
        <meta name="phone" content="+91-8291870720" />
        <meta name="address" content="Shop No - 02, Ground Floor, 91, Haji Mansion, 3rd Kamithipura Lane, Mumbai Central, Mumbai - 400008" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://khushimetal.com" />
        <meta name="google-site-verification" content="wsVVMilTgVZRkjsPkBBTM4KKbhuPjYtA-nCElavgGbg" />
        <meta name="msvalidate.01" content="63957D669D5E8771E086E22F34FDA836" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        
        {/* Verification Tags (Add your verification codes here) */}
        {/* <meta name="google-site-verification" content="your-google-verification-code" /> */}
        {/* <meta name="msvalidate.01" content="your-bing-verification-code" /> */}
        
        {/* Additional Business Schema for better local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Khushi Metal And Alloys",
              "url": "https://khushimetal.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://khushimetal.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </Head>
      
      {loading ? <Loader /> : 
        <Layout>
          <Component {...pageProps} />
        </Layout>
      }
    </>
  )
}

export default MyApp