let txt = "Hello Elzero Web Web Hello School";

function remov (sentence){
    let arr = txt.split(" ");

    for(let i=0; i < arr.length-2; i++ ){
        for(let j=i+1; j < arr.length-1; j++ ){
            if( arr[i] === arr[j]){
                arr.splice(j,1);
            }
        }

    }
    console.log(arr);
}
// remov(txt)

tx = new Set( txt.split(" "))
console.log([...tx].join(" "));