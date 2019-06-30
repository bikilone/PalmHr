import * as constants from "./constants";
import Picture from "../interfaces/picture.interface";

const initialState = {
  tags: [],
  imgs: [],
  isPending: false,
  error: "",
  authors: []
};

interface Action {
  type?: string;
  payload?: any;
}

const collectTags = (pictures: Picture[]) => {
  const tags: string[] = [];
  pictures.forEach((picture: Picture) => {
    // filtering out tags that already exists in tag array
    const newTags = picture.tags.filter(tag => !tags.includes(tag));
    tags.push(...newTags);
  });
  return tags;
};

const collectAuthors = (pictures: Picture[]) => {
  const authors: string[] = [];
  pictures.forEach((picture: Picture) => {
    // filtering out authors that already exists in authors array
    if (authors.includes(picture.author)) {
      // skip
    } else {
      authors.push(picture.author);
    }
  });
  return authors;
};

export const fetchImgs = (state = initialState, action: Action = {}) => {
  switch (action.type) {
    case constants.FETCH_IMGS_PENDING:
      return { ...state, isPending: true };
    case constants.FETCH_IMGS_SUCCESS:
      return {
        ...state,
        isPending: false,
        imgs: action.payload,
        tags: collectTags(action.payload),
        authors: collectAuthors(action.payload)
      };
    case constants.FETCH_IMGS_FAILED:
      return { ...state, error: action.payload, isPending: false };
    default:
      return state;
  }
};

const initialSearchFieldState = {
  searchField: ""
};

export const searchImgs = (
  state: any = initialSearchFieldState,
  action: Action = {}
) => {
  switch (action.type) {
    case constants.CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
