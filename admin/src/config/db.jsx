import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://d721999:Deepak721999@cluster0.rpyh0ar.mongodb.net/FoodHub').then(()=>console.log("DB connected"))
}