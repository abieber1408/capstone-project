// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import { subjects } from "../../../lib/subjects";
import dbConnect from "../../../db/connect";
import Subject from "../../../db/models/Subject";

export default async function handler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        const subjects = await Subject.find()
        return response.status(200).json(subjects);
    }
}
  