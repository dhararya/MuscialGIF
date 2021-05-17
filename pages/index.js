import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navigation from '../components/navigation.tsx'
import NameDescription from '../components/nameDescription.tsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>

      <body className={styles.body}>
       <center>
       <Navigation/>
       </center>
       <NameDescription/>
      </body>

    </div>
  )
}
