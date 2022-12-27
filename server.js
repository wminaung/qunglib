import express from "express";
import cors from "cors";
import fs from "fs";
import { createCss } from "./src/index.js";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors("*"));
app.listen(3000, () => {
  console.log("server is running on port 3000");
});

const getData = () => {
  app.post("/", (req, res) => {
    let data = JSON.parse(req.body.data);

    let returnCss = "";
    createCss(data).forEach((element) => {
      returnCss += element;
    });

    fs.writeFile("./css/index.css", returnCss, (err) => {
      if (err) throw err;
      console.log("Write complete");
    });

    res.send("OK");
  });
};

getData();
