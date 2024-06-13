import { Box, Grid } from '@mui/material';
import React from 'react';

const cssPaperCard = {
  borderRadius: 2,
  margin: '5px 0px',
  padding: 1,
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#f2f2f2',
  },
  transition: 'background-color 0.3s',
};
export default async function Home() {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Đây là Home
        </Grid>
      </Grid>
    </Box>
  );
}
