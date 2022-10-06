const capitalize = require('./capitalize');

test('capitalize first litter of String', () => {
    expect(
        capitalize('stanley') 
    ).toBe('Stanley');
});