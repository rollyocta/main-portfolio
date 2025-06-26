import React from 'react'
import { Facebook, Linkedin, Github } from 'lucide-react'

import './footer.css'

const Footer = () => {
  return (
    <footer className='footer pb-5'>

    <div className='social-icons'>
        <div className='d-flex justify-content-between align-items-center p-3'>
            <a href="#">
                <div className='footer-iconContainer'>
                    <Facebook />
                </div>
            </a>
        </div>

        <div className='d-flex justify-content-between align-items-center p-3'>
            <a href="#">
                <div className='footer-iconContainer'>
                    <Linkedin />
                </div>
            </a>
        </div>

        <div className='d-flex justify-content-between align-items-center p-3'>
            <a href="#">
                <div className='footer-iconContainer'>
                    <Github />
                </div>
            </a>
        </div>
    </div>

    <div>
      <p className='text-center fw-bold'>&copy; 2025 Rolly Dev. All rights reserved.</p>
    </div>
    </footer>
  )
}

export default Footer
