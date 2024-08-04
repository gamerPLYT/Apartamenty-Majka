let loader = document.getElementById('loader');
let loaderHeader = document.getElementById('loaderHeader');
let loaderAnimation = document.getElementById('loaderAnimation');

window.addEventListener("load", function (){
    setTimeout(loaderAnimations, 500);
})
function loaderAnimations(){
    loaderHeader.style.transition = `transform 400ms ease-in, opacity 350ms ease-in`;
    loaderHeader.style.transform = `translateX(-200px)`;
    loaderHeader.style.opacity = 0;
    setTimeout(sdsdas,400)
}
function sdsdas(){
    loaderAnimation.style.transition = `transform 500ms ease-in-out`;
    loaderAnimation.style.transform = `translateX(-120px)`;
    setTimeout(loaderOpacity, 1000);
}
function loaderOpacity() {
    loader.style.transition = "opacity 1000ms";
    loader.style.opacity = 0;
    setTimeout(loaderHide,1000);
}
function loaderHide(){
    loader.style.display = `none`;
}