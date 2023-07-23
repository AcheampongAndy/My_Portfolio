let sendEmail = document.querySelector('#send-email'); 


sendEmail.addEventListener('submit', async (e) => { 
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let comment = document.getElementById("comment").value;
 
  var templateParams = {
    name: name, 
    email: email,
    comment: comment, 
  };

  try { // Use a 'try' block to handle potential errors
    const response = await emailjs.send('service_4lebklt', 'template_lh0jhbd', templateParams);
    console.log('SUCCESS!', response.status, response.text);
   new swal("Message sent successfully")

   document.getElementById("name").value=""
   document.getElementById("email").value=""
   document.getElementById("comment").value=""


  } catch (error) {
    console.log('FAILED...', error);
  }
});
