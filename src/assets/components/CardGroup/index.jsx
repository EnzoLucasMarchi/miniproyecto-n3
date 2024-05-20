import { Card } from './Card'
import './CardGroup.css'

const CardGroup = ({data, filter, setFilter}) => {
    const maxCards = 6;
    const moreStays = filter.length > maxCards ? filter.length - maxCards : 0;
    return (
        <>
            <div className="cardgroup-container">
                 {data.length > 0 && data[0] && data[0].country && <h2> Stay in {data[0].country}</h2>}
                {/* ojaldre con esta linea*/}
                <p>{moreStays > 0 ? `${moreStays}+stays` : ''}</p>
                <div className="cards-area">
                    <ul className="card-list">
                        {
                            filter && filter.map(stay =>(
                                <Card key={stay.id}
                                      title={stay.title}
                                      rating={stay.rating} 
                                      type={stay.type} 
                                      photo={stay.photo}
                                      superHost={stay.superHost}
                                 />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CardGroup;