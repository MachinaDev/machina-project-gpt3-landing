import React from 'react';
import gpt3Logo from '../../logo.svg';
import machinaLogo from '../../assets/machinaLogo.png';

import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Veux tu faire parti de l&#39;avenir avant les autres ?</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Demande ton accès early</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={machinaLogo} alt="machinaDev_logo" />
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>12 place de la Liberté, 75 000 Paris <br /> Tous droits réservés</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Liens</h4>
        <p>Nos partenaires</p>
        <p>Réseaux Sociaux</p>
        <p>Liens utiles</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Entreprise</h4>
        <p>Conditions Générales </p>
        <p>Politique de confidentialité</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Restons ensemble</h4>
        <p>12 place de la Liberté, 75 000 Paris</p>
        <p>+331-52365254</p>
        <p>info@gpt3.org</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 GPT-3. Tous droits réservés.</p>
    </div>
  </div>
);

export default Footer;
