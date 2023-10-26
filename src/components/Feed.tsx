import Navigation from "./Navigation";
import ProfilePhoto from "./ProfilePhoto";

const Feed = () => {
  return (
    <div className="flex h-full w-full flex-col items-center bg-[#F5F3EF]">
      <div className="mb-8 mt-4 w-full max-w-4xl px-12 pb-4 pt-4">
        <Navigation />
        <section className="flex min-h-screen w-full flex-col">
          <div className="container flex w-full flex-col py-16 ">
            <ProfilePhoto />
            <div className="mt-10 flex flex-row gap-6 font-medium text-[#1A3F36]">
              <span className="rounded-md bg-[#d1d9d7] pb-1 pl-3 pr-3 pt-1.5">
                All time
              </span>
              <span className="pb-1 pl-3 pr-3 pt-1.5">Last month</span>
              <span className="pb-1 pl-3 pr-3 pt-1.5">Last 6 months</span>
            </div>
            <div className="flex flex-row gap-4">
              <div className="mt-6 h-[120px] w-[120px] rounded-sm bg-[#1A3F36] sm:h-[200px] sm:w-[200px]"></div>
              <div className="mt-6 h-[120px] w-[120px] rounded-sm bg-[#1A3F36] sm:h-[200px] sm:w-[200px]"></div>
              <div className="mt-6 h-[120px] w-[120px] rounded-sm bg-[#1A3F36] sm:h-[200px] sm:w-[200px]"></div>
            </div>

            {/* Table */}
            <div className="mt-10 w-full">
              <div className="relative overflow-x-auto">
                <table className="w-full border-separate rounded-md border text-left text-sm text-gray-500 dark:text-gray-400">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Product name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Color
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                    </tr>
                    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        Microsoft Surface Pro
                      </th>
                      <td className="px-6 py-4">White</td>
                      <td className="px-6 py-4">Laptop PC</td>
                      <td className="px-6 py-4">$1999</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                      >
                        Magic Mouse 2
                      </th>
                      <td className="px-6 py-4">Black</td>
                      <td className="px-6 py-4">Accessories</td>
                      <td className="px-6 py-4">$99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Feed;
