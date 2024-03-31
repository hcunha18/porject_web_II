import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import Modalevent from '../Modalevent';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cardevent(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleClick = () => {
    console.log("alou")
  };

  return (
    <Card sx={{ maxWidth: 345, minWidth: 345, marginRight: 5 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.title}
        subheader={props.date}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.ImageLink}
        alt="Paella dish"
      />
      <CardContent>
        <Typography>Rua: {props.locale.rua}, Número: {props.locale.numero}. Bairro: {props.locale.bairro}</Typography>
        <Typography variant="body2" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      {/* <Button variant="contained" onClick={handleClick} >Ver Evento</Button> */}
      <Modalevent title={props.title} locale = {props.locale} ImageLink = {props.ImageLink}/>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
}