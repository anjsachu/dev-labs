let verify = () => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let email = document.getElementById("email").value;
  let errPrompt = document.getElementById("email_error_prompt");
  console.log(emailRegex.test(email));

  emailRegex.test(email)
    ? (errPrompt.className = "email_error_prompt_none")
    : (errPrompt.className = "email_error_prompt");
};
