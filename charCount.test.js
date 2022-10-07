const stringLength = require('./charCount')
let error;
test('return the length of entered string', () => {
    expect(stringLength('coding')).toBe(6);
})

test('string length should not be lease then 1', () => { 
    expect(stringLength('a')).toBe(1);
 })

 test('string length should be greater than 10', () => { 
    expect(stringLength('hello microverse')).toBe(error);
 })