//componente solo html
//ejemplo de doble etiqueta en raiz
export const Componente2_EtiquetaPadre = _ => 
        <>
            <div>
                <h1>Hola mundo 1!</h1>
            </div>
            <div>
                <h1>Hola mundo 2!</h1>
            </div>
        </>

//insertar codigo js
export const Componente3_IniJS = _ => {
    //Código JS(X) que se ejecuta o se puede invocar
    console.log("Hola mundo log");
    alert("hola");

    //esto es lo que se renderiza
    return (
        <section>
            <h1 id="h1P">Hola mundo 1!</h1>
            <section>
                {"Esto es código dinámico" + " JS, pero usemos react..."}
            </section>
        </section>
    );
}

//doble etiqueta en raiz
export const Componente3_Confirm = _ => {

    //definir funcion forma JS normal
    function primera ()
    //definir funcion forma arrow function
    //const primera = () => 
    {
        let nombre = prompt('¿Cuál es su nombre?');
        let edad = prompt('¿Cuál es su edad?');
        alert('Hola ' + nombre + ', su edad es:' + edad);
    }

    return (
        <section>
            <article>
                <label>Para un ejemplo básico de interacción, presione el botón:</label>
                <button onClick={primera}>Ver acción</button>
            </article>
        </section>
    );
}

//componente para pasar info por atributos (props)
export const Componente3_Props1 = props => <section>
    <header>{props.miHeader}</header>
    <section>{props.miSection}</section>
    <footer>{props.miFooter}</footer>
</section>

//componente para pasar info por atributos (props explícitos)
export const Componente3_Props2 = ({ miHeader, miSection, miFooter }) => <section>
    <header>{miHeader}</header>
    <section>{miSection}</section>
    <footer>{miFooter}</footer>
</section>