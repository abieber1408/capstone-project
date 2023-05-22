import mongoose from 'mongoose';
const { Schema } = mongoose;

const subjectSchema = new Schema({
    
    topic: { type: String, required: true },
    question:  { type: String, required: true },
    description: { type: String},
    image:  { type: String},
    video:  { type: String},
    answer1:  { type: String, required: true },
    answer2:  { type: String, required: true },
    correctAnswer:  { type: String, required: true },

});
const Subject = mongoose.models.Subject || mongoose.model("Subject", subjectSchema);

export default Subject;