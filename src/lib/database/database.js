import mongoose from "mongoose";

export default async function database (){
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("DB Connected");
  } catch (error) {
    console.log(error);
  }
};
