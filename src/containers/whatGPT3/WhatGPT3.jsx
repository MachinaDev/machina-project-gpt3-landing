import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Pourquoi GPT-3 ?" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis commodi quibusdam iure, architecto odio blanditiis minima, quaerat ullam voluptas quasi delectus temporibus voluptatem laborum tempore nisi vero officiis accusantium nostrum" />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Des possibilités au delà de votre imagination</h1>
      <p>Voir nos articles</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita officiis nemo ex exercitationem asperiores sed quasi, delectus necessitatibus velit, neque nesciunt. " />
      <Feature title="Base de données" text="Nam excepturi optio sint numquam culpa libero maxime recusandae sapiente rem, natus nemo iusto officia beatae accusamus architecto esse illum ut." />
      <Feature title="Pédagogie" text="Cum nesciunt quam voluptatibus modi laudantium est omnis corporis asperiores culpa earum, nihil ipsam iure animi recusandae alias doloremque, consequatur quia!" />
    </div>
  </div>
);

export default WhatGPT3;

