import React from 'react';

const StackList = () => {
  return (
    <div className="container">
      <div className="row">
        <h3 className="infoTitile3">Languages</h3>
      </div>
      <div className="row">
        <p className="infoInfo inframe">ES6 / Javascript / HTML / CSS / Ruby / Python</p>
      </div>
      <div className="row">
        <h3 className="infoTitile3">Frameworks</h3>
      </div>
      <div className="row">
        <p className="infoInfo inframe">
          React / Ruby on Rails / Phaser / Jekyll
        </p>
      </div>
      <div className="row">
        <h3 className="infoTitile3">Tools</h3>
      </div>
      <div className="row">
        <p className="infoInfo inframe">
          Webpack / Redux / SCSS / Git / Bootstrap / Materialize / AWS
          / Firebase / Rspec / Redux / Jest / MySQL / PostgreSQL
        </p>
      </div>
    </div>
  );
};

export default StackList;
