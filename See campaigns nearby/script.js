function toggleCampaignDetails(event, card) {
  const details = card.querySelector('.campaign-details');
  details.style.display = details.style.display === 'block' ? 'none' : 'block';
  event.stopPropagation();
}

function showJoinForm(event) {
  const joinForm = document.getElementById('joinForm');
  joinForm.style.display = 'block';
  event.stopPropagation();
}

function stopPropagation(event) {
  event.stopPropagation();
}

function submitJoinForm() {
  // Add logic to submit the join form data
  alert('Join form submitted successfully!');
  // Close the form after submission
  closeCampaignDetails();
}

function closeCampaignDetails() {
  const details = document.querySelectorAll('.campaign-details');
  details.forEach((detail) => {
    detail.style.display = 'none';
  });

  const joinForm = document.getElementById('joinForm');
  joinForm.style.display = 'none';
}
