const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());


let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});


const port = process.env.PORT || 3001;
app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});

transporter.verify((err, success) => {
  err ? console.log(err) : console.log(`=== Server is ready to take messages: ${success} ===`);
});

app.post('/send', async (req, res) => {

  const docs = Object.keys(req.files).map(key => {
    return {
      filename: req.files[key].name,
      content: req.files[key].data
    }
  });

  let mailOptions = {
    from: 'whoever@whereever.net',
    to: 'to-mail@mail.go',
    subject: `Message from: Whoever`,
    html: '<html></html>',
    attachments: docs // <--- All you need here!!
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: 'fail',
      });
    } else {
      console.log('== Message Sent ==');
      res.json({
        status: 'success',
      });
    }
  });
});


