import React from 'react';
import twitter from '../assets/twitter.png';
import git from '../assets/github.png';
import linked from '../assets/linked.png';

const InfoLinks = () => {
  return (
    <div className="container">
      <div className="row">
        <p className="socialLinks mr-auto" />
        <a
          href="https://twitter.com/MarioDenaCode"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="social" src={twitter} alt="twitter" />
        </a>
        <a
          href="https://github.com/MarioDena"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="social" src={git} alt="soc4" />
        </a>
        <a
          href="https://www.linkedin.com/in/mario-dena/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img className="social" src={linked} alt="soc3" />
        </a>
      </div>
    </div>
  );
};

export default InfoLinks;
