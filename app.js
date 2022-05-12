const express = require('express');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        theme: 'light',
    });
});

app.listen(3000, 'localhost');