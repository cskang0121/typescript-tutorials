var myFunc = function (username, age) {
    console.log("username: ".concat(username, ", age: ").concat(age));
};
var arr = ['kangchinshen', 22];
var tup = ['kangchinshen', 22];
myFunc.apply(void 0, tup);
