import React, { useState } from "react";
import { GATracker } from "../structure/GoogleAnalytics";
import { emailValidate, validate } from "../structure/validation";

export const ApplicationForm = ({ jobTitle }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [files, setFiles] = useState();
  const [loading, setLoadingState] = useState();
  // const [failedSend, setFailedSend] = useState(true);

  const gaEvent = GATracker(`Job-post-${jobTitle}`);

  const isValid = () => {
    let valid = true;
    let emailValid = emailValidate(email);
    let lastNameValid = validate(lastName, "last-name");
    let firstNameValid = validate(firstName, "first-name");
    let fileValid = validate(files, "resume");
    valid = firstNameValid && lastNameValid && firstNameValid && fileValid && emailValid;

    if (valid === true) {
      document.getElementById("unsubmitted").style.display = "none";
      document.getElementById("submitted").style.display = "block";
      gaEvent("Applied-for-job", "job application");
    }
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid()) {
      console.log(isValid());
      setLoadingState(true);
    }
  };

  const addFile = (resume) => {
    console.log(resume);
    setFiles(null);
    setFiles(resume);
    removeStyle();
  };

  const preventBubbling = (e) => {
    e.stopPropagation();
    e.preventDefault();
    document.getElementById("resume").style.background = "#f8fbff";
  };

  const removeStyle = () => {
    document.getElementById("resume").style.background = "#ffffff";
  };

  return (
    <section>
      <form
        id="unsubmitted"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="application-form"
      >
        <h3 aria-label="Application form"> Application</h3>

        <label aria-label="First name">
          <span aria-hidden="true"> First Name * </span>
          <input className="input-field" name="firstName" id="first-name" type="text" checked={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <h5 id="first-name-error" className="error-message" aria-label="First name is invalid">
          {" "}
          * Please enter your first name{" "}
        </h5>

        <label aria-label="Last name">
          <span aria-hidden="true"> Last Name * </span>
          <input className="input-field" name="lastName" id="last-name" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
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
          <div
            className="custom-file-upload"
            id="resume"
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
                <div
                  className="cursorpointer"
                  onClick={(e) => {
                    setFiles(null);
                    e.preventDefault();
                  }}
                >
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
          </div>
          <h5 id="resume-error" className="error-message" aria-label="please attach a resume">
            {" "}
            * Please attach your resume{" "}
          </h5>
        </label>

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
        {/* {failedSend ? null : (
          <h5 id="send-error" className="message" aria-label="Email is invalid">
            * failed to send, please try again
          </h5>
        )} */}
      </form>
      <div className="application-form " id="submitted">
        {" "}
        <h3>Thanks for applying to our {jobTitle} role, if its a match we'll be in touch! </h3>{" "}
      </div>
    </section>
  );
};
