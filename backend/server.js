import app from "./app.js";
import cloudinary from "cloudinary";
import express from 'express';
import path from 'path';
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Resolve directory
const __dirname = path.resolve();

// Serve static files from frontend (Vite/React build)
app.use(express.static(path.join(__dirname, "/dashboard/dist")));

// Fallback route (for SPA routing)
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dashboard", "dist", "index.html"));
});
app.listen(process.env.PORT, () => {
  console.log(`Server listening at port ${process.env.PORT}`);
});



