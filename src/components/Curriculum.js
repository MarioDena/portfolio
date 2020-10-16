import React from 'react';
import resume from '../assets/Resume.pdf';

const Curriculum = () => {
  return (
    <div className="container">
      <div className="row centeredInfo">
        <h4 className="infoTitile2">About me</h4>
      </div>
      <div className="row">
        <p className="infoInfo2">
          I&apos;m a fast learner profesional, always ready to tackle new
          challenges and collaborate on a team. Look through some of my
          abilities and experience, if you like what you see and have a project
          that needs coding, don&apos;t hesitate to contact me.
        </p>
      </div>
      <div className="row">
        <a
          type="button"
          href={resume}
          rel="noopener noreferrer"
          target="_blank"
          className="btn btn-warning float-right"
        >
          Get my Resume!
        </a>
      </div>
    </div>
  );
};

export default Curriculum;
