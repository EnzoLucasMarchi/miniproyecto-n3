import { Card } from './Card'
import './CardGroup.css'

const CardGroup = ({data, filter, setFilter}) => {
    return (
        <>
            <div className="cardgroup-container">
                <div className='section-header'>
                {data.length && data[0]?.country && <h2> Stay in {data[0].country}</h2>}
                {/* ojaldre con esta linea*/}
                <p>{`${filter.length}+stays`}</p>
                </div>
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