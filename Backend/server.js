import express from "express";
import mongoose from "mongoose";
import cards from "./Dbcards.js";
import Cors from "cors";

//App configuration

const app = express();
const port = process.env.PORT || 8001;
const configURL = `mongodb+srv://Admin:wF5vvGwrvkEDbe8U@cluster0.bkqht.mongodb.net/TinderDB-clone?retryWrites=true&w=majority`;

//middleware
app.use(express.json());
app.use(Cors());

//DB config

mongoose.connect(configURL);
// , {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
//});

//API endpoints

app.get("/", (req, res) => {
  res.status(200).send("Hello this is the Tinder-clone!");
});

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;
  cards.create(dbCard, (err, data) => {
    if (err) res.status(500).send(err);
    else {
      res.status(201).send(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  cards.find((err, data) => {
    if (err) res.status(500).send(err);
    else {
      res.status(200).send(data);
    }
  });
});
//Listeners

app.listen(port, () =>
  console.log(`listening on PORT: ${port}` + " on the localhost")
);
