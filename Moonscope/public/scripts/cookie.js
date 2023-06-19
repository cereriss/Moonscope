function getCookie() {
  let userId = document.cookie.split('=')[1];
  document.getElementById('id_user').value = userId;
}

getCookie();
