require("dotenv").config();
require("./server");
const express = require("express");
const cookieParser = require("cookie-parser");

const authRouter = require("./routes/auth.route");
const adminRouter = require("./routes/admin.route");
const resourceRouter = require("./routes/resource.route");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/resources", resourceRouter);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}...`);
})