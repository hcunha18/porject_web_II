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
import { AuthContext } from '../../context/AuthContext';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate();
  const { user, login } = useContext(AuthContext);
  
  async function handleSingIn() {
    console.log("handleSignIn");
    const sucess = await login(email, password);
    if (sucess) {      
      navigate("/");
      handleClose();     
    } else alert("Entrada inválida");
  }
  
  useEffect(() => {
    if (user) return navigate("/");
  }, []);

  function handleTextFieldPassword(event) {
    setPassword(event.target.value);
  }
  function handleTextFieldUser(event) {
    setEmail(event.target.value);
  }

  

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
        fontWeight: 'bold',
        marginRight: '1rem',
        '&:hover':{ 
          border: "1px solid white",
          color: '#fff'}
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
          <FormControl variant="standard" sx={{margin: '2rem', width: "15rem"}} onChange={handleTextFieldUser}>
                <InputLabel htmlFor="input-with-icon-adornment">
                email
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
            <FormControl sx={{ width: "15rem"}} variant="standard" onChange={handleTextFieldPassword}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
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
          onClick={handleSingIn}>
            Login
          </Button>
        </Box>
      </Modal>
    </div>
  );
}