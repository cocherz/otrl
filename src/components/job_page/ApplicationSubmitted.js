import React from "react"

export const ApplicationSubmitted = ({ jobTitle }) => {
    return(
        <div className="application-form">
        <h3>Thanks for applying to our {jobTitle} role, if its a match we'll be in touch! </h3>
      </div>
    )
}