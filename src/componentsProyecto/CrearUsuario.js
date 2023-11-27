import React, { useState } from 'react';

const CrearUsuario = ({ fetchUsuariosData }) => {


    const hostBackend = 'localhost';
    const portBackend = 8000;
    const urlBase = `http://${hostBackend}:${portBackend}`;


    const [usuario, setUsuario] = useState({
        nombre: '',
        nickname: '',
        preferencias: {
            musica: '',
            series: ''
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUsuario({
            ...usuario,
            [name]: value
        });
    };

    const handlePreferenciasChange = (e) => {
        const { name, value } = e.target;
        setUsuario({
            ...usuario,
            preferencias: {
                ...usuario.preferencias,
                [name]: value
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes enviar los datos del usuario al backend
        // usando fetch, axios u otra librería para realizar
        // la petición POST al servidor para crear el nuevo usuario
        fetch(urlBase + '/creausuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Usuario creado:', data);
            fetchUsuariosData();
            // Puedes manejar la respuesta del servidor aquí
            // Por ejemplo, mostrar un mensaje de éxito, redirigir, etc.
        })
        .catch(error => {
            console.error('Error al crear usuario:', error);
        });
    };

    return (
        <div className="crear-usuario-form">
            <h2>Crear Nuevo Usuario</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre:</label>
                    <input
                        type="text"
                        name="nombre"
                        value={usuario.nombre}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Nickname:</label>
                    <input
                        type="text"
                        name="nickname"
                        value={usuario.nickname}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label>Preferencias - Música:</label>
                    <input
                        type="text"
                        name="musica"
                        value={usuario.preferencias.musica}
                        onChange={handlePreferenciasChange}
                    />
                </div>
                <div>
                    <label>Preferencias - Series:</label>
                    <input
                        type="text"
                        name="series"
                        value={usuario.preferencias.series}
                        onChange={handlePreferenciasChange}
                    />
                </div>
                <button type="submit">Crear Usuario</button>
            </form>
        </div>
    );
};

export default CrearUsuario;
