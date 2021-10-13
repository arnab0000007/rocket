import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setRockets } from '../../redux/rockets';

function Rockets() {
  const { rockets } = useSelector((state) => state.rockets);
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
    <div>
      <h1>{rockets.length}</h1>
    </div>
  );
}

export default Rockets;
