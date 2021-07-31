const {format_date} = require('../utils/helpers')

// creating test to that format_date() takes Date() objects and returns dates in MM/DD/YYYY
test('format_date() returns a date string', () => {
    const date = new Date('2021-08-27 16:12:03');
    
    expect(format_date(date)).toBe('8/27/2021');
});