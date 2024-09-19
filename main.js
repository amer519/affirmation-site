const affirmations = [
    "You are capable of amazing things.",
    "Every day is a second chance.",
    "Believe in yourself and all that you are.",
    "You are stronger than you think.",
    "You are worthy of all the good things in life."
  ];
  
  // Function to generate a new affirmation
  function getAffirmation() {
    const randomIndex = Math.floor(Math.random() * affirmations.length);
    document.getElementById('affirmation').innerText = affirmations[randomIndex];
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
      .catch(error => console.error('Error sharing', error));
    } else {
      alert('Sharing is not supported on this browser.');
    }
  }
  