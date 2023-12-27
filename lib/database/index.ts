import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
let cashed = (global as any).mongoose || { conn: null, promise: null };
export const connectToDatabse = async () => {
  if (cashed.conn) return cashed.conn;
  if (!MONGODB_URI) throw new Error("Mongodb uri is wrong");

  cashed.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cashed.conn = await cashed.promise;

  return cashed.conn;
};
