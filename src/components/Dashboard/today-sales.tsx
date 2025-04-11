import { KpiCardsData } from "@/lib/data";
import KpiCard from "./kpi-card";

export default function TodaySales() {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 h-full flex flex-col justify-between">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div>
          <h2 className="text-lg font-semibold text-[#151d48]">Today's Sales</h2>
          <p className="text-sm text-[#737791]">Sales Summery</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 border border-[#eff1f3] rounded-md text-sm font-medium w-full sm:w-auto justify-center sm:justify-start">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10"
              stroke="#151D48"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.66699 6.66699L8.00033 10.0003L11.3337 6.66699"
              stroke="#151D48"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M8 10V2" stroke="#151D48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Export
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
        {KpiCardsData.map((item, id) => (
          <KpiCard
            icon={item.icon}
            lable={item.lable}
            total={item.total}
            description={item.description}
            bgColor={item.bgColor}
            iconColor={item.iconColor}
            key={id}
          />
        ))}
      </div>
    </div>
  )
}
