function checkEmails(email, email_confirm, email_notify) {
    if (email.value === email_confirm.value)
    {
        email_notify.textContent = "valid email";
        email_notify.style.color = "green";
    }
    else
    {
        email_notify.textContent = "email fields do not match.";
        email_notify.style.color = "red";
    }};

document.addEventListener("DOMContentLoaded", function () {
  // Get references to the email input fields and the text element
  const email = document.getElementById("email");
  const email_confirm = document.getElementById("email_confirm");
  const email_notify = document.getElementById("email_notify");

  email.addEventListener("input", function() {
    checkEmails(email, email_confirm, email_notify);
  });
  email_confirm.addEventListener("input", function() {
    checkEmails(email, email_confirm, email_notify);
  });
});
