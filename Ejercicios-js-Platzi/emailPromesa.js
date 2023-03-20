
function sendEmail(email, subject, body) {
    return new Promise((resolve, reject) => {
      if (email && subject && body) {
        setTimeout(() => {
          const emailInfo = {
            email,
            subject,
            body,
          };
  
          resolve(emailInfo);
        }, 2000);
      } else {
        reject(new Error("Hacen falta datos para poder enviar el correo"));
      }
    });
  }


  sendEmail(
    "test@mail.com",
    "Nuevo reto",
    "Únete a los 30 días de JS"
  )
  .then(result => console.log(result))

  sendEmail(
    "test@mail.com",
    "",
    "Únete a los 30 días de JS"
  )
  .then(result => console.log(result))
  .catch(error => console.log(error))
  

  /* 
  resultado 1:

  {
  email: "test@mail.com"
  subject: "Nuevo reto",
  body:  "Únete a los 30 días de JS",
}

Resultado 2: 

"Error: Hacen falta campos para enviar el email"
  
  */