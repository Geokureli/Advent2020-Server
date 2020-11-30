package;

import schema.Avatar;
import Types;

@:expose
class Game
{
    public function new() {}
    
    public function processMessage(type:String, data:Dynamic, avatar:Avatar, state:Dynamic)
    {
        if (avatar == null)
            return;
        
        switch (type)
        {
            case "avatar":
            {
                if (data.x     != null) avatar.x     = data.x;
                if (data.y     != null) avatar.y     = data.y;
                if (data.name  != null) avatar.name  = data.name;
                if (data.skin  != null) avatar.skin  = data.skin;
                if (data.state != null) avatar.state = data.state;
            }
        }
    }
    
    public function init()
    {
    }

    public function update(dt:Float, state:Dynamic)
    {
    }
}
