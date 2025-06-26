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
  
        <div className="col-sm-12 col-md-12 col-lg-6 d-flex flex-column justify-content-center align-items-center pt-5 position-relative">
          
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
              <p style={{textAlign:"justify"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eos asperiores nesciunt ipsam delectus alias unde ea, debitis, laboriosam corrupti dolorum non. Nulla quisquam porro expedita eos dolores, repellendus aliquid.</p>

              <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aut hic quas ad. Tenetur amet optio quos doloremque quasi inventore nostrum obcaecati officiis labore, deleniti atque quia, suscipit vero voluptatibus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique in non ipsa vero vel aliquam animi, quod optio hic! Esse ab voluptatem ad minima deleniti illum fuga nulla soluta dolorum!</p>
            </motion.div>
        </div>

        <Timeline />

      </div>
      </section>
  )
}

export default About
