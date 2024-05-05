export default function categorizeChar(char: string) {
  if (/^\d$/.test(char)) return 'number';
  if (/^[A-Z]$/.test(char)) return 'uppercase alphabet';
  if (/^[a-z]$/.test(char)) return 'lowercase alphabet';
  if (/^\s$/.test(char)) return 'whitespace';
  switch (char) {
    case '.':
      return 'dot character';
    case ',':
      return 'comma';
    case ':':
      return 'colon';
    case ';':
      return 'semicolon';
    case '!':
      return 'exclamation mark';
    case '?':
      return 'question mark';
    case '"':
      return 'double quote';
    case "'":
      return 'single quote';
    case '(':
      return 'opening parenthesis';
    case ')':
      return 'closing parenthesis';
    case '[':
      return 'opening square bracket';
    case ']':
      return 'closing square bracket';
    case '{':
      return 'opening curly bracket';
    case '}':
      return 'closing curly bracket';
    case '<':
      return 'opening angle bracket';
    case '>':
      return 'closing angle bracket';
    case '/':
      return 'forward slash';
    case '\\':
      return 'backslash';
    case '|':
      return 'pipe';
    case '*':
      return 'asterisk';
    case '+':
      return 'plus';
    case '=':
      return 'equal';
    case '&':
      return 'ampersand';
    case '^':
      return 'caret';
    case '%':
      return 'percent';
    case '$':
      return 'dollar';
    case '~':
      return 'tilde';
    case '`':
      return 'backtick';
    case '#':
      return 'hash symbol';
    case '@':
      return 'at symbol';
    case '-':
      return 'dash symbol';
    case '_':
      return 'underscore symbol';
    default:
      break;
  }
  if (/[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}]/u.test(char)) return 'emoji';
  return 'unknown';
}
