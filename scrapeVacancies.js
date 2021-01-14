'use strict';
const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://www.keser.nl/vacatures';
let ditNummer;


const vacatureNummer = rp(url)
  .then(function(html){
    //success!
    ditNummer = $('div > article', html).length;
    console.log(ditNummer);
    return ditNummer;
  })
  .catch(function(err){
    //handle error
  });


  exports.vacatureNummer = vacatureNummer;