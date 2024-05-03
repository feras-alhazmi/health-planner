// pages/profile.tsx
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../Profile/componentsProfile/layout";
import StatCard from "../Profile/componentsProfile/StatCard";
import Timeline from "../Profile/componentsProfile/Timeline";
import MedicalHistory from "../Profile/componentsProfile/MedicalHistory";
import ContactInfo from "../Profile/componentsProfile/ContactInfo";
import CalendarComponent from "./componentsProfile/CalendarComponent";
import styles from './Profile.module.css'; // Assume this is where you keep your CSS
import { TempUser } from './tempUser'; // adjust the import path as needed
import prisma from "@/app/prismaGenerate";

import MedicationTable, {
  StatusKey,
} from "../Profile/componentsProfile/MedicationTable"; // Adjust the import path as needed
import { promise } from "zod";


async function getUser(_id: string) {
  return await prisma.user.findUnique({
    where: { Id: _id },
    include: {
      //events: true,
      medicalHistory: true,  // Assuming one-to-many and storing as an array
      userMedications: {
        include: {
          medications: true  // Assuming medications is under userMedications
        }
      },
      userMeasurements: true, // Example, not used directly in previous placeholders
    }
  });
}


const ProfilePage: React.FC = () => {
  const [userData, setUserData] = useState<TempUser | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = await getUser("111"); // Use the actual user ID needed
      if (user) {
        // Decompose user data into separate variables
        const contactInfo = {
          name: `${user.firstname} ${user.lastname ?? ""}`,
          age: user.dateOfBirth, // Convert to age if necessary
          gender: user.gender,
          address: user.address,
          job: user.job,
          phone: user.phone,
          email: user.email,
          diagnosis: user.diagnosis ?? "N/A",
          healthBarriers: user.healthBarriers,
        };

        const statCards = [
          { title: "Patients", value: "92", icon: "👥" },
          { title: "Weight", value: "92 kg", icon: "⚖️" },
          { title: "Height", value: "182 cm", icon: "📏" },
          { title: "Blood Type", value: "O+", icon: "💉" },
        ];

        const timelineEvents = user.medicalHistory.map(mh => ({
          date: mh.createdAt.toISOString(), // Assuming createdAt for event timing
          event: mh.description,
        }));
        const medications = user.userMedications ? user.userMedications.flatMap(um =>
          um.medications.map(med => ({
            name: med.medicationName,
            status: med.status,
            dosage: med.dosage,
            frequency: med.frequency,
            prescribingPhysician: med.prescribingPhysician,
            startDate: med.startDate.toISOString(), // Assuming startDate is not nullable
            endDate: med.endDate?.toISOString() // Handle nullable endDate
          })
          )) : [];  // Provide a default empty array if userMedications is null

        const medicalHistory = user.medicalHistory ? user.medicalHistory.map(mh => ({
          condition: mh.historyName,
          details: mh.description ?? 'No details provided', // Handle nullable description
        })) : [];  // Provide a default empty array if medicalHistory is null
        // Combine all variables into TempUser structure
        setUserData({
          contactInfoData: contactInfo,
          statCardsData: statCards,
          timelineData: timelineEvents,
          medicationsData: medications,
          medicalHistoryEntries: medicalHistory,
        });
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>Profile Page</title>
      </Head>
      <div className={styles.gridContainer}>
        {/* Stat Cards */}
        <div className={styles.statCardsContainer}>
          {tempUserData.statCardsData.map((card, index) => (
            <div key={index} className={styles.statCard}>
              <StatCard {...card} />
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className={styles.timelineContainer}>
          <Timeline entries={tempUserData.timelineData} />
        </div>

        {/* Calendar */}
        <div className={styles.calendarContainer}>
          <CalendarComponent />
        </div>


        {/* Medical History */}
        <div className={styles.medicalHistoryContainer}>
          <MedicalHistory entries={tempUserData.medicalHistoryEntries} />
        </div>

        {/* Contact Info */}
        <div className={styles.contactInfoContainer}>
          <ContactInfo {...tempUserData.contactInfoData} />
        </div>

        {/* Medication Table */}
        <div className={styles.medicationTableContainer}>
          <MedicationTable medications={tempUserData.medicationsData} />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;