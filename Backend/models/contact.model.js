import mongoose from "mongoose";


const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
})

const ContactModel = mongoose.model("Contact", ContactSchema)
export default ContactModel;
