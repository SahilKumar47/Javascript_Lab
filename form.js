const validate = () => {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let zip = document.getElementById("zip");
  let country = document.getElementById("country");

  if (name.value == "") {
    alert("Please provide your name!");
    name.focus();
    return false;
  }
  if (email.value == "" || !validateEmail(email.value)) {
    alert("Please provide your Email!");
    email.focus();
    return false;
  }
  if (zip.value == "" || isNaN(zip.value) || zip.value.length != 5) {
    alert("Please provide a zip in the format #####.");
    zip.focus();
    return false;
  }
  if (country.value == "-1") {
    alert("Please provide your country!");
    return false;
  }
  return true;
};

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
