
function convert(num){
    let srt = num.toString();
    let arrNum = [];
    for ( let i = 0; i < srt.length; i++){
        arrNum.unshift(+srt[i])
    }
    return arrNum;
}


function convertArr(num){
    let arr = [...num.toString()].map(function(el,indx,arr){
        return +arr[arr.length-1 - indx] ;
    })
    return arr;
}

console.log(convert(123456123));
console.log(convertArr(123456123));
