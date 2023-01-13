import React from 'react'
import {Tooltip, IconButton, Fab, Box, Modal, styled} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
const Add = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <>
      <Tooltip title="Add" sx={{position: 'fixed', bottom: 20, 
      left:{xs:"calc(50 -25px)", md:30}}} 
      onClick={handleOpen}>
        <IconButton>
            <Fab color="primary" aria-label="add">
                <AddIcon  />
            </Fab>
        </IconButton>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgColor="white" p={3} borderRadius={5}>
          Hello
        </Box>
      </StyledModal>
    </>
  )
}

export default Add