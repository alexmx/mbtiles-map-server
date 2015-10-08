# Map & Web Server for [MBTiles](https://github.com/mapbox/mbtiles-spec) map sources

### Installation

**Node.js** environment is required in order to run the servers.

```sh
$ node --version
```

```sh
$ git clone git@github.com:alexmx/mbtiles-map-server.git
$ cd mbtiles-map-server
$ npm install
$ ./map-server.js map/YOUR_MAP_FILE.mbtiles
```

Open another terminal window, go to the same directory `mbtiles-map-server` and run:

```sh
$ ./web-server.js
```

Now both `map-server` and `web-server` are running.
Open in your browser: [localhost:4444](http://localhost:4444/)

**[!]** You can find a sample map in the release archives of this project.

Version
----
1.0.0

License
----

MIT
