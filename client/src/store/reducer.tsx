import * as constants from "./constants";
import Picture from "../interfaces/picture.interface";

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

const collectTags = (pictures: Picture[]) => {
  const tags: any[] = [];
  pictures.forEach((picture: Picture) => {
    // filtering out tags that already exists in tag array
    const newTags = picture.tags.filter(tag => !tags.includes(tag));
    tags.push(...newTags);
  });
  return tags;
};

export const fetcImgs = (state = initialState, action: Action = {}) => {
  switch (action.type) {
    case constants.FETCH_IMGS_PENDING:
      return { ...state, isPending: true };
    case constants.FETCH_IMGS_SUCCESS:
      return {
        ...state,
        isPending: false,
        imgs: action.payload,
        tags: collectTags(action.payload)
      };
    case constants.FETCH_IMGS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};
