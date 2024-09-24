import { Container, Typography, Box} from '@mui/material';
import Cardevent from '../../components/Cardevent';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Divider from '@mui/material/Divider';
import { blue } from '@mui/material/colors';
import Searchbar from '../../components/Searchbar';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import { createSvgIcon } from '@mui/material/utils';
import Map from '../../components/Map';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from 'react';
import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

const PlusIcon = createSvgIcon(
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
  );

export default function Home() {
    const [myEvents, setMyEvents] = React.useState(false);
    function handleClick() {
        setMyEvents(true);
    }

    const { user} = useContext(AuthContext);
    let logged = user;

    const [events, setEvents] = useState([]); 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://projeto-web-ii-b3b32-default-rtdb.firebaseio.com/.json');
                const dados = response.data.events;
                let vet = []
                Object.keys(dados).forEach(e =>{
                    vet.push(dados[e])
                })
                setEvents(vet); 
            } catch (error) {
                console.error("Erro ao buscar os eventos:", error);
            }
        };
        fetchData();
    }, [])


    // const eve = [
    //     {
    //         title: "Festa Universitária",
    //         date: "16 de Setembro de 2017",
    //         hours: "20:00 AM",
    //         ImageLink: "https://th.bing.com/th/id/R.06db452fc12c1c27687799e8759bae75?rik=i2PMHbxsCyA2lw&riu=http%3a%2f%2fwww.aplausoeventos.com.br%2fwp-content%2fuploads%2f2019%2f11%2fevento77.jpg&ehk=FLkra0g1%2f91qxuDneGbfuXNUasTuWpk9whM5HybAUcw%3d&risl=&pid=ImgRaw&r=0",
    //         description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    //         locale: {
    //             rua: 'Aristoteres Braga',
    //             numero: '777',
    //             bairro: 'São Martins',
    //             cidade: 'Leopoldina',
    //             cep: '36772258',
    //             referencia:'Sem referência'
    //         }
    //     },
    //     {
    //         title: "Jantar Social",
    //         date: "25 de Novembro de 2020",
    //         hours: "20:00  AM",
    //         ImageLink: "https://th.bing.com/th/id/R.06db452fc12c1c27687799e8759bae75?rik=i2PMHbxsCyA2lw&riu=http%3a%2f%2fwww.aplausoeventos.com.br%2fwp-content%2fuploads%2f2019%2f11%2fevento77.jpg&ehk=FLkra0g1%2f91qxuDneGbfuXNUasTuWpk9whM5HybAUcw%3d&risl=&pid=ImgRaw&r=0",
    //         description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    //         locale: {
    //             rua: 'Jucelino Kubsheck',
    //             numero: '312',
    //             bairro: 'Santo Agostinho',
    //             cidade: 'Cataguases',
    //             cep: '36772258',
    //             referencia:'sem referencia'
    //         }
    //     }, 
    //     {
    //         title: "Música ao vivo",
    //         date: "10 de junho de 2023",
    //         hours: "20:00  AM",
    //         ImageLink: "https://th.bing.com/th/id/R.06db452fc12c1c27687799e8759bae75?rik=i2PMHbxsCyA2lw&riu=http%3a%2f%2fwww.aplausoeventos.com.br%2fwp-content%2fuploads%2f2019%2f11%2fevento77.jpg&ehk=FLkra0g1%2f91qxuDneGbfuXNUasTuWpk9whM5HybAUcw%3d&risl=&pid=ImgRaw&r=0",
    //         description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    //         locale: {
    //             rua: 'Ricardo Gigante',
    //             numero: '420',
    //             bairro: 'Santo Padre',
    //             cidade: 'Leopoldina',
    //             cep: '36062000',
    //             referencia:'sem referencia'
    //         }
    //     },
    //     {
    //         title: "Open Bar",
    //         date: "10 de junho de 2023",
    //         hours: "20:00 AM",
    //         ImageLink: "https://th.bing.com/th/id/R.06db452fc12c1c27687799e8759bae75?rik=i2PMHbxsCyA2lw&riu=http%3a%2f%2fwww.aplausoeventos.com.br%2fwp-content%2fuploads%2f2019%2f11%2fevento77.jpg&ehk=FLkra0g1%2f91qxuDneGbfuXNUasTuWpk9whM5HybAUcw%3d&risl=&pid=ImgRaw&r=0",
    //         description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    //         locale: {
    //             rua: 'Ricardo Gigante',
    //             numero: '420',
    //             bairro: 'Santo Padre',
    //             cidade: 'Leopoldina',
    //             cep: '36062000',
    //             referencia:'sem referencia'
    //         }
    //     },
    //     {
    //         title: "Festa Maluca",
    //         date: "10 de junho de 2023",
    //         hours: "20:00 AM",
    //         ImageLink: "https://th.bing.com/th/id/R.06db452fc12c1c27687799e8759bae75?rik=i2PMHbxsCyA2lw&riu=http%3a%2f%2fwww.aplausoeventos.com.br%2fwp-content%2fuploads%2f2019%2f11%2fevento77.jpg&ehk=FLkra0g1%2f91qxuDneGbfuXNUasTuWpk9whM5HybAUcw%3d&risl=&pid=ImgRaw&r=0",
    //         description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
    //         locale: {
    //             rua: 'Pescadores',
    //             numero: '420',
    //             bairro: 'Santo Padre',
    //             cidade: 'Leopoldina',
    //             cep: '36062000',
    //             referencia:'Sem referência'
    //         }
    //     }
        
    // ];
    const navigate = useNavigate();
    
    const actions = [
        { icon: <PlusIcon />, name: 'Criar Evento', onclick: (() => navigate("CreateEvent/"))},
        // { icon: <ShareIcon />, name: 'Compartilhar Evento', onclick: (() => navigate("/")) },
      ];

    let imageLink = "https://th.bing.com/th/id/R.06db452fc12c1c27687799e8759bae75?rik=i2PMHbxsCyA2lw&riu=http%3a%2f%2fwww.aplausoeventos.com.br%2fwp-content%2fuploads%2f2019%2f11%2fevento77.jpg&ehk=FLkra0g1%2f91qxuDneGbfuXNUasTuWpk9whM5HybAUcw%3d&risl=&pid=ImgRaw&r=0"
    return (
        <>
        <Box >
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
                        Encontre os melhores eventos e construa mémorias. 
                    </Typography>

                    <Searchbar events={events} />
                </Container>
                {logged ? 
                <FormControlLabel
                    sx={{ display: 'block', marginTop: 3 }}
                    control={
                    <Switch
                        checked={myEvents}
                        onChange={() => setMyEvents(!myEvents)}
                        name="loading"
                        color="primary"
                    />
                    }
                    label="Meus Eventos"
                /> : <></>
                }
                <Divider sx={{marginTop: 3, marginBottom: 5}}/>

                <Container>
                    {/* <Typography sx={{fontSize:'20px', fontWeight:'bold', display:'flex', justifyContent:'center', textTransform:'uppercase', color: 'black' }}>
                        Eventos próximos de você!
                    </Typography> */}
                </Container>
                <Container sx={{display: 'grid', gridTemplateColumns: "repeat(3, 1fr)", columnGap: "10px", rowGap: "40px",justifyContent: 'center', marginTop: 3}}>
                    { myEvents ? (events || []).map((event, key) => {
                        if(user && user.user && event.userEmail === user.user.uid){
                            return <div >
                                    <Cardevent title={event.title} hours={event.hours} date={event.date} ImageLink={imageLink} description={event.description} locale={event.locale} userEmail={event.userEmail} chave={key}/> 
                                </div>;
                        }
                    }) :
                        events.map((event, key) => (
                            <div >
                                <Cardevent title={event.title} hours={event.hours} date={event.date} ImageLink={imageLink} description={event.description} locale={event.locale} userEmail={event.userEmail} chave={key}/> 
                            </div>
                             
                        ))
                    }
                </Container>
            </Container>
            <Box sx={{ height: 0, transform: 'translateZ(0px)', flexGrow: 1, marginRight: '15rem' }}>
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<SpeedDialIcon />}
                >
                    {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick = {action.onclick}
                    />
                    ))}
                </SpeedDial>
            </Box>
            <Footer style={{minWidth: "100vh"}}/>
        </Box>

    </>);
}