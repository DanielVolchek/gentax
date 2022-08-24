const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "./build")));
const PORT = 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));