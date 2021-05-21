import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NameDescription from '../components/nameDescription.tsx'
import MusicalGIF from '../components/MusicalGIF.tsx'

export default function Home() {
  let caption = "Musical GIF will never give you up";
  let sound = "https://soundcloud.com/thepopposse/never-gonna-give-you-up";
  let gifID = "lW9XPLjNXyDDO"
  return (
    <div className={styles.container}>
      <Head>
        <title>Musical GIF</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, height=device-height"></meta>
      </Head>

      <body className={styles.body}>
        <div className={styles.innerbody}>
          <center>
          </center>
          <NameDescription/>
          <center>
            <MusicalGIF caption={caption} gifID={gifID} sound={sound} isSet={false}/>
          </center>

       </div>
      </body>

    </div>
  )
}
