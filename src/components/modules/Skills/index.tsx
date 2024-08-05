import Link from 'next/link';
import Image from 'next/image';
import BusinessScope from './BusinessScope';
const Skills = () => {
  return (
    <div className="bg-[url('/assets/illustrations/details.svg')] bg-contain bg-no-repeat bg-left-top" id="about">
      <div className="container py-16 flex flex-col lg:flex-row justify-between items-center">
        <div className="flex-none lg:flex-1 mb-8">
          <Image
            src="/assets/illustrations/skills.svg"
            alt="I’m John and I’m a Backend & Devops engineer!"
            width={362}
            height={264}
          />
        </div>
        <div className="flex-none lg:flex-1 pl-0 lg:pl-8">
          <h2 className="mb-8 text-3xl font-bold text-brand-primary dark:text-white typography">More about me</h2>
          {/* <div className="mb-[2.5rem] font-normal text-xl md:text-[26px] text-brand-secondary dark:text-slate-200 leading-[34px] typography"> */}
          <BusinessScope />
          {/* </div> */}
          {/*           <Link href="#contact" className="button button-primary">
            Hire me
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
