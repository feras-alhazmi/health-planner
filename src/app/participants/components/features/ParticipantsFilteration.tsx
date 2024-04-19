import React from 'react';
import { AiOutlineDown } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import FilterationModal from './FilterationModal';

const ParticipantsFilteration: React.FC = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    return (
        <div className='flex w-full justify-between lg:justify-end'>
            <button className='dashboard_bg text-white px-3 py-2 rounded-full flex items-center'>
                <GrAdd className='inline-block mr-2' />
                <p className='text-white font-light'>Add Participant</p>
            </button>
            <div className='flex relative'>
                <button className='px-3 py-2 rounded-md ml-2 text-[#000000]'>A-Z</button>
                <button className='bg-white text-black px-5 py-2 rounded-md ml-2 flex items-center' onClick={() => setOpen(!open)}>
                    <p>Filter</p>
                    <AiOutlineDown className='inline-block ml-2' />
                </button>
                {open && <div className='absolute top-10 right-0 shadow-md'>
                    <FilterationModal />
                </div>}
            </div>
        </div>
    );
}

export default ParticipantsFilteration;
