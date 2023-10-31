require('dotenv').config();
const express = require("express");
const configViewEngine = require("./config/viewEngine");
const path = require('path');
const { config } = require('dotenv');
const app = express();
const port = 3000;
const webRoutes = require("./routes/web");

configViewEngine(app);
app.use("/test", webRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
