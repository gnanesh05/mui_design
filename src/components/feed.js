import React from 'react'
import {Box} from '@mui/material'
import Post from './posts'

const Feed = () => {
  return (
    <Box   p={2} flex={4} >
     <Post/>
     <Post/>
     <Post/>
     <Post/>
     <Post/>
    </Box>
  )
}

export default Feed