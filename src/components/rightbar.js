import React from 'react'
import {Box, Typography, Avatar, AvatarGroup, ImageList, ImageListItem, List, ListItem, ListItemText, ListItemAvatar, Divider} from '@mui/material'
const RightBar = () => {
  return (
    <Box   p={2} flex={2} sx={ {display: {xs: "none", sm:"block"} }}>
       <Box position="fixed">
         <Typography variant="h6" fontWeight={100}>
            Your Friends
         </Typography>
         <AvatarGroup total={24}>
          <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://mui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Agnes Walker" src="https://mui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Trevor Henderson" src="https://mui.com/static/images/avatar/4.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100}>
            Latest Posts
         </Typography>
         <ImageList
            sx={{ width: 500, height: 450 }}
            variant="quilted"
            cols={4}
            rowHeight={121}
          >
            <ImageListItem>
              <img   alt="Trevor Henderson" src="https://mui.com/static/images/avatar/1.jpg" />
            </ImageListItem>
            <ImageListItem>
              <img   alt="Trevor Henderson" src="https://mui.com/static/images/avatar/2.jpg" />
            </ImageListItem>
            <ImageListItem>
              <img   alt="Trevor Henderson" src="https://mui.com/static/images/avatar/3.jpg" />
            </ImageListItem>
            <ImageListItem>
              <img   alt="Trevor Henderson" src="https://mui.com/static/images/avatar/4.jpg" />
            </ImageListItem>
            <ImageListItem>
              <img   alt="Trevor Henderson" src="https://mui.com/static/images/avatar/1.jpg" />
            </ImageListItem>
            <ImageListItem>
              <img   alt="Trevor Henderson" src="https://mui.com/static/images/avatar/2.jpg" />
            </ImageListItem>
            <ImageListItem>
              <img   alt="Trevor Henderson" src="https://mui.com/static/images/avatar/3.jpg" />
            </ImageListItem>
            <ImageListItem>
              <img   alt="Trevor Henderson" src="https://mui.com/static/images/avatar/4.jpg" />
            </ImageListItem>

         </ImageList>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
       </Box>

       
    </Box>
  )
}

export default RightBar