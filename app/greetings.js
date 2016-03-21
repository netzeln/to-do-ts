var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    ;
    Greeter.prototype.greet = function () {
        return "Hello, " + this.message;
    };
    return Greeter;
}());
var greeters = [];
greeters.push(new Greeter("world"));
greeters.push(new Greeter("I love you, won't you tell me your name"));
greeters.push(new Greeter("is it me you're looking for"));
console.log(greeters);
for (var _i = 0, greeters_1 = greeters; _i < greeters_1.length; _i++) {
    var greeter = greeters_1[_i];
    alert(greeter.greet());
}
