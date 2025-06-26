import React, {useState} from 'react'
import './skills.css'

import { motion } from 'framer-motion'
import ToolContent from './ToolContent.jsx'
import ToolToggle from './ToolToggle.jsx'

const Skills = () => {

  const [isFrontend, setIsFrontend] = useState(true); // State to toggle between frontend and backend

  return (
    <section className='d-flex justify-content-center align-items-center' id="Skills">
      <div className='row container mt-5'>
        <div className='col-sm-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center flex-column'>
          
          <div className='d-flex justify-content-center align-items-center flex-column'>
        
            <div className='mb-3'>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h1 className="fw-bold text-center">My Expertise</h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.5 }} // optional config
                className="line"
              />
            </div>

            <p className='w-75' style={{textAlign:"justify"}}>I'm always looking to improve my front-end development skills by watching YouTube videos filled with tips, tricks, and best practices</p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }} // optional config
          >
            <ToolToggle isFrontend={isFrontend} setIsFrontend={setIsFrontend} />
          </motion.div> 
          

        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 d-flex flex-column justify-content-center">
          <h4>Technologies I Use</h4>
          <ToolContent isFrontend={isFrontend} />
        </div>
      </div>
    </section>
  )
}

export default Skills
