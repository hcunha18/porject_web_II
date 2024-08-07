import * as React from 'react';
import styled from 'styled-components'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { CardMedia, Typography } from '@mui/material';
import { red } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: "45rem",
  bgcolor: 'background.paper',
  padding: 10,
  borderRadius: 8,
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Modalevent(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{width: '10rem'}}>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap');
      </style>
      <Button sx={{width: '8rem', background: 'white', color: '#1976d2', borderRadius: 8, fontWeight: 'bold'}} onClick={handleOpen}>Ver Detalhes</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: '50rem', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <CardMedia
                style={{borderRadius: 8,
                  objectFit: "cover"
                }}
                component="img"
                height="200"
                width="20"
                image={props.ImageLink}
                alt="Paella dish"
            />
            <Typography sx={{color: '#1876d2', fontWeight: 'bold', fontSize: '2rem', fontFamily: "Oswald"}}>{props.title}</Typography>
            <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'start' }}>
                <Typography sx={{color: "#000", fontSize: "1.2rem"}}>Descrição</Typography>
                <Typography sx={{fontSize: "0.8"}}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</Typography>
                <Typography sx={{color: '#000', fontWeight: 'bold', fontSize: '1.2rem', marginTop: '1rem'}} >Local: <br></br><span style={{color: '#666666', fontWeight: 'bold', fontSize: '0.8rem'}}>Rua: {props.locale.rua}, Número: {props.locale.numero}. Bairro: {props.locale.bairro} Cidade: {props.locale.cidade}</span></Typography>
                <Button variant="contained" sx={{marginTop: '2rem', width: 400}} >
                  Cadastrar
                </Button>
                <Button variant="contained" sx={{marginTop: '1rem', width: 400}}>
                  Editar
                </Button>
                <Button variant="contained" sx={{marginTop: '1rem', width: 400, bgcolor: 'red'}} >
                  Excluir
                </Button>
            </Box>
           
        </Box>
      </Modal>
    </div>
  );
}