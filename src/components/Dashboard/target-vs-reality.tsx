import Image from "next/image";
import Bag1 from "../../../public/Bag 1.svg"
import Ticket from "../../../public/Ticket Star 1.svg"
export default function TargetVsReality() {
  return (
    <div className="bg-card shadow-md rounded-lg p-4 sm:p-6 h-full">
      <h2 className="text-lg font-semibold text-[#151d48] mb-4 sm:mb-6">Target vs Reality</h2>
      <div className="h-[180px] sm:h-[200px] relative overflow-x-auto">
        <div className="min-w-[350px] h-full">

          <svg width="100%" height="100%" viewBox="0 0 350 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="120" width="15" height="60" rx="2" fill="#05c283" />
            <rect x="40" y="100" width="15" height="80" rx="2" fill="#ffa412" />

            <rect x="70" y="140" width="15" height="40" rx="2" fill="#05c283" />
            <rect x="90" y="90" width="15" height="90" rx="2" fill="#ffa412" />

            <rect x="120" y="130" width="15" height="50" rx="2" fill="#05c283" />
            <rect x="140" y="110" width="15" height="70" rx="2" fill="#ffa412" />

            <rect x="170" y="150" width="15" height="30" rx="2" fill="#05c283" />
            <rect x="190" y="80" width="15" height="100" rx="2" fill="#ffa412" />

            <rect x="220" y="110" width="15" height="70" rx="2" fill="#05c283" />
            <rect x="240" y="90" width="15" height="90" rx="2" fill="#ffa412" />

            <rect x="270" y="130" width="15" height="50" rx="2" fill="#05c283" />
            <rect x="290" y="70" width="15" height="110" rx="2" fill="#ffa412" />

            <rect x="320" y="140" width="15" height="40" rx="2" fill="#05c283" />
            <rect x="340" y="80" width="15" height="100" rx="2" fill="#ffa412" />
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 right-0 min-w-[350px] flex justify-between text-xs text-[#737791] px-4">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>June</span>
          <span>July</span>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-4 mt-4 sm:mt-6">
        <div className="w-full flex items-center gap-20">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-[#E2FFF3] rounded-lg flex items-center justify-center">
              <Image src={Bag1} alt="" className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Reality Sales</p>
              <p className="text-xs text-[#737791]">Global</p>
            </div>
          </div>
          <div>
            <h1 className="text-[#27AE60] font-bold">8.823</h1>
          </div>
        </div>
        <div className="flex items-center gap-20">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-[#FFF4DE] rounded-lg flex items-center justify-center">
              <Image src={Ticket} alt="" className="size-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">Target Sales</p>
              <p className="text-xs text-[#737791]">Commercial</p>
            </div>
          </div>
          <div>
            <h1 className="text-[#FFA412] font-bold">12.122</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
