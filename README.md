Copied from [`@GeoKureli/ColyseusTest-Server`](https://github.com/GeoKureli/ColyseusTest-Server)
which is the server side to [`@GeoKureli/ColyseusTest`](https://github.com/GeoKureli/ColyseusTest)
which was copied from [`@AustinEast/bass-master-online`](https://github.com/AustinEast/bass-master-online)

## Haxelibs

* zerolib: `0.8.0`
* colyseus: `0.14.9`
* colyseus-websocket: `1.0.10`

## Austin's Server code

The Server is made up of two parts:

* The Game's logic, written in Haxe (Game.hx)
* The Colyseus server, written in Typescript (index.ts & GameRoom.ts)

You may be wondering what the motivation was behind writing the Game logic in Haxe, even though its output is run on a server by a Typescript-based Node app. Normally it would be simpler to write it all in Typescript, but there are a couple of advantages to doing it this way:

1) It allows the Game instance running on the Server to easiy share Types and Utility methods with the Client app (which is built with Haxeflixel, a Haxe-based Game Framework). Check out the `shared` directory the see what I mean.
2) It gives access to the Haxe ecosystem, which includes its awesome standard library along with other great game-oriented libraries ([zerolib](https://github.com/01010111/zerolib) in this case)!
3) It's more fun to write code in Haxe!


### Building

Direct your terminal to the `server` directory:
```
cd server/
```
Install the Node dependencies, then build the Colyseus Schema:
```
npm i
npm run schema
```
Compile the Haxe code:
```
haxe game.hxml
```
Start the Server:
```
npm start
```

## Client

TODO

# Development

## Server
TODO

## Client
