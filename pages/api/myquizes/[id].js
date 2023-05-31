import dbConnect from "../../../db/connect";
import MyQuiz from "../../../db/models/MyQuiz";

export default async function handler(request, response) {
    await dbConnect();
    const { id } = request.query;
    
    if (request.method === "GET"){
        const myquiz = MyQuiz.findById(id);
        if (!myquiz) {
            return response.status(404).json({ status: "Not found 🤷🏼 " });
        }
        return response.status(200).json(myquiz);
    }
}