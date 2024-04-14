// this programme make a function to add a specific num
function makeadder(valuetoadd) {
    //this is a magic box it take num and add special num
    return function (numberr) {
        return numberr + valuetoadd;
    };
}
// this is a magic box that added 5
var add5 = makeadder(5);
console.log(add5(10));
// if we put 10 it give a 15 because we added 5
// this is a magic box that added 10
var add10 = makeadder(10);
console.log(add10(10));
// if we put 10 it give a 20 because we added 10
// this is a magic box that added 15
var add15 = makeadder(15);
console.log(add15(10));
// if we put 10 it give a 25 because we added 15
// this is a magic box that added 20
var add20 = makeadder(20);
console.log(add20(10));
// if we put 10 it give a 30 because we added 20
// this is a magic box that added 25
var add25 = makeadder(25);
console.log(add25(10));
// if we put 10 it give a 35 because we added 25
// this is a magic box that added 30
var add30 = makeadder(30);
console.log(add30(10));
// if we put 10 it give a 40 because we added 30
// this is a magic box that added 35
var add35 = makeadder(35);
