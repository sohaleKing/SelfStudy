/*Truthy Falsy
All values are truthy unless they are defined as falsy
the 6 falsy values: false, 0, "", undefined, null, NaN
 */
const falsy = [false, 0, "", undefined, null, NaN]

function truthyOrFalsy(input) {
    let value = true
    if (falsy.includes(input)) {
        value = false
    }
    return value
}

/* short-circuiting - in javaScript the result of true || **** would be always true without looking on the right hand side
of logical OR operator and likely false && **** would be always false without checking the rest
 */
//import {user1} from './Exporting_Variables';
//console.log(user1)


