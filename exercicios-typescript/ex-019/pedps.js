"use strict";
const evenDigitSquares = (a, b) => {
    function allEven(n) {
        let digs = n.toString().split('');
        let oddDigs = ["1", "3", "5", "7", "9"];
        for (let i in oddDigs) {
            let dS = oddDigs[i];
            if (digs.indexOf(dS) != -1)
                return false;
        }
        return true;
    }
    function evenDigitSquaresMine(a, b) {
        let lim1 = Math.floor(Math.sqrt(a)), lim2 = Math.ceil(Math.sqrt(b));
        let res = [];
        for (let i = lim1; i <= lim2; i++) {
            let ii = Math.pow(i, 2);
            if (a <= ii && ii <= b && allEven(ii))
                res.push(ii);
        }
        return res;
    }
    return evenDigitSquaresMine(a, b);
};
function assert(x, y) {
    x.join("") === y.join("") ? console.log("passed!") : console.error(`expected "${x}" deeply equal to "${y}"`);
}
assert(evenDigitSquares(100, 1000), [400, 484]);
assert(evenDigitSquares(1000, 4000), []);
assert(evenDigitSquares(10000, 40000), [26244, 28224, 40000]);
//# sourceMappingURL=pedps.js.map