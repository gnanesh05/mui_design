import React from 'react'
import {Box, List, ListItem, ListItemButton, ListItemIcon,ListItemText, Switch} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import RememberMeIcon from '@mui/icons-material/RememberMe';
import NightlightIcon from '@mui/icons-material/Nightlight';

const SideBar = () => {
  return (
    <Box flex={1} p={2}  mr={2} sx={{display: {xs: "none", sm:"block"}} }> 

     <Box position="fixed" width={300} mt={2} mb={2}>
     <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText primary="pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                <GroupsIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#makrketplace">
              <ListItemIcon>
                <StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="MarketPlace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <PeopleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#settings">
              <ListItemIcon>
                <SettingsApplicationsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <RememberMeIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#profile">
              <ListItemIcon>
                <NightlightIcon />
              </ListItemIcon>
              <Switch
                //checked={checked}
                //onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            </ListItemButton>
          </ListItem>
      </List>
     </Box>
      
    </Box>
  )
}

export default SideBar