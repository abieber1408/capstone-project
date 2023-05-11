// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

//import { subjects } from "../../../lib/subjects";

import dbConnect from "../../../db/connect";
import Subject from "../../../db/models/subject";

export default async function handler(request, response) {
    await dbConnect();

    if (request.method === "GET") {
        const subjects = await Subject.find()
        response.status(200).json(subjects);
    }
   
}
  