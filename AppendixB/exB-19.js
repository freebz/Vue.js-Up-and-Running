export function updateUsers() {
  return (dispatch, getState) => {
    return fetch('/api/users')
      .then((res) => res.json())
      .then((users) => dispatch({ type: 'SEL_USERS', payload: users }));
  };
};
