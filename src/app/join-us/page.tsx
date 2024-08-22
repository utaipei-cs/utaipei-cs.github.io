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

## 分成方式

每個專案的總報酬中，首先由系學會抽成10%，接著專案負責人再抽成5%。剩下的85%報酬將根據各成員(包括專案負責人)的貢獻比例進行分配。在專案開始前，會列出所有需要完成的工作事項並估算完成工作的預計時間。在專案開發期間，會記錄每位成員完成的工作事項。最終每位成員的貢獻比例為，其完成的工作的預計時間總和除以專案所有工作的預計時間總和，並依此比例分配報酬。

## 工作內容
- 進行使用者需求分析及 UI/UX 設計
- 進行系統開發、部署與運維
- 維護現有專案，包括錯誤修復與功能更新

## 加入條件
- 限北市大在學學生，不限科系，不須是系學會成員
- 需具備基礎程式設計能力或 UI/UX 設計能力
- 是否能加入將由專案成員面談後決定

## 組織架構

技術組由多個團隊組成，這些團隊各自獨立運作，負責開發和維護不同的專案。每位成員可以同時參與多個專案。每個專案由一名專案負責人管理，專案負責人作為聯絡窗口並追蹤專案進度。專案負責人必定是系學會成員。如果團隊內出現無法解決的紛爭，技術組組長會介入處理，若問題仍未解決，最終由系學會會長進行仲裁。

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
