'use strict'

const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const app = express();
const mongoJS = require('mongojs');
const db = mongoJS('devMtn', ["tests"]);
const port = 7999;

app.use(cors());
app.use(json());


app.post('/api/tests', (req, res) => {
    db.tests.insert(req.body, (err, bird) => {
        if(err) return res.status(500).json(err);
        else res.json(response);
    })
});
app.get('/api/tests', (req, res) => {

    const query = {}

    if(req.query.bird) query.bird = { name: req.query.bird };
    if(req.query.region) query.region = req.query.region;
    if(req.query.id) query._id = mongoJS.ObjectId(req.query.id);

    db.tests.find(query, function(err, response){
            if(err) res.status(500).json(err);
            else res.json(response);
    });

});
app.put('/api/tests/', (req, res) => {
    console.log(req.query)
    if(!req.query.name) return res.status(418).send('request query \'name\' required');
        db.tests.findAndModify({
                query: {
                    name: req.query.name
                },
                update: {
                    $set: req.body
                }
            }, (err, response) => {
                if(err) return res.status(500).json(err);
                res.json(response);
            });
});

app.delete('/api/tests', (req, res) => {
    db.tests.remove({ _id: mongoJS.ObjectId(req.query.id) }, (err, response) => {
        console.log(err, response);
        if(err) return res.status(500).json(err);
        return res.json(response);
    });
});

app.listen( port, () => console.log(`Listening on ${port}`));
