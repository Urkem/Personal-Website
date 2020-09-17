import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <nav className="border-bottom">
            <ul >
                <li>
                    <Link href="/">
                        <a>
                            Uroš Milovanović
                        </a>
                    </Link>
                </li>
                <li className="push-right">
                    <Link href="/">
                        <a>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            Projects
                        </a>
                    </Link>
                </li>
                <li>
                    <a
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
