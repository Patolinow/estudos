"use strict";
var stats = 2 /* OrderStatus.DELIVERD */;
function isDelivered(stats) {
    return stats === 2 /* OrderStatus.DELIVERD */;
}
isDelivered(3 /* OrderStatus.RETURNED */);
var ArrowKeys;
(function (ArrowKeys) {
    ArrowKeys["UP"] = "w";
    ArrowKeys["DOWN"] = "s";
    ArrowKeys["LEFT"] = "a";
    ArrowKeys["RIGHT"] = "d";
})(ArrowKeys || (ArrowKeys = {}));
ArrowKeys.LEFT;
var order = {
    orderNumber: 234323432,
    status: 0 /* OrderStatus.PENDING */
};
var order2 = {
    orderNumber: 123123534,
    status: 2 /* OrderStatus.DELIVERD */
};
