const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const serveStatic = require("serve-static");
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const Channel = require('./models/Channel');

mongoose.connect(process.env.MONGO_DB_SECRET,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.post('/api/', (req, res, next) => {
    console.log(req.body)
    const channel = new Channel({
        ...req.body
    });
    channel.save()
        .then(() => res.status(201).json({ message: 'Chaine enregistrée' }))
        .catch();
});

// ROUTES
app.use('/api/', (req, res, next) => {
    Channel.find()
        .then(channels => res.status(200).json(channels))
        .catch(error => res.status(400).json({ error }))
});


// Choose the port and start the server
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
console.log(`Mixing it up on port ${PORT}`)
})

// Serve static files from the React frontend app
app.use(serveStatic(path.join(__dirname, 'front/dist')))

// Anything that doesn't match the above, send back index.html
app.get('*', (req, res) => {
res.sendFile(path.join(__dirname + '/front/dist/index.html'))
})