import Image from "next/image"

import React from 'react'

import styles from "../styles/Projects.module.css"

import crypto from "../public/crypto1.png"


const projects = () => {
    return (
        <div className={styles.container}>
            <section>
                <div>
                    <h3>Cryptgraph</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                    </ul>
                    <a href="#">More</a>
                </div>
            </section>
           <section>
                <div>
                    <h3>ProTrac</h3>
                    <ul>
                        <li>JavaScript</li>
                        <li>ReactJS</li>
                        <li>CSS</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>MySQL</li>
                    </ul>
                    <a href="#">More</a>
                </div>
           </section>
           <section>
                <div>
                    <h3>Pokedex</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                        <li>Axios</li>
                    </ul>
                    <a href="#">More</a>
                </div>
           </section>
           <section>
                <div>
                    <h3>Paint Magic</h3>
                    <ul>
                        <li>ReactJS</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>NodeJS</li>
                        <li>ExpressJS</li>
                    </ul>
                    <a href="#">More</a>
                </div>
           </section>    
        </div>
    )
}

export default projects
