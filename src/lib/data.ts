import DashboarLogo from '../../public/Dashboard.svg'
import Leaderboard from '../../public/Leaderboard.svg'
import Bag from '../../public/mdi_shopping-outline.svg'
import Chart from '../../public/Chart_Line.svg'
import Message from '../../public/mdi_message-processing-outline.svg'
import Setting from '../../public/mdi_cog-outline.svg'
import Signout from '../../public/Sign Out Icon.svg'

import Disc from '../../public/Disc Icon.svg'
import Sales from '../../public/Sales Barchat.svg'
import Costumers from '../../public/New Costumers Icon.svg'
import Order from '../../public/Order Icon.svg'
export const NavLinksData = [
    {
        lable: "Dashboard",
        icon: DashboarLogo,
        isActive: true,
    },
    {
        lable: "Leaderboard",
        icon: Leaderboard,
        isActive: false,
    },
    {
        lable: "Products",
        icon: Bag,
        isActive: false,
    },
    {
        lable: "Sales Report",
        icon: Chart,
        isActive: false,
    },
    {
        lable: "Message",
        icon: Message,
        isActive: false,
    },
    {
        lable: "Settings",
        icon: Setting,
        isActive: false,
    },
    {
        lable: "Signout",
        icon: Signout,
        isActive: false,
    },
]

export const KpiCardsData = [
    {
        icon: Sales,
        total: '$1k',
        lable: "Total Sales",
        description: '+8% from yesterday',
        bgColor: "#FFE2E5",
        iconColor: '#FA5A7D'
    },
    {
        icon: Order,
        total: '300',
        lable: "Total Orders",
        description: '+5% from yesterday',
        bgColor: "#FFF4DE",
        iconColor: '#FF947A'
    },
    {
        icon: Disc,
        total: '5',
        lable: "Product Sold",
        description: '+12% from yesterday',
        bgColor: "#DCFCE7",
        iconColor: '#3CD856'
    },
    {
        icon: Costumers,
        total: '8',
        lable: "New Customers",
        description: '0.5% from yesterday',
        bgColor: "#F3E8FF",
        iconColor: '#BF83FF'
    },
]