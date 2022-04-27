const mongoose = require('mongoose');

const schema= mongoose.Schema;

const cmntrSchema= new schema({
 content:{
     type: String,
     required: true,
 },

},
{
    timestamps :true
});
module.exports= Cmntr =mongoose.model("cmntr",cmntrSchema);
