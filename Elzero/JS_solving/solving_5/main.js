let txt = "hammaM moKhTar@ alalem";


function removeRexp (text,char){
    let re = /\\ ("(df)")/
    text = text.replaceAll(/char/ig,'');
    return text;
}

function removeArr(text,char){
    text = text.split(char.toUpperCase()).join('')
    text = text.split(char.toLowerCase()).join('');
    return text
}

function removeFillter(text,char){
    text = text.split('').filter(function(el){
        return el.toLowerCase() !== char.toLowerCase();
    }).join('');
    return text;
}

console.log(removeRexp(txt,'m'));
console.log(removeArr(txt,'m'));
console.log(removeFillter(txt,'m'));


