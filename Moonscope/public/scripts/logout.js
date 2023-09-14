const logoutButton = document.getElementById('logoutbtn');

logoutButton.addEventListener('click', async () => {
  try {
    // Send a request to the server to logout.
    const response = await fetch('/users/logout', {
      method: 'POST',
    });

    if (response.ok) {
      // Clear client-side session data or handle the logout success.
      window.location.href = '/index.html'; // Redirect to the landing page
    } else {
      // Handle any errors, e.g., display an error message.
      console.error('Logout failed:', response.statusText);
    }
  } catch (error) {
    console.error('Logout error:', error);
  }
});
