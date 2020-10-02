import Head from 'next/head'
import Navbar from '../components/Navbar'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Uroš Milovanović | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>

      <header className={styles.containerHeader}>
        <img src="/Profile_pic.png" className={styles.profile}/>
        <a href="">
          <h1 className={styles.name}>Uroš Milovanović</h1>
        </a>
        <a>
          <h2>Aspiring Software Dev</h2>
        </a>
      </header>

      <main className="containerMain">
        <div className="about">
          <h3>
            About Me
          </h3>
          <p>
            My primary interest lies in doing computer related projects
            form tinkering with linux on a raspberry pi to solving problems on LeetCode.com. 
            I’m also an avid community member of many technology subreddits (r/buildapc, r/dailyprogrammer, r/selfhosted...).
          </p>
        </div>
        <div className="contact">
            My primary interest lies in doing computer related projects
            form tinkering with linux on a raspberry pi to solving problems on LeetCode.com. 
            I’m also an avid community member of many technology subreddits (r/buildapc, r/dailyprogrammer, r/selfhosted...).
        </div>
      </main>

    </div>
  )
}
