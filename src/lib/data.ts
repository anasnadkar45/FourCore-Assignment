import DashboarLogo from '../../public/Dashboard.svg'
export const NavLinksData = [
    {
        lable: "Dashboard",
        icon: DashboarLogo,
        isActive: true,
    },
    {
        lable: "Leaderboard",
        icon: DashboarLogo,
        isActive: false,
    },
    {
        lable: "Order",
        icon: DashboarLogo,
        isActive: false,
    },
]

export const KpiCardsData = [
    {
        icon: DashboarLogo,
        total:'$1k',
        lable: "Total Sales",
        description:'+8% from yesterday',
        bgColor:"#FFE2E5",
        iconColor:'#FA5A7D'
    },
    {
        icon: DashboarLogo,
        total:'300',
        lable: "Total Orders",
        description:'+5% from yesterday',
        bgColor:"#FFF4DE",
        iconColor:'#FF947A'
    },
    {
        icon: DashboarLogo,
        total:'5',
        lable: "Product Sold",
        description:'+12% from yesterday',
        bgColor:"#DCFCE7",
        iconColor:'#3CD856'
    },
    {
        icon: DashboarLogo,
        total:'8',
        lable: "New Customers",
        description:'0.5% from yesterday',
        bgColor:"#F3E8FF",
        iconColor:'#BF83FF'
    },
]