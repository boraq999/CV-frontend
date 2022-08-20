let arr = ["ahmed", "omar", "osama", "hammam"];
let btn = document.querySelector(".container .btn");
let list = document.querySelector(".card ul");
let val = document.querySelector(".card .value");


for (let i = 0; i < arr.length; i++){
    let li = document.createElement('li');
    li.append(arr[i]);
    list.append(li)
}

btn.addEventListener('click',()=>{
    let num = Math.floor(Math.random() * arr.length);
    
    val.innerHTML = arr[num];
})