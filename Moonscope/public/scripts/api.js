const queryParams = new URLSearchParams(window.location.search);
const username = queryParams.get('username');
console.log(username);

function getHoroscope() {
  fetch(`astrology/horoscope/${username}`)
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      console.log(data);
      // Update the HTML elements with the received data
      document.getElementById('prediction').textContent = data.prediction;
      document.getElementById('love').textContent = data.love;
      document.getElementById('luck').textContent = data.luck;
      document.getElementById('work').textContent = data.work;
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
}

getHoroscope();
