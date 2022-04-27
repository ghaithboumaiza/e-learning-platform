const mongoose = require('mongoose');

const schema= mongoose.Schema;

const examSchema= new schema({
    titel:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    },
 duration:{
    type: String,
    required: true,
},



},

{
    timestamps :true
});
module.exports= Exam =mongoose.model("exam",examSchema);
