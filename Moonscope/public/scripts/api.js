const queryParams = new URLSearchParams(window.location.search);
const username = queryParams.get('username');
console.log(username);

function getHoroscope() {
  fetch(`astrology/horoscope/${username}`, {
    method: 'GET',
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })

    .then((data) => {
      const about = data.about;
      const compatibility = data.compatibility;

      // Handle the response data
      console.log(about);

      // Update the HTML elements with the received data
      document.getElementById('prediction').textContent = about;
      document.getElementById('relationship').textContent = compatibility;
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
}

getHoroscope();
// Aggiorna il nome utente nel titolo
document.getElementById('userName').textContent = 'Ciao ' + username + '!';
