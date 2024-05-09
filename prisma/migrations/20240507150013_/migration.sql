-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE');

-- CreateEnum
CREATE TYPE "Language" AS ENUM ('EN', 'Arabic');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('PATIENT', 'DOCTOR');

-- CreateEnum
CREATE TYPE "MeasurementType" AS ENUM ('weight', 'blood_pressure_systolic', 'blood_pressure_diastolic', 'BMI');

-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Active', 'Discontuned', 'On_Hold');

-- CreateTable
CREATE TABLE "AuthUser" (
    "Id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "salt" TEXT NOT NULL,

    CONSTRAINT "AuthUser_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "User" (
    "Id" TEXT NOT NULL,
    "firstname" TEXT NOT NULL,
    "lastname" TEXT,
    "phone" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "bio" TEXT,
    "gender" "Gender" NOT NULL,
    "diagnosis" TEXT,
    "address" TEXT NOT NULL,
    "healthBarriers" TEXT[] DEFAULT ARRAY['']::TEXT[],
    "avatarUrl" TEXT,
    "timezone" TEXT,
    "language" "Language" NOT NULL DEFAULT 'EN',
    "year" INTEGER,
    "roles" "Role" NOT NULL DEFAULT 'PATIENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "lastActiveAt" TIMESTAMP(3),
    "authUserId" TEXT,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "MedicalHistory" (
    "Id" TEXT NOT NULL,
    "historyName" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "MedicalHistory_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Disease" (
    "Id" TEXT NOT NULL,
    "diseaseName" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "Disease_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Medications" (
    "Id" TEXT NOT NULL,
    "medicationName" TEXT NOT NULL,
    "status" "Status" NOT NULL,
    "dosage" TEXT NOT NULL,
    "frequency" TEXT NOT NULL,
    "prescribingPhysician" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),

    CONSTRAINT "Medications_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "UserMedications" (
    "Id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserMedications_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Measurements" (
    "Id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "measurementType" "MeasurementType" NOT NULL,
    "measurementValue" INTEGER NOT NULL,
    "measurementUnit" TEXT NOT NULL,
    "measuredOn" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userMeasurementsID" TEXT NOT NULL,

    CONSTRAINT "Measurements_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "UserMeasurements" (
    "Id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserMeasurements_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Event" (
    "Id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "MedicalHistoryDisease" (
    "medicalHistoryId" TEXT NOT NULL,
    "diseaseId" TEXT NOT NULL,

    CONSTRAINT "MedicalHistoryDisease_pkey" PRIMARY KEY ("medicalHistoryId","diseaseId")
);

-- CreateTable
CREATE TABLE "_MedicalHistoryDisease" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MedicationsToUserMedications" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "AuthUser_email_key" ON "AuthUser"("email");

-- CreateIndex
CREATE UNIQUE INDEX "AuthUser_password_key" ON "AuthUser"("password");

-- CreateIndex
CREATE UNIQUE INDEX "User_authUserId_key" ON "User"("authUserId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "MedicalHistory_userId_key" ON "MedicalHistory"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "UserMedications_userId_key" ON "UserMedications"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Measurements_userMeasurementsID_key" ON "Measurements"("userMeasurementsID");

-- CreateIndex
CREATE UNIQUE INDEX "UserMeasurements_userId_key" ON "UserMeasurements"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Event_userId_key" ON "Event"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_MedicalHistoryDisease_AB_unique" ON "_MedicalHistoryDisease"("A", "B");

-- CreateIndex
CREATE INDEX "_MedicalHistoryDisease_B_index" ON "_MedicalHistoryDisease"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_MedicationsToUserMedications_AB_unique" ON "_MedicationsToUserMedications"("A", "B");

-- CreateIndex
CREATE INDEX "_MedicationsToUserMedications_B_index" ON "_MedicationsToUserMedications"("B");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_authUserId_fkey" FOREIGN KEY ("authUserId") REFERENCES "AuthUser"("Id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalHistory" ADD CONSTRAINT "MedicalHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMedications" ADD CONSTRAINT "UserMedications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Measurements" ADD CONSTRAINT "Measurements_userMeasurementsID_fkey" FOREIGN KEY ("userMeasurementsID") REFERENCES "UserMeasurements"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserMeasurements" ADD CONSTRAINT "UserMeasurements_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalHistoryDisease" ADD CONSTRAINT "MedicalHistoryDisease_medicalHistoryId_fkey" FOREIGN KEY ("medicalHistoryId") REFERENCES "MedicalHistory"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MedicalHistoryDisease" ADD CONSTRAINT "MedicalHistoryDisease_diseaseId_fkey" FOREIGN KEY ("diseaseId") REFERENCES "Disease"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedicalHistoryDisease" ADD CONSTRAINT "_MedicalHistoryDisease_A_fkey" FOREIGN KEY ("A") REFERENCES "Disease"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedicalHistoryDisease" ADD CONSTRAINT "_MedicalHistoryDisease_B_fkey" FOREIGN KEY ("B") REFERENCES "MedicalHistory"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedicationsToUserMedications" ADD CONSTRAINT "_MedicationsToUserMedications_A_fkey" FOREIGN KEY ("A") REFERENCES "Medications"("Id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_MedicationsToUserMedications" ADD CONSTRAINT "_MedicationsToUserMedications_B_fkey" FOREIGN KEY ("B") REFERENCES "UserMedications"("Id") ON DELETE CASCADE ON UPDATE CASCADE;
