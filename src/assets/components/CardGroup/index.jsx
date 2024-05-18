import { Card } from './Card'

const CardGroup = ({ data }) => {
    return (
        <>
            <div className="cardgroup-container">
                <h2>Stay in</h2>
                <p>stays</p>
                <div className='cards-area'>
                    <ul>
                        {data.map(stay => {
                            <Card key={stay.id} />
                        })
                        }
                    </ul>

                </div>

            </div>
        </>
    );
};

export default CardGroup;