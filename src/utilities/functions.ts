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

  const specialCharCheck = (specialChar: string, word: string) => {
    for (let i = 0; i < word.length; i++) {
      const char = word[i];

      if (char === specialChar) {
        if (i < word.length - 1 && !isAlphaNumeric(word[i + 1])) return false;
      }
    }
    return true;
  };

  const onlyOneAtSign =
    email.split('').filter((item) => item === '@').length === 1;

  const isAlphaNumeric = (char: string) => !!char.match(/[\w]/gi);

  const validFirstChar = isAlphaNumeric(email[0]);
  const validLastChar = isAlphaNumeric(email[email.length - 1]);

  if (
    !onlyOneAtSign ||
    !validFirstChar ||
    !validLastChar ||
    !specialCharCheck('@', email) ||
    !specialCharCheck('.', email)
  )
    return false;

  const [, domainName] = email.split('@');

  return domainName.split('').filter((char) => char === '.').length;
};

export const copyTextToClipboard = async (text: string) => {
  await navigator.clipboard?.writeText(text);
};

export default setClassNames;
