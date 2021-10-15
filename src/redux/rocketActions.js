import axios from 'axios';
import { rocketsSlice } from './rocketsSlice';

const {
  setRockets,
  setFilterdRocketsByLaunchStatus,
  setFilterdRocketsByUpcoming,
  setFilterdRocketsName,
} = rocketsSlice.actions;
const fetchRockets = () => async (dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/launches')
    .catch((err) => {
      console.log('Error', err);
    });
  dispatch(setRockets(response.data));
};
export const filterRocketsByLaunchStatus = (rockets, launchStatus) => (dispatch) => {
  dispatch(setFilterdRocketsByLaunchStatus({
    payload: {
      launchStatus,
      items:
      launchStatus === 'undefined'
        ? rockets.filter((x) => {
          return x?.launch_failure_details === undefined;
        })
        : rockets.filter((x) => {
          return x?.launch_failure_details?.time;
        }),
    },
  }));
};
export const filterRocketsByUpcoming = (rockets, isUpcoming) => (dispatch) => {
  dispatch(setFilterdRocketsByUpcoming({
    payload: {
      isUpcoming,
      items:
        rockets.filter((x) => {
          return x.upcoming.toString() === isUpcoming;
        }),
    },
  }));
};

export const filterRocketsByName = (rockets, name) => (dispatch) => {
  dispatch(setFilterdRocketsName({
    payload: {
      items:
        rockets.filter((x) => {
          return x.rocket.rocket_name.toString().toUpperCase().indexOf(name.toUpperCase()) >= 0;
        }),
    },
  }));
};
// x.launch_success.indexOf(launchStatus.toLowerCase()) >= 0
// launchStatus === ''
// ? rockets
// : rockets.filter(
//   (x) => x?.launch_success === launchStatus,
// ),
export default fetchRockets;
