const queryParams = new URLSearchParams(window.location.search);
const username = queryParams.get('username');
console.log(username);

function getHoroscope() {
  fetch(`astrology/horoscope/${username}`, {
    method: 'POST',
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })

    .then((data) => {
      // Handle the response data
      console.log(data);
      // Update the HTML elements with the received data
      document.getElementById('prediction').textContent = data.horoscope;
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
}

getHoroscope();

//update username in the title
document.getElementById('userName').textContent = 'Hi ' + username + '!';
