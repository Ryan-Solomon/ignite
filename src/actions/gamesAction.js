import axios from 'axios';
import { popularGamesUrl, upcomingGamesUrl, newGamesUrl } from '../api';

export const loadGames = () => async (dispatch) => {
  const popularData = await axios.get(popularGamesUrl());
  const newGamesData = await axios.get(newGamesUrl());
  const upcomingGamesData = await axios.get(upcomingGamesUrl());
  dispatch({
    type: 'FETCH_GAMES',
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingGamesData.data.results,
      newGames: newGamesData.data.results,
    },
  });
};
