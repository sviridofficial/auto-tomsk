const { MongoClient, ServerApiVersion } = require("mongodb");

const nodemailer = require("nodemailer");
const express = require("express");
const config = require("config");

const app = express();

const PORT = config.get("port") || 5000;

app.use(express.json({ extended: true }));

const cors = require("cors");

app.use(cors());

async function start() {
    try {
        app.listen(PORT, () => console.log("Server is running" + PORT));
    } catch (e) {
        console.log(e.message);
        process.exit(1);
    }
}

start();

app.use("/api/mail", require("./routes/mail.routes"));
