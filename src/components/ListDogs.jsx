function ListDogs({listDogs}){
    return (
    <div>
    {listDogs.map((element) => {
        return (
        <div className="card-container" key={element.id}>
            <p>Nombre: {element.name}</p>
            <p>Raza: {element.breed}</p>
            <p>Edad: {element.age}</p>
            <p>Propietario: {element.owner}</p>
            <img src={element.image} />
        </div>
        );
    })}
    </div>
    )
}
export {ListDogs};