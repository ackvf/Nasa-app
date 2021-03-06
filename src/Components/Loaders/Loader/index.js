import React from 'react';
import './styles.scss';

const Loader = () => (
  <div className="loader">
    <div className="logo">
      <div className="stars stars-1" />
      <div className="stars stars-2" />
      <div className="stars stars-3" />
      <div className="swooshes">
        <span className="swoosh swoosh-1" />
        <span className="swoosh swoosh-2" />
        <span className="swoosh swoosh-3" />
        <span className="swoosh swoosh-4" />
      </div>
      <h1 className="text">nasa</h1>
      <div className="orbit-outer">
        <div className="orbit-wrapper">
          <div className="orbit" />
        </div>
      </div>
    </div>
  </div>
);

export default Loader;
