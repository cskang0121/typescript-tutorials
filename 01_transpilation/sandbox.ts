/* Transpile
tsc sandbox.ts OR 
tsc sandbox.ts -w to avoid manual transpilation
*/

const names = document.querySelectorAll('h2')

names.forEach(name => {
    console.log(name.innerHTML)
})

