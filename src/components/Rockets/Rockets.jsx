import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import fetchRockets from '../../redux/rocketActions';
import Rocket from '../Rocket/Rocket';

function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Row>
          <Rocket />
        </Row>
      </Container>
    </>
  );
}

export default Rockets;
