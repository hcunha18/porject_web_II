import { Container, Typography, Box} from '@mui/material';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';


export default function CreateEvent(){

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
                        <Input id="component-simple" defaultValue="" />
                    </FormControl>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: '100%'}}>
                        <FormControl variant="standard" sx={{marginRight: '2rem'}}>
                            <InputLabel htmlFor="component-simple">CEP</InputLabel>
                            <Input id="component-simple" defaultValue="" />
                        </FormControl>
                        <FormControl variant="standard">
                            <InputLabel htmlFor="component-simple">Número</InputLabel>
                            <Input id="component-simple" defaultValue="" />
                        </FormControl>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                        <FormControl variant="standard" sx={{width: "30rem"}}>
                                <InputLabel htmlFor="component-simple">Rua</InputLabel>
                                <Input id="component-simple" defaultValue="" />
                        </FormControl>
                        <FormControl variant="standard" sx={{width: "40rem"}}>
                            <InputLabel htmlFor="component-simple">Bairro</InputLabel>
                            <Input id="component-simple" defaultValue="" />
                        </FormControl>
                    </Box>
                    <FormControl variant="standard" sx={{width: "100%"}}>
                            <InputLabel htmlFor="component-simple">Referência</InputLabel>
                            <Input id="component-simple" defaultValue="" />
                    </FormControl>

                    <Button variant="contained" sx={{marginTop: '4rem', width: 400}} >
                        Cadastrar
                    </Button>
                </Box>
            </Container>


            <Footer style={{minWidth: "100vh"}}/>
        </Box>
        </>
    )
}