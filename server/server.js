const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
const router = require("./news_api/service");
app.use(cors());
app.use("", router);

const port = process.env.PORT || 8089;
app.listen(port, () => console.log(`Listening on port: ${port}`));
