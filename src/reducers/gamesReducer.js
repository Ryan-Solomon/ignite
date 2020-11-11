const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
  searched: [],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return { ...state, popular: action.payload.popular };
    case '':
      return;
    default:
      return { ...state };
  }
};
