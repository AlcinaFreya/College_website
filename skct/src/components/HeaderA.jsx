import React, { useState } from "react";
import {AppBar,Button,Toolbar,Typography,useMediaQuery,useTheme,Menu,MenuItem,} from "@mui/material";
import DrawerComp from "./Drawer";
import logo from "./skct2.png";
import { Link } from "react-router-dom";

const HeaderA = () => {
  const [value, setValue] = useState();
  const [anchorElAcademics, setAnchorElAcademics] = useState(null);
  const [anchorElExamination, setAnchorElExamination] = useState(null);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const handleAcademicsMenuClick = (event) => {
    setAnchorElAcademics(event.currentTarget);
  };

  

  const handleExaminationMenuClick = (event) => {
    setAnchorElExamination(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorElAcademics(null);
    setAnchorElExamination(null);
    setAnchorElIndustrial(null);
  setAnchorElContact(null);
  };

  const handleMenuItemClick = (value) => {
    setValue(value);
    handleMenuClose();
  };

  const handleAcademicSubMenuClick = (department) => {
    console.log(`Navigating to ${department} department`);
    handleMenuClose();
  };

  const [anchorElIndustrial, setAnchorElIndustrial] = useState(null);

  const handleIndustrialMenuClick = (event) => {
    setAnchorElIndustrial(event.currentTarget);
  };

  const handleIndustrialSubMenuClick = (category) => {
    console.log(`Navigating to ${category}`);
    handleMenuClose();
  };

  const [anchorElContact, setAnchorElContact] = useState(null);

  const handleContactMenuClick = (event) => {
    setAnchorElContact(event.currentTarget);
  };

  const handleContactSubMenuClick = (category) => {
    console.log(`Navigating to ${category}`);
    handleMenuClose();
  };

  return (
    <div>
      <React.Fragment>
        <AppBar sx={{ background: "white" }}>
          <Toolbar>
            <img
              src={logo}
              alt="skct"
              style={{ height: "70px", marginRight: "10px" }}
            />

            {isMatch ? (
              <>
                <Typography
                  sx={{ fontSize: "2rem", paddingLeft: "10%", color: "black" }}
                >
                  SKCT
                </Typography>
                <DrawerComp />
              </>
            ) : (
              <>
                <div>
                <Link to="/">
                <Button variant="text" color="primary" >
                    HOME
                  </Button></Link>
                  <Button
                    variant="text"
                    color="primary"
                    onClick={handleAcademicsMenuClick}
                  >
                     ACADEMICS
                </Button>
                <Menu
                  anchorEl={anchorElAcademics}
                  open={Boolean(anchorElAcademics)}
                  onClose={handleMenuClose}
                >
                    <MenuItem
                      component={Link}
                      to="/academics"
                      onClick={() => handleMenuItemClick("departments1")}
                    >  Departments </MenuItem>
                      <MenuItem>
                      <Link to="/civil"><Button
                        variant="text"
                        color="primary"
                        onClick={(e) => handleAcademicSubMenuClick("Civil Engineering", e)}
                      >
                        Civil
                      </Button></Link>
                      
                     </MenuItem>
                     <MenuItem>
                      <Link to="/computerscience"><Button
                        variant="text"
                        color="primary"
                        onClick={(e) => handleAcademicSubMenuClick("CS Engineering", e)}
                      >
                       Computer Science 
                      </Button></Link>
                      
                     </MenuItem>
                     <MenuItem>
                      <Link to="/ece"><Button
                        variant="text"
                        color="primary"
                        onClick={(e) => handleAcademicSubMenuClick("ECE Engineering", e)}
                      >
                       ELECTRONICS AND COMMUNICATION
                      </Button></Link>
                      
                     </MenuItem>
                     <MenuItem>
                      <Link to="/mechanical"><Button
                        variant="text"
                        color="primary"
                        onClick={(e) => handleAcademicSubMenuClick("Mech Engineering", e)}
                      >
                       Mechanical 
                      </Button></Link>
                      
                     </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/academicscalender"
                      onClick={() => handleMenuItemClick("department2")}
                    >
                      Academic Calender
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/professional"
                      onClick={() => handleMenuItemClick("department3")}
                    >
                    Professional Association 
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/elib"
                      onClick={() => handleMenuItemClick("department3")}
                    >
                   E-library
                    </MenuItem>
                  </Menu>
                  
                  <Link to="/admission"><Button variant="text" color="primary">
                    ADMISSION
                  </Button></Link>

                  <Button
                  variant="text"
                  color="primary"
                  onClick={handleExaminationMenuClick}
                >
                  EXAMINATION
                </Button>
                <Menu
                  anchorEl={anchorElExamination}
                  open={Boolean(anchorElExamination)}
                  onClose={handleMenuClose}
                >
                    <MenuItem
                      component={Link}
                      to="/office"
                      onClick={() => handleMenuItemClick("departments1")}
                    >
                      COE Office
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/hallticket"
                      onClick={() => handleMenuItemClick("department2")}
                    >
                      Hallticket
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/timetable"
                      onClick={() => handleMenuItemClick("department3")}
                    >
                    Timetable
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/result"
                      onClick={() => handleMenuItemClick("department3")}
                    >
                    Result
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to="/formskct"
                      onClick={() => handleMenuItemClick("department3")}
                    >
                  Form
                    </MenuItem>
                   
                    <MenuItem onClick={() => handleMenuItemClick("department3")}>
                    <a href="https://nad.digilocker.gov.in/signin" target="_blank" rel="noopener noreferrer">
                      NAD
                       </a>
                    </MenuItem>

                  </Menu>
                  <Link to="/about">
                  <Button variant="text" color="primary">
                    ABOUT
                  </Button></Link>
                  
                  
                  <Button
                variant="text"
                color="primary"
                onClick={handleIndustrialMenuClick}
              >
                CAMPUS LIFE
              </Button>

              <Menu
                anchorEl={anchorElIndustrial}
                open={Boolean(anchorElIndustrial)}
                onClose={handleMenuClose}
              >
                <MenuItem
                  component={Link}
                  to="/library"
                  onClick={() => handleIndustrialSubMenuClick("Category 1")}
                >
                  Library
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/events"
                  onClick={() => handleIndustrialSubMenuClick("Category 1")}
                >
                  Events
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/placements"
                  onClick={() => handleIndustrialSubMenuClick("Category 1")}
                >
                  Placements
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/newsevvents"
                  onClick={() => handleIndustrialSubMenuClick("Category 2")}
                >
                  Achievements
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/hostel"
                  onClick={() => handleIndustrialSubMenuClick("Category 1")}
                >
                  Hostel
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/industrysup"
                  onClick={() => handleIndustrialSubMenuClick("Category 1")}
                >
                  Industrial
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/industryconnect"
                  onClick={() => handleIndustrialSubMenuClick("Category 2")}
                >
                  Industrial Connect
                </MenuItem>
                
              </Menu>
              <Button
                variant="text"
                color="primary"
                onClick={handleContactMenuClick}
              >
                CONTACT
              </Button>

              <Menu
                anchorEl={anchorElContact}
                open={Boolean(anchorElContact)}
                onClose={handleMenuClose}
              >
                <MenuItem
                  component={Link}
                  to="/contact"
                  onClick={() => handleContactSubMenuClick("Category 1")}
                >
                  Contact
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/payment"
                  onClick={() => handleContactSubMenuClick("Category 1")}
                >
                  Payment
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/rating"
                  onClick={() => handleContactSubMenuClick("Category 2")}
                >
                  Ratings
                </MenuItem>
               
              </Menu>
                </div>
                <Link to="/login">
                  <Button
                    sx={{ marginLeft: "auto",marginLeft: "20px"}}
                    variant="contained"
                    color="secondary"
                  >
                    Login
                  </Button>
                </Link>
                <Link to="/registration">
                  <Button
                    sx={{ marginLeft: "10px" }}
                    variant="contained"
                    color="secondary"
                  >
                    SignUp
                  </Button>
                </Link>
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    </div>
  );
};

export default HeaderA;
