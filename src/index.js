const express = require("express");

const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");
const mailsender = require("./config/email-config");
const { connectQueue } = require("./config/queue-config");
const { EmailService } = require("./services");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  connectQueue();
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
