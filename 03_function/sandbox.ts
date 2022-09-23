/* Function keyword 
- Function: Define the datatype during declaration
    - Regular function OR
    - Arrow function
- function: Construct regular function 
*/

let func: Function

// Regular function 
func = function() {
    console.log('chin shen')
}

// Arrow function
// func = () => {
//     console.log('chin shen')
// }

func()




/* Optional Parameters */
let funcParam = (a: number, b?: number, c?: number) => { console.log(a, b, c) }

// Skip optional parameters 
funcParam(1, undefined, 2)




/* Default Parameters */
let funcDefault = (a: number, b: number=10) => { console.log(a, b) }

funcDefault(1)




/* Return Type */
let funcReturn = (bool: boolean):number|string => { return bool ? 1 : 'one' }