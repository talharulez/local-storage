let signupEmail = document.getElementById("emailSignup");
let signupPassword = document.getElementById("passwordSignup");
let signinEmail = document.getElementById("emailSignin");
let signinPassword = document.getElementById("passwordSignin");

function signup() {
  let signupObj = JSON.parse(localStorage.getItem("signup")) || [];
  localStorage.setItem("array", signupObj);

  signupObj.push({
    signupEmail: signupEmail.value,
    signupPassword: signupPassword.value,
  });

  let signupObjStringify = JSON.stringify(signupObj);
  localStorage.setItem("signup", signupObjStringify);
  console.log(signupObj);
}


function signin() {
  let signupObject = JSON.parse(localStorage.getItem("signup"));
  console.log(signupObject);
  
  let flag = true;
  for (let i = 0; i < signupObject.length; i++) {
    if (
      signinEmail.value == signupObject[i].signupEmail &&
      signinPassword.value == signupObject[i].signupPassword
    ) {
      flag = false;
      alert("Email and Password Correct");
    }
  }
  if (flag == true) {
    alert("Email and Password incorrect");
  }
}