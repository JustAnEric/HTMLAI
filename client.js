/**
  @name HTMLAI
  @author HTML AI Employees
  @copyright HTMLAI
  @version 1.0.0
  @readonly
  @description API for HTML and JavaScript, AI text rendering.
**/

const changelog = {};
const userAgent = navigator.userAgent;
const tracking = navigator.doNotTrack;
let intents = [
    {"response": "Hello!", "words": ["hello"]}
]; // filled with simple intents
let errors = {};

if (tracking == true) {
    // not allowed to track user
    console.log("User tracking is off.")
    reportError(`Tracking (which is ${tracking}) is not allowed.`)
}

const AI__SET_INTENTS = (function(i) {
    intents = i;
});

class html {
    // class for html
    constructor() {}
    AI(){
        console.log("AI has been registered.")
        return class {
            constructor(details) {
                this.details = details;
            }
            run(string, callback) {
                let lw = string.toLowerCase();
                let each = lw.split(" ");
                // search for intents
                for (const i of intents) {
                    let matched = null;
                    for (const i2 of i.words) {
                        //check each word for a match
                        if (lw.includes(i2.toLowerCase())) {
                            matched = {
                                word: i2,
                                wordIndex: i.words.indexOf(i2)
                            }
                        }
                    }
                    if (matched) {
                        // there was a match in the words list/array
                        if (i.words.includes(matched.word)) {
                            if (i.command) {
                                // there is a command after to be executed
                                i.command();
                            }
                            return i.response;
                        }
                    }
                } 
                // no intents found as not expected
                callback("NO_INTENT_RESULT"); // this gives the error message back to the origin script.
                return "An error was returned privately back to the client."
            }
            randomResponse(list) {
                return list[Math.floor(Math.random()*list.length)];
            }
        }
    }
}
/*
module.exports = {
    html:html
}
*/