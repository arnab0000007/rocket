import React from 'react';
import {
  Card, Col, ListGroup, ListGroupItem,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Rockets() {
  const { filteredRockets } = useSelector((state) => state.rockets);
  const renderRockets = filteredRockets.map((rocket) => {
    const {
      mission_name: MissionName,
      rocket: Rocket,
      launch_year: launchYear,
    } = rocket;
    return (
      <Col xs={6} md={4} key={MissionName}>
        <Card className="my-3 p-3 card text-center shadow-lg rounded">
          <Card.Img style={{ width: '130px' }} className="img rounded mx-auto d-block" src={rocket.links.mission_patch_small} />
          <Card.Body className="pb-0">
            <Card.Title>
              Mission:
              <span className="text-primary ps-1">
                { MissionName }
              </span>
            </Card.Title>
            <Card.Text>
              <h5>
                Launch Status:
                { rocket?.launch_failure_details?.time ? ' failed' : ' success' }
              </h5>
              <h5>
                Launch Year:
                { launchYear }
              </h5>
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush pt-0">
            <ListGroupItem>
              Rocket Name:
              <span className="ps-1 text-danger">{Rocket.rocket_name}</span>
            </ListGroupItem>
            <ListGroupItem>
              Rocket Type:
              <span className="ps-1">{Rocket.rocket_type}</span>
            </ListGroupItem>
            <ListGroupItem>
              Nationality:
              <span className="ps-1">
                {
                Rocket?.second_stage?.payloads[0]?.nationality
                }
              </span>
            </ListGroupItem>
            <ListGroupItem>
              Manufacturer:
              <span className="ps-1">
                {
                Rocket?.second_stage?.payloads[0]?.manufacturer
                }
              </span>
            </ListGroupItem>
            <ListGroupItem>
              Payload Type:
              <span className="ps-1">
                {
                Rocket?.second_stage?.payloads[0]?.payload_type
                }
              </span>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    );
  });

  return <>{renderRockets}</>;
}

export default Rockets;
