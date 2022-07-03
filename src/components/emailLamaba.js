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
 
  let emailProps = await transporter.sendMail({
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
  });
 

  return emailProps, "ok";
};
 
----


const aws = require("aws-sdk");
const nodemailer = require("nodemailer");

const headers = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': 'Content-Type',
	'Access-Control-Allow-Methods': 'POST, OPTIONS'
};


exports.handler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;    
  const { senderEmail, senderName, message, base64Data, fileName, subject } = JSON.parse(
    event.body
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
        content: base64Data,
        encoding: "base64",
      },
    ],
  };


  const response = await new Promise((rsv, rjt) => {
    transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return rjt(error)
            } 
            rsv(info); 
        });
    });
    
    return {
    'statusCode': 200,
    'headers': {
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    },
    'body': mailOptions
}

};
 