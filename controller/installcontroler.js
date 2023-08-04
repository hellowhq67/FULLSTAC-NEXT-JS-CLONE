import Install from "@/model/install";



export async function getCon(req, res) {

    try {
        const contents = await Install.find({})

        if (!contents) return res.status(404).json({ error: "error data" })
        res.status(200).json(contents)
    } catch {
        res.status(404).json({ err: "error data" })

    }

}


export async function PostCont(req, res) {
    try {
        const FormData = req.body;
        if (!FormData) return res.status(404).json({ error: "error data" })


        Install.create(FormData, function (err, data) {
            return res.status(200).json(data)
        })
    } catch (err){
        res.status(404).json({ err: "error data" })

    }
}