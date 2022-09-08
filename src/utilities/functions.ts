const setClassNames = (...classes: string[]) =>
  classes.filter(Boolean).join(' ');

export default setClassNames;
