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
  //   await EmailService.sendEmail(
  //     "kanaparthiphani58@gmail.com",
  //     "kanaparthiphani143@gmail.com",
  //     "SUbject is this",
  //     "HI i am mail"
  //   );
  console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
});
