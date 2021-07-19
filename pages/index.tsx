import Head from 'next/head'
import Link from "next/link"
import styles from '../styles/Home.module.css'

//import React
import { useEffect, useRef } from 'react'

//import animations
import gsap from "gsap"

export default function Home() {
  const divRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const div = divRef.current?.children
    const timeline = gsap.timeline({ defaults: {duration: 1}})
    timeline.from(div[0], {opacity: 0, x: -30})
            .from([div[1], div[2]], {opacity: 0, x: 30}, "-=1")
            .from(buttonRef.current, {opacity: 0, y: 20}, "-=1")
  }, [])
  return (
    <div className={styles.center}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="The portifolio of Daniel de Ru" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main ref={divRef} className={styles.main}>
        <div className={styles.name}>Hi, I'm <span className={styles.white}>Daniel</span></div>
        <div>Your Friendly Neighbourhood</div>
        <div className={`${styles.white} ${styles.dev}`}>Software Developer</div>
      </main>
      <button className={styles.button} ref={buttonRef}><Link href="/projects">Projects</Link></button>
    </div>
  )
}
