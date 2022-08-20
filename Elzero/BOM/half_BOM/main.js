let mybackground = document.querySelector(".container");
let myLi = document.querySelectorAll("li");
myLi.forEach(function(ele){
    let color = ele.dataset.color;
    ele.style.background = color;
    ele.addEventListener("click",()=>{
        myLi.forEach((li)=>{
            li.classList.remove("active")
        })
        ele.classList.add("active");
        ele.parentElement.style.background = ele.dataset.color;
        mybackground.style.background = ele.dataset.color;
        window.localStorage.color= ele.dataset.color;
        boxShadow(ele);
        
    })
});

if (window.localStorage.color){
    mybackground.style.background = window.localStorage.color;
    myLi.forEach((li)=>{
        li.classList.remove("active")
    })
    myLi.forEach((ele)=>{
        if (ele.dataset.color == window.localStorage.color){
            ele.classList.add("active")
            ele.parentElement.style.background = ele.dataset.color;
            boxShadow(ele)
        }
    })
}


function boxShadow (ele){
    if (ele.dataset.color == "black"){
        ele.parentElement.style.boxShadow = "2px 1px 6px 0px #221d1d";
        ele.style.boxShadow = "2px 1px 6px 0px #221d1d"
    }
    else{
        ele.parentElement.style.boxShadow = "2px 1px 6px 0px black";
        ele.style.boxShadow = "2px 1px 6px 0px black"
    }
}