import React from 'react'
// import  cv from "../public/cv.pdf"

import styles from "../styles/Resume.module.css"

const resume = () => {
    return (
        <div className={styles.resume}>
            <embed src="./cv.pdf" type="application/pdf" />
        </div>
    )
}

export default resume
