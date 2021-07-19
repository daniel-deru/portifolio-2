import Head from 'next/head'
//import styles
import styles from "../styles/About.module.css"

// Import React
import React, { useLayoutEffect, useRef, FC} from 'react'

// Import gsap
import gsap from "gsap"



// import icons
import { FaYoutube, FaGithub, FaLinkedin, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaGitAlt} from "react-icons/fa"
import { SiCodewars, SiJavascript, SiTypescript, SiMongodb, SiMysql, SiNextDotJs, SiPhp } from "react-icons/si"

const about: FC = () => {
    const contentRef = useRef<HTMLElement>(null)
    const socialHeadRef = useRef<HTMLHeadElement>(null)
    const skillsHeadRef = useRef<HTMLHeadElement>(null)
    const socialRef = useRef<HTMLDivElement>(null)
    const skillsRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => { 
        
        const content = contentRef.current.children
        const socialIcons = socialRef.current.children
        const skillIcons = skillsRef.current.children
        const timeline = gsap.timeline({ defaults: {duration: 0.8}})
        timeline.from(content[0], {opacity: 0, y: -50})
                .from(content[1], {opacity: 0, y: 50}, "-=0.8")
                .from(socialHeadRef.current, {opacity: 0, x: 50}, "-=0.8")
                .from(socialIcons, {y: -100, opacity: 0, stagger: .2, ease: "bounce.out"})
                .from(skillsHeadRef.current, {x: -50, opacity: 0}, "-=2.2")
                .from(skillIcons, {y: -100, opacity: 0, stagger: 0.1, ease: "bounce.out"}, "-=0.8")
    }, [])
    return (
        <div className={styles.container}>
               <section ref={contentRef} className={styles.content} >
                <div>
                    <h2>Why Software?</h2>
                    <p>I have a passion for design, software development and solving problems. I think software development is one of the coolest career paths in the world. being a programmer is like having super powers and I love using my super powers everyday.</p>
                </div>
                <div>
                    <h2>Life Goals</h2>
                    <p>I strive to help others achieve their dreams and goals because I know how hard it is to pursue your dreams with little to no support. software development allows me to touch the lives of many people and make this world a better place one website or app at a time.
                    </p>
                </div>
            </section>
            <section className={styles.icons}>
                <h2 ref={socialHeadRef}>Find Me On</h2>
                <div ref={socialRef} className="social-container">
                    <FaYoutube/>
                    <SiCodewars/>
                    <FaGithub/>
                    <FaLinkedin/>
                </div>            
            </section>
            <section className={styles.skills}>
                <h2 ref={skillsHeadRef}>What I Can Do</h2>
                <div ref={skillsRef}>
                    <FaHtml5/>
                    <FaCss3Alt/>
                    <SiJavascript/>
                    <FaReact/>
                    <SiNextDotJs/>
                    <FaNodeJs/>
                    <SiTypescript/>
                    <SiMongodb/>
                    <SiMysql/>
                    <SiPhp/>
                    <FaPython/>
                    <FaGitAlt/>
                </div>
            </section>
        </div>
    )
}

export default about
