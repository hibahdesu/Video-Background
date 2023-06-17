const preloader = document.querySelector('.preloader');
const btn = document.querySelector('.btn');
const video = document.querySelector('.video');
const change = document.querySelector('.change');
const bar = document.querySelector('.bi-list');
const menu = document.querySelector('.nav-menu');

bar.addEventListener('click', () => {
    menu.classList.toggle('active');
});

btn.addEventListener('click', () => {
    if (btn.classList.contains("pause")) {
        btn.classList.remove("pause");
        video.play();
        change.classList.add("bi-pause");
        change.classList.remove("bi-play")
    } else {
        btn.classList.add("pause");
        video.pause();
        change.classList.remove('bi-pause');
        change.classList.add('bi-play');
    }
});



window.addEventListener('load', () => {
    preloader.style.zIndex = '-2';
});