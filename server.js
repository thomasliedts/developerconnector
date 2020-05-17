const express = require('express');

const app = express();

app.get('/ping', (req, res) => res.send('pong'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
