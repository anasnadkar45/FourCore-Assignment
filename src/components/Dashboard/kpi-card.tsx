import Image from 'next/image'
import React from 'react'

interface KpiCardProps {
    icon: any,
    total: string,
    lable: string,
    description: string,
    bgColor: string,
    iconColor: string
}
const KpiCard = ({
    icon,
    total,
    lable,
    description,
    bgColor,
    iconColor
}: KpiCardProps) => {
    return (
        <div className={`rounded-lg p-3 flex flex-col gap-2`} style={{ backgroundColor: bgColor }}>
            <div className={`h-10 w-10 rounded-full flex items-center justify-center mb-4`} style={{ backgroundColor: iconColor }}>
                <Image src={icon} alt={lable} className='w-5 h-5' />
            </div>
            <h3 className="text-2xl font-bold mb-1">{total}</h3>
            <p className="text-sm  mb-1">{lable}</p>
            <p className="text-xs text-[#4079ED] flex items-center">
                {description}
                <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                >
                    <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </p>
        </div>
    )
}

export default KpiCard