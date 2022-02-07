import { SET_ANSWER, SET_CURRENTANSWER, SET_INDEX } from "../actions/devtype";

const initialState = {
  currentValue: '',
  values: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  problem_index: 0
};


export default function davtype(state = initialState, action) {
  switch (action.type) {
    case SET_ANSWER:
      const newValues = [...state.values];
      newValues[action.id] = action.value;
      return {
          ...state,
          values: newValues
      };
    case SET_CURRENTANSWER:
        return {
            ...state,
            currentValue: action.value
        };
    case SET_INDEX:
        return {
            ...state,
            problem_index: action.id
        };
    default:
      return state;
  }
}
