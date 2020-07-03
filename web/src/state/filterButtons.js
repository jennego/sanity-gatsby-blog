const initialState = {
  isLimited: false,
  coatData: [],
};

const COAT_DATA_LOAD = "COAT_DATA_LOAD";

export const coatDataLoad = (data) => ({
  type: COAT_DATA_LOAD,
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
    case COAT_DATA_LOAD:
      return {
        ...state,
        coatData: action.data,
      };
    default:
      return state;
  }
};

// const initialState = {
//   isLimited: false,
// };

// const TOGGLE_LIMITED = "TOGGLE_LIMITED";

// export const toggleIsLimited = (isLimited) => ({
//   type: TOGGLE_LIMITED,
//   isLimited,
// });

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case TOGGLE_LIMITED:
//       return { ...state, isLimited: true };
//     case TOGGLE_LIMITED:
//       return { ...state, isLimited: false };
//     default:
//       return state;
//   }
// };
