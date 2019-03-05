const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 2000;
const publicPath = __dirname + '/public';

app.use('/public', express.static(publicPath));
app.get('/', (req, res) => res.sendFile(publicPath + '/index.html'));

app.listen(port, () => console.log(`Server has started on port ${port}`));
