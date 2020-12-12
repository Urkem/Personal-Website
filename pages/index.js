import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineGitlab, AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai'


import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="full">
      <Head>
        <title>Uroš Milovanović | Home</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Navbar/>

      <header className={styles.containerHeader}>
        <img src="/profile-bw-web.jpg" className={styles.profile}/>
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
          Data science student from Serbia. Currently pursuing 
          a bachelor's degree from University of Novi Sad and managing multiple game servers(Minecraft, TF2). 
          Also participate in various software engineering events(Internships, Hackathons, Projects). 
          My primary interests: machine learning, linux server administration and web development.
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
            <a href="https://www.linkedin.com/in/uro%C5%A1-milovanovi%C4%87-153a36201/" target="_blank" className={styles.contactLink}>
              <i className={styles.contactIcon}>
                <AiOutlineLinkedin/>
              </i>
              <span className={styles.contactText} >LinkedIn</span>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/urkem98" target="_blank" className={styles.contactLink}>
              <i className={styles.contactIcon}>
                <AiOutlineInstagram/>
              </i>
              <span className={styles.contactText} >Instagram</span>
            </a>
          </div>
          <div>
          <a href="https://www.facebook.com/profile.php?id=100014389667038" target="_blank" className={styles.contactLink}>
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
