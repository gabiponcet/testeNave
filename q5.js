const dic = { 4: 'a', 3: 'e', 1: 'i', 5: 's' };


const traduz =  str => {
  const array = Object.entries(dic)
  array.forEach(item =>{
    const flag = new RegExp(item[0],'g')
    str = str.replace(flag, item[1])
  })
  console.log(str)
}

traduz("T35t3 d3 35t4g1o")