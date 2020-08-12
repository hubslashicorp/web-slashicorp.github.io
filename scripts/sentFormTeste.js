const token = "b9078ea5-535a-4c7d-94b8-51d0e78339d9";
const $formContact = document.querySelector("#contact");

const sendForm = event => {
    event.preventDefault();
    const message = {
        name: document.querySelector("#form-name").value,
        email: document.querySelector("#form-email").value,
        text: document.querySelector("#form-message").value
    };
    smtpJS(message);
};
const smtpJS = message => {
    try {
        Email.send(
            "dihogo.teixeira@gmail.com",
            "devops@slashicorp.com.br",
            `${message.name} - ${message.email}`,
            message.text,
            { token }
        );
    } catch (e) {
        alert("Erro");
    }
};

$formContact.addEventListener("button", sendForm);