import "dotenv/config";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

const PORT = process.env.PORT | 3000;

app.listen(PORT, () => console.log("Servidor andando en el puerto: " + PORT));
