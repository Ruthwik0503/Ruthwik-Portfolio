(() => {
  'use strict';
  const form = document.getElementById('contactForm');
  const status = document.getElementById('contactFormStatus');
  const submit = document.getElementById('contactSubmit');
  document.getElementById('copyrightYear').textContent = new Date().getFullYear();
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    status.className = 'contact-form-status';
    const endpoint = form.action;
    if (endpoint.includes('YOUR_FORM_ID')) {
      status.textContent = 'Form not configured yet. Please add your Formspree form ID or use the email link below.';
      status.classList.add('error');
      return;
    }
    submit.disabled = true;
    submit.textContent = 'Sending…';
    status.textContent = '';
    try {
      const response = await fetch(endpoint, {method: 'POST', body: new FormData(form), headers: {'Accept': 'application/json'}});
      if (!response.ok) throw new Error('Submission failed');
      form.reset();
      status.textContent = 'Thank you! Your message was sent successfully.';
      status.classList.add('success');
    } catch (error) {
      status.textContent = 'Unable to send your message. Please try again, or email me directly at ruthwikreddy2002@gmail.com.';
      status.classList.add('error');
    } finally {
      submit.disabled = false;
      submit.innerHTML = 'Send message <span aria-hidden="true">↗</span>';
    }
  });
})();
