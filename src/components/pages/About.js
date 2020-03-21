import React from 'react';

const About = () => {
  return (
    <div>
      <h5>About App</h5>
      <p>This is react todo app.</p>
      <br />
      <h5>Concept Used:</h5>
      <ul>
        <li>
          <span style={{ fontWeight: '600' }}>React Router</span>: used for
          creating routes and navigation
        </li>
        <li>
          <span style={{ fontWeight: '600' }}>React Context API</span>: used for
          state management
        </li>
        <li>
          <span style={{ fontWeight: '600' }}>Reactstrap</span>: used for
          building ui components
        </li>
      </ul>
    </div>
  );
};

export default About;
