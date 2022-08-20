let data = document.querySelector('.info');
let add = document.querySelector('.add');
let tasks = document.querySelector('.tasks');
localStorage.id = JSON.stringify(1)
let id = JSON.parse (localStorage.id);

// Build Tasks
add.addEventListener('click',()=>{
    if ( data.value ){
        buildTasks(id,data.value);
        createLocal(id,data.value)
        id++;
        localStorage.id = id;
    }
})

// Delete Button
window.addEventListener('click',(e)=>{
    if (e.target.classList.contains('delet')){
        let id = e.target.getAttribute('id')
        e.target.parentElement.remove();

        subLocal = subLocal.filter(function(el){
            return el.id != id;
        })
        apdateLocalStorage()
    }
})



// Create SubLocal And LocalStorage
let subLocal = [];

function createLocal(id, title){
    let obj = {id: id, title: title};
    subLocal[subLocal.length] = obj;
    apdateLocalStorage();
}

function apdateLocalStorage(){
    localStorage.tasks = JSON.stringify(subLocal)
}


// Window OnLoade
window.addEventListener('load',()=>{
    if ( localStorage.tasks ){
        subLocal = JSON.parse(localStorage.tasks);
    }
    subLocal.forEach((li)=>{
        buildTasks(li.id,li.title)
    })
})


// Build Tasks

function buildTasks (id,title){

    // Create Element
    let li = document.createElement('div');
    let txt = document.createElement('span');
    let delet = document.createElement('button');

    // Set Attribute
    li.className = 'dad';
    delet.className = 'delet';
    delet.setAttribute('id', id);

    // Append Element
    tasks.append(li);
    li.append(txt);
    li.append(delet);

    // Append Text
    txt.append(title);
    delet.append('delete')

}