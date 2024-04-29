import React, {useState, useEffect} from "react";
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

import './style.css'


export default function Map(props){
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyAOYxxwboN41I_MWG73Jv6OUYWWFDLAsP8"
    })
    const [position, setPosition] = useState({ lat: -0, lng: 0 });

    useEffect(() => {
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${props.cep}&key=AIzaSyAOYxxwboN41I_MWG73Jv6OUYWWFDLAsP8`;
        console.log(props.cep) 
        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.status === 'OK') {
                    const location = data.results[0].geometry.location;
                    setPosition({ lat: location.lat, lng: location.lng });
                } else {
                    console.log('Não foi possível obter as coordenadas para o CEP ' + props.cep);
                }
            })
            .catch(error => {
                console.error('Ocorreu um erro:', error);
            });
    }, [props.cep]);
    
    return(
        <div className="Mapa">
            
            {
                isLoaded ? (
                    <GoogleMap
                        mapContainerStyle={{width:'100%', height:'100%'}}
                        center={position}
                        zoom={15}
                    >
                    <Marker position={position}/>
                    </GoogleMap>
                ) : <></>
            }
        </div>
    )
}