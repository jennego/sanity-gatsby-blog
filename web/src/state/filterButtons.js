const initialState = {
  isLimited: false,
  coatData: [],
};

const COAT_DATA_LOAD = "COAT_DATA_LOAD";

export const coatDataLoad = (data) => ({
  type: COAT_DATA_LOAD,
  data,
});

const FILTER_LIMITED = "FILTER_LIMITED";

export const filterLimited = (data) => ({
  type: FILTER_LIMITED,
  data,
});

const TOGGLE_ISLIMITED = "TOGGLE_ISLIMITED";

export const toggleIsLimited = (isLimited) => ({
  type: TOGGLE_ISLIMITED,
  isLimited,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ISLIMITED:
      return {
        ...state,
        isLimited: action.isLimited,
      };
    case FILTER_LIMITED:
      return {
        ...state,
        coatData: action.data,
      };
    case COAT_DATA_LOAD:
      return {
        ...state,
        coatData: action.data,
      };
    default:
      return state;
  }
};
