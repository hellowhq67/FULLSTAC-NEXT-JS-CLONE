import { getPost, postUp, putPost } from "@/controller/postcontorller";
import connectMongo from "@/database/db";


export default function handeler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "error 405" }))

    const { method } = req;
    switch (method) {
        case "GET":
            getPost(req, res)

            break
        case "POST":
            postUp(req, res)
            break
        case "PUT":
            putPost(req, res)
            break
        case "DELETE":
            res.status(200).json({ method, name: " DELETE req" });
            break
        default:
            res.setHeader("Allow", ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`)
    }

}
