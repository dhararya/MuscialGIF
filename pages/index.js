import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation.tsx'
import NameDescription from '../components/nameDescription.tsx'
import MusicalGIF from '../components/MusicalGIF.tsx'

export default function Home() {
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
          <NameDescription/>
          <center><MusicalGIF/></center>
       </div>
      </body>

    </div>
  )
}
