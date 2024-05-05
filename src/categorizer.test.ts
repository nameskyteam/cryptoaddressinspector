import categorizeChar from './categorizer';

describe('categorizeChar', () => {
  test('correctly categorizes numbers', () => {
    expect(categorizeChar('1')).toBe('number');
  });

  test('correctly categorizes uppercase alphabets', () => {
    expect(categorizeChar('A')).toBe('uppercase alphabet');
  });

  test('correctly categorizes lowercase alphabets', () => {
    expect(categorizeChar('a')).toBe('lowercase alphabet');
  });

  test('correctly categorizes whitespace', () => {
    expect(categorizeChar(' ')).toBe('whitespace');
    expect(categorizeChar('\n')).toBe('whitespace');
    expect(categorizeChar('\t')).toBe('whitespace');
  });

  const punctuationTests = [
    { char: '.', expected: 'dot character' },
    { char: ',', expected: 'comma' },
    { char: ':', expected: 'colon' },
    { char: ';', expected: 'semicolon' },
    { char: '!', expected: 'exclamation mark' },
    { char: '?', expected: 'question mark' },
    { char: '"', expected: 'double quote' },
    { char: "'", expected: 'single quote' },
    { char: '(', expected: 'opening parenthesis' },
    { char: ')', expected: 'closing parenthesis' },
    { char: '[', expected: 'opening square bracket' },
    { char: ']', expected: 'closing square bracket' },
    { char: '{', expected: 'opening curly bracket' },
    { char: '}', expected: 'closing curly bracket' },
    { char: '<', expected: 'opening angle bracket' },
    { char: '>', expected: 'closing angle bracket' },
    { char: '/', expected: 'forward slash' },
    { char: '\\', expected: 'backslash' },
    { char: '|', expected: 'pipe' },
    { char: '*', expected: 'asterisk' },
    { char: '+', expected: 'plus' },
    { char: '=', expected: 'equal' },
    { char: '&', expected: 'ampersand' },
    { char: '^', expected: 'caret' },
    { char: '%', expected: 'percent' },
    { char: '$', expected: 'dollar' },
    { char: '~', expected: 'tilde' },
    { char: '`', expected: 'backtick' },
    { char: '#', expected: 'hash symbol' },
    { char: '@', expected: 'at symbol' },
    { char: '-', expected: 'dash symbol' },
    { char: '_', expected: 'underscore symbol' }
  ];

  punctuationTests.forEach(({ char, expected }) => {
    test(`correctly categorizes '${char}' as ${expected}`, () => {
      expect(categorizeChar(char)).toBe(expected);
    });
  });

  test('correctly categorizes emojis', () => {
    expect(categorizeChar('😊')).toBe('emoji');  // You can add more emojis for thorough testing
  });

  test('correctly categorizes unknown characters', () => {
    expect(categorizeChar('あ')).toBe('unknown');  // Non-Latin character
    expect(categorizeChar('')).toBe('unknown');  // Empty string
  });
});
