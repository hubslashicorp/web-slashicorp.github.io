// // var name = document.getElementById('nome'),
// // email = document.getElementById('email'),
// // message = document.getElementById('mensagem');


// /* SmtpJS.com - v3.0.0 */
// var Email = {
//     send: function(a) {
//         return new Promise(function(n, e) {
//             a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
//             var t = JSON.stringify(a);
//             Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function(e) { n(e) })
//         })
//     },
//     ajaxPost: function(e, n, t) {
//         var a = Email.createCORSRequest("POST", e);
//         a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function() {
//             var e = a.responseText;
//             null != t && t(e)
//         }, a.send(n)
//     },
//     ajax: function(e, n) {
//         var t = Email.createCORSRequest("GET", e);
//         t.onload = function() {
//             var e = t.responseText;
//             null != n && n(e)
//         }, t.send()
//     },
//     createCORSRequest: function(e, n) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t }
// };

// function sendEmail() {
//     Email.send({
//         SecureToken: "eebd77f4-604b-4066-8dc5-a6d3b33e65e9",
//         To: "ceara09jojo@gmail.com",
//         From: "jonathancrispiniano@gmail.com",
//         Subject: "Teste",
//         Body: "Texto de teste"
//     }).then(
//         message => alert(message)
//     );
// }

window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above
    
    var form = document.getElementById("my-form");
    var button = document.getElementById("btnSend");
    var status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted
    
    function success() {
      form.reset();
      alert("Mensagem enviada, obrigado!")
    }

    function error() {
     alert("Verifique as informações e tente novamente")
    }

    // handle the form submission event

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }