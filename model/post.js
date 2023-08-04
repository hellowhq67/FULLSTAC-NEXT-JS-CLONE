import { Schema, model, models } from 'mongoose';


const PostSchema = new Schema({
    title: String,
    image: String,
    desc: String,
})

const Post = models.post || model('post', PostSchema)


export default Post;