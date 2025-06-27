import React from 'react'
import { MapPinHouse, Phone, Mail } from 'lucide-react'

import './contact.css'

const Contact = () => {
  return (
    <main className='mt-5 pb-3 contact' id='Contact'>
        <div className='p-5'>
            <h1 className="fw-bold text-center">Get in Touch</h1>
        </div>

        <div className='contact-icons'>

          <div className='d-flex justify-content-center align-items-center flex-column mb-3'>
            <div className='contact-info mb-3'>
              <MapPinHouse className='custom-icon'/>
            </div>
            <div>
              <p className='fw-bold'>Bagtas Tanza Cavite</p>
            </div>
          </div>

          <div className='d-flex justify-content-center align-items-center flex-column mb-3'>
            <div className='contact-info mb-3'>
              <Phone className='custom-icon' />
            </div>
            <div>
              <p className='fw-bold'>+63 993 936 1553</p>
            </div>
          </div>

          <div className='d-flex justify-content-center align-items-center flex-column mb-3'>
            <div className='contact-info mb-3'>
              <Mail className='custom-icon' />
            </div>
            <div>
              <p className='fw-bold'>rollyocta05@gmail.com</p>
            </div>
          </div>

        </div>

        <hr  className='w-75 mx-auto'/>  
    </main>
  )
}

export default Contact
