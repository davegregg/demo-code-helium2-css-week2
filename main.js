/*
 · WHY functions?
    + You don't want to type the same code over and over.
    + We can use OTHER people's functions from a LIBRARY (our old functions from previous projects) so that we don't have to reinvent them!
    + To reuse the code in the future.
    + Help make the code cleaner (to organize your code).
    + Separation of concerns – a function should only care about one thing and do it well. (A "paragraph" of code.)
    + A function allows us to NAME a whole set of code.
        - Modularization: Break up a LOT of something into smaller pieces.
 · An example of when you DON'T need a return.
 · USING what a function returns.
 · TESTING what a function returns (to see if it meets our expectations)
 · Where should the return statement be, when you have complex IFs
 · Calling functions within functions?
 · A function inside of an IF statement? or a FOR loop?
 · A loop inside a function.
 · Talk a bit about SCOPE
 · Define a function inside a function?
*/

function passThrough (thing) {
    console.log(thing)

    return thing
}

// let sum = 4 + 5
let sum = 4 + passThrough(5)

function log (description, thing) {
    console.log(description + ":", thing)

    return thing
}

let cats = ["Sir  Pickles", "Questionable Ethics", "Trouble", "Pumpkin"]

log("Array of cats", cats)

// capitalize the first letter of the word
// lowercase the rest: Pascal Case
function toTitleCase (word) {
    let firstLetter = log("First letter", word[0]).toUpperCase()
    let rest = word.slice(1).toLowerCase()

    return firstLetter + rest
}

log(
    "toTitleCase('josh') should return 'Josh'",
    toTitleCase("josh") === "Josh"
)

log(
    "toTitleCase('bRADley') should return 'Bradley'",
    toTitleCase("bRADley") === "Bradley"
)

// let usersName = prompt("What is your given name?")
// let correctedUsersName = toTitleCase(usersName)
// console.log(correctedUsersName)