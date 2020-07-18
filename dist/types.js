"use strict";
// boolean (true/ false)
var isOpen;
isOpen = true;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number (int, float, hex, binary)
var total;
total = 0xff0;
// array (type[])
var items;
items = ['foo', "bar"];
var values;
values = [1, 2, 3];
//tuple
var title;
title: [1, 'foo', 'bar'];
// enum
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["black"] = "#000";
})(Color || (Color = {}));
// any (Anything) It is not cool
var thing;
thing = 2;
// void (empty) 
function logger() {
    console.log('foo');
}
// never
function error() {
    throw new Error('Error');
}
// object
var cart;
cart = {
    key: 'fi'
};
// type inference
var message2 = 'defined message';
message2 = 'new string';
window.addEventListener('click', function (e) {
    console.log(e.target);
    console.log(e.foo); /* does not exist foo in MouseEvent */
});
