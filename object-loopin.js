// array vs object
var shoppingItems = ["books", "sunglass", "keyboard", "mouse", "pen", "shoes"];
var friendsAge = [12, 45, 78, 12, 32, 14];
var friendsAge = {
  rahim: 12,
  samad: 45,
  karim: 78,
  jamal: 12,
  robi: 32,
  kazi: 14,
};

var shoppingCart = {
  books: 3,
  sunglass: 1,
  keyboard: 5,
  mouse: 1,
  pen: 25,
  shoes: 2,
};

const keys = Object.keys(shoppingCart);
console.log(keys);
