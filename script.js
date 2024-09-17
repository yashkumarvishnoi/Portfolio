document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    const but=document.querySelector('.touch');
    const profile=document.querySelector('.profile');
  
    // Add visible class to h1
    h1.classList.add('visible');
  
    // Delay for h2 and divs
    setTimeout(() => {
      h2.classList.add('visible');
      but.classList.add('visible'); 
      profile.classList.add('visible'); 
    }, 200); // Adjust delay as needed
  });

  

document.getElementById('slideButton').addEventListener('click', function() {
  const projects1 = document.getElementById('projects2');
  const projects2 = document.getElementById('projects1');

  if (projects1.classList.contains('hidden')) {
      projects1.classList.remove('hidden');
      projects2.classList.add('hidden');
      this.textContent = 'Show Less Projects'; // Change button text
  } else {
      projects1.classList.add('hidden');
      projects2.classList.remove('hidden');
      this.textContent = 'Show More Projects'; // Change button text back
  }
});
  function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    let timeString = '';
    if (hours < 10) {
        timeString += '0';
    }
    timeString += hours + ':';

    if (minutes < 10) {
        timeString += '0';
    }
    timeString += minutes;

    document.getElementById('clock').textContent = timeString;
}
setInterval(updateClock, 1000); // Update the clock every second
updateClock(); // Initial call to display the clock immediately
