const queryParams = new URLSearchParams(window.location.search);
const username = queryParams.get('username');
console.log('Username:', username);

function getDiary() {
  console.log('Fetching diary for user:', username);
  fetch(`/diary/${username}`, {
    method: 'GET',
  })
    .then((response) => {
      console.log('Response:', response);
      return response.json();
    })
    .then((data) => {
      // Handle the response data
      console.log('Data received:', data);
      const diaryEntries = data.diary;
      const diaryContentElement = document.getElementById('diaryContent');

      // Clear any existing content in the HTML element
      diaryContentElement.innerHTML = '';

      // Loop through the diary entries and append content to the HTML element
      diaryEntries.forEach((entry) => {
        const entryContent = entry.content;
        const entryElement = document.createElement('p');
        entryElement.textContent = entryContent;
        diaryContentElement.appendChild(entryElement);
      });
    })
    .catch((error) => {
      // Handle any errors
      console.error(error);
    });
}

// Call the function to fetch and display the user's diary
getDiary();
