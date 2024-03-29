import React from 'react';
import { Container, Typography, Box, Divider } from '@mui/material';

function Footer() {
  return (
    <Container  > 
      <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Box sx={{marginRight: '33rem', width: 100}}>
          <Typography >ddd</Typography>
        </Box>
        <Box sx={{marginRight: '33rem', width: 300}}>
          <Typography>Descrição do site</Typography>
        </Box>
        <Box>
          <Typography>ddd</Typography>    
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;
