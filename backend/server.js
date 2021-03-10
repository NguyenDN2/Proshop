import express from "express";
import dotenv from "dotenv";
import colors from "color";
import { NotFound, ErrorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoute.js";

dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use("/api/products", productRoutes);

app.use(NotFound);
app.use(ErrorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`App is running in port ${PORT}`.yellow.bold));
