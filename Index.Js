const express = require("express");
const router = require("./router");
const mongoose = require ("mongoose");
const cors = require("cors");

const dotenv = require ("dotenv").config({path: 'this.env'});
//dontenv.config()({path: 'this.env'});
//dotenv.config();

const PORT = 8000;


const app = express();

app.listen(PORT, async () => {
    console.log(`Server is up on port ${PORT}`);
 
});


mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);





  