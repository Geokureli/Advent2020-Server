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
    
    @type("number")
    x: number;
    
    @type("number")
    y: number;
    
    @type("number")
    color: number;
    
    @type("uint8")
    state: number;
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