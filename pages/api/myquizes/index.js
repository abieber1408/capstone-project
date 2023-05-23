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
          // We're declaring jokeData to contain the body of our request sent by our form that we haven't created yet.
          // The body of our request might contain data in a variety of formats, but is typically an object.
          const myquiz = new MyQuiz(myquizData);
          // Utilizing our Joke scheme, we're creating a new joke.
          // At this point we're sanitizing our data according to the schema of our Joke model.
          await myquiz.save();
          // We've created a new joke, now we're calling save() to have mongoose insert a new document into our database.
    
          // The three lines above are functionally the same as:
          // Joke.create(request.body)
          // It's just a somewhat less opaque way.
    
          response.status(201).json({ status: "MyQuiz created" });
        } catch (error) {
          console.log(error);
          response.status(400).json({ error: error.message });
        }
      }
}
  