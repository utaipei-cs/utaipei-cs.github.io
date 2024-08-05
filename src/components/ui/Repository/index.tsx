import ForkIcon from 'components/ui/Icons/Fork';
import StarIcon from 'components/ui/Icons/Star';
import { Repository } from 'generated/graphql';

interface RepositoryX {
  node: Repository;
  index: number;
}

const RepositoryPage = ({ node, index }: RepositoryX) => {
  // Use the same background color and text color for all items
  const bgColorClass =
    'bg-white dark:bg-gray-800 text-brand-primary dark:text-gray-200 shadow-md rounded-lg p-4 h-full overflow-hidden flex flex-col justify-between';
  // Use text-gray-200 for the icon color
  const iconColorClass = 'text-brand-primary dark:text-gray-200';

  return (
    <a className={bgColorClass} href={node.url} target="_blank" rel="noreferrer">
      <div>
        <h3 className="font-semibold text-xl">{node.name}</h3>
        <p className="mb-4 text-base">{node.description}</p>
      </div>
      <div className="flex justify-between flex-col">
        {node.languages?.nodes && node.languages.nodes.length > 0 && (
          <div className="flex justify-between flex-row mb-3">
            <div>
              {node.languages.nodes.map((item) => (
                <span className="italic mr-2 last:mr-0 text-xs" key={item?.id}>
                  {item?.name}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="flex items-center">
          <div className="flex items-center mr-2">
            <StarIcon className={iconColorClass} />
            <span className={`ml-2 ${iconColorClass}`}>{node.stargazers.totalCount}</span>
          </div>
          <div className="flex items-center">
            <ForkIcon className={iconColorClass} />
            <span className={`ml-2 ${iconColorClass}`}>{node.forkCount}</span>
          </div>
        </div>
      </div>
    </a>
  );
};

export default RepositoryPage;
