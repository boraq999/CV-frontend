let serial = document.querySelector('.serial');
let generate = document.querySelector('.generate');

let char = "qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*";
let long = 10;
let pass = '';


generate.addEventListener('click',()=>{
    pass = '';    
    for (let i = 0; i < long; i++){
        pass += char[Math.floor(Math.random() * char.length)]
    }

    serial.innerHTML = pass;    
})