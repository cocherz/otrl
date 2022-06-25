const aws = require("aws-sdk");
const nodemailer = require("nodemailer");
 
exports.handler = async (event) => {
  const { senderEmail, senderName, message, base64Data, fileName, subject } = JSON.parse(
    event.body
  );
 
  const base64RemoveDataURI = base64Data.replace(
    "data:application/pdf;base64,",
    ""
  );
 
  let transporter = nodemailer.createTransport({
    SES: new aws.SES({ region: "eu-west-1", apiVersion: "2010-12-01" }),
  });
 
    
const mailOptions = {
    from: senderName,
    to: senderEmail,
    subject: subject,
    text: message,
    html: "<div>" + message + "</div>",
    attachments: [
      {
        filename: fileName,
        content: base64RemoveDataURI,
        encoding: "base64",
      },
    ],
  };


  const response = await new Promise((rsv, rjt) => {
    transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return rjt(error)
            } 
            rsv('Email sent'); 
        });
    });
    
    return {
            statusCode: 200,
            body: JSON.stringify({
               input: response
            })
           }
 
};
 
 