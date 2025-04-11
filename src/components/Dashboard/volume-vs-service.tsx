export default function VolumeVsService() {
    return (
      <div className="bg-card shadow-md rounded-lg p-4 sm:p-6 h-full">
        <h2 className="text-lg font-semibold text-[#151d48] mb-4 sm:mb-6">Volume vs Service Level</h2>
        <div className="h-[180px] sm:h-[200px] relative overflow-x-auto">
          <div className="min-w-[350px] h-full">
           
            <svg width="100%" height="100%" viewBox="0 0 350 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="30" y="30" width="20" height="140" rx="2" fill="#4079ed" />
              <rect x="30" y="170" width="20" height="20" rx="2" fill="#05c283" />
  
              <rect x="80" y="50" width="20" height="120" rx="2" fill="#4079ed" />
              <rect x="80" y="170" width="20" height="20" rx="2" fill="#05c283" />
  
              <rect x="130" y="40" width="20" height="130" rx="2" fill="#4079ed" />
              <rect x="130" y="170" width="20" height="20" rx="2" fill="#05c283" />
  
              <rect x="180" y="60" width="20" height="110" rx="2" fill="#4079ed" />
              <rect x="180" y="170" width="20" height="20" rx="2" fill="#05c283" />
  
              <rect x="230" y="90" width="20" height="80" rx="2" fill="#4079ed" />
              <rect x="230" y="170" width="20" height="20" rx="2" fill="#05c283" />
  
              <rect x="280" y="90" width="20" height="80" rx="2" fill="#4079ed" />
              <rect x="280" y="170" width="20" height="20" rx="2" fill="#05c283" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-4 sm:mt-6 gap-4 sm:gap-0">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#4079ed]"></div>
            <span className="text-xs text-[#737791]">Volume</span>
            <span className="text-sm font-semibold text-[#151d48] ml-2">1,135</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#05c283]"></div>
            <span className="text-xs text-[#737791]">Services</span>
            <span className="text-sm font-semibold text-[#151d48] ml-2">635</span>
          </div>
        </div>
      </div>
    )
  }
  