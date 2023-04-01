let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll=() => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

let countDate = new Date('March 20, 2023 00:00:00').getTime();

function countDown(){
    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second*60;
    let hour = minute*60;
    let day = hour*24;

    let d = Math.floor(gap/(day));
    let h = Math.floor((gap%(day))/hour);
    let m =Math.floor((gap%(hour))/minute);
    let s = Math.floor((gap%(minute))/second);

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}

setInterval(
    () => {
        countDown()
    },1000
)