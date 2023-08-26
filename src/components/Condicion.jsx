function Condicion({valor}){
    if(valor){
        return (
        <div>
            <h3>Componente Verdadero</h3>
        </div>
        );
    } else {
        return (
        <div>
            <h3>Componente Falso</h3>
        </div>
        );
    }
}

export {Condicion} ;