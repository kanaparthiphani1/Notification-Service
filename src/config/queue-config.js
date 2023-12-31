const amqplib = require("amqplib");
const { EmailService } = require("../services");

let channel, connection;

async function connectQueue() {
  try {
    connection = await amqplib.connect("amqp://localhost");
    channel = await connection.createChannel();

    await channel.assertQueue("noti-queue");
    await channel.consume("noti-queue", async (data) => {
      console.log(Buffer.from(data.content).toString());
      const obect = JSON.parse(Buffer.from(data.content).toString());
      await EmailService.sendEmail(
        "kanaparthiphani0@gmail.com",
        obect.recepientEmail,
        obect.subject,
        obect.text
      );
      channel.ack(data);
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  connectQueue,
};
