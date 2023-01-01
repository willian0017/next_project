import Image from "next/image";
import Link from "next/link";

import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <Image src='/images/logo.png' width='30' height='30' alt='logo'></Image>
                <h1>GeoNext</h1>
            </div>
            <ul className={styles.link_items}>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='/about'>About</Link></li>
            </ul>
        </nav>
    )
}