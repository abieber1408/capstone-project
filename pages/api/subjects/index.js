import { subjects } from "../../../lib/subjects";

export default function handler(request, response) {
  return response.status(200).json(subjects);
}
