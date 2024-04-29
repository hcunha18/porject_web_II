import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { CardMedia, Typography } from '@mui/material';
import Map from '../Map';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function ModalMap(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{width: '10rem'}}>
      <Button sx={{width: '8rem', background: 'white', color: '#1976d2', borderRadius: 8, fontWeight: 'bold'}} onClick={handleOpen}>ver mapa</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: '50rem', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <Typography sx={{color: '#1876d2', fontWeight: 'bold', fontSize: '2rem'}}>{props.title}</Typography>
            
            {/* <CardMedia
                component="img"
                height="400"
                width="20"
                image={props.ImageLink}
                alt="Paella dish"
            /> */}
            <Box>
                <Map title={props.title} cep = {props.locale.cep}></Map>
                
            </Box>
            {/* <Box sx={{width: '100%', textAlign: 'start'}}>
                <Typography sx={{color: '#1876d2', fontWeight: 'bold', fontSize: '1.5rem'}} >Local:</Typography>
                <Typography sx={{color: '#666666', fontWeight: 'bold', fontSize: '1.5rem'}}>Rua: {props.locale.rua},<br/> Número: {props.locale.numero}. <br/>Bairro: {props.locale.bairro} <br/>Cidade: {props.locale.cidade} </Typography>

            </Box> */}
           
        </Box>
      </Modal>
    </div>
  );
}