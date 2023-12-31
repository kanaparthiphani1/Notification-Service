const dotenv = require("dotenv");

dotenv.config();

console.log("In Server COnfig", process.env.GMAIL_PASS);

module.exports = {
  PORT: process.env.PORT,
  GMAIL_EMAIL: process.env.GMAIL_EMAIL,
  GMAIL_PASS: process.env.GMAIL_PASS,
};
