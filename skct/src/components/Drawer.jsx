import React, { useState } from "react";
import {Drawer,IconButton,List, ListItemButton,ListItemIcon,ListItemText,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const pages = ["Academics", "Admission", "About", "Events","Placements","Contact"];
const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div>
    <React.Fragment>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        
      >
        <List>
          {pages.map((page, index) => (
            <ListItemButton key={index} component={Link} to={`/${page.toLowerCase()}`}>
            <ListItemIcon>
                <ListItemText>{page}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "black", marginLeft: "auto" }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
    </div>
  );
};

export default DrawerComp;