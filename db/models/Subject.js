import mongoose from 'mongoose';
const { Schema } = mongoose;

const subjectSchema = new Schema({
    
    topic: { type: String, required: true },
    description: { type: String, required: true },
    image:  { type: String, required: true },
    video:  { type: String, required: true },
    answer1:  { type: String, required: true },
    answer2:  { type: String, required: true },
    correctAnswrer:  { type: String, required: true },

});
const Subject = mongoose.models.Subject || mongoose.model("Subject", subjectSchema);

export default Subject;