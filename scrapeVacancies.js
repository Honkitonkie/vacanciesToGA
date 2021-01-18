'use strict';
const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.keser.nl/vacatures';
const url2 = 'https://keser.nl/werkgever/kandidaten';
let ditVacatureNummer;
let ditKandidatenNummer;


const vacatureNummer = rp(url)
  .then(function(html){
    //success!
    ditVacatureNummer = $('div > article', html).length;
    console.log("ditVacatureNummer:", ditVacatureNummer); 
    return ditVacatureNummer;
  })
  .catch(function(err){
    //handle error
  });

const kandidatenNummer = rp(url2)
  .then(function(html){
    //success!
    ditKandidatenNummer = $('div > article', html).length;
    console.log("ditKandidatenNummer:", ditKandidatenNummer);
    return ditKandidatenNummer;
  })
  .catch(function(err){
    //handle error
  });


  exports.vacatureNummer = vacatureNummer;
  exports.kandidatenNummer = kandidatenNummer;