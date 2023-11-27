//ESTE COMPONENTE SE DESARROLLA EN SEMANA 7
import React from 'react';
import { useState, useEffect } from 'react';
//context
import { useContext } from 'react';
import { AppMainContext } from '../AppProyecto';

const Jugar = _ => {
    //inicia lógica juego
    const [preguntas, setPreguntas] = useState([]);
    const [preguntaActual, setPreguntaActual] = useState(0);
    const [aciertos, setAciertos] = useState(0);
    //manaje cambios en la opcion seleccionada en el radio
    const [opcion, setOpcion] = useState(-1);
    const cambiaOpcion = (evento) => {
        setOpcion(evento.target.value);
    }

    //verifica la respues con el evento del boton 
    const verificaRespuesta = () => {
        if (opcion == preguntas[preguntaActual].correcta) {
            setAciertos(aciertos + 1);
        }
        setOpcion(-1);
        setPreguntaActual(preguntaActual + 1);
    }

    //set a pregunta inicial
    const reiniciar = () => {
        setAciertos(0);
        setOpcion(-1);
        setPreguntaActual(0);
    }

    //fin logica juego

    //inicio carga usuarios
    const hostBackend = 'localhost';
    const portBackend = 8000;
    const urlBase = `http://${hostBackend}:${portBackend}`;

    useEffect(() => {
        fetchPreguntas()
    }, []);

    //consume api json de preguntas
    const fetchPreguntas = () => {
        //console.log(urlBase + "/preguntas");
        fetch(urlBase + "/preguntas")
            .then(response => {
                return response.json()
            })
            .then(data => {
                //console.log(data)
                setPreguntas(data)
            })
    }

    //actualiza el resultado en el json de usuarios

    useEffect(() => {
        if (preguntas.length > 0 && preguntaActual >= preguntas.length){
            actualizaResultado();
        }
    }, [preguntaActual]);
    
    //actualiaz json de usuario con las partidas jugadas
    const actualizaResultado = async (e) => {
        try {
            let resultado = `Ha acertado ${aciertos} de ${preguntas.length} preguntas`;
            let res = await fetch(urlBase + "/incluyepartidausuario", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    usuario : mainState.usuarioActual,
                    partida: mainState.partidaActual,
                    resultado: resultado
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {

                <>ok</>

            } else {
                <>error</>
            }
        } catch (err) {
            <>error</>
        }
    }

    //fin carga usuarios

    //manejo del context
    const [mainState, setMainState] = useContext(AppMainContext);


    return (
        <section>
            <h1>Partida: {mainState.partidaActual}</h1>
            <h1>Jugando: {mainState.usuarioActual}</h1>
            {/* https://legacy.reactjs.org/docs/conditional-rendering.html */}
            {
                preguntaActual >= preguntas.length ?
                    <>
                        <h2>Ha acertado {aciertos} de {preguntas.length} preguntas </h2>
                        <button onClick={reiniciar}>Reiniciar</button>
                    </>
                    :
                    <>
                        <section>{preguntas[preguntaActual].pregunta}</section>
                        {/* carga dinamicamente las opciones */}
                        <section onChange={(evento) => cambiaOpcion(evento)}>
                            {preguntas[preguntaActual].opciones.map(
                                (op, index) =>
                                    <label key={index}>
                                        <input
                                            type="radio"
                                            value={index} 
                                            name={"opcion"} />
                                        {op}
                                    </label>
                            )}
                        </section>
                        <button onClick={verificaRespuesta}>Comprobar</button>
                    </>
            }
        </section>
    );

}

export default Jugar;