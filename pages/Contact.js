import React from 'react'
import Head from 'next/head'
import Navbar from "../components/Navbar"
import Footer from "../components/footer"
import {getImages} from '../util/database'

export async function getStaticProps() {
  const images = await getImages();

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

function ContactCard({ name, phone, address, email }) {
  return (
    <div className="contact-card">
      <h3>{name}</h3>
      <p>Phone: {phone}</p>
      <p>Address: {address}</p>
      <p>Email: {email}</p>
    </div>
  );
}

const Contact = ({images}) => {
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
      <h1>联系我们</h1>
      <p style={{ whiteSpace: 'pre-line' }}>
        发现中国美为全球最值得信赖华人旅游品牌，仅接受旅行社同业咨询和报名。 
        全球客人報名請洽您所在地区城市信任的旅行社。
        全球各地旅行社同业报名諮詢電話如下：
      </p>
        <ContactCard
          name="(USA) Headquarter Office"
          phone="123-456-7890"
          address="123 Main St, City"
          email="johndoe@example.com"
        />
        <ContactCard
          name="(USA) New York Office"
          phone="987-654-3210"
          address="456 Elm St, City"
          email="janesmith@example.com"
        />
        <ContactCard
          name="(USA) San Francisco Office"
          phone="987-654-3210"
          address="456 Elm St, City"
          email="janesmith@example.com"
        />
      </main>

      <Footer />

    </div>
  )
}

export default Contact
