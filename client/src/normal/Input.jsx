// Input.js

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles.css';

const Input = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get(`http://localhost:3000/sum?num1=${num1}&num2=${num2}`);
        setResult(response.data);
    };

    return (
        <div className="container">
            <h1>Sum Calculator</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
                <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
                <button type="submit">Calculate Sum</button>
            </form>
            {result && <p>Sum: {result}</p>}

           <div className="link-container">
             <h2>Want to Know Shape of array?</h2>
             <Link to="/shape"><span>Click here</span></Link>
           </div>
        </div>
    );
}

export default Input;
