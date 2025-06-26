import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { ListTree, House, User, BriefcaseBusiness, Braces, Contact } from 'lucide-react';
import Facebook from '../../image/icon/facebook.png';
import Linkedin from '../../image/icon/linkedin.png';
import Github from '../../image/icon/social.png';

const Sidebar = ({ isOpen, closeMenu }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="sidebar"
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.3 }}
          className="sidebar-container"
        >
          <div className='sidebar-logo-name'>
            <ListTree size={18}/>
            <span className='fw-bold'>Menu</span>
          </div>

          <ul className="sidebar-menu">
            <li className='sidebar-list'><House size={18}/><a href="#" onClick={closeMenu}>Home</a></li>
            <li className='sidebar-list'><User size={18} /><a href="#" onClick={closeMenu}>About</a></li>
            <li className='sidebar-list'><BriefcaseBusiness size={18} /><a href="#" onClick={closeMenu}>Work</a></li>
            <li className='sidebar-list'><Braces size={18} /><a href="#" onClick={closeMenu}>Skills</a></li>
            <li className='sidebar-list'><Contact size={18} /><a href="#" onClick={closeMenu}>Contact</a></li>
          </ul>

          <div className='sidebar-social'>
            <a href="#" onClick={closeMenu}> <img className='sidebarImageIcon' src={Facebook} alt='fb'/> </a>
            <a href="#" onClick={closeMenu}> <img className='sidebarImageIcon' src={Linkedin} alt='Linkedin'/> </a>
            <a href="#" onClick={closeMenu}> <img className='sidebarImageIcon' src={Github} alt='Github'/> </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
