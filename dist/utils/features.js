import mongoose from "mongoose";
export const connectDB = () => {
    mongoose
        .connect("mongodb://localhost:27017/", {
        dbName: "Ecommerce25",
    })
        .then((c) => console.log(`✅ MongoDB connected to ${c.connection.host}`))
        .catch((e) => {
        console.error("❌ MongoDB connection failed:", e.message);
        process.exit(1);
    });
};
