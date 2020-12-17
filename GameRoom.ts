import { Room, Client } from "colyseus";

import { GameState } from './Schema';
import { DanceGameState } from './Schema';
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
    }
    
    onJoin (client:Client, options:any)
    {
        this.state.createAvatar(client.id, 0);
    }
    
    onMessage (client:Client, message:any)
    {
        if (message.type == "meta")
            this.setMetadata(message.data);
        else
        {
            const avatar = this.state.avatars[client.id];
            this.game.processMessage(message.type, message.data, avatar, this.state);
        }
    }
    
    onLeave (client:Client, consented:boolean)
    {
        this.state.removeAvatar(client.id);
    }
    
    onDispose() {}
}


export class DanceGameRoom extends GameRoom
{
    // maxClients = 6;
    game = new Game();
    
    onCreate (options:any)
    {
        this.setState(new DanceGameState());
        
        const w = this.state.world;
        
        this.setSimulationInterval((dt) => this.update(dt));
    }
    
    
    onMessage (client:Client, message:any)
    {
        if (message.type == "addSong")
        {
            (this.state as DanceGameState).addSong(message.song);
        }
        else
            super.onMessage(client, message);
    }
    
    onDispose() {}
    
    update(elapsed:number)
    {
        let dt = elapsed/1000;
        this.game.update(dt, this.state);
    }
}
