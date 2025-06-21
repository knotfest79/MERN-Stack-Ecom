// import mongoose from "mongoose";
// export const connectDB = () => {
//   mongoose
//     .connect("", {
//       dbName: "Ecommerce 25",
//     })
//     .then((c) => console.log(`DB Connected to ${c.connection.host}`))
//     .catch((e) => console.log(e));
// };
// utils/features.ts
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
