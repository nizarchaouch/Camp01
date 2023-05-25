var mongoose=require("mongoose")
var Schema=mongoose.Schema

var Dest=new Schema({

    title:String,
    subtitle:String,
    description:String,
    image:String,
    map:String,

    token:{
        type:String,
    },
    
    resetToken:{type:String,
    }

})

module.exports=mongoose.model("dest",Dest)