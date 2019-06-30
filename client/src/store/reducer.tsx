import * as constants from "./constants";

const initialState = {
  tags: [
    "Biki",
    "Aki",
    "Djura",
    "Biki",
    "Aki",
    "Djura",
    "Biki",
    "Aki",
    "Djura",
    "Biki",
    "Aki",
    "Djura"
  ],
  imgs: [],
  isPending: false,
  error: ""
};

interface Action {
  type?: string;
  payload?: any;
}

export const fetcImgs = (state = initialState, action: Action = {}) => {
  switch (action.type) {
    case constants.FETCH_IMGS_PENDING:
      return { ...state, isPending: true };
    case constants.FETCH_IMGS_SUCCESS:
      return { ...state, isPending: false, imgs: action.payload };
    case constants.FETCH_IMGS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
