#!/usr/local/bin/node

var express = require("express");
var app = express();
var MBTiles = require('mbtiles');


if (process.argv.length < 3) {
  
  // Check if all args are passed
  console.log("Error! Missing TILES filename.\nUsage: node server.js TILES");
  process.exit(1)
}

// Normalize tileset filename
var TILES = String(process.argv[2]).replace(/\.mbtiles/,'') + '.mbtiles';

// Initialize tileset
new MBTiles(__dirname + '/' + TILES, function(err, mbtiles) {
  
  if (err) throw err;

  app.get('/:y/:x/:z.*', function(req, res) {

    var x = req.param('x'), y = req.param('y'), z = req.param('z');

    console.log("y : " + y, "x : " + x, "z : " + z);

    mbtiles.getTile(y, x, z, function(err, tile, headers) {
      
      if (err) {
        
        console.log("Tile loading error!!!");
        res.status(404).send();
      } 
      else {

        res.header("Content-Type", "image/png")
        res.send(tile);
      }
    });
  });

  console.log('Listening on port: ' + 3000);
  app.listen(3000);

});
