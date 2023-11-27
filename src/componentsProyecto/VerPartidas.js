import React, { useState, useEffect } from 'react';
import './tabs.css'

const VerPartidas = () => {

    const [partidas, setPartidas] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const hostBackend = 'localhost';
    const portBackend = 8000;
    const urlBase = `http://${hostBackend}:${portBackend}`;


    useEffect(() => {
        fetchPartidasData();
        fetchUsuariosData();
    }, []);

    const fetchPartidasData = () => {
        fetch(urlBase + "/listapartidas")
            .then(response => response.json())
            .then(data => {
                setPartidas(data);
            })
            .catch(error => {
                console.error('Error al obtener las partidas:', error);
            });
    };

    const fetchUsuariosData = () => {
        fetch(urlBase + "/listausuarios")
            .then(response => response.json())
            .then(data => {
                setUsuarios(data);
            })
            .catch(error => {
                console.error('Error al obtener los usuarios:', error);
            });
    };

    const getResultFromPartidas = (nickname) => {
        const usuario = usuarios.find(user => user.nickname === nickname);
        if (usuario && usuario.partidas && usuario.partidas.length > 0) {
            const partidaEncontrada = usuario.partidas.find(partida => partidas.find(p => p.partidaID === partida.idpartida));
            if (partidaEncontrada) {
                return partidaEncontrada.resultado;
            }
        }
        return "No hay resultados";
    };

    const getTipoPartida = (tipoPartida) => {
        tipoPartida = parseInt(tipoPartida)
        if (tipoPartida === 1) {
            return "Solo";
        } else if (tipoPartida === 2) {
            return "Timetrack";
        } else if (tipoPartida === 3) {
            return "VS";
        } else {
            
            return "Tipo de partida desconocido";
        }
    };

    return (
        <section>
            <h1>Lista de Partidas</h1>
            {partidas.length > 0 && (
                <ul>
                    {partidas.map(partida => (
                        <article className='partida-article' key={partida.partidaID}>
                            <b>Partida ID:</b> {partida.partidaID}
                            <section><b>Tipo:</b> {getTipoPartida(partida.tipoPartida)}</section>
                            <section><b>Jugador:</b> {partida.usuario}</section>
                            <section><b>Resultado:</b> {getResultFromPartidas(partida.usuario)}</section>
                        </article>
                    ))}
                </ul>
            )}
        </section>
    );

}


export default VerPartidas;