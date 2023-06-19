function createDiary() {}

//update diary content
function getDiary() {
  fetch(`diary/${username}`, {
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
      document.getElementById('diaryContent').textContent = data.diary;
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
}

getDiary();
