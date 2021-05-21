import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NameDescription from '../components/nameDescription.tsx'
import MusicalGIF from '../components/MusicalGIF.tsx'
import { useRouter } from 'next/router'
import React, { useState } from "react";
import { db } from "../utils/firebase/firebase";

export async function getServerSideProps(context) {
    let caption = "Invalid Link!";
    let sound = "https://soundcloud.com/soundeffectsforfree/baby-crying-sound-effect";
    let gifID = "UoeaPqYrimha6rdTFV";
    
    const url = context.req.url;
    const subdomain = url.split('/')[1]
    const docs = await db.collection("creation")
        .where("linkExt", "==", String(subdomain))
        .get();
      docs.forEach(doc => {
        let pageDetails = doc.data();
        caption = pageDetails.caption;
        sound = pageDetails.sound;
        gifID = pageDetails.gif_id;
      })
    
    return {props: { caption, sound, gifID } }
  }


export default function Page({caption, sound, gifID}){ 
  
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height"></meta>
        <title>Musical GIF</title>
      </Head>

      <body className={styles.body}>
        <div className={styles.innerbody}>
          <center>
          </center>
          <NameDescription/>
          <center>
            <MusicalGIF caption={caption} gifID={gifID} sound={String(sound)} isSet={true}/>
          </center>

       </div>
      </body>

    </div>
  )
}
