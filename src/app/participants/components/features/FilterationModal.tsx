import { Filteration } from '@/app/features/types'
import { useParticipantsStore } from '@/store/useParticipantsStore'
import { Select, SelectItem } from '@nextui-org/react'
import React from 'react'

interface FilterationModalProps {
    handleClose: () => void
}
const FilterationModal: React.FC<FilterationModalProps> = ({
    handleClose
}) => {
    const { setFilteration: setFilters, filteration: filters } = useParticipantsStore(state => state)

    const [filteration, setFilteration] = React.useState<Filteration[]>(filters)
    
    const filtersData = [
        {
            label: 'Age',
            value: 'age',
            options: ['select', 'asc', 'des']
        },
        {
            label: 'Gender',
            value: 'gender',
            options: ['select', 'male', 'female']
        },
        {
            label: 'Date Joined',
            value: 'dateJoined',
            options: ['select', 'asc', 'des']
        },
        {
            label: 'Last Activity',
            value: 'lastActivity',
            options: ['select', 'asc', 'des']
        }
    ]

    const handleChanges = (e: React.ChangeEvent<HTMLSelectElement>, label: string) => {
        const newFilteration = filteration.map(f => {
            if (f.attribute === label) {
                return {
                    attribute: label,
                    value: e.target.value
                }
            }
            return f
        })

        setFilteration(newFilteration)
    }

    const handleApplyFilter = () => {
        setFilters(filteration)
        handleClose()
    }
    return (
        <div className='bg-gray-200 p-5 shadow-lg rounded-lg w-[300px]'>
            <div className=''>
                <div className='flex flex-col'>
                    {
                        filtersData.map(filter => (
                            <div key={filter.value} className='flex flex-col mt-5'>
                                <p className='text-black text-md font-semibold mb-1'>{filter.label}</p>
                                <Select label={filter.label} className="max-w-xs py-0" selectedKeys={[
                                    filteration.find(f => f.attribute === filter.value)?.value ||
                                    filters.find(f => f.attribute === filter.value)?.value ||
                                    '']} onChange={(e) => handleChanges(e, filter.value)}>
                                    {
                                        filter.options.map(option => (
                                            <SelectItem key={option} value={option}>
                                                {option}
                                            </SelectItem>
                                        ))
                                    }
                                </Select>
                            </div>
                        ))
                    }
                </div>
                <button className='bg-[#0056B3] text-white px-5 py-2 rounded-lg mt-5' onClick={handleApplyFilter}>Apply Filter</button>
            </div>
        </div>
    )
}


export default FilterationModal