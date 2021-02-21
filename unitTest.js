
let Greet = (name) => {
    if(name === null) {
        return ('Hello there!');
    }
    
    if(Array.isArray(name)) {
        return ('Hello,' + name);
    }

    if(name === name.toUpperCase()) {
        return ('HELLO ' + `${name}!`);
    }

    else{
        return ('Hello, ' + `${name}`);
    }
};

module.exports = Greet;