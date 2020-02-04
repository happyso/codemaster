const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1"),
    dDayContainer = document.querySelector(".js-dDay");

const christmas = new Date("December 25, 2020 00:00:00").getTime();

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

function getDday() {
    const now = new Date().getTime();
    const distance = christmas - now;
    let dDay = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);

    dDayContainer.innerHTML = `D-day :${dDay}일`;
}

function init(){
    getTime();
    getDday();
    setInterval(getTime, 1000);
}
init();