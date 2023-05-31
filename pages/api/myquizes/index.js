// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
//import { subjects } from "../../../lib/subjects";
import dbConnect from "../../../db/connect";
import MyQuiz from "../../../db/models/MyQuiz";

export default async function handler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        const myquizes = await MyQuiz.find()
        return response.status(200).json(myquizes);
    }
    if (request.method === "POST") {
        try {
          const myquizData = request.body;
          const myquiz = new MyQuiz(myquizData);
          await myquiz.save();
          response.status(201).json({ status: "MyQuiz created" });
        } catch (error) {
          console.log(error);
          response.status(400).json({ error: error.message });
        }
      }
}
  