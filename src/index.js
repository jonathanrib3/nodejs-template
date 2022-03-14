import express, { json } from "express";

const app = express();

app.use(json());

app.get("/", (req, res) => {
  return res.status(200).send({ message: "hello world!" });
});

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
