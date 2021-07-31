const { format_date, format_url } = require('../utils/helpers')

// creating test to that format_date() takes Date() objects and returns dates in MM/DD/YYYY
test('format_date() returns a date string', () => {
    const date = new Date('2021-07-29 23:12:03');

    expect(format_date(date)).toBe('7/29/2021');
});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('https://www.microsoft.com/');
    const url2 = format_url('https://www.google.com');
    const url3 = format_url('https://www.yahoo.com');

    expect(url1).toBe('microsoft.com');
    expect(url2).toBe('google.com');
    expect(url3).toBe('yahoo.com');
});