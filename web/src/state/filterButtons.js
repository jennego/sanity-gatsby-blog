const initialState = {
  isLimited: false,
  coatData: [],
  allCoats: [],
  category: [],
};

const COAT_DATA_LOAD = "COAT_DATA_LOAD";

export const coatDataLoad = (data) => ({
  type: COAT_DATA_LOAD,
  data,
});

const ALL_COAT_DATA_LOAD = "ALL_COAT_DATA_LOAD";

export const allCoatDataLoad = (data) => ({
  type: ALL_COAT_DATA_LOAD,
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

const SELECT_CATEGORY = "CATEGORY_SELECT";

export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  category,
});

const FILTER_CATEGORY = "FILTER_CATEGORY";

export const filterCategory = (filtered) => ({
  type: FILTER_CATEGORY,
  filtered,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_CATEGORY:
      return {
        ...state,
        coatData: action.filtered,
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        category: action.category,
      };
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
    case ALL_COAT_DATA_LOAD:
      return {
        ...state,
        allCoats: action.data,
      };
    default:
      return state;
  }
};
