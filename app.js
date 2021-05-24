const express = require('express');
const app = express();


app.use(express.static('public'))
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

const data = require('./data/got.json');


app.get('/episodes', (req, res) => {
    res.render('episodes', { 
        data: data
    })
});

app.get('/episodes/:season', (req, res) => {
    const season = data.filter((e) => e.season === Number(req.params.season))
    
    res.render('episodes', { 
        data: season
    })
});



const port = 3000;
app.listen(port, () => {
    console.log(`Ready! Listeniiiiing on port ${port}`);
});
