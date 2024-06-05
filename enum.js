var color;
(function (color) {
    color["orange"] = "orange";
    color["red"] = "red";
    color["purple"] = "purple";
})(color || (color = {}));
var Error;
(function (Error) {
    Error[Error["notfound"] = 404] = "notfound";
    Error[Error["badgateway"] = 502] = "badgateway";
})(Error || (Error = {}));
var BBQMenu;
(function (BBQMenu) {
    BBQMenu["roll"] = "roll";
    BBQMenu["beefroll"] = "beefroll";
    BBQMenu["malaiboti"] = "malaiboti";
    BBQMenu["tikka"] = "tikka";
})(BBQMenu || (BBQMenu = {}));
let hamzaOrder = BBQMenu["beefroll"];
console.log(hamzaOrder);
var barbqMenu;
(function (barbqMenu) {
    barbqMenu["tikka"] = "tikka";
    barbqMenu["bihariboti"] = "bihariboti";
    barbqMenu["beefbiryani"] = "beefbiryani";
    barbqMenu["paratha"] = "paratha";
    barbqMenu["raita"] = "raita";
})(barbqMenu || (barbqMenu = {}));
let ibrahimOrder = [barbqMenu.tikka,
    barbqMenu.paratha, barbqMenu.raita
];
console.log(ibrahimOrder);
var MENU;
(function (MENU) {
    MENU["ROLL"] = "roll";
    MENU["BEEFROLL"] = "beefroll";
    MENU["MAALAIBOTI"] = "malaiboti";
    MENU["TIKKA"] = "tikka";
})(MENU || (MENU = {}));
var REVIEW;
(function (REVIEW) {
    REVIEW[REVIEW["BAD"] = 0] = "BAD";
    REVIEW[REVIEW["GOOD"] = 1] = "GOOD";
    REVIEW[REVIEW["DELICIOUE"] = 2] = "DELICIOUE";
})(REVIEW || (REVIEW = {}));
let shaheerOrder = {
    order: [MENU.BEEFROLL, MENU.MAALAIBOTI, MENU.ROLL],
    payment: 100,
    review: REVIEW.GOOD
};
console.log(shaheerOrder);
var Roles;
(function (Roles) {
    Roles["admin"] = "admin";
    Roles["normalUser"] = "normalUser";
})(Roles || (Roles = {}));
let user1 = {
    username: "tehreem",
    password: "456789",
    role: Roles.normalUser
};
let user2 = {
    username: "areeba",
    password: "123456",
    role: Roles.admin
};
console.log(user1);
console.log(user2);
export {};
