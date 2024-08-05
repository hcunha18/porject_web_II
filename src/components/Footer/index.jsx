import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import './index.css'

function Footer() {
  return (
      <Box  className='footer'> 
      <div className="waves">
        <div class="wave" id="wave1"></div>
        <div class="wave" id="wave2"></div>
        <div class="wave" id="wave3"></div>
        <div class="wave" id="wave4"></div>
      </div>

      <Typography sx={{fontSize: '0.8rem'}}>Descrição</Typography>
      <Typography sx={{fontSize: '0.6rem'}}>Este site tem o intuito de te apresentar todos os eventos que estão ocorrendo próximos de você, tornando ainda mais facil o ato de colecionar momentos.</Typography>

      <p style={{fontSize: '0.4rem'}}>&copy; playEvents</p>
      </Box >
  );
}

export default Footer;
