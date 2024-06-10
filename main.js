function validBraces(braces){
    const checker = {
    '(' : ')',
    '{' : '}',
    '[' : ']',
    default: false,
  }
  braces = braces.split('')
  
  while (braces.length){
    let checkerBraces = checker[braces[0]]
    
    if (!checkerBraces) return false
    if (!braces.includes(checkerBraces)) return false
    
    //Count the numbers of left side and make the right match the number
    let checkerIndex = braces.indexOf(checkerBraces)
    let checkerLeft = 0
    while (true){
      for (let i = 0; i < braces.slice(0, checkerIndex + 1).length; i++){
        if (checker[braces[i]])
          {
            ++checkerLeft
          }
      }
      if (checkerLeft * 2 == braces.slice(0, checkerIndex + 1).length)
        {
          braces = braces.slice(checkerIndex + 1)
          break
        }
      else if (braces.includes(checkerBraces, checkerIndex + 1)){
        checkerIndex = braces.indexOf(checkerBraces, checkerIndex + 1)
        checkerLeft = 0
      }
      else{
        return false
      }
    }  
  }
  return true
  
}


/*
function validBraces(braces){
    const checker = {
    '(' : ')',
    '{' : '}',
    '[' : ']',
  }
  braces = braces.split('')
  
  while (braces.length){
    if (braces.includes(checker[braces[0]]))
      {
        const checkIndex = braces.indexOf(checker[braces[0]])
        if (checkIndex - 1 != 0)
          { 
            let checkEveryPossibility = 0
            
            while (braces.includes(checker[braces[0]], checkEveryPossibility)){
              const repeat = braces.slice(1, checkIndex).join('').toString()
              if (validBraces(repeat))
                {
                  braces = braces.slice(checkIndex + 1)
                  break
                }
              else{
                ++checkEveryPossibility
              }
            }
            if (!braces.includes(checker[braces[0]], checkEveryPossibility)){
              console.log ('i am here')
              return false
            }
          }
        else{
          braces = braces.slice(2)
        }
      }
    else return false
  }
  return true
  
}



*/


/*function validBraces(braces){ //Didn't work
  const checker = {
    '(' : ')',
    '{' : '}',
    '[' : ']',
  }
  
  for (let i = 0; i < braces.length; i++){
    console.log(i)
    if (braces[i] != undefined && braces.slice(i).includes(checker[braces[i]]))
      {
        const checkIndex = braces.slice(i).indexOf(checker[braces[i]])
        if (i == checkIndex - 1) i = checkIndex + 1
        else if (validBraces(braces.slice(i + 1, checkIndex)))
          {
            i = checkIndex
          }
        else{
          return false
        }
      }
    else{
      return false
    }
  }
  return true
}
*/