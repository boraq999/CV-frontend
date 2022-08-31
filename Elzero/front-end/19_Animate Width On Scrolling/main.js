let section = document.querySelector(".two")
let span = document.querySelectorAll('span');


window.onscroll = ()=>{
    if (window.scrollY >= section.offsetTop - 100) {
        console.log("ddd");
        span.forEach((span)=>{
            span.style.width = span.dataset.width;
        }) 
    }
}
