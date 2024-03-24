import { Container, Typography, Box } from '@mui/material';
import Cardevent from '../../components/Cardevent';
import Navbar from '../../components/Navbar';
import Divider from '@mui/material/Divider';

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
                cep: '',

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
                cep: '',

            }
        }
    ];
    return (
        <Box >
            < Navbar />
                <Container>
                <Container >
                    <Typography>Divulgue seu evento</Typography>
                </Container>
                
                <Divider sx={{marginTop: 10, marginBottom: 10}}/>
                <Container sx={{display: 'flex', justifyContent: 'center'}}>
                    {
                        events.map((event) => (
                            <Cardevent title={event.title} date={event.date} ImageLink={event.ImageLink} description={event.description} locale={event.locale}/>  
                        ))
                    }
                </Container>
            </Container>
        </Box>
    );
}