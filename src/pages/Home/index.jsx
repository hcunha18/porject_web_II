import Cardevent from '../../components/Cardevent';
import Navbar from '../../components/Navbar';
import Divider from '@mui/material/Divider';

export default function Home() {
    return (
        <>
            < Navbar />
            <Divider sx={{marginTop: 10, marginBottom: 10}}/>
            
            <Cardevent />
        </>
    );
}