import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {AiFillInstagram, AiFillGitlab, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import {FaDev} from 'react-icons/fa'


import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="full">
      <Head>
        <title>Uroš Milovanović | Home</title>
        <link rel="icon" href="/favicon.svg" />
        <script async src="https://dashboard.eximia.one/script.js" data-website-id="c966c189-dbef-4238-b8e2-0fedef7de2e9"></script>
      </Head>

      <Navbar/>

      <header className={styles.containerHeader}>
        <img src="/profile-bw-web.jpg" className={styles.profile}/>
        <a href="">
          <h1 className={styles.name}>Uroš Milovanović</h1>
        </a>
        <a>
          <h2 className={styles.title} >Software Engineer</h2>
        </a>
      </header>

      <main className="grid">
        <div className="about">
          <h3>
            About Me
          </h3>
          <p>
          As a Software Engineer, my primary skills lie in Algorithms and Data Structures,
          with experience in Machine Learning and Natural Language Processing.
          I am passionate about leveraging technology to solve real-world challenges
          and have a proven track record of successfully solving intricate problems with
          cutting-edge technologies. In addition to this,
          I have practical knowledge in Cloud Computing,
          leveraging platforms like AWS to deploy robust and scalable applications.
          </p>
        </div>

        <div className="contact">
          <h3>
            Contact
          </h3>
          <div>
            <a href="https://gitlab.com/urkem" target="_blank" className={styles.contactLink}>
              <i className={styles.contactIcon}>
                <AiFillGitlab/>
              </i>
              <span className={styles.contactText} >GitLab</span>
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/urosmilovanovic/" target="_blank" className={styles.contactLink}>
              <i className={styles.contactIcon}>
                <AiFillLinkedin/>
              </i>
              <span className={styles.contactText} >LinkedIn</span>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/urkem98" target="_blank" className={styles.contactLink}>
              <i className={styles.contactIcon}>
                <AiFillInstagram/>
              </i>
              <span className={styles.contactText} >Instagram</span>
            </a>
          </div>
          <div>
            <a href="https://dev.to/urkem" target="_blank" className={styles.contactLink}>
              <i className={styles.contactIcon}>
                <FaDev/>
              </i>
              <span className={styles.contactText} >DEV</span>
            </a>
          </div>
          <div>
            <a href="mailto:urkem98@gmail.com" target="_blank" className={styles.contactLink}>
              <i className={styles.contactIcon}>
                <AiFillMail/>
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
