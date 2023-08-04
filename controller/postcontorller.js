import Post from "@/model/post"


export async function getPost(req, res) {



    try {
        const posts = await Post.find({})

        if (!posts) return res.status(404).json({ err: "data not found" })
        res.status(200).json(posts)
    } catch (err) {
        res.status(404).json({ err: "error data" })
    }

}

export async function postUp(req, res) {
    try {
        const fromData = req.body;
        if (!fromData) return res.status(404).json({ error: "From data not Provided" })

        Post.create(fromData, function (err, data) {
            return res.status(200).json(data)
        })

    } catch (err) {
        res.status(404).json({ err })
    }
}

export async function putPost(req, res) {

    try {
        const { postId } = req.query;
        const formData = req.body;
        if (postId && formData) {
            await Post.findByIdAndUpdate(postId, formData);
            res.status(200).json(formData)
        }
        res.status(200).json(formData)
    } catch (error) {
        res.status(404).json({ error })

    }
}