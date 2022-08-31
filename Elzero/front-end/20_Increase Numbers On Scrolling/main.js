let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".two");
let started = false;

function countTime(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.innerHTML == goal) {
            clearInterval(count)
        }
    }, 2000 / goal)
}


window.onscroll = () => {
    if (window.scrollY >= section.offsetTop - 200){
        if (!started){
            nums.forEach((num) => countTime(num));
            console.log("sdag");
            started = true;
        }
    }
}