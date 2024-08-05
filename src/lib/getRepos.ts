import 'server-only';
import { RepositoryEdge } from 'generated/graphql';
import { unstable_noStore as noStore } from 'next/cache';

const getRepos = async (): Promise<RepositoryEdge[]> => {
  noStore();
  const ORG_NAME = 'utaipei-cs';
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: `
				query organization {
						organization(login: "${ORG_NAME}"){
							repositories(first: 30, orderBy: {field: STARGAZERS, direction: DESC}) {
								edges {
									node {
										id
										name
										url
										description
										stargazers {
											totalCount
										}
										forkCount
										languages(first: 3) {
											nodes {
												id
												name
											}
									}
								}
							}
						}
					}
				}
			`,
    }),
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();

  return data.data.organization.repositories.edges;
};

export default getRepos;
