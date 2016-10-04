const mongojs = require('mongojs');
const db = mongojs('birds', ['sightings']);

module.exports = {

   postBird(req, res) {
    db.sighthing.insert(req.body, (err, bird) => {
      if (err) return res.status(500).json(err);
      return res.status( 200).json(bird);
    })
  }
};


const sighting =
[{
  "name": "red breasted merganser",
  "order": "Anseriformes",
  "status": "least concern"
},
{
  "name": "cedar waxwing",
  "order": "Passeriformes",
  "status": "least concern"
},
{
  "name": "osprey",
  "order": "Accipitriformes",
  "status": "extinct"
},
{
  "name": "snowy plover",
  "order": "Charadriformes",
  "status": "near threatened"
}];
