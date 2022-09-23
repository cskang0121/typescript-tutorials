/* Transpile
tsc sandbox.ts OR
tsc sandbox.ts -w to avoid manual transpilation
*/
var names = document.querySelectorAll('h2');
names.forEach(function (name) {
    console.log(name.innerHTML);
});
