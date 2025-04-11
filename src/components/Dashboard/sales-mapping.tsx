export default function SalesMapping() {
    return (
      <div className="bg-white rounded-lg p-4 sm:p-6 h-full">
        <h2 className="text-lg font-semibold text-[#151d48] mb-4 sm:mb-6">Sales Mapping by Country</h2>
        <div className="h-[180px] sm:h-[200px] flex items-center justify-center overflow-hidden">
          <div className="min-w-[400px] h-full flex items-center justify-center">
            {/* This would be a real map in production */}
            <svg width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50,50 L100,50 L100,70 L120,70 L120,90 L80,90 L80,110 L50,110 Z" fill="#ffa412" opacity="0.8" />
              <path d="M150,30 L200,30 L200,60 L180,60 L180,80 L150,80 Z" fill="#bf83ff" opacity="0.8" />
              <path d="M250,40 L270,40 L270,60 L290,60 L290,90 L250,90 Z" fill="#bf83ff" opacity="0.8" />
              <path d="M220,120 L240,120 L240,140 L260,140 L260,170 L220,170 Z" fill="#05c283" opacity="0.8" />
              <path d="M120,140 L150,140 L150,180 L120,180 Z" fill="#ef4444" opacity="0.8" />
              <path d="M300,120 L330,120 L330,140 L310,140 L310,160 L300,160 Z" fill="#05c283" opacity="0.8" />
              <path d="M180,100 L200,100 L200,110 L180,110 Z" fill="#4079ed" opacity="0.8" />
            </svg>
          </div>
        </div>
      </div>
    )
  }
  