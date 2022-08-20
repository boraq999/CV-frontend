let letter = "abcdefghijklmnopqrstuvwxyz";// 26
let litterMissing ;



document.getElementById('form').onsubmit = function(){
    let inputTxt = document.getElementById('input').value;
    litterMissing = check(inputTxt)
    function check(txt){
        let start = letter.indexOf(txt[0]);             //Starting Serch
        let end  = letter.indexOf(txt[txt.length-1]);   //Finshing Serch
        let message = 0;    // 0:No Missing message > 0:Found Missing Letter 
        let missing = [];
        
        for (let i = start; i <= end; i++){
            let valid = txt.includes(letter[i]); //Start Serching
            if (valid === false){
                message += 1;
                missing.push(letter[i])
                console.log(`Missing Letter ${message}: ${letter[i]}`);
            }
        }
        if (message > 0){
            return missing;
        }
        return console.log("No Missing Letter In Squence");
    }

    document.getElementById('missing').innerHTML = litterMissing;

    return false;
}







