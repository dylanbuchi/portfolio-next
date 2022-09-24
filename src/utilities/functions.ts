const setClassNames = (...classes: string[]) =>
  classes.filter(Boolean).join(' ');

export const isUndefined = (value: unknown) => {
  return typeof value === 'undefined';
};

export const capitalize = (word: string) => {
  const letters = word.split('');

  let prev: string | null = null;

  letters.forEach((letter, index) => {
    if (prev === ' ') letters[index] = letter.toUpperCase();
    prev = letter;
  });

  letters[0] = letters[0].toUpperCase();

  return letters.join('');
};

export const emailChecker = (email: string) => {
  if (!email) return false;

  const valid_email_suffix = email.endsWith('.com');
  const valid_at_sign =
    email.split('').filter((item) => item === '@').length === 1;

  const validFirstChar = email[0].match(/[a-z0-9]/gi);

  if (!valid_at_sign || !valid_email_suffix || !validFirstChar) return false;

  const domain = email.split('@')[1];

  let dot_count = 0;

  for (const char of domain) {
    if (dot_count > 1) return false;
    if (char === '.') dot_count++;
  }

  return true;
};

export default setClassNames;
