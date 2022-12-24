import React from 'react'
import styles from './Footer.module.css'
import {AiOutlineInstagram, AiOutlineMedium, AiOutlineGitlab, AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai'


function Navbar() {
    return (
        <footer className={styles.footerel}>
            <div className={styles.copyright}>
                © 2020-2023 Uroš Milovanović
            </div>
            <div className={styles.icons}>
                <a className={styles.iconlink} href="https://gitlab.com/urkem" >
                    <AiOutlineGitlab/>
                </a>
                <a className={styles.iconlink} href="https://www.linkedin.com/in/urosmilovanovic/" >
                    <AiOutlineLinkedin/>
                </a>
                <a className={styles.iconlink} href="https://www.instagram.com/urkem98" >
                    <AiOutlineInstagram/>
                </a>
                <a className={styles.iconlink} href="https://medium.com/@urkem98" >
                    <AiOutlineMedium/>
                </a>
                <a className={styles.iconlink} href="mailto:urkem98@gmail.com" >
                    <AiOutlineMail/>
                </a>
            </div>
        </footer>
    )
}

export default Navbar
