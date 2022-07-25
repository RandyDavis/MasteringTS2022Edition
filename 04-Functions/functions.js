function square(num) {
    return num * num;
}
function greet(person) {
    return "Hello, ".concat(person, "!");
}
var doSomething = function (person, age, isFunny) {
    return "".concat(person, " is ").concat(age, " and is ").concat(isFunny ? 'funny' : 'not funny', ".");
};
square(3);
greet('Max');
doSomething('Max', 30, true);
