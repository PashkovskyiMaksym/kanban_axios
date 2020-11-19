import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Table(props) {

    return (
        <div>
            <table className="table table-hover">
                <thead className="badge-info">
                <tr>
                    <th scope="col">Card</th>
                    <th scope="col">Status</th>
                    <th scope="col">Priority</th>
                    <th scope="col"> </th>
                </tr>
                </thead>
                {props.cards.map(card =>
                    <tbody>
                    <tr>
                        <td>{card.name}</td>
                        <td>{card.status}</td>
                        <td>{card.priority}</td>
                        <td>
                            <button className="btn btn-outline-danger" onClick={() =>
                                props.deleteCard(card._id)}>Delete
                            </button>
                        </td>
                    </tr>
                    </tbody>
                )}
            </table>

        </div>
    );
}

export default Table;
