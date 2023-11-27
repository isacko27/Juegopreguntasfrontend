import { useRef } from 'react';

{/* https://legacy.reactjs.org/docs/hooks-intro.html 
    https://es.react.dev/learn
    https://es.react.dev/reference/react/useRef
    https://es.react.dev/reference/react/useState
    https://es.react.dev/learn/state-a-components-memory
    https://es.react.dev/learn/passing-props-to-a-component
*/}


//ejemplo de comportamiento useRef (cambio por acción)
const Hook_useRef = _ => {
    //Código JS(X)

    //hooks useRef
    const inputMensaje = useRef(null);
    const restulCambio1 = useRef(null);

    //arrow function de mostrar mensaje
    const hacerCambio = () => {
        let mensaje = inputMensaje.current.value;
        restulCambio1.current.innerHTML = mensaje;
    }

    return (
        <section>
            <article>
                <label>Mensaje oculto:</label>
                <input type="password" ref={inputMensaje}></input>
                <button onClick={hacerCambio}>Ver mensaje</button>
            </article>
            <article>
                <section>
                    <label>Este es el mensaje: </label>
                    <label ref={restulCambio1}></label>
                </section>
            </article>

        </section>
    );
}

//ejemplo de comportamiento useRef (cambio por acción)
export const Hook_suma = _ => {
    //Código JS(X)

    //hooks useRef
    const op1 = useRef(null);
    const op2 = useRef(null);
    const resultado = useRef(null);

    //arrow function
    const hacerSuma = () => {
        let valor1 = op1.current.value;
        let valor2 = op2.current.value;
        let res = parseInt(valor1) + parseInt(valor2);
        resultado.current.innerHTML = res;
    }

    return (
        <section>
            <label>Op1: </label>
            <input type="number" ref={op1} ></input>
            <br />
            <label >Op2: </label>
            <input type="number" ref={op2}></input>
            <br />
            <label>Resultado: </label>
                <button onClick={hacerSuma}>Sumar</button>

            <section>
                <label>Este es el resultado: </label>
                <label ref={resultado}></label>
            </section>
        </section>
    );
}


export default Hook_useRef;