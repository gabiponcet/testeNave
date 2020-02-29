const people = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
  ]
  
  const sumAges = people => {
      const ages = people.reduce( (total, { idade })=>{
          return total + idade
      }, 0)
      console.log(ages)
  }
  
  sumAges(people)