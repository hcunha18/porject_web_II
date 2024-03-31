import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Footer() {
  return (
    <Container  > 
      <Box sx={{ flexDirection: 'row', alignItems: 'center', width: '100%', display: 'grid', gridTemplateColumns: "20% 60% 20%"}}>
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <Typography >Disponível em:</Typography>
          <Typography sx={{ marginTop: '1rem'}}>Instagram</Typography>
          <Typography sx={{marginTop: '0.2rem'}}>e-mail</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem'}}>
          <Typography>Descrição</Typography>
          <Typography sx={{textAlign: 'center', marginTop: '1rem'}}>Este site tem o intuito de te apresentar todos os eventos que estão ocorrendo próximos de você, tornando ainda mais facil o ato de colecionar momentos.</Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
        <Typography >Desenvoldido por:</Typography>
          <Typography sx={{ marginTop: '1rem'}}>Humberto</Typography>
          <Typography sx={{marginTop: '0.2rem'}}>Vinicius</Typography>   
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;
