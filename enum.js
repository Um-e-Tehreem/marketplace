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
    payment: [100, 250, 80],
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
var MENUCARD;
(function (MENUCARD) {
    MENUCARD["KEBABFRY"] = "kebabfry";
    MENUCARD["BIRYANI"] = "biryani";
    MENUCARD["CHICKENPULAO"] = "chickenpulao";
    MENUCARD["SHAMIKEBAB"] = "shamikebab";
    MENUCARD["TIKKA"] = "tikka";
    MENUCARD["ZINGERBURGER"] = "zingerburger";
    MENUCARD["FRENCHFRIES"] = "frenchfries";
    MENUCARD["COLDDRINK"] = "colddrink";
})(MENUCARD || (MENUCARD = {}));
var CUSTOMREVIEW;
(function (CUSTOMREVIEW) {
    CUSTOMREVIEW[CUSTOMREVIEW["TASTY"] = 0] = "TASTY";
    CUSTOMREVIEW[CUSTOMREVIEW["YUMMY"] = 1] = "YUMMY";
    CUSTOMREVIEW[CUSTOMREVIEW["DELECIOUS"] = 2] = "DELECIOUS";
    CUSTOMREVIEW[CUSTOMREVIEW["NOTGOOD"] = 3] = "NOTGOOD";
})(CUSTOMREVIEW || (CUSTOMREVIEW = {}));
let asmaOrder = {
    order: [MENUCARD.ZINGERBURGER, MENUCARD.FRENCHFRIES, MENUCARD.COLDDRINK],
    payment: [450, 100, 100],
    review: [CUSTOMREVIEW.DELECIOUS, CUSTOMREVIEW.YUMMY]
};
console.log(asmaOrder);
export {};
