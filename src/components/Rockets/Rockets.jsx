import React, { useEffect } from 'react';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { setRockets } from '../../redux/rockets';
import Rocket from '../Rocket/Rocket';

function Rockets() {
  const dispatch = useDispatch();
  const fetchRockets = async () => {
    const response = await axios
      .get('https://api.spacexdata.com/v3/launches')
      .catch((err) => {
        console.log('Error', err);
      });
    dispatch(setRockets(response.data));
  };
  useEffect(() => {
    fetchRockets();
  }, []);

  return (
    <>
      <Container>
        <Row className="g-3">
          <Rocket />
        </Row>
      </Container>
    </>
  );
}

export default Rockets;
