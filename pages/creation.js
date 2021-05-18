import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation.tsx'
import NameDescription from '../components/nameDescription.tsx'
import MusicalGIF from '../components/MusicalGIF.tsx'
import CaptionBar from '../components/captionBar.tsx'

export default function Creation() {
  const caption = typeof window !== 'undefined' ? localStorage.getItem("caption") : null;
  return (
    <div className={styles.container}>
      <Head>
        <title>Musical GIF</title>
      </Head>

      <body className={styles.body}>
        <div className={styles.innerbody}>
          <center>
          <Navigation/>
          </center>
          <center>
            <MusicalGIF caption={caption}/>
          </center>

       </div>
      </body>

    </div>
  )
}
