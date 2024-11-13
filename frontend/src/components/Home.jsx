import React from 'react';

const Home = () => {
  const homeStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #00b4db, #0083b0)',
    color: '#ffffff',
    fontFamily: "'Arial', sans-serif",
  };

  const messageStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    padding: '1.5rem',
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
    animation: 'fadeIn 1s ease-in-out',
  };

  return (
    <div style={homeStyle}>
      <div style={messageStyle}>
        WELCOME TO HOME PAGE
      </div>
    </div>
  );
};

export default Home;
