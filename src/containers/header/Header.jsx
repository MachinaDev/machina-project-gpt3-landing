import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Construisons un nouvel avenir avec GPT-3 de OpenAI </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto rem eveniet a quae, temporibus aliquam delectus aspernatur aliquid esse saepe sequi facilis, provident rerum ut ullam hic libero, porro commodi!</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Votre email" />
        <button type="button">Inscription</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Plus de 1,600 personnes ont demandé un accès dans les dernières 24 heures.</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
