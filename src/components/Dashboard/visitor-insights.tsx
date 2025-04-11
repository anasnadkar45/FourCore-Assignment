export default function VisitorInsights() {
    return (
      <div className="bg-card shadow-md rounded-lg p-4 sm:p-6 h-full">
        <h2 className="text-lg font-semibold mb-4 sm:mb-6">Visitor Insights</h2>
        <div className="h-[180px] sm:h-[200px] relative">
          <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0,150 C50,120 100,180 150,100 C200,20 250,80 300,60 C350,40 400,80 400,100"
              stroke="#bf83ff"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0,120 C50,100 100,140 150,80 C200,20 250,60 300,40 C350,20 400,60 400,80"
              stroke="#ef4444"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M0,100 C50,80 100,120 150,60 C200,0 250,40 300,20 C350,0 400,40 400,60"
              stroke="#3cd856"
              strokeWidth="3"
              fill="none"
            />
          </svg>
          <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-[#737791]">
            <span>Jan</span>
            <span className="hidden sm:block">Feb</span>
            <span className="hidden md:block">Mar</span>
            <span>Apr</span>
            <span className="hidden sm:block">May</span>
            <span className="hidden md:block">Jun</span>
            <span>Jul</span>
            <span className="hidden sm:block">Aug</span>
            <span className="hidden md:block">Sept</span>
            <span>Oct</span>
            <span className="hidden sm:block">Nov</span>
            <span>Dec</span>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-[#bf83ff]"></div>
            <span className="text-xs text-[#737791]">Loyal Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-[#ef4444]"></div>
            <span className="text-xs text-[#737791]">New Customers</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-[#3cd856]"></div>
            <span className="text-xs text-[#737791]">Unique Customers</span>
          </div>
        </div>
      </div>
    )
  }
  