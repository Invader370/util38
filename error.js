var util = require('util')

var phrases = {
    "Hello" : "Привет",
    "world" : "мир"
};

function phraseError(message) {
    this.message = message;
}
util.inherits(phraseError, Error);

function httpError(status, message) {
    this.status = status;
    this.message = message;

}

util.inherits(httpError, Error);



function getPhrase(name) {
    if(!phrases[name]) {
        throw new phraseError("Нет такого слова в словаре");
    }
    return phrases[name];
}

function makePage(url) {
    if(url !== "index.html") {
        throw new httpError("Нет такой страницы");
    }
    return util.format("%s, %s!", getPhrase("Hello"), getPhrase("world"));
}

try {
    var page = makePage("index.html");
    console.log(page);
} catch(e) {
    if(e instanceof httpError) {
        console.log(e.status, e.message);
    } else {
        console.log("Ошибка %s\n сообщение: %s\n стек : %s", e.name, e.message, e.stack);
    }
}


