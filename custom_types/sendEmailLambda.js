const aws = require("aws-sdk");
const nodemailer = require("nodemailer");

const headers = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': '*',
	'Access-Control-Allow-Methods': 'POST, OPTIONS'
};


exports.handler = function (event, context, callback) {
  context.callbackWaitsForEmptyEventLoop = false;    
  const { senderEmail, senderName, message, base64Data, fileName, subject } = JSON.parse(
    event.body
  );

  let transporter = nodemailer.createTransport({
    SES: new aws.SES({ region: "eu-west-1", apiVersion: "2010-12-01" }),
  });

const file = !fileName ? ( null ) : [
      {
        filename: fileName,
        content: base64Data,
        encoding: "base64",
      },
    ]  

    
const mailOptions = {
    from: senderName,
    to: senderEmail,
    subject: subject,
    text: message,
    html: "<div>" + message + "</div>",
    attachments: file
  };


  
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
			const response = {
				statusCode: 500,
				headers,
				body: JSON.stringify({
					error: error.message,
				}),
			};
			callback(null, response);
			return;
		}
		const response = {
			statusCode: 200,
			headers,
			body: JSON.stringify({
				message: `Email processed succesfully!`
			}),
		};
		callback(null, response);
	});

};
 