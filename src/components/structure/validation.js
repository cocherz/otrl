export const emailValidate = (email) => {
  // eslint-disable-next-line
  if (!email || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    document.getElementById("email-error").style.display = "block";
    document.getElementById("email").style.border = "1px solid red";
    return false;
  } else {
    document.getElementById("email-error").style.display = "none";
    document.getElementById("email").style.border = "1px solid #d1d5db";
    return true
  }
};

export const validate = (x, ...arg) => {
  // eslint-disable-next-line
  if (!x) {
    document.getElementById(`${arg[0]}-error`).style.display = "block";
    document.getElementById(`${arg[0]}`).style.border = "1px solid red";
    return false;
  } else {
    document.getElementById(`${arg[0]}-error`).style.display = "none";
    document.getElementById(`${arg[0]}`).style.border = "1px solid #d1d5db";
    return true
  }
};

export const fileTypeValid = (x, ...arg) => {
    // eslint-disable-next-line
  if (!x ) {
    document.getElementById(`${arg[0]}-error`).style.display = "block";
    document.getElementById(`${arg[0]}`).style.border = "1px solid red";
    return false;
  } else {
    document.getElementById(`${arg[0]}-error`).style.display = "none";
    document.getElementById(`${arg[0]}`).style.border = "1px solid #d1d5db";
    return true
  }
};

export const fileSizeValidate = (size, ...arg) => {
  // eslint-disable-next-line
  if (size >= 4100000){
    document.getElementById(`${arg[0]}-size-error`).style.display = "block";
    document.getElementById(`${arg[0]}`).style.border = "1px solid red";
    return false;
  } else {
    document.getElementById(`${arg[0]}-size-error`).style.display = "none";
    document.getElementById(`${arg[0]}`).style.border = "1px solid #d1d5db";
    return true
  }
}