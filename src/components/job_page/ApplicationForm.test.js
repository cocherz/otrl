import { resolveConfig } from "prettier";
import React, { useState } from "react";
import { GATracker } from "../structure/GoogleAnalytics";
import { emailValidate, firstNameValidate, fileValidate, lastNameValidate } from "../structure/validation";

const word = "data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,";
const pdf = "data:application/pdf;base64,";
const msword = "data:application/msword;base64,";

export const ApplicationForm = ({ jobTitle }) => {
  const [firstName, setFirstName] = useState(undefined);
  const [lastName, setLastName] = useState(undefined);
  const [email, setEmail] = useState(undefined);
  const [files, setFiles] = useState();
  const [base64, setBase64] = useState(undefined);
  const [loading, setLoadingState] = useState(null);
  const [failedSend, setFailedSend] = useState(true);

  const gaEvent = GATracker(`Job-post-${jobTitle}`);

  // const isValid = () => {
  //   let valid = true;
  //   let emailValid = emailValidate(email);
  //   let lastNameValid = lastNameValidate(lastName);
  //   let firstNameValid = firstNameValidate(firstName);
  //   let fileValid = fileValidate(files);
  //   valid = firstNameValid && lastNameValid && firstNameValid && fileValid;

  //   if (valid === true) {
  //     document.getElementById("unsubmitted").style.display = "none";
  //     document.getElementById("submitted").style.display = "block";
  //     gaEvent("Applied-for-job", "job application");
  //   }
  //   return valid;
  // };
npm

  return (
    <section> 
    <form
      id="unsubmitted"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="application-form"
    >
      <div className="bottom-padding">
        <h3 aria-label="Application form"> Application</h3>
      </div>
      <label aria-label="First name">
        <span aria-hidden="true"> First Name * </span>
        <input className="input-field" name="firstName" id="firstName" type="text" checked={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <h5 id="first-name-error" className="error-message" aria-label="First name is invalid">
        {" "}
        * Please enter your first name{" "}
      </h5>

      <label aria-label="Last name">
        <span aria-hidden="true"> Last Name * </span>
        <input className="input-field" name="lastName" id="lastName" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <h5 id="last-name-error" className="error-message" aria-label="Last name is invalid">
        {" "}
        * Please enter your last name{" "}
      </h5>
      <label aria-label="Email Address">
        <span aria-hidden="true"> Email Address * </span>
        <input className="input-field" name="email" id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <h5 id="email-error" className="error-message" aria-label="Email is invalid">
        {" "}
        * Please check your email{" "}
      </h5>
      <label>
        <span aria-hidden="true"> Resume * </span>
        <section
          className="custom-file-upload"
          id="drop-zone"
          onDragEnter={preventBubbling}
          onDragOver={preventBubbling}
          onPointerOver={preventBubbling}
          onPointerLeave={removeStyle}
          onDragLeave={removeStyle}
          onDrop={(e) => {
            preventBubbling(e);
            addFile(e.dataTransfer.files);
          }}
        >
          <label htmlFor="file-upload" aria-hidden="false">
            {files && (
              <div className="cursorpointer" onClick={(e) => deleteFile(e)}>
                <h3 className="banner-content"> {files[0].name.substring(0, 26) + "..."} </h3>
                <span> click to remove </span>
              </div>
            )}
            {!files && (
              <div className="cursorpointer">
                <strong>
                  <span>Drop your resume here </span> <span className="purple-text cursorpointer"> or browse </span>
                </strong>
                <br />
                <span>Max. file size: 4MB (pdf, doc, docx) </span>
              </div>
            )}
          </label>
          {!files && (
            <input
              id="file-upload"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={async (e) => {
                addFile(e.target.files);
              }}
            />
          )}
        </section>
      </label>
      <h5 id="resume-error" className="error-message" aria-label="please attach a resume">
        {" "}
        * Please attach your resume{" "}
      </h5>
      <div className="submitCTA">
        {loading ? (
          <div className="primary-button">
            {" "}
            <div className="loader"> </div>{" "}
          </div>
        ) : (
          <button type="submit" value="Submit" className="primary-button wide-btn">
            Apply
          </button>
        )}
      </div>
      {failedSend ? null : (
        <h5 id="send-error" className="message" aria-label="Email is invalid">
          * failed to send, please try again
        </h5>
      )}
    </form>
        <div className="application-form " id="submitted"> <h3>Thanks for apply for our {jobTitle} role, if its a match we will be in touch! </h3> </div>
    </section>
  );
};







    // fetch ("https://e9tw4s7qk3.execute-api.us-east-1.amazonaws.com/sendEmail",{
    //   mode:"no-cors",
    //   method:"POST",
    //   headers: {
    //     accept: "application/json",
    //     "Content-Type":"application/json",
    //     // "statusCode": "number",
    //   },
    //   body: JSON.stringify({
    //     senderName: "maxwell.cochrane.dev@gmail.com",
    //     senderEmail: "maxwell.cochrane.dev@gmail.com",
    //     message:`New job application from ${firstName} ${lastName} at ${email}`,
    //     subject: `${jobTitle} application from ${firstName} ${lastName}`,
    //     base64Data: base64,
    //     fileName: `${firstName}-${lastName}-${jobTitle}-CV.${files[0].name.split('.').pop()}`,
    //     fileExt: `${files[0].name.split('.').pop()}`,
    //   })

    //   }).then(res => {
    //     setLoadingState(false)
    //     setFailedSend(res.ok)
    //     console.log(res)
    //   })