'use strict';
const axios = require('axios');

exports.get_all_teams = async (req, res) => {
  // Book.find({}, (err, book) => {
  //   if (err)
  //     res.send(err);
  //   res.json(book);
  // });

  const teams = await axios.get('https://statsapi.web.nhl.com/api/v1/teams');
  console.log(teams.data);
  
  res.json(teams.data);
};

exports.get_team = async (req, res) => {
  console.log(req);
  const teams = await axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${1}`);
  //console.log(teams.data);
  
  res.json(teams.data);
};