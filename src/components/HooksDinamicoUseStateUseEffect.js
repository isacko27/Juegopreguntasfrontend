import React from 'react';
import { useState, useEffect } from 'react';

export const Hook_uSuE_suma = _ => {
  //hooks para controlar valores con cambio de estado que afectan la renderización
  const [op1, setOp1] = useState(0);
  const [op2, setOp2] = useState(0);
  const [resultado, setResultado] = useState(0);
  //variable normal de js
  let var1 = 10;

  //evento que se ejecuta al cambiar un valor en el campo de texto de op1
  const cambiaOp1 = (evento) => {
    setOp1(evento.target.value); //se actualiza valor del hook
    var1 = evento.target.value; //no se modifica en ejecución al no ser un hook
  }
  //evento que se ejecuta al cambiar un valor en el campo de texto de op2
  const cambiaOp2 = (evento) => {
    setOp2(evento.target.value); //se actualiza valor del hook
    var1 = evento.target.value; //no se modifica en ejecución al no ser un hook
  }
  //manejo de cambios colaterales al realizar un cambio en hooks useState
  useEffect(() => {
    let res = parseInt(op2) + parseInt(op1);
    setResultado(res); //se afecta el hook de resultado
  }, [op1, op2]);

  //html renderizado
  return (
    <>
      {op1}<br />{op2}<br />{var1}<br />{resultado}{3+4}
      <label for="op1">Op1: </label>
      <input type="number" id="op1" onChange={(evento) => cambiaOp1(evento)}></input>
      <br />
      <label for="op2">Op2: </label>
      <input type="number" id="op2" onChange={(evento) => cambiaOp2(evento)}></input>
      <br />
      <label for="resultado">Resultado: </label>
      <input type="number" id="resultado" value={resultado}></input>
    </>
  )
}

//módulo para crear un incremento o restablecer valor de una variable (hook)
export function Hook_uSuE_incremento() {

  //manejo de estados
  const [variableA, setA] = useState(11);
  const [variableCambia, setCambio] = useState('');
  //manejo de cambios
  useEffect(() => {
    alert('nuevo valor: ' + variableA);
  }, [variableA]);

  //funcion normal
  function aumentaA() {
    setA(variableCambia);
  }
  //arrow funcion sin parámetro
  const aumentaA_2 = () => {
    setA(variableA + 1);
  }
  //arrow funcion con parámetro
  const cambiaTexto = (objeto) => {
    setCambio(objeto.target.value);
  }

  //impresión de ejemplo en consola
  console.log("Hola mundo log");

  //esto es lo que se renderiza y puede cambiar según los eventos de los hooks
  return (
    <section>
      <article>
        Valor de a: {variableA}
      </article>
      <article>
        Texto que cambia: {variableCambia}
      </article>
      <article>
        <button onClick={aumentaA_2}>Incremento (+1)</button>
      </article>
      <article>
        <button onClick={aumentaA}>Asignar nuevo valor</button>
        <input type="text" onChange={(evento) => cambiaTexto(evento)}></input>
      </article>
    </section>

  );
}

export const Hook_uSuE_renderizado = _ => {

  //manejo de estados
  const [cantidad, setCantidad] = useState('');
  const [sitioRenderizar, setSitioRenderizar] = useState(<>hola mundo</>);

  //manejo de cambios
  useEffect(() => {
    let cantTemp = 0
    if(cantidad != ''){
      cantTemp = parseInt(cantidad);
    } 

    //creación de arreglo para aplicar función map
    const arrayIndices = new Array(cantTemp);
    //se llena arreglo para poder aplicar el map (el arreglo se crea con nulos)
    arrayIndices.fill(0); //todos los elementos del arreglos se colocan en 0

    //se crean tag li dinámicamente
    const tags = arrayIndices.map(
      (valor, indice) => <li key={indice}>{indice+1}</li>);

    //se hace un set al hook sitioRenderizar
    setSitioRenderizar(tags);

  }, [cantidad]);


  //arrow funcion con parámetro
  const cambiaValor = (objeto) => {
    setCantidad(objeto.target.value);
  }


  console.log("Hola mundo log");

  return (
    <section>
      <article>
        <label>Cantidad de li:</label>
        <input type="text" onChange={(evento) => cambiaValor(evento)}></input>
      </article>
      <article>
        <label>Aquí van los li:</label>
      <ul>
        {sitioRenderizar}
      </ul>
      </article>
    </section>

  );
}