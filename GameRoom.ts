import { Room, Client } from "colyseus";

import { GameState } from './Schema';
import { Game } from './game';

export class GameRoom extends Room
{
    // maxClients = 6;
    game = new Game();
    
    onCreate (options:any)
    {
        this.setState(new GameState());
        
        const w = this.state.world;
        
        // this.setSimulationInterval((dt) => this.update(dt));
        
        this.onMessage("avatar", (client, message) => {
            
            const avatar = this.state.avatars[client.id];
            this.game.processAvatarMessage(message, avatar, this.state);
        });
    }
    
    onJoin (client:Client, options:any)
    {
        this.state.createAvatar(client.id, 0);
    }
    
    onLeave (client:Client, consented:boolean)
    {
        this.state.removeAvatar(client.id);
    }
    
    onDispose() {}
    
    // update(elapsed:number)
    // {
    //     let dt = elapsed/1000;
    //     this.game.update(dt, this.state);
    // }
    
    // broadcastPatch()
    // {
    //     return super.broadcastPatch();
    // }
}
