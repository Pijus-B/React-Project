import express from 'express';

const app = express();

app.get("/" ,(req, res) => {
    res.send("Ar tu esi tam pasiruoses?");
});

app.listen(5001, () => {
    console.log('Server started at http://localhost:5001');
});