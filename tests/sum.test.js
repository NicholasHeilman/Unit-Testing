const sum = require('../modules/sum');

// take two integers and add them together
test('take two integers and add them together', () => {
   expect(sum(1,2)).toBe(3);
});

test('take a string, and not concat', () => {
   expect(sum('1', 2)).toBe(3);
   expect(sum('2','3')).toBe(5)
})

test('sum (with only 1 value) using 3 gives 3', () => {
   expect( sum(3) ).toBe( 3 );
 });

 test('non integers', () => {
    expect(sum('kitty', 'foo')).toBe(NaN)
 })