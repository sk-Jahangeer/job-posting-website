require("dotenv").config();
const connection = require("./db");
const express = require("express");
const cors = require("cors");
const path = require("path");
const jobs = require("./routes/jobs");

const app = express();
connection();

app.use(express.json());
app.use(cors());

app.use("/api/jobs", jobs);

app.use(express.static(path.join(__dirname, "build")));
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));
