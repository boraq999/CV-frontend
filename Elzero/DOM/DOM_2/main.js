let container = document.createElement('div');
container.classList.add("container");
document.body.append(container);
container.style.cssText = `
    height: 100vh;
`
// __________       CREATE HEADER
// ==========================================
let header = document.createElement('div');
container.append(header);
header.classList.add("header");

let logo = document.createElement('span');
header.append(logo);
logo.classList.add("logo")
let textLogo = document.createTextNode("Elzero");
logo.append(textLogo);

let ulHeader = document.createElement("ul");
header.append(ulHeader);
let liList = ["home","About","services","help"];
liList.forEach(function(ele){
    let li = document.createElement("li");
    let liText = document.createTextNode(ele);
    li.append(liText);
    ulHeader.append(li);
    li.classList.add("liheader");
    // -----------------------CSS*****************

})
let liheader = document.querySelectorAll("li");

// ................... CSS ==================================
header.style.cssText = `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`
logo.style.cssText = `
    color: green;
    font-weight: bold;
    font-size: 20px;

`
ulHeader.style.cssText = `
    list-style: none;
    display: flex;
`
liheader.forEach(function(ele){
    ele.style.cssText = `
    color: rgb(43, 53, 43);
    padding: 10px;
    text-transform: capitalize;
    cursor: pointer;
    `
})

//      CREATE CONTENT
// ----------------------------------------------

let content = document.createElement('div');
container.append(content);
content.classList.add("content");
for (let i = 0; i < 15; i++){
    let son = document.createElement("div")
    son.classList.add("son");
    content.append(son);
    son.append(i);
    let product = document.createElement("p");
    product.append("product");
    son.append(product)
}
let son = document.querySelectorAll(".son");



// ................... CSS ==================================
content.style.cssText = `
    background: #e6d8d8;
    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap:10px;
    padding:10px;
`

son.forEach(function(ele){
    ele.style.cssText = `
    display: grid;
    place-items: center;
    padding:10px;
    background: white;
    `
})

// ----------- CREATE FOOTER
// =====================================

let footer = document.createElement("div");
footer.classList.add("footer");
container.append(footer);
footer.append("Copyright 2021")

// ................... CSS ==================================
footer.style.cssText = `
    background: rgb(36, 185, 36);
    padding: 10px;
    display: grid;
    place-items: center;
    color: white;
`