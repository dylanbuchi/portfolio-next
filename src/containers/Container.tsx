import { Props } from 'interfaces/props';

const Container = ({ children, className }: Props) => {
  return (
    <div className={`mb-auto overflow-y-scroll ${className}`}>{children}</div>
  );
};

export default Container;
