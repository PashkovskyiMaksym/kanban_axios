import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function List(props) {

    return (
        <div className="">
            <div>
                {props.cards.map(card =>
                    <div className="card">
                        <div className="card-body">
                            <div className="card-header badge-info">
                                {card.name}
                            </div>
                            <div className="d-flex justify-content-end">
                                <button className="btn btn-outline-danger" onClick={() =>
                                    props.deleteCard(card._id)}>Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
}

export default List;
