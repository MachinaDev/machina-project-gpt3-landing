import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Demandez votre accès maintenant</h4>
      <h1 className="gradient__text">Vos possibilités <br /> sont infinies</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus voluptate quaerat id obcaecati, rem alias sunt magnam non quae, veritatis iusto! Incidunt, laudantium dolore soluta perspiciatis optio et doloribus.</p>
      <h4>Il est temps de rentrer dans le futur.</h4>
    </div>
  </div>
);

export default Possibility;
