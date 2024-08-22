import Image from 'next/image';

const Contact = () => (
  <div className="container py-16 flex items-center align-middle justify-between flex-col lg:flex-row" id="contact">
    <div className="flex items-center justify-center flex-none w-full lg:w-auto lg:flex-1 pr-0 lg:pr-8 order-2 lg:order-1">
			<div className="bg-white dark:bg-zinc-900 shadow-md rounded-sm p-6 mx-auto mt-8">
				<h2 className="text-3xl font-bold text-center mb-6 text-brand-primary dark:text-white">聯絡我們</h2>
				<div className="text-gray-700 mb-4">
					<span className="text-2xl font-semibold text-brand-primary dark:text-white">Email :</span>
					<span className="text-xl ml-2 text-brand-primary dark:text-white">utcssa@go.utaipei.edu.tw</span>
				</div>
				<div className="text-gray-700">
					<span className="text-2xl font-semibold text-brand-primary dark:text-white">Instagram :</span>
					<a href="https://www.instagram.com/ut_cssa" className="text-xl ml-2 text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">@ut_cssa</a>
				</div>
			</div>
    </div>
    <div className="flex-none w-full lg:w-auto lg:flex-1 order-1 lg:order-2 mb-8 lg:mb-0">
      <Image
        src="/assets/illustrations/contact.svg"
        alt="I’m John and I’m a Backend & Devops engineer!"
        className="w-auto h-auto"
        width={498}
        height={313}
      />
    </div>
  </div>
);

export default Contact;
