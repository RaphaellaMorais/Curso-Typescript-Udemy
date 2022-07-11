"use strict";
function showError(message) {
    throw new Error(message);
}
console.log("==========================");
let n = 0;
function loopInfinito() {
    while (true) {
        console.log(n++);
    }
}
//# sourceMappingURL=type_never.js.map