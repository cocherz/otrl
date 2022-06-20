import React, { useState } from "react";
import { GATracker } from "../structure/GoogleAnalytics";
import { emailValidate, firstNameValidate, fileValidate, lastNameValidate } from "../structure/validation";

const word = "data:application/vnd.openxmlformats-officedocument.wordprocessingml.document;base64,";
const pdf = "data:application/pdf;base64,";
const msword = "data:application/msword;base64,";

export const ApplicationForm = ({ jobTitle }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [files, setFiles] = useState();
  const [base64, setBase64] = useState('');
  const [loading, setLoadingState] = useState();
  const [failedSend, setFailedSend] = useState(true);
  const [fileName, setFileName] = useState();

  const gaEvent = GATracker(`Job-post-${jobTitle}`);

  const isValid = () => {
    let valid = true;
    let emailValid = emailValidate(email);
    let lastNameValid = lastNameValidate(lastName);
    let firstNameValid = firstNameValidate(firstName);
    let fileValid = fileValidate(files);
    valid = firstNameValid && lastNameValid && firstNameValid && fileValid;

    if (valid === true) {
      document.getElementById("unsubmitted").style.display = "none";
      document.getElementById("submitted").style.display = "block";
      gaEvent("Applied-for-job", "job application");
    }
    return valid;
  };

  const convertBase64 = () => {
    const pdf = "data:application/pdf;base64,";
    const msword = "data:application/msword;base64,";
    
    
    const base64RemoveDataURI = base64.replace(msword, "").replace(pdf, "");

    return setBase64(base64RemoveDataURI);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(isValid()){
      setLoadingState(true);
      getBase64(files[0])
      submitEmail();
    // }

  };


  const submitEmail = async (e) => {
    const response = await fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ firstName, lastName, email, jobTitle, base64, fileName }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        if (resData.status === "success") {
          setLoadingState(false);
        } else if (resData.status === "fail") {
          setFailedSend(false);
        }
      });
  };


  const onLoad = (fileString) => {
    // console.log("cut      ----", fileString.replace(word, "").replace(pdf, "").replace(msword, ""));
    setBase64(fileString);
    // convertBase64()
    console.log(setBase64, base64)
  };

  const getBase64 = (file) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.readAsDataURL(file))
    reader.onload = () => {
      console.log(file);
      onLoad(reader.result);
      // console.log(base64);
    };
  };

  const addFile = (resume) => {
    console.log(resume);
    setFiles(null);
    setFiles(resume);
    removeStyle();
  };

  const deleteFile = (e) => {
    setFiles(null);
    e.preventDefault();
  };

  const preventBubbling = (e) => {
    e.stopPropagation();
    e.preventDefault();
    document.getElementById("drop-zone").style.background = "#f8fbff";
  };

  const removeStyle = () => {
    document.getElementById("drop-zone").style.background = "#ffffff";
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
        <div
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
        </div>
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
            Submit
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