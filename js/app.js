const box = document.querySelector(`.box`);
const body = document.querySelector(`body`);

body.addEventListener("keydown", (e) => {
  box.innerHTML = e.key;
});
    