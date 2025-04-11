export default function TopProducts() {
    return (
      <div className="bg-white rounded-lg p-4 sm:p-6 h-full overflow-x-auto">
        <h2 className="text-lg font-semibold text-[#151d48] mb-6">Top Products</h2>
        <div className="min-w-[400px]">
          <table className="w-full">
            <thead>
              <tr className="text-xs text-[#737791]">
                <th className="font-normal text-left pb-4">#</th>
                <th className="font-normal text-left pb-4">Name</th>
                <th className="font-normal text-left pb-4">Popularity</th>
                <th className="font-normal text-left pb-4">Sales</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-3 text-sm text-[#151d48]">01</td>
                <td className="py-3 text-sm text-[#151d48]">Home Decor Range</td>
                <td className="py-3">
                  <div className="h-2 w-full bg-[#eff1f3] rounded-full overflow-hidden">
                    <div className="h-full w-[65%] bg-[#4079ed] rounded-full"></div>
                  </div>
                </td>
                <td className="py-3">
                  <span className="text-xs font-medium text-[#4079ed] bg-[#f0f9ff] px-2 py-1 rounded">45%</span>
                </td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-[#151d48]">02</td>
                <td className="py-3 text-sm text-[#151d48]">Disney Princess Pink Bag 18'</td>
                <td className="py-3">
                  <div className="h-2 w-full bg-[#eff1f3] rounded-full overflow-hidden">
                    <div className="h-full w-[29%] bg-[#05c283] rounded-full"></div>
                  </div>
                </td>
                <td className="py-3">
                  <span className="text-xs font-medium text-[#05c283] bg-[#e2fff3] px-2 py-1 rounded">29%</span>
                </td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-[#151d48]">03</td>
                <td className="py-3 text-sm text-[#151d48]">Bathroom Essentials</td>
                <td className="py-3">
                  <div className="h-2 w-full bg-[#eff1f3] rounded-full overflow-hidden">
                    <div className="h-full w-[18%] bg-[#bf83ff] rounded-full"></div>
                  </div>
                </td>
                <td className="py-3">
                  <span className="text-xs font-medium text-[#bf83ff] bg-[#f3e8ff] px-2 py-1 rounded">18%</span>
                </td>
              </tr>
              <tr>
                <td className="py-3 text-sm text-[#151d48]">04</td>
                <td className="py-3 text-sm text-[#151d48]">Apple Smartwatches</td>
                <td className="py-3">
                  <div className="h-2 w-full bg-[#eff1f3] rounded-full overflow-hidden">
                    <div className="h-full w-[25%] bg-[#ff8900] rounded-full"></div>
                  </div>
                </td>
                <td className="py-3">
                  <span className="text-xs font-medium text-[#ff8900] bg-[#fff4de] px-2 py-1 rounded">25%</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
  