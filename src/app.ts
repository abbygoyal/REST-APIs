import express from "express";

const app = express();

//Routes

//Http methods:-GET,POST,PUT,PATCH,DELETE

app.get("/", (req, res, next) => {
  res.json({ message: "Welcome to eLib APIs" });
});

export default app;