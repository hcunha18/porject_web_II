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

const PlusIcon = createSvgIcon(
    // credit: plus icon from https://heroicons.com/
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
    const events = [
        {
            title: "Festa da Arvore",
            date: "16 de Setembro de 2017",
            ImageLink: "https://th.bing.com/th/id/R.06db452fc12c1c27687799e8759bae75?rik=i2PMHbxsCyA2lw&riu=http%3a%2f%2fwww.aplausoeventos.com.br%2fwp-content%2fuploads%2f2019%2f11%2fevento77.jpg&ehk=FLkra0g1%2f91qxuDneGbfuXNUasTuWpk9whM5HybAUcw%3d&risl=&pid=ImgRaw&r=0",
            description: "",
            locale: {
                rua: 'Aristoteres Braga',
                numero: '777',
                bairro: 'São Martins',
                cidade: 'Leopoldina',
                cep: '36774104'
            }
        },
        {
            title: "Jantar Social",
            date: "25 de Novembro de 2020",
            ImageLink: "https://th.bing.com/th/id/R.d09cfe16687fcdfb2662c6c2cd2df406?rik=qtQZHJEpZH%2brqQ&riu=http%3a%2f%2fwww.cmoeventos.com.br%2fwp-content%2fuploads%2f2018%2f06%2fEspa%c3%a7o-para-eventos.jpg&ehk=LeimD83OmmO86bqwqfX3Pz%2bYP8t4k0CwUEVmJucLSqI%3d&risl=&pid=ImgRaw&r=0",
            description: "",
            locale: {
                rua: 'Jucelino Kubsheck',
                numero: '312',
                bairro: 'Santo Agostinho',
                cidade: 'Cataguases',
                cep: '36772258'
            }
        }, 
        {
            title: "Música ao vivo",
            date: "10 de junho de 2023",
            ImageLink: "https://img.freepik.com/psd-gratuitas/flyer-de-festa-de-dj-de-clube-postado-nas-midias-sociais_505751-4949.jpg?w=740&t=st=1711650596~exp=1711651196~hmac=03ad1675cddeb9b33fafd8d216c9f40ac8f518b943fdbfbc93be1fdc256b016f",
            description: "",
            locale: {
                rua: 'Ricardo Gigante',
                numero: '420',
                bairro: 'Santo Padre',
                cidade: 'Leopoldina',
                cep: '36062000'
            }
        },
        {
            title: "Música ao vivo",
            date: "10 de junho de 2023",
            ImageLink: "https://img.freepik.com/psd-gratuitas/flyer-de-festa-de-dj-de-clube-postado-nas-midias-sociais_505751-4949.jpg?w=740&t=st=1711650596~exp=1711651196~hmac=03ad1675cddeb9b33fafd8d216c9f40ac8f518b943fdbfbc93be1fdc256b016f",
            description: "",
            locale: {
                rua: 'Ricardo Gigante',
                numero: '420',
                bairro: 'Santo Padre',
                cidade: 'Leopoldina',
                cep: '36062000'
            }
        },
        {
            title: "Música ao vivo",
            date: "10 de junho de 2023",
            ImageLink: "https://img.freepik.com/psd-gratuitas/flyer-de-festa-de-dj-de-clube-postado-nas-midias-sociais_505751-4949.jpg?w=740&t=st=1711650596~exp=1711651196~hmac=03ad1675cddeb9b33fafd8d216c9f40ac8f518b943fdbfbc93be1fdc256b016f",
            description: "",
            locale: {
                rua: 'Ricardo Gigante',
                numero: '420',
                bairro: 'Santo Padre',
                cidade: 'Leopoldina',
                cep: '36062000'
            }
        }
        
    ];
    
    const actions = [
        { icon: <PlusIcon />, name: 'Criar Evento' },
        { icon: <SaveIcon />, name: 'Meus Eventos' },
        // { icon: <PrintIcon />, name: 'Print' },
        { icon: <ShareIcon />, name: 'Compartilhar Evento' },
      ];
    return (
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

                    <Searchbar />
                </Container>
                
                <Divider sx={{marginTop: 5, marginBottom: 5}}/>

                <Container>
                    <Typography sx={{fontSize:'20px', fontWeight:'bold', display:'flex', justifyContent:'center', textTransform:'uppercase', color: 'black' }}>
                        Eventos próximos de você!
                    </Typography>
                </Container>
                <Container sx={{display: 'grid', gridTemplateColumns: "repeat(3, 1fr)", columnGap: "10px", rowGap: "40px",justifyContent: 'center', marginTop: 3}}>
                    {
                        events.map((event) => (
                            <div >
                                <Cardevent title={event.title} date={event.date} ImageLink={event.ImageLink} description={event.description} locale={event.locale}/> 
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
                    />
                    ))}
                </SpeedDial>
            </Box>
            {/* <Divider sx={{marginTop: 5, marginBottom: 5, width: '100%'}}/> */}
            <Footer style={{minWidth: "100vh"}}/>
        </Box>
    );
}