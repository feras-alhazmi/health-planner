// pages/profile.tsx
import React from 'react';
import Head from 'next/head';
import Layout from '../Profile/componentsProfile/layout';
import StatCard from '../Profile/componentsProfile/StatCard';
import Timeline from '../Profile/componentsProfile/Timeline';
import MedicalHistory from '../Profile/componentsProfile/MedicalHistory';
import ContactInfo from '../Profile/componentsProfile/ContactInfo';
import CalendarComponent from './componentsProfile/CalendarComponent';
import MedicationTable, { StatusKey } from '../Profile/componentsProfile/MedicationTable'; // Adjust the import path as needed


const ProfilePage: React.FC = () => {
  // Placeholder data for the components
  const statCardsData = [
    { title: 'Patients', value: '92', icon: '👥' },
    { title: 'Weight', value: '92 kg', icon: '⚖️' },
    { title: 'Height', value: '182 cm', icon: '📏' },
    { title: 'Blood Type', value: 'O+', icon: '💉' },
  ];

  const timelineData = [
    { date: '10w4d 2024', event: 'Pre diabetic A1c: 10.4' },
    { date: '11w0d 2024', event: 'Follow-up A1c: 9.7' },
    { date: '11w0d 2024', event: 'Follow-up A1c: 9.7' },
    { date: '11w0d 2024', event: 'Follow-up A1c: 9.7' },
    { date: '11w0d 2024', event: 'Follow-up A1c: 9.7' },
    { date: '11w0d 2024', event: 'Follow-up A1c: 9.7' },
    // ... (other events)
  ];
  const medicationsData: Array<{ name: string; status: StatusKey; dosage: string; frequency: string; prescribingPhysician: string; startDate: string; endDate: string }> = [
    {
      name: 'Medication A',
      status: 'Active',
      dosage: '25mg',
      frequency: 'once daily',
      prescribingPhysician: 'Dr. Johnson',
      startDate: '03/10/2023',
      endDate: ''
    },
    {
      name: 'Medication B',
      status: 'Discontinued',
      dosage: '10mg',
      frequency: 'twice daily',
      prescribingPhysician: 'Dr. Smith',
      startDate: '01/05/2023',
      endDate: '02/15/2023'
    },
    // ... additional medication objects
  ];
  

  const medicalHistoryEntries = [
    {
      condition: 'Chronic disease',
      details: 'Diabetes, Hypertension, Asthma, Neurological Disorders',
    },
    {
      condition: 'Chronic disease',
      details: 'Diabetes, Hypertension, Asthma, Neurological Disorders',
    },
    {
      condition: 'Chronic disease',
      details: 'Diabetes, Hypertension, Asthma, Neurological Disorders',
    },
    {
      condition: 'Chronic disease',
      details: 'Diabetes, Hypertension, Asthma, Neurological Disorders',
    },
    // ...more entries
  ];

  const contactInfoData = {
    name: "Feras Ali Alhazmi",
    age: 38,
    gender: "Male",
    address: "Riyadh",
    job: "Accountant",
    phone: "(235) 555-0123",
    email: "walid.alhazmi@example.com",
    diagnosis: "Condition details...",
    healthBarriers: ["Fear of insulin", "Fear of needles"],
  };
  

  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Layout>
        <div className="container mx-auto p-4 grid grid-cols-4 grid-rows-4 gap-2"> {/* Adjusted the gap here */}
          {/* Stat Cards */}
          {statCardsData.map((card, index) => (
            <div className={`row-span-1 col-span-1`} key={index}>
              <StatCard {...card} />
            </div>
          ))}

          {/* Timeline */}
          <div className="row-span-2 col-span-1">
            <Timeline entries={timelineData} />
          </div>

          {/* Calendar */}
          <div className="row-span-1 col-span-2">
            <CalendarComponent />
          </div>

          {/* Medical History */}
          <div className="row-span-1 col-span-2">
            <MedicalHistory entries={medicalHistoryEntries} />
          </div>

          {/* Contact Info */}
          <div className="row-span-2 col-span-1">
            <ContactInfo {...contactInfoData} />
          </div>

          {/* Medication Table */}
          <div className="row-span-1 col-span-4">
            <MedicationTable medications={medicationsData} />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default ProfilePage;