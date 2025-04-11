import { Bell, ChevronDown, Search } from "lucide-react"
import Image from "next/image"
import SideBar from "./sidebar"
import TodaySales from "./today-sales"
import VisitorInsights from "./visitor-insights"
import TotalRevenue from "./total-revenue"
import CustomerSatisfaction from "./customer-satisfaction"
import TargetVsReality from "./target-vs-reality"
import TopProducts from "./top-products"
import SalesMapping from "./sales-mapping"
import VolumeVsService from "./volume-vs-service"
import Avatar from "../../../public/Avatar.png"
import Notification from "../../../public/Notifications.svg"
import US from "../../../public/United.svg"
import { ScrollArea } from "../ui/scroll-area"

// Update the main layout to be more responsive
export default function Dashboard() {
  return (
    <div className="flex flex-col md:flex-row max-h-screen bg-[#f9fafb] overflow-hidden">
      <SideBar />
      <div className="w-full flex-1 overflow-auto relative ">
        <header className="fixed z-10 top-0 right-0 left-0 md:left-[280px] flex sm:flex-row sm:items-center justify-between gap-4 px-4 sm:px-8 py-4 bg-white">
          <h1 className="text-2xl font-bold text-[#151d48]">Dashboard</h1>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <div className="relative xl:flex hidden">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-6 w-6 text-primary" />
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-3 rounded-md bg-background w-full lg:w-[260px] xl:w-[300px] text-sm focus:outline-none"
              />
            </div>
            <div className="lg:flex hidden items-center gap-2 cursor-pointer">
              <Image
                src={US}
                alt="US Flag"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm font-medium">Eng (US)</span>
              <ChevronDown className="h-4 w-4 text-[#737791]" />
            </div>
            <div>
              <Image
                src={Notification}
                alt="Profile"
                width={50}
                height={50}
                className="rounded-md"
              />
            </div>
            <div className="flex items-center gap-8">
              <Image
                src={Avatar}
                alt="Profile"
                width={50}
                height={50}
                className="rounded-md"
              />
              <div>
                <p className="text-sm font-semibold">Musfiq</p>
                <p className="text-xs text-[#737791]">Admin</p>
              </div>
              <ChevronDown className="h-4 w-4 text-[#737791]" />
            </div>
          </div>
        </header>
        <main className="mt-20 p-4 sm:p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
          <div className="md:col-span-2 lg:col-span-8">
            <TodaySales />
          </div>
          <div className="md:col-span-2 lg:col-span-4">
            <VisitorInsights />
          </div>
          <div className="md:col-span-2 lg:col-span-4">
            <TotalRevenue />
          </div>
          <div className="md:col-span-2 lg:col-span-4">
            <CustomerSatisfaction />
          </div>
          <div className="md:col-span-2 lg:col-span-4">
            <TargetVsReality />
          </div>
          <div className="md:col-span-2 lg:col-span-4">
            <TopProducts />
          </div>
          <div className="md:col-span-2 lg:col-span-4">
            <SalesMapping />
          </div>
          <div className="md:col-span-2 lg:col-span-4">
            <VolumeVsService />
          </div>
        </main>
      </div>
    </div>
  )
}
