const express = require('express');
const { spawn } = require('child_process');
const app = express();
const port = 3000;
const cors = require('cors')
app.use(cors())

app.use(express.json());

app.get('/sum', (req, res) => {
    const { num1, num2 } = req.query;
    const pythonProcess = spawn('python', ['./python/add.py', num1, num2]);

    pythonProcess.stdout.on('data', (data) => {
        res.send(data.toString());
    });
});

app.get('/shape', (req, res) => {
    const { array } = req.query;
    const pythonProcess = spawn('python', ['./python/shape.py', array]);

    pythonProcess.stdout.on('data', (data) => {
        res.send(data.toString());
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
