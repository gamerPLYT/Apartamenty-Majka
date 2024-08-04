let imgBox = document.getElementById('fullImageBox');
let img = document.getElementById('imageFull');
function fullSize(image){
    imgBox.style.visibility = 'visible';
    imgBox.style.opacity = 1;
    img.src = image;
}
function fullSizeClose(){
    setTimeout(ok,100)
}
function ok(){
    imgBox.style.opacity = 0;
    setTimeout(okok,200)
}
function okok(){
    imgBox.style.visibility = 'hidden';
}