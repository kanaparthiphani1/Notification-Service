const nodemailer = require("nodemailer");

const { GMAIL_EMAIL, GMAIL_PASS } = require("./server-config");
console.log("PASSA :  ", GMAIL_PASS);
const mailsender = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: GMAIL_EMAIL,
    pass: "rmsvrbenufwvpafd",
  },
});

module.exports = mailsender;
