let navbar = document.querySelector('.header .navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active')
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active')
}

window.onscroll = () =>{
    navbar.classList.remove('active')
}

let login = document.querySelector('.register-form')

document.querySelector('#login-btn').onclick = () =>{
    login.classList.add('active')
}

document.querySelector('#close-login').onclick = () =>{
    login.classList.remove('active')
}

window.onscroll = () =>{
    navbar.classList.remove('active')
}


let search = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    search.classList.add('active')
}

document.querySelector('#close-search').onclick = () =>{
    search.classList.remove('active')
}

window.onscroll = () =>{
    navbar.classList.remove('active')
}

//slider js

const btn = document.querySelectorAll(".nav-btn");
const slide = document.querySelectorAll(".video-slider");
const contents = document.querySelectorAll(".content");

var slider = function(manual){

    btn.forEach((btn) =>{
        btn.classList.remove("active")
    });

    slide.forEach((slide) =>{
        slide.classList.remove("active")
    });

    contents.forEach((content) =>{
        content.classList.remove("active")
    });

    btn[manual].classList.add("active");
    slide[manual].classList.add("active");
    contents[manual].classList.add("active");
}

btn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        slider(i);
    });
});




var Mainimg = document.getElementById("Mainimg");
var smallimg = document.getElementsByClassName("small-img");

smallimg[0].onclick = function(){
    Mainimg.src = smallimg[0].src;
}
smallimg[1].onclick = function(){
    Mainimg.src = smallimg[1].src;
}
smallimg[2].onclick = function(){
    Mainimg.src = smallimg[2].src;
}
smallimg[3].onclick = function(){
    Mainimg.src = smallimg[3].src;
}