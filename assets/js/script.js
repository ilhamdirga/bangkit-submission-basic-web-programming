const hamburger = document.querySelector('#hamburger');
const navlist = document.querySelector(".nav-list");

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navlist.classList.toggle('hidden')
})

biobutton = document.querySelector('#biobutton');
biodata = document.querySelector('#bio');

header = document.querySelector('header');
home = document.querySelector('#home');
about = document.querySelector('#about');
favsongs = document.querySelector('#favsongs');
message = document.querySelector('#message');
footer = document.querySelector('footer');


biobutton.addEventListener('click', function(){
    biodata.classList.toggle('bio-hidden');
    header.classList.toggle('noblur');
    home.classList.toggle('noblur');
    about.classList.toggle('noblur');
    favsongs.classList.toggle('noblur');
    message.classList.toggle('noblur');
    footer.classList.toggle('noblur');
    
    // document.querySelectorAll('body >*:not(.biodata)').forEach(e => e.style.filter = "blur(2px)");
})