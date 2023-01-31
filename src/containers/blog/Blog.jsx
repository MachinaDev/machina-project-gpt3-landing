import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">Un grand changement arrive, <br /> On en parle chaque semaine.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="02 Octobre 2022" text="GPT-3 and Open AI apporte l'avenir. Explorons les différentes possibilités." />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="26 Septembre 2022" text="GPT-3 et OpenAI, une opportunité unique de découvrir les possibilités de l'IA" />
        <Article imgUrl={blog03} date="19 Septembre 2022" text="GPT-3 et Open AI : l'avenir est entre nos mains." />
        <Article imgUrl={blog04} date="12 Septembre 2022" text="GPT-3 et OpenAI, une révolution technologique à explorer." />
        <Article imgUrl={blog05} date="05 Septembre 2022" text="Le futur de l'intelligence artificielle se joue avec GPT-3 et OpenAI," />
      </div>
    </div>
  </div>
);

export default Blog;
