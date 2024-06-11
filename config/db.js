import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://udarasahanj:51169967@cluster0.jnc6ght.mongodb.net/food-delivery').then(()=>console.log("DB Connected"))
}