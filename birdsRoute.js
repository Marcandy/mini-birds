const birds = require('./birds');

module.exports = app => {
  app.route('/api/sighting')
    .post(birds.postBird);
}
