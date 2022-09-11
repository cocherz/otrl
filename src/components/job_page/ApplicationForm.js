import React, { useState } from "react";
import { GATracker } from "../structure/GoogleAnalytics";
import { emailValidate, validate, fileTypeValid, fileSizeValidate } from "../structure/validation";
import DICT from "../../dictionary"
import { ErrorMessage } from "../structure/ErrorMessages";
import { ApplicationSubmitted } from "./ApplicationSubmitted";

export const ApplicationForm = ({ jobTitle }) => {
  const gaEvent = GATracker(`Job-post-${jobTitle}`);
  
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  
  const [files, setFiles] = useState("");
  const [base64, setBase64] = useState("");
  const [loading, setLoadingState] = useState();
  const [failedSend, setFailedSend] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isValid = () => {
    let valid = true;
    let firstNameValid = validate(form.firstName, "first-name");

    // if !forms.firstName throwErr(firstName)



    let lastNameValid = validate(form.lastName, "last-name");
    let emailValid = emailValidate(form.email);
    let fileValid = fileTypeValid(files, "resume");
    let fileSizeValid = fileSizeValidate(files.size, "resume")
    valid = firstNameValid && lastNameValid && firstNameValid && fileValid && emailValid && fileSizeValid;

    if (valid === true) {
      gaEvent("Applied-for-job", "job application");
    }
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      const url = "https://9ms7dfz6i0.execute-api.eu-west-1.amazonaws.com/stage/SendEmail";
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: JSON.stringify({
          subject: `${jobTitle} application from ${form.firstName} ${form.lastName}`,
          message: `New application from ${form.firstName} ${form.lastName} ${form.email}`,
          base64Data: base64,
          fileName: files.name,
        }),
      };

      let resp = await fetch(url, config)
        .then(
          setLoadingState(true))
      if ((resp.ok)) {
        setLoadingState(false);
        setSubmitted(true)
      } else {
        setLoadingState(false);
        setFailedSend(true);
      }
    }
  };
  const dropFile = (e) => {
    const files = e[0];
    setFiles(null);
    setFiles(files);
    removeStyle();
    getBase64(files);
  };
  const addFile = (e) => {
    const files = e.target.files[0];
    setFiles(null);
    setFiles(files);
    removeStyle();
    getBase64(files);
  };
  const onLoad = (fileString) => {
    setBase64(fileString.split(",")[1]);
  };
  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      onLoad(reader.result);
    };
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
    <section id="application-form">
      {!submitted ? 

      <form
        id="unsubmitted"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="application-form margin-container-tb"
        method="POST"
      >
        <h3 aria-label="Application form"> Application</h3>

        <label aria-label="First name" aria-required="true">
          <span aria-hidden="true"> First Name * </span>
          <input className="input-field" name="firstName" id="first-name" type="text" checked={form.firstName} onChange={(e) => setForm((form) => ({ ...form, firstName: e.target.value }))} />
        </label>
        <ErrorMessage err={DICT.firstNameErr} elementID="first-name-error" />
        <label aria-label="Last name" aria-required="true">
          <span aria-hidden="true"> Last Name * </span>
          <input className="input-field" name="lastName" id="last-name" type="text" value={form.lastName} onChange={(e) => setForm((form) => ({ ...form, lastName: e.target.value }))} />
        </label>
        <ErrorMessage err={DICT.lastNameErr} elementID="last-name-error" />
        
        
        <label aria-label="Email Address" aria-required="true">
          <span aria-hidden="true"> Email Address * </span>
          <input className="input-field" name="email" id="email" type="text" value={form.email} onChange={(e) => setForm((form) => ({ ...form, email: e.target.value }))} />
        </label>
        <ErrorMessage err={DICT.emailErr} elementID="email-error" />
        
        
        
        <label>
          <span aria-hidden="true"> Resume * </span>
          <div
            className="custom-file-upload"
            id="resume"
            accept=".pdf, .doc, .docx"
            onDragEnter={preventBubbling}
            onDragOver={preventBubbling}
            onPointerOver={preventBubbling}
            onPointerLeave={removeStyle}
            onDragLeave={removeStyle}
            onDrop={(e) => {
              preventBubbling(e);
              dropFile(e.dataTransfer.files);
            }}
          >
            <label htmlFor="file-upload" aria-hidden="false" aria-required="true">
              {files && (
                <div
                  className="cursorpointer"
                  onClick={(e) => {
                    setFiles(null);
                    e.preventDefault();
                  }}
                >
                  <h3 className="banner-content"> {files.name.substring(0, 26) + "..."} </h3>
                  <span> click to remove </span>
                </div>
              )}
              {!files && (
                <div className="cursorpointer">
                  <strong>
                    <span>Drop your resume here </span> <span className="purple-text"> or browse </span>
                  </strong>
                  <br />
                  <span>Max. file size: 4MB (pdf, doc, docx) </span>
                </div>
              )}
            </label>
            {!files && <input id="file-upload" type="file" accept=".pdf, .doc, .docx" onChange={addFile} aria-required="true"/>}
          </div>
        </label>
          <ErrorMessage err={DICT.fileErr} elementID="resume-error" /> 
          <ErrorMessage err={DICT.fileSizeErr} elementID="resume-size-error" /> 

        <div className="submitCTA">
          <button type="submit" value="Submit" className="primary-button wide-btn">
            {loading ? <div className="loader" /> : "Apply"}
          </button>
        </div>
        {!failedSend ? (
          true
        ) : (
          <span id="send-error" className="message" aria-label="There was an error in submitting your application, please try again">
            {DICT.submitErr}
          </span>
        )}
      </form>
      :
      <ApplicationSubmitted jobTitle={jobTitle}/> 
        }
    </section>
  );
};
