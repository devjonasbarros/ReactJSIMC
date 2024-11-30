import React, {useState} from "react";

function App() {

  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [valorIMC, setValorIMC] =useState(0);
  const [meuPerfil, setMeuPerfil] =useState('');


  function tratarMudancasPeso(evt){
    setPeso(evt.target.value);
  }

  function apagar(){
    setPeso(''),
    setAltura('')
    setValorIMC(''),
    setMeuPerfil('')
    
  }

  function calcularIMC(evt){
    let imc = (peso / (altura * altura)).toFixed(1);
    setValorIMC(imc);

    if(imc >=24.9) return setMeuPerfil('Acima do peso');
    if(imc >=18.5) return setMeuPerfil('O peso está normal');
    if(imc < 18.5) return setMeuPerfil('Abaixo do peso');


  }

  
  return(

    
    <div>
      <br />
      <h1 >Calculadora IMC</h1>

      <form >
        <br />
        <br />
        <label htmlFor="peso" >Peso</label> <br />
        <input type="number" name="peso" onChange={tratarMudancasPeso} id="peso" value={peso}/>

        <br />
        <br />

        <label htmlFor="altura" >Altura</label> <br />
        <input type="number" name="altura" onChange={e => setAltura(e.target.value)} id="altura" value={altura} />
        <button type="button" onClick={calcularIMC} > Calcule o IMC</button>
        <button type="button" onClick={apagar} > Resetar</button>


        <br />
        <br />
        
        <div className="tabelaResultado">
        <p className="imcResultado">O imc é: {valorIMC}</p>
        <p className="estadoResultado">Classificação: {meuPerfil}</p>
      
        </div>

        <br />
        O resultado podem ser medidos nos seguintes valores <br /> <br />
        # Igual a 18 e ou igual ou menor que 24 - Normal <br />
        # Maior que 24 - Acima do seu peso <br />
        # Se o resultado for abaixo de 18 - Abaixo do peso <br />

      </form>

      
      
    </div>
  

  
)
}

export default App
