import { PostCont, getCon, } from "@/controller/installcontroler";
import connectMongo from "@/database/db";

export default function handeler(req, res) {
    connectMongo().catch(() => res.status(405).json({ error: "error 405" }))


    const { method } = req;
    switch (method) {
        case "GET":
            getCon(req, res)
            break
        case "POST":
            PostCont(req, res)
            break
        case "PUT":

            break
        default:
            res.setHeader("Allow", ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowd`)
    }
}