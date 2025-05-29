export default function Home() {
  return (
    <div className="flex flex-col items-center shadow">
      {/* Section 1 */}
      <div className="hero flex-col bg-base-300 w-[80%] min-h-screen mx-auto">
        <div className="text-center">
          <div className="max-w-md">
            <h1 className="text-5xl! font-bold!">خوش آمدید</h1>
            <p className="py-6!">
              ما در اینجا بهترین فرصت های تحصیلی که از کشور های مختلف آسیایی و اورپایی به اعلان گزاشته میشود را به شما ارایه خواهیم کرد برای دیدن آخرین فرصت از فرصت های اخیر دیدن کنید
            </p>
            <button className="btn! btn-primary!">جدید ترین فرصت ها</button>
          </div>
        </div>
      </div>
      <div className="flex h-[80%] flex-col w-[80%] sm:flex-row mt-2!">
        <div className="flex flex-col items-center shadow">
          {/* Section 1 */}
          <div className="hero flex-col bg-base-300 w-full min-h-screen mx-auto">
            <div className="text-center">
              <div className="max-w-md">
                <h1 className="text-5xl! font-bold!">خوش آمدید</h1>
                <p className="py-6!">
                  ما در اینجا بهترین فرصت های تحصیلی که از کشور های مختلف آسیایی و اورپایی به اعلان گزاشته میشود را به شما ارایه خواهیم کرد برای دیدن آخرین فرصت از فرصت های اخیر دیدن کنید
                </p>
                <button className="btn! btn-primary!">جدید ترین فرصت ها</button>
              </div>
            </div>
          </div>
          {/* second part in main page and second div */}
          <div className="card bg-base-300 rounded-box grid h-32 grow place-items-center">
            content</div>
        </div>
      </div>
    </div>
  );

}
