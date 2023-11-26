import React from 'react'
import RoomFilterPanel from './RoomFilterPanel'
import { Box, CssBaseline, Grid, Typography } from '@mui/material'
import RoomList from './RoomList'

export default function RoomBoard() {
  return (
    <Box sx={{}}>
      <Typography variant="h5" pb={1}>ルーム一覧</Typography>
      <RoomFilterPanel />
      <RoomList />
    </Box>
  )
}
