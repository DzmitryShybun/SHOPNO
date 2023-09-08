

var popup = document.getElementById("popup-image");

var btn_img_1 = document.getElementById("btn-popup-img1");
var btn_img_2 = document.getElementById("btn-popup-img2");
var btn_img_3 = document.getElementById("btn-popup-img3");
var btn_img_4 = document.getElementById("btn-popup-img4");
var btn_img_5 = document.getElementById("btn-popup-img5");
var btn_img_6 = document.getElementById("btn-popup-img6");


var popup_image = document.getElementById("popup-img");

var close = document.getElementsByClassName("popup__close")[0];
var popup_close_body = document.getElementsByClassName("popup__body")[0];



    btn_img_1.onclick = function () {
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
    popup.style.transition = "all 500ms ease-out 0s";
    popup_image.src = "../img/featured/1.jpg";
}
    btn_img_2.onclick = function () {
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
    popup.style.transition = "all 500ms ease-out 0s";
    popup_image.src = "../img/featured/2.jpg";
}
    btn_img_3.onclick = function () {
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
    popup.style.transition = "all 500ms ease-out 0s";
    popup_image.src = "../img/featured/3.jpg";
}
    btn_img_4.onclick = function () {
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
    popup.style.transition = "all 500ms ease-out 0s";
    popup_image.src = "../img/featured/4.jpg";
}
    btn_img_5.onclick = function () {
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
    popup.style.transition = "all 500ms ease-out 0s";
    popup_image.src = "../img/featured/5.jpg";
}
    btn_img_6.onclick = function () {
    popup.style.visibility = "visible";
    popup.style.opacity = "1";
    popup.style.transition = "all 500ms ease-out 0s";
    popup_image.src = "../img/featured/6.jpg";
}



close.onclick = function () {
    popup.style.visibility = "hidden";
    popup.style.opacity = "0";
}

window.onclick = function (event) {
    if (event.target === popup_close_body) {
        popup.style.visibility = "hidden";
        popup.style.opacity = "0";
    }
}

