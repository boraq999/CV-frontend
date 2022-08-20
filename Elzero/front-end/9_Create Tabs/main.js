let tabs = document.querySelectorAll(".tabs li");
let content = document.querySelectorAll(".content > div");

tabs.forEach((ele)=>{
    
    ele.onclick = ()=>{

        tabs.forEach((ele)=>{
            ele.classList.remove("active")
        })

        ele.classList.add("active")

        content.forEach((conts)=>{
            conts.style.display = 'none'
            if (conts.classList.contains(ele.getAttribute("data-cont"))){
                conts.style.display = 'block'
            }
        })
    }
})