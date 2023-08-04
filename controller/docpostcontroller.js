import Contet from "@/model/content";


export async function getContents(req,res){
    try{
    const contents = await Contet.find({})

    if(!contents) return res.status(404).json({error:"error data"})
    res.status(200).json(contents)

}catch{
        res.status(404).json({ err: "error data" })

    }
}




export async function PostContent(req,res){
    try{
    const fromData = req.body;
    if(!fromData) return res.status(404).json({error:"error data"})

    Contet.create(fromData,function(err,data){
        return res.status(200).json(data)
    })
    }catch(err){
        res.status(404).json({ err: "error data" })

    }
}

export async function PutContent(req,res){
    try{

    }catch{
        res.status(404).json({ err: "error data" })

    }
}
export async function getContent(req,res){
    try{

    }catch{
        res.status(404).json({ err: "error data" })

    }
}