package;

import schema.Avatar;
import Types;

@:expose
class Game
{
    public function new() {}
    
    public function processAvatarMessage(data:Dynamic, avatar:Avatar, state:Dynamic)
    {
        if (avatar == null)
            return;
        
        if (data == null)
        {
            trace("null avatar data");
            return;
        }
        
        if (data.x     != null) avatar.x     = data.x;
        if (data.y     != null) avatar.y     = data.y;
        if (data.name  != null) avatar.name  = data.name;
        if (data.skin  != null) avatar.skin  = data.skin;
        if (data.state != null) avatar.state = data.state;
        if (data.emote != null)
            avatar.emote = data.emote;
        else
            avatar.emote = 0;
    }
    
    public function init()
    {
    }

    public function update(dt:Float, state:Dynamic)
    {
    }
}
