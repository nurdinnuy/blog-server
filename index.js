const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0.wynze.mongodb.net/myapp?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDb connected");
});

//middleware
app.use("/uploads", express.static("uploads"));
app.use(express.json());
const userRoute = require("./routes/user");
app.use("/user", userRoute);
const profileRoute = require("./routes/profile");
app.use("/profile", profileRoute);
const blogRoute = require("./routes/blogpost");
app.use("/blogPost", blogRoute);

data = {
    msg: "Welcome on message nurdin 5 4 3 2 1 , close the PC",
    info: "This is a root endpoint nurdinnuy ",
    Working: "Documentations of other endpoints will be release soon by nurdinnuy",
    request: "I WILL FINISH THIS PROJECT",
};

app.route("/").get((req, res) => res.json(data));

app.listen(port, "0.0.0.0", () => console.log(` welcome your listening at port ${ port }`));