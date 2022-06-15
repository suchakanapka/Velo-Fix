const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('No Bitches?');
});

app.listen(80);