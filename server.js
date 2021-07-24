const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const items = require("./routes/api/items");
const path = require("path");

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

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
