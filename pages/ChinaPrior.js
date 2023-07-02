import React from 'react'
import Head from 'next/head'
import Navbar from "../components/Navbar"
import ImgCard from '../components/ImgCard'
import Footer from "../components/footer"
import {getPlace} from '../util/database'
import styles from './index.module.css'

export async function getStaticProps() {
  const type = 1;
  const images = await getPlace(type);

  if (!images) {
    return {
      notFound: true
    };
  }

  return { 
    props: {
      images: JSON.parse(JSON.stringify(images))
    }
  };
}

const ChinaPrior = ({images}) => {
  return (
    <div>
      <Head>
        <title>亚洲中国游</title>
      </Head>
      <div className="logo">
        <img src="/favicon.png" alt="Logo" />
      </div>
      <div className="transition flex justify-center duration-700 text-center">
         <Navbar></Navbar>
      </div>

      <main>
        <section className={styles.grid}>
          { images.map(image => <ImgCard {...image} key={image.id}/>) }
        </section>
      </main>

      <Footer />

    </div>
  )
}

export default ChinaPrior
