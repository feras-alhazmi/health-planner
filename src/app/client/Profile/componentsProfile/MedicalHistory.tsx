import React, { useState, useEffect } from "react";
import { Avatar, IconButton, Typography } from "@mui/material";
import { FaNotesMedical } from "react-icons/fa";
import EditIcon from "@mui/icons-material/Edit";
import { Disease } from "@prisma/client";

type MedicalHistoryProps = {
  entries: Promise<Disease[]>;
};

const MedicalHistory: React.FC<MedicalHistoryProps> = ({ entries }) => {
  const [diseases, setDiseases] = useState<Disease[]>([]);

  useEffect(() => {
    entries
      .then((data) => {
        setDiseases(data);
      })
      .catch((error) => {
        console.error("Failed to load diseases:", error);
      });
  }, [entries]);

  return (
    <div
      className="bg-white shadow overflow-hidden sm:rounded-md"
      style={{ padding: "20px" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* <Avatar alt="Profile Picture" src="/path-to-your-image.jpg" sx={{ width: 56, height: 56, marginRight: '10px' }} /> */}
          <Typography variant="h5" component="h1">
            Medical History
          </Typography>
        </div>
        <IconButton aria-label="edit">
          <EditIcon />
        </IconButton>
      </div>
      <ul>
        {diseases.map((disease, index) => (
          <li key={index} className="px-4 py-4 flex items-center space-x-4">
            <FaNotesMedical className="h-6 w-6 text-gray-400" />
            <div className="flex flex-col">
              <span className="text-sm font-medium text-gray-900">
                {disease.diseaseName}
              </span>
              <span className="text-sm text-gray-500">
                {disease.description}
              </span>
              <span className="text-sm font-medium text-gray-900">
                {disease.diseaseName}
              </span>
              <span className="text-sm text-gray-500">
                {disease.description}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MedicalHistory;
