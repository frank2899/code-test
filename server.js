const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").createServer(app);
const port = 3005;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use("/api/list", require("./routes/list.routes"));

server.listen(port, () => console.log(`server runs at ${port}`));
