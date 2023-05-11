import dbConnect from "../../../db/connect";
import Subject from "../../../db/models/Subject";

export default async function handler(request, response) {
    await dbConnect();
    const { id } = request.query;
    
    if (request.method === "GET"){
        const subject = Subject.findById(id);
        if (!subject) {
            return response.status(404).json({ status: "Not found 🤷🏼 " });
        }
        return response.status(200).json(subject);
    }
}