// // variables

// // syntax
// // varible deifne
// let totalPrice = 10;

// totalPrice = totalPrice + 2;
// let addedPrice = totalPrice + 14;
// console.log(totalPrice);

// // varible update
// //varibleName = "updatedValue";
// totalPrice = 14;
// console.log(totalPrice);

// // var -> developer does not prefer to use it. we will never use it.
// // we can not  update const variables
// const daysOfWeek = 7;

// // thngs to remeber while creatring variables
// // keywords -> let, const, document, var if, for...
// // a-z,A-Z, 0-9, $ , _,
// // you can not start variable name with numbers
// // variables are case senstive
// // most dveloper follow camelCase syntax to name a varable;

// let test = "SONU YADAV";

// SOME IMPORTANT POINT TO REMEBER
// var userName = "sonuyadav51";

// var userName = "shivam123@";
// this will throw and error
// let x = 10;
// var x = 5;
//--------- this will not thriow error
// var x = 10;
// var x = 5;
// --- this will throw error
// var x = 15;
// let x = 17;

// let x;
// x = 5;
// // undefined, not definde
// console.log(x);

// hoisting
// - hoisting is posible with var keyword;
// - hositing is not possible with let or const
//  y = 15;
// console.log(y);

// var y = 10;

// scopes

// - GLOBAL SCOPE
// - LOCAL SCOPE

// - BLOCK SCOPE

//----------------
// globle scope variable
// var users = "sonu yadav";
// let x = 15;
// const v = 11;

// function test() {
//     // local variable
//   var localVariable = "jarvis";
//   //   console.log(localVariable);
// }
// // this will trown erro bc localVariable is local variable
// console.log(localVariable);
// test();
// block

{
  let y = 5;
  console.log("block: ", y);
}
y = 15;

console.log("global ", y);
