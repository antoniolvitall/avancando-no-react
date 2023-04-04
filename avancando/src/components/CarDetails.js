const CarDetails = ({ brand, km, color, newCar }) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {newCar && <p>este carro e zero km</p>}
    </div>
  )
}

export default CarDetails