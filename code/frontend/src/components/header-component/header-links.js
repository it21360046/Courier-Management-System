import {FaHome} from 'react-icons/fa'
import {GoPackage} from 'react-icons/go'
import {MdOutlinePayments} from 'react-icons/md'
import {FaBinoculars} from 'react-icons/fa'
import {RiLoginBoxFill} from 'react-icons/ri'

const links = [
    {
        text: "Home",
        //icon: <FaHome/>,
        link: "/home"
    },
    {
        text: "pakages",
        //icon: <RiLoginBoxFill/>,
        link: "/none"
    },
    {
        text: "Orders",
        //icon: <GoPackage/>,
        link: "/"
    },

    {
        text: "Payment",
        //icon: <MdOutlinePayments/>,
        link: "/none"
    },

    {
        text: "Tracking",
        //icon: <FaBinoculars/>,
        link: "/none"
    },

   
]

export default links