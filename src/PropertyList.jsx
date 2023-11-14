import List from './List'
import './PropertyList.css'
export default function PropertyList({ property }) {
    return (
        <>
            <div className='co'>
                {property.map((i) => (
                    <List
                        id={i.id}
                        name={i.name}
                        rating={i.rating}
                        price={i.price}
                        key={i.id}
                    />
                ))}
            </div>
        </>
    )
}