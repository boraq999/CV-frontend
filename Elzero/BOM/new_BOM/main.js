let val = document.querySelector(".val");
let btn = document.querySelector(".btn");

val.focus()

let myAr = [];

// ____________     BTN INPUT
// ===========================================
btn.addEventListener("click",()=>{
    val.focus()
    if (val.value){
        id = myAr.length ;
        myAr[myAr.length] = {id: id, task: val.value}
        val.value = "";
        window.localStorage.tasks = JSON.stringify(myAr);
        create();
    }
})

// ___________      CHEK LOCALSTORAGE  WHEM OPEN BROWSER
// =====================================================
if (window.localStorage.tasks){
    myAr = JSON.parse( window.localStorage.tasks )
    id = myAr.length - 1;
    create();
}


// ___________      CREATE BULDING



    
function create(){
    let list =document.querySelector(".list");
    list.innerHTML ="";
    list.classList.add(".list");
    myAr.forEach((ele,index)=>{    
    // create element
    // -------------------------------------
    let li = document.createElement("li");
    let label = document.createElement("label");
    let delet = document.createElement("button");
    // add attribute and value
    // -------------------------------------
    li.classList.add("main-style");
    delet.classList.add("main-style");
    delet.classList.add("btn");
    delet.dataset.id = index;
    label.innerHTML = ele.task;
    delet.innerHTML = "delete";
    // append
    // -------------------------------------
    li.append(label)
    li.append(delet)
    list.append(li)
    })

}

// _________________    Delete _________
// =====================================
addEventListener("click",(ele)=>{
    if (ele.target.hasAttribute("data-id")){
        let index = ele.target.dataset.id
        myAr.splice(index,1)
        id = myAr.length - 1;
        window.localStorage.tasks = JSON.stringify(myAr);
        create();
    }
})