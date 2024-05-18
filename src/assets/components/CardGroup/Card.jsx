export const Card = ({title, rating, type, photo}) => {
    return (
        <>
            <li>
                <div className="card-container">
                    <img className="card-img" src={photo}></img>
                    <div className="card-body">
                        {isSuperHost && <h6 className="card-host"></h6>}
                        <h6 className="card-stay-type">{type}</h6>
                        <h6 className="card-ranting">{rating}</h6>
                        <p className="card-title">{title}</p>
                    </div>
                </div>
            </li>


        </>
    );
};
