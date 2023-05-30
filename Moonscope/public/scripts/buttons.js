const backbtn = document.getElementById('btn-back');
function goBack() {
  window.location.href = './profile.html';
}

backbtn.addEventListener('click', goBack);
