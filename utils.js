console.log("utils")
const name ="kishan"
const add = function add(a,b) {
    return a+b
}

const sayName = function sayName(name) {
    return `Your name is ${name}...`
}
module.exports = {name,add,sayName}