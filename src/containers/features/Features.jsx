import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Améliorez tous vos process',
    text: 'Quasi officiis dicta suscipit nulla sunt reprehenderit soluta voluptates et eligendi temporibus corporis necessitatibus nesciunt',
  },
  {
    title: 'Rentrer dans la tendance',
    text: 'Sint nostrum laborum nemo, culpa earum dolorum ipsam quam id voluptatum, fugiat, veritatis animi rem pariatur cumque.',
  },
  {
    title: 'Devenez meilleur',
    text: 'Laboriosam rem et minus illo! Deserunt laudantium molestiae maiores magnam a. Temporibus soluta facilis repellendus.',
  },
  {
    title: 'Faites parti du futur',
    text: 'Iure laboriosam laborum. Quasi officiis dicta suscipit nulla sunt reprehenderit soluta voluptates et eligendi temporibus corporis necessitatibus',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">L&#39;avenir est déjà là et vous avez juste besoin de le comprendre. Entrez maintenant dans l&#39;avenir et vivez une expérience incroyable..</h1>
      <p>Demandez votre accès en pré-vente maintenant</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;

