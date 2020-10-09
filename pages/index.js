import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineGitlab, AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai'


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
          <h2 className={styles.title} >Software Developer & Linux enthusiast</h2>
        </a>
      </header>

      <main className="grid">
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
          <h3>
            Contact
          </h3>
          <div>
            <a href="https://gitlab.com/urkem" target="_blank" className={styles.contactLink}>
              <i className={styles.contactIcon}>
                <AiOutlineGitlab/>
              </i>
              <span className={styles.contactText} >GitLab</span>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/?hl=en" target="_blank" className={styles.contactLink}>
              <i className={styles.contactIcon}>
                <AiOutlineLinkedin/>
              </i>
              <span className={styles.contactText} >LinkedIn</span>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/?hl=en" target="_blank" className={styles.contactLink}>
              <i className={styles.contactIcon}>
                <AiOutlineInstagram/>
              </i>
              <span className={styles.contactText} >Instagram</span>
            </a>
          </div>
          <div>
          <a href="https://www.instagram.com/?hl=en" target="_blank" className={styles.contactLink}>
            <i className={styles.contactIcon}>
              <AiOutlineFacebook/>
            </i>
            <span className={styles.contactText} >Facebook</span>
          </a>
          </div>
          <div>
            <a href="mailto:urkem98@gmail.com" target="_blank" className={styles.contactLink}>
              <i className={styles.contactIcon}>
                <AiOutlineMail/>
              </i>
              <span className={styles.contactText} >Email</span>
            </a>
          </div>
        </div>
      </main>

      <Footer/>
    </div>
  )
}
