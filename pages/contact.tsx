import React, { useEffect, useRef} from 'react'

// import styles
import styles from "../styles/Contact.module.css"

// import icons
import { FaRegCopy } from "react-icons/fa"
import { BiPhoneCall } from "react-icons/bi"
import { FiMail } from "react-icons/fi"

// import animation library
import gsap from "gsap"

const contact = () => {
    const headRef = useRef<HTMLHeadingElement>(null)
    const numberRef = useRef<HTMLElement>(null)
    const mailRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const timeline = gsap.timeline({ defaults: {duration: 1, opacity: 0, ease: "power1.out"}})
        timeline.from(headRef.current, {y: -50})
                .from(numberRef.current, {x: 50}, "-=1")
                .from(mailRef.current, {x: -50}, "-=1")
    }, [])
    return (
        <div className={styles.container}>
            <h1 ref={headRef}>Interested In Contacting Me?</h1>
            <section ref={numberRef}>
                <span>+27 84 712 2240</span>
                <span title="Copy Number"><FaRegCopy/></span>
                <a href="tel:+27847122240"><BiPhoneCall/></a>  
            </section>
            <section ref={mailRef}>
                <span>danielderu3@gmail.com</span>
                <span title="Copy Email"><FaRegCopy/></span>
                <a href="mailto:danielderu3@gmail.com"><FiMail/></a> 
            </section>
        </div>
    )
}

export default contact
