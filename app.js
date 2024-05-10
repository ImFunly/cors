const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/characters', async (req, res) => {
    try {
        const response = await axios.get('https://rickandmortyapi.com/api/character');
        res.json(response.data.results);
    } catch (error) {
        res.status(500).json({ error: 'Error con el servidor' });
    }
});

app.get('/characters/:name', async (req, res) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${req.params.name}`);
        if (response.data.results.length === 0) {
            res.status(404).json({ error: 'Personaje no encontrado' });
        } else {
            res.json(response.data.results[0]);
        }
    } catch (error) {
        res.status(500).json({ error: 'Personaje no encontrado' });
    }
});

app.listen(PORT, () => {
    console.log(`Express está funcionando en http://localhost:${PORT}`);
});
