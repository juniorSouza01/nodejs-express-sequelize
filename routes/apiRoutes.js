const express = require('express');
const app = express();

app.get('/hello-world', async (req, res) => {
    const name = req.query.name || `world`;
    res.send(`Hello ${name}!`);
});

app.get('/hello-world/:name', async() => {
    const name = req.query.name;
    res.send(`Hello ${name}`);
});

module.exports = app;
