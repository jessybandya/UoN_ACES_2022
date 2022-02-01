import React,{useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "../../../../../components1/MDBox";
import MDTypography from "../../../../../components1/MDTypography";

import MDButton from "../../../../../components1/MDButton";


// Material Dashboard 2 React example components
import DashboardLayout from "../../../../../examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "../../../../../examples/Navbars/DashboardNavbar";
import Footer from "../../../../../examples/Footer";
import Sem1 from "./Sem1"
import Sem2 from "./Sem2"

import {
  useMaterialUIController,
  setMiniSidenav,
  setTransparentSidenav,
  setWhiteSidenav,
} from "../../../../../context";

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { motion } from "framer-motion";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AddIcon from '@mui/icons-material/Add';
import CancelIcon from '@mui/icons-material/Cancel';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';

const Input = styled('input')({
  display: 'none',
});

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

function Year1() {
  const [notes, setNotes] = useState(false)
  const [pastpapers, setPastpapers] = useState(false)
   const [controller, dispatch] = useMaterialUIController();
   const { miniSidenav, transparentSidenav, whiteSidenav, darkMode, sidenavColor } = controller;
   const [sem1, setSem1] = React.useState('');
   const [sem2, setSem2] = React.useState('');
   const [showSem1, setShowSem1] = useState(false)
   const [addSem1, setAddSem1] = useState(false)
   const [notesTopic, setNotesTopic] = React.useState('');
   const [notesSubTopic, setSubNotesTopic] = React.useState('');
   const [notesUnit, setNotesUnit] = React.useState('');

   const handleChange1 = (event) => {
    setNotesTopic(event.target.value);
   };

   const handleChange3 = (event) => {
    setSubNotesTopic(event.target.value);
   };
   const handleChange4 = (event) => {
    setNotesUnit(event.target.value);
   };
   const showSem1Notes = () =>{
    setShowSem1(true)
    setAddSem1(false)
  }

  const showAddSem1 = () =>{
    setAddSem1(true)
    setShowSem1(false)
  }

   const handleChange = (event) => {
    setSem1(event.target.value);
   };
   const handleChange2 = (event) => {
    setSem2(event.target.value);
   };

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const [open2, setOpen2] = React.useState(false);
  const [scroll2, setScroll2] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
    setOpen2(false);
  };

  const handleClickOpen2 = (scrollType) => () => {
    setOpen2(true);
    setScroll2(scrollType);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };


  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

const showNotes = () =>{
  setNotes(true)
  setPastpapers(false)
}
const showPastpaers = () =>{
  setNotes(false)
  setPastpapers(true)
}
  return <div>
  <MDBox py={3}>
  <div >
  <Box sx={{ minWidth: 100,display: "flex" }}>
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Sementer 1</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={sem1}
      sx={{ height: 40}}
      label="Semester 1"
      onChange={handleChange}
    >
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 201 Phyics">FCE 201 Phyics</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 112 Mathematics">FCE 112 Mathematics</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="C001 COMMUNICATION SKILLS">C001 COMMUNICATION SKILLS</MenuItem>
    </Select>
  </FormControl>

  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Sementer 2</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={sem2}
    sx={{ height: 40}}
    label="Sementer 2"
    onChange={handleChange2}
  >
  <MenuItem onClick={handleClickOpen2('paper')} value="FCE 201 Phyics 2">FCE 201 Phyics 2</MenuItem>
  <MenuItem onClick={handleClickOpen2('paper')} value="FCE 112 Mathematics 2">FCE 112 Mathematics 2</MenuItem>
  <MenuItem onClick={handleClickOpen2('paper')} value="C001 COMMUNICATION SKILLS 2">C001 COMMUNICATION SKILLS 2</MenuItem>
  </Select>
</FormControl>
</Box>
</div>


<div>

<Dialog
  open={open}
  onClose={handleClose}
  scroll={scroll2}
  aria-labelledby="scroll-dialog-title"
  aria-describedby="scroll-dialog-description"
  style={{width: "100%"}}
  fullWidth
>

<MDBox><DialogTitle   style={{backgroundColor: "#1a2035",border: "1px solid #1a2035"}}
  id="scroll-dialog-title">
  <div style={{display: "flex",justifyContent: "space-between"}}>
  <div><AddIcon onClick={showAddSem1} fontSize='medium' style={{cursor: "pointer",color: "#fff"}}/></div> <div><MDBox style={{color: "#fff"}}>Year 1  Sem I</MDBox></div> <div> <CancelIcon fontSize='medium' onClick={handleClose} style={{cursor: "pointer",color: "#fff"}}/></div>
  </div>
  </DialogTitle></MDBox>

  <DialogContent style={{backgroundColor: "#1a2035"}} dividers={scroll2 === 'paper'}>
  <motion.div
  onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
  variants={flip}
  initial="hidden"
  animate="visible"
  exit="exit"
  >
  {addSem1 ?(
    <div>
      <div style={{display: "flex",justifyContent: "space-between"}}>
        <div></div> <div><h4>Add Note(s)</h4></div> <div><CancelIcon fontSize='medium' onClick={showSem1Notes} style={{cursor: "pointer"}}/></div>
      </div>
      
      <Box sx={{ minWidth: 120 }}>

      <FormControl fullWidth>
      <InputLabel >Select Unit</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={notesUnit}
        sx={{ height: 40,backgroundColor: "white"}}
        label="Select Unit"
        onChange={handleChange4}
      >
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 201 Phyics">FCE 201 Phyics</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 112 Mathematics">FCE 112 Mathematics</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="C001 COMMUNICATION SKILLS">C001 COMMUNICATION SKILLS</MenuItem>
      </Select>
    </FormControl>

    {notesUnit !== "" &&(
      <FormControl sx={{marginTop:2}} fullWidth>
        <InputLabel >Select Topic</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={notesTopic}
          sx={{ height: 40,backgroundColor: "white"}}
          label="Select Topic"
          onChange={handleChange1}
        >
          <MenuItem value="Topic 1">Topic 1</MenuItem>
          <MenuItem  value="Topic 2">Topic 2</MenuItem>
          <MenuItem value="Topic 3">Topic 3</MenuItem>
          <MenuItem value="Topic 4">Topic 4</MenuItem>
          <MenuItem value="Topic 5">Topic 5</MenuItem>
        </Select>
      </FormControl>
    )}



      {notesTopic !== "" &&(
        <FormControl sx={{marginTop:2}} fullWidth>
        <InputLabel >Select Sub Topic</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={notesSubTopic}
          sx={{ height: 40}}
          label="Select Sub Topic"
          onChange={handleChange3}
        >
          <MenuItem value="Topic 1">Topic 1</MenuItem>
          <MenuItem value="Topic 2">Topic 2</MenuItem>
          <MenuItem value="Topic 3">Topic 3</MenuItem>
          <MenuItem value="Topic 4">Topic 4</MenuItem>
          <MenuItem value="Topic 5">Topic 5</MenuItem>
        </Select>
      </FormControl>
      )}

      {notesSubTopic !== "" &&(
        <center>
        <Stack style={{marginTop:8}}>
        <label htmlFor="contained-button-file">
          <Input  id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span">
            <MDBox style={{color: "#fff"}}>Upload File</MDBox>
          </Button>
        </label>

      </Stack>   
        </center>

      )}
    </Box>
    </div>
  ): showSem1 ?(
    <Sem1  sem1={sem1}/>
  ):(
    <Sem1  sem1={sem1}/>
  )}
    
    </motion.div>
  </DialogContent>
  <DialogActions style={{backgroundColor: "#1a2035"}}>
  </DialogActions>
  
</Dialog>



<Dialog
  open={open2}
  onClose={handleClose2}
  scroll={scroll}
  aria-labelledby="scroll-dialog-title"
  aria-describedby="scroll-dialog-description"
  style={{width: "100%"}}
  fullWidth
>
  <MDBox><DialogTitle   style={{backgroundColor: "#1a2035",border: "1px solid #1a2035"}}
  id="scroll-dialog-title">

  <div style={{display: "flex",justifyContent: "space-between"}}>
  <div><AddIcon fontSize='medium' style={{cursor: "pointer",color: "#fff"}}/></div> <div><MDBox style={{color: "#fff"}}>Year 1  Sem I</MDBox></div> <div> <CancelIcon fontSize='medium' onClick={handleClose} style={{cursor: "pointer",color: "#fff"}}/></div>
  </div>  
  </DialogTitle></MDBox>
  <DialogContent style={{backgroundColor: "#1a2035"}} dividers={scroll === 'paper'}>
  <motion.div
  onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
  variants={flip}
  initial="hidden"
  animate="visible"
  exit="exit"
  >
    <Sem2  sem2={sem2}/>


  </motion.div>

  </DialogContent>
  <DialogActions style={{backgroundColor: "#1a2035"}}>
  </DialogActions>
</Dialog>
</div>

  </MDBox>
  </div>;
}

export default Year1;