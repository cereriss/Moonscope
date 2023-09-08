const queryParams = new URLSearchParams(window.location.search);
const username = queryParams.get('username');
console.log('Full URL:', window.location.href);
console.log('Username:', username);

//update diary content
function getDiary() {
  console.log('Fetching diary for user:', username);
  fetch(`diary/${username}`, {
    method: 'GET',
  })
    .then((response) => {
      console.log('Response:', response);
      return response.json();
    })

    .then((data) => {
      // Handle the response data
      console.log('Data received:', data);
      // Update the HTML elements with the received data
      document.getElementById('diaryContent').textContent = data.diaries;
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
}

getDiary();
