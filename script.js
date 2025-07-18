// FitSpo landing page scripts
// Enhances the waitlist forms with a toast notification and submits via fetch to Netlify.

document.addEventListener('DOMContentLoaded', () => {
  // Select all Netlify forms by name
  const forms = document.querySelectorAll('form[name="waitlist"]');
  const toast = document.querySelector('.toast');

  forms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      if (!email) return;

      // Prepare form data
      const formData = new FormData(form);

      // Display toast
      if (toast) {
        toast.textContent = `Thanks—you’re on the list!`;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 4000);
      }

      // Submit the form via fetch to Netlify
      fetch('/', {
        method: 'POST',
        body: formData,
      })
        .then(() => {
          // Reset the form
          emailInput.value = '';
        })
        .catch((error) => {
          console.error('Error submitting form', error);
        });
    });
  });
});