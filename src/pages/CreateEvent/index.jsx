import { useState, useEffect } from "react";
import { Container, Typography, Box, TextareaAutosize} from '@mui/material';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from "@mui/x-date-pickers";
import axios from "axios";
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

export default function CreateEvent () {
//   let alou = axios.get('https://projeto-web-ii-b3b32-default-rtdb.firebaseio.com/path/to/data.json')
//   console.log(alou)
const { user} = useContext(AuthContext);
const navigate = useNavigate();

const [eventTitle, setEventTitle] = useState("");
const [eventDate, setEventDate] = useState(null);
const [eventHours, setEventHours] = useState(null);
const [description, setDescription] = useState("");
const [complemento, setComplemento] = useState("");
const [numero, setNumero] = useState("");

const handleCreateEvent = async () => {
    const newEvent = {
      title: eventTitle,
      date: eventDate,
      hours: eventHours,
      locale: {
        cep,
        cidade: address.cidade,
        estado: address.estado,
        bairro: address.bairro,
        rua: address.rua,
        numero: numero,
        complemento: complemento,
      },
      description,
      userEmail: user.user.uid
    };
    try {
      const response = await axios.post('https://projeto-web-ii-b3b32-default-rtdb.firebaseio.com/events.json', newEvent);
      console.log("Evento adicionado com sucesso:", response.data);
      navigate("/")
    } catch (error) {
      console.error("Erro ao adicionar evento:", error);
    }
  };
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState({
    cidade: "",
    bairro: "",
    rua: "",
    estado: "",
    numero: "",
    complemento: "",
  });

  useEffect(() => {
    const fetchAddress = async () => {
      try {
          const response = await axios.get(
            `https://viacep.com.br/ws/${cep}/json/`
          );
          const data = response?.data;
          setAddress({
            cidade: data?.localidade || "",
            bairro: data?.bairro || "",
            rua: data?.logradouro,
            estado: data?.uf,
            numero: "",
            complemento: "",
          });
        } catch (error) {
          console.error("Erro ao buscar o endereço:", error);
        }
    };
    fetchAddress();
  }, [cep]);

  const handleCepChange = (event) => {
    setCep(event.target.value);
  };
    
    return (
        <>
        <Box>
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');
                @import url('https://fonts.googleapis.com/css2?family=Edu+VIC+WA+NT+Beginner:wght@400..700&family=Ole&family=Permanent+Marker&family=Sirin+Stencil&display=swap');
            </style>
            < Navbar />

            <Container>
                <Container sx={{width: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
                    <Typography sx={{ marginTop:5, 
                        fontSize:'40px', 
                        fontWeight:'bold',  
                        display:'flex', 
                        justifyContent:'center', }}>
                            <span style={{color: 'black',
                            fontFamily: "Edu VIC WA NT Beginner", 
                            }}>
                                play
                            </span>
                            <span style={{color: '#1E90FF',
                            fontFamily: "Permanent Marker" 
                            }}>
                                Events
                            </span>
                    </Typography>

                    <Typography sx={{ marginTop:5, 
                        fontSize:'20px', 
                        color:'#666666', 
                        display:'flex', 
                        justifyContent:'center' }}>
                            Cadastre seu evento 
                    </Typography>
                </Container>
                <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100'}}>
                    <FormControl variant="standard" sx={{width: '100%'}}>
                        <InputLabel htmlFor="component-simple">Nome do Evento</InputLabel>
                        <Input id="component-simple" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)}  />
                    </FormControl >
                    
                    <Box sx={{marginTop: '2rem', width: '100%', display:'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                           
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                <DatePicker label="Dia do evento" format="DD/MM/YYYY" value={eventDate} onChange={(newDate) => setEventDate(newDate)}/>
                            </LocalizationProvider>
                      
                            <LocalizationProvider dateAdapter={AdapterDayjs} >
                                
                                <TimePicker
                                    label="Hora do evento" 
                                    value={eventHours} onChange={(newHours) => setEventHours(newHours)}
                                    viewRenderers={{
                                        hours: renderTimeViewClock,
                                        minutes: renderTimeViewClock,
                                        seconds: renderTimeViewClock,
                                    }}
                                />
                                
                            </LocalizationProvider>

                    </Box>
                    
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: '2rem'}}>
                        <FormControl variant="standard" sx={{marginRight: '3rem'}}>
                            <InputLabel htmlFor="component-simple">CEP</InputLabel>
                            <Input id="component-simple" defaultValue="" onChange={handleCepChange} value={cep} />
                        </FormControl>
                        <FormControl variant="standard" sx={{marginRight: '3rem'}}>
                            <InputLabel htmlFor="component-simple">Cidade</InputLabel>
                            <Input id="component-simple" defaultValue="" value={address.cidade}/>
                        </FormControl>
                        <FormControl variant="standard" sx={{marginRight: '3rem'}}>
                            <InputLabel htmlFor="component-simple">Estado</InputLabel>
                            <Input id="component-simple" defaultValue="" value={address.estado}/>
                        </FormControl>
                        <FormControl variant="standard" >
                            <InputLabel htmlFor="component-simple">Número</InputLabel>
                            <Input id="component-simple" value={numero} onChange={(e) => setNumero(e.target.value)} />
                        </FormControl>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginTop: '2rem'}}>
                        <FormControl variant="standard" sx={{width: "30rem"}}>
                                <InputLabel htmlFor="component-simple">Rua</InputLabel>
                                <Input id="component-simple" defaultValue=""  value={address.rua}/>
                        </FormControl>
                        <FormControl variant="standard" sx={{width: "40rem"}}>
                            <InputLabel htmlFor="component-simple">Bairro</InputLabel>
                            <Input id="component-simple" defaultValue="" value={address.bairro}/>
                        </FormControl>
                    </Box>
                    <FormControl variant="standard" sx={{width: "100%", marginTop: '2rem'}}>
                            <InputLabel htmlFor="component-simple">Complemento</InputLabel>
                            <Input id="component-simple" value={complemento} onChange={(e) => setComplemento(e.target.value)} />
                    </FormControl>
                    <FormControl variant="standard" sx={{width: "100%", marginTop: '2rem'}}>
                            <InputLabel htmlFor="component-simple">Descrição do evento</InputLabel>
                            <Input multiline id="component-simple" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </FormControl>
                    
                    
                    <Button variant="contained" sx={{marginTop: '4rem', width: 400}} onClick={handleCreateEvent} >
                        Cadastrar
                    </Button>
                </Box>
            </Container>

            <Footer style={{minWidth: "100vh"}}/>
        </Box>
        </>
    )
}