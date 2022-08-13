import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    Bookname: { type: String, required: true },
    Bookprice: { type: String, required: true },
    author: { type: String, required: true },
    availability: { type: String, required: true },
    BookImage: { type: String, required: true },
    Description: { type: String, required: true }
})

const Student = mongoose.model('StudentSchema', StudentSchema)
export default Student