import React from 'react';
import {
  Row, Container, Col,
} from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import {
  filterRocketsByLaunchStatus,
  filterRocketsByUpcoming,
  filterRocketsByName,
  filterRocketsByDate,
} from '../../redux/rocketActions';

function Filter() {
  const {
    rockets,
    launchStatus,
    filteredRockets,
    isUpcoming,
    launchDate,
  } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  return (
    <Container className="py-5 bg-dark text-white">
      <Row>
        <Col xs={6} md={4}>
          <h6>Search Rocket by Name</h6>
          <input
            type="text"
            className="w-100"
            onChange={(event) => {
              dispatch(filterRocketsByName(
                rockets,
                event.target.value,
              ));
            }}
          />
        </Col>
        <Col xs={6} md={4}>
          <Row>
            <Col xs={6} md={4}>
              <h6>
                Launch Status:
              </h6>
              <select
                className="form-control"
                value={launchStatus}
                onChange={(event) => {
                  dispatch(filterRocketsByLaunchStatus(
                    rockets,
                    event.target.value,
                  ));
                }}
              >
                <option value="undefined">Success</option>
                <option value="false">Failure</option>
              </select>
            </Col>
            <Col xs={6} md={4}>
              <h6>
                is Upcoming?
              </h6>
              <select
                className="form-control"
                value={isUpcoming}
                onChange={(event) => {
                  dispatch(filterRocketsByUpcoming(
                    rockets,
                    event.target.value,
                  ));
                }}
              >
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </Col>
            <Col xs={6} md={4}>
              <h6>
                Launch Date
              </h6>
              <select
                className="form-control"
                value={launchDate}
                onChange={(event) => {
                  dispatch(filterRocketsByDate(
                    rockets,
                    event.target.value,
                  ));
                }}
              >
                <option value="week">Last Week</option>
                <option value="month">Last Month</option>
                <option value="year">Last Year</option>
              </select>
            </Col>
          </Row>
        </Col>
        <Col xs={6} md={4}>
          <h3 className="text-center">
            Rockets found:
            <span className="text-danger ps-3">{ filteredRockets.length }</span>
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Filter;
