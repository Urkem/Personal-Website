import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {AiOutlineInstagram, AiOutlineMedium, AiOutlineGitlab, AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai'


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
          <h2 className={styles.title} >Python Developer / Machine Learning Engineer</h2>
        </a>
      </header>

      <main className="grid">
        <div className="about">
          <h3>
            About Me
          </h3>
          <p>
          Experienced Python Developer / Machine Learning Engineer with demonstrated history in development
          and deployment of data science solutions while working in a 
          distributed team environment, following Agile/Scrum methodology. 
          Strong knowledge in Chatbot Development, Machine learning,
          Natural Language Processing, Time Series Analysis and AWS Cloud.
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
            <a href="https://www.linkedin.com/in/urosmilovanovic/" target="_blank" className={styles.contactLink}>
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
            <a href="https://medium.com/@urkem98" target="_blank" className={styles.contactLink}>
              <i className={styles.contactIcon}>
                <AiOutlineMedium/>
              </i>
              <span className={styles.contactText} >Medium</span>
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
