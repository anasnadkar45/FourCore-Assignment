import Image from "next/image"
import Map from '../../../public/world 1.svg'
export default function SalesMapping() {
  return (
    <div className="bg-card shadow-md rounded-lg p-4 sm:p-6 h-full">
      <h2 className="text-lg font-semibold text-[#151d48] mb-4 sm:mb-6">Sales Mapping by Country</h2>
      <Image src={Map} alt="Map" className="h-[180px] sm:h-[240px] w-full" />
    </div>

  )
}
