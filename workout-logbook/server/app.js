require("dotenv").config();
let express = require("express");
let app = express();
let sequelize = require("./db");
let cors = require("cors");

let log = require("./controllers/logcontroller");
let user = require("./controllers/usercontroller");
app.use(cors());
sequelize.sync();
// sequelize.sync({ force: true });

app.use(require("./middleware/headers"));

app.use(express.json());

app.use("/user", user);

app.use(require("./middleware/validate-session"));
app.use("/log", log);

app.listen(3000, function () {
	console.log("App is listening on port 3000");
});
