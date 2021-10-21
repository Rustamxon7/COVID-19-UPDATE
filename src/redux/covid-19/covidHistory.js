const FETCH_LOADING = 'FETCH_LOADING';
const GET_HISTORY = 'GET_HISTORY';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: true,
  history: [],
};

export const fetchPostsLoading = () => ({
  type: FETCH_LOADING,
});

export const getHistory = (payload) => ({
  type: GET_HISTORY,
  payload,
});

export const fetchPostsError = () => ({
  type: FETCH_ERROR,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        history: [...state.history],
        loading: true,
      };
    case GET_HISTORY:
      return {
        loading: false,
        history: action.payload,
      };
    case FETCH_ERROR:
      return {
        history: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export const fetchPostsRequestHistory = (country) => async (dispatch) => {
  const today = new Date();
  const startingDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() - 7}`;
  const currentDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() - 1}`;
  const request = await fetch(`https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=${startingDate}&date_to=${currentDate}`);
  const result = await request.json();
  const totalhistory = result;
  const formatedHistory = Object.values(totalhistory);
  formatedHistory.push(totalhistory);
  dispatch(getHistory(formatedHistory));
};

// const getHistoryData = async (country) => {
//   const today = new Date();
//   const startingDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() - 7}`;
//   const currentDate = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate() - 1}`;
//   const request = await fetch(`https://api.covid19tracking.narrativa.com/api/country/${country}?date_from=${startingDate}&date_to=${currentDate}`);
//   const response = await request.json();
//   return response;
// };

// export default getHistoryData;

// const loadHistoryThunk = (current) => async (dispatch) => {
//   const data = await getHistoryData(current);
//   const { dates } = data;
//   if (dates) {
//     dispatch(loadHistory(dates));
//   }
// };

export default reducer;
