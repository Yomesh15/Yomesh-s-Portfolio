import express from "express"
import ContactModel from "../models/contact.model.js";

const contact_router = express.Router()

contact_router.post("/contact", async (req, res)=>{
    try {
        const {name, email, message} = req.body;

        if(!name || !email || !message){
            return res.status(400).json({message:"All fields are required", success:false})
        }

        await ContactModel.create({
            name, email, message
        })

        return res.status(201).json({message:"Thanks for Contacting", success:true})
        
    } catch (error) {
        console.log(error);
        
        return res.status(500).json({message:"Internal Server Error", success:false})
    }
})


export default contact_router
