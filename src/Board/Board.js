import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Board(props) {

    return (
        <div className="row">
            {props.cards
                .map(card =>
                    <div className="card col-3">
                        <div className="card-body">
                            <div className="card-header badge-info">
                                {card.name}
                            </div>
                            Status:{card.status}
                            <br/>
                            Priority:{card.priority}
                            <br/>
                            <button className="btn btn-outline-danger" onClick={() =>
                                props.deleteCard(card._id)}>Delete
                            </button>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default Board;
