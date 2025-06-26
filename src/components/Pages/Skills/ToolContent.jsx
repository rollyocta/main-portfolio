import React from 'react';
import { motion } from 'framer-motion';

import ReactImage from '../../../image/icon/react.png';
import HtmlImage from '../../../image/icon/html.png';
import CssImage from '../../../image/icon/css.png';
import ViteImage from '../../../image/icon/vite.png';
import MotionImage from '../../../image/icon/motion.png';
import bootstrapImage from '../../../image/icon/bootstrap.png';
import NodeJsImage from '../../../image/icon/nodejs.png';
import ExpressImage from '../../../image/icon/express.png';
import MongoDBImage from '../../../image/icon/mongodb.png';
import PhpImage from '../../../image/icon/php.png';
import MySqlImage from '../../../image/icon/mysql.png';
import JavascriptImage from '../../../image/icon/javascript.png';

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const ToolContent = ({ isFrontend }) => {
  return (
    <motion.div
      key={isFrontend ? 'frontend' : 'backend'}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      style={{ borderRadius: '8px', margin: '0 auto' }}
      className='w-100'
    >
      {isFrontend ? (
        <div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[ // Frontend tech list
              { img: ReactImage, name: 'React.js' },
              { img: ViteImage, name: 'Vite' },
              { img: MotionImage, name: 'Framer Motion' },
              { img: HtmlImage, name: 'HTML5' },
              { img: CssImage, name: 'CSS3' },
              { img: bootstrapImage, name: 'Bootstrap' },
            ].map((tool, index) => (
              <motion.li
                key={index}
                className='tool-container'
                variants={itemVariants}
              >
                <img src={tool.img} alt={tool.name} height={35} />
                <span className='fw-bold'>{tool.name}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[ // Backend tech list
              { img: NodeJsImage, name: 'Node.js' },
              { img: ExpressImage, name: 'Express.js' },
              { img: MongoDBImage, name: 'MongoDB' },
              { img: PhpImage, name: 'PHP', height: 25 },
              { img: MySqlImage, name: 'My SQL' },
              { img: JavascriptImage, name: 'JavaScript' },
            ].map((tool, index) => (
              <motion.li
                key={index}
                className='tool-container'
                variants={itemVariants}
              >
                <img src={tool.img} alt={tool.name} height={tool.height || 35} />
                <span className='fw-bold'>{tool.name}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      )}
    </motion.div>
  );
};

export default ToolContent;
