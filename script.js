// FitSpo landing page scripts

// Basic signup form handler
document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.signup-form');
  if (form) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const emailInput = form.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      if (email) {
        // Show a simple thank you message
        alert(`Thanks for signing up, ${email}! We'll be in touch soon.`);
        emailInput.value = '';
      }
    });
  }
});