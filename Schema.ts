import { Schema, ArraySchema, MapSchema, type } from "@colyseus/schema";

export class Point extends Schema {
    @type("number")
    x: number;
    
    @type("number")
    y: number;
}

export class Avatar extends Schema
{
    @type("string")
    id: string;
    
    @type("string")
    name: string;
    
    @type("number")
    x: number;
    
    @type("number")
    y: number;
    
    @type("uint8")
    skin: number;
    
    @type("uint8")
    state: number;
    
    @type("uint8")
    emote: number;
}

export class GameState extends Schema
{
    @type({ map: Avatar })
    avatars = new MapSchema<Avatar>();
    
    createAvatar (id: string)
    {
        let avatar = new Avatar();
        this.avatars[id] = avatar;
        
        return avatar;
    }
    
    removeAvatar (id: string)
    {
        delete this.avatars[id];
    }
    
    forEachAvatar(callback:(entity:Avatar) => any)
    {
        for (let id in this.avatars)
        {
            const avatar: Avatar = this.avatars[id];
            if (avatar != null)
                callback(avatar);
        }
    }
    
    createPoint(x: number, y: number)
    {
        var point = new Point();
        point.x = x;
        point.y = y;
        return point;
    }
}

export class DanceGameState extends GameState
{
    @type({ map: "number" })
    songs = new ArraySchema<number>();
    
    @type("number")
    songStartTime:number;
    
    addSong(id:number)
    {
        this.songs.push(id);
    }
}