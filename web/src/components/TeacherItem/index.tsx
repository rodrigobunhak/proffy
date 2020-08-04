import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/61331457?s=460&u=684f3c4573cc59e854d5e09eb60728ec21596d0e&v=4" alt="Rodrigo Bunhak"/>
        <div>
          <strong>Rodrigo Bunhak</strong>
          <span>Física</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        <br/><br/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae impedit, optio facere tenetur dignissimos commodi. Accusamus rerum eveniet nisi laborum repudiandae praesentium error incidunt officia maiores fuga, autem nihil.
      </p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;