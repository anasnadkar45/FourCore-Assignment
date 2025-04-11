export default function CustomerSatisfaction() {
    return (
      <div className="bg-white rounded-lg p-4 sm:p-6 h-full">
        <h2 className="text-lg font-semibold text-[#151d48] mb-4 sm:mb-6">Customer Satisfaction</h2>
        <div className="h-[180px] sm:h-[200px] relative">
          {/* This would be a real chart in production */}
          <svg width="100%" height="100%" viewBox="0 0 350 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#05c283" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#05c283" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#4079ed" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#4079ed" stopOpacity="0" />
              </linearGradient>
            </defs>
  
            <path
              d="M0,50 C30,40 60,60 90,50 C120,40 150,60 180,50 C210,40 240,60 270,40 C300,20 330,30 350,20"
              stroke="#05c283"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0,50 C30,40 60,60 90,50 C120,40 150,60 180,50 C210,40 240,60 270,40 C300,20 330,30 350,20"
              stroke="#05c283"
              strokeWidth="3"
              fill="url(#gradient1)"
              fillOpacity="0.5"
            />
  
            <path
              d="M0,100 C30,110 60,90 90,100 C120,110 150,90 180,100 C210,110 240,90 270,100 C300,110 330,90 350,100"
              stroke="#4079ed"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0,100 C30,110 60,90 90,100 C120,110 150,90 180,100 C210,110 240,90 270,100 C300,110 330,90 350,100"
              stroke="#4079ed"
              strokeWidth="3"
              fill="url(#gradient2)"
              fillOpacity="0.5"
            />
  
            <circle cx="0" cy="50" r="4" fill="#05c283" />
            <circle cx="90" cy="50" r="4" fill="#05c283" />
            <circle cx="180" cy="50" r="4" fill="#05c283" />
            <circle cx="270" cy="40" r="4" fill="#05c283" />
            <circle cx="350" cy="20" r="4" fill="#05c283" />
  
            <circle cx="0" cy="100" r="4" fill="#4079ed" />
            <circle cx="90" cy="100" r="4" fill="#4079ed" />
            <circle cx="180" cy="100" r="4" fill="#4079ed" />
            <circle cx="270" cy="100" r="4" fill="#4079ed" />
            <circle cx="350" cy="100" r="4" fill="#4079ed" />
          </svg>
        </div>
        <div className="flex flex-col sm:flex-row justify-between mt-4 sm:mt-6 gap-4 sm:gap-0">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#4079ed]"></div>
            <span className="text-xs text-[#737791]">Last Month</span>
            <span className="text-sm font-semibold text-[#151d48] ml-2">$3,004</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#05c283]"></div>
            <span className="text-xs text-[#737791]">This Month</span>
            <span className="text-sm font-semibold text-[#151d48] ml-2">$4,504</span>
          </div>
        </div>
      </div>
    )
  }
  