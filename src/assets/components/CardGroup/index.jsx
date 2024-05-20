import { Card } from './Card'
import './CardGroup.css'

const CardGroup = ({data, filter, setFiter}) => {
    return (
        <>
            <div className="cardgroup-container">
                <h2>Stay in</h2>
                <p>stays</p>
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