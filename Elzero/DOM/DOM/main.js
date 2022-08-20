//  ----------------------          Create Header
let header = document.createElement('header')
header.classList.add("header")
document.body.prepend(header)

let logo = document.createElement('div');
logo.classList.add("logo")
logo.append("elzero")
header.prepend(logo)

let list = document.createElement('ul')
header.append(list)

let home = document.createElement('li')
let about = document.createElement('li')
let service = document.createElement('li')
let contact = document.createElement('li')

home.className = "li"
about.className = "li"
service.className = "li"
contact.className = "li"

let hTxt = document.createTextNode("home")
let aTxt = document.createTextNode("about")
let sTxt = document.createTextNode("service")
let cTxt = document.createTextNode("contact")

home.append(hTxt)
about.append(aTxt)
service.append(sTxt)
contact.append(cTxt)

list.append(home)
list.append(about)
list.append(service)
list.append(contact)

// ..........       CSS Styling     .............

header.style.cssText = 
    `display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;
    font-family: -webkit-pictograph;
    `
    
    logo.style.cssText = `
    color: green;
    font-weight: bold;
    `
    
    list.style.cssText = 
    `display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 15px;
    list-style: none;
    font-size: 14px;
    color: gray;
    `


// =======================================
// =======================================


//  ----------------------          Create Container

let container = document.createElement('div')
container.className = "container"
header.after(container)

let countPro = 15;
for( let i = 0; i < countPro; i++){
    let product = document.createElement("div")
    product.className = "product"
    let span    = document.createElement('span')
    span.className = "span"
    let spanT   = document.createTextNode(i + 1)
    let p       = document.createElement('p')
    let pT      = document.createTextNode("product")
    span.append(spanT)
    p.append(pT)
    product.append(span)
    product.append(p)
    container.append(product)

// ..........       CSS Styling     .............

    product.style.cssText = `
    text-align: center;
    background: white;
    padding: 20px 0px 0px;
    `;

    span.style.cssText = `
    color: black;
    display: block;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: -10px;
    `;
}

// ..........       CSS Styling     .............

container.style.cssText = `
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    background: #eee;
    padding: 10px;
    color: gray;
    text-transform: capitalize;
`


// =======================================
// =======================================

//  ----------------------          Create Footer

let footer = document.createElement('footer')
footer.className = "footer";
container.after(footer);

let footerT = document.createTextNode("copyright 2021");
footer.append(footerT)

footer.style.cssText = `
    background-color: #008000c9 ;
    font-size: 20px;
    color: white;
    text-align: center;
    padding: 15px 0px;
    text-transform: capitalize;
`;