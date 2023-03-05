const v= require('validator')
const {name , add , sayName} = require('./utils')

const addNo = add(2,3)
const sayNames = sayName('Kishan')

console.log(name)
console.log(addNo)
console.log(sayNames)

console.log(v.isEmail("sdd"))
console.log(v.isURL('SSS'));

// const fs= require('fs')
// fs.writeFileSync("notes.txt","My name is kishan gupta")
// fs.appendFileSync('notes.txt',"I am best and I love luteshna")
