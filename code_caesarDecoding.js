const stringToEncrypt = 'Programming';
let key = 13
function caesarCode (text, key){

    const alphabet = [
    'A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h',
    'I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p',
    'Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x',
    'Y','y','Z','z',''
    ];

    let result = ''
    for (let i = 0; i < text.length; i++){
        const newIndex =(alphabet.indexOf(text[i])+ key) % alphabet.length;
        result += alphabet[newIndex]  
    }

    return result 

}

const cipher = caesarCode(stringToEncrypt, key);
console.log (cipher); 

function caesarDecoding (text, key){
    const abc = [
    'A','a','B','b','C','c','D','d','E','e','F','f','G','g','H','h',
    'I','i','J','j','K','k','L','l','M','m','N','n','O','o','P','p',
    'Q','q','R','r','S','s','T','t','U','u','V','v','W','w','X','x',
    'Y','y','Z','z',''
    ];
    let result1 = "";
    for (let i = 0; i < text.length; i++){
        const newIndex1 = (abc.indexOf(text[i]) - key + abc.length ) % abc.length
        result1 += abc[newIndex1]
    }

    return result1

}

const decoding = caesarDecoding(cipher, key);
console.log (decoding); 
