let listColor = "0123456789ABCDEF";
let color = '#';

for (let i = 0; i <6; i++){
    color += listColor[Math.floor(Math.random() * listColor.length)];
}

document.body.style.background = color;



