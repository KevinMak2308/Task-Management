import React from 'react';

const HomePage = () => {
  const headerStyle = {
    textAlign: 'center',
    marginTop: '50px',
    fontSize: '24px',
    color: '#333'
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <h4 style={headerStyle}>Welcome to the Task Management App</h4>
    </div>
  );
};

export default HomePage;
