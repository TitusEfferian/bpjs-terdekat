import React from 'react';
import { Loader } from '../../App';
import MapsComponents from './MapsComponents';

const Maps = (props) => {
  const [lat, setLat] = React.useState();
  const [long, setLong] = React.useState();
  const [bpjsLocation, setBpjsLocation] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  /**
   * get the user location
   */
  React.useEffect(() => {
    window.navigator.geolocation.getCurrentPosition((location) => {
      setLat(location.coords.latitude);
      setLong(location.coords.longitude)
    })
  }, [])
  /**
   * get bpjs location
   */
  React.useEffect(() => {
    if (lat && long) {
      fetch('https://bpjs-nearby.titusefferian.now.sh/routes/bpjs?latitude=' + lat + '&longitude=' + long)
        .then(result => result.json())
        .then(result => {
          setBpjsLocation(result)
          setLoading(false);
        })
    }

  }, [lat, long])

  if (loading) {
    return (<Loader />)
  }
  return(
    <MapsComponents lat={lat} long={long} bpjsLocation={bpjsLocation.row} />
  )

}

export default Maps;

