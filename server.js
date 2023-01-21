// initial commit

// https://statsapi.web.nhl.com/api/v1/teams

// https://statsapi.web.nhl.com/api/v1/teams/17/stats

// https://statsapi.web.nhl.com/api/v1/people/8477476/stats?stats=statsSingleSeason&season=20222023

// https://statsapi.web.nhl.com/api/v1/statTypes

const baseURL = 'https://statsapi.web.nhl.com/api/v1/';
const cors = require('cors');

const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000;

app.use(cors({ origin: false }));

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const routes = require('./api/routes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('---------- NHL Research API Server Started On: ' + port + ' ----------');
