import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'


function Navbar() {
    return (
        <nav className="border-bottom">
            <ul className={styles.navbar}>
                <li className={styles.navelement}>
                    <Link href="/">
                        <a className={styles.navlink}>
                            Uroš Milovanović
                        </a>
                    </Link>
                </li>
                <li className={styles.pushright}>
                    <Link href="/">
                        <a className={styles.navlink}>
                            Home
                        </a>
                    </Link>
                </li>
                <li className={styles.navelement}>
                    <Link href="/projects">
                        <a className={styles.navlink}>
                            Projects
                        </a>
                    </Link>
                </li>
                <li className={styles.navelement}>
                    <a
                        className={styles.navlink}
                        href="/Uros_Milovanovic_CV.pdf" 
                        target="_blank"
                    >
                        CV
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
