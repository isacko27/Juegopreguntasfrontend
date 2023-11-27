//Este AppProyecto se desarrolla en semana 6, no incluye manejo del context, es lo que se le agrega a crear partida
import React from 'react';
import { useState, useEffect } from 'react';
//manejo del context //SEMANA 7 //agregar
import { createContext } from 'react';

import './layout/Proyecto.css'; //incluye css
import Usuarios from './componentsProyecto/Usuarios';
import CrearPartida from './componentsProyecto/CrearPartida';
import CrearUsuario from './componentsProyecto/CrearUsuario';
//SEMANA 7 //agregar
import Jugar from './componentsProyecto/Jugar';
import VerPartidas from './componentsProyecto/VerPartidas';

const VistaGeneralProyecto = _ => {

    //manejo del context //SEMANA 7 //agregar
    const [mainState, setMainState] = useState({});
    useEffect(() => {
        if (mainState.nuevaCreacion != null && mainState.nuevaCreacion == true) {
            //setea la variable de context
            setMainState({ ...mainState, nuevaCreacion: false });
            setTabActiva(4);
        }
    }, [mainState]);

    //manejo de tabs
    const [tabActiva, setTabActiva] = useState(1);

    const hTabClick = (id) => {
        setTabActiva(id);
    };
    return (
        <section>
            {/* fuente: https://devsheet.com/create-tab-component-in-react/ */}
            <ul className="tabs">
                <li className={tabActiva === 1 ? 'active' : ''} onClick={() => hTabClick(1)}>Ver Usuarios</li>
                <li className={tabActiva === 2 ? 'active' : ''} onClick={() => hTabClick(2)}>Ver Partidas</li>
                <li className={tabActiva === 3 ? 'active' : ''} onClick={() => hTabClick(3)}>Crear Partida</li>
                <li className={tabActiva === 4 ? 'active' : ''} onClick={() => hTabClick(4)}>Jugar</li>
                <li className={tabActiva === 5 ? 'active' : ''} onClick={() => hTabClick(5)}>Crear Usuario</li>
            </ul>

            <section className="tab_content">
                <AppMainContext.Provider value={[mainState, setMainState]}>{/* semana 7 */}
                    {tabActiva === 1 && <Usuarios className="tab_panel"></Usuarios>}
                    {tabActiva === 2 && <VerPartidas className="tab_panel">Ver partidas en construcción</VerPartidas>}
                    {tabActiva === 3 && <CrearPartida className="tab_panel"></CrearPartida>}
                    {tabActiva === 4 && <Jugar className="tab_panel">Jugar en construcción</Jugar>}
                    {tabActiva === 5 && <CrearUsuario className="tab_panel">Crear Usuario</CrearUsuario>}
                </AppMainContext.Provider>{/* semana 7 */}
            </section>
        </section>
    )
}

export default VistaGeneralProyecto;
//SEMANA 7 // agregar
//crea un context
export const AppMainContext = createContext();