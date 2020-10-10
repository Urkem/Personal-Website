import React from 'react'
import styles from './Footer.module.css'
import {AiOutlineInstagram, AiOutlineFacebook, AiOutlineGitlab, AiOutlineLinkedin, AiOutlineMail} from 'react-icons/ai'


function Navbar() {
    return (
        <footer className={styles.footerel}>
            <div className={styles.copyright}>
                © 2020 Uroš Milovanović
            </div>
            <div className={styles.icons}>
                <a className={styles.iconlink} href="https://gitlab.com/urkem" >
                    <AiOutlineGitlab/>
                </a>
                <a className={styles.iconlink} href="" >
                    <AiOutlineLinkedin/>
                </a>
                <a className={styles.iconlink} href="https://www.instagram.com/urkem98" >
                    <AiOutlineInstagram/>
                </a>
                <a className={styles.iconlink} href="https://www.facebook.com/profile.php?id=100014389667038" >
                    <AiOutlineFacebook/>
                </a>
                <a className={styles.iconlink} href="mailto:urkem98@gmail.com" >
                    <AiOutlineMail/>
                </a>
            </div>
        </footer>
    )
}

export default Navbar
