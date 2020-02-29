const myCep = "96040750";

function searchCep(myCep,num){
  const cep = myCep;  
    if(cep.length == 8){
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res)=>res.json())
        .then(data=>{
            console.log(`${data.logradouro}, ${num}, ${data.localidade}/${data.uf}`);
        })
    }
}

searchCep(myCep,256);