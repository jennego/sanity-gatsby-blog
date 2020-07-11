const initialState = {
  isLimited: "all",
  hasResults: true,
  coatData: [],
  allCoats: [],
  category: [],
};

const NO_RESULTS = "NO_RESULTS";

export const noResults = (hasResults) => ({
  type: NO_RESULTS,
  hasResults,
});

const COAT_DATA_LOAD = "COAT_DATA_LOAD";

export const coatDataLoad = (data) => ({
  type: COAT_DATA_LOAD,
  data,
  hasResults: true,
});

const ALL_COAT_DATA_LOAD = "ALL_COAT_DATA_LOAD";

export const allCoatDataLoad = (data) => ({
  type: ALL_COAT_DATA_LOAD,
  data,
  hasResults: true,
});

const FILTER_LIMITED = "FILTER_LIMITED";

export const filterLimited = (data) => ({
  type: FILTER_LIMITED,
  data,
  hasResults: true,
});

const TOGGLE_ISLIMITED = "TOGGLE_ISLIMITED";

export const toggleIsLimited = (isLimited) => ({
  type: TOGGLE_ISLIMITED,
  isLimited,
  hasResults: true,
});

const SELECT_CATEGORY = "CATEGORY_SELECT";

export const selectCategory = (category) => ({
  type: SELECT_CATEGORY,
  category,
  hasResults: true,
});

const FILTER_CATEGORY = "FILTER_CATEGORY";

export const filterCategory = (filtered) => ({
  type: FILTER_CATEGORY,
  filtered,
  hasResults: true,
});

export default (state = initialState, action) => {
  switch (action.type) {
    case NO_RESULTS:
      return {
        ...state,
        hasResults: false,
      };
    case FILTER_CATEGORY:
      return {
        ...state,
        coatData: action.filtered,
        hasResults: true,
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
        hasResults: true,
      };
    case COAT_DATA_LOAD:
      return {
        ...state,
        coatData: action.data,
        hasResults: true,
      };
    case ALL_COAT_DATA_LOAD:
      return {
        ...state,
        allCoats: action.data,
        hasResults: true,
      };
    default:
      return state;
  }
};
