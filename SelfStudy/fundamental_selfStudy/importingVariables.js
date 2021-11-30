import { user1 } from "./exportingVariables.js"
import { user2 as tazz, Bella } from "./exportingVariables.js" //you can alias it here!!
import { exportedFunction } from "./exportingVariables.js"
import { arrayOfUsers } from "./exportingVariables.js"

console.log("user1 = ", user1)
console.log("user2 = ", tazz)
exportedFunction("users array = ", arrayOfUsers)

//you need a server like liveserver to see this!!
//normal JS running will throw the error of SyntaxError: Cannot use import statement outside a module
/*if you do it without a server will throw another error of accessing to has been blocked by CORS policy:
Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https. */
