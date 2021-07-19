import '../styles/globals.css'
import "../styles/Header.module.css"
import type { AppProps } from 'next/app'

//Import React
import { useEffect } from 'react'

//import gsap
import gsap from "gsap"

// Import Styles
import styles from "../styles/Component-Styles/Particles.module.css"

//import background animation
import Particles from 'react-tsparticles'

import Layout from '../components/Layout'
import { random } from 'gsap/src/all'

function MyApp({ Component, pageProps }: AppProps){

  useEffect(() => {
    // gsap.from(".particles", {opacity: 0, delay: 3, ease: "power1.out", duration: 4})
  }, [])
  return (
  <Layout>
    <Component {...pageProps} />
    {/* <Particles options={{
          background: {
            color: {
              value: "#000",
            },
          },
          fpsLimit: 60,
          interactivity: {
            detectsOn: "window",
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              trail: {
                delay: 0.005,
                pauseOnStop: true,
                quantity: 1,
                particles: {
                  color: {
                    value: "#ff0000",
                    animation: {
                      enable: false,
                      sync: false,
                      speed: 200
                    }
                  },
                  life: {
                    duration: {
                      random: true
                    }
                  }
                  
                }
              }
            },
          },
          particles: {
            color: {
              value: "#fff"
            },
            links: {
              color: "random",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: false,
              value: 2,
            },
          },
          detectRetina: true,
        }} className="particles"/> */}
  </Layout>
  )
}
export default MyApp
