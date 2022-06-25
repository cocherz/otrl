
  import React, { useState } from "react";

  export const TestPage = () => {
    const [base64, setBase64] = useState("")
  
    const onChange = (e) => {
      const files = e.target.file;
      const file = files[0];
      getBase64(file)
    }
  
    const onLoad = (fileString) => {
      setBase64(fileString)
    }
  
    const getBase64 = (file) => {
      let reader = new FileReader();
      reader.readAsDataURL(file)
      reader.onload = () => {
        onLoad(reader.result)
      }
    }
    
    const handleSubmit = (e) => {
      fetch("https://dspzkaci62.execute-api.eu-west-2.amazonaws.com/send", {
        mode: "no-cors",
        method: "Post",
        headers: {
          Accept: "application/json",
          "Content-Type":  "application/json",
        },
        body: JSON.stringify({
          senderName: "maxwell.cochrane+dev@gmail.com",
          senderEmail: "maxwell.cochrane+dev@gmail.com",
          message: "this is the message",
          base64Data: base64,
          date: new Date(),
          fileName: "TEST_FILE_NAME",
        }),
      }
    );
  }
}