enum color {
    orange = "orange",
    red = "red",
    purple = "purple"
}

enum Error {
    notfound = 404,
    badgateway = 502
}

enum BBQMenu {
    roll = "roll",
    beefroll= "beefroll",
    malaiboti= "malaiboti",
    tikka= "tikka",
}
let hamzaOrder: BBQMenu = BBQMenu["beefroll"]
console.log(hamzaOrder);

enum barbqMenu {
    tikka = "tikka",
    bihariboti = "bihariboti",
    beefbiryani = "beefbiryani",
    paratha = "paratha",
    raita = "raita"
}
let ibrahimOrder: barbqMenu[] =[barbqMenu.tikka,
     barbqMenu.paratha, barbqMenu.raita
]
console.log(ibrahimOrder);

enum MENU {
    ROLL = "roll",
    BEEFROLL = "beefroll",
    MAALAIBOTI = "malaiboti",
    TIKKA = "tikka",
}
enum REVIEW {
    BAD,
    GOOD,
    DELICIOUE,
}
type Order ={
    order: MENU[],
    payment: number[],
    review:REVIEW
}
let shaheerOrder:Order={
    order: [MENU.BEEFROLL,MENU.MAALAIBOTI,MENU.ROLL],
    payment: [100, 250, 80],
    review: REVIEW.GOOD
}
console.log(shaheerOrder);

enum Roles {
    admin = "admin",
    normalUser = "normalUser",
}
type loginInfo = {
    username: string,
    password: string,
    role: Roles
}
let user1: loginInfo = {
    username: "tehreem",
    password: "456789",
    role: Roles.normalUser
}
let user2: loginInfo = {
    username: "areeba",
    password: "123456",
    role: Roles.admin
}
console.log(user1);
console.log(user2);

enum MENUCARD {
     KEBABFRY= "kebabfry",
     BIRYANI= "biryani",
     CHICKENPULAO= "chickenpulao",
     SHAMIKEBAB= "shamikebab",
     TIKKA= "tikka",
     ZINGERBURGER= "zingerburger",
     FRENCHFRIES= "frenchfries",
     COLDDRINK= "colddrink",
}
enum CUSTOMREVIEW {
     TASTY,
     YUMMY,
     DELECIOUS,
     NOTGOOD,
}
type customOrder = {
     order: MENUCARD[],
     payment: number[],
     review: CUSTOMREVIEW[]
}
let asmaOrder: customOrder= {
    order: [MENUCARD.ZINGERBURGER, MENUCARD.FRENCHFRIES, MENUCARD.COLDDRINK],
    payment: [450, 100, 100],
    review: [CUSTOMREVIEW.DELECIOUS, CUSTOMREVIEW.YUMMY]
}
console.log(asmaOrder);