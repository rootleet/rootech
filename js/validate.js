/**
* PHP Email Form Validation - v3.11
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
(function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let name = document.getElementById('name')?.value || '';
      let email = document.getElementById('email')?.value || '';
      let Subject = document.getElementById('Subject')?.value || '';
      let message = document.getElementById('message')?.value || '';
      let phone = document.getElementById('phone')?.value || '';



      let payload = {
        module:'load_stream',
        data:{
          "source":message,
          "phone":phone,
          "email":email,
          "subject":'website',
          "message":Subject,
          name:name
        }
      }

      console.table(payload)
      thisForm.querySelector('.loading').classList.add('d-block');
      fetch('http://127.0.0.1:8000/crm/api/', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify(payload)
      })
      .then(response => response.json())
      .then(data => {
        if(data['status_code'] === 200){
          thisForm.querySelector('.loading').classList.remove('d-block');
          thisForm.querySelector('.error-message').classList.remove('d-block');
          thisForm.querySelector('.sent-message').classList.add('d-block');
        } else {
          displayError(thisForm,data['message'])
        }
      })
      .catch(error => {
        console.error('Error sending payload:', error);
      });

      
    });
  });

  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    })
    .then(response => {
      if( response.ok ) {
        return response.text();
      } else {
        throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
      }
    })
    .then(data => {
      thisForm.querySelector('.loading').classList.remove('d-block');
      if (data.trim() == 'OK') {
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset(); 
      } else {
        throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
      }
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

  function displaySuccess(thisForm,message){
    thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');
  }

})();
