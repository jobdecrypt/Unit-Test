var greet = require('./unitTest.js')

describe('test greet()', () => {
    test('should be called', () => {
        expect(greet('Elizabeth')).toBe('Hello, Elizabeth')
    });

    test('if the argument is null, it should return', () => {
        expect(greet(null)).toBe('Hello there!')
    });

    test('if the argument is in Capital Letters', () => {
        expect(greet('JOSE')).toBe('HELLO JOSE!')
    });

    test('if the argument is an Array', () => {
        expect(greet(['Jose','Pep'])).toBe('Hello,Jose,Pep')
    });

    test('if the argument have multiple parameters', () => {
        expect(greet(['Alex','Arsene','Jose','Zidane'])).toBe('Hello,Alex,Arsene,Jose,Zidane')
    })    

});