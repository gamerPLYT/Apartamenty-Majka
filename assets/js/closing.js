const alert = document.getElementById("alert");

function closing() {
    alert.style.transition = `transform 400ms ease-in, opacity 350ms ease-in`;
    alert.style.transform = `translateX(500px)`;
    alert.style.opacity = 0;
}