import React, { FC, useRef, useEffect } from 'react'
import Link from "next/link"

//import gsap
import gsap from 'gsap'

// css imports
import styles from "../styles/Header.module.css"

const Header: FC = () => {
    const navRef = useRef(null)

    useEffect(() => {
        const timeline = gsap.timeline({defaults: { duration: .8}})
        timeline.from("header ul li", {scaleX: 0, rotateY: 360, stagger: 0.2, ease: "bounce.out", color: "red"})
                .to("header ul li", {color: "white", stagger: 0.1}, "-=0.5")
                .to("header ul li", {color: "red", stagger: 0.1})
    }, [])
    return (
        <header className={styles.header} >
            <ul className={styles.ul} ref={navRef}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/projects">Projects</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/resume">Resume</Link></li>
            </ul>            
        </header>
    )
}

export default Header
