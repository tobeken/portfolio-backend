const express = require("express");
const app = express();
require('dotenv').config();
const dbConfig = require("./config/dbConfig");
const jobsRoute = require("./routes/jobsRoute");
const userRoute = require("./routes/usersRoute")

app.use(express.json())
app.use("/api/jobs", jobsRoute)
app.use("/api/user",userRoute)

const port = process.env.PORT || 5000;


app.listen(port, () => console.log(`listening on port ${port}`));


