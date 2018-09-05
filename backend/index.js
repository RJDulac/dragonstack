const Dragon = require('./dragon.js');

//need to be in curly braces with argument specified
const fooey = new Dragon({ 
    birthdate: new Date(), 
    nickname: 'fooey'
});
//order doesn't matter!
const baloo = new Dragon({ 
    nickname: 'baloo', 
    birthdate: new Date()
});

console.log('fooey: ', fooey);
console.log('baloo: ', baloo);