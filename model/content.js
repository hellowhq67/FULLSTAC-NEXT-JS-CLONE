import { Schema,model,models } from "mongoose";


const ContnetSchema = new Schema({
    title:String,
    subtitle:String,
    heading:String,
    desc:String,

})


const Contet = models.content || model('content',ContnetSchema)


export default Contet;



