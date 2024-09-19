// Function to generate a new affirmation from affirmations.json
function getAffirmation() {
    fetch('affirmations.json')  // Make sure the path is correct
      .then(response => response.json())  // Parse the JSON file
      .then(data => {
        const affirmations = data.affirmations;
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        
        const affirmationElement = document.getElementById('affirmation');
        
        // Remove fade-in class if already present
        affirmationElement.classList.remove('fade-in');
        
        // Set timeout to allow text to update before fading in
        setTimeout(() => {
          affirmationElement.innerText = affirmations[randomIndex];  // Update text
          
          // Re-add the fade-in class to trigger the animation
          affirmationElement.classList.add('fade-in');
        }, 200); // Short delay before changing the text
      })
      .catch(error => console.error('Error loading affirmations:', error));  // Error handling
  }
  
  // Function to share the affirmation via Web Share API
  function shareAffirmation() {
    // Get the text of the current affirmation
    const affirmationText = document.getElementById('affirmation').innerText;
    
    if (navigator.share) {
      navigator.share({
        title: 'Daily Affirmation',
        text: affirmationText,  // Share the current affirmation text
        url: window.location.href
      })
      .catch(error => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported on this browser.');
    }
  }
  
  // Event listener for "Get New Affirmation" button
  document.getElementById('new-affirmation').addEventListener('click', getAffirmation);
  
  // Event listener for "Share Affirmation" button
  document.getElementById('share').addEventListener('click', shareAffirmation);
  