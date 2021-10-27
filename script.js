let countDownDate = new Date("Jan 9, 2022").getTime();
let x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector('.days').innerHTML = days >= 10 ? days : `0${days}`;
    document.querySelector('.hours').innerHTML = hours >= 10 ? hours : `0${hours}`;
    document.querySelector('.minutes').innerHTML = minutes >= 10 ? minutes : `0${minutes}`;
    document.querySelector('.seconds').innerHTML = seconds >= 10 ? seconds : `0${seconds}`;
    if (distance = 0) {
        setInterval(x)
    }

}, 1000)