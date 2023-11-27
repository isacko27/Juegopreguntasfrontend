import logo from './logo.svg';
import './App.css';
import { Componente2_EtiquetaPadre, Componente3_IniJS, Componente3_Confirm, Componente3_Props1, Componente3_Props2 } from './components/Basico1';

import HooksDinamicoUseRef,{ Hook_suma } from './components/HooksDinamicoUseRef';
import { Hook_uSuE_suma, Hook_uSuE_incremento } from './components/HooksDinamicoUseStateUseEffect';

export const Componente = _ => {
  return (
    <>
      {/*
      <Componente3_Confirm/>
      <section>Este es el 1:</section>
      <Componente3_Props1 miHeader="Esto es un header" miSection="Esto es un seccion" miFooter="Esto es un footer" />
      <section>Este es el 2:</section>
      <Componente3_Props2 miHeader="Esto es un header 2" miSection="Esto es un seccion 2" miFooter="Esto es un footer 2" />
  */}
  <Hook_uSuE_suma></Hook_uSuE_suma>
      <Componente3_Confirm/>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
