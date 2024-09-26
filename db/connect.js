import mongoose from "mongoose"

const URI = "mongodb://localhost:27017/sessions"

export const db = async() => {
    try {
        await mongoose.connect(URI)
        console.log("MongoDB connected succesfully!")
    } catch (error) {
        console.log("Error connecting mongodb", error.message)
    }

}