export default function List({ id, name, rating, price }) {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{rating}⭐️</h3>
            <h4>${price} A Night</h4>
        </div>
    )
}