import React from 'react';
import { withScriptjs, GoogleMap, Marker, withGoogleMap, InfoWindow } from "react-google-maps"
import { compose, withProps } from "recompose";
import { Typography } from 'antd';
import { API_KEY_LOCAL } from '../../../api-key';

const { Text, Title } = Typography;
const API_KEY = process.env.API_KEY || API_KEY_LOCAL
const MapsComponents = (props) => {
  const { lat, long, bpjsLocation } = props;
  return (
    <GoogleMap
      defaultZoom={13}
      defaultCenter={{ lat: lat, lng: long }}
    >
      {
        bpjsLocation.map((x, y) => {
          return (
            <Marker animation='' key={y} position={{ lat: x.lat, lng: x.lng }}>
              <InfoWindow>
                <Text>{x.nmppk}</Text>
              </InfoWindow>
            </Marker>
          )
        })
      }
      <Marker position={{ lat: lat, lng: long }}>
        <InfoWindow>
          <Title level={4}>You Are Here</Title>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  );
}


export default compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=" + API_KEY + "&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap,
)(MapsComponents);