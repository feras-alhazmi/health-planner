import { count } from 'console';
import React from 'react'
import { IoIosNotificationsOutline } from "react-icons/io";

type NotificationBadgeProps = {
    count: number
}
const NotificationBadge: React.FC<NotificationBadgeProps> = ({
    count
}) => {
    return (
        <div className='border-[1px] relative border-black rounded-full p-2'>
            <IoIosNotificationsOutline size={20} />
            <div className='absolute top-[-5px] right-[-2px] w-5 h-5 bg-red-500 rounded-full flex justify-center items-center dashboard_bg'>
                <p className='text-white text-xs font-light'>{count}</p>
            </div>
        </div>
    )
}

export default NotificationBadge