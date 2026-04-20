import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      textAlign: 'center',
      padding: '2rem 0',
      color: 'var(--text-secondary)',
      borderTop: '1px solid var(--glass-border)',
      marginTop: 'auto'
    }}>
      <p>&copy; {new Date().getFullYear()} Farleir Minozzo. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
