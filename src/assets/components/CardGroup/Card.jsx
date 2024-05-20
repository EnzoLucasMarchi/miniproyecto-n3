import './Card.css'
export const Card = ({id, title, rating, type, photo, superHost}) => {
    return (
        <>
            <li className="card">
                <div className="card-container">
                    <img className="card-img" src={photo}></img>
                    <div className="card-body">
                        <div className='card-details'>
                        {superHost && <h6 className="card-host">SUPER HOST</h6>}
                        <h6 className="card-stay-type">{type}</h6>
                        <h6 className="card-ranting">{rating}</h6>
                        </div>
                        <p className="card-title">{title}</p>
                    </div>
                </div>
            </li>


        </>
    );
};
