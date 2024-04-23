// Function to validate form inputs
const validateForm = () => {
    const form = document.getElementById('bookingForm');
    const dateInput = form.elements['res-date'];
    const timeInput = form.elements['res-time'];
    const guestsInput = form.elements['guests'];
    
    let isValid = true;
    
    // Date validation
    if (!dateInput.value) {
      dateInput.setCustomValidity('Please select a date.');
      isValid = false;
    } else {
      dateInput.setCustomValidity('');
    }
    
    // Time validation
    if (!timeInput.value) {
      timeInput.setCustomValidity('Please select a time.');
      isValid = false;
    } else {
      timeInput.setCustomValidity('');
    }
    
    // Guests validation
    if (!guestsInput.value || guestsInput.value < 1) {
      guestsInput.setCustomValidity('Please enter a valid number of guests.');
      isValid = false;
    } else {
      guestsInput.setCustomValidity('');
    }
    
    return isValid;
  };
  
  // Function to submit the booking form
  const submitForm = async (formData) => {
    try {
      const response = await fetchAPI(formData);
      if (response) {
        // Show confirmation message
        document.getElementById('confirmation').style.display = 'block';
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };
  
  // Event listener for form submission
  document.getElementById('bookingForm').addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (validateForm()) {
      const form = event.target;
      const formData = new FormData(form);
      
      submitForm(formData);
    }
  });
  