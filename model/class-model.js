const mongoose = require('mongoose');

const schema= mongoose.Schema;

const classSchema= new schema({
 content:{
     type: String,
     required: true,
 },

},
{
    timestamps :true
});
module.exports= Class =mongoose.model("class",classSchema);
