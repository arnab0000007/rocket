import axios from 'axios';
import { rocketsSlice } from './rocketsSlice';

const {
  setRockets,
  setFilterdRocketsByLaunchStatus,
  setFilterdRocketsByUpcoming,
  setFilterdRocketsByName,
  setFilterdRocketsByDate,
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
  dispatch(setFilterdRocketsByName({
    payload: {
      items:
        rockets.filter((x) => {
          return x.rocket.rocket_name.toString().toUpperCase().indexOf(name.toUpperCase()) >= 0;
        }),
    },
  }));
};

export const filterRocketsByDate = (rockets, date) => (dispatch) => {
  const today = new Date();
  const lastWeekUnix = new Date().setDate(new Date().getDate() - 7);
  const lastMonthUnix = new Date().setMonth(new Date().getMonth() - 1);
  const lastYearUnix = new Date().setFullYear(new Date().getFullYear() - 1);

  let fromDate;

  switch (date) {
    case 'week':
      fromDate = new Date(lastWeekUnix).getTime();
      break;
    case 'month':
      fromDate = new Date(lastMonthUnix).getTime();
      break;
    case 'year':
      fromDate = new Date(lastYearUnix).getTime();
      break;
    default:
      // code block
  }
  dispatch(setFilterdRocketsByDate({
    date,
    payload: {
      items:
        rockets.filter((x) => {
          const time = new Date(x.launch_date_utc).getTime();
          return (fromDate < time && time < today);
        }),
    },
  }));
};
export default fetchRockets;
