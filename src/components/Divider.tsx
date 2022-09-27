interface DividerProps {
  name: string;
}

const Divider = ({ name }: DividerProps) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-600" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-primary_90 px-3 text-2xl font-bold dark:bg-primary_10 dark:text-white_gray">
          {name}
        </span>
      </div>
    </div>
  );
};

export default Divider;
