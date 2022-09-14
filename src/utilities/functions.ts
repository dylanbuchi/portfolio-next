const setClassNames = (...classes: string[]) =>
  classes.filter(Boolean).join(' ');

export const isUndefined = (value: unknown) => {
  return typeof value === 'undefined';
};

export default setClassNames;
