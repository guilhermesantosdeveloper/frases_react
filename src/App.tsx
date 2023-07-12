import { useState } from 'react'
import './App.css'
import logoImg from './assets/monge.png'

function App() {

  return (
    <div className='container'>
      <img src={logoImg} alt="monge"  className='logo'/>
      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        <button className='category-button'>Motivação</button>
        <button className='category-button'>Bom dia</button>
      </section>

      <button className='button-frase'>Gerar Frase</button>

      <p className='texto-frase'>Alguma frase qualquer</p>
    </div> 
  )
}

export default App
