import { useState } from 'react';

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

import React from 'react';

const Recipes = () => {
    return (
        <div>
            What it do man
        </div>
    )
}

export default Recipes;