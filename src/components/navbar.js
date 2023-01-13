import React,{useState} from 'react'
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import TagIcon from '@mui/icons-material/Tag';
import MailIcon from '@mui/icons-material/Mail'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { theme } from '../theme';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})
const Search = styled("div")( ({theme}) =>({
    backgroundColor: "white",
    padding: "0 10px",  
    width: "40%",
    borderRadius: theme.shape.borderRadius
}))
const Icons = styled(Box)( ({theme}) =>({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up('sm')]:{
    display: "flex"
  }
}))

const UserBox = styled(Box)( ({theme})=>({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up('sm')]:{
    display: "none"
  }
  
}))


const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <AppBar position="sticky"> 
      <StyledToolbar>
        <Typography variant="h5" sx={{display: {xs:"none", sm:"block"}}}>
            Media
        </Typography>
        <TagIcon sx={{display: {xs:"block", sm:"none"}}}></TagIcon>
        <Search><InputBase placeholder="Search away..."/></Search>
        <Icons>
        <Badge badgeContent={4} color="error">
          <MailIcon/>
        </Badge>
        <Badge badgeContent={2} color="error">
          <NotificationsNoneIcon/>
        </Badge>
        <Avatar alt="Picture" sx={{width:40, height:40}} src="/static/images/avatar2.jpeg" 
         onClick={e=>setOpen(true)}
        />
        </Icons>
        <UserBox>
          <Avatar alt="Picture" sx={{width:40, height:40}} src="/static/images/avatar2.jpeg" 
           onClick={e=>setOpen(true)}
          />
          <Typography variant='span'>John</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar