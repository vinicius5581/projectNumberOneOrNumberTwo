
export const UPDATE_USER = "users:updateUser";
export const SHOW_ERROR = "users:showError";

export const updateUser = newUser => ({
  type: UPDATE_USER,
  payload: {
    user: newUser
  }
});

export const showError = () => {
  return {
    type: SHOW_ERROR,
    payload: { user: "ERROR" }
  };
};

export const apiRequest = () => {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => {
        console.log(err);
        dispatch(showError());
      });
  };
};