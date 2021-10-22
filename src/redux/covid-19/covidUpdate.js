const FETCH_LOADING = 'FETCH_LOADING';
const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_COUNTRIES_TOTAL = 'GET_COUNTRIES_TOTAL';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: true,
  data: [],
  total: [],
};

export const fetchPostsLoading = () => ({
  type: FETCH_LOADING,
});

export const getData = (payload) => ({
  type: GET_COUNTRIES,
  payload,
});

export const getTotal = (payload) => ({
  type: GET_COUNTRIES_TOTAL,
  payload,
});

export const fetchPostsError = () => ({
  type: FETCH_ERROR,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOADING:
      return {
        data: [...state.data],
        loading: true,
      };
    case GET_COUNTRIES:
      return {
        data: action.payload,
        total: [...state.total],
      };
    case GET_COUNTRIES_TOTAL:
      return {
        data: [...state.data],
        total: action.payload,
      };
    case FETCH_ERROR:
      return {
        data: [],
        total: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

let date = new Date();

const month = date.getMonth() + 1;
const day = date.getDate() - 2;
const year = date.getFullYear();
date = `${year}-${month}-${day}`;

export const fetchPostsRequestData = () => async (dispatch) => {
  const request = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}`);
  const result = await request.json();
  const pays = result.dates[date].countries;
  const formated = Object.values(pays);
  dispatch(getData(formated));
};

export const fetchPostsRequestTotal = () => async (dispatch) => {
  const request = await fetch(`https://api.covid19tracking.narrativa.com/api/${date}`);
  const result = await request.json();
  const totaly = result.total;
  const formatedTotal = [];
  formatedTotal.push(totaly);
  dispatch(getTotal(formatedTotal));
};

export default reducer;
