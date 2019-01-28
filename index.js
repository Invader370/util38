var util = require('util');

var obj = {
    a: 5,
    b: "Test",
    test: function() {
        return 123;
    }
};

console.log(util.inspect(obj));
console.log(obj)