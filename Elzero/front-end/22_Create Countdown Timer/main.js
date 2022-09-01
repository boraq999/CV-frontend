let cuontDownDate = new Date("Sep 29, 2022 10:00:00").getTime();
let days = document.querySelector(".day")
let hours = document.querySelector(".hour")
let minutes = document.querySelector(".minutes")
let seconds = document.querySelector(".second")

let counter = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDef = cuontDownDate - dateNow;

    let day = dateDef / (1000 * 60 * 60 * 24);
    let hour = dataTime(day, 24)
    let minut = dataTime(hour, 60)
    let second = dataTime(minut, 60)

    day = Math.floor(day);
    hour = Math.floor(hour);
    minut = Math.floor(minut);
    second = Math.floor(second);

    days.innerHTML = day;
    hours.innerHTML = hour;
    minutes.innerHTML = minut;
    seconds.innerHTML = second;

}, 1000)

function dataTime(time, tr) {
    let timer = (time - Math.floor(time)) * tr;
    return timer;
}