import Arena from "@colyseus/arena";
import { monitor } from "@colyseus/monitor";

/**
 * Import your Room files
 */
// import { MyRoom } from "./rooms/MyRoom";
import { GameRoom } from "./GameRoom";

export default Arena({
    getId: () => "Your Colyseus App",

    initializeGameServer: (gameServer) => {
        /**
         * Define your room handlers:
         */
        gameServer.define('hallway', GameRoom);
        gameServer.define('entrance', GameRoom);
        gameServer.define('outside', GameRoom);
        gameServer.define('arcade', GameRoom);
        gameServer.define('music', GameRoom);
        gameServer.define('movie', GameRoom);

    },

    initializeExpress: (app) => {
        /**
         * Bind your custom express routes here:
         */
        app.get("/", (req, res) => {
            res.send("This isn't how you play advent!");
        });

        /**
         * Bind @colyseus/monitor
         * It is recommended to protect this route with a password.
         * Read more: https://docs.colyseus.io/tools/monitor/
         */
        app.use("/colyseus", monitor());
    },


    beforeListen: () => {
        /**
         * Before before gameServer.listen() is called.
         */
    }
});