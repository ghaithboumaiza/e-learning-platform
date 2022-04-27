const mongoose = require('mongoose');

const schema= mongoose.Schema;

const suppSchema= new schema({
    titel:{
        type: String,
        required: true,
    },
 content:{
    type: String,
    required: true,
},


},

{
    timestamps :true
});
module.exports= Supp =mongoose.model("supp",suppSchema);
