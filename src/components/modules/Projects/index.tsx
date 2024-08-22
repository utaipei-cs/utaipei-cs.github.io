'use client'

import { Suspense, useEffect, useState } from 'react';
import getRepos from 'lib/getRepos';
import Repository from 'components/ui/Repository';
import { Skeleton } from 'components/ui/skeleton';
import { RepositoryEdge } from 'generated/graphql';

const Projects = () => (
  <div className="container py-8" id="projects">
    <h2 className="text-2xl font-bold">專案列表</h2>
		<h2 className="text-sm text-gray-500 mb-6">* 非公開專案不會在此顯示</h2>
    <Repos />
  </div>
);

const Repos = () => {
	const [data, setData] = useState<RepositoryEdge[] | null>(null);
	useEffect(() => {
		getRepos().then((repos) => {
			console.log('successfully fetched repos', repos)
			setData(repos)
		});
	}, [])

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-2 lg:col-span-3">
      {data
        ? data.map(({ node }, index) => {
            if (!node) return null;
            return <Repository key={node.id} node={node} index={index} />;
          })
        : <ReposSkeleton />}
    </div>
  );
};

const ReposSkeleton = () => (
  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-1 md:col-span-2 lg:col-span-3">
    {Array.from({ length: 8 }, (_, i) => 1 + i).map((item) => (
      <Skeleton key={`repo-${item}`} className="h-[160px] w-full" />
    ))}
  </div>
);

export default Projects;
