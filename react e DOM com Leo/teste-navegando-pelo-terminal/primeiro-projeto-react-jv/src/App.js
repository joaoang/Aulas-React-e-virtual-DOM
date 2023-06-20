import logo from './logo.svg';
import Item from './item'

function App() { 
  function consoleMaroto(){
    console.log("Foi!")
  }

  return (
    <div>
      <Item titulo="Chupa cabra aterroriza cidade" sub="ha ha ha" funçaoShow ={consoleMaroto}/>
      <br/>
      <Item titulo="João Angrezani foi chamado para trabalhar em uma empresa DEV."/>
    </div>
    
  );
}

export default App;
