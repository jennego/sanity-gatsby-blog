const initialState = {
  isLimited: false,
};

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
