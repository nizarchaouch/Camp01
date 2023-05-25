var mongoose=require("mongoose")
var Schema=mongoose.Schema

var User=new Schema({

    nom:String,
    prenom:String,
    mail:String,
    numero:String,
    password:String,
    role:String,

    token:{
        type:String,
    },
    
    resetToken:{type:String,
    }

})

module.exports=mongoose.model("user",User)


