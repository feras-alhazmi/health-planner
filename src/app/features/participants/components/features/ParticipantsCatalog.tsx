import React from 'react'
import ParticipantsFilteration from './ParticipantsFilteration'
import ParticipantCard from './ParticipantCard'
import { User } from '@/app/features/types'


const ParticipantsCatalog = () => {
  const usersData: User[] = [
    {
      name: 'Ahmad Ali Hussain',
      age: 28,
      email: 'michelle.rivera@example.com',
      image: '/assets/participant.png',
      phone: '(239) 555-0108',
      gender: 'Male'
    },
    {
      name: 'John Doe',
      age: 35,
      email: 'john.doe@example.com',
      image: '/assets/participant.png',
      phone: '(123) 456-7890',
      gender: 'Male'
    },
    {
      name: 'Jane Smith',
      age: 30,
      email: 'jane.smith@example.com',
      image: '/assets/participant.png',
      phone: '(987) 654-3210',
      gender: 'Female'
    },
    {
      name: 'Michael Johnson',
      age: 42,
      email: 'michael.johnson@example.com',
      image: '/assets/participant.png',
      phone: '(555) 123-4567',
      gender: 'Male'
    },
    {
      name: 'Emily Davis',
      age: 25,
      email: 'emily.davis@example.com',
      image: '/assets/participant.png',
      phone: '(111) 222-3333',
      gender: 'Female'
    },
    {
      name: 'David Wilson',
      age: 38,
      email: 'david.wilson@example.com',
      image: '/assets/participant.png',
      phone: '(444) 555-6666',
      gender: 'Male'
    },
    {
      name: 'Sarah Thompson',
      age: 31,
      email: 'sarah.thompson@example.com',
      image: '/assets/participant.png',
      phone: '(777) 888-9999',
      gender: 'Female'
    },
    {
      name: 'Christopher Martinez',
      age: 29,
      email: 'christopher.martinez@example.com',
      image: '/assets/participant.png',
      phone: '(222) 333-4444',
      gender: 'Male'
    },
    {
      name: 'Jessica Anderson',
      age: 27,
      email: 'jessica.anderson@example.com',
      image: '/assets/participant.png',
      phone: '(666) 777-8888',
      gender: 'Female'
    },
    {
      name: 'Daniel Clark',
      age: 33,
      email: 'daniel.clark@example.com',
      image: '/assets/participant.png',
      phone: '(999) 000-1111',
      gender: 'Male'
    },
    {
      name: 'Olivia Rodriguez',
      age: 24,
      email: 'olivia.rodriguez@example.com',
      image: '/assets/participant.png',
      phone: '(444) 555-6666',
      gender: 'Female'
    },
    {
      name: 'Matthew Lee',
      age: 36,
      email: 'matthew.lee@example.com',
      image: '/assets/participant.png',
      phone: '(777) 888-9999',
      gender: 'Male'
    }
  ]
  return (
    <div className='w-full flex flex-col h-full'>
      <ParticipantsFilteration />
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-5 flex-grow h-1 overflow-y-auto'>
        {
          usersData?.splice(0)?.map((user, index) => <ParticipantCard participant={user} key={index} />)
        }
      </div>
    </div>
  )
}

export default ParticipantsCatalog