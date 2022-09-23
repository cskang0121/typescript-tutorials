"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Person.prototype.output = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName, " ").concat(this.age));
    };
    return Person;
}());
exports["default"] = Person;
