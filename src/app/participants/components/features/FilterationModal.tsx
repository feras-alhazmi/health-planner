import React from 'react'

type filteration = {
    attribute: string,
    value: string
}
const FilterationModal: React.FC = () => {
    const [filteration, setFilteration] = React.useState<filteration>({
        attribute: '',
        value: ''
    })
    return (
        <div className='bg-white p-5 rounded-lg w-[300px] z-[47823684728]'>
            <h1 className='text-lg font-bold'>Filter Participants</h1>
            <div className='my-5'>
                <label htmlFor='attribute' className='block text-sm font-medium text-gray-700'>Attribute</label>
                <select
                    id='attribute'
                    name='attribute'
                    className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
                    onChange={(e) => setFilteration({ ...filteration, attribute: e.target.value })}
                >
                    <option value=''>Select Attribute</option>
                    <option value='name'>Name</option>
                    <option value='age'>Age</option>
                </select>

                <label htmlFor='value' className='block text-sm font-medium text-gray-700'>Value</label>
                <input
                    type='text'
                    id='value'
                    name='value'
                    className='mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md'
                    onChange={(e) => setFilteration({ ...filteration, value: e.target.value })}
                />

                <button className='bg-[#0056B3] text-white px-5 py-2 rounded-lg mt-5'>Apply Filter</button>
            </div>
        </div>
    )
}

export default FilterationModal