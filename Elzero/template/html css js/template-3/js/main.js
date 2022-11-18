// Start OUR SKILLS
// ----------------------------------------

// get html elelment
// -------------------
let ourSkills = document.querySelector(".our-skills");
let progress = document.querySelectorAll(".our-skills .progress");
let persent = document.querySelectorAll(".our-skills .persent");
let fill = document.querySelectorAll(".our-skills .lvl");

let started = false;

// get lvl from progerss
let goal = [];
progress.forEach((el) => {
    goal[goal.length] = el.dataset.lvl;
})

window.onscroll = function () {
    if (window.scrollY >= ourSkills.offsetTop - 100) {
        if (!started) {

            function countUp(goal, index) {
                let lvl = 0;
                let count = setInterval(() => {
                    persent[index].innerHTML = lvl;
                    persent[index].style.left = `calc(${lvl}% - 12px)`;
                    fill[index].style.width = `${lvl}%`
                    if (lvl == goal) {
                        clearInterval(count);
                    }
                    lvl++;
                }, 1000 / goal)
            }
            goal.forEach((goal, index) => countUp(goal, index));



            started = true;
        }
    }
}




// Start LATEST EVENTS
// =============================================================
// =============================================================

// get Element
let days = document.querySelector(".latest-events .days");
let hours = document.querySelector(".latest-events .hours");
let minutes = document.querySelector(".latest-events .minutes");
let seconds = document.querySelector(".latest-events .seconds");


let count = setInterval(() => {
    let nowTime = new Date().getTime();
    let getTime = new Date('2022/12/31');
    let defTime = getTime - nowTime;

    let getDays = defTime / (1000 * 60 * 60 * 24);
    let getHours = calcTime(getDays,24);
    let getMinutes = calcTime(getHours,60);
    let getSeconds = calcTime(getMinutes,60);
    
    days.innerHTML = Math.floor(getDays);
    hours.innerHTML = Math.floor(getHours);
    minutes.innerHTML = Math.floor(getMinutes);
    seconds.innerHTML = Math.floor(getSeconds);

    // calc time fun
    function calcTime(time, tr){
        let timeTr = (time % 1) * tr;
        return timeTr;
    }

}, 1000)