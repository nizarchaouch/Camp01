const express = require("express");

var userRoutes = require("./User/userController");
var adminRoutes = require("./Admin/adminController");
var destRoutes = require("./Destination/destController");


const app = express();
const mongoose = require("mongoose");

const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors({ credentials: true, origin: "http://localhost:3001" }));

app.use(express.json());

const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      "mongodb://127.0.0.1:27017"
    );
    console.log("Database connected succesfully");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
});

database();
app.use(cors({
  origin: "http://localhost:3001",
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
app.use("/User", userRoutes);
app.use("/Admin", adminRoutes);
app.use("/destination", destRoutes)

app.listen(3000);