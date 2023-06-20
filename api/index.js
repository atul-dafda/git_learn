const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connectDB = () => {
	mongoose.connect();
};

app.listen(5000);
