import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import styles from '../styles/Projects.module.css'


export default function projects() {
  return (
    <div className="full">
      <Head>
        <title>Uroš Milovanović | Projects</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Navbar/>

      <header className={styles.containerHeader}>
          <h1 className={styles.title}>Projects</h1>
      </header>
      <main className={styles.grid}>
      <div className={styles.projectItem}>
            <div className={styles.projectImg}>
                <img src="eximia.svg" className={styles.projectPic}/>
            </div>
            <div className={styles.projectText}>
                <h2 className={styles.projectTitle}>Eximia One</h2>
                <a href="https://eximia.one" target="_blank" className={styles.projectLink}>
                    https://eximia.one
                </a>
                <p className={styles.projectParagraf} >
                    Building a wide range of APIs that developers love to use.
                </p>
            </div>
        </div>
        <div className={styles.projectItem}>
            <div className={styles.projectImg}>
                <img src="favicon.svg" className={styles.projectPic}/>
            </div>
            <div className={styles.projectText}>
                <h2 className={styles.projectTitle}>Personal Website</h2>
                <a href="https://gitlab.com/urkem/personal_website" target="_blank" className={styles.projectLink}>
                    https://gitlab.com/urkem/personal_website
                </a>
                <p className={styles.projectParagraf} >
                    I built all the pages you're looking at now using Next.js.
                </p>
            </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}