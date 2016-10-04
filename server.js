// Using express, body-parser, and mongojs create birds database and sightings collection. Define following end points.
// * **POST** `/api/sighting`
// * **GET** `/api/sighting?<key to search>`
// * **PUT** `/api/sighting?<key to search>`
// * **DELETE** `/api/sighting?<key to search>`
// Make sure GET, PUT, and DELETE to work on any property (ex. name, order, status or id). Sample data is prepared in server.js.
const express = require('express');
const {json} = require('body-parser');



const app = express();


const port = 4000;
app.use(json());

const bird = require('./birdsRoute');
bird( app );



app.listen(port, () => console.log(`Listening on ${port}`) );
