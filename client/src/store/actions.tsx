import * as constants from "./constants";

export const fetchImgs = () => (dipsatch: any) => {
  dipsatch({ type: constants.FETCH_IMGS_PENDING });
  fetch("http://localhost:5000/pictures")
    .then(data => data.json())
    .then(res =>
      dipsatch({ type: constants.FETCH_IMGS_SUCCESS, payload: res.pictures })
    )
    .catch(error =>
      dipsatch({ type: constants.FETCH_IMGS_FAILED, payload: error })
    );
};

export const onSearch = (text: string) => {
  return {
    type: constants.CHANGE_SEARCH_FIELD,
    payload: text
  };
};
