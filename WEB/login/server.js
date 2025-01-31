const express = require('express');
const path = require('path');

const app = express();
const PORT = 5500;


app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'index')));
app.use('/pix',express.static(path.join(__dirname, 'pix')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index','/index/index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
});