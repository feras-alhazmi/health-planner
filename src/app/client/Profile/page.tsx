"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../Profile/componentsProfile/layout";
import StatCard from "../Profile/componentsProfile/StatCard";
import Timeline from "../Profile/componentsProfile/Timeline";
import _MedicalHistory from "../Profile/componentsProfile/MedicalHistory";
import ContactInfo from "../Profile/componentsProfile/ContactInfo";
import CalendarComponent from "./componentsProfile/CalendarComponent";
import styles from "./Profile.module.css"; // Assume this is where you keep your CSS
import { ContactInfoData, TempUser } from "./tempUser"; // adjust the import path as needed
import prisma from "@/app/prismaGenerate";

import MedicationTable, {
  StatusKey,
} from "../Profile/componentsProfile/MedicationTable"; // Adjust the import path as needed
import { promise } from "zod";
import { useAuthStore } from "@/core/auth/store/Auth-Store";
import { Disease, Event, Gender, MedicalHistory, Medications, Role, UserMedications } from "@prisma/client";
import ProfileHandler from "@/core/profileCore/BEprofileHandler";

// yousuf@test.com 
// yousuf123


// async function getUser(_id: string) {
//   // return await prisma.user.findUnique({
//   //   where: { Id: _id }
//   // });
//   return await prisma.user.findFirst();
// }
// async function getUserMedication(_id: string) {
//   const userMedications: UserMedications | undefined = await ProfileHandler.getUserMedications();
//   if (userMedications) {
//     return userMedications;
//   } else {
//     return null;
//   }
// }
// async function getMedicalHistory() {
//   const medicalHistory: MedicalHistory | undefined = await ProfileHandler.getMedicalHistory();
//   if (medicalHistory) {
//     return medicalHistory;
//   } else {
//     return null;
//   }
// }
async function getMedications(id: string) {
  const medications: Medications[] = await ProfileHandler.getMedications(id);
  return medications;
}
async function getdiseases(id: string) {
  const diseases: Disease[] = await ProfileHandler.getDiseases(id);
  return diseases;
}
async function getEvents(id: string) {
  const events: Event[] = await ProfileHandler.getEvents(id);
  return events;
}
function AgeCalc(dateOfBirth: Date) {
  return 10;
}

const ProfilePage: React.FC = () => {
  //const [userData, setUserData] = useState<TempUser | null>(null);
  const userData = useAuthStore(state => state.userData);
  const deseases = getdiseases(userData?.userId || "");
  const medications = getMedications(userData?.userId || "");
  const events = getEvents(userData?.userId || "");

  const contactInfo: ContactInfoData = {
    name: userData?.fullName || "",
    dob: userData?.dateOfBirth || new Date(),
    gender: userData?.gender || Gender.MALE,
    address: userData?.address || "",
    job: userData?.roles || Role.PATIENT,
    phone: userData?.phone || "",
    email: userData?.email || "",
    diagnosis: userData?.diagnosis || "",
    healthBarriers: userData?.healthBarriers || [""]
  }

  return (
    <>
      <Head>
        <title>Profile Page</title>
      </Head>
      <div className={styles.gridContainer}>
        Stat Cards
        <div className={styles.statCardsContainer}>
          {/* {userData.statCardsData.map((card, index) => (
            <div key={index} className={styles.statCard}>
              <StatCard {...card} />
            </div>
          ))} */}
        </div>

        {/* Timeline */}
        <div className={styles.timelineContainer}>
          {/* <Timeline entries={events} /> */}
        </div>

        {/* Calendar */}
        <div className={styles.calendarContainer}>
          <CalendarComponent />
        </div>

        {/* Medical History */}
        <div className={styles.medicalHistoryContainer}>
          {/* <_MedicalHistory entries={deseases} /> */}
        </div>

        {/* Contact Info */}
        <div className={styles.contactInfoContainer}>
          {/* <ContactInfo contactinfo={contactInfo} /> */}
        </div>

        {/* Medication Table */}
        <div className={styles.medicationTableContainer}>
          {/* <MedicationTable medications={medications} /> */}
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
