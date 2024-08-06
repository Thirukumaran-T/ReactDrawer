
import React from 'react';
import { Drawer, List, ListItem, ListItemText ,ListItemIcon} from '@mui/material';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import CalculatorIcon from '@mui/icons-material/Calculate';

const AppDrawer = ({ open, onClose }) => {
  return (
    <Drawer     anchor="left" open={open} onClose={onClose}>
      <List  sx={{ width: 250 }}>
        <ListItem button component={Link} to="/home" onClick={onClose}>
        <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
          <ListItemText primary="Home" />
          
        </ListItem>
        <ListItem button component={Link} to="/calculator" onClick={onClose}>
        <ListItemIcon>
                <CalculatorIcon />
              </ListItemIcon>
          <ListItemText primary="Calculator" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default AppDrawer;
