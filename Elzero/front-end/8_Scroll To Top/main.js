let span =document.querySelector('span');

window.onscroll = function(){
    console.log(this.scrollY);
    if (this.scrollY >= 1000)
        span.classList.add("show")
    else {
        span.classList.remove("show")
    }
}

span.onclick = ()=>{
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    })
}