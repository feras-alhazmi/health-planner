"use client";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../Profile/componentsProfile/layout";
import StatCard from "../Profile/componentsProfile/StatCard";
import Timeline from "../Profile/componentsProfile/Timeline";
import MedicalHistory from "../Profile/componentsProfile/MedicalHistory";
import ContactInfo from "../Profile/componentsProfile/ContactInfo";
import CalendarComponent from "./componentsProfile/CalendarComponent";
import styles from "./Profile.module.css"; // Assume this is where you keep your CSS
import { TempUser } from "./tempUser"; // adjust the import path as needed
import prisma from "@/app/prismaGenerate";

import MedicationTable, {
  StatusKey,
} from "../Profile/componentsProfile/MedicationTable"; // Adjust the import path as needed
import { promise } from "zod";
import { Gender, Language, Role, Status, MeasurementType } from '@prisma/client';
import ProfileHandler from "./BE/profilehandler";

async function createUserWithDetails() {
  const tempUser: TempUser = {
    contactInfoData: {
      firstname: "John",
      lastname: "Doe",
      phone: "+1234567890",
      dateOfBirth: new Date("1990-01-01"),
      bio: "Example bio here.",
      gender: Gender.MALE,
      diagnosis: "Type 2 Diabetes",
      address: "1234 Example St, Example City",
      healthBarriers: ["Insulin resistance", "Fear of needles"],
      email: "john.doe23@example.com",
      role: Role.PATIENT
    },
    statCardsData: [
      { title: "Patients", value: "92", icon: "👥" },
      { title: "Weight", value: "80 kg", icon: "⚖️" },
      { title: "Height", value: "180 cm", icon: "📏" },
      { title: "Blood Type", value: "O+", icon: "💉" }
    ],
    UserMedications: {
      medications: [
        {
          medicationName: "Metformin",
          status: Status.Active,
          dosage: "500 mg",
          frequency: "Twice a day",
          prescribingPhysician: "Dr. Smith",
          startDate: new Date("2023-01-01"),
          endDate: new Date("2023-12-31")
        }
      ]
    },
    medicalHistory: {
      historyName: "General Checkup",
      diseases: [
        {
          diseaseName: "Hypertension",
          description: "High blood pressure, controlled through medication."
        }
      ]
    },
    events: {
      date: new Date("2023-01-01"),
      name: "Annual Physical Exam"
    }
  };
  ProfileHandler.postUser(tempUser);
  return tempUser;
}
// try {
//   const user = await prisma.user.create({
//     data: {
//       firstname: "John",
//       lastname: "Doe",
//       phone: "1234567890",
//       dateOfBirth: new Date('1990-01-01'),
//       bio: "This is a bio.",
//       gender: Gender.MALE,
//       diagnosis: "Healthy",
//       address: "123 Main St, Anytown, USA",
//       healthBarriers: ["None"],
//       avatarUrl: "http://example.com/avatar.jpg",
//       timezone: "UTC",
//       language: Language.EN,
//       year: 1990,
//       roles: Role.PATIENT,
//       email: "john.doe@example.com",
//       lastActiveAt: new Date(),
//       medicalHistory: {
//         create: {
//           historyName: "Initial Checkup",
//           diseases: {
//             create: {
//               diseaseName: "Hypertension",
//               description: "Details about Hypertension"
//             }
//           }
//         }
//       },
//       userMedications: {
//         create: {
//           medications: {
//             create: [{
//               medicationName: "Aspirin",
//               status: Status.Active,
//               dosage: "100mg",
//               frequency: "Once daily",
//               prescribingPhysician: "Dr. Smith",
//               startDate: new Date(),
//               endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1))
//             }]
//           }
//         }
//       },
//       // userMeasurements: {
//       //     create: {
//       //         measurements: {
//       //             create: {
//       //                 name: "Weight",
//       //                 measurementType: MeasurementType.weight,
//       //                 measurementValue: 180,
//       //                 measurementUnit: "kg",
//       //                 measuredOn: new Date()
//       //             }
//       //         }
//       //     }
//       // },
//       Event: {
//         create: {
//           date: new Date(),
//           name: "Annual Health Event"
//         }
//       }
//     },
//     include: {
//       medicalHistory: true,
//       userMedications: {
//         include: {
//           medications: true
//         }
//       },
//       userMeasurements: {
//         include: {
//           measurements: true
//         }
//       },
//       Event: true
//     }
//   });
//   console.log('User created with details:', user);
//   return user;
// } catch (error) {
//   console.error('Error creating user with details:', error);
//   throw error;
// }

