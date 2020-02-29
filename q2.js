
function sumLengthString(var1,var2){
    let one =var1.length;
    let two = var2.length;
    return one + two;
  }
  
  function fullString(sum,string1,string2){
      console.log(sum(string1,string2));
      console.log(string1+' '+string2);
  }
  fullString(sumLengthString,'Gabriela', 'Poncet');