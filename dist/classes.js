"use strict";
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    UserAccount.prototype.logDetails = function () {
        console.log("The player " + this.name + " is " + this.age + " years old");
    };
    return UserAccount;
}());
var Emmanuel = new UserAccount('Emmanuel Kant', 24);
console.log(Emmanuel);
console.log(Emmanuel.name);
console.log(Emmanuel.age);
console.log(Emmanuel.logDetails());
