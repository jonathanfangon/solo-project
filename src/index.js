const something = {
    message: 'Wazzup'
}

const somethingElse = {
    ...something,
    isAwesome: 'facts',
    message: 'Yurr'
}

console.log(something);
console.log(somethingElse);