async function getUser(_id: string) {
  // return await prisma.user.findUnique({
  //   where: { Id: _id }
  // });
  return await prisma.user.findFirst();
}
async function getUserMedication(_id: string) {
  return await prisma.userMedications.findUnique({
    where: { userId: _id },
  });
}
async function getMedicalHistory(_id: string) {
  return await prisma.medicalHistory.findUnique({
    where: { userId: _id },
  });
}
async function getMedications(_id: string) {
  return await prisma.medications.findMany({
    where: { userMedications: { some: { userId: _id } } },
  });
}
async function getdisease(_id: string) {
  return await prisma.disease.findMany({
    where: { histories: { some: { userId: _id } } },
  });
}
function AgeCalc(dateOfBirth: Date) {
  return 10;
}

const ProfilePage: React.FC = () => {
  //const [userData, setUserData] = useState<TempUser | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     createUserWithDetails();
  //     //console.log(prisma.user.findMany());
  //     const user = await getUser("111"); // Use the actual user ID needed
  //     //const userMedication = await getUserMedication("111");
  //     let id = user?.Id ?? "";
  //     const userMedication = await getMedications(id);
  //     const userMedicalHistory = await getdisease(id);
  //     const now = new Date();
  //     if (user && userMedication && userMedicalHistory) {
  //       // Decompose user data into separate variables
  //       const contactInfo = {
  //         name: `${user.firstname} ${user.lastname ?? ""}`,
  //         age: AgeCalc(user.dateOfBirth), // Convert to age if necessary
  //         gender: user.gender.toString(),
  //         address: "user.address" ?? "NAN",
  //         job: user.roles.toString(),
  //         phone: user.phone,
  //         email: user.email,
  //         diagnosis: "user.diagnosis" ?? 'N/A',
  //         healthBarriers: ["user.healthBarriers"],
  //       };

  //       const statCards = [
  //         { title: "Patients", value: "92", icon: "👥" },
  //         { title: "Weight", value: "92 kg", icon: "⚖️" },
  //         { title: "Height", value: "182 cm", icon: "📏" },
  //         { title: "Blood Type", value: "O+", icon: "💉" },
  //       ];

  //       const timelineEvents = userMedicalHistory.map(mh => ({
  //         date: "mh.createdAt.toISOString()", // Assuming createdAt for event timing
  //         event: "mh.description",
  //       }));
  //       const medications = userMedication.map(med => ({
  //         name: med.medicationName,
  //         status: med.status.toString(),
  //         dosage: med.dosage,
  //         frequency: med.frequency,
  //         prescribingPhysician: med.prescribingPhysician,
  //         startDate: med.startDate, // Assuming startDate is not nullable
  //         endDate: med.endDate ?? now // Handle nullable endDate
  //       })
  //       );  // Provide a default empty array if userMedications is null

  //       const medicalHistory = userMedicalHistory.map((mh) => ({
  //         condition: mh.diseaseName,
  //         details: "mh.description" ?? 'No details provided', // Handle nullable description
  //       }));  // Provide a default empty array if medicalHistory is null
  //       // Combine all variables into TempUser structure
  //       setUserData({
  //         contactInfoData: contactInfo,
  //         statCardsData: statCards,
  //         timelineData: timelineEvents,
  //         medicationsData: medications,
  //         medicalHistoryEntries: medicalHistory,
  //       });
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (!userData) {
  //   return <div>Loading...</div>;
  // }
  createUserWithDetails();
  const [user, setUser] = useState<TempUser | null>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchUser() {
      try {
        const user1 = await ProfileHandler.getUserByEmail("john.doe23@example.com");
        console.log("User data:", user1);
        setUser(user1);
      } catch (error) {
        console.error("Failed to fetch user:");
        //setError(error);
      }
    }

    fetchUser();
  }, []); // Empty dependency array means this effect will only run once after the component mounts.

  //  if (error) return <div>Error: {error}</div>;
  if (!user) return <div>Loading...</div>;
  const statCards = [
    { title: "Patients", value: "92", icon: "👥" },
    { title: "Weight", value: "92 kg", icon: "⚖️" },
    { title: "Height", value: "182 cm", icon: "📏" },
    { title: "Blood Type", value: "O+", icon: "💉" },
  ];
  return (
    <>
      <Head>
        <title>Profile Page</title>
      </Head>
      <div className={styles.gridContainer}>
        {/* Stat Cards */}
        <div className={styles.statCardsContainer}>
          {statCards.map((card, index) => (
            <div key={index} className={styles.statCard}>
              <StatCard {...card} />
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className={styles.timelineContainer}>
          <Timeline events={[user.events]} />
        </div>

        {/* Calendar */}
        <div className={styles.calendarContainer}>
          <CalendarComponent />
        </div>

        {/* Medical History */}
        <div className={styles.medicalHistoryContainer}>
          <MedicalHistory history={user.medicalHistory} />
        </div>

        {/* Contact Info */}
        <div className={styles.contactInfoContainer}>
          <ContactInfo contactInfoData={user.contactInfoData} />
        </div>

        {/* Medication Table */}
        <div className={styles.medicationTableContainer}>
          <MedicationTable userMedications={user.UserMedications} />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
