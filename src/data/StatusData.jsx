import { BsClipboardCheck } from "react-icons/bs";
import { FaRegSmileBeam } from "react-icons/fa";
import { IoCheckmarkDone } from "react-icons/io5";
import { LiaPizzaSliceSolid } from "react-icons/lia";
import { MdOutlineDeliveryDining } from "react-icons/md";

export const statusList = [
    {
        icon: <BsClipboardCheck className="self-center text-5xl"/>,
        status:'Order Placed',
        value:"order_placed"
    },
    {
        icon: <IoCheckmarkDone className="self-center text-5xl"/>,
        status:'Order Confirmed',
        value:"order_confirmed"
    },
    {
        icon: <LiaPizzaSliceSolid className="self-center text-5xl"/>,
        status:'Order Preparing',
        value:"order_preparing"
    },
    {
        icon: <MdOutlineDeliveryDining className="self-center text-5xl"/>,
        status:'Order Delivered',
        value:"order_delivered"
    },
    {
        icon: <FaRegSmileBeam className="self-center text-5xl"/>,
        status:'Order Completed',
        value:"order_completed"
    }
]