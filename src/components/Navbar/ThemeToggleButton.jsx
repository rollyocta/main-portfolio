import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggleButton = ({ theme, toggleTheme }) => {
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="toggle-switch"
      style={{ position: 'relative', width: 60, height: 30, borderRadius: 30, background: isDark ? '#333' : '#eee', border: '1px solid #ccc', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 6px' }}
    >
      {/* Left icon */}
      <Sun size={20} color={isDark ? '#888' : '#f39c12'} />

      {/* Right icon */}
      <Moon size={20} color={isDark ? '#f1c40f' : '#888'} />

      {/* Sliding circle */}
      <motion.div
        layout
        transition={{ type: 'spring', stiffness: 700, damping: 30 }}
        style={{
          position: 'absolute',
          top: 3,
          left: isDark ? 33 : 3,
          width: 24,
          height: 24,
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          color: isDark ? '#f1c40f' : '#f39c12',
          pointerEvents: 'none',
        }}
      >
        {isDark ? <Moon size={16} /> : <Sun size={16} />}
      </motion.div>
    </button>
  );
};

export default ThemeToggleButton;
