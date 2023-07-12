import { useState } from 'react'
import './App.css'
import logoImg from './assets/monge.png'

function App() {
  const [textoFrase, setTextoFrase]= useState("")
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)
  const allFrase = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        "A persistência é o caminho do êxito",
        "O sucesso nasce do querer, da determinação e persistência em se chegar a um objetivo. Mesmo não atingindo o alvo, quem busca e vence obstáculos, no mínimo fará coisas admiráveis.",
        "Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.",
        "Determinação, coragem e autoconfiança são fatores decisivos para o sucesso. Se estamos possuídos por uma inabalável determinação, conseguiremos superá-los. Independentemente das circunstâncias, devemos ser sempre humildes, recatados e despidos de orgulho.",
        "Agir, eis a inteligência verdadeira. Serei o que quiser. Mas tenho que querer o que for. O êxito está em ter êxito, e não em ter condições de êxito. Condições de palácio tem qualquer terra larga, mas onde estará o palácio se não o fizerem ali?",
        "Só existe um êxito: a capacidade de levar a vida que se quer.",
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        "Um navio no porto é seguro, mas não é para isso que os navios foram feitos.",
        "As melhores e mais belas coisas do mundo não podem ser vistas nem tocadas, mas o coração as sente.",
        "Tente ser um arco-íris na nuvem de alguém.",
        "Você só vive uma vez, mas se você fizer tudo certo, uma vez é suficiente.",
        "A coragem não é ausência do medo; é a persistência apesar do medo.",
        "Saber encontrar a alegria na alegria dos outros é o segredo da felicidade.",
      ]
    }
  ]


  function handleSwitchCategory(index:number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){
    const numeroAleatorio = Math.floor(Math.random() * allFrase[categoriaSelecionada].frases.length)
    const frase = `"${allFrase[categoriaSelecionada].frases[numeroAleatorio]}"`

    setTextoFrase(frase)
  }
  return (
    <div className='container'>
      <img src={logoImg} alt="monge"  className='logo'/>
      <h2 className='title'>Categorias</h2>
      <section className='category-area'>
        {allFrase.map((item,index)=>(
          <button 
          className='category-button' 
          key={item.id} 
          style={{
            // aplicanod borda no primeiro botao
            borderWidth: item.nome === allFrase[categoriaSelecionada].nome ? 2 : 0,
            borderColor: "#f06423"
          }}
          onClick={()=> handleSwitchCategory(index)}
          >
            {item.nome}
          </button>
        ))}
        
        
      </section>

      <button className='button-frase' onClick={gerarFrase}>Gerar Frase</button>

      {textoFrase !== '' && <p className='texto-frase'>{textoFrase}</p>}
    </div> 
  )
}

export default App
