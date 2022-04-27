const { links } = require('express/lib/response');
const mongoose = require('mongoose');

const schema= mongoose.Schema;

const seanceSchema= new schema({
 lien :{
     type: String,
     required: true,
 },
 

},
{
    timestamps :true
});
module.exports= Seance =mongoose.model("seance",seanceSchema);
