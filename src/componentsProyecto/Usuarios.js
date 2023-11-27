import React, { useState, useEffect } from 'react';

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    const hostBackend = 'localhost';
    const portBackend = 8000;
    const urlBase = `http://${hostBackend}:${portBackend}`;

    useEffect(() => {
        fetchUsuariosData();
    }, []);

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

    

    return (
        <section>
            <h1>Lista de usuarios del proyecto</h1>
            {usuarios.length > 0 && (
                <ul>
                    {usuarios.map(usuario => (
                        <article className="user-article" key={usuario.nickname}>
                            <b>Usuario:</b> {usuario.nickname}
                            <section><b>Preferencias:</b> {usuario.preferencias.musica} & {usuario.preferencias.series}</section>
                            <section>
                                <b>Historial:</b>
                                {usuario.partidas && usuario.partidas.length > 0 ? (
                                    <ul>
                                        {usuario.partidas.map(partida => (
                                            <li key={partida.idpartida}>
                                                <b>ID de Partida:</b> {partida.idpartida}, <b>Resultado:</b> {partida.resultado}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (<p>No hay partidas registradas</p>)}
                            </section>
                        </article>
                    ))}
                </ul>
            )}
        </section>
    );
}




export default Usuarios;

