import { subjects } from "../../../lib/subjects";

export default function handler(request, response) {
  const { id } = request.query;

  const subject = subjects.find((subject) => subject.id === id);

  if (!subject) {
    return response.status(404).json({ status: "Not Found" });
  }

  response.status(200).json(subject);
}