const str = "teste 1 de 2 string 3";
const array = str.split('');

const finalArray = array.map( i => {
  let test = parseInt(i); 
  if(test){
    i = '[removido]';
  }  
  return i;
});


const final = finalArray.join('');
console.log(final);

