import React from 'react';
import { Code, Server } from 'lucide-react';
import { motion, rgba } from 'framer-motion';

const ToolToggle = ({ isFrontend, setIsFrontend }) => {
  const toggle = () => setIsFrontend(!isFrontend); // use the prop function

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      {/* Toggle Button */}
      <button
        onClick={toggle}
        aria-label="Toggle tools"
        style={{
          position: 'relative',
          width: 120,
          height: 40,
          borderRadius: 40,
        //   background: isFrontend ? '#4dabf7' : '#343a40',
        background: 'rgba(0, 0, 0, 0.5',
          border: '2px solid #333',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 10px',
          color: 'white',
          marginBottom: '2rem',
          fontWeight: 'bold',
          fontSize: '14px',
        }}
      >
        <span style={{ zIndex: 1, color: isFrontend ? 'white' : '#ced4da' }}>Front-End</span>
        <span style={{ zIndex: 1, color: isFrontend ? '#ced4da' : 'white' }}>Back-End</span>

        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 600, damping: 30 }}
          style={{
            position: 'absolute',
            top: 3,
            left: isFrontend ? 3 : 63,
            width: 54,
            height: 34,
            borderRadius: 40,
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 3px 6px rgba(0,0,0,0.2)',
            zIndex: 1,
          }}
        >
          {isFrontend ? <Code size={18} color="#4dabf7" /> : <Server size={18} color="#343a40" />}
        </motion.div>
      </button>
    </div>
  );
};

export default ToolToggle;
