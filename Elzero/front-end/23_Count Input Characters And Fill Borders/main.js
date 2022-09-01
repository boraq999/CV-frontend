let input = document.querySelector("input");
let progress = document.querySelector(".progress");
let span = document.querySelector(".count");

let count = input.getAttribute('maxlength');

span.innerHTML = count;

input.oninput = ()=>{
    span.innerHTML = count - input.value.length;
    progress.style.width = `${input.value.length * 100 / count}%`;
}