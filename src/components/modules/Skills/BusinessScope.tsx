import React from 'react';

const BusinessScope: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <section className="bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-white mb-4">💻 網站與系統開發</h2>
        <p className="text-lg text-gray-300 mb-2">建立各類型網站，例如各系網站和組織的官方網站</p>
        <p className="text-lg text-gray-300">開發各種系統，例如場地租借系統和請假系統</p>
      </section>

      <section className="bg-gray-200 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">📊 資料蒐集、處理與視覺化</h2>
        <p className="text-lg text-gray-700 mb-2">資料蒐集：使用網路爬蟲技術自動收集並整理資料</p>
        <p className="text-lg text-gray-700">資料視覺化：將資料製作成各種圖表，或是開發儀錶板(dashboard)</p>
      </section>

      <section className="bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold text-white mb-4">❔ 其他服務</h2>
        <p className="text-lg text-gray-300">如果您有任何其他需求，不確定我們是否能完成，歡迎隨時來詢問</p>
      </section>
    </div>
  );
};

export default BusinessScope;
