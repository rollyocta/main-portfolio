import React from 'react'
import { motion } from "framer-motion";

import './Hero.css'; // Assuming you have a CSS file for styling

import rollyImage from '../../../image/me/rolly.png';

const Hero = () => {

  return (
    <section className='d-flex justify-content-center align-items-center pt-5 mt-5 hero' id="Home">
    <div className='row container mt-5 pt-5'>
      <div className='col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center mb-5'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="p-6"
          style={{ width: "420px" }}
        >
          <h5>Hey, I am Rolly</h5>
          <h1 className="fw-bold text-front" style={ {textAlign:"justify"} }> <span className='text-role'>Front-End Developer</span> focused on building clean and responsive user experiences</h1>
          <p>Your vision, my code</p>

          <div className='contact-button'>
            <a href="#Contact">
              <button>Get in touch</button>
            </a>
          </div>
        </motion.div> 
      </div>

      <div className="col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center mb-5">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center p-6 position-relative"
        >

          {/* Rolly's Image */}
          <div className="rollyImage" style={{ position: "relative", zIndex: 1 }}>
            <img src={rollyImage} alt="Rolly Octa" />
          </div>
        </motion.div>
      </div>
    </div>
    </section>
  )
}

export default Hero
