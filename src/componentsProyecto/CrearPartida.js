//fuente: https://codesandbox.io/s/musing-babbage-i5qoq?file=/src/App.js:212-255
//single-page application (SPA) este estilo adopta React
import React from 'react';
import { useState, useEffect } from 'react';

//context //SEMANA 7
import { useContext } from 'react'; //Quitar comentarios en semana 7
import { AppMainContext } from '../AppProyecto'; //Quitar comentarios en semana 7

const Partida = _ => {
    //base para backend y usuarios
    const [usuarios, setUsuarios] = useState([]);
    const hostBackend = 'localhost';
    const portBackend = 8000;
    const urlBase = `http://${hostBackend}:${portBackend}`;
    //manejo del form
    const [partidaID, setPartidaID] = useState("");
    const [tipoPartida, setTipoPartida] = useState("");
    const [usuario, setUsuario] = useState("");
    const [message, setMessage] = useState("");

    //manejo del context //SEMANA 7
    const [mainState, setMainState] = useContext(AppMainContext); //Quitar comentarios en semana 7

    useEffect(() => {
        fetchUsuariosData()
    }, []);

    //consume api json
    const fetchUsuariosData = () => {
        //console.log(urlBase + "/listausuarios");
        fetch(urlBase + "/listausuarios")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsuarios(data)
            })
    }

    const handleSubmitPartida = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(urlBase + "/creapartida", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({
                    partidaID: partidaID,
                    tipoPartida: tipoPartida,
                    usuario: usuario
                }),
            });
            let resJson = await res.json();
            if (res.status === 200) {

                //limpia las variables
                setPartidaID("");
                setTipoPartida("");
                setUsuario("");

                //envía mensaje
                setMessage("Partida creada! Redirigiendo en 3 segundos...")
                setTimeout(() => {
                    setMainState({
                        ...mainState,
                        partidaActual: partidaID,
                        usuarioActual: usuario,
                        nuevaCreacion: true
                    });
                    setMessage("");
                }, 1000)

                
            } else {
                setMessage("Ocurrió un error!");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section>
            <h1>Crear una partida de juego en el proyecto</h1>
            <form onSubmit={handleSubmitPartida}>
                <label>Partida: </label>
                <input
                    type="text"
                    value={partidaID}
                    placeholder="Id de Partida"
                    onChange={(evento) => setPartidaID(evento.target.value)}
                    required
                /><br />
                <label>Usuario: </label>
                <input
                    value={usuario}
                    onChange={(evento) => setUsuario(evento.target.value)}
                    list="listaUsuarios"
                />
                <datalist id="listaUsuarios">
                    {usuarios.length > 0 && (
                        <>
                            {usuarios.map(usuario => (

                                <option key={usuario.nickname} label={usuario.nickname} value={usuario.nickname} />

                            ))}
                        </>
                    )}
                </datalist>
                <br />
                <label>Tipo Partida: </label>
                <section onChange={(evento) => setTipoPartida(evento.target.value)}>
                    <label><input type="radio" value="1" name="tipoSitio" /> Solo</label>
                    <label><input type="radio" value="2" name="tipoSitio" /> Timetrack</label>
                    <label><input type="radio" value="3" name="tipoSitio" /> VS</label>
                </section>

                <button type="submit">Crear</button>

                <div className="message">{message ? <p><b>{message}</b></p> : null}</div>
            </form>
        </section>
    );

}

export default Partida;