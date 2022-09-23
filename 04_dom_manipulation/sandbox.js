var form = document.querySelector('form');
var username = document.querySelector('#username');
var degree = document.querySelector('#degree');
form.onsubmit = function (e) {
    e.preventDefault();
    console.log("username: ".concat(username.value, " \n degree: ").concat(degree.value));
};
