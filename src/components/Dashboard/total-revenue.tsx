export default function TotalRevenue() {
    return (
      <div className="bg-card shadow-md rounded-lg p-4 sm:p-6 h-full">
        <h2 className="text-lg font-semibold text-[#151d48] mb-4 sm:mb-6">Total Revenue</h2>
        <div className="h-[180px] sm:h-[200px] relative overflow-x-auto">
          <div className="min-w-[400px] h-full">
            <svg width="100%" height="100%" viewBox="0 0 350 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="20" y="140" width="20" height="40" rx="2" fill="#4079ed" />
              <rect x="25" y="120" width="20" height="60" rx="2" fill="#05c283" />
  
              <rect x="70" y="140" width="20" height="40" rx="2" fill="#4079ed" />
              <rect x="75" y="130" width="20" height="50" rx="2" fill="#05c283" />
  
              <rect x="120" y="160" width="20" height="20" rx="2" fill="#4079ed" />
              <rect x="125" y="80" width="20" height="100" rx="2" fill="#05c283" />
  
              <rect x="170" y="130" width="20" height="50" rx="2" fill="#4079ed" />
              <rect x="175" y="150" width="20" height="30" rx="2" fill="#05c283" />
  
              <rect x="220" y="140" width="20" height="40" rx="2" fill="#4079ed" />
              <rect x="225" y="130" width="20" height="50" rx="2" fill="#05c283" />
  
              <rect x="270" y="120" width="20" height="60" rx="2" fill="#4079ed" />
              <rect x="275" y="150" width="20" height="30" rx="2" fill="#05c283" />
  
              <rect x="320" y="110" width="20" height="70" rx="2" fill="#4079ed" />
              <rect x="325" y="150" width="20" height="30" rx="2" fill="#05c283" />
            </svg>
          </div>
          <div className="absolute bottom-0 left-0 right-0 min-w-[400px] flex justify-between text-xs text-[#737791] px-4">
            <span>Monday</span>
            <span>Tuesday</span>
            <span>Wednesday</span>
            <span>Thursday</span>
            <span>Friday</span>
            <span>Saturday</span>
            <span>Sunday</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#4079ed]"></div>
            <span className="text-xs text-[#737791]">Online Sales</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#05c283]"></div>
            <span className="text-xs text-[#737791]">Offline Sales</span>
          </div>
        </div>
      </div>
    )
  }
  