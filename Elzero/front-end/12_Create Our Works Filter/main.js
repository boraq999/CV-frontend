let list = document.querySelectorAll('li');
let box = document.querySelectorAll('.box div');

list.forEach((el)=>{
    el.addEventListener("click",()=>{
        setActive();
        showBoxes(el)
    })
})

box.forEach((ele)=>{
    ele.style.background = ele.dataset.clr
})


// set active class

function setActive(){
    list.forEach((el)=>{
        el.onclick = ()=>{
            list.forEach((ele)=>{
                ele.classList.remove("active");
            })
            el.classList.add("active")
        }
    })
}

// show boxes

function showBoxes (el){
    let box = document.querySelectorAll(".box div");
    console.log(el.dataset.cat);
    
    // box.forEach((ele)=>{
    //     ele.style.display = 'block'
    // }

    box.forEach((ele)=>{
        if (ele.classList.contains(el.dataset.cat))
        {
            ele.style.display = 'grid'
            setTimeout(()=>{ele.style.opacity = '1'},100)
            
        }
        else{
            // ele.style.opacity = '0'
            ele.style.display = 'none';
            setTimeout(()=>{ele.style.opacity = '0'},100)

        }
    })
}