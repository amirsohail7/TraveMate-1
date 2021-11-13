import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import tourRoutes from "./routes/tourRoutes.js";
import restaurantRoutes from "./routes/restaurantRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";
import destinationRoutes from "./routes/destinationRoutes.js";
import hotelRoutes from "./routes/hotelRoutes.js";
import packageRoutes from "./routes/packageRoutes.js";
import providerRoutes from "./routes/providerRoutes.js";
import travelerRoutes from "./routes/travelerRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import path from "path";
import fileRoutes from "./routes/file-upload-routes.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://Hadikk:developattravemate123@cluster0.bira6.mongodb.net/travemate?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3040;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));

mongoose.set("useFindAndModify", false);

app.use("/tour", tourRoutes);
app.use("/restaurant", restaurantRoutes);
app.use("/provider", providerRoutes);
app.use("/traveler", travelerRoutes);
app.use("/hotel", hotelRoutes);
app.use("/booking", bookingRoutes);
app.use("/blog", blogRoutes);
app.use("/destination", destinationRoutes);
app.use("/package", packageRoutes);

//upload routes
app.use("/uploads", express.static("uploads"));
app.use("/api", fileRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
