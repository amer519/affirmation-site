// Function to generate a new affirmation from affirmations.json
function getAffirmation() {
    fetch('affirmations.json')  // Make sure the path is correct
      .then(response => response.json())  // Parse the JSON file
      .then(data => {
        const affirmations = data.affirmations;
        const randomIndex = Math.floor(Math.random() * affirmations.length);
        document.getElementById('affirmation').innerText = affirmations[randomIndex];
      })
      .catch(error => console.error('Error loading affirmations:', error));  // Error handling
  }
  
  // Function to share the affirmation via Web Share API
  function shareAffirmation() {
    const affirmationText = document.getElementById('affirmation').innerText;
    if (navigator.share) {
      navigator.share({
        title: 'Daily Affirmation',
        text: affirmationText,
        url: window.location.href
      })
      .catch(error => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported on this browser.');
    }
  }
  
  // Event listener for "Get New Affirmation" button
  document.getElementById('new-affirmation').addEventListener('click', getAffirmation);
  // Event listener for "share" button
  document.getElementById('share').addEventListener('click', shareAffirmation);

  