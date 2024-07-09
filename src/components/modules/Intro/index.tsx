import Link from 'next/link';
import Image from 'next/image';
import Header from 'components/ui/theme/Header';

const Intro = () => (
  <div className="bg-[url('/assets/illustrations/overlay.svg')] bg-contain bg-right-top bg-no-repeat pb-16">
    <Header />
    <div className="container py-16 flex items-center flex-col md:flex-row justify-between">
      <div className="flex-1 w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="mb-8 text-3xl md:text-5xl font-bold text-brand-primary dark:text-white typography">
          你好{' '}
          <span role="img" aria-label="Waving hand">
            👋
          </span>
        </h1>
        <h2 className="mb-[2.5rem] text-2xl md:text-4xl text-brand-secondary dark:text-slate-200 typography">
					我們是由臺北市立大學資訊科學系學生組成的團隊，專注於為校園和各科系開發電腦專案。
        </h2>
      </div>
      <div className="flex-1 w-full md:w-1/2">
        <Image
          src="/assets/illustrations/dev.svg"
          alt="I’m John and I’m a JAMStack engineer!"
          width={463}
          height={273}
          priority
        />
      </div>
    </div>
  </div>
);

export default Intro;
