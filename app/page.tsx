export default function Home() {
  return (
    <div className="flex flex-col items-center shadow ">
      {/* Section 1 */}
      <div className="hero flex-col bg-base-300 w-[80%] min-h-screen mx-auto overflow-hidden">
        <div
          className="absolute inset-0 bg-no-repeat bg-center opacity-5"
          style={{ backgroundImage: "url('/image/Travel.svg')" }}
        ></div>
        <div className="text-center">
          <div className="max-w-md">
            <h1 className="text-5xl! font-bold! mb-6!">خوش آمدید</h1>
            <p className="py-10!">
              ما در اینجا بهترین فرصت های تحصیلی که از کشور های مختلف آسیایی و اورپایی به اعلان گزاشته میشود را به شما ارایه خواهیم کرد برای دیدن آخرین فرصت از فرصت های اخیر دیدن کنید
            </p>
            <button className="btn! btn-primary!">جدید ترین فرصت ها</button>
          </div>
        </div>
      </div>
      <div style={{ height: '150px', overflow: 'hidden', width: '100%' }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: 'none', fill: '#f8f9fa' }}
          ></path>
        </svg>
      </div>



      {/* Section 2 */}
      <div style={{ height: '100px', overflow: 'hidden', width: '100%' }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d="M0.00,49.99 C150.00,150.00 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: 'none', fill: '#f8f9fa' }}
          ></path>
        </svg>
      </div>
      <div className="flex flex-col sm:flex-row w-[80%] h-auto mx-auto mt-4!">
        {/* Left Side - Image */}
        <div className="w-full sm:w-1/2 flex justify-center items-center p-4">
          <img
            src="/image/Topic.svg"
            alt="Travel"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full mt-2! sm:mt-0! sm:w-1/2 flex items-center justify-center bg-base-300 p-6 shadow-lg">
          <div className="max-w-md text-center">
            <h1 className="text-۲xl! font-bold! text-base-content!">چی چیزی میتواند چانس شما را برای موفقیت  در بورسیه ها زیاد کند؟</h1>
            <p className="py-6! text-base-content!">
              تیم مسلکی ما در تلاش این است که به شما کمک کند که اسناد تان را با استندرد اکادمیک آماده ساخته و چانس تان را برای بدست آوردن این فرصت ها بیشتر کنید در قسمت مقاله ها شما به باموضوع های تاثیر گزار در این پروسه ها آشنا خواهید شد
            </p>
            <button className="btn! btn-primary!">مقاله ها</button>
          </div>
        </div>
      </div>
      <div style={{ height: '150px', overflow: 'hidden', width: '100%' }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: 'none', fill: '#f8f9fa' }}
          ></path>
        </svg>
      </div>




      {/* Section 3 */}
      {/* svg */}
      <div style={{ height: '100px', overflow: 'hidden', width: '100%' }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d="M0.00,49.99 C150.00,150.00 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: 'none', fill: '#f8f9fa' }}
          ></path>
        </svg>
      </div>
      <div className="flex flex-col sm:flex-row w-[80%] h-auto mx-auto">
        {/* left Side - Text Content */}
        <div className="w-full mt-2! sm:mt-0! sm:w-1/2 flex items-center justify-center bg-base-300 p-6 shadow-lg">
          <div className="max-w-md text-center">
            <h1 className="text-۲xl! font-bold! text-base-content!">تیم ما چی خدماتی به شما ارایه میکند؟</h1>
            <p className="py-6! text-base-content!">
              تیم مسلکی ما در تلاش این است که به شما کمک کند که اسناد تان را با استندرد اکادمیک آماده ساخته و چانس تان را برای بدست آوردن این فرصت ها بیشتر کنید در قسمت مقاله ها شما به باموضوع های تاثیر گزار در این پروسه ها آشنا خواهید شد
            </p>
            <button className="btn! btn-primary!">خدمات</button>
          </div>
        </div>
        {/* right Side - Image */}
        <div className="w-full sm:w-1/2 flex justify-center items-center p-4">
          <img
            src="/image/Services2.svg"
            alt="Travel"
            className="max-w-full h-auto"
          />
        </div>


      </div>
      {/* svg */}
      <div style={{ height: '150px', overflow: 'hidden', width: '100%' }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: 'none', fill: '#f8f9fa' }}
          ></path>
        </svg>
      </div>




      {/* Section 4 */}
      <div style={{ height: '100px', overflow: 'hidden', width: '100%' }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d="M0.00,49.99 C150.00,150.00 271.49,-49.99 500.00,49.99 L500.00,0.00 L0.00,0.00 Z"
            style={{ stroke: 'none', fill: '#f8f9fa' }}
          ></path>
        </svg>
      </div>
      <div className="flex flex-col sm:flex-row w-[80%] h-auto mx-auto">
        {/* Left Side - Image */}
        <div className="w-full sm:w-1/2 flex justify-center items-center p-4">
          <img
            src="/image/call us.svg"
            alt="Travel"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full mt-2! sm:mt-0! sm:w-1/2 flex items-center justify-center bg-base-300 p-6 shadow-lg">
          <div className="max-w-md text-center">
            <h1 className="text-۲xl! font-bold! text-base-content">ما میتوانم شما را در بدست آوردن آخرین فرصت ها کمک کنیم</h1>
            <p className="py-6! text-base-content!">
              تیم مسلکی ما در تلاش این است که به شما کمک کند که اسناد تان را با استندرد اکادمیک آماده ساخته و چانس تان را برای بدست آوردن این فرصت ها بیشتر کنید در قسمت مقاله ها شما به باموضوع های تاثیر گزار در این پروسه ها آشنا خواهید شد
            </p>
            <button className="btn! btn-primary!">ارتباط با ما</button>
          </div>
        </div>
      </div>
      <div style={{ height: '150px', overflow: 'hidden', width: '100%' }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: '100%', width: '100%' }}
        >
          <path
            d="M0.00,49.99 C150.00,150.00 349.20,-49.99 500.00,49.99 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: 'none', fill: '#f8f9fa' }}
          ></path>
        </svg>
      </div>
    </div>
  );

}
