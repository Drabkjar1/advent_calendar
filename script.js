let container = document.querySelectorAll('.card-container');
let body = document.querySelector('body');
let backgroudMusic = new Audio(
  './audio/silent-night-piano-version-christmas-background-music-12457.mp3',
);
let h1 = document.querySelectorAll('h1')[0];
const d = new Date();
const today = d.getDate();
const todayMonth = d.getMonth() + 1;

container.forEach((aktualElement) => {
  aktualElement.addEventListener('click', (e) => {
    if (aktualElement.id == today && todayMonth == 10) {
      for (let i = 0; i < container.length; i++) {
        container[i].classList.toggle('nonvisible');

        e.currentTarget.classList.remove('nonvisible');
        backgroudMusic.loop = true;
        backgroudMusic.play();
      }
      e.currentTarget.classList.toggle('rotate');
      body.classList.toggle('nonvisible');
    }
  });
});
