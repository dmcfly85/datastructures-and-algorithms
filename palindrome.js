

let test1 = "tacocat";
let test2 = "noapal";


let isPal = (str) =>{
  let slen = str.length

  if(slen === 0 || slen === 1){
    return true
  }

  if(str[0] === str[slen - 1]) {
    return isPal(str.slice(1, slen -1))
  }

  return false

}

console.log(isPal('c'))
console.log(isPal(test1))
console.log(isPal(test2))
