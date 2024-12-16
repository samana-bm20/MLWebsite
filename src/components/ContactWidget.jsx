import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaTimes } from 'react-icons/fa';

const ContactWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div style={styles.container}>
      {/* Default Icon */}
      <div style={styles.iconWrapper} onClick={toggleExpand}>
        {isExpanded ? (
          <FaTimes size={24} color="white" />
        // <CancelRounded color='primary' />
        ) : (
          <FaPhone size={24} color="white" />
        )}
      </div>

      {/* Expanded Info */}
      {isExpanded && (
        <div style={styles.infoBox}>
          <div style={styles.infoItem}>
            <FaPhone size={16} style={styles.icon} />
            <a href="tel:+91 011 41688592" style={styles.text}>+91 011 41688592</a>
          </div>
          <div style={styles.infoItem}>
            <FaEnvelope size={16} style={styles.icon} />
            <a href="mailto:post@mlinfomap.com" style={styles.text}>post@mlinfomap.com</a>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    zIndex: 1000,
  },
  iconWrapper: {
    width: '50px',
    height: '50px',
    backgroundColor: '#b20000',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  infoBox: {
    marginTop: '10px',
    backgroundColor: '#b20000',
    color: 'white',
    borderRadius: '8px',
    padding: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    animation: 'fadeIn 0.3s',
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  icon: {
    marginRight: '8px',
  },
  text: {
    color: 'white',
    textDecoration: 'none',
  },
};

export default ContactWidget;
