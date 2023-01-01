import Image from "next/image"

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>About</h1>
            <p>I have created this project because my hobbies. <span> ReactJS + Geography. </span></p>
            <Image src="/images/world.png" width="525" height="300" alt="World" />
        </div>
    )
}