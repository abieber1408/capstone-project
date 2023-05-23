import mongoose from 'mongoose';
const { Schema } = mongoose;

const myquizSchema = new Schema({
    
    name: { type: String, required: true },
    question:  { type: String, required: true },
    answer1:  { type: String, required: true },
    answer2:  { type: String, required: true },
    correctAnswer:  { type: String, required: true },

});
const MyQuiz = mongoose.models.MyQuiz || mongoose.model("MyQuiz", myquizSchema);

export default MyQuiz;