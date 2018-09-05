const Dragon = require('./dragon.js');

//need to be in curly braces with argument specified
const fooey = new Dragon({ 
    birthdate: new Date(), 
    nickname: 'fooey'
}, 3000);

setTimeout(() => {
    const gooby = new Dragon();
    console.log('gooby: ', gooby);
})
//order doesn't matter!
const baloo = new Dragon({ 
    nickname: 'baloo', 
    birthdate: new Date()
});

const mimar = new Dragon();


console.log('fooey: ', fooey);
console.log('baloo: ', baloo);

console.log('mimar: ', mimar);
