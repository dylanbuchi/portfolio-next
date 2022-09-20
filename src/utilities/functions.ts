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

export default setClassNames;
