import React, { useState } from 'react';
import axios from 'axios';

function Shape() {

    const [arrayInput, setArrayInput] = useState('');

    const [shapeResult, setShapeResult] = useState('');

 

    const handleShapeSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get(`http://localhost:3000/shape?array=${arrayInput}`);
        setShapeResult(response.data);
    };

    return (
        <div>
          

            <h1>Get Shape of Array</h1>
            <form onSubmit={handleShapeSubmit}>
                <input type="text" value={arrayInput} onChange={(e) => setArrayInput(e.target.value)} placeholder="Enter array as a list" />
                <button type="submit">Get Shape</button>
               
            </form>
            {shapeResult && <p>Shape: {shapeResult}</p>}

        </div>
    );
}

export default Shape;
