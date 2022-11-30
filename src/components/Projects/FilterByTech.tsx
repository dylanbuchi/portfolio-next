import { useState } from 'react';

interface SearchProjectByTechProps {
  filterFunction: (tech: string) => void;
}
const FilterByTech = ({ filterFunction }: SearchProjectByTechProps) => {
  const techs = ['TypeScript', 'Python', 'React', 'Node.js', 'Django', 'All'];

  const [activeTechItem, setActiveTechItem] = useState('All');

  return (
    <ul className="grid grid-cols-2 gap-5 sm:gap-0 mx-10 sm:mx-0 place-items-center sm:flex sm:justify-center sm:space-x-10 pt-2 -mb-7 overflow-ellipsis">
      {techs.map((tech) => {
        return (
          <li className="w-[100%] sm:w-auto" key={tech}>
            <button
              disabled={activeTechItem === tech}
              onClick={() => {
                filterFunction(tech);
                setActiveTechItem(tech);
              }}
              className={`w-[100%] sm:w-[auto] px-3 py-2  sm:px-5 z-10 relative rounded-xl text-sm font-medium shadow-gray-700 shadow-sm dark:shadow-black ${
                activeTechItem === tech
                  ? ' bg-blue-900  text-white dark:bg-accent_primary'
                  : 'dark:bg-gray-600 bg-[#e6ebf5] dark:text-white hover:lumos '
              }`}
            >
              {tech}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default FilterByTech;
