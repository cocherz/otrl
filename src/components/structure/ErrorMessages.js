import React from "react"

export const ErrorMessage = ({ err, elementID})=> {
    return(
    <span id={elementID} className="error-message" > 
            {err}
    </span>
    )
}