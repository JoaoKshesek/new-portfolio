const btn = document.querySelector("#form-submit");

btn.addEventListener("click", function(e) {

    e.preventDefault();

    const name = document.querySelector("#form-name");
    const valueName = name.value;
    const email = document.querySelector("#form-email");
    const valueEmail = email.value;
    const subject = document.querySelector("#form-subject");
    const valueSubject = subject.value;
    const message = document.querySelector("#form-message");
    const valueMessage = message.value;

    console.log(valueName);
    console.log(valueEmail);
    console.log(valueSubject);
    console.log(valueMessage);

});