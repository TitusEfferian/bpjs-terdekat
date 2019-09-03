import React from 'react';
import { withRouter } from 'react-router-dom';
import { Typography } from 'antd';
import { Button } from 'antd';
import './style.css';
const { Title, Text } = Typography;
const Home = (props) => {
  const { history } = props;

  const goToMaps = React.useCallback(() => {
    history.push('/maps')
  }, [history])

  return (
    <div className={'home-container'}>
      <Title level={1}>Praktik Dokter Pribadi BPJS Kesehatan</Title>
      <Button type="primary" icon="search" onClick={goToMaps}>
        Faskes 1 BPJS Terdekat
      </Button>
      <div className={'home-footer'}>
        <div>
          <Text>Ini adalah project untuk memudahkan mencari faskes 1 Praktik Dokter Pribadi yang terdekat dengan kita, <Text strong>dan tidak mengambil keuntungan apapun.</Text></Text>
        </div>
        <Text>-Titus Efferian-</Text>
      </div>
    </div>
  )
}

export default withRouter(Home)