// pages/profile.tsx
import React from "react";
import Head from "next/head";
import Layout from "../Profile/componentsProfile/layout";
import StatCard from "../Profile/componentsProfile/StatCard";
import Timeline from "../Profile/componentsProfile/Timeline";
import MedicalHistory from "../Profile/componentsProfile/MedicalHistory";
import ContactInfo from "../Profile/componentsProfile/ContactInfo";
import CalendarComponent from "./componentsProfile/CalendarComponent";
import styles from './Profile.module.css'; // Assume this is where you keep your CSS

import MedicationTable, {
  StatusKey,
} from "../Profile/componentsProfile/MedicationTable"; // Adjust the import path as needed

const ProfilePage: React.FC = () => {
  // Placeholder data for the components
  const statCardsData = [
    { title: "Patients", value: "92", icon: "👥" },
    { title: "Weight", value: "92 kg", icon: "⚖️" },
    { title: "Height", value: "182 cm", icon: "📏" },
    { title: "Blood Type", value: "O+", icon: "💉" },
  ];

  const timelineData = [
    { date: "20/02/2024", event: "Pre diabetic" },
    { date: "20/02/2024", event: "Follow-up" },
    { date: "20/02/2024", event: "Follow-up" },
    { date: "20/02/2024", event: "Follow-up" },
    { date: "20/02/2024", event: "Follow-up" },
    { date: "20/02/2024", event: "Follow-up" },
    { date: "20/02/2024", event: "Follow-up" },
    { date: "20/02/2024", event: "Follow-up" },
    { date: "20/02/2024", event: "Follow-up" },
    { date: "20/02/2024", event: "Follow-up" },
    { date: "20/02/2024", event: "Follow-up" },
    // ... (other events)
  ];
  const medicationsData: Array<{
    name: string;
    status: StatusKey;
    dosage: string;
    frequency: string;
    prescribingPhysician: string;
    startDate: string;
    endDate: string;
  }> = [
      {
        name: "Medication A",
        status: "Active",
        dosage: "25mg",
        frequency: "once daily",
        prescribingPhysician: "Dr. Johnson",
        startDate: "03/10/2023",
        endDate: "",
      },
      {
        name: "Medication B",
        status: "Discontinued",
        dosage: "10mg",
        frequency: "twice daily",
        prescribingPhysician: "Dr. Smith",
        startDate: "01/05/2023",
        endDate: "02/15/2023",
      },
      // ... additional medication objects
    ];

  const medicalHistoryEntries = [
    {
      condition: "Chronic disease",
      details: "Diabetes, Hypertension, Asthma, Neurological Disorders",
    },
    {
      condition: "Chronic disease",
      details: "Diabetes, Hypertension, Asthma, Neurological Disorders",
    },
    {
      condition: "Chronic disease",
      details: "Diabetes, Hypertension, Asthma, Neurological Disorders",
    },
    {
      condition: "Chronic disease",
      details: "Diabetes, Hypertension, Asthma, Neurological Disorders",
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
        <title>Profile Page</title>
      </Head>
      <div className={styles.gridContainer}>
        {/* Stat Cards */}
        <div className={styles.statCardsContainer}>
          {statCardsData.map((card, index) => (
            <div key={index} className={styles.statCard}>
              <StatCard {...card} />
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className={styles.timelineContainer}>
          <Timeline entries={timelineData} />
        </div>

        {/* Calendar */}
        <div className={styles.calendarContainer}>
          <CalendarComponent />
        </div>


        {/* Medical History */}
        <div className={styles.medicalHistoryContainer}>
          <MedicalHistory entries={medicalHistoryEntries} />
        </div>

        {/* Contact Info */}
        <div className={styles.contactInfoContainer}>
          <ContactInfo {...contactInfoData} />
        </div>

        {/* Medication Table */}
        <div className={styles.medicationTableContainer}>
          <MedicationTable medications={medicationsData} />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;