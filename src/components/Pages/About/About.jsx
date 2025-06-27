import React from 'react'
import { motion } from 'framer-motion'

import './about.css'
import Timeline from './Timeline'

const About = () => {
  return (
    <section className='d-flex justify-content-center align-items-center' id='About'>

      <div className='row container mt-5'>
        <div className='col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-items-center flex-column'>
          
          <div className='image-MainContainer'>
            
          </div>
        
          
        </div>
  
        <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column align-items-center pt-5 position-relative">
          
          <div className='mb-5'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h1 className="fw-bold text-center">About Me</h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.5 }} // optional config
              className="line"
            />
          </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >

              <p style={{textAlign:"justify", lineHeight: "2.6"}}>I am Rolly G. Octa, 25 years old, currently residing in Bagtas, Tanza, Cavite.
              a 4th-year graduate from Cavite State University - CCAT with a Bachelor's degree in Information Technology. I specialize in building top-notch, budget-friendly websites crafted for individuals and businesses. My focus is on delivering impactful, user-friendly, and visually appealing online platforms that perfectly align with your unique needs and preferences.</p>
            </motion.div>
        </div>

        <Timeline />

      </div>
      </section>
  )
}

export default About
