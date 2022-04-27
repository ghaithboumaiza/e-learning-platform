const mongoose = require('mongoose');

const schema= mongoose.Schema;

const userSchema= new schema({
 firstName:{
     type: String,
     required: true,
 },
lastName:{
    type: String,
    required: true,
},
 email:{
    type: String,
    // trim: true,
    // lowercase: true,
    // unique: [true,"email should be unique"],
    required: 'Email address is required',
    // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
},
password :{
    type:String,
    required: true
},
role:{
    type:String,
    default:"admin"
},
adresse:{
    type: String,
    required: true,
},
sexe:{
    type: String,
    // required: true,
},
phone:{
    type: String,
    // required: true,
},
age:{
    type: String,
    // required: true,
},
publications:[
    {
        type:mongoose.Schema.ObjectId,
        ref:'publication'
    }
],

},
{
    timestamps :true
});
module.exports= User =mongoose.model("user",userSchema);
