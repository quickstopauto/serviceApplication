TweenMax.staggerFrom(".form-group", 1, {
    delay: 0.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  }, 0.2);
  
  TweenMax.staggerFrom(".contact-info-container > *", 1, {
    delay: 0,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
  }, 0.1);

  function validateForm() {
    var nameInput = document.querySelector('[name="name"]');
    var messageInput = document.querySelector('[name="message"]');
    
    // Check if Name is empty
    if (!nameInput.value.trim()) {
      nameInput.classList.add('invalid');
    } else {
      nameInput.classList.remove('invalid');
    }

    // Check if Message is empty
    if (!messageInput.value.trim()) {
      messageInput.classList.add('invalid');
    } else {
      messageInput.classList.remove('invalid');
    }

    // Form is valid only if both Name and Message are filled
    return !(!nameInput.value.trim() || !messageInput.value.trim());
  }