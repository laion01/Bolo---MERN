export const SET_ANSWER = "SET_ANSWER";
export const SET_INDEX = "SET_INDEX";
export const SET_CURRENTANSWER = "SET_CURRENTANSWER";

export function setAnswer(id, value) {
  return {
    type: SET_ANSWER,
    id, value
  };
}

export function setProblemIndex(id) {
  return {
    type: SET_INDEX,
    id
  };
}


export function setCurrentAnswer(value) {
  return {
    type: SET_CURRENTANSWER,
    value
  };
}