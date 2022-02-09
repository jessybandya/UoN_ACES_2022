import React,{useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "../../../../../../components1/MDBox";
import MDTypography from "../../../../../../components1/MDTypography";

import MDButton from "../../../../../../components1/MDButton";


// Material Dashboard 2 React example components
import DashboardLayout from "../../../../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../../../../examples/Footer";


import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "../../../../../../context";

import Chemistry from "./Units/Chemistry"
import CivilEngineering from "./Units/CivilEngineering"
import CommunicationSkills from "./Units/CommunicationSkills"
import ComputerScience from "./Units/ComputerScience"
import EngineeringMechanics from "./Units/EngineeringMechanics"
import HivAids from "./Units/HivAids"
import Physics from "./Units/Physics"
import PureMaths from "./Units/PureMaths"

function Sem1({ sem1 }) {
  return(
        <div>

           {sem1 === "FCE 101 INTRODUCTION TO CIVIL ENGINEERING" &&(
              <CivilEngineering />
           )}

           {sem1 === "FCE 181 CHEMISTRY" &&(
            <Chemistry />
         )}

         {sem1 === "CCS 001 COMMUNICATION SKILLS" &&(
          <CommunicationSkills />
         )}

         {sem1 === "FCE 165 COMPUTER SCIENCE" &&(
        <ComputerScience />
         )}

         {sem1 === "FCE 163 ENGINEERING MECHANICS (Statics)" &&(
            <EngineeringMechanics />
         )}

         {sem1 === "CCS HIV/AIDS" &&(
            <HivAids />
        )}

        {sem1 === "FCE 131 PHYSICS" &&(
           <Physics />
       )}

        {sem1 === "FCE 161 PURE MATHEMATICS" &&(
         <PureMaths />
        )}
        </div>
        );
      }

export default Sem1;
