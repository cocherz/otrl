export const emailValidate = (email) => {
  //eslint-disable-next-line
  if (email == null || email == "" || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    document.getElementById("email-error").style.display = "block";
    document.getElementById("email").style.border = "1px solid red";
    return false;
  } else {
    document.getElementById("email-error").style.display = "none";
    document.getElementById("email").style.border = "1px solid #d1d5db";
    return true
  }
};

export const firstNameValidate = (firstName) => {
  //eslint-disable-next-line
  if (firstName == null || firstName == "") {
    document.getElementById("first-name-error").style.display = "block";
    document.getElementById("firstName").style.border = "1px solid red";
    return false;
  } else {
    document.getElementById("first-name-error").style.display = "none";
    document.getElementById("firstName").style.border = "1px solid #d1d5db";
    return true
  }
};

export const lastNameValidate = (lastName) => {
  //eslint-disable-next-line
  if (lastName == null || lastName == "") {
    document.getElementById("last-name-error").style.display = "block";
    document.getElementById("lastName").style.border = "1px solid red";
    return false;
  } else {
    document.getElementById("last-name-error").style.display = "none";
    document.getElementById("lastName").style.border = "1px solid #d1d5db";
    return true
  }
};

export const fileValidate = (files) => {
  //eslint-disable-next-line
  if (files == null) {
    document.getElementById("drop-zone").style.border = "1px solid red";
    document.getElementById("resume-error").style.display = "block";
    return false;
  } else {
    document.getElementById("drop-zone").style.border = "1px dashed #d1d5db";
    document.getElementById("resume-error").style.display = "none";
    return true
}
};


