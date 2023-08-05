import React from 'react'
import styles from './Footer.module.css'
import {AiFillInstagram, AiFillGithub, AiFillLinkedin, AiFillMail} from 'react-icons/ai'
import {FaDev} from 'react-icons/fa'

function Navbar() {
    return (
        <footer className={styles.footerel}>
            <div className={styles.copyright}>
                © 2020-2023 Uroš Milovanović
            </div>
            <div className={styles.icons}>
                <a className={styles.iconlink} href="https://github.com/Urkem" >
                    <AiFillGithub/>
                </a>
                <a className={styles.iconlink} href="https://www.linkedin.com/in/urosmilovanovic/" >
                    <AiFillLinkedin/>
                </a>
                <a className={styles.iconlink} href="https://www.instagram.com/urkem98" >
                    <AiFillInstagram/>
                </a>
                <a className={styles.iconlink} href="https://dev.to/urkem" >
                    <FaDev/>
                </a>
                <a className={styles.iconlink} href="mailto:urkem98@gmail.com" >
                    <AiFillMail/>
                </a>
            </div>
        </footer>
    )
}

export default Navbar
