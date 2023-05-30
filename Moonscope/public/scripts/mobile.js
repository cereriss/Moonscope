const diarybtn = document.getElementById('btn-diary');
const writebtn = document.getElementById('btn-write');

function goToDiaryPage() {
  window.location.href = './mobile-diary.html';
}

function goToWritePage() {
  window.location.href = './mobile-prompt.html';
}

diarybtn.addEventListener('click', goToDiaryPage);
writebtn.addEventListener('click', goToWritePage);
