"use client"

import {
    Menu,
    X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Logo from '../../../public/dummy logo.svg'
import Logo2 from '../../../public/Logo2.svg'
import { NavLinksData } from "@/lib/data"


const NavLink = ({ lable, icon, isActive = false }: {
    lable: string,
    icon: any,
    isActive: boolean
}) => {
    return (
        <Link href="#" className={`flex items-center gap-3 px-6 py-3 rounded-md ${isActive ? "bg-[#5d5fef] text-white " : "bg-transparent text-secondary-foreground hover:bg-primary/20 "}`}>
            <Image src={icon} alt={lable} className={`h-7 w-7 ${isActive ? "text-foreground" : "rounded-md"}`} />
            <span className="font-medium">{lable}</span>
        </Link>
    )
}

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden fixed top-4 left-4 z-30 bg-white p-2 rounded-md shadow-md"
            >
                <Menu className="h-6 w-6 text-[#151d48]" />
            </button>

            {/* Overlay for mobile */}
            {isOpen && <div className="md:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}></div>}

            {/* Sidebar */}
            <div
                className={`
        fixed md:static inset-y-0 left-0 z-50
        w-[280px] bg-white border-r border-[#eff1f3] flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
      `}
            >
                <div className="flex justify-between items-center p-6">
                    <div className="flex items-center gap-3">
                        <Image src={Logo} alt="Logo" width={40} height={40} />
                        <span className="text-xl font-bold text-[#151d48]">Dabang</span>
                    </div>

                    {/* Close button for mobile */}
                    <button onClick={() => setIsOpen(false)} className="md:hidden">
                        <X className="h-6 w-6 text-[#151d48]" />
                    </button>
                </div>
                <nav className="mt-4 flex-1 px-4 space-y-2">
                    {NavLinksData.map((navItem) => (
                        <NavLink
                            key={navItem.lable}
                            icon={navItem.icon}
                            lable={navItem.lable}
                            isActive={navItem.isActive}
                        />
                    ))}
                </nav>
                <div className="p-6 mb-25">
                    <div className="bg-primary relative rounded-lg p-6 text-white">
                        <div className="absolute -top-24 -right-1/3 w-[200px] h-[200px] rounded-full bg-linear-to-tr from-[#FFFFFF66] to-40% to-[#FFFFFF00]"></div>
                        <div className="flex justify-center mb-4">
                            <Image src={Logo2} alt="Logo" width={54} height={54} />
                        </div>
                        <h3 className="text-lg font-bold text-center mb-1">Dabang Pro</h3>
                        <p className="text-xs text-center text-white/80 mb-4">Get access to all features on retumbas</p>
                        <button className="w-full bg-white text-primary rounded-md py-2 font-semibold text-md">Get Pro</button>
                        <div className="absolute -bottom-1/2 -left-1/3 w-[200px] h-[200px] rounded-full bg-linear-to-tr from-[#FFFFFF00] to-[#FFFFFF66]"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
