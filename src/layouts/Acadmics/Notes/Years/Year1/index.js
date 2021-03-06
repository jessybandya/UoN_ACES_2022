import React,{useState, useEffect} from 'react';
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "../../../../../components1/MDBox";
import MDInput from "../../../../../components1/MDInput";

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
import Comments from './Sem1/Comments';
import References from './Sem1/References';
import CommentIcon from '@mui/icons-material/Comment';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { auth1, db } from '../../../../../components/firebase';
import Avatar from '@mui/material/Avatar';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import AddNotes from './Sem1/Addnotes';
import AvailableRef from './Sem1/References/AvailbleRef';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Exams from './Sem1/Exams';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

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
   const [comments, setComments] = useState(false)
   const [references, setReferences] = useState(false)
   const [profileUserData, setProfileUserData] = useState();
   const [value, setValue] = useState('');
   const [ref,setRef] = useState(false)
   const [addRef,setAddRef] = useState(false)
   const theme = useTheme();
   const [value1, setValue1] = React.useState(0);
 
   const handleChange0 = (event, newValue) => {
     setValue1(newValue);
   };
 
   const handleChangeIndex = (index) => {
     setValue(index);
   };

   const showRef = () =>{
     setRef(true)
     setAddRef(false)
   }

   const addRef1 = () => {
    setRef(false)
    setAddRef(true)
   }

   const handleChange5 = (event) => {
     setValue(event.target.value);
   };

   const sendNotesComment = (e) =>{
       e.preventDefault()

       setValue("")
   }

   useEffect(() => {
     db.collection('users').doc(`${auth1?.currentUser?.uid}`).onSnapshot((doc) => {
         setProfileUserData(doc.data());
     });
 }, [])


   const showSem1Notes = () =>{
    setShowSem1(true)
    setAddSem1(false)
    setComments(false)
    setReferences(false)
  }

  const showAddSem1 = () =>{
    setAddSem1(true)
    setShowSem1(false)
    setComments(false)
    setReferences(false)
  }
  const showComments = () =>{
    setComments(true)
    setShowSem1(false)
    setAddSem1(false)
    setReferences(false)
  }

  const showReferences = () =>{
    setReferences(true)
    setShowSem1(false)
    setAddSem1(false)
    setComments(false)
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


  return <div>
  <MDBox py={3}>
  <div >
  <Box sx={{ minWidth: 100,display: "flex" }}>
  <FormControl fullWidth>
    <InputLabel id="demo-simple-select-label">Year 1 Sementer 1</InputLabel>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={sem1}
      sx={{ height: 40}}
      label="Year 1 Sementer 1"
      onChange={handleChange}
    >
      <MenuItem onClick={handleClickOpen('paper')} value="CCS 001 COMMUNICATION SKILLS">CCS 001 COMMUNICATION SKILLS</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 161 PURE MATHEMATICS">FCE 161 PURE MATHEMATICS</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 101 INTRODUCTION TO CIVIL ENGINEERING">FCE 101 INTRODUCTION TO CIVIL ENGINEERING</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="CCS HIV/AIDS">CCS HIV/AIDS</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 163 ENGINEERING MECHANICS (Statics)">FCE 163 ENGINEERING MECHANICS (Statics)</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 165 COMPUTER SCIENCE">FCE 165 COMPUTER SCIENCE</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 131 PHYSICS">FCE 131 PHYSICS</MenuItem>
      <MenuItem onClick={handleClickOpen('paper')} value="FCE 181 CHEMISTRY">FCE 181 CHEMISTRY</MenuItem>

    </Select>
  </FormControl>

  <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Year 1 Sementer 2</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={sem2}
    sx={{ height: 40}}
    label="Year 2 Sementer 2"
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
  style={{width: "100%",height: "100%"}}
  fullWidth
  fullHeight
>

<MDBox><DialogTitle   style={{backgroundColor: "#1a2035",border: "1px solid #1a2035"}}
  id="scroll-dialog-title">
  <div style={{display: "flex",justifyContent: "space-between"}}>
  <div>{auth1?.currentUser?.uid &&(
    <AddIcon onClick={showAddSem1} fontSize='medium' style={{cursor: "pointer",color: "#fff"}}/>
  )}</div> <div>
    <MDBox style={{color: "#fff"}}>Year 1  Sem I</MDBox></div> <div> <CancelIcon fontSize='medium' onClick={handleClose} style={{cursor: "pointer",color: "#fff"}}/></div>
  </div>
  </DialogTitle></MDBox>

  <DialogContent style={{backgroundColor: "#1a2035",height:'100%'}} dividers={scroll2 === 'paper'}>
  <motion.div
  onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
  variants={flip}
  initial="hidden"
  animate="visible"
  exit="exit"
  style={{height:'100%'}}
  >
  {/* {addSem1 ?(
    <div>
      <div style={{display: "flex",justifyContent: "space-between"}}>
        <div></div> <div><h4>Add Note(s)</h4></div> <div><CancelIcon fontSize='medium' onClick={showSem1Notes} style={{cursor: "pointer"}}/></div>
      </div>
      
     <AddNotes />
    </div>
  ): showSem1 ?(
    <Sem1  sem1={sem1}/>
  ): comments ?(
    <div>
    {auth1 ?(
      <div style={{display: "flex",alignItems: "center"}}>

      
      <MDInput
      id="standard-multiline-flexible"
      label={<div style={{color:"#8C8C8C",marginBottom:10}}>{profileUserData?.firstName} comment from here :)</div>}
      multiline
      maxRows={2}
      value={value}
      onChange={handleChange5}
      variant="standard"
      fullWidth
      style={{backgroundColor:"#D1D1D1",border:"none",color:"black",borderRadius:2,marginRight:1}}
    />  
    <SendIcon fontSize="medium" style={{cursor: "pointer",marginRight:5}} onClick={sendNotesComment} />
    <CancelPresentationIcon fontSize="medium" style={{cursor: "pointer"}} onClick={() => setComments(false)}/>


     </div>
    ):(
      <div style={{display: "flex", justifyContent: "space-between",alignItems: "center"}}>
      <div></div><div>
     <h3>Comment(s)</h3>
      </div>
      <div>
      <CancelPresentationIcon fontSize="medium" style={{cursor: "pointer"}} onClick={() => setComments(false)}/>
      </div>
     </div>
    )}

    <hr />
    <Comments />
    </div>
  ): references ?(
    <div>
    <div style={{display: "flex", justifyContent: "space-between",alignItems: "center"}}>
     <div>
     {auth1?.currentUser?.uid &&(
      <b style={{cursor: "pointer"}} onClick={addRef1}>ADD</b>
     )}
     </div><div style={{cursor:"pointer"}} onClick={showRef}>
    <h4>References</h4>
     </div>
     <div>
     <CancelPresentationIcon fontSize="medium" style={{cursor: "pointer"}} onClick={() => setReferences(false)}/>
     </div>
    </div>
    <hr />
    {ref ?(
     <>
     <AvailableRef />
     </>
    ): addRef ?(
      <>
       <References/>
      </>
    ):(
      <AvailableRef />
    )}
    
    </div>
  ):(
    <Sem1  sem1={sem1}/>
  )} */}

<Box sx={{ width: '100%' }}>
      <AppBar position="static">
        <Tabs
          value={value1}
          onChange={handleChange0}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="EXAMS" {...a11yProps(0)} />
          <Tab label="CATS" {...a11yProps(1)} />
          <Tab label="ASSIGNMENTS" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value1}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value1} index={0} dir={theme.direction}>
          <Exams unit={sem1}/>
        </TabPanel>
        <TabPanel value={value1} index={1} dir={theme.direction}>
          Cats
        </TabPanel>
        <TabPanel value={value1} index={2} dir={theme.direction}>
          Assignments
        </TabPanel>
      </SwipeableViews>
    </Box>
    
    </motion.div>
  </DialogContent>
  <DialogActions style={{backgroundColor: "#1a2035"}}>
  <MDButton
  rel="noreferrer"
  variant="gradient"
  color={sidenavColor}
  onClick={showComments}
  >
   Comment(s) Section <CommentIcon fontSize="medium" style={{cursor: "pointer",marginLeft:2}}/>
  </MDButton>
      <MDButton
      rel="noreferrer"
      variant="gradient"
      color={sidenavColor}
      onClick={showReferences}
      >
       Reference Materials <PsychologyIcon fontSize="medium" style={{cursor: "pointer",marginLeft:2}}/>
      </MDButton>
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
      <h1>Add Button</h1>
  </DialogActions>
</Dialog>
</div>

  </MDBox>
  </div>;
}

export default Year1;
