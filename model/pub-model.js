const mongoose = require('mongoose');

const schema= mongoose.Schema;

const pubSchema= new schema({
 content:{
     type: String,
     required: true,
 },

user:{
    type:mongoose.Schema.ObjectId,
    ref:'user'
}


},
{
    timestamps :true
});
module.exports= Pub =mongoose.model("publication",pubSchema);
