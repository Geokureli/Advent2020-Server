import { Avatar } from './Schema';

export class Game
{
    constructor();
    
    processMessage(type:String, message:any, avatar:Avatar, state:any):void;
    
    update(dt:number, state:any):void;
    
    init():void;
}