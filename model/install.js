import { Schema, model, models } from "mongoose";


const InstallSchema = new Schema({
    title: String,
    subTitle:String,
    heading: String,
    desc: String,
    terminalText: String,

})

const Install = models.install || model ('install',InstallSchema)

export default Install;