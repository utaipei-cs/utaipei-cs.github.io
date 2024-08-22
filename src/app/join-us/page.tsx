'use client'

import React from 'react';
import Markdown from 'markdown-to-jsx';

import AllProviders from 'components/AllProviders';
import Header from 'components/ui/theme/Header';
import Footer from 'components/ui/theme/Footer';

interface CustomProps {
  children: React.ReactNode;
}

// Define custom components for specific HTML elements
const CustomH1: React.FC<CustomProps> = (props) => <h1 className="text-4xl font-bold mb-6 text-brand-primary dark:text-white">{props.children}</h1>;

const CustomH2: React.FC<CustomProps> = (props) => <h2 className="text-3xl font-semibold mb-5 text-brand-primary dark:text-white">{props.children}</h2>;

const CustomH3: React.FC<CustomProps> = (props) => <h3 className="text-2xl font-semibold mb-4 text-brand-primary dark:text-white">{props.children}</h3>;

const CustomH4: React.FC<CustomProps> = (props) => <h4 className="text-xl font-semibold mb-4 text-brand-primary dark:text-white">{props.children}</h4>;

const CustomUl: React.FC<CustomProps> = (props) => <ul className="list-disc list-inside ml-6 mb-4 text-brand-primary dark:text-white">{props.children}</ul>;

const CustomLi: React.FC<CustomProps> = (props) => <li className="mb-2 text-brand-primary dark:text-white">{props.children}</li>;

const CustomParagraph: React.FC<CustomProps> = (props) => <p className="mb-4 text-lg leading-relaxed text-brand-secondary dark:text-slate-200">{props.children}</p>;

const markdownText = `
## 加入好處

#### 金錢報酬

許多專案在開發和後續維護期間會提供金錢報酬，參與人員將根據貢獻程度獲得相應報酬。詳細的分成規則請見下方<a href="#">分成方式</a>。

#### 未來履歷

專案開發經驗是申請實習和研究所的有利經歷。成員可以獲得專案貢獻度的證明，提升履歷競爭力。

#### 團隊合作機會

有機會與他人合作，學習開發中常見的工具和協作方式，如 Git、Figma、Scrum 和 Code Review 等。

## 分成方式 (TODO 等章程)

...

## 工作內容
- 進行使用者需求分析及 UI/UX 設計
- 進行系統開發、部署與運維
- 維護現有專案，包括錯誤修復與功能更新

## 加入條件
- 限北市大在學學生，不限科系
- 需具備基礎程式設計能力或 UI/UX 設計能力
- 是否能加入將由專案成員面談後決定

## 組織運作 (TODO 等章程)

...
`;

const MarkdownContent = () => {
  return (
    <>
      <AllProviders>
        <div className="bg-[url('/assets/illustrations/overlay.svg')] bg-[length:40%] bg-right-top bg-no-repeat pb-16">
          <Header />
					<div className="bg-white dark:bg-zinc-900 shadow-md rounded-sm p-6 max-w-4xl mx-auto mt-8 prose prose-lg">
						<Markdown
							options={{
								overrides: {
									h1: { component: CustomH1 },
									h2: { component: CustomH2 },
									h3: { component: CustomH3 },
									h4: { component: CustomH4 },
									ul: { component: CustomUl },
									li: { component: CustomLi },
									p: { component: CustomParagraph },
								},
							}}
						>
							{markdownText}
						</Markdown>
					</div>
        </div>
				<Footer />
      </AllProviders>
    </>
  );
};

export default MarkdownContent;
