import { PostContent, getContents } from "@/controller/docpostcontroller";
import { putPost } from "@/controller/postcontorller";
import connectMongo from "@/database/db";



export default function handeler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "error 405" }))

    const { method } = req;
    switch (method) {
        case "GET":
            getContents(req,res)
            break
        case "POST":
            PostContent(req,res)
            break
        case "PUT":
      
            break
        case "DELETE":
            res.status(200).json({ method, name: " DELETE req" });
            break
        default:
            res.setHeader("Allow", ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`)
    }

}