"use strict";
var Whatever;
(function (Whatever) {
    var printProduct = function (product) {
        console.log("".concat(product.name, " - R$").concat(product.price));
    };
})(Whatever || (Whatever = {}));
