import React, {useState} from 'react';
import axios from 'axios'
import faker from 'faker'
import 'bootstrap/dist/css/bootstrap.min.css';
import List from "./List/List";
import Board from "./Board/Board";
import Table from "./Table/Table";


function App() {
    const statuses = ['todo', 'progress', 'review', 'done'];
    const priority = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const [cards, setCards] = useState([]);
    const [mode, setMode] = useState('list');

    const getCards = () => {
        axios.get('https://nazarov-kanban-server.herokuapp.com/card/')
            .then((res) => {
                setCards(res.data)
            })
            .catch((err) => {
            })
    };

    const addCard = () => {
        console.log('Add card')
        const newCard = {
            name: faker.random.word(),
            description: faker.random.words(),
            status: statuses[Math.floor(Math.random() * 4)],
            priority: priority[Math.floor(Math.random() * 10)],
        }
        axios.post('https://nazarov-kanban-server.herokuapp.com/card/', newCard)
            .then((res) => {
                getCards()
            })
            .catch((err) => {
            })
    };

    const deleteCard = (id) => {
        axios.delete(`https://nazarov-kanban-server.herokuapp.com/card/${id}`)
            .then((res) => {
                getCards()
            })
            .catch((err) => {
            })
    };

    return (
        <div className="Container">
            <div className="d-flex justify-content-lg-start">
                <button className="btn btn-outline" onClick={() =>
                    setMode('list')}>List
                </button>
                <button className="btn btn-outline" onClick={() =>
                    setMode('board')}>Board
                </button>
                <button className="btn btn-outline" onClick={() =>
                    setMode('table')}>Table
                </button>
            </div>
            <hr/>
            <div className="d-flex justify-content-center">
                <button className="btn btn-outline-primary"
                        onClick={getCards}>Get Cards
                </button>
                <button className="btn btn-outline-primary"
                        onClick={addCard}>Add new Card
                </button>
            </div>

            {mode === 'list' && <List
                cards={cards}
                deleteCard={deleteCard}
            />}
            {mode === 'board' && <Board
                cards={cards}
                deleteCard={deleteCard}
            />}
            {mode === 'table' && <Table
                cards={cards}
                deleteCard={deleteCard}
            />}

        </div>
    );
}

export default App;
