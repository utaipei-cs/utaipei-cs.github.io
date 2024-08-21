import { RepositoryEdge } from 'generated/graphql';
import { unstable_noStore as noStore } from 'next/cache';

const getRepos = async (): Promise<RepositoryEdge[]> => {
  noStore();
  const res = await fetch('https://api.github.com/orgs/utaipei-cs/repos');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  return data.map((repo: any) => ({
    node: {
      id: repo.id,
      name: repo.name,
      url: repo.html_url,
      description: repo.description,
      stargazers: { totalCount: repo.stargazers_count },
      forkCount: repo.forks_count,
      languages: [], // TODO Cannot fetch languages, leave empty
    },
  }));
};

export default getRepos;
