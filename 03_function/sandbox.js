/* Function keyword
- Function: Define the datatype during declaration
    - Regular function OR
    - Arrow function
- function: Construct regular function
*/
var func;
// Regular function 
func = function () {
    console.log('chin shen');
};
// Arrow function
// func = () => {
//     console.log('chin shen')
// }
func();
/* Optional Parameters */
var funcParam = function (a, b, c) { console.log(a, b, c); };
// Skip optional parameters 
funcParam(1, undefined, 2);
/* Default Parameters */
var funcDefault = function (a, b) {
    if (b === void 0) { b = 10; }
    console.log(a, b);
};
funcDefault(1);
/* Return Type */
var funcReturn = function (bool) { return bool ? 1 : 'one'; };
