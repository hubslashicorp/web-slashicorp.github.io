(function () {
    "use strict";
    var appViewState = Windows.UI.ViewManagement.ApplicationViewState;
    var ui = WinJS.UI;
    var htmlinited = false;
    var editor;
    var asynCancel = null;
    var m_atts = new Array();
    ui.Pages.define("", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            init_gui();
        },

        unload: function () {

        }

    });

    function init_gui() {

        // add OnClick event handler
        var btn = document.getElementById("btnSend");
        btn.addEventListener("click", send_email, false);
    }

    function send_email() {
        var result = "";

        var oMail = new EASendMail.SmtpMail("TryIt");

        // Set office365 sender email address, please change it to yours
        oMail.from = new EASendMail.MailAddress("devops@slashicorp.com.br");

        // Add recipient email address, please change it to yours
        oMail.to.add(new EASendMail.MailAddress("devops@slashicorp.com.br"));

        // Set email subject
        oMail.subject = "test email from JavaScript HTML5 project";

        // Set email body
        oMail.textBody = "test email from JavaScript HTML5 project";

        // Office365 SMTP server address
        var oServer = new EASendMail.SmtpServer("smtp.office365.com");

        // User and password for office365 authentication
        oServer.user = "devops@slashicorp.com.br";
        oServer.password = "D1prIqL8EvUFeyO0a";

        // Enable TLS connection on 587 port
        oServer.port = 587;
        oServer.connectType = EASendMail.SmtpConnectType.connectSSLAuto;

        var oSmtp = new EASendMail.SmtpClient();

        var btn = document.getElementById("btnSend");
        btn.disabled = true;
        oSmtp.sendMailAsync(oServer, oMail).then(function (e) {
                result = "Email was sent successfully!";

                // Display Result by Diaglog box
                (new Windows.UI.Popups.MessageDialog(result, "Success")).showAsync();
                btn.disabled = false;
            },

            function (e) {
                // because javascript exception only gives the stack trace messages, but it is not
                // real description of exception, so we give a property lastErrorMessage for javascript.
                if (oSmtp.lastErrorMessage != "") {
                    result = oSmtp.lastErrorMessage;
                }
                else {
                    result = e.message;
                }
                oSmtp.close();

                // Display Result by Diaglog box
                (new Windows.UI.Popups.MessageDialog(result, "Error Information")).showAsync();
                btn.disabled = false;
            });
    }
})();

// var name = document.getElementById('nome'),
// email = document.getElementById('email'),
// message = document.getElementById('mensagem');

// function sendEmail() {
//     alert("oi")
//     Email.send({
//         SecureToken : "61d2d57a-7b6f-4691-9f95-a16b60eff03d",
//         To : 'devops@slashicorp.com.br',
//         From : "jonathancrispiniano@gmail.com",
//         Subject : "Teste",
//         Body : "Texto de teste"
//     }).then(
//       message => alert("oi")
//     );
// }