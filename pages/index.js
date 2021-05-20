import Head from 'next/head'
import styles from '../styles/Home.module.css'
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
          </center>
          <NameDescription/>
          <center>
            <MusicalGIF caption="Musical GIF will never give you up" gifID="lW9XPLjNXyDDO" sound="https://soundcloud.com/thepopposse/never-gonna-give-you-up"/>
          </center>

       </div>
      </body>

    </div>
  )
}
