const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const items = require("./routes/api/items");

// Connect to Mongo
mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

const app = express();

// Use JSON body parser
app.use(express.json());

// Use Routes
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
