let string1 = 'Gabi'
let string2 = 'Pablo'

function stringLength(string1, string2){

    const str1 = string1.replace(/\s/g,"")
    const str2 = string2.replace(/\s/g,"")
    
    str1.length>str2.length ? console.log(str1) : console.log(str2)
   
};

stringLength(string1,string2)