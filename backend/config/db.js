import mongoose from 'mongoose'

export  const connectDB =async ()=>{
    await mongoose.connect("mongodb+srv://foodpro:whitesaucepasta@cluster0.vl0cc.mongodb.net/food-del").then(()=>console.log("DB Connected"));
}