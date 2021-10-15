import React from 'react';
import {
  Card, Col, ListGroup, ListGroupItem,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Rockets() {
  const { filteredRockets } = useSelector((state) => state.rockets);
  const renderRockets = filteredRockets.map((rocket) => {
    return (
      <Col xs={6} md={4} key={rocket.mission_name}>
        <Card className="my-3 p-3 card text-center shadow-lg rounded">
          <Card.Img style={{ width: '220px' }} className="img rounded mx-auto d-block" src={rocket.links.mission_patch_small} />
          <Card.Body>
            <Card.Title>
              Mission Name:
              <span className="text-primary">
                { rocket.mission_name }
              </span>
            </Card.Title>
            <Card.Text>
              <h4>
                Rocket Name:
                {rocket.rocket.rocket_name}
              </h4>
              <h5>
                Lauch Status:
                { rocket?.launch_failure_details?.time ? ' failed' : ' success' }
              </h5>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Cras justo odio</ListGroupItem>
            <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
            <ListGroupItem>Vestibulum at eros</ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return <>{renderRockets}</>;
}

export default Rockets;
