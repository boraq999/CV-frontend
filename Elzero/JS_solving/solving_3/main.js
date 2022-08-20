let txt = "In Programming We Love Elzero Web School ";


/*    ______________---- First Method  */console.log("First Method");
let re = /\w+\S/ig;      //Cut Words
let arr = txt.match(re); //Create Array Words

let lengthWord = [];   //Create Array : Length Word
arr.forEach(function(e){
    lengthWord.push(e.length) 
})
console.log(Math.max(...lengthWord));
console.log("===".repeat(5));



/*    ______________---- Second Method  */console.log("Second Method");
let arr2 = txt.split(" ");  //Create Array Words
let max = Math.max(...arr.map(function(el){
    return el.length;
}));

let regEx = new RegExp("(\\w{" + max + "})");
let Ex =    new RegExp("(\\w{" + max + "})");
console.log(txt.match(regEx)[0]);