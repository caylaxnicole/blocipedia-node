const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function newUserEmail(email, name){
  const message = {
    to: email,
    from: "cayla@blocipedia.com",
    message: `Hi there, ${name}`,
    subject: "Confirmation email",
    content: [{ type: "text/html", value: `Hi there, ${name}, thank you for joining Blocipedia!` }]
  }
  sgMail.send(message);
}

module.exports = {
  newUserEmail
}
