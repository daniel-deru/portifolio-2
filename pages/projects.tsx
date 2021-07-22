import Image from "next/image"

import React, { useEffect, useRef, useState, useLayoutEffect } from 'react'

import styles from "../styles/Projects.module.css"

import crypto from "../public/crypto1.png"
import trac from "../public/protrac1.png"
import poke from "../public/pokedex1.png"
import paint from "../public/paint1.png"

import gsap from "gsap"

import { projects as projectsList } from "./projects.json"


const projects = () => {
    const projectsRef = useRef<HTMLElement>(null)
    const images = [crypto, trac, poke, paint]

    useLayoutEffect(() => {
        console.log(projectsList)
        console.log(projectsRef)

        // const timeline = gsap.timeline({ defaults: {duration: 0.8}})
        // timeline.from(projectsRef.current, {x: 50})
                // .from(projectsRef.current.children[1], {x: -50})
        
    }, [])
    return (
        <div className={styles.container} >
            {projectsList.map((project: object, index: number) => {
                return  <section ref={projectsRef} className={styles.project}>
                            <div>
                                <Image src={images[index]} alt="" width={500} height={300} layout="responsive" />
                            </div>
                            <div>
                                <h3>{project.name}</h3>
                                <ul>
                                    {project.stack.map((item: string) => {
                                        return  <li>
                                                    {item}
                                                </li>
                                    })}
                                </ul>
                                <a href="#">More...</a>
                            </div>
                            
                        </section>
            })}
        </div>
    )
}

export default projects
