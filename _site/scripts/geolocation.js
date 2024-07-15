document.addEventListener('DOMContentLoaded', function() {
    fetch('https://ipinfo.io/json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Process the location data here
        // For example, you can display it in an HTML element
        const locationElement = document.getElementById('visitor-location');
        if (locationElement) {
          locationElement.textContent = `You are visiting from ${data.city}, ${data.region}, ${data.country}`;
        }
      })
      .catch(error => {
        console.error('Error fetching IP geolocation data:', error);
      });
  });
  