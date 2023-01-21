'use strict';
module.exports = (app) => {
  const teams = require('./controllers/teamsController');
  const players = require('./controllers/playersController');

  app.route('/teams').get(teams.get_all_teams)
  app.route('/teams/:id').get(teams.get_team)

  app.route('/players/:id').get(players.get_player_bio)
  app.route('/players/:id/stats').get(players.get_player_stats)
};