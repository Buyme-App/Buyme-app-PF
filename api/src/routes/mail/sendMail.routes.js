const express = require("express");
const router = express();
const showErrors = require("../../messageConsole");
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  const { subject, text, name, email } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    // port: 587,
    auth: {
      user: "developerbuymeapp@gmail.com",
      pass: "fYdxeE3nqK577CT",
    },
  });

  let mailOptions = {
    to: `developerbuymeapp@gmail.com`,
    subject: `${subject}`,
    text:
      `Name: ${name}` + `\n` + `Email: ${email}` + `\n` + `Message: ${text}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      showErrors("post/sendMail", error.message);
      res.status(500).send("controller/sendMail", error.message);
    } else {
      console.log("mandando mail");
      res.status(200).json(mailOptions);
    }
  });
});

module.exports = router;
