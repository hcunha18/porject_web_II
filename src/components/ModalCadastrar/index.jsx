import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function Modallogin() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Button sx={{width: '8rem', 
        background: 'white', 
        color: '#1976d2', 
        borderRadius: 8, 
        fontWeight: 'bold'
        }} 
        onClick={handleOpen}>
          Entrar
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 340, height: 410, display: 'flex', alignItems: 'center', justifyContent: 'space-around',flexDirection: 'column', borderRadius: 10}}>
          <Typography sx={{color: '#1876d2', fontWeight: 'bold', fontSize: '2rem'}}>Entrar</Typography>
          <FormControl variant="standard" sx={{margin: '2rem', width: "15rem"}}>
                <InputLabel htmlFor="input-with-icon-adornment">
                Email
                </InputLabel>
                <Input
                id="input-with-icon-adornment"
                startAdornment={
                    <InputAdornment position="start">
                    <AccountCircle />
                    </InputAdornment>
                }

                />
            </FormControl>
            <FormControl sx={{ width: "15rem"}} variant="standard">
                <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                    />
            </FormControl>
        <Button sx={{width: '8rem', 
          background: 'white', 
          color: '#1976d2', 
          borderRadius: 8, 
          fontWeight: 'bold', 
          marginTop: '5rem'}} 
          onClick={handleOpen}>
            Cadastrar
          </Button>
        </Box>
      </Modal>
    </div>
  );
}