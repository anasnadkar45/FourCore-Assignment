import { KpiCardsData } from "@/lib/data";
import KpiCard from "./kpi-card";
import Export from "../../../public/Export Icon.svg"
import Image from "next/image";

export default function TodaySales() {
  return (
    <div className="bg-card shadow-md rounded-lg p-4 sm:p-6 h-full flex flex-col justify-between">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
        <div>
          <h2 className="text-lg font-semibold ">Today's Sales</h2>
          <p className="text-sm text-secondary-foreground">Sales Summery</p>
        </div>
        <button className="flex items-center hover:cursor-pointer gap-2 px-4 py-2 border-2 border-[#C3D3E2] rounded-lg text-sm font-semibold w-full sm:w-auto justify-center sm:justify-start">
          <Image src={Export} alt="Export Button" className="size-7"/>
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
