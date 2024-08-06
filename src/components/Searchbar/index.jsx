import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Searchbar(props) {
  let label = null;
  label = props.events.map(event => event.title);
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={label}
      sx={{ width: 800, marginTop: 5}}
      renderInput={(label) => <TextField {...label} label="Eventos" />}
    />
  );
}